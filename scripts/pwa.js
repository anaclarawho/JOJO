let deferredInstallPrompt = null;

function getRootUrl() {
    const scriptUrl = new URL(document.currentScript.src, window.location.href);
    return new URL("../", scriptUrl);
}

function isStandaloneMode() {
    return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
}

function ensureFloatingButtonStyles() {
    if (document.getElementById("pwaFloatingStyles")) {
        return;
    }

    const style = document.createElement("style");
    style.id = "pwaFloatingStyles";
    style.textContent = `
        .install-app-button--floating {
            position: fixed;
            top: calc(env(safe-area-inset-top, 0px) + 14px);
            right: 14px;
            z-index: 999;
            min-height: 46px;
            padding: 0 16px;
            border: 0;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.96);
            color: #197bc0;
            font-family: "Archivo", "Inter", system-ui, sans-serif;
            font-size: 0.92rem;
            font-weight: 700;
            box-shadow: 0 12px 30px rgba(15, 75, 121, 0.16);
        }

        .install-app-button--floating:active {
            transform: scale(0.98);
        }

        @media (max-width: 680px) {
            .install-app-button--floating {
                top: calc(env(safe-area-inset-top, 0px) + 10px);
                right: 10px;
                min-height: 42px;
                padding: 0 14px;
                font-size: 0.84rem;
            }
        }
    `;

    document.head.appendChild(style);
}

function ensureInstallButton() {
    let button = document.getElementById("installAppBtn");

    if (!button) {
        ensureFloatingButtonStyles();
        button = document.createElement("button");
        button.type = "button";
        button.id = "installAppBtn";
        button.className = "install-app-button install-app-button--floating";
        button.hidden = true;
        button.textContent = "Baixar app JOJO";
        document.body.appendChild(button);
    }

    return button;
}

function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) {
        return;
    }

    const rootUrl = getRootUrl();
    const serviceWorkerUrl = new URL("service-worker.js", rootUrl);

    navigator.serviceWorker.register(serviceWorkerUrl, {
        scope: rootUrl.pathname
    }).catch((error) => {
        console.warn("Nao foi possivel registrar o modo offline.", error);
    });
}

function showInstallButton() {
    const button = ensureInstallButton();
    button.hidden = false;
}

function hideInstallButton() {
    const button = document.getElementById("installAppBtn");
    if (!button) {
        return;
    }
    button.hidden = true;
}

function bindInstallButton() {
    const button = ensureInstallButton();

    button.addEventListener("click", async () => {
        if (deferredInstallPrompt) {
            deferredInstallPrompt.prompt();
            const choice = await deferredInstallPrompt.userChoice;
            if (choice.outcome === "accepted") {
                hideInstallButton();
            }
            deferredInstallPrompt = null;
            return;
        }

        const isIos = /iphone|ipad|ipod/i.test(window.navigator.userAgent);
        const message = isIos
            ? "No iPhone ou iPad, abra no Safari, toque em Compartilhar e escolha 'Adicionar à Tela de Início'."
            : "Abra o menu do navegador e escolha 'Instalar app' ou 'Adicionar à tela inicial'.";

        window.alert(message);
    });
}

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    showInstallButton();
});

window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    hideInstallButton();
});

registerServiceWorker();
bindInstallButton();

if (!isStandaloneMode()) {
    showInstallButton();
}
