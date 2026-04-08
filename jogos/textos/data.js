window.JOJO_TEXTOS_DATA = (() => {
const testSeries = {
            1: { name: "Série A", color: "bg-indigo-500 hover:bg-indigo-600" },
            2: { name: "Série B", color: "bg-yellow-500 hover:bg-yellow-600" }
        };

        const testsData = {
            1: { // 1º ano
                1: [ // Série A
                {
                    title: "A BONECA DE BELA",
                    code: "1AAVD25N1",
                    words: 30,
                    maxErrors: 3,
                    maxTime: "30 segundos",
                    text: "BELA TEM UMA BONECA.\nA BONECA DA BELA É BONITA.\nBELA GOSTA DA SUA BONECA.\nO NOME DA BONECA DA BELA É LILI.\nA LILI FICA NA CAMA DA BELA.",
                    questions: [
                        { q: "QUAL É O BRINQUEDO DA BELA?", options: ["UMA BONECA", "UM CARRINHO", "UMA BOLA"], correct: 0 },
                        { q: "COMO É O NOME DA BONECA?", options: ["MARIA", "LILI", "ANA"], correct: 1 },
                        { q: "ONDE A LILI FICA?", options: ["NO CHÃO", "NA MESA", "NA CAMA DA BELA"], correct: 2 }
                    ],
                    words_list: ["DÓ", "NOVE", "BELA", "TELEFONE", "MOLA", "MÁ", "NOVELA", "PULO", "BANANA", "AMARELA", "LATA", "DADO"],
                    pseudo_words: ["LOPI", "MEVO", "RUTAN", "VARECO", "PILA", "NUBEL", "SEVOR", "TAMU", "GRIPO", "ZORECA", "DULAN", "TEFO"]
                },
                {
                    title: "O GATO MIMI",
                    code: "1AAVD25N2",
                    words: 30,
                    maxErrors: 3,
                    maxTime: "30 segundos",
                    text: "MIMI É UM GATO PEQUENO.\nO GATO MIMI É MUITO FOFO.\nMIMI GOSTA DE LEITE E PEIXE.\nELE DORME NA CAMA DO DAVI.\nO DAVI AMA O SEU GATO MIMI.",
                    questions: [
                        { q: "COMO É O GATO MIMI?", options: ["GRANDE E BRAVO", "PEQUENO E FOFO", "GORDO E PREGUIÇOSO"], correct: 1 },
                        { q: "O QUE O MIMI GOSTA DE COMER?", options: ["RAÇÃO E ÁGUA", "LEITE E PEIXE", "CARNE E OSSO"], correct: 1 },
                        { q: "ONDE O MIMI DORME?", options: ["NO SOFÁ", "NO QUINTAL", "NA CAMA DO DAVI"], correct: 2 }
                    ],
                    words_list: ["SÓ", "DEDO", "GATO", "BONITO", "VIDA", "LÁ", "MENINA", "FADA", "TOMATE", "VIOLETA", "PATO", "FOGO"],
                    pseudo_words: ["TEVI", "NALO", "BUTAN", "MELECO", "DILA", "GUBEL", "REVOR", "LAMU", "CRIPO", "MORECA", "FULAN", "PEFO"]
                },
                {
                    title: "A CASA DO JOÃO",
                    code: "1AAVD25N3",
                    words: 30,
                    maxErrors: 3,
                    maxTime: "30 segundos",
                    text: "JOÃO MORA EM UMA CASA AZUL.\nA CASA DO JOÃO TEM UM JARDIM.\nNO JARDIM TEM FLORES BONITAS.\nJOÃO REGA AS FLORES TODO DIA.\nELE GOSTA MUITO DA SUA CASA.",
                    questions: [
                        { q: "DE QUE COR É A CASA DO JOÃO?", options: ["VERMELHA", "VERDE", "AZUL"], correct: 2 },
                        { q: "O QUE TEM NO JARDIM?", options: ["ÁRVORES GRANDES", "FLORES BONITAS", "PEDRAS COLORIDAS"], correct: 1 },
                        { q: "O QUE JOÃO FAZ TODO DIA?", options: ["REGA AS FLORES", "CORTA A GRAMA", "PLANTA SEMENTES"], correct: 0 }
                    ],
                    words_list: ["PÉ", "CASA", "JOÃO", "JARDIM", "FLOR", "CÉU", "MENINO", "BOLO", "SAPATO", "BONECA", "DADO", "FITA"],
                    pseudo_words: ["GEVI", "PALO", "CUTAN", "VELECO", "TILA", "HUBEL", "SEVOR", "NAMU", "DRIPO", "LORECA", "BULAN", "MEFO"]
                },
                {
                    title: "O CACHORRO REX",
                    code: "1AAVD25N4",
                    words: 30,
                    maxErrors: 3,
                    maxTime: "30 segundos",
                    text: "REX É UM CACHORRO GRANDE.\nO REX TEM PELO MARROM.\nELE GOSTA DE BRINCAR NO QUINTAL.\nREX É MUITO AMIGO DA ANA.\nANA E REX BRINCAM JUNTOS.",
                    questions: [
                        { q: "COMO É O CACHORRO REX?", options: ["PEQUENO", "MÉDIO", "GRANDE"], correct: 2 },
                        { q: "DE QUE COR É O PELO DO REX?", options: ["PRETO", "MARROM", "BRANCO"], correct: 1 },
                        { q: "QUEM É AMIGA DO REX?", options: ["A MARIA", "A ANA", "A CARLA"], correct: 1 }
                    ],
                    words_list: ["VÓ", "PELO", "REX", "QUINTAL", "BOLA", "MÃO", "MENINA", "CAMA", "TOALHA", "PANELA", "GATO", "FACA"],
                    pseudo_words: ["REVI", "TALO", "DUTAN", "PELECO", "VILA", "JUBEL", "TEVOR", "RAMU", "GRIPO", "NORECA", "CULAN", "LEFO"]
                },
                {
                    title: "A ESCOLA DA MARIA",
                    code: "1AAVD25N5",
                    words: 30,
                    maxErrors: 3,
                    maxTime: "30 segundos",
                    text: "MARIA VAI PARA A ESCOLA.\nA ESCOLA DA MARIA É GRANDE.\nNA ESCOLA TEM MUITOS AMIGOS.\nMARIA GOSTA DE ESTUDAR E BRINCAR.\nELA É UMA ALUNA MUITO BOA.",
                    questions: [
                        { q: "COMO É A ESCOLA DA MARIA?", options: ["PEQUENA", "GRANDE", "MÉDIA"], correct: 1 },
                        { q: "O QUE TEM NA ESCOLA?", options: ["POUCOS ALUNOS", "MUITOS AMIGOS", "APENAS PROFESSORES"], correct: 1 },
                        { q: "DO QUE MARIA GOSTA?", options: ["SÓ DE BRINCAR", "DE ESTUDAR E BRINCAR", "SÓ DE ESTUDAR"], correct: 1 }
                    ],
                    words_list: ["TU", "ESCOLA", "MARIA", "AMIGO", "LIVRO", "SIM", "MENINA", "MESA", "CADEIRA", "JANELA", "LÁPIS", "FOLHA"],
                    pseudo_words: ["BEVI", "SALO", "FUTAN", "MELECO", "PILA", "KUBEL", "REVOR", "TAMU", "CRIPO", "PORECA", "DULAN", "NEFO"]
                },
                {
                    title: "O PÁSSARO PIPO",
                    code: "1AAVD25N6",
                    words: 30,
                    maxErrors: 3,
                    maxTime: "30 segundos",
                    text: "PIPO É UM PÁSSARO AMARELO.\nELE MORA EM UMA GAIOLA.\nPIPO GOSTA DE CANTAR DE MANHÃ.\nA DONA DO PIPO É A CARLA.\nCARLA CUIDA BEM DO PIPO.",
                    questions: [
                        { q: "DE QUE COR É O PÁSSARO PIPO?", options: ["VERDE", "AMARELO", "AZUL"], correct: 1 },
                        { q: "ONDE O PIPO MORA?", options: ["EM UMA ÁRVORE", "EM UMA GAIOLA", "EM UM NINHO"], correct: 1 },
                        { q: "QUEM É A DONA DO PIPO?", options: ["A CARLA", "A MARIA", "A ANA"], correct: 0 }
                    ],
                    words_list: ["NÓ", "PÁSSARO", "PIPO", "GAIOLA", "MANHÃ", "SOL", "MENINA", "NINHO", "SEMENTE", "ÁGUA", "CANTO", "VENTO"],
                    pseudo_words: ["DEVI", "NALO", "GUTAN", "RELECO", "TILA", "LUBEL", "SEVOR", "PAMU", "FRIPO", "QORECA", "BULAN", "TEFO"]
                },
                {
                    title: "A BICICLETA DO PEDRO",
                    code: "1AAVD25N7",
                    words: 30,
                    maxErrors: 3,
                    maxTime: "30 segundos",
                    text: "PEDRO TEM UMA BICICLETA NOVA.\nA BICICLETA É VERMELHA E PRETA.\nPEDRO ANDA DE BICICLETA NO PARQUE.\nELE USA CAPACETE PARA SE PROTEGER.\nPEDRO SE DIVERTE MUITO.",
                    questions: [
                        { q: "COMO É A BICICLETA DO PEDRO?", options: ["VELHA E AZUL", "NOVA, VERMELHA E PRETA", "PEQUENA E VERDE"], correct: 1 },
                        { q: "ONDE PEDRO ANDA DE BICICLETA?", options: ["NA RUA", "NO PARQUE", "EM CASA"], correct: 1 },
                        { q: "O QUE PEDRO USA PARA SE PROTEGER?", options: ["ÓCULOS", "UM CAPACETE", "LUVAS"], correct: 1 }
                    ],
                    words_list: ["CHÁ", "BICICLETA", "PEDRO", "PARQUE", "CAPACETE", "RUA", "MENINO", "RODA", "PEDAL", "FREIO", "SINO", "PNEU"],
                    pseudo_words: ["FEVI", "RALO", "HUTAN", "SELECO", "VILA", "MUBEL", "TEVOR", "SAMU", "GRIPO", "RORECA", "FULAN", "PEFO"]
                },
                {
                    title: "A FESTA DA JULIA",
                    code: "1AAVD25N8",
                    words: 30,
                    maxErrors: 3,
                    maxTime: "30 segundos",
                    text: "HOJE É ANIVERSÁRIO DA JULIA.\nELA VAI FAZER UMA FESTA.\nVÃO VIR MUITOS AMIGOS.\nTERÁ BOLO, DOCES E REFRIGERANTE.\nJULIA ESTÁ MUITO FELIZ.",
                    questions: [
                        { q: "O QUE JULIA VAI FAZER HOJE?", options: ["IR À ESCOLA", "UMA FESTA DE ANIVERSÁRIO", "VISITAR A VOVÓ"], correct: 1 },
                        { q: "QUEM VAI VIR NA FESTA?", options: ["APENAS A FAMÍLIA", "MUITOS AMIGOS", "NINGUÉM"], correct: 1 },
                        { q: "O QUE TERÁ NA FESTA?", options: ["APENAS BOLO", "BOLO, DOCES E REFRIGERANTE", "SÓ REFRIGERANTE"], correct: 1 }
                    ],
                    words_list: ["JÁ", "FESTA", "JULIA", "BOLO", "DOCE", "VEM", "MENINA", "VELA", "PRESENTE", "BALÃO", "MÚSICA", "DANÇA"],
                    pseudo_words: ["GEVI", "TALO", "CUTAN", "VELECO", "PILA", "NUBEL", "REVOR", "LAMU", "DRIPO", "SORECA", "DULAN", "MEFO"]
                },
                {
                    title: "O JARDIM DA VOVÓ",
                    code: "1AAVD25N9",
                    words: 30,
                    maxErrors: 3,
                    maxTime: "30 segundos",
                    text: "A VOVÓ TEM UM JARDIM LINDO.\nNELE TEM ROSAS E MARGARIDAS.\nAS FLORES SÃO MUITO COLORIDAS.\nA VOVÓ REGA AS PLANTAS.\nELA GOSTA MUITO DE FLORES.",
                    questions: [
                        { q: "COMO É O JARDIM DA VOVÓ?", options: ["PEQUENO", "LINDO", "FEIO"], correct: 1 },
                        { q: "QUE FLORES TEM NO JARDIM?", options: ["ROSAS E MARGARIDAS", "TULIPAS E GIRASSÓIS", "APENAS ROSAS"], correct: 0 },
                        { q: "O QUE A VOVÓ FAZ NO JARDIM?", options: ["CORTA AS FLORES", "REGA AS PLANTAS", "PLANTA ÁRVORES"], correct: 1 }
                    ],
                    words_list: ["VÔ", "JARDIM", "VOVÓ", "ROSA", "FLOR", "COR", "SENHORA", "TERRA", "REGADOR", "SEMENTE", "FOLHA", "PERFUME"],
                    pseudo_words: ["REVI", "PALO", "DUTAN", "MELECO", "TILA", "GUBEL", "SEVOR", "NAMU", "CRIPO", "LORECA", "BULAN", "NEFO"]
                },
                {
                    title: "O PEIXE NEMO",
                    code: "1AAVD25N10",
                    words: 30,
                    maxErrors: 3,
                    maxTime: "30 segundos",
                    text: "NEMO É UM PEIXE LARANJA.\nELE MORA EM UM AQUÁRIO.\nO AQUÁRIO TEM ÁGUA LIMPA.\nNEMO NADA O DIA TODO.\nELE É MUITO ESPERTO E RÁPIDO.",
                    questions: [
                        { q: "DE QUE COR É O PEIXE NEMO?", options: ["AZUL", "LARANJA", "VERDE"], correct: 1 },
                        { q: "ONDE NEMO MORA?", options: ["NO MAR", "EM UM AQUÁRIO", "EM UM LAGO"], correct: 1 },
                        { q: "COMO É NEMO?", options: ["LENTO E PREGUIÇOSO", "ESPERTO E RÁPIDO", "GRANDE E FORTE"], correct: 1 }
                    ],
                    words_list: ["EU", "PEIXE", "NEMO", "AQUÁRIO", "ÁGUA", "MAR", "ANIMAL", "NADO", "COMIDA", "PEDRA", "PLANTA", "VIDRO"],
                    pseudo_words: ["BEVI", "SALO", "FUTAN", "RELECO", "VILA", "KUBEL", "TEVOR", "RAMU", "GRIPO", "PORECA", "FULAN", "TEFO"]
                }
                ]
            },
            2: { // 2º ano
                1: [ // Série A
                {
                    title: "A BOLA DO JUCA",
                    code: "2AAVD25N1",
                    words: 40,
                    maxErrors: 4,
                    maxTime: "30 segundos",
                    text: "JUCA TEM UMA BOLA COLORIDA.\nA BOLA DO JUCA É AZUL E AMARELA.\nJUCA JOGA BOLA COM O DITO E COM A LILI.\nJUCA GANHOU A BOLA NO NATAL.\nA BOLA DO JUCA É BONITA. TODOS QUEREM JOGAR COM ELA.",
                    questions: [
                        { q: "QUAL É A COR DA BOLA DO JUCA?", options: ["VERMELHA E VERDE", "AZUL E AMARELA", "PRETA E BRANCA"], correct: 1 },
                        { q: "COM QUEM O JUCA JOGA BOLA?", options: ["COM O DITO E A LILI", "COM A MARIA E O PEDRO", "COM O JOÃO E A ANA"], correct: 0 },
                        { q: "QUANDO O JUCA GANHOU A BOLA?", options: ["NO SEU ANIVERSÁRIO", "NO NATAL", "NA PÁSCOA"], correct: 1 }
                    ],
                    words_list: ["LÁ", "PÉ", "BONÉ", "PULA", "LOBO", "NOME", "VILA", "BATIDA", "MENINO", "POMADA", "NOVIDADE", "AMARELO"],
                    pseudo_words: ["LOPI", "MEVO", "RUTAN", "VARECO", "PILA", "NUBEL", "SEVOR", "TAMU", "GRIPO", "ZORECA", "DULAN", "TEFO"]
                },
                {
                    title: "O PASSEIO NO ZOOLÓGICO",
                    code: "2AAVD25N2",
                    words: 40,
                    maxErrors: 4,
                    maxTime: "30 segundos",
                    text: "CARLOS FOI AO ZOOLÓGICO COM SUA FAMÍLIA.\nELES VIRAM MUITOS ANIMAIS DIFERENTES.\nTINHA LEÕES, MACACOS, ELEFANTES E GIRAFAS.\nCARLOS GOSTOU MAIS DOS MACACOS ENGRAÇADOS.\nELES FICARAM LÁ A TARDE TODA E SE DIVERTIRAM MUITO.",
                    questions: [
                        { q: "COM QUEM CARLOS FOI AO ZOOLÓGICO?", options: ["COM SEUS AMIGOS", "COM SUA FAMÍLIA", "SOZINHO"], correct: 1 },
                        { q: "QUE ANIMAIS ELES VIRAM?", options: ["APENAS LEÕES", "LEÕES, MACACOS, ELEFANTES E GIRAFAS", "SÓ MACACOS"], correct: 1 },
                        { q: "QUAL ANIMAL CARLOS GOSTOU MAIS?", options: ["DOS LEÕES", "DOS MACACOS ENGRAÇADOS", "DOS ELEFANTES"], correct: 1 }
                    ],
                    words_list: ["SÓ", "MÃO", "LEÃO", "MACACO", "GIRAFA", "TARDE", "FAMÍLIA", "ANIMAL", "ENGRAÇADO", "ELEFANTE", "ZOOLÓGICO", "DIFERENTE"],
                    pseudo_words: ["TEVI", "NALO", "BUTAN", "MELECO", "DILA", "GUBEL", "REVOR", "LAMU", "CRIPO", "MORECA", "FULAN", "PEFO"]
                },
                {
                    title: "A HORTA DA ESCOLA",
                    code: "2AAVD25N3",
                    words: 40,
                    maxErrors: 4,
                    maxTime: "30 segundos",
                    text: "NA ESCOLA DE SOFIA TEM UMA HORTA GRANDE.\nOS ALUNOS PLANTAM VERDURAS E LEGUMES.\nTEM ALFACE, TOMATE, CENOURA E RABANETE.\nSOFIA AJUDA A REGAR AS PLANTAS TODOS OS DIAS.\nELA APRENDEU QUE AS PLANTAS PRECISAM DE ÁGUA E SOL.",
                    questions: [
                        { q: "O QUE TEM NA ESCOLA DE SOFIA?", options: ["UMA PISCINA", "UMA HORTA GRANDE", "UM PARQUE"], correct: 1 },
                        { q: "O QUE OS ALUNOS PLANTAM?", options: ["FLORES", "VERDURAS E LEGUMES", "ÁRVORES"], correct: 1 },
                        { q: "O QUE SOFIA APRENDEU?", options: ["QUE AS PLANTAS PRECISAM DE ÁGUA E SOL", "QUE AS PLANTAS CRESCEM SOZINHAS", "QUE AS PLANTAS NÃO PRECISAM DE CUIDADO"], correct: 0 }
                    ],
                    words_list: ["CÉU", "SOL", "HORTA", "PLANTA", "ALFACE", "TOMATE", "CENOURA", "VERDURA", "LEGUME", "RABANETE", "APRENDER", "REGAR"],
                    pseudo_words: ["GEVI", "PALO", "CUTAN", "VELECO", "TILA", "HUBEL", "SEVOR", "NAMU", "DRIPO", "LORECA", "BULAN", "MEFO"]
                },
                {
                    title: "O ANIVERSÁRIO DO MIGUEL",
                    code: "2AAVD25N4",
                    words: 40,
                    maxErrors: 4,
                    maxTime: "30 segundos",
                    text: "MIGUEL COMPLETOU OITO ANOS ONTEM.\nSUA MÃE FEZ UMA FESTA SURPRESA PARA ELE.\nVIERAM TODOS OS SEUS AMIGOS DA ESCOLA.\nTINHA BOLO DE CHOCOLATE, BRIGADEIROS E REFRIGERANTE.\nMIGUEL GANHOU MUITOS PRESENTES E FICOU MUITO FELIZ.",
                    questions: [
                        { q: "QUANTOS ANOS MIGUEL COMPLETOU?", options: ["SETE ANOS", "OITO ANOS", "NOVE ANOS"], correct: 1 },
                        { q: "QUEM FEZ A FESTA SURPRESA?", options: ["SEU PAI", "SUA MÃE", "SUA VOVÓ"], correct: 1 },
                        { q: "O QUE TINHA NA FESTA?", options: ["APENAS BOLO", "BOLO DE CHOCOLATE, BRIGADEIROS E REFRIGERANTE", "SÓ DOCES"], correct: 1 }
                    ],
                    words_list: ["VEM", "OITO", "FESTA", "SURPRESA", "CHOCOLATE", "PRESENTE", "AMIGO", "BRIGADEIRO", "REFRIGERANTE", "ANIVERSÁRIO", "COMPLETAR", "FELIZ"],
                    pseudo_words: ["REVI", "TALO", "DUTAN", "PELECO", "VILA", "JUBEL", "TEVOR", "RAMU", "GRIPO", "NORECA", "CULAN", "LEFO"]
                },
                {
                    title: "A VIAGEM DE TREM",
                    code: "2AAVD25N5",
                    words: 40,
                    maxErrors: 4,
                    maxTime: "30 segundos",
                    text: "LAURA E SEU PAI FIZERAM UMA VIAGEM DE TREM.\nELES FORAM VISITAR A VOVÓ NA CIDADE VIZINHA.\nO TREM ERA AZUL E MUITO CONFORTÁVEL.\nLAURA FICOU OLHANDO A PAISAGEM PELA JANELA.\nELA VIU CAMPOS, RIOS E MONTANHAS DURANTE O CAMINHO.",
                    questions: [
                        { q: "COM QUEM LAURA VIAJOU?", options: ["COM SUA MÃE", "COM SEU PAI", "COM SEU IRMÃO"], correct: 1 },
                        { q: "PARA ONDE ELES FORAM?", options: ["VISITAR A VOVÓ NA CIDADE VIZINHA", "PASSEAR NO PARQUE", "IR AO SHOPPING"], correct: 0 },
                        { q: "O QUE LAURA VIU PELA JANELA?", options: ["PRÉDIOS E CARROS", "CAMPOS, RIOS E MONTANHAS", "APENAS ÁRVORES"], correct: 1 }
                    ],
                    words_list: ["PAI", "TREM", "VIAGEM", "CIDADE", "JANELA", "CAMPO", "RIO", "MONTANHA", "PAISAGEM", "CONFORTÁVEL", "VIZINHA", "CAMINHO"],
                    pseudo_words: ["BEVI", "SALO", "FUTAN", "MELECO", "PILA", "KUBEL", "REVOR", "TAMU", "CRIPO", "PORECA", "DULAN", "NEFO"]
                },
                {
                    title: "O CACHORRO PERDIDO",
                    code: "2AAVD25N6",
                    words: 40,
                    maxErrors: 4,
                    maxTime: "30 segundos",
                    text: "BRUNO ENCONTROU UM CACHORRO PERDIDO NA RUA.\nO CACHORRO ESTAVA SUJO E COM FOME.\nBRUNO LEVOU ELE PARA CASA E DEU COMIDA.\nELE COLOCOU CARTAZES PELA VIZINHANÇA PROCURANDO O DONO.\nDEPOIS DE TRÊS DIAS, O DONO APARECEU E AGRADECEU MUITO.",
                    questions: [
                        { q: "O QUE BRUNO ENCONTROU?", options: ["UM GATO PERDIDO", "UM CACHORRO PERDIDO", "UM PÁSSARO FERIDO"], correct: 1 },
                        { q: "COMO ESTAVA O CACHORRO?", options: ["LIMPO E BEM CUIDADO", "SUJO E COM FOME", "APENAS CANSADO"], correct: 1 },
                        { q: "O QUE BRUNO FEZ PARA ENCONTRAR O DONO?", options: ["PERGUNTOU AOS VIZINHOS", "COLOCOU CARTAZES PELA VIZINHANÇA", "LEVOU À POLÍCIA"], correct: 1 }
                    ],
                    words_list: ["RUA", "SUJO", "FOME", "CASA", "COMIDA", "CARTAZ", "DONO", "TRÊS", "DIAS", "VIZINHANÇA", "AGRADECER", "PERDIDO"],
                    pseudo_words: ["DEVI", "NALO", "GUTAN", "RELECO", "TILA", "LUBEL", "SEVOR", "PAMU", "FRIPO", "QORECA", "BULAN", "TEFO"]
                },
                {
                    title: "A BIBLIOTECA MÁGICA",
                    code: "2AAVD25N7",
                    words: 40,
                    maxErrors: 4,
                    maxTime: "30 segundos",
                    text: "ANA DESCOBRIU UMA BIBLIOTECA ESPECIAL NA ESCOLA.\nLÁ TINHA LIVROS DE AVENTURA, CONTOS DE FADA E HISTÓRIAS ENGRAÇADAS.\nA BIBLIOTECÁRIA ERA MUITO SIMPÁTICA E AJUDAVA TODOS.\nANA PEGOU UM LIVRO SOBRE PIRATAS E TESOUROS.\nELA LEVA O LIVRO PARA CASA E LÊ ANTES DE DORMIR.",
                    questions: [
                        { q: "O QUE ANA DESCOBRIU?", options: ["UMA SALA DE JOGOS", "UMA BIBLIOTECA ESPECIAL", "UM LABORATÓRIO"], correct: 1 },
                        { q: "QUE TIPOS DE LIVROS TINHA?", options: ["APENAS LIVROS DIDÁTICOS", "DE AVENTURA, CONTOS DE FADA E HISTÓRIAS ENGRAÇADAS", "SÓ REVISTAS"], correct: 1 },
                        { q: "SOBRE O QUE ERA O LIVRO QUE ANA PEGOU?", options: ["SOBRE ANIMAIS", "SOBRE PIRATAS E TESOUROS", "SOBRE PLANTAS"], correct: 1 }
                    ],
                    words_list: ["LIVRO", "AVENTURA", "CONTO", "FADA", "HISTÓRIA", "PIRATA", "TESOURO", "DORMIR", "BIBLIOTECA", "BIBLIOTECÁRIA", "SIMPÁTICA", "ESPECIAL"],
                    pseudo_words: ["FEVI", "RALO", "HUTAN", "SELECO", "VILA", "MUBEL", "TEVOR", "SAMU", "GRIPO", "RORECA", "FULAN", "PEFO"]
                },
                {
                    title: "O PIQUENIQUE NO PARQUE",
                    code: "2AAVD25N8",
                    words: 40,
                    maxErrors: 4,
                    maxTime: "30 segundos",
                    text: "A FAMÍLIA DE RICARDO FEZ UM PIQUENIQUE NO PARQUE.\nELES LEVARAM SANDUÍCHES, FRUTAS E SUCO NATURAL.\nRICARDO BRINCOU DE BOLA COM SEU IRMÃO MAIS NOVO.\nDEPOIS ELES CORRERAM E BRINCARAM NO PLAYGROUND.\nFOI UM DIA MUITO DIVERTIDO E TODOS FICARAM CANSADOS.",
                    questions: [
                        { q: "O QUE A FAMÍLIA FEZ?", options: ["FOI AO CINEMA", "UM PIQUENIQUE NO PARQUE", "VISITOU O MUSEU"], correct: 1 },
                        { q: "O QUE ELES LEVARAM?", options: ["APENAS ÁGUA", "SANDUÍCHES, FRUTAS E SUCO NATURAL", "SÓ DOCES"], correct: 1 },
                        { q: "ONDE ELES BRINCARAM DEPOIS?", options: ["NA PRAIA", "NO PLAYGROUND", "EM CASA"], correct: 1 }
                    ],
                    words_list: ["PARQUE", "PIQUENIQUE", "SANDUÍCHE", "FRUTA", "SUCO", "NATURAL", "IRMÃO", "NOVO", "CORRER", "PLAYGROUND", "DIVERTIDO", "CANSADO"],
                    pseudo_words: ["GEVI", "TALO", "CUTAN", "VELECO", "PILA", "NUBEL", "REVOR", "LAMU", "DRIPO", "SORECA", "DULAN", "MEFO"]
                },
                {
                    title: "A AULA DE NATAÇÃO",
                    code: "2AAVD25N9",
                    words: 40,
                    maxErrors: 4,
                    maxTime: "30 segundos",
                    text: "CAMILA COMEÇOU A FAZER AULAS DE NATAÇÃO.\nO PROFESSOR ENSINOU ELA A FLUTUAR NA ÁGUA.\nELA USAVA ÓCULOS DE NATAÇÃO E TOUCA COLORIDA.\nCAMILA TINHA UM POUCO DE MEDO NO COMEÇO.\nMAS DEPOIS ELA APRENDEU E AGORA NADA MUITO BEM.",
                    questions: [
                        { q: "O QUE CAMILA COMEÇOU A FAZER?", options: ["AULAS DE DANÇA", "AULAS DE NATAÇÃO", "AULAS DE MÚSICA"], correct: 1 },
                        { q: "O QUE O PROFESSOR ENSINOU?", options: ["A MERGULHAR", "A FLUTUAR NA ÁGUA", "A CORRER"], correct: 1 },
                        { q: "COMO CAMILA SE SENTIA NO COMEÇO?", options: ["MUITO CONFIANTE", "TINHA UM POUCO DE MEDO", "ESTAVA ANIMADA"], correct: 1 }
                    ],
                    words_list: ["AULA", "NATAÇÃO", "PROFESSOR", "FLUTUAR", "ÁGUA", "ÓCULOS", "TOUCA", "COLORIDA", "MEDO", "COMEÇO", "APRENDER", "NADAR"],
                    pseudo_words: ["REVI", "PALO", "DUTAN", "MELECO", "TILA", "GUBEL", "SEVOR", "NAMU", "CRIPO", "LORECA", "BULAN", "NEFO"]
                },
                {
                    title: "O TEATRO DA ESCOLA",
                    code: "2AAVD25N10",
                    words: 40,
                    maxErrors: 4,
                    maxTime: "30 segundos",
                    text: "OS ALUNOS DA ESCOLA FIZERAM UMA PEÇA DE TEATRO.\nELES REPRESENTARAM A HISTÓRIA DOS TRÊS PORQUINHOS.\nTODOS USAVAM FANTASIAS COLORIDAS E MÁSCARAS ENGRAÇADAS.\nOS PAIS VIERAM ASSISTIR E APLAUDIRAM MUITO.\nFOI UMA APRESENTAÇÃO LINDA E TODOS SE DIVERTIRAM.",
                    questions: [
                        { q: "O QUE OS ALUNOS FIZERAM?", options: ["UM CONCERTO", "UMA PEÇA DE TEATRO", "UMA EXPOSIÇÃO"], correct: 1 },
                        { q: "QUE HISTÓRIA ELES REPRESENTARAM?", options: ["CHAPEUZINHO VERMELHO", "DOS TRÊS PORQUINHOS", "BRANCA DE NEVE"], correct: 1 },
                        { q: "QUEM VEIO ASSISTIR?", options: ["OS PROFESSORES", "OS PAIS", "OUTRAS TURMAS"], correct: 1 }
                    ],
                    words_list: ["TEATRO", "PEÇA", "TRÊS", "PORQUINHO", "FANTASIA", "MÁSCARA", "PAIS", "ASSISTIR", "APLAUDIR", "APRESENTAÇÃO", "REPRESENTAR", "DIVERTIR"],
                    pseudo_words: ["BEVI", "SALO", "FUTAN", "RELECO", "VILA", "KUBEL", "TEVOR", "RAMU", "GRIPO", "PORECA", "FULAN", "TEFO"]
                }
                ]
            },
            3: { // 3º ano
                1: [ // Série A
                {
                    title: "A ESCOLA DO BETO",
                    code: "3AAVD25N2",
                    words: 70,
                    maxErrors: 7,
                    maxTime: "42 segundos",
                    text: "O BETO, A MARINA E O LELECO ESTUDAM JUNTOS.\nELES ESTUDAM EM UMA ESCOLA PERTO DE CASA.\nAS AULAS COMEÇARAM NA SEMANA PASSADA.\nA ESCOLA FOI PINTADA DE AMARELO E AZUL. TAMBÉM COMPRARAM CARTEIRAS NOVAS E FIZERAM NOVAS SALAS.\nA SALA DE AULA DELES AGORA FICA NA PARTE DE CIMA DA ESCOLA.\nA NOVA PROFESSORA É A FELICIDADE, UM NOME ENGRAÇADO.\nDEVE SER POR ISSO QUE OS AMIGOS ESTÃO FELIZES.",
                    questions: [
                        { q: "COM QUEM O BETO ESTUDA?", options: ["COM A MARINA E O LELECO", "COM O JOÃO E A CARLA", "COM A ANA E O PEDRO"], correct: 0 },
                        { q: "QUAIS AS CORES DA ESCOLA?", options: ["VERDE E ROSA", "AMARELO E AZUL", "VERMELHO E BRANCO"], correct: 1 },
                        { q: "COMO É O NOME DA NOVA PROFESSORA?", options: ["ALEGRIA", "FELICIDADE", "ESPERANÇA"], correct: 1 }
                    ],
                    words_list: ["TU", "PÁ", "FALA", "LAÇO", "MOTO", "DEDO", "TELA", "BONECA", "FIVELA", "MODELO", "FELICIDADE", "BORBOLETA"],
                    pseudo_words: ["LOPI", "MEVO", "RUTAN", "VARECO", "PILA", "NUBEL", "SEVOR", "TAMU", "GRIPO", "ZORECA", "DULAN", "TEFO"]
                },
                {
                    title: "A EXPEDIÇÃO CIENTÍFICA",
                    code: "3AAVD25N2",
                    words: 70,
                    maxErrors: 7,
                    maxTime: "42 segundos",
                    text: "HELENA E SEUS COLEGAS PARTICIPARAM DE UMA EXPEDIÇÃO CIENTÍFICA.\nELES FORAM ESTUDAR OS ANIMAIS DA FLORESTA AMAZÔNICA.\nO GRUPO OBSERVOU MACACOS, PREGUIÇAS, TUCANOS E BORBOLETAS COLORIDAS.\nOS PESQUISADORES EXPLICARAM COMO OS ANIMAIS SE ADAPTAM AO AMBIENTE.\nHELENA APRENDEU QUE CADA ESPÉCIE TEM UMA FUNÇÃO IMPORTANTE NO ECOSSISTEMA.\nELA FOTOGRAFOU MUITOS ANIMAIS E PLANTAS DIFERENTES.\nAO FINAL DA VIAGEM, TODOS ESTAVAM MAIS CONSCIENTES SOBRE A IMPORTÂNCIA DA PRESERVAÇÃO AMBIENTAL.",
                    questions: [
                        { q: "DO QUE HELENA PARTICIPOU?", options: ["DE UM ACAMPAMENTO", "DE UMA EXPEDIÇÃO CIENTÍFICA", "DE UMA COMPETIÇÃO"], correct: 1 },
                        { q: "QUE ANIMAIS ELES OBSERVARAM?", options: ["APENAS MACACOS", "MACACOS, PREGUIÇAS, TUCANOS E BORBOLETAS", "SÓ PÁSSAROS"], correct: 1 },
                        { q: "O QUE HELENA APRENDEU?", options: ["QUE OS ANIMAIS SÃO PERIGOSOS", "QUE CADA ESPÉCIE TEM UMA FUNÇÃO IMPORTANTE NO ECOSSISTEMA", "QUE A FLORESTA É PEQUENA"], correct: 1 }
                    ],
                    words_list: ["LUA", "SOL", "EXPEDIÇÃO", "CIENTÍFICA", "FLORESTA", "AMAZÔNICA", "PREGUIÇA", "TUCANO", "BORBOLETA", "PESQUISADOR", "ECOSSISTEMA", "PRESERVAÇÃO"],
                    pseudo_words: ["TEVI", "NALO", "BUTAN", "MELECO", "DILA", "GUBEL", "REVOR", "LAMU", "CRIPO", "MORECA", "FULAN", "PEFO"]
                },
                {
                    title: "O FESTIVAL DE ROBÓTICA",
                    code: "3AAVD25N3",
                    words: 70,
                    maxErrors: 7,
                    maxTime: "42 segundos",
                    text: "GABRIEL E SUA EQUIPE CONSTRUÍRAM UM ROBÔ PARA O FESTIVAL DE ROBÓTICA.\nELES TRABALHARAM DURANTE TRÊS MESES PROGRAMANDO E TESTANDO O PROJETO.\nO ROBÔ CONSEGUIA ANDAR, PEGAR OBJETOS E RESOLVER QUEBRA-CABEÇAS SIMPLES.\nNO DIA DA COMPETIÇÃO, MUITAS ESCOLAS APRESENTARAM SEUS ROBÔS CRIATIVOS.\nO ROBÔ DE GABRIEL FUNCIONOU PERFEITAMENTE E IMPRESSIONOU OS JURADOS.\nELES GANHARAM O SEGUNDO LUGAR E FICARAM MUITO ORGULHOSOS.\nGABRIEL DESCOBRIU QUE GOSTA MUITO DE TECNOLOGIA E QUER SER ENGENHEIRO.",
                    questions: [
                        { q: "O QUE GABRIEL E SUA EQUIPE CONSTRUÍRAM?", options: ["UM CARRO", "UM ROBÔ PARA O FESTIVAL DE ROBÓTICA", "UM AVIÃO"], correct: 1 },
                        { q: "O QUE O ROBÔ CONSEGUIA FAZER?", options: ["APENAS ANDAR", "ANDAR, PEGAR OBJETOS E RESOLVER QUEBRA-CABEÇAS", "SÓ FALAR"], correct: 1 },
                        { q: "QUE LUGAR ELES GANHARAM?", options: ["O PRIMEIRO LUGAR", "O SEGUNDO LUGAR", "O TERCEIRO LUGAR"], correct: 1 }
                    ],
                    words_list: ["ROBÔ", "FESTIVAL", "EQUIPE", "PROGRAMAR", "TESTAR", "PROJETO", "OBJETO", "COMPETIÇÃO", "CRIATIVO", "JURADO", "TECNOLOGIA", "ENGENHEIRO"],
                    pseudo_words: ["GEVI", "PALO", "CUTAN", "VELECO", "TILA", "HUBEL", "SEVOR", "NAMU", "DRIPO", "LORECA", "BULAN", "MEFO"]
                },
                {
                    title: "A DESCOBERTA ARQUEOLÓGICA",
                    code: "3AAVD25N4",
                    words: 70,
                    maxErrors: 7,
                    maxTime: "42 segundos",
                    text: "DURANTE UMA ESCAVAÇÃO NO QUINTAL DA ESCOLA, OS ALUNOS ENCONTRARAM OBJETOS ANTIGOS.\nA PROFESSORA CHAMOU UM ARQUEÓLOGO PARA AJUDAR NA INVESTIGAÇÃO.\nELES DESCOBRIRAM FRAGMENTOS DE CERÂMICA, MOEDAS E FERRAMENTAS DE PEDRA.\nO ESPECIALISTA EXPLICOU QUE OS OBJETOS TINHAM MAIS DE DUZENTOS ANOS.\nOS ESTUDANTES APRENDERAM SOBRE AS CIVILIZAÇÕES QUE VIVERAM NA REGIÃO.\nELES CATALOGARAM CADA PEÇA ENCONTRADA E FIZERAM UM PEQUENO MUSEU.\nA DESCOBERTA DESPERTOU O INTERESSE DE TODA A COMUNIDADE ESCOLAR.",
                    questions: [
                        { q: "O QUE OS ALUNOS ENCONTRARAM?", options: ["PLANTAS RARAS", "OBJETOS ANTIGOS DURANTE UMA ESCAVAÇÃO", "PEDRAS PRECIOSAS"], correct: 1 },
                        { q: "QUEM A PROFESSORA CHAMOU PARA AJUDAR?", options: ["UM GEÓLOGO", "UM ARQUEÓLOGO", "UM BIÓLOGO"], correct: 1 },
                        { q: "QUANTOS ANOS TINHAM OS OBJETOS?", options: ["CEM ANOS", "MAIS DE DUZENTOS ANOS", "CINQUENTA ANOS"], correct: 1 }
                    ],
                    words_list: ["ESCAVAÇÃO", "ARQUEÓLOGO", "INVESTIGAÇÃO", "FRAGMENTO", "CERÂMICA", "MOEDA", "FERRAMENTA", "ESPECIALISTA", "CIVILIZAÇÃO", "CATALOGAR", "MUSEU", "COMUNIDADE"],
                    pseudo_words: ["REVI", "TALO", "DUTAN", "PELECO", "VILA", "JUBEL", "TEVOR", "RAMU", "GRIPO", "NORECA", "CULAN", "LEFO"]
                },
                {
                    title: "O PROJETO SUSTENTÁVEL",
                    code: "3AAVD25N5",
                    words: 70,
                    maxErrors: 7,
                    maxTime: "42 segundos",
                    text: "MARIANA LIDEROU UM PROJETO DE SUSTENTABILIDADE EM SUA ESCOLA.\nO OBJETIVO ERA REDUZIR O DESPERDÍCIO E PROMOVER A RECICLAGEM.\nELA ORGANIZOU GRUPOS PARA SEPARAR O LIXO E CRIAR COMPOSTEIRAS.\nOS ALUNOS TAMBÉM PLANTARAM UMA HORTA ORGÂNICA NO PÁTIO DA ESCOLA.\nELES APRENDERAM A FAZER SABÃO COM ÓLEO DE COZINHA USADO.\nO PROJETO ENVOLVEU TODA A COMUNIDADE E TEVE RESULTADOS SURPREENDENTES.\nMARIANA PERCEBEU QUE PEQUENAS AÇÕES PODEM FAZER UMA GRANDE DIFERENÇA NO MEIO AMBIENTE.",
                    questions: [
                        { q: "QUE TIPO DE PROJETO MARIANA LIDEROU?", options: ["UM PROJETO DE ARTE", "UM PROJETO DE SUSTENTABILIDADE", "UM PROJETO DE MÚSICA"], correct: 1 },
                        { q: "QUAL ERA O OBJETIVO DO PROJETO?", options: ["FAZER FESTAS", "REDUZIR O DESPERDÍCIO E PROMOVER A RECICLAGEM", "PLANTAR FLORES"], correct: 1 },
                        { q: "O QUE MARIANA PERCEBEU?", options: ["QUE É DIFÍCIL MUDAR", "QUE PEQUENAS AÇÕES PODEM FAZER UMA GRANDE DIFERENÇA", "QUE NADA FUNCIONA"], correct: 1 }
                    ],
                    words_list: ["PROJETO", "SUSTENTABILIDADE", "DESPERDÍCIO", "RECICLAGEM", "COMPOSTEIRA", "HORTA", "ORGÂNICA", "PÁTIO", "SABÃO", "ÓLEO", "AMBIENTE", "DIFERENÇA"],
                    pseudo_words: ["BEVI", "SALO", "FUTAN", "MELECO", "PILA", "KUBEL", "REVOR", "TAMU", "CRIPO", "PORECA", "DULAN", "NEFO"]
                },
                {
                    title: "A AVENTURA NO OBSERVATÓRIO",
                    code: "3AAVD25N6",
                    words: 70,
                    maxErrors: 7,
                    maxTime: "42 segundos",
                    text: "DURANTE UMA EXCURSÃO NOTURNA, RAFAEL VISITOU UM OBSERVATÓRIO ASTRONÔMICO.\nO ASTRÔNOMO MOSTROU AS CONSTELAÇÕES E EXPLICOU SOBRE OS PLANETAS.\nRAFAEL OBSERVOU SATURNO E SEUS ANÉIS ATRAVÉS DO TELESCÓPIO GIGANTE.\nELE FICOU FASCINADO COM A IMENSIDÃO DO UNIVERSO E AS ESTRELAS BRILHANTES.\nO ESPECIALISTA CONTOU SOBRE AS MISSÕES ESPACIAIS E OS ASTRONAUTAS.\nRAFAEL APRENDEU QUE A LUA INFLUENCIA AS MARÉS DOS OCEANOS.\nESSA EXPERIÊNCIA DESPERTOU SEU INTERESSE PELA ASTRONOMIA E CIÊNCIAS ESPACIAIS.",
                    questions: [
                        { q: "ONDE RAFAEL FOI DURANTE A EXCURSÃO?", options: ["A UM MUSEU", "A UM OBSERVATÓRIO ASTRONÔMICO", "A UM PARQUE"], correct: 1 },
                        { q: "O QUE RAFAEL OBSERVOU NO TELESCÓPIO?", options: ["A LUA", "SATURNO E SEUS ANÉIS", "O SOL"], correct: 1 },
                        { q: "O QUE RAFAEL APRENDEU SOBRE A LUA?", options: ["QUE É FEITA DE QUEIJO", "QUE ELA INFLUENCIA AS MARÉS DOS OCEANOS", "QUE É MUITO PEQUENA"], correct: 1 }
                    ],
                    words_list: ["EXCURSÃO", "OBSERVATÓRIO", "ASTRONÔMICO", "ASTRÔNOMO", "CONSTELAÇÃO", "PLANETA", "SATURNO", "TELESCÓPIO", "UNIVERSO", "ESPACIAL", "ASTRONOMIA", "OCEANO"],
                    pseudo_words: ["DEVI", "NALO", "GUTAN", "RELECO", "TILA", "LUBEL", "SEVOR", "PAMU", "FRIPO", "QORECA", "BULAN", "TEFO"]
                },
                {
                    title: "O LABORATÓRIO DE QUÍMICA",
                    code: "3AAVD25N7",
                    words: 70,
                    maxErrors: 7,
                    maxTime: "42 segundos",
                    text: "ISABELA PARTICIPOU DE UMA AULA PRÁTICA NO LABORATÓRIO DE QUÍMICA.\nA PROFESSORA ENSINOU SOBRE REAÇÕES QUÍMICAS E MISTURAS DE SUBSTÂNCIAS.\nELES FIZERAM EXPERIMENTOS COM BICARBONATO DE SÓDIO E VINAGRE.\nISABELA OBSERVOU COMO A MISTURA PRODUZIU UMA EFERVESCÊNCIA INTERESSANTE.\nELA APRENDEU SOBRE ÁCIDOS, BASES E INDICADORES DE PH.\nOS ALUNOS USARAM ÓCULOS DE PROTEÇÃO E SEGUIRAM TODAS AS REGRAS DE SEGURANÇA.\nISABELA DESCOBRIU QUE A QUÍMICA ESTÁ PRESENTE EM MUITAS SITUAÇÕES DO COTIDIANO.",
                    questions: [
                        { q: "ONDE ISABELA TEVE A AULA PRÁTICA?", options: ["NA BIBLIOTECA", "NO LABORATÓRIO DE QUÍMICA", "NO PÁTIO"], correct: 1 },
                        { q: "COM QUE SUBSTÂNCIAS ELES FIZERAM EXPERIMENTOS?", options: ["ÁGUA E AÇÚCAR", "BICARBONATO DE SÓDIO E VINAGRE", "ÓLEO E SAL"], correct: 1 },
                        { q: "O QUE ISABELA DESCOBRIU?", options: ["QUE A QUÍMICA É DIFÍCIL", "QUE A QUÍMICA ESTÁ PRESENTE NO COTIDIANO", "QUE A QUÍMICA É PERIGOSA"], correct: 1 }
                    ],
                    words_list: ["LABORATÓRIO", "QUÍMICA", "REAÇÃO", "SUBSTÂNCIA", "EXPERIMENTO", "BICARBONATO", "VINAGRE", "EFERVESCÊNCIA", "ÁCIDO", "INDICADOR", "PROTEÇÃO", "COTIDIANO"],
                    pseudo_words: ["FEVI", "RALO", "HUTAN", "SELECO", "VILA", "MUBEL", "TEVOR", "SAMU", "GRIPO", "RORECA", "FULAN", "PEFO"]
                },
                {
                    title: "A FEIRA DE CIÊNCIAS",
                    code: "3AAVD25N8",
                    words: 70,
                    maxErrors: 7,
                    maxTime: "42 segundos",
                    text: "LEONARDO APRESENTOU SEU PROJETO SOBRE ENERGIA RENOVÁVEL NA FEIRA DE CIÊNCIAS.\nELE CONSTRUIU UM MODELO DE CASA COM PAINÉIS SOLARES E TURBINA EÓLICA.\nO PROJETO DEMONSTRAVA COMO APROVEITAR A ENERGIA DO SOL E DO VENTO.\nLEONARDO EXPLICOU AOS VISITANTES OS BENEFÍCIOS DA ENERGIA LIMPA.\nELE PESQUISOU SOBRE O IMPACTO AMBIENTAL DOS COMBUSTÍVEIS FÓSSEIS.\nSEU TRABALHO RECEBEU ELOGIOS DOS PROFESSORES E GANHOU O PRIMEIRO LUGAR.\nLEONARDO FICOU MOTIVADO A CONTINUAR ESTUDANDO SOBRE ENERGIAS ALTERNATIVAS.",
                    questions: [
                        { q: "SOBRE O QUE ERA O PROJETO DE LEONARDO?", options: ["SOBRE PLANTAS", "SOBRE ENERGIA RENOVÁVEL", "SOBRE ANIMAIS"], correct: 1 },
                        { q: "O QUE ELE CONSTRUIU?", options: ["UM CARRO ELÉTRICO", "UM MODELO DE CASA COM PAINÉIS SOLARES E TURBINA EÓLICA", "UMA BICICLETA"], correct: 1 },
                        { q: "QUE LUGAR SEU PROJETO GANHOU?", options: ["O PRIMEIRO LUGAR", "O SEGUNDO LUGAR", "O TERCEIRO LUGAR"], correct: 0 }
                    ],
                    words_list: ["ENERGIA", "RENOVÁVEL", "FEIRA", "PAINEL", "SOLAR", "TURBINA", "EÓLICA", "DEMONSTRAR", "BENEFÍCIO", "COMBUSTÍVEL", "FÓSSIL", "ALTERNATIVA"],
                    pseudo_words: ["GEVI", "TALO", "CUTAN", "VELECO", "PILA", "NUBEL", "REVOR", "LAMU", "DRIPO", "SORECA", "DULAN", "MEFO"]
                },
                {
                    title: "O CLUBE DE LEITURA",
                    code: "3AAVD25N9",
                    words: 70,
                    maxErrors: 7,
                    maxTime: "42 segundos",
                    text: "CAROLINA FUNDOU UM CLUBE DE LEITURA EM SUA ESCOLA PARA INCENTIVAR O HÁBITO DE LER.\nO GRUPO SE REUNIA SEMANALMENTE PARA DISCUTIR LIVROS E COMPARTILHAR OPINIÕES.\nELES LERAM CLÁSSICOS DA LITERATURA INFANTIL E OBRAS CONTEMPORÂNEAS.\nCAROLINA ORGANIZAVA DEBATES SOBRE OS PERSONAGENS E ENREDOS DAS HISTÓRIAS.\nOS MEMBROS DO CLUBE TAMBÉM ESCREVIAM RESENHAS E CRIAVAM ILUSTRAÇÕES.\nA ATIVIDADE MELHOROU SIGNIFICATIVAMENTE O VOCABULÁRIO E A EXPRESSÃO ORAL DOS PARTICIPANTES.\nO CLUBE SE TORNOU TÃO POPULAR QUE OUTROS ALUNOS PEDIRAM PARA PARTICIPAR.",
                    questions: [
                        { q: "O QUE CAROLINA FUNDOU?", options: ["UM CLUBE DE DANÇA", "UM CLUBE DE LEITURA", "UM CLUBE DE MÚSICA"], correct: 1 },
                        { q: "COM QUE FREQUÊNCIA O GRUPO SE REUNIA?", options: ["DIARIAMENTE", "SEMANALMENTE", "MENSALMENTE"], correct: 1 },
                        { q: "O QUE A ATIVIDADE MELHOROU?", options: ["A COORDENAÇÃO MOTORA", "O VOCABULÁRIO E A EXPRESSÃO ORAL", "A MEMÓRIA VISUAL"], correct: 1 }
                    ],
                    words_list: ["CLUBE", "LEITURA", "INCENTIVAR", "HÁBITO", "SEMANALMENTE", "CLÁSSICO", "LITERATURA", "CONTEMPORÂNEO", "PERSONAGEM", "ENREDO", "VOCABULÁRIO", "EXPRESSÃO"],
                    pseudo_words: ["REVI", "PALO", "DUTAN", "MELECO", "TILA", "GUBEL", "SEVOR", "NAMU", "CRIPO", "LORECA", "BULAN", "NEFO"]
                },
                {
                    title: "A OLIMPÍADA DE MATEMÁTICA",
                    code: "3AAVD25N10",
                    words: 70,
                    maxErrors: 7,
                    maxTime: "42 segundos",
                    text: "ANDRÉ SE PREPAROU INTENSAMENTE PARA A OLIMPÍADA BRASILEIRA DE MATEMÁTICA.\nELE ESTUDAVA PROBLEMAS DE LÓGICA, GEOMETRIA E ÁLGEBRA TODOS OS DIAS.\nSEU PROFESSOR PARTICULAR O AJUDOU A DESENVOLVER ESTRATÉGIAS DE RESOLUÇÃO.\nANDRÉ PRATICAVA EXERCÍCIOS DESAFIADORES E CRONOMETRAVA SEU TEMPO.\nNO DIA DA COMPETIÇÃO, ELE SE SENTIU CONFIANTE E CONCENTRADO.\nCONSEGUIU RESOLVER A MAIORIA DOS PROBLEMAS DENTRO DO PRAZO ESTABELECIDO.\nANDRÉ CONQUISTOU UMA MEDALHA DE BRONZE E FICOU MUITO ORGULHOSO DE SEU DESEMPENHO.",
                    questions: [
                        { q: "PARA QUE ANDRÉ SE PREPAROU?", options: ["PARA UM CONCURSO DE REDAÇÃO", "PARA A OLIMPÍADA BRASILEIRA DE MATEMÁTICA", "PARA UMA COMPETIÇÃO DE NATAÇÃO"], correct: 1 },
                        { q: "QUE MATÉRIAS ELE ESTUDAVA?", options: ["PORTUGUÊS E HISTÓRIA", "LÓGICA, GEOMETRIA E ÁLGEBRA", "BIOLOGIA E QUÍMICA"], correct: 1 },
                        { q: "QUE MEDALHA ANDRÉ CONQUISTOU?", options: ["UMA MEDALHA DE OURO", "UMA MEDALHA DE BRONZE", "UMA MEDALHA DE PRATA"], correct: 1 }
                    ],
                    words_list: ["OLIMPÍADA", "MATEMÁTICA", "INTENSAMENTE", "LÓGICA", "GEOMETRIA", "ÁLGEBRA", "PARTICULAR", "ESTRATÉGIA", "DESAFIADOR", "CRONOMETRAR", "ESTABELECIDO", "DESEMPENHO"],
                    pseudo_words: ["BEVI", "SALO", "FUTAN", "RELECO", "VILA", "KUBEL", "TEVOR", "RAMU", "GRIPO", "PORECA", "FULAN", "TEFO"]
                }
                ],
                2: [ // Série B
                {
                    title: "LARA",
                    code: "3BAVD25N1",
                    words: 20,
                    maxErrors: 1,
                    maxTime: "12 segundos",
                    timeLimit: 12,
                    text: "LARA É UMA MENINA BONITA.\nELA MORA NA MINHA RUA.\nMAS ELA NASCEU EM OUTRA CIDADE.\nLARA É MUITO LEGAL.",
                    questions: [
                        { q: "COMO É A LARA?", options: ["BONITA E LEGAL", "FEIA E CHATA", "ALTA E MAGRA"], correct: 0 },
                        { q: "ONDE LARA MORA?", options: ["EM OUTRA CIDADE", "NA MINHA RUA", "LONGE DAQUI"], correct: 1 },
                        { q: "ONDE LARA NASCEU?", options: ["NA MINHA RUA", "EM OUTRA CIDADE", "NO HOSPITAL"], correct: 1 }
                    ],
                    words_list: [],
                    pseudo_words: []
                },
                {
                    title: "DUDU E CAROL",
                    code: "3BAVD25N2",
                    words: 55,
                    maxErrors: 3,
                    maxTime: "32 segundos",
                    timeLimit: 32,
                    text: "DUDU E CAROL SÃO VIZINHOS E MUITO AMIGOS.\nELES ESTUDAM NA MESMA ESCOLA.\nTODOS OS DIAS ELES SAEM JUNTOS DE CASA. DUDU GOSTA MUITO DE ANDAR DE BICICLETA. CAROL PREFERE JOGAR BOLA OU VER TELEVISÃO.\nDUDU QUER SER PROFESSOR. CAROL QUER SER MÉDICA.\nMAS POR ENQUANTO, O QUE ELES QUEREM MESMO É BRINCAR.",
                    questions: [
                        { q: "QUAL A RELAÇÃO ENTRE DUDU E CAROL?", options: ["SÃO IRMÃOS", "SÃO VIZINHOS E AMIGOS", "SÃO PRIMOS"], correct: 1 },
                        { q: "O QUE DUDU QUER SER?", options: ["MÉDICO", "PROFESSOR", "DENTISTA"], correct: 1 },
                        { q: "O QUE ELES QUEREM FAZER POR ENQUANTO?", options: ["ESTUDAR", "TRABALHAR", "BRINCAR"], correct: 2 }
                    ],
                    words_list: [],
                    pseudo_words: []
                },
                {
                    title: "JOSÉ E DUDÉ",
                    code: "3BAVD25N3",
                    words: 40,
                    maxErrors: 2,
                    maxTime: "25 segundos",
                    timeLimit: 25,
                    text: "JOSÉ E DUDÉ ERAM MUITO AMIGOS.\nAONDE JOSÉ IA, DUDÉ ESTAVA.\nE ONDE DUDÉ ESTAVA, JOSÉ LOGO CHEGAVA.\nSE JOSÉ IA JOGAR BOLA, DUDÉ ERA O GOLEIRO.\nSE DUDÉ IA AO CIRCO, JOSÉ CHEGAVA PRIMEIRO.\nNA ESCOLA, SENTAVAM JUNTOS, NA MESMA CARTEIRA.",
                    questions: [
                        { q: "COMO ERAM JOSÉ E DUDÉ?", options: ["INIMIGOS", "MUITO AMIGOS", "DESCONHECIDOS"], correct: 1 },
                        { q: "QUANDO JOSÉ IA JOGAR BOLA, O QUE DUDÉ FAZIA?", options: ["ERA O GOLEIRO", "FICAVA EM CASA", "IA EMBORA"], correct: 0 },
                        { q: "COMO ELES SENTAVAM NA ESCOLA?", options: ["SEPARADOS", "JUNTOS NA MESMA CARTEIRA", "EM SALAS DIFERENTES"], correct: 1 }
                    ],
                    words_list: [],
                    pseudo_words: []
                },
                {
                    title: "A AVÓ DO ZECA",
                    code: "3BAVD25N4",
                    words: 45,
                    maxErrors: 3,
                    maxTime: "36 segundos",
                    timeLimit: 36,
                    text: "A AVÓ DO ZECA É VELHINHA.\nELA PARECE UMA MENINA, DE TÃO PEQUENA QUE É.\nA AVÓ DO ZECA FAZ DOCE DE GOIABA.\nÉ O DOCE MAIS DOCE QUE EU JÁ VI.\nEU GOSTO DE IR COM O ZECA NA CASA DA AVÓ DELE.\nELA SEMPRE NOS DÁ BISCOITO E DOCE.\nA AVÓ DO ZECA PARECE UMA MINIATURA DE GENTE.",
                    questions: [
                        { q: "COMO É A AVÓ DO ZECA?", options: ["GRANDE E FORTE", "VELHINHA E PEQUENA", "JOVEM E ALTA"], correct: 1 },
                        { q: "QUE DOCE A AVÓ FAZ?", options: ["DE GOIABA", "DE BANANA", "DE MAÇÃ"], correct: 0 },
                        { q: "O QUE A AVÓ SEMPRE DÁ PARA ELES?", options: ["DINHEIRO", "BISCOITO E DOCE", "BRINQUEDOS"], correct: 1 }
                    ],
                    words_list: [],
                    pseudo_words: []
                },
                {
                    title: "O PATO APRESSADO",
                    code: "3BAVD25N5",
                    words: 65,
                    maxErrors: 3,
                    maxTime: "41 segundos",
                    timeLimit: 41,
                    text: "O pato corria feito louco pelo terreiro.\nNinguém entendia nada. As galinhas e os marrecos tiveram medo.\nE o pato corria de um lado para o outro.\nE gritava: − Salvem as patas! Salvem as minhas patinhas!\nFoi o galo quem descobriu tudo.\nO dono do sítio falou que iam amarrar as patas... do cavalo.\nMas o pato só ouviu uma parte da conversa.\nQue pato mais apressado!",
                    questions: [
                        { q: "COMO O PATO ESTAVA SE COMPORTANDO?", options: ["CALMO E QUIETO", "CORRENDO FEITO LOUCO", "DORMINDO"], correct: 1 },
                        { q: "O QUE O PATO GRITAVA?", options: ["SALVEM AS PATAS!", "SOCORRO!", "FUJAM TODOS!"], correct: 0 },
                        { q: "DE QUEM ERAM AS PATAS QUE IAM AMARRAR?", options: ["DO PATO", "DO CAVALO", "DO GALO"], correct: 1 }
                    ],
                    words_list: [],
                    pseudo_words: []
                },
                {
                    title: "O MENINO MACAQUINHO",
                    code: "3BAVD25N6",
                    words: 70,
                    maxErrors: 4,
                    maxTime: "48 segundos",
                    timeLimit: 48,
                    text: "O menino era um macaquinho levado, pulando num pé só.\nA mãe ralhava com ele:\n− Menino, para quieto!\nE o menino pulava: do chão para o sofá, do sofá para a escada. Era um macaquinho sapeca.\n− Sossega o facho, menino!\nO menino se fazia de surdo, e não sossegava.\nMas macaquinhos também levam tombos, e lá foi ele, do sofá ao chão.\nO menino agora choraminga no colo da mãe, que canta baixinho:\n− Sossega o facho, macaquinho!",
                    questions: [
                        { q: "COMO ERA O MENINO?", options: ["QUIETO E OBEDIENTE", "UM MACAQUINHO LEVADO E SAPECA", "TRISTE E CALADO"], correct: 1 },
                        { q: "O QUE A MÃE FALAVA PARA ELE?", options: ["CONTINUE PULANDO", "PARA QUIETO E SOSSEGA O FACHO", "VAI BRINCAR LÁ FORA"], correct: 1 },
                        { q: "O QUE ACONTECEU NO FINAL?", options: ["ELE OBEDECEU A MÃE", "ELE LEVOU UM TOMBO E CHORAMINGOU", "ELE SAIU DE CASA"], correct: 1 }
                    ],
                    words_list: [],
                    pseudo_words: []
                },
                {
                    title: "ACAMPAMENTO",
                    code: "3BAVD25N7",
                    words: 85,
                    maxErrors: 5,
                    maxTime: "60 segundos",
                    timeLimit: 60,
                    text: "Eu vou viajar com o meu pai.\nNo próximo feriado nós vamos acampar. Eu não sei como é acampar, eu nunca fui. Mas o meu pai falou que é muito legal. E, se ele disse, é porque é.\nMeu pai nunca erra.\nQuer dizer, uma vez ele errou o caminho de casa. Nós tivemos que parar e perguntar ao guarda. O guarda falou que meu pai estava completamente perdido.\nMinha mãe aproveitou para dizer que ele sempre foi assim. Quase brigaram.\nMas onde eu estava mesmo? Ah! Vou acampar com o meu pai. Isto é, se ele encontrar o caminho.",
                    questions: [
                        { q: "O QUE O MENINO VAI FAZER COM O PAI?", options: ["IR AO CINEMA", "VIAJAR E ACAMPAR", "VISITAR A VOVÓ"], correct: 1 },
                        { q: "O QUE ACONTECEU UMA VEZ COM O PAI?", options: ["ELE SE MACHUCOU", "ELE ERROU O CAMINHO DE CASA", "ELE PERDEU AS CHAVES"], correct: 1 },
                        { q: "QUAL A PREOCUPAÇÃO DO MENINO?", options: ["SE O PAI VAI ENCONTRAR O CAMINHO", "SE VAI CHOVER", "SE VAI TER COMIDA"], correct: 0 }
                    ],
                    words_list: [],
                    pseudo_words: []
                },
                {
                    title: "FESTA NO CÉU",
                    code: "3BAVD25N8",
                    words: 60,
                    maxErrors: 3,
                    maxTime: "41 segundos",
                    timeLimit: 41,
                    text: "Houve uma festa no céu\nPara os animais que voam\nO cururu queria ir\nMas não sabia voar\nResolveu se esconder\nNa viola do urubu\nCantou e dançou na festa\nAté a hora de voltar\nO urubu desconfiou\nQuando voava pra terra\nSacudiu sua viola\nE o cururu despencou\nMas deu sorte o cururu\nPois caiu numa lagoa\nOutra festa lá no céu\nTão cedo ele não vai",
                    questions: [
                        { q: "PARA QUEM ERA A FESTA NO CÉU?", options: ["PARA TODOS OS ANIMAIS", "PARA OS ANIMAIS QUE VOAM", "PARA OS PEIXES"], correct: 1 },
                        { q: "COMO O CURURU FOI À FESTA?", options: ["VOANDO SOZINHO", "ESCONDIDO NA VIOLA DO URUBU", "DE AVIÃO"], correct: 1 },
                        { q: "ONDE O CURURU CAIU?", options: ["NO CHÃO", "NUMA LAGOA", "NUMA ÁRVORE"], correct: 1 }
                    ],
                    words_list: [],
                    pseudo_words: []
                },
                {
                    title: "A FADA LILICA",
                    code: "3BAVD25N9",
                    words: 95,
                    maxErrors: 6,
                    maxTime: "68 segundos",
                    timeLimit: 68,
                    text: "Lilica era uma fada muito atrapalhada. Sempre que usava sua vara mágica, a magia saia errada.\nCerto dia, ela estava perto do lago, quando a fada mãe fez um pedido:\n— Lilica, quero que use sua vara mágica e faça essa flor ser uma borboleta.\nLilica pegou sua vara, disse a palavra mágica e zap! Transformou a flor num sapo.\nLilica ficou triste e falou:\n— Ah! Não consigo usar direito minha vara mágica!\nA fada mãe sorrindo disse:\n— Calma, Lilica, é só treinar, que um dia será uma grande fada.\nLilica ficou ali com sua vara mágica e sapo virou pato, pato virou gato, gato virou galo.\nSerá que Lilica vai ser uma boa fada?",
                    questions: [
                        { q: "COMO ERA A FADA LILICA?", options: ["MUITO ESPERTA", "MUITO ATRAPALHADA", "MUITO PREGUIÇOSA"], correct: 1 },
                        { q: "O QUE A FADA MÃE PEDIU PARA LILICA FAZER?", options: ["TRANSFORMAR A FLOR EM BORBOLETA", "LIMPAR O LAGO", "VOAR ALTO"], correct: 0 },
                        { q: "O QUE A FADA MÃE DISSE PARA LILICA?", options: ["QUE ELA NUNCA APRENDERIA", "QUE É SÓ TREINAR QUE UM DIA SERÁ UMA GRANDE FADA", "QUE DEVERIA DESISTIR"], correct: 1 }
                    ],
                    words_list: [],
                    pseudo_words: []
                },
                {
                    title: "OS IRMÃOS E O PAR DE TÊNIS",
                    code: "3BAVD25N10",
                    words: 140,
                    maxErrors: 8,
                    maxTime: "94 segundos",
                    timeLimit: 94,
                    text: "Lucas e Luan são irmãos. Eles estudam na mesma escola. O curioso é que cada um estuda num turno diferente.\nNo dia da matrícula a diretora perguntou:\n— Não é melhor deixá-los no mesmo turno? Eles virão juntos. Um cuida do outro.\nA mãe respondeu:\n— Não senhora, é melhor assim. Cada um em um turno.\nLucas chegava cedinho com seu par de tênis branquinho.\nLuan chegava apressado com o seu par de tênis branco empoeirado e, às vezes, perdia a hora.\nNo final do semestre, a escola fez uma grande festa junina e, para a surpresa de todos, apenas Lucas participou. Os colegas e professores perguntavam por Luan e Lucas desconversava.\nPercebendo o embaraço do menino, a diretora chamou-o e perguntou:\n— Lucas, por que você e seu irmão nunca vêm juntos para a escola? – Nem mesmo hoje que é dia de festa?\nLucas sem saída respondeu:\n— É que só temos esse par de tênis.\nDona Odete, a diretora, resolveu tudo e no semestre seguinte Lucas e Luan começaram a estudar no mesmo horário.",
                    questions: [
                        { q: "QUAL ERA O CURIOSO SOBRE LUCAS E LUAN?", options: ["ERAM GÊMEOS", "ESTUDAVAM EM TURNOS DIFERENTES", "MORAVAM LONGE"], correct: 1 },
                        { q: "POR QUE LUCAS E LUAN NÃO VINHAM JUNTOS?", options: ["BRIGAVAM MUITO", "SÓ TINHAM UM PAR DE TÊNIS", "MORAVAM SEPARADOS"], correct: 1 },
                        { q: "O QUE A DIRETORA FEZ NO FINAL?", options: ["EXPULSOU OS MENINOS", "RESOLVEU TUDO E ELES PASSARAM A ESTUDAR NO MESMO HORÁRIO", "CHAMOU OS PAIS"], correct: 1 }
                    ],
                    words_list: [],
                    pseudo_words: []
                }
                ]
            },
            4: { // 4º e 5º ano
                1: [ // Série única
                {
                    title: "BRINCADEIRAS",
                    code: "4AAVD25N1",
                    words: 60,
                    maxErrors: 3,
                    maxTime: "31 segundos",
                    text: "Aline e Lara brincam de boneca na calçada.\nJoca e Ari jogam bola na rua.\nAri chuta forte e Joca fica nervoso.\nJoca vai embora e Ari fica sem seu amigo.\nAline e Lara convidam:\n— Joca, vem brincar com a gente!\nJoca responde:\n— Boneca é muito chato!\nAline e Lara falam juntas:\n— Mas nunca nos deixam sozinhas!",
                    questions: [
                        { q: "ONDE ALINE E LARA BRINCAM?", options: ["NA RUA", "NA CALÇADA", "NO QUINTAL"], correct: 1 },
                        { q: "POR QUE JOCA FICA NERVOSO?", options: ["ARI CHUTA FORTE", "PERDEU O JOGO", "CAIU DA BICICLETA"], correct: 0 },
                        { q: "O QUE JOCA ACHA DA BRINCADEIRA DE BONECA?", options: ["MUITO LEGAL", "MUITO CHATO", "MUITO FÁCIL"], correct: 1 }
                    ],
                    words_list: ["cadeira", "mochila", "planeta", "janela", "formiga", "estrela", "cavalo", "escola", "menino", "menina", "relógio", "cachorro", "professora", "montanha", "tomate", "travesseiro", "domingo", "parede", "mercado", "brinquedo", "bicicleta", "abacaxi", "sorriso", "palavra", "segredo", "cuidado", "família", "jardim", "amizade", "chuva", "floresta", "geladeira", "telefone", "oceano", "poesia", "trabalho", "viagem", "energia", "coração", "cadeira", "caneta", "coragem", "janela", "passeio", "papel", "domingo", "tigela", "pintura", "feitiço", "história", "esperança", "tesouro", "brinquedo", "abraço", "talento", "futuro", "caminho", "presente", "aventura"],
                    pseudo_words: ["famiro", "detura", "lonipe", "crevalo", "jumeta", "surilo", "tonica", "mavete", "plorin", "gatiro", "beluso", "tirona", "fradica", "mesuto", "navira", "zolipe", "duravo", "quenito", "lorava", "feluto", "pramina", "sotira", "galume", "tribano", "dorica", "velupa", "zanito", "cloripe", "mureza", "portila", "funeco", "grumita", "jecola", "ruvita", "pelume", "tavira", "zoreto", "quimora", "relupa", "someta"]
                },
                {
                    title: "O HOMEM TRISTE",
                    code: "4AAVD25N2",
                    words: 200,
                    maxErrors: 11,
                    maxTime: "115 segundos",
                    text: "Magrinho, cheio de mistérios. Quando ele vinha subindo a nossa rua, quase todos os meninos se escondiam. A gente não sabia bem se tinha medo dele. Falavam tanta coisa. A curiosidade era tão grande que quase não cabia dentro da gente. Parecia que ia transbordar de nós, vazar pelos olhos, pelo umbigo. Todos nós queríamos conhecê-lo melhor. Mas a gente tinha muito medo. Falavam tanta coisa. Ele dava boa tarde e meu pai respondia, sério. A gente olhava ressabiado, por trás dos adultos. Será que era verdade mesmo tudo o que diziam? O Lourenço, metido a sabido, garantia que era verdade. O avô dele era testemunha, vira tudo numa noite de lua cheia. Mas a gente não podia acreditar no Lourenço. Não inteiramente, o Lourenço fantasiava muito. Ele consertava coisas, construía outras. Fazia umas malas de madeira, revestidas de papel, umas estampas bonitas. Dava gosto de ver. Consertava guarda-chuvas, trocava o pano, soldava as hastes. Meu pai dizia que ele era um bom artesão. Quando subia a rua carregando a sua magreza a gente se escondia por trás dos adultos, o medo disputando com a curiosidade pra ver quem era mais forte. Criei coragem um dia e perguntei a minha mãe. Será que era verdade mesmo tudo o que diziam? Minha mãe riu, acariciou minha cabeça: É apenas um homem triste, meu filho, é apenas um homem triste.",
                    questions: [
                        { q: "COMO OS MENINOS REAGIAM QUANDO O HOMEM SUBIA A RUA?", options: ["CORRIAM PARA CUMPRIMENTÁ-LO", "QUASE TODOS SE ESCONDIAM", "BRINCAVAM COM ELE"], correct: 1 },
                        { q: "O QUE O LOURENÇO GARANTIA?", options: ["QUE O HOMEM ERA MENTIROSO", "QUE ERA VERDADE O QUE DIZIAM", "QUE O HOMEM ERA SEU AMIGO"], correct: 1 },
                        { q: "O QUE A MÃE RESPONDEU SOBRE O HOMEM?", options: ["QUE ELE ERA PERIGOSO", "QUE ERA APENAS UM HOMEM TRISTE", "QUE ELE ERA MÁGICO"], correct: 1 }
                    ],
                    words_list: ["cadeira", "mochila", "planeta", "janela", "formiga", "estrela", "cavalo", "escola", "menino", "menina", "relógio", "cachorro", "professora", "montanha", "tomate", "travesseiro", "domingo", "parede", "mercado", "brinquedo", "bicicleta", "abacaxi", "sorriso", "palavra", "segredo", "cuidado", "família", "jardim", "amizade", "chuva", "floresta", "geladeira", "telefone", "oceano", "poesia", "trabalho", "viagem", "energia", "coração", "cadeira", "caneta", "coragem", "janela", "passeio", "papel", "domingo", "tigela", "pintura", "feitiço", "história", "esperança", "tesouro", "brinquedo", "abraço", "talento", "futuro", "caminho", "presente", "aventura"],
                    pseudo_words: ["famiro", "detura", "lonipe", "crevalo", "jumeta", "surilo", "tonica", "mavete", "plorin", "gatiro", "beluso", "tirona", "fradica", "mesuto", "navira", "zolipe", "duravo", "quenito", "lorava", "feluto", "pramina", "sotira", "galume", "tribano", "dorica", "velupa", "zanito", "cloripe", "mureza", "portila", "funeco", "grumita", "jecola", "ruvita", "pelume", "tavira", "zoreto", "quimora", "relupa", "someta"]
                },
                {
                    title: "HISTÓRIAS DO MEU BAIRRO",
                    code: "4AAVD25N3",
                    words: 150,
                    maxErrors: 8,
                    maxTime: "80 segundos",
                    text: "O Zeca é meu colega de classe e é o meu melhor amigo também. A casa dele é parecida com a minha. Só que a casa do Zeca é mais afastada da rua. Por isso ele tem um espaço grande para brincar. Na casa do Zeca tem um quintal enorme, com duas mangueiras, um pé de caju, uma cacimba, muitos passarinhos e umas lagartixas. De vez em quando tem também umas borboletas e umas abelhas. A minha casa é diferente, o quintal é bem pequeno e só tem umas plantinhas miúdas que a mamãe plantou. Tem também pé de capim santo e de boldo que ela faz chá quando eu tenho dor de barriga. Mas o gosto do boldo é horrível. Por dentro, a minha casa parece com a do Zeca. Eu gosto da minha casa e gosto da casa da Zeca. Acho que tem que ser assim mesmo. Se todos os lugares fossem iguais, o mundo seria muito chato.",
                    questions: [
                        { q: "QUEM É O ZECA?", options: ["UM VIZINHO", "COLEGA DE CLASSE E MELHOR AMIGO", "UM PRIMO"], correct: 1 },
                        { q: "O QUE TEM NO QUINTAL DO ZECA?", options: ["APENAS PLANTAS", "MANGUEIRAS, PÉ DE CAJU, CACIMBA E ANIMAIS", "SÓ PASSARINHOS"], correct: 1 },
                        { q: "PARA QUE A MAMÃE USA O BOLDO?", options: ["PARA TEMPERAR COMIDA", "PARA FAZER CHÁ QUANDO TEM DOR DE BARRIGA", "PARA DECORAR O QUINTAL"], correct: 1 }
                    ],
                    words_list: ["cadeira", "mochila", "planeta", "janela", "formiga", "estrela", "cavalo", "escola", "menino", "menina", "relógio", "cachorro", "professora", "montanha", "tomate", "travesseiro", "domingo", "parede", "mercado", "brinquedo", "bicicleta", "abacaxi", "sorriso", "palavra", "segredo", "cuidado", "família", "jardim", "amizade", "chuva", "floresta", "geladeira", "telefone", "oceano", "poesia", "trabalho", "viagem", "energia", "coração", "cadeira", "caneta", "coragem", "janela", "passeio", "papel", "domingo", "tigela", "pintura", "feitiço", "história", "esperança", "tesouro", "brinquedo", "abraço", "talento", "futuro", "caminho", "presente", "aventura"],
                    pseudo_words: ["famiro", "detura", "lonipe", "crevalo", "jumeta", "surilo", "tonica", "mavete", "plorin", "gatiro", "beluso", "tirona", "fradica", "mesuto", "navira", "zolipe", "duravo", "quenito", "lorava", "feluto", "pramina", "sotira", "galume", "tribano", "dorica", "velupa", "zanito", "cloripe", "mureza", "portila", "funeco", "grumita", "jecola", "ruvita", "pelume", "tavira", "zoreto", "quimora", "relupa", "someta"]
                },
                {
                    title: "SINAL FECHADO",
                    code: "4AAVD25N4",
                    words: 180,
                    maxErrors: 10,
                    maxTime: "100 segundos",
                    text: "O homem ria, um riso ampliado pela maquiagem de palhaço. O menino olhava o riso do homem, que fazia malabarismos com tochas de fogo. Às vezes, o homem trocava os malabares de fogo por longas facas, e jogava-as para o alto, girando em carrossel. O menino olhava e tinha a impressão que as mãos do homem também riam. O riso descia para as mãos, e de lá para as facas e as tochas de fogo. Dos carros, alguém dava uma moeda, e o homem agradecia com o sorriso pintado. Ou será com o sorriso verdadeiro? As mãos do homem, quando o sinal fechava, moviam-se rápidas, os malabares no ar, criando asas, girando na noite. Eram pássaros de fogo, refletidos nos olhos do menino, hipnotizado pelas mãos mágicas do homem. Nos carros havia rostos vários. Uns que se abriam em um sorriso, como retribuição ao riso pintado no rosto do malabarista. Outros olhavam carrancudos, como se o homem atrapalhasse o trânsito. Outros olhavam e não viam nada, preocupados apenas com as suas vidas. Foi quando o olhar do homem encontrou o olhar do menino. E na noite escura, no sinal fechado, os dois sorrisos criaram asas, feito os malabares de fogo.",
                    questions: [
                        { q: "O QUE O HOMEM FAZIA NO SINAL?", options: ["VENDIA DOCES", "MALABARISMOS COM TOCHAS DE FOGO E FACAS", "CANTAVA MÚSICAS"], correct: 1 },
                        { q: "COMO O MENINO SE SENTIA VENDO O ESPETÁCULO?", options: ["ENTEDIADO", "HIPNOTIZADO PELAS MÃOS MÁGICAS", "COM MEDO"], correct: 1 },
                        { q: "O QUE ACONTECEU NO FINAL DA HISTÓRIA?", options: ["O HOMEM FOI EMBORA", "OS OLHARES SE ENCONTRARAM E OS SORRISOS CRIARAM ASAS", "O SINAL ABRIU"], correct: 1 }
                    ],
                    words_list: ["cadeira", "mochila", "planeta", "janela", "formiga", "estrela", "cavalo", "escola", "menino", "menina", "relógio", "cachorro", "professora", "montanha", "tomate", "travesseiro", "domingo", "parede", "mercado", "brinquedo", "bicicleta", "abacaxi", "sorriso", "palavra", "segredo", "cuidado", "família", "jardim", "amizade", "chuva", "floresta", "geladeira", "telefone", "oceano", "poesia", "trabalho", "viagem", "energia", "coração", "cadeira", "caneta", "coragem", "janela", "passeio", "papel", "domingo", "tigela", "pintura", "feitiço", "história", "esperança", "tesouro", "brinquedo", "abraço", "talento", "futuro", "caminho", "presente", "aventura"],
                    pseudo_words: ["famiro", "detura", "lonipe", "crevalo", "jumeta", "surilo", "tonica", "mavete", "plorin", "gatiro", "beluso", "tirona", "fradica", "mesuto", "navira", "zolipe", "duravo", "quenito", "lorava", "feluto", "pramina", "sotira", "galume", "tribano", "dorica", "velupa", "zanito", "cloripe", "mureza", "portila", "funeco", "grumita", "jecola", "ruvita", "pelume", "tavira", "zoreto", "quimora", "relupa", "someta"]
                },
                {
                    title: "UM EXTRATERRESTRE NO BRASIL",
                    code: "4AAVD25N5",
                    words: 200,
                    maxErrors: 9,
                    maxTime: "93 segundos",
                    text: "O capitão Zing desceu da sua nave espacial na praça central do reino de Blig. Uma multidão começou a aplaudir quando ele desceu. Duas bliguíneas, que é como se chamam as pessoas nascidas em Blig, correram para abraçar o capitão Zing. Elas levaram o capitão até o palácio real, onde o rei e seus ministros esperavam ansiosos. E o capitão Zing fez um relato detalhado. O planeta Terra é muito bonito, cheio de paisagens lindas, de lugares maravilhosos. Há pessoas de muitos tipos por lá, de cores diferentes, de costumes diversos. Há serras, rios, praias, cidades grandes e pequenas. Só tem uma coisa, parece que o povo da Terra não cuida bem do seu planeta. Lá também tem muita poluição, sujeira, guerra, gente passando fome. Na minha opinião, o melhor mesmo é ficarmos em Blig, nosso pequeno planeta. O rei e os ministros ouviram tudo e decidiram que o capitão tinha razão, era melhor ficar no seu próprio planeta. E o capitão Zing foi dormir, pensando no planeta Terra, e sonhou com Cecília, aquela brasileira tão bonita, de pele de cobre e olhos de esmeralda.",
                    questions: [
                        { q: "ONDE O CAPITÃO ZING DESCEU?", options: ["EM UMA FLORESTA", "NA PRAÇA CENTRAL DO REINO DE BLIG", "EM UMA PRAIA"], correct: 1 },
                        { q: "O QUE O CAPITÃO ACHOU DO PLANETA TERRA?", options: ["QUE É BONITO MAS O POVO NÃO CUIDA BEM DELE", "QUE É FEIO E PERIGOSO", "QUE É PERFEITO"], correct: 0 },
                        { q: "COM QUEM O CAPITÃO ZING SONHOU?", options: ["COM O REI DE BLIG", "COM CECÍLIA, UMA BRASILEIRA", "COM SUA FAMÍLIA"], correct: 1 }
                    ],
                    words_list: ["cadeira", "mochila", "planeta", "janela", "formiga", "estrela", "cavalo", "escola", "menino", "menina", "relógio", "cachorro", "professora", "montanha", "tomate", "travesseiro", "domingo", "parede", "mercado", "brinquedo", "bicicleta", "abacaxi", "sorriso", "palavra", "segredo", "cuidado", "família", "jardim", "amizade", "chuva", "floresta", "geladeira", "telefone", "oceano", "poesia", "trabalho", "viagem", "energia", "coração", "cadeira", "caneta", "coragem", "janela", "passeio", "papel", "domingo", "tigela", "pintura", "feitiço", "história", "esperança", "tesouro", "brinquedo", "abraço", "talento", "futuro", "caminho", "presente", "aventura"],
                    pseudo_words: ["famiro", "detura", "lonipe", "crevalo", "jumeta", "surilo", "tonica", "mavete", "plorin", "gatiro", "beluso", "tirona", "fradica", "mesuto", "navira", "zolipe", "duravo", "quenito", "lorava", "feluto", "pramina", "sotira", "galume", "tribano", "dorica", "velupa", "zanito", "cloripe", "mureza", "portila", "funeco", "grumita", "jecola", "ruvita", "pelume", "tavira", "zoreto", "quimora", "relupa", "someta"]
                },
                {
                    title: "QUEM NASCE AQUI É O QUÊ?",
                    code: "4AAVD25N6",
                    words: 150,
                    maxErrors: 7,
                    maxTime: "72 segundos",
                    text: "— Quem nasce no Ceará é o quê? Pergunta o meninozinho de carinha curiosa. — É cearense, diz o pai, preparado pra enfrentar uma série de perguntas. — E no Pernambuco, é pernambuquense? Pergunta o menininho com o olho claro brilhando. — Aí é pernambucano. Diz o pai, fazendo esforço procurando a paciência. — E quem nasce no Piauí, a gente diz piauiano? — E o pai, resignado, diz: — Não filho, é piauiense. E o menininho sapeca, pra mostrar que é inteligente diz pro pai que inventou outros nomes pra \"quem nasce\" — Lá em Santa Catarina a pessoa nasce num altar e no Rio de Janeiro é peixe uma vez por ano. Ao que o pai, desconsolado, olhando pro pequenino, diz: — E o que eu queria agora, era nascer lá na China, ou melhor, na Cochinchina, longe das tuas perguntas.",
                    questions: [
                        { q: "COMO É O MENININHO?", options: ["TÍMIDO E QUIETO", "CURIOSO E SAPECA", "TRISTE E CALADO"], correct: 1 },
                        { q: "QUEM NASCE NO PIAUÍ É CHAMADO DE QUÊ?", options: ["PIAUIANO", "PIAUIENSE", "PIAUENSE"], correct: 1 },
                        { q: "COMO O PAI SE SENTIA COM AS PERGUNTAS?", options: ["MUITO FELIZ", "DESCONSOLADO E SEM PACIÊNCIA", "ORGULHOSO"], correct: 1 }
                    ],
                    words_list: ["cadeira", "mochila", "planeta", "janela", "formiga", "estrela", "cavalo", "escola", "menino", "menina", "relógio", "cachorro", "professora", "montanha", "tomate", "travesseiro", "domingo", "parede", "mercado", "brinquedo", "bicicleta", "abacaxi", "sorriso", "palavra", "segredo", "cuidado", "família", "jardim", "amizade", "chuva", "floresta", "geladeira", "telefone", "oceano", "poesia", "trabalho", "viagem", "energia", "coração", "cadeira", "caneta", "coragem", "janela", "passeio", "papel", "domingo", "tigela", "pintura", "feitiço", "história", "esperança", "tesouro", "brinquedo", "abraço", "talento", "futuro", "caminho", "presente", "aventura"],
                    pseudo_words: ["famiro", "detura", "lonipe", "crevalo", "jumeta", "surilo", "tonica", "mavete", "plorin", "gatiro", "beluso", "tirona", "fradica", "mesuto", "navira", "zolipe", "duravo", "quenito", "lorava", "feluto", "pramina", "sotira", "galume", "tribano", "dorica", "velupa", "zanito", "cloripe", "mureza", "portila", "funeco", "grumita", "jecola", "ruvita", "pelume", "tavira", "zoreto", "quimora", "relupa", "someta"]
                },
                {
                    title: "BORBOLETAS AMARELAS",
                    code: "4AAVD25N7",
                    words: 140,
                    maxErrors: 6,
                    maxTime: "70 segundos",
                    text: "Em um lindo jardim, viviam a voar as belas borboletas amarelas: Lia, Bia e Mimi. Lia, Bia e Mimi gostavam de brincar voando entre as flores do jardim. Gostavam também de brincar com as joaninhas. Um dia, Bia, Lia e Mimi estavam brincando, voando alegres entre as flores, quando viram um bichinho que era muito diferente. Ele estava se arrastando no chão. Lia, Bia e Mimi perguntaram: — Quem é você? O bichinho respondeu: — Sou uma minhoca. — O que você faz? – perguntaram as borboletas. — Ah! Eu cuido da terra para as flores ficarem bem bonitas. — Que legal! – disseram as borboletas. E saíram voando entre as flores. Lindas bailarinas amarelas no ar! A minhoca continuou no chão a se arrastar, cumprindo a sua tarefa e ajudando a embelezar o jardim.",
                    questions: [
                        { q: "QUAIS SÃO OS NOMES DAS BORBOLETAS?", options: ["ANA, BIA E CAROL", "LIA, BIA E MIMI", "MARIA, JOÃO E PEDRO"], correct: 1 },
                        { q: "O QUE A MINHOCA FAZ?", options: ["VOA ENTRE AS FLORES", "CUIDA DA TERRA PARA AS FLORES FICAREM BONITAS", "BRINCA COM AS JOANINHAS"], correct: 1 },
                        { q: "COMO AS BORBOLETAS SÃO DESCRITAS NO FINAL?", options: ["COMO PÁSSAROS COLORIDOS", "COMO LINDAS BAILARINAS AMARELAS NO AR", "COMO FLORES VOANDO"], correct: 1 }
                    ],
                    words_list: ["cadeira", "mochila", "planeta", "janela", "formiga", "estrela", "cavalo", "escola", "menino", "menina", "relógio", "cachorro", "professora", "montanha", "tomate", "travesseiro", "domingo", "parede", "mercado", "brinquedo", "bicicleta", "abacaxi", "sorriso", "palavra", "segredo", "cuidado", "família", "jardim", "amizade", "chuva", "floresta", "geladeira", "telefone", "oceano", "poesia", "trabalho", "viagem", "energia", "coração", "cadeira", "caneta", "coragem", "janela", "passeio", "papel", "domingo", "tigela", "pintura", "feitiço", "história", "esperança", "tesouro", "brinquedo", "abraço", "talento", "futuro", "caminho", "presente", "aventura"],
                    pseudo_words: ["famiro", "detura", "lonipe", "crevalo", "jumeta", "surilo", "tonica", "mavete", "plorin", "gatiro", "beluso", "tirona", "fradica", "mesuto", "navira", "zolipe", "duravo", "quenito", "lorava", "feluto", "pramina", "sotira", "galume", "tribano", "dorica", "velupa", "zanito", "cloripe", "mureza", "portila", "funeco", "grumita", "jecola", "ruvita", "pelume", "tavira", "zoreto", "quimora", "relupa", "someta"]
                },
                {
                    title: "A MENINA E O PÁSSARO ENCANTADO",
                    code: "4AAVD25N8",
                    words: 120,
                    maxErrors: 5,
                    maxTime: "65 segundos",
                    text: "Era uma vez uma menina chamada Clara que adorava passear pelo jardim de sua avó. Um dia, ela encontrou um pássaro muito diferente dos outros. Suas penas brilhavam como diamantes e sua voz era doce como mel. O pássaro falou: — Olá, Clara! Eu sou um pássaro encantado e posso realizar um desejo seu. Clara ficou surpresa, mas logo pensou em seu desejo. — Eu quero que todas as crianças do mundo sejam felizes, disse ela. O pássaro sorriu e bateu as asas. De repente, uma luz dourada se espalhou pelo céu. — Seu desejo é muito bonito, Clara. Por isso, sempre que você sorrir, uma criança em algum lugar do mundo ficará mais feliz. E assim, Clara aprendeu que a verdadeira magia está em fazer o bem aos outros.",
                    questions: [
                        { q: "ONDE CLARA GOSTAVA DE PASSEAR?", options: ["NO PARQUE DA CIDADE", "NO JARDIM DE SUA AVÓ", "NA PRAIA"], correct: 1 },
                        { q: "QUAL FOI O DESEJO DE CLARA?", options: ["SER RICA", "QUE TODAS AS CRIANÇAS DO MUNDO SEJAM FELIZES", "TER MUITOS BRINQUEDOS"], correct: 1 },
                        { q: "O QUE CLARA APRENDEU?", options: ["QUE A MAGIA NÃO EXISTE", "QUE A VERDADEIRA MAGIA ESTÁ EM FAZER O BEM AOS OUTROS", "QUE OS PÁSSAROS SÃO PERIGOSOS"], correct: 1 }
                    ],
                    words_list: ["cadeira", "mochila", "planeta", "janela", "formiga", "estrela", "cavalo", "escola", "menino", "menina", "relógio", "cachorro", "professora", "montanha", "tomate", "travesseiro", "domingo", "parede", "mercado", "brinquedo", "bicicleta", "abacaxi", "sorriso", "palavra", "segredo", "cuidado", "família", "jardim", "amizade", "chuva", "floresta", "geladeira", "telefone", "oceano", "poesia", "trabalho", "viagem", "energia", "coração", "cadeira", "caneta", "coragem", "janela", "passeio", "papel", "domingo", "tigela", "pintura", "feitiço", "história", "esperança", "tesouro", "brinquedo", "abraço", "talento", "futuro", "caminho", "presente", "aventura"],
                    pseudo_words: ["famiro", "detura", "lonipe", "crevalo", "jumeta", "surilo", "tonica", "mavete", "plorin", "gatiro", "beluso", "tirona", "fradica", "mesuto", "navira", "zolipe", "duravo", "quenito", "lorava", "feluto", "pramina", "sotira", "galume", "tribano", "dorica", "velupa", "zanito", "cloripe", "mureza", "portila", "funeco", "grumita", "jecola", "ruvita", "pelume", "tavira", "zoreto", "quimora", "relupa", "someta"]
                },
                {
                    title: "O ROBÔ JARDINEIRO",
                    code: "4AAVD25N9",
                    words: 110,
                    maxErrors: 4,
                    maxTime: "60 segundos",
                    text: "No laboratório do professor Inventivo, havia um robô muito especial chamado Verde. Diferente dos outros robôs, Verde não foi programado para limpar ou cozinhar, mas sim para cuidar de plantas. Todos os dias, Verde regava as flores, podava as árvores e plantava sementes no jardim da escola. As crianças adoravam observar Verde trabalhando. Ele cantarolava enquanto cuidava das plantas e sempre sabia exatamente o que cada uma precisava. Um dia, uma das crianças perguntou: — Verde, como você sabe tanto sobre plantas? O robô respondeu com sua voz metálica mas carinhosa: — Porque eu as amo tanto quanto vocês amam seus amigos. O amor é a melhor programação que existe. E assim, Verde continuou cuidando do jardim, provando que até mesmo os robôs podem ter coração.",
                    questions: [
                        { q: "QUAL ERA A FUNÇÃO ESPECIAL DO ROBÔ VERDE?", options: ["LIMPAR A CASA", "CUIDAR DE PLANTAS", "COZINHAR"], correct: 1 },
                        { q: "O QUE VERDE FAZIA ENQUANTO TRABALHAVA?", options: ["CANTAROLAVA", "DORMIA", "BRIGAVA"], correct: 0 },
                        { q: "SEGUNDO VERDE, QUAL É A MELHOR PROGRAMAÇÃO?", options: ["A INTELIGÊNCIA", "O AMOR", "A VELOCIDADE"], correct: 1 }
                    ],
                    words_list: ["cadeira", "mochila", "planeta", "janela", "formiga", "estrela", "cavalo", "escola", "menino", "menina", "relógio", "cachorro", "professora", "montanha", "tomate", "travesseiro", "domingo", "parede", "mercado", "brinquedo", "bicicleta", "abacaxi", "sorriso", "palavra", "segredo", "cuidado", "família", "jardim", "amizade", "chuva", "floresta", "geladeira", "telefone", "oceano", "poesia", "trabalho", "viagem", "energia", "coração", "cadeira", "caneta", "coragem", "janela", "passeio", "papel", "domingo", "tigela", "pintura", "feitiço", "história", "esperança", "tesouro", "brinquedo", "abraço", "talento", "futuro", "caminho", "presente", "aventura"],
                    pseudo_words: ["famiro", "detura", "lonipe", "crevalo", "jumeta", "surilo", "tonica", "mavete", "plorin", "gatiro", "beluso", "tirona", "fradica", "mesuto", "navira", "zolipe", "duravo", "quenito", "lorava", "feluto", "pramina", "sotira", "galume", "tribano", "dorica", "velupa", "zanito", "cloripe", "mureza", "portila", "funeco", "grumita", "jecola", "ruvita", "pelume", "tavira", "zoreto", "quimora", "relupa", "someta"]
                },
                {
                    title: "A BIBLIOTECA MÁGICA",
                    code: "4AAVD25N10",
                    words: 130,
                    maxErrors: 6,
                    maxTime: "68 segundos",
                    text: "Sofia descobriu uma biblioteca muito especial em sua escola. Era diferente de todas as outras porque os livros tinham vida própria! Quando ela se aproximava das estantes, podia ouvir sussurros vindos dos livros. — Psiu, Sofia! Leia-me primeiro! — dizia um livro de aventuras. — Não, escolha-me! Tenho histórias de princesas! — gritava outro. Sofia ficou encantada e decidiu conversar com os livros. Ela descobriu que cada livro tinha uma personalidade única. O livro de ciências era muito curioso, o de matemática era organizado, e o de poesia era romântico. A bibliotecária, Dona Rosa, explicou: — Esta biblioteca é especial porque aqui os livros escolhem seus leitores. Eles sabem exatamente qual história cada criança precisa ouvir. Desde então, Sofia visitava a biblioteca todos os dias, sempre ansiosa para descobrir qual livro a escolheria.",
                    questions: [
                        { q: "O QUE TORNAVA A BIBLIOTECA ESPECIAL?", options: ["ERA MUITO GRANDE", "OS LIVROS TINHAM VIDA PRÓPRIA", "TINHA MUITOS COMPUTADORES"], correct: 1 },
                        { q: "COMO ERA A PERSONALIDADE DO LIVRO DE CIÊNCIAS?", options: ["ROMÂNTICO", "MUITO CURIOSO", "ORGANIZADO"], correct: 1 },
                        { q: "SEGUNDO DONA ROSA, COMO FUNCIONAVA A BIBLIOTECA?", options: ["OS LIVROS ESCOLHEM SEUS LEITORES", "AS CRIANÇAS ESCOLHEM QUALQUER LIVRO", "APENAS ADULTOS PODEM LER"], correct: 0 }
                    ],
                    words_list: ["cadeira", "mochila", "planeta", "janela", "formiga", "estrela", "cavalo", "escola", "menino", "menina", "relógio", "cachorro", "professora", "montanha", "tomate", "travesseiro", "domingo", "parede", "mercado", "brinquedo", "bicicleta", "abacaxi", "sorriso", "palavra", "segredo", "cuidado", "família", "jardim", "amizade", "chuva", "floresta", "geladeira", "telefone", "oceano", "poesia", "trabalho", "viagem", "energia", "coração", "cadeira", "caneta", "coragem", "janela", "passeio", "papel", "domingo", "tigela", "pintura", "feitiço", "história", "esperança", "tesouro", "brinquedo", "abraço", "talento", "futuro", "caminho", "presente", "aventura"],
                    pseudo_words: ["famiro", "detura", "lonipe", "crevalo", "jumeta", "surilo", "tonica", "mavete", "plorin", "gatiro", "beluso", "tirona", "fradica", "mesuto", "navira", "zolipe", "duravo", "quenito", "lorava", "feluto", "pramina", "sotira", "galume", "tribano", "dorica", "velupa", "zanito", "cloripe", "mureza", "portila", "funeco", "grumita", "jecola", "ruvita", "pelume", "tavira", "zoreto", "quimora", "relupa", "someta"]
                }
                ]
            }
        };
    return { testSeries, testsData };
})();

