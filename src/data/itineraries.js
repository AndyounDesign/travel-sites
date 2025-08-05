// Orlando Complete Itinerary
export const orlandoItinerary = [
  {
    day: 1,
    title: "Chegada em Orlando",
    description: "Chegue em Orlando (MCO), retire o carro alugado e faça o check-in no hotel. Aproveite o restante do dia para descansar e se aclimatar. Uma boa opção é explorar a área do hotel e jantar em um restaurante próximo.",
    activities: []
  },
  {
    day: 2,
    title: "✨ Magic Kingdom",
    description: "O dia começa no parque mais icônico da Disney! Chegue 30 minutos antes do horário de abertura. Comece pelas atrações mais concorridas na Fantasyland e Tomorrowland.",
    activities: [
      {
        id: 'mk-1',
        name: "Seven Dwarfs Mine Train",
        tip: "A atração mais concorrida da Fantasyland. Vá assim que o parque abrir.",
        time: "9:00"
      },
      {
        id: 'mk-2',
        name: "Peter Pan's Flight",
        tip: "Outra atração clássica que cria filas longas rapidamente.",
        time: "9:30"
      },
      {
        id: 'mk-3',
        name: "Jungle Cruise",
        tip: "Passeio de barco descontraído com piadas de guias hilárias.",
        time: "11:00"
      },
      {
        id: 'mk-4',
        name: "Haunted Mansion",
        tip: "Uma das atrações mais icônicas da Disney, não pode faltar.",
        time: "14:00"
      },
      {
        id: 'mk-5',
        name: "Space Mountain",
        tip: "Montanha-russa no escuro na Tomorrowland, divertida e clássica.",
        time: "16:00"
      },
      {
        id: 'mk-6',
        name: "Assistir ao desfile e ao show de fogos noturno",
        tip: "Assista o desfile na Main Street U.S.A. e o show de fogos na frente do castelo.",
        time: "20:00"
      },
      {
        id: 'mk-7',
        name: "Alimentação",
        tip: "Coma no Casey's Corner para cachorros-quentes ou reserve o Be Our Guest (caro).",
        time: "12:00"
      }
    ]
  },
  {
    day: 3,
    title: "🎬 Hollywood Studios",
    description: "Mergulhe no mundo do cinema. As atrações de Star Wars são muito concorridas, então use o sistema de fura-fila aqui.",
    activities: [
      {
        id: 'hs-1',
        name: "Star Wars: Rise of the Resistance",
        tip: "Uma das atrações mais impressionantes da Disney. Agende a Lightning Lane individual assim que disponível.",
        time: "9:00"
      },
      {
        id: 'hs-2',
        name: "Slinky Dog Dash",
        tip: "Montanha-russa divertida na Toy Story Land. Chegue cedo ou use o Genie+.",
        time: "10:30"
      },
      {
        id: 'hs-3',
        name: "The Twilight Zone Tower of Terror",
        tip: "Clássico da adrenalina. Vá no final do dia para pegar menos fila.",
        time: "18:00"
      },
      {
        id: 'hs-4',
        name: "Mickey & Minnie's Runaway Railway",
        tip: "Uma atração moderna e cheia de efeitos visuais.",
        time: "14:00"
      },
      {
        id: 'hs-5',
        name: "Assistir ao 'Fantasmic!'",
        tip: "O show noturno é imperdível. Chegue com 30-45 minutos de antecedência para pegar um bom lugar.",
        time: "21:00"
      },
      {
        id: 'hs-6',
        name: "Alimentação",
        tip: "Almoce no Woody's Lunch Box (rápido) ou no Sci-Fi Dine-In Theater (temático).",
        time: "12:00"
      }
    ]
  },
  {
    day: 4,
    title: "🌐 Epcot",
    description: "Um dia de volta ao mundo e de olho no futuro. Na parte da manhã, explore o 'Future World' e o 'World Celebration'. À tarde, caminhe pelos pavilhões do 'World Showcase'.",
    activities: [
      {
        id: 'epcot-1',
        name: "Guardians of the Galaxy: Cosmic Rewind",
        tip: "Montanha-russa fechada e moderna. Requer agendamento de fila virtual ou Lightning Lane individual.",
        time: "9:00"
      },
      {
        id: 'epcot-2',
        name: "Remy's Ratatouille Adventure",
        tip: "Simulador 4D divertido no pavilhão da França. Chegue cedo ou use o Genie+.",
        time: "11:00"
      },
      {
        id: 'epcot-3',
        name: "Test Track",
        tip: "Atração de alta velocidade. É uma das mais concorridas.",
        time: "13:00"
      },
      {
        id: 'epcot-4',
        name: "Soarin' Around the World",
        tip: "Simulador de voo sobre as maravilhas do mundo.",
        time: "15:00"
      },
      {
        id: 'epcot-5',
        name: "Passear pelo World Showcase",
        tip: "Visite os 11 pavilhões de países e experimente a culinária do EPCOT International Food & Wine Festival.",
        time: "16:00"
      },
      {
        id: 'epcot-6',
        name: "Alimentação",
        tip: "O Space 220 oferece uma experiência única. Explore as opções de comidas dos países do World Showcase.",
        time: "18:00"
      }
    ]
  },
  {
    day: 5,
    title: "🛍️ Dia de Compras e Lazer",
    description: "Momento de descanso dos parques. Visite os outlets e shoppings para aproveitar os preços. Almoce no Disney Springs, o complexo de entretenimento e lojas da Disney.",
    activities: [
      {
        id: 'compras-1',
        name: "Visitar o Orlando International Premium Outlets",
        tip: "Outlet com as melhores marcas e preços",
        time: "10:00"
      },
      {
        id: 'compras-2',
        name: "Visitar o The Florida Mall",
        tip: "Shopping tradicional com diversas lojas",
        time: "14:00"
      },
      {
        id: 'compras-3',
        name: "Passear e almoçar no Disney Springs",
        tip: "Complexo de entretenimento da Disney",
        time: "16:00"
      },
      {
        id: 'compras-4',
        name: "Jantar no The Boathouse (Disney Springs)",
        tip: "Restaurante temático com frutos do mar",
        time: "19:00"
      }
    ]
  },
  {
    day: 6,
    title: "🌎 Animal Kingdom",
    description: "Dia de explorar a natureza e a vida selvagem. Chegue cedo e vá direto para a área de Pandora para as atrações mais concorridas.",
    activities: [
      {
        id: 'ak-1',
        name: "Avatar Flight of Passage",
        tip: "A atração principal do parque, chegue cedo ou use o Lightning Lane.",
        time: "9:00"
      },
      {
        id: 'ak-2',
        name: "Kilimanjaro Safaris",
        tip: "Passeio de safári. Vá pela manhã, quando os animais estão mais ativos.",
        time: "10:30"
      },
      {
        id: 'ak-3',
        name: "Expedition Everest",
        tip: "Montanha-russa radical com um visual incrível.",
        time: "14:00"
      },
      {
        id: 'ak-4',
        name: "Assistir ao 'Festival of the Lion King'",
        tip: "Um dos melhores shows de palco dos parques, com muita música e acrobacias.",
        time: "16:00"
      },
      {
        id: 'ak-5',
        name: "Alimentação",
        tip: "Restaurante temático Tiffins ou Yak & Yeti, com comida asiática.",
        time: "12:00"
      }
    ]
  },
  {
    day: 7,
    title: "🪄 Universal Studios",
    description: "Dia de visitar o primeiro parque da Universal. Concentre-se nas áreas de 'Diagon Alley' (Harry Potter) e 'Springfield' (Os Simpsons).",
    activities: [
      {
        id: 'us-1',
        name: "Harry Potter and the Escape from Gringotts",
        tip: "A atração principal de Harry Potter no Diagon Alley.",
        time: "9:00"
      },
      {
        id: 'us-2',
        name: "Despicable Me Minion Mayhem",
        tip: "Simulador 3D divertido para todas as idades.",
        time: "11:00"
      },
      {
        id: 'us-3',
        name: "Transformers: The Ride-3D",
        tip: "Simulador de alta tecnologia que te coloca no meio da ação.",
        time: "13:00"
      },
      {
        id: 'us-4',
        name: "Andar no trem 'Hogwarts Express'",
        tip: "Conecta os dois parques temáticos da Universal e é uma atração por si só. É preciso ter ingresso Park-to-Park.",
        time: "15:00"
      },
      {
        id: 'us-5',
        name: "Alimentação",
        tip: "Jantar no Leaky Cauldron ou no Finnegan's Bar & Grill (pub irlandês).",
        time: "18:00"
      }
    ]
  },
  {
    day: 8,
    title: "🎢 Islands of Adventure",
    description: "O parque das montanhas-russas radicais. Explore a área do Jurassic Park, a Ilha da Marvel e a vila de Hogsmeade.",
    activities: [
      {
        id: 'ioa-1',
        name: "Hagrid's Magical Creatures Motorbike Adventure",
        tip: "A montanha-russa mais popular, chegue cedo ou prepare-se para a fila.",
        time: "9:00"
      },
      {
        id: 'ioa-2',
        name: "The Incredible Hulk Coaster",
        tip: "Montanha-russa radical do Hulk.",
        time: "11:00"
      },
      {
        id: 'ioa-3',
        name: "Jurassic Park River Adventure",
        tip: "Passeio de barco que termina com uma queda emocionante.",
        time: "13:00"
      },
      {
        id: 'ioa-4',
        name: "Harry Potter and the Forbidden Journey",
        tip: "Simulador que te leva dentro do Castelo de Hogwarts.",
        time: "15:00"
      },
      {
        id: 'ioa-5',
        name: "Alimentação",
        tip: "Three Broomsticks para um almoço temático e Butterbeer.",
        time: "12:00"
      }
    ]
  },
  {
    day: 9,
    title: "🛍️ Mais Compras e Lazer",
    description: "Outro dia de descanso para ir nas lojas que faltaram, ou para relaxar na piscina do hotel.",
    activities: [
      {
        id: 'compras2-1',
        name: "Visitar o The Mall at Millenia (lojas de luxo)",
        tip: "Shopping com marcas de luxo",
        time: "10:00"
      },
      {
        id: 'compras2-2',
        name: "Visitar lojas de departamento como Ross e Marshalls",
        tip: "Lojas com preços mais acessíveis",
        time: "14:00"
      }
    ]
  },
  {
    day: 10,
    title: "🎢 Seaworld",
    description: "Dia dedicado a um parque diferente, focado em atrações com temática marinha e montanhas-russas radicais. O parque também possui shows de golfinhos e orcas.",
    activities: [
      {
        id: 'sw-1',
        name: "Manta",
        tip: "Montanha-russa que simula o voo de uma arraia.",
        time: "9:00"
      },
      {
        id: 'sw-2',
        name: "Mako",
        tip: "Montanha-russa hypercoaster inspirada em tubarões.",
        time: "11:00"
      },
      {
        id: 'sw-3',
        name: "Kraken",
        tip: "Montanha-russa sem chão que faz 7 inversões.",
        time: "13:00"
      },
      {
        id: 'sw-4',
        name: "Show de golfinhos 'Dolphin Days'",
        tip: "Assista o show de golfinhos e outras apresentações com animais.",
        time: "15:00"
      }
    ]
  },
  {
    day: 11,
    title: "☀️ Parque Aquático",
    description: "Um dia para se refrescar. Visite o Universal's Volcano Bay ou Disney's Typhoon Lagoon para aproveitar os toboáguas e piscinas de ondas.",
    activities: [
      {
        id: 'aq-1',
        name: "Aproveitar os toboáguas e piscinas de ondas",
        tip: "Relaxe e se divirta nas atrações aquáticas",
        time: "10:00"
      },
      {
        id: 'aq-2',
        name: "Destaque: O Vulcão Krakatau do Volcano Bay",
        tip: "A principal atração do parque aquático",
        time: "14:00"
      }
    ]
  },
  {
    day: 12,
    title: "🛍️ Compras e Lazer",
    description: "Aproveite o dia para comprar lembranças, visitar o Walmart ou o Target para comprar snacks e produtos que valem a pena.",
    activities: [
      {
        id: 'compras3-1',
        name: "Comprar lembranças e presentes",
        tip: "Últimas lembranças da viagem",
        time: "10:00"
      },
      {
        id: 'compras3-2',
        name: "Visitar o Walmart ou o Target",
        tip: "Produtos com preços melhores",
        time: "12:00"
      },
      {
        id: 'compras3-3',
        name: "Visitar as lojas de departamento Ross e TJ Maxx",
        tip: "Ofertas e descontos",
        time: "14:00"
      }
    ]
  },
  {
    day: 13,
    title: "🎨 Retorno ao Parque Favorito",
    description: "Escolha o seu parque favorito da Disney ou da Universal para um dia de despedida. É a chance de repetir as atrações que mais gostaram!",
    activities: [
      {
        id: 'retorno-1',
        name: "Escolher e visitar o parque favorito",
        tip: "Último dia nos parques, aproveite suas atrações favoritas",
        time: "9:00"
      }
    ]
  },
  {
    day: 14,
    title: "🛍️ Últimas Compras",
    description: "Dia perfeito para as últimas compras. Passe nos Outlets novamente ou explore um shopping que ainda não conheceu.",
    activities: [
      {
        id: 'ultimas-1',
        name: "Voltar aos Outlets",
        tip: "Últimas oportunidades de compras",
        time: "10:00"
      },
      {
        id: 'ultimas-2',
        name: "Explorar um shopping diferente",
        tip: "Descobrir novas lojas",
        time: "14:00"
      }
    ]
  },
  {
    day: 15,
    title: "🍔 Dia de Lazer",
    description: "Relaxe no hotel, curta a piscina ou faça um último passeio em um restaurante temático. Jante no CityWalk da Universal ou no Disney Springs para um clima de despedida.",
    activities: [
      {
        id: 'lazer-1',
        name: "Relaxar no hotel",
        tip: "Aproveite as facilidades do hotel",
        time: "10:00"
      },
      {
        id: 'lazer-2',
        name: "Jantar no CityWalk ou Disney Springs",
        tip: "Última experiência gastronômica",
        time: "19:00"
      }
    ]
  },
  {
    day: 16,
    title: "✈️ Dia Livre e Organização",
    description: "Último dia para se despedir, arrumar as malas e se preparar para a volta. Aproveite a manhã para tomar um café da manhã especial.",
    activities: [
      {
        id: 'organizacao-1',
        name: "Arrumar as malas",
        tip: "Organize tudo para a viagem de volta",
        time: "10:00"
      },
      {
        id: 'organizacao-2',
        name: "Tomar um café da manhã especial",
        tip: "Última refeição especial em Orlando",
        time: "8:00"
      }
    ]
  },
  {
    day: 17,
    title: "Retorno ao Brasil",
    description: "Check-out do hotel e retorno ao Aeroporto de Orlando (MCO) para o voo de volta ao Brasil.",
    activities: []
  }
];

// Japan Complete Itinerary
export const japaoItinerary = [
  {
    day: 1,
    title: "Chegada em Tóquio",
    description: "Chegue ao Aeroporto de Narita ou Haneda, pegue o trem para o centro de Tóquio e faça check-in no hotel.",
    activities: [
      {
        id: 'jp-1',
        name: "JR Pass Exchange",
        tip: "Troque seu voucher do JR Pass no aeroporto",
        time: "Após chegada"
      },
      {
        id: 'jp-2',
        name: "Check-in no hotel",
        tip: "Descanse e se acostume com o fuso horário",
        time: "15:00"
      }
    ]
  },
  {
    day: 2,
    title: "🏛️ Tóquio - Asakusa e Skytree",
    description: "Explore o bairro tradicional de Asakusa e visite a Tokyo Skytree.",
    activities: [
      {
        id: 'jp2-1',
        name: "Templo Senso-ji",
        tip: "O templo mais antigo de Tóquio, chegue cedo para evitar multidões",
        time: "9:00"
      },
      {
        id: 'jp2-2',
        name: "Nakamise Street",
        tip: "Rua de compras tradicional que leva ao templo",
        time: "10:00"
      },
      {
        id: 'jp2-3',
        name: "Tokyo Skytree",
        tip: "Torre mais alta do Japão com vista panorâmica",
        time: "14:00"
      },
      {
        id: 'jp2-4',
        name: "Jantar em Asakusa",
        tip: "Experimente tempura em um restaurante tradicional",
        time: "18:00"
      }
    ]
  },
  {
    day: 3,
    title: "🏯 Tóquio - Shibuya e Harajuku",
    description: "Mergulhe na cultura jovem e moderna de Tóquio.",
    activities: [
      {
        id: 'jp3-1',
        name: "Shibuya Crossing",
        tip: "O cruzamento mais famoso do mundo",
        time: "9:00"
      },
      {
        id: 'jp3-2',
        name: "Estátua Hachiko",
        tip: "Ponto de encontro famoso e história emocionante",
        time: "9:30"
      },
      {
        id: 'jp3-3',
        name: "Takeshita Street",
        tip: "Rua da moda jovem em Harajuku",
        time: "11:00"
      },
      {
        id: 'jp3-4',
        name: "Santuário Meiji",
        tip: "Oásis de tranquilidade no meio da cidade",
        time: "13:00"
      },
      {
        id: 'jp3-5',
        name: "Cat Street",
        tip: "Rua alternativa com boutiques únicas",
        time: "15:00"
      }
    ]
  },
  {
    day: 4,
    title: "🎌 Tóquio - Imperial Palace e Ginza",
    description: "Visite o centro histórico e o distrito de luxo de Tóquio.",
    activities: [
      {
        id: 'jp4-1',
        name: "East Gardens do Palácio Imperial",
        tip: "Jardins gratuitos, lindos principalmente na primavera",
        time: "9:00"
      },
      {
        id: 'jp4-2',
        name: "Distrito de Ginza",
        tip: "Centro de compras de luxo, perfeito para window shopping",
        time: "11:00"
      },
      {
        id: 'jp4-3',
        name: "Tsukiji Outer Market",
        tip: "Mercado de peixe famoso, prove sushi fresco",
        time: "13:00"
      }
    ]
  },
  {
    day: 5,
    title: "🚄 Viagem para Kyoto",
    description: "Pegue o shinkansen (trem-bala) para Kyoto e explore a antiga capital.",
    activities: [
      {
        id: 'jp5-1',
        name: "Shinkansen para Kyoto",
        tip: "Experiência única no trem-bala mais famoso do mundo",
        time: "8:00"
      },
      {
        id: 'jp5-2',
        name: "Templo Kiyomizu-dera",
        tip: "Templo com vista panorâmica da cidade",
        time: "11:00"
      },
      {
        id: 'jp5-3',
        name: "Distrito de Gion",
        tip: "Área histórica onde você pode avistar gueixas",
        time: "14:00"
      },
      {
        id: 'jp5-4',
        name: "Santuário Fushimi Inari",
        tip: "Milhares de torii vermelhos na montanha",
        time: "16:00"
      }
    ]
  },
  {
    day: 6,
    title: "🌸 Kyoto - Bamboo Grove e Monkey Park",
    description: "Explore Arashiyama e suas belezas naturais.",
    activities: [
      {
        id: 'jp6-1',
        name: "Bamboo Grove",
        tip: "Floresta de bambu mais famosa do Japão",
        time: "9:00"
      },
      {
        id: 'jp6-2',
        name: "Templo Tenryu-ji",
        tip: "Templo zen com jardins deslumbrantes",
        time: "10:30"
      },
      {
        id: 'jp6-3',
        name: "Monkey Park Iwatayama",
        tip: "Vista da cidade com macacos selvagens",
        time: "13:00"
      },
      {
        id: 'jp6-4',
        name: "Distrito de Pontocho",
        tip: "Rua estreita com restaurantes tradicionais",
        time: "18:00"
      }
    ]
  },
  {
    day: 7,
    title: "🦌 Nara - Day Trip",
    description: "Visite a antiga capital e os famosos cervos de Nara.",
    activities: [
      {
        id: 'jp7-1',
        name: "Parque de Nara",
        tip: "Alimente os cervos sagrados (compre biscoitos no local)",
        time: "10:00"
      },
      {
        id: 'jp7-2',
        name: "Templo Todai-ji",
        tip: "Abriga a maior estátua de Buda de bronze do Japão",
        time: "11:30"
      },
      {
        id: 'jp7-3',
        name: "Santuário Kasuga Taisha",
        tip: "Conhecido por suas milhares de lanternas",
        time: "13:30"
      },
      {
        id: 'jp7-4',
        name: "Retorno a Kyoto",
        tip: "Trem local, cerca de 45 minutos",
        time: "16:00"
      }
    ]
  },
  {
    day: 8,
    title: "🏰 Osaka - Castelo e Dotonbori",
    description: "Visite Osaka, a capital gastronômica do Japão.",
    activities: [
      {
        id: 'jp8-1',
        name: "Castelo de Osaka",
        tip: "Reconstrução histórica com museu interno",
        time: "9:00"
      },
      {
        id: 'jp8-2',
        name: "Dotonbori",
        tip: "Distrito famoso por comida de rua e letreiros neon",
        time: "12:00"
      },
      {
        id: 'jp8-3',
        name: "Experimente takoyaki",
        tip: "Especialidade local - bolinhos de polvo",
        time: "13:00"
      },
      {
        id: 'jp8-4',
        name: "Kuromon Ichiba Market",
        tip: "Mercado com frutos do mar frescos e frutas",
        time: "15:00"
      }
    ]
  },
  {
    day: 9,
    title: "🗻 Hakone - Monte Fuji",
    description: "Viagem para ver o Monte Fuji e relaxar em onsen.",
    activities: [
      {
        id: 'jp9-1',
        name: "Hakone Ropeway",
        tip: "Teleférico com vista do Monte Fuji (se o tempo permitir)",
        time: "10:00"
      },
      {
        id: 'jp9-2',
        name: "Lago Ashi",
        tip: "Passeio de barco pirata com vista do Fuji",
        time: "12:00"
      },
      {
        id: 'jp9-3',
        name: "Onsen (fonte termal)",
        tip: "Experiência relaxante tradicional japonesa",
        time: "15:00"
      },
      {
        id: 'jp9-4',
        name: "Pernoite em ryokan",
        tip: "Hotel tradicional japonês com tatami e futon",
        time: "18:00"
      }
    ]
  },
  {
    day: 10,
    title: "🏮 Retorno a Tóquio - Shinjuku",
    description: "Volte para Tóquio e explore o distrito de Shinjuku.",
    activities: [
      {
        id: 'jp10-1',
        name: "Parque Shinjuku Gyoen",
        tip: "Um dos melhores parques para hanami (flores de cerejeira)",
        time: "10:00"
      },
      {
        id: 'jp10-2',
        name: "Observatório do Tokyo Metropolitan Building",
        tip: "Vista gratuita da cidade do prédio do governo",
        time: "13:00"
      },
      {
        id: 'jp10-3',
        name: "Memory Lane (Omoide Yokocho)",
        tip: "Rua de yakitori bars minúsculos",
        time: "18:00"
      },
      {
        id: 'jp10-4',
        name: "Kabukicho",
        tip: "Distrito de entretenimento noturno",
        time: "20:00"
      }
    ]
  },
  {
    day: 11,
    title: "🐟 Tsukiji e Akihabara",
    description: "Mercado de peixe pela manhã e distrito eletrônico à tarde.",
    activities: [
      {
        id: 'jp11-1',
        name: "Tsukiji Outer Market",
        tip: "Chegue cedo para sushi de café da manhã",
        time: "6:00"
      },
      {
        id: 'jp11-2',
        name: "Ginza para compras",
        tip: "Lojas de departamento e boutiques",
        time: "10:00"
      },
      {
        id: 'jp11-3',
        name: "Akihabara",
        tip: "Distrito eletrônico e de anime/manga",
        time: "14:00"
      },
      {
        id: 'jp11-4',
        name: "Maid Café",
        tip: "Experiência cultural única (opcional)",
        time: "16:00"
      }
    ]
  },
  {
    day: 12,
    title: "🌊 Kamakura - Day Trip",
    description: "Visite a cidade costeira histórica de Kamakura.",
    activities: [
      {
        id: 'jp12-1',
        name: "Grande Buda de Kamakura",
        tip: "Estátua de bronze gigante ao ar livre",
        time: "10:00"
      },
      {
        id: 'jp12-2',
        name: "Templo Hase-dera",
        tip: "Templo com jardins e vista do mar",
        time: "11:30"
      },
      {
        id: 'jp12-3',
        name: "Rua Komachi-dori",
        tip: "Rua comercial com lojas e comidas locais",
        time: "13:00"
      },
      {
        id: 'jp12-4',
        name: "Praia de Kamakura",
        tip: "Relaxe na praia (melhor no verão)",
        time: "15:00"
      }
    ]
  },
  {
    day: 13,
    title: "🛍️ Últimas Compras",
    description: "Dia para últimas compras e experiências em Tóquio.",
    activities: [
      {
        id: 'jp13-1',
        name: "Ameya-Yokocho Market",
        tip: "Mercado de rua com produtos vintage e comida",
        time: "10:00"
      },
      {
        id: 'jp13-2',
        name: "Don Quijote",
        tip: "Loja de departamento 24h com produtos únicos",
        time: "12:00"
      },
      {
        id: 'jp13-3',
        name: "Roppongi Hills",
        tip: "Centro comercial moderno com arte",
        time: "15:00"
      },
      {
        id: 'jp13-4',
        name: "Jantar de despedida",
        tip: "Escolha um restaurante especial para a última noite",
        time: "19:00"
      }
    ]
  },
  {
    day: 14,
    title: "✈️ Retorno ao Brasil",
    description: "Check-out do hotel e partida do Aeroporto de Narita ou Haneda.",
    activities: [
      {
        id: 'jp14-1',
        name: "Check-out e organização",
        tip: "Arrume as malas e organize as compras",
        time: "10:00"
      },
      {
        id: 'jp14-2',
        name: "Viagem ao aeroporto",
        tip: "Use o Narita Express ou o trem para Haneda",
        time: "12:00"
      }
    ]
  }
];