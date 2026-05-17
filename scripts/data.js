window.JOJO_DATA = {
    sections: {
        games: {
            eyebrow: "Jogos",
            title: "Escolha a área",
            type: "tabs",
            tabs: [
                {
                    id: "language",
                    label: "Língua Portuguesa",
                    items: [
                        {
                            title: "TESTE DE FLUÊNCIA LEITORA - PALAVRAS",
                            href: "./jogos/palavras/"
                        },
                        {
                            title: "TESTE DE FLUÊNCIA LEITORA - TEXTOS",
                            href: "./jogos/textos/"
                        }
                    ]
                },
                {
                    id: "math",
                    label: "Matemática",
                    items: [
                        {
                            title: "CABO DE GUERRA MATEMÁTICO",
                            href: "./jogos/cabo-de-guerra/"
                        },
                        {
                            title: "EM BREVE",
                            placeholder: true
                        }
                    ]
                }
            ]
        },
        tools: {
            eyebrow: "Ferramentas de apoio",
            title: "Recursos rápidos",
            type: "list",
            items: [
                {
                    title: "TIMER",
                    href: "./jogos/timer/"
                },
                {
                    title: "EM BREVE",
                    placeholder: true
                }
            ]
        },
        freeReading: {
            eyebrow: "Leitura livre",
            title: "Em breve",
            type: "info",
            cards: [
                {
                    title: "Leitura livre",
                    description: "Em breve.",
                    tag: "JOJO"
                }
            ]
        },
        about: {
            eyebrow: "Sobre",
            title: "JOJO",
            type: "info",
            cards: [
                {
                    title: "Plataforma JOJO",
                    description: "Jogos e ferramentas assistivas.",
                    tag: "JOJO"
                }
            ]
        }
    }
};
