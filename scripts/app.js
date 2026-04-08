const state = {
    activeSection: null,
    activeTab: null
};

const sections = window.JOJO_DATA.sections;

const ui = {
    body: document.body,
    backdrop: document.getElementById("sheetBackdrop"),
    sheet: document.getElementById("appSheet"),
    sheetEyebrow: document.getElementById("sheetEyebrow"),
    sheetTitle: document.getElementById("sheetTitle"),
    sheetTabs: document.getElementById("sheetTabs"),
    sheetContent: document.getElementById("sheetContent"),
    closeButton: document.getElementById("sheetCloseBtn"),
    homeButtons: [...document.querySelectorAll("[data-section]")]
};

function isDesktop() {
    return window.matchMedia("(min-width: 900px)").matches;
}

function escapeHtml(value) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function renderListCard(item) {
    const placeholderClass = item.placeholder ? " placeholder-card" : "";
    const description = item.description ? `<p>${escapeHtml(item.description)}</p>` : "";
    const tag = item.href ? "a" : "article";
    const href = item.href
        ? item.external
            ? ` href="${item.href}" target="_blank" rel="noreferrer"`
            : ` href="${item.href}"`
        : "";
    const interactiveClass = item.href ? " list-card--link" : "";

    return `
        <${tag} class="list-card${placeholderClass}${interactiveClass}"${href}>
            <h3>${escapeHtml(item.title)}</h3>
            ${description}
        </${tag}>
    `;
}

function renderInfoCard(card) {
    return `
        <article class="section-card">
            <div class="section-card__title">
                <span class="card-badge">${escapeHtml(card.tag || "Informação")}</span>
                <span>${escapeHtml(card.title)}</span>
            </div>
            <p>${escapeHtml(card.description)}</p>
        </article>
    `;
}

function openSheet(sectionKey) {
    const section = sections[sectionKey];
    if (!section) {
        return;
    }

    state.activeSection = sectionKey;
    state.activeTab = section.type === "tabs" ? section.tabs[0]?.id || null : null;

    renderSheet();

    ui.sheet.classList.add("is-open");
    ui.backdrop.classList.remove("hidden");
    ui.sheet.setAttribute("aria-hidden", "false");
    ui.body.classList.add("sheet-open");
}

function closeSheet() {
    ui.sheet.classList.remove("is-open");
    ui.backdrop.classList.add("hidden");
    ui.sheet.setAttribute("aria-hidden", "true");
    ui.body.classList.remove("sheet-open");
    state.activeSection = null;
    state.activeTab = null;
}

function renderTabs(section) {
    if (section.type !== "tabs") {
        ui.sheetTabs.classList.add("hidden");
        ui.sheetTabs.innerHTML = "";
        return;
    }

    ui.sheetTabs.classList.remove("hidden");
    ui.sheetTabs.innerHTML = section.tabs
        .map((tab) => `
            <button
                class="tab-button ${tab.id === state.activeTab ? "is-active" : ""}"
                type="button"
                data-tab="${tab.id}"
                role="tab"
                aria-selected="${tab.id === state.activeTab}"
            >
                ${escapeHtml(tab.label)}
            </button>
        `)
        .join("");
}

function renderContent(section) {
    if (section.type === "tabs") {
        const activeTab = section.tabs.find((tab) => tab.id === state.activeTab) || section.tabs[0];
        ui.sheetContent.innerHTML = activeTab.items.map(renderListCard).join("");
        return;
    }

    if (section.type === "list") {
        ui.sheetContent.innerHTML = section.items.map(renderListCard).join("");
        return;
    }

    ui.sheetContent.innerHTML = section.cards.map(renderInfoCard).join("");
}

function renderSheet() {
    const section = sections[state.activeSection];
    if (!section) {
        return;
    }

    ui.sheetEyebrow.textContent = section.eyebrow;
    ui.sheetTitle.textContent = section.title;
    renderTabs(section);
    renderContent(section);
}

ui.homeButtons.forEach((button) => {
    button.addEventListener("click", () => openSheet(button.dataset.section));
});

ui.closeButton.addEventListener("click", closeSheet);
ui.backdrop.addEventListener("click", closeSheet);

ui.sheetTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-tab]");
    if (!button) {
        return;
    }

    state.activeTab = button.dataset.tab;
    renderSheet();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && state.activeSection) {
        closeSheet();
    }
});
