window.JOJO_TIMER_DATA = {
    modes: {
        lanche: {
            id: "lanche",
            eyebrow: "FERRAMENTA DE APOIO",
            title: "HORA DO LANCHINHO",
            subtitle: "",
            cardDescription: "UM TIMER PARA AJUDAR NA ESPERA ATÉ O LANCHE.",
            accentClass: "is-lanche",
            emoji: "🍎",
            destinationAssets: [
                { src: "./assets/legumes.gif", label: "Legumes" },
                { src: "./assets/frutas.gif", label: "Frutas" },
                { src: "./assets/pizza.gif", label: "Pizza" },
                { src: "./assets/hamburguer.gif", label: "Hambúrguer" },
                { src: "./assets/tacos.gif", label: "Tacos" },
                { src: "./assets/carnes.gif", label: "Carnes" }
            ],
            progressTitle: "INDO PARA A COMIDA",
            progressMessages: [
                "Agora começou. Vamos caminhando com calma.",
                "Muito bem. O tempo já está andando.",
                "Metade do caminho! Continue esperando.",
                "Falta pouquinho. Já estamos quase lá.",
                "Chegou a hora do lanchinho!"
            ],
            finishTitle: "HORA DO LANCHINHO!",
            finishText: "O TEMPO ACABOU. AGORA É HORA DO LANCHINHO.",
            finishEmoji: "🍎✨",
            finishBadge: "PRONTO PARA O LANCHE",
            finishAssets: [
                { src: "./assets/coracao-com-fome.gif", label: "Coração com fome" }
            ]
        },
        casa: {
            id: "casa",
            eyebrow: "FERRAMENTA DE APOIO",
            title: "HORA DE IR PARA CASA",
            subtitle: "",
            cardDescription: "UM TIMER PARA A ESPERA ATÉ IR PARA CASA.",
            accentClass: "is-casa",
            emoji: "🏠",
            destinationLabel: "CHEGADA EM CASA",
            destinationAsset: "./assets/casa.gif",
            progressTitle: "VOLTANDO PARA CASA",
            progressMessages: [
                "Agora começou. Vamos esperar com tranquilidade.",
                "O tempo está passando direitinho.",
                "Metade do caminho. Já estamos avançando.",
                "Falta bem pouquinho para ir embora.",
                "Chegou a hora de ir pra casa!"
            ],
            finishTitle: "HORA DE IR PARA CASA!",
            finishText: "O TEMPO ACABOU. AGORA É HORA DE IR EMBORA.",
            finishEmoji: "🏠🎉",
            finishBadge: "PRONTO PARA A SAÍDA",
            finishAssets: [
                { src: "./assets/coracao-feliz.gif", label: "Coração feliz" },
                { src: "./assets/casa.gif", label: "Casa" }
            ]
        }
    },
    about: {
        title: "Como funciona",
        paragraphs: [
            "Este timer foi pensado para tornar a espera mais previsível para crianças que precisam de apoio visual e numérico.",
            "A criança acompanha o tempo em números grandes e também vê o estudante avançando até o destino escolhido."
        ],
        bullets: [
            "Escolha o tipo de timer e digite o tempo em horas e minutos.",
            "A trilha visual mostra claramente quanto já passou e quanto ainda falta.",
            "Os botões de pausar, continuar e recomeçar ajudam a adaptar o uso à rotina."
        ],
        footer: "Idealizado por Ana Clara Silva de Lima"
    }
};
