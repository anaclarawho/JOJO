const { testSeries, testsData } = window.JOJO_TEXTOS_DATA;

const YEAR_META = {
    1: {
        label: "1º Ano",
        eyebrow: "Ano escolar",
        icon: "🌱",
        subtitle: "Textos curtos, leitura guiada e começo da fluência."
    },
    2: {
        label: "2º Ano",
        eyebrow: "Ano escolar",
        icon: "🌿",
        subtitle: "Mais ritmo, precisão e perguntas de compreensão."
    },
    3: {
        label: "3º Ano",
        eyebrow: "Ano escolar",
        icon: "🌳",
        subtitle: "Séries A e B para percursos diferentes de leitura."
    },
    4: {
        label: "4º e 5º Ano",
        eyebrow: "Ano escolar",
        icon: "🌟",
        subtitle: "Sessões longas, leitura automática e mais desafio."
    }
};

const STEP_META = {
    text: {
        title: "Texto",
        hint: "Leia o texto, acompanhe o tempo e confira a compreensão."
    },
    words: {
        title: "Palavras",
        hint: "Treine a leitura rápida das palavras com foco e precisão."
    },
    pseudo: {
        title: "Pseudopalavras",
        hint: "Observe a decodificação com palavras inventadas."
    }
};

const state = {
    soundEnabled: true,
    audioContext: null,
    screen: "home",
    selectionView: "years",
    currentYear: null,
    currentSeries: null,
    currentTestIndex: null,
    currentStep: "text",
    timerId: null,
    seconds: 0,
    errors: 0,
    timeLimit: 30,
    warningPlayed: false,
    autoWordTimer: null,
    autoPseudoTimer: null,
    autoWordsRunning: false,
    autoPseudoRunning: false,
    currentWordIndex: 0,
    currentPseudoIndex: 0,
    wordsNotRead: [],
    pseudosNotRead: []
};

const ui = {
    body: document.body,
    homeScreen: document.getElementById("homeScreen"),
    selectionScreen: document.getElementById("selectionScreen"),
    sessionScreen: document.getElementById("sessionScreen"),
    infoModal: document.getElementById("infoModal"),
    openInfoBtn: document.getElementById("openInfoBtn"),
    selectionInfoBtn: document.getElementById("selectionInfoBtn"),
    closeInfoBtn: document.getElementById("closeInfoBtn"),
    toggleSoundBtn: document.getElementById("toggleSoundBtn"),
    selectionSoundBtn: document.getElementById("selectionSoundBtn"),
    sessionSoundBtn: document.getElementById("sessionSoundBtn"),
    selectionBackBtn: document.getElementById("selectionBackBtn"),
    selectionEyebrow: document.getElementById("selectionEyebrow"),
    selectionTitle: document.getElementById("selectionTitle"),
    selectionSubtitle: document.getElementById("selectionSubtitle"),
    selectionGrid: document.getElementById("selectionGrid"),
    sessionHomeBtn: document.getElementById("sessionHomeBtn"),
    sessionEyebrow: document.getElementById("sessionEyebrow"),
    sessionHeading: document.getElementById("sessionHeading"),
    sessionCode: document.getElementById("sessionCode"),
    sessionStepHint: document.getElementById("sessionStepHint"),
    backToSelectionBtn: document.getElementById("backToSelectionBtn"),
    stepNavigation: document.getElementById("stepNavigation"),
    timer: document.getElementById("timer"),
    timeLimitLabel: document.getElementById("timeLimitLabel"),
    errorCount: document.getElementById("errorCount"),
    maxErrorsLabel: document.getElementById("maxErrorsLabel"),
    textStep: document.getElementById("textStep"),
    textTitle: document.getElementById("textTitle"),
    readingText: document.getElementById("readingText"),
    criteriaMaxErrors: document.getElementById("criteriaMaxErrors"),
    criteriaMaxTime: document.getElementById("criteriaMaxTime"),
    questions: document.getElementById("questions"),
    checkAnswersBtn: document.getElementById("checkAnswersBtn"),
    results: document.getElementById("results"),
    wordsStep: document.getElementById("wordsStep"),
    wordsGrid: document.getElementById("wordsGrid"),
    autoWordsInterface: document.getElementById("autoWordsInterface"),
    wordCounter: document.getElementById("wordCounter"),
    totalWords: document.getElementById("totalWords"),
    startAutoWords: document.getElementById("startAutoWords"),
    markNotRead: document.getElementById("markNotRead"),
    autoWordsGrid: document.getElementById("autoWordsGrid"),
    notReadCount: document.getElementById("notReadCount"),
    notReadList: document.getElementById("notReadList"),
    pseudoStep: document.getElementById("pseudoStep"),
    pseudoGrid: document.getElementById("pseudoGrid"),
    autoPseudoInterface: document.getElementById("autoPseudoInterface"),
    pseudoCounter: document.getElementById("pseudoCounter"),
    totalPseudos: document.getElementById("totalPseudos"),
    startAutoPseudos: document.getElementById("startAutoPseudos"),
    markPseudoNotRead: document.getElementById("markPseudoNotRead"),
    autoPseudoGrid: document.getElementById("autoPseudoGrid"),
    pseudoNotReadCount: document.getElementById("pseudoNotReadCount"),
    pseudoNotReadList: document.getElementById("pseudoNotReadList"),
    startBtn: document.getElementById("startBtn"),
    stopBtn: document.getElementById("stopBtn"),
    errorBtn: document.getElementById("errorBtn"),
    resetBtn: document.getElementById("resetBtn")
};

function getYearMeta(year) {
    return YEAR_META[year] || YEAR_META[1];
}

function getCurrentSeriesTests() {
    if (!state.currentYear || !state.currentSeries) {
        return [];
    }

    return testsData[state.currentYear]?.[state.currentSeries] || [];
}

function getCurrentTest() {
    if (state.currentTestIndex === null) {
        return null;
    }

    return getCurrentSeriesTests()[state.currentTestIndex] || null;
}

function getSeriesLabel(seriesNumber) {
    return testSeries[seriesNumber]?.name || `Série ${seriesNumber}`;
}

function getAvailableSteps(testData) {
    const steps = ["text"];

    if (Array.isArray(testData.words_list) && testData.words_list.length > 0) {
        steps.push("words");
    }

    if (Array.isArray(testData.pseudo_words) && testData.pseudo_words.length > 0) {
        steps.push("pseudo");
    }

    return steps;
}

function parseTimeLimit(maxTimeLabel) {
    if (!maxTimeLabel) {
        return state.currentYear === 3 ? 42 : 30;
    }

    const matches = [...String(maxTimeLabel).matchAll(/\d+/g)].map((match) => Number(match[0]));
    if (matches.length === 0) {
        return state.currentYear === 3 ? 42 : 30;
    }

    const label = String(maxTimeLabel).toLowerCase();
    if (label.includes("min") && matches.length >= 2) {
        return matches[0] * 60 + matches[1];
    }

    if (label.includes("min")) {
        return matches[0] * 60;
    }

    return matches[0];
}

function formatSeconds(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll("\"", "&quot;")
        .replaceAll("'", "&#39;");
}

function switchScreen(nextScreen) {
    state.screen = nextScreen;
    ui.homeScreen.classList.toggle("hidden", nextScreen !== "home");
    ui.selectionScreen.classList.toggle("hidden", nextScreen !== "selection");
    ui.sessionScreen.classList.toggle("hidden", nextScreen !== "session");
    ui.body.classList.toggle("session-active", nextScreen === "session");
}

function updateSoundButtons() {
    const label = state.soundEnabled ? "Som ligado" : "Som desligado";
    const pressed = String(state.soundEnabled);
    ui.toggleSoundBtn.textContent = label;
    ui.selectionSoundBtn.textContent = label;
    ui.sessionSoundBtn.textContent = label;
    ui.toggleSoundBtn.setAttribute("aria-pressed", pressed);
    ui.selectionSoundBtn.setAttribute("aria-pressed", pressed);
    ui.sessionSoundBtn.setAttribute("aria-pressed", pressed);
}

function ensureAudioContext() {
    if (state.audioContext || !window.AudioContext) {
        return;
    }

    state.audioContext = new window.AudioContext();
}

function runWithAudio(callback) {
    ensureAudioContext();
    if (!state.audioContext) {
        return;
    }

    if (state.audioContext.state === "suspended") {
        state.audioContext.resume().then(() => callback(state.audioContext)).catch(() => {});
        return;
    }

    callback(state.audioContext);
}

function playTone({ frequency, duration, type = "sine", volume = 0.08, delay = 0 }) {
    if (!state.soundEnabled) {
        return;
    }

    runWithAudio((context) => {
        const oscillator = context.createOscillator();
        const gainNode = context.createGain();
        const now = context.currentTime + delay;

        oscillator.type = type;
        oscillator.frequency.setValueAtTime(frequency, now);
        gainNode.gain.setValueAtTime(0.0001, now);
        gainNode.gain.exponentialRampToValueAtTime(volume, now + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);

        oscillator.connect(gainNode);
        gainNode.connect(context.destination);
        oscillator.start(now);
        oscillator.stop(now + duration + 0.02);
    });
}

function playUiSound() {
    playTone({ frequency: 690, duration: 0.07, type: "triangle", volume: 0.08 });
}

function playStartSound() {
    playTone({ frequency: 470, duration: 0.11, type: "triangle", volume: 0.09 });
    playTone({ frequency: 620, duration: 0.15, type: "triangle", volume: 0.1, delay: 0.1 });
}

function playStopSound() {
    playTone({ frequency: 320, duration: 0.08, type: "triangle", volume: 0.08 });
    playTone({ frequency: 260, duration: 0.11, type: "triangle", volume: 0.08, delay: 0.08 });
}

function playErrorSound() {
    playTone({ frequency: 250, duration: 0.1, type: "sawtooth", volume: 0.08 });
}

function playWarningSound() {
    playTone({ frequency: 840, duration: 0.08, type: "square", volume: 0.08 });
    playTone({ frequency: 740, duration: 0.08, type: "square", volume: 0.08, delay: 0.1 });
}

function playSuccessSound() {
    playTone({ frequency: 520, duration: 0.1, type: "triangle", volume: 0.08 });
    playTone({ frequency: 680, duration: 0.12, type: "triangle", volume: 0.08, delay: 0.08 });
}

function playPartialSound() {
    playTone({ frequency: 460, duration: 0.08, type: "triangle", volume: 0.08 });
    playTone({ frequency: 560, duration: 0.09, type: "triangle", volume: 0.08, delay: 0.08 });
}

function playResetSound() {
    playTone({ frequency: 530, duration: 0.07, type: "triangle", volume: 0.07 });
}

function openInfoModal() {
    ui.infoModal.classList.remove("hidden");
    ui.infoModal.setAttribute("aria-hidden", "false");
    ui.body.classList.add("modal-open");
}

function closeInfoModal() {
    ui.infoModal.classList.add("hidden");
    ui.infoModal.setAttribute("aria-hidden", "true");
    ui.body.classList.remove("modal-open");
}

function toggleSound() {
    state.soundEnabled = !state.soundEnabled;
    updateSoundButtons();

    if (state.soundEnabled) {
        playUiSound();
    }
}

function resetTimerVisual() {
    ui.timer.textContent = "00:00";
    ui.timer.classList.remove("timer-warning");
    ui.errorCount.textContent = "0";
}

function stopTimer() {
    if (state.timerId) {
        window.clearInterval(state.timerId);
        state.timerId = null;
    }

    ui.startBtn.disabled = false;
    ui.stopBtn.disabled = true;
}

function renderTimerAndErrors() {
    ui.timer.textContent = formatSeconds(state.seconds);
    ui.errorCount.textContent = String(state.errors);
    ui.timer.classList.toggle("timer-warning", state.seconds > state.timeLimit);
}

function startTimer() {
    if (state.timerId) {
        return;
    }

    playStartSound();
    ui.startBtn.disabled = true;
    ui.stopBtn.disabled = false;

    state.timerId = window.setInterval(() => {
        state.seconds += 1;
        renderTimerAndErrors();

        if (state.seconds > state.timeLimit && !state.warningPlayed) {
            state.warningPlayed = true;
            playWarningSound();
        }
    }, 1000);
}

function addError() {
    state.errors += 1;
    renderTimerAndErrors();
    playErrorSound();
}

function clearQuestionSelections() {
    ui.questions.querySelectorAll("input[type='radio']").forEach((input) => {
        input.checked = false;
    });
}

function clearAutoTimers() {
    if (state.autoWordTimer) {
        window.clearTimeout(state.autoWordTimer);
        state.autoWordTimer = null;
    }

    if (state.autoPseudoTimer) {
        window.clearTimeout(state.autoPseudoTimer);
        state.autoPseudoTimer = null;
    }
}

function resetAutoState() {
    state.autoWordsRunning = false;
    state.autoPseudoRunning = false;
    state.currentWordIndex = 0;
    state.currentPseudoIndex = 0;
    state.wordsNotRead = [];
    state.pseudosNotRead = [];
}

function resetTest() {
    stopTimer();
    clearAutoTimers();
    resetAutoState();
    state.seconds = 0;
    state.errors = 0;
    state.warningPlayed = false;
    resetTimerVisual();
    ui.results.classList.add("hidden");
    ui.results.innerHTML = "";
    clearQuestionSelections();
    renderAutoWordsSection();
    renderAutoPseudoSection();
}

function goHome() {
    resetTest();
    state.selectionView = "years";
    state.currentYear = null;
    state.currentSeries = null;
    state.currentTestIndex = null;
    switchScreen("home");
}

function goBackFromSelection() {
    if (state.selectionView === "tests" && state.currentYear === 3 && Object.keys(testsData[3] || {}).length > 1) {
        renderSeriesSelection();
        return;
    }

    goHome();
}

function backToSelection() {
    resetTest();
    renderTestSelection();
    switchScreen("selection");
}

function renderSeriesSelection() {
    state.selectionView = "series";
    const yearMeta = getYearMeta(state.currentYear);
    const seriesKeys = Object.keys(testsData[state.currentYear] || {});
    ui.selectionEyebrow.textContent = `${yearMeta.eyebrow} • ${yearMeta.label}`;
    ui.selectionTitle.textContent = "Escolha a série";
    ui.selectionSubtitle.textContent = "Cada série organiza os testes em blocos prontos para aplicação.";
    ui.selectionGrid.dataset.mode = "series";
    ui.selectionGrid.innerHTML = seriesKeys
        .map((seriesKey) => {
            const seriesNumber = Number(seriesKey);
            const series = testSeries[seriesNumber];
            const count = testsData[state.currentYear][seriesNumber].length;

            return `
                <button class="selection-card ${seriesNumber === 2 ? "selection-card--series-b" : ""}" type="button" data-select-series="${seriesNumber}">
                    <span class="selection-card__icon">${seriesNumber === 1 ? "📘" : "🚀"}</span>
                    <span class="selection-card__badge">${escapeHtml(series.name)}</span>
                    <strong>${escapeHtml(series.name)}</strong>
                    <span class="selection-card__meta">${count} testes disponíveis</span>
                </button>
            `;
        })
        .join("");

    switchScreen("selection");
}

function renderTestSelection() {
    state.selectionView = "tests";
    const yearMeta = getYearMeta(state.currentYear);
    const seriesLabel = state.currentYear === 3 ? ` • ${getSeriesLabel(state.currentSeries)}` : "";
    const tests = getCurrentSeriesTests();

    ui.selectionEyebrow.textContent = `${yearMeta.eyebrow} • ${yearMeta.label}${seriesLabel}`;
    ui.selectionTitle.textContent = "Escolha o teste";
    ui.selectionSubtitle.textContent =
        state.currentYear === 4
            ? "Os testes deste nível já incluem leitura automática de palavras e pseudopalavras."
            : "Abra o teste e acompanhe texto, compreensão, palavras e pseudopalavras em uma mesma sessão.";
    ui.selectionGrid.dataset.mode = "tests";
    ui.selectionGrid.innerHTML = tests
        .map((testData, index) => {
            return `
                <button class="selection-card selection-card--test" type="button" data-select-test="${index}">
                    <span class="selection-card__badge">Teste ${index + 1}</span>
                    <strong>${escapeHtml(testData.title)}</strong>
                    <span class="selection-card__meta">${escapeHtml(testData.code)} • ${testData.words} palavras</span>
                </button>
            `;
        })
        .join("");

    switchScreen("selection");
}

function renderQuestions(testData) {
    ui.questions.innerHTML = testData.questions
        .map((question, questionIndex) => {
            const options = question.options
                .map((option, optionIndex) => {
                    const inputId = `question_${questionIndex}_${optionIndex}`;
                    return `
                        <label class="question-option" for="${inputId}">
                            <input id="${inputId}" type="radio" name="question_${questionIndex}" value="${optionIndex}">
                            <span>${String.fromCharCode(65 + optionIndex)}) ${escapeHtml(option)}</span>
                        </label>
                    `;
                })
                .join("");

            return `
                <article class="question-item">
                    <h5>${questionIndex + 1}. ${escapeHtml(question.q)}</h5>
                    <div class="question-options">${options}</div>
                </article>
            `;
        })
        .join("");
}

function renderTextStep(testData) {
    ui.textTitle.textContent = testData.title;
    ui.readingText.innerHTML = testData.text
        .split("\n")
        .map((line) => `<p>${escapeHtml(line)}</p>`)
        .join("");
    ui.criteriaMaxErrors.textContent = `Máximo de ${testData.maxErrors} erros`;
    ui.criteriaMaxTime.textContent = `Máximo de ${testData.maxTime}`;
    renderQuestions(testData);
    ui.results.classList.add("hidden");
    ui.results.innerHTML = "";
}

function renderStaticChipGrid(container, items, pseudo = false) {
    container.innerHTML = items
        .map((item, index) => {
            return `
                <article class="chip ${pseudo ? "chip--pseudo" : ""}">
                    <span class="chip__index">${index + 1}</span>
                    <strong class="chip__word">${escapeHtml(item)}</strong>
                </article>
            `;
        })
        .join("");
}

function buildAutoChipMarkup(items, currentIndex, missedIndexes, running, pseudo = false) {
    return items
        .map((item, index) => {
            const classes = ["chip"];

            if (pseudo) {
                classes.push("chip--pseudo");
            }

            if (running && index === currentIndex) {
                classes.push("is-current");
            } else if (missedIndexes.includes(index)) {
                classes.push("is-missed");
            } else if (index < currentIndex) {
                classes.push("is-read");
            }

            return `
                <article class="${classes.join(" ")}">
                    <span class="chip__index">${index + 1}</span>
                    <strong class="chip__word">${escapeHtml(item)}</strong>
                </article>
            `;
        })
        .join("");
}

function updateNotReadDisplay() {
    const testData = getCurrentTest();
    const labels = state.wordsNotRead.map((index) => `${index + 1}. ${testData.words_list[index]}`);
    ui.notReadCount.textContent = String(labels.length);
    ui.notReadList.textContent = labels.length > 0 ? labels.join(" • ") : "Nenhuma palavra marcada.";
}

function updatePseudoNotReadDisplay() {
    const testData = getCurrentTest();
    const labels = state.pseudosNotRead.map((index) => `${index + 1}. ${testData.pseudo_words[index]}`);
    ui.pseudoNotReadCount.textContent = String(labels.length);
    ui.pseudoNotReadList.textContent = labels.length > 0 ? labels.join(" • ") : "Nenhuma pseudopalavra marcada.";
}

function renderAutoWordsSection() {
    const testData = getCurrentTest();

    if (!testData || state.currentYear !== 4 || !Array.isArray(testData.words_list)) {
        ui.autoWordsInterface.classList.add("hidden");
        return;
    }

    ui.autoWordsInterface.classList.remove("hidden");
    ui.totalWords.textContent = String(testData.words_list.length);
    ui.wordCounter.textContent = String(
        state.autoWordsRunning
            ? Math.min(state.currentWordIndex + 1, testData.words_list.length)
            : state.currentWordIndex
    );
    ui.startAutoWords.disabled = state.autoWordsRunning;
    ui.markNotRead.disabled = !state.autoWordsRunning;
    ui.autoWordsGrid.innerHTML = buildAutoChipMarkup(
        testData.words_list,
        state.currentWordIndex,
        state.wordsNotRead,
        state.autoWordsRunning
    );
    updateNotReadDisplay();
}

function renderAutoPseudoSection() {
    const testData = getCurrentTest();

    if (!testData || state.currentYear !== 4 || !Array.isArray(testData.pseudo_words)) {
        ui.autoPseudoInterface.classList.add("hidden");
        return;
    }

    ui.autoPseudoInterface.classList.remove("hidden");
    ui.totalPseudos.textContent = String(testData.pseudo_words.length);
    ui.pseudoCounter.textContent = String(
        state.autoPseudoRunning
            ? Math.min(state.currentPseudoIndex + 1, testData.pseudo_words.length)
            : state.currentPseudoIndex
    );
    ui.startAutoPseudos.disabled = state.autoPseudoRunning;
    ui.markPseudoNotRead.disabled = !state.autoPseudoRunning;
    ui.autoPseudoGrid.innerHTML = buildAutoChipMarkup(
        testData.pseudo_words,
        state.currentPseudoIndex,
        state.pseudosNotRead,
        state.autoPseudoRunning,
        true
    );
    updatePseudoNotReadDisplay();
}

function renderWordsStep(testData) {
    if (state.currentYear === 4) {
        ui.wordsGrid.classList.add("hidden");
        renderAutoWordsSection();
        return;
    }

    ui.wordsGrid.classList.remove("hidden");
    ui.autoWordsInterface.classList.add("hidden");
    renderStaticChipGrid(ui.wordsGrid, testData.words_list || []);
}

function renderPseudoStep(testData) {
    if (state.currentYear === 4) {
        ui.pseudoGrid.classList.add("hidden");
        renderAutoPseudoSection();
        return;
    }

    ui.pseudoGrid.classList.remove("hidden");
    ui.autoPseudoInterface.classList.add("hidden");
    renderStaticChipGrid(ui.pseudoGrid, testData.pseudo_words || [], true);
}

function renderStepNavigation(testData) {
    const steps = getAvailableSteps(testData);

    if (!steps.includes(state.currentStep)) {
        state.currentStep = steps[0];
    }

    ui.stepNavigation.innerHTML = steps
        .map((step, index) => {
            const activeClass = step === state.currentStep ? "is-active" : "";
            return `
                <button class="step-button ${activeClass}" type="button" data-step="${step}">
                    ${index + 1}. ${STEP_META[step].title}
                </button>
            `;
        })
        .join("");

    ui.sessionStepHint.textContent = STEP_META[state.currentStep].hint;
}

function renderVisibleStep() {
    ui.textStep.classList.toggle("hidden", state.currentStep !== "text");
    ui.wordsStep.classList.toggle("hidden", state.currentStep !== "words");
    ui.pseudoStep.classList.toggle("hidden", state.currentStep !== "pseudo");
}

function renderSession() {
    const testData = getCurrentTest();
    if (!testData) {
        return;
    }

    const yearMeta = getYearMeta(state.currentYear);
    const yearLine = state.currentYear === 3
        ? `${yearMeta.label} • ${getSeriesLabel(state.currentSeries)}`
        : yearMeta.label;

    ui.sessionEyebrow.textContent = yearLine;
    ui.sessionHeading.textContent = testData.title;
    ui.sessionCode.textContent = `${testData.code} • ${testData.words} palavras`;
    ui.timeLimitLabel.textContent = `Meta: ${testData.maxTime}`;
    ui.maxErrorsLabel.textContent = `Meta: até ${testData.maxErrors} erros`;
    renderTextStep(testData);
    renderWordsStep(testData);
    renderPseudoStep(testData);
    renderStepNavigation(testData);
    renderVisibleStep();
    renderTimerAndErrors();
}

function openTest(testIndex) {
    state.currentTestIndex = testIndex;
    state.currentStep = "text";
    const testData = getCurrentTest();
    state.timeLimit = parseTimeLimit(testData.maxTime);
    resetTest();
    renderSession();
    switchScreen("session");
}

function selectYear(year) {
    state.currentYear = year;
    state.currentSeries = null;
    state.currentTestIndex = null;
    playUiSound();

    if (year === 3 && Object.keys(testsData[year] || {}).length > 1) {
        renderSeriesSelection();
        return;
    }

    state.currentSeries = 1;
    renderTestSelection();
}

function selectSeries(seriesNumber) {
    state.currentSeries = seriesNumber;
    state.currentTestIndex = null;
    playUiSound();
    renderTestSelection();
}

function showStep(step) {
    const testData = getCurrentTest();
    if (!testData) {
        return;
    }

    if (!getAvailableSteps(testData).includes(step)) {
        return;
    }

    state.currentStep = step;
    playUiSound();
    renderStepNavigation(testData);
    renderVisibleStep();
}

function checkAnswers() {
    const testData = getCurrentTest();
    if (!testData) {
        return;
    }

    let correctCount = 0;
    const resultLines = testData.questions
        .map((question, questionIndex) => {
            const selected = document.querySelector(`input[name="question_${questionIndex}"]:checked`);
            const isCorrect = selected && Number(selected.value) === question.correct;

            if (isCorrect) {
                correctCount += 1;
            }

            return {
                correctAnswer: question.options[question.correct],
                isCorrect,
                label: `Pergunta ${questionIndex + 1}`
            };
        })
        .map((result) => {
            return `
                <div class="result-line ${result.isCorrect ? "result-line--ok" : "result-line--error"}">
                    <span>${result.label}</span>
                    <span>${result.isCorrect ? "✅" : `❌ ${escapeHtml(result.correctAnswer)}`}</span>
                </div>
            `;
        })
        .join("");

    const perfect = correctCount === testData.questions.length;
    ui.results.innerHTML = `
        <div class="results-box__summary ${perfect ? "is-perfect" : "is-partial"}">
            ${correctCount}/${testData.questions.length} corretas
        </div>
        ${resultLines}
    `;
    ui.results.classList.remove("hidden");

    if (perfect) {
        playSuccessSound();
    } else {
        playPartialSound();
    }
}

function scheduleNextAutoWord() {
    const testData = getCurrentTest();
    if (!testData || !state.autoWordsRunning) {
        return;
    }

    renderAutoWordsSection();
    playUiSound();

    state.autoWordTimer = window.setTimeout(() => {
        state.currentWordIndex += 1;

        if (state.currentWordIndex >= testData.words_list.length) {
            state.autoWordsRunning = false;
            state.currentWordIndex = testData.words_list.length;
            renderAutoWordsSection();
            playSuccessSound();
            return;
        }

        scheduleNextAutoWord();
    }, 3000);
}

function startAutoWords() {
    const testData = getCurrentTest();
    if (!testData || !Array.isArray(testData.words_list) || testData.words_list.length === 0) {
        return;
    }

    if (state.autoPseudoTimer) {
        window.clearTimeout(state.autoPseudoTimer);
        state.autoPseudoTimer = null;
    }
    state.autoPseudoRunning = false;
    state.autoWordsRunning = true;
    state.currentWordIndex = 0;
    state.wordsNotRead = [];
    renderAutoPseudoSection();
    renderAutoWordsSection();
    playStartSound();
    scheduleNextAutoWord();
}

function markWordNotRead() {
    const testData = getCurrentTest();
    if (!testData || !state.autoWordsRunning) {
        return;
    }

    const index = state.currentWordIndex;
    if (index >= testData.words_list.length || state.wordsNotRead.includes(index)) {
        return;
    }

    state.wordsNotRead = [...state.wordsNotRead, index];
    renderAutoWordsSection();
    playErrorSound();
}

function scheduleNextAutoPseudo() {
    const testData = getCurrentTest();
    if (!testData || !state.autoPseudoRunning) {
        return;
    }

    renderAutoPseudoSection();
    playUiSound();

    state.autoPseudoTimer = window.setTimeout(() => {
        state.currentPseudoIndex += 1;

        if (state.currentPseudoIndex >= testData.pseudo_words.length) {
            state.autoPseudoRunning = false;
            state.currentPseudoIndex = testData.pseudo_words.length;
            renderAutoPseudoSection();
            playSuccessSound();
            return;
        }

        scheduleNextAutoPseudo();
    }, 3000);
}

function startAutoPseudos() {
    const testData = getCurrentTest();
    if (!testData || !Array.isArray(testData.pseudo_words) || testData.pseudo_words.length === 0) {
        return;
    }

    if (state.autoWordTimer) {
        window.clearTimeout(state.autoWordTimer);
        state.autoWordTimer = null;
    }
    state.autoWordsRunning = false;
    state.autoPseudoRunning = true;
    state.currentPseudoIndex = 0;
    state.pseudosNotRead = [];
    renderAutoWordsSection();
    renderAutoPseudoSection();
    playStartSound();
    scheduleNextAutoPseudo();
}

function markPseudoNotRead() {
    const testData = getCurrentTest();
    if (!testData || !state.autoPseudoRunning) {
        return;
    }

    const index = state.currentPseudoIndex;
    if (index >= testData.pseudo_words.length || state.pseudosNotRead.includes(index)) {
        return;
    }

    state.pseudosNotRead = [...state.pseudosNotRead, index];
    renderAutoPseudoSection();
    playErrorSound();
}

ui.openInfoBtn.addEventListener("click", openInfoModal);
ui.selectionInfoBtn.addEventListener("click", openInfoModal);
ui.closeInfoBtn.addEventListener("click", closeInfoModal);
ui.infoModal.addEventListener("click", (event) => {
    if (event.target === ui.infoModal || event.target.classList.contains("modal__backdrop")) {
        closeInfoModal();
    }
});

ui.toggleSoundBtn.addEventListener("click", toggleSound);
ui.selectionSoundBtn.addEventListener("click", toggleSound);
ui.sessionSoundBtn.addEventListener("click", toggleSound);
ui.selectionBackBtn.addEventListener("click", goBackFromSelection);
ui.sessionHomeBtn.addEventListener("click", goHome);
ui.backToSelectionBtn.addEventListener("click", backToSelection);
ui.checkAnswersBtn.addEventListener("click", checkAnswers);
ui.startBtn.addEventListener("click", startTimer);
ui.stopBtn.addEventListener("click", () => {
    stopTimer();
    playStopSound();
});
ui.errorBtn.addEventListener("click", addError);
ui.resetBtn.addEventListener("click", () => {
    resetTest();
    playResetSound();
});
ui.startAutoWords.addEventListener("click", startAutoWords);
ui.markNotRead.addEventListener("click", markWordNotRead);
ui.startAutoPseudos.addEventListener("click", startAutoPseudos);
ui.markPseudoNotRead.addEventListener("click", markPseudoNotRead);

document.querySelectorAll("[data-year]").forEach((button) => {
    button.addEventListener("click", () => {
        ensureAudioContext();
        selectYear(Number(button.dataset.year));
    });
});

ui.selectionGrid.addEventListener("click", (event) => {
    const seriesButton = event.target.closest("[data-select-series]");
    if (seriesButton) {
        selectSeries(Number(seriesButton.dataset.selectSeries));
        return;
    }

    const testButton = event.target.closest("[data-select-test]");
    if (testButton) {
        ensureAudioContext();
        playUiSound();
        openTest(Number(testButton.dataset.selectTest));
    }
});

ui.stepNavigation.addEventListener("click", (event) => {
    const button = event.target.closest("[data-step]");
    if (!button) {
        return;
    }

    showStep(button.dataset.step);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !ui.infoModal.classList.contains("hidden")) {
        closeInfoModal();
        return;
    }

    if (state.screen !== "session") {
        return;
    }

    if (event.key === "Escape") {
        event.preventDefault();
        backToSelection();
        return;
    }

    if ((event.key === "Enter" || event.code === "Space") && !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) {
        event.preventDefault();
        if (!state.timerId) {
            startTimer();
        } else {
            stopTimer();
            playStopSound();
        }
        return;
    }

    if (event.key.toLowerCase() === "e") {
        event.preventDefault();
        addError();
    }
});

resetTimerVisual();
updateSoundButtons();
