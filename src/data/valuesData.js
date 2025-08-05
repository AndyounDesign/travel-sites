export const orlandoValues = [
  {
    category: "Transporte",
    items: [
      {
        name: "Passagem Aérea",
        cost: "US$ 2.182 a US$ 4.364",
        description: "Voos de ida e volta, saindo de São Paulo, com escala."
      }
    ]
  },
  {
    category: "Hospedagem (17 noites)",
    items: [
      {
        name: "Hotel da Disney (econômico/moderado)",
        cost: "US$ 3.090 a US$ 7.727",
        description: "Custo total para 17 noites, com diárias entre US$ 180 e US$ 450."
      },
      {
        name: "Hotel 3 estrelas (fora do complexo)",
        cost: "US$ 927 a US$ 1.855",
        description: "Custo total para 17 noites, com diárias entre US$ 55 e US$ 110."
      },
      {
        name: "Hotel 4 estrelas (fora do complexo)",
        cost: "US$ 1.855 a US$ 3.090",
        description: "Custo total para 17 noites, com diárias entre US$ 110 e US$ 180."
      }
    ]
  },
  {
    category: "Ingressos dos Parques (8 dias de parque)",
    items: [
      {
        name: "Magic Kingdom (2 dias)",
        cost: "US$ 545 a US$ 691",
        description: "Entrada para o parque mais icônico da Disney."
      },
      {
        name: "Hollywood Studios (2 dias)",
        cost: "US$ 509 a US$ 636",
        description: "Parque com foco em cinema e aventuras radicais."
      },
      {
        name: "Epcot (2 dias)",
        cost: "US$ 473 a US$ 582",
        description: "Viagem ao redor do mundo e ao futuro."
      },
      {
        name: "Animal Kingdom (1 dia)",
        cost: "US$ 236 a US$ 291",
        description: "Foco em natureza e vida selvagem."
      },
      {
        name: "Universal Studios (1 dia)",
        cost: "US$ 254 a US$ 327",
        description: "Parque com atrações de cinema e séries de TV."
      },
      {
        name: "Islands of Adventure (1 dia)",
        cost: "US$ 254 a US$ 327",
        description: "Parque com montanhas-russas radicais e Harry Potter."
      },
      {
        name: "SeaWorld (1 dia)",
        cost: "US$ 182 a US$ 236",
        description: "Parque com vida marinha e montanhas-russas."
      },
      {
        name: "Parque Aquático (1 dia)",
        cost: "US$ 145 a US$ 200",
        description: "Universal's Volcano Bay ou Disney's Typhoon Lagoon."
      }
    ]
  },
  {
    category: "Outros Gastos",
    items: [
      {
        name: "Aluguel de Carro",
        cost: "US$ 273 a US$ 546",
        description: "Custo para 17 dias. Empresas confiáveis: Alamo, Enterprise, National."
      },
      {
        name: "Alimentação",
        cost: "US$ 1.818 a US$ 3.090",
        description: "Média de US$ 50 a US$ 85 por pessoa por dia."
      },
      {
        name: "Compras",
        cost: "US$ 1.090 a US$ 1.818",
        description: "Estimativa para roupas, presentes e eletrônicos."
      },
      {
        name: "Lazer Extra",
        cost: "US$ 200 a US$ 500",
        description: "Shows (Cirque du Soleil), mini-golf ou outras atividades."
      }
    ]
  }
];

export const japaoValues = [
  {
    category: "Transporte",
    items: [
      {
        name: "Passagem Aérea",
        cost: "US$ 1.500 a US$ 3.000",
        description: "Voos de ida e volta para Tóquio, com conexões."
      },
      {
        name: "JR Pass (14 dias)",
        cost: "US$ 435",
        description: "Passe para trens japoneses, incluindo shinkansen."
      },
      {
        name: "Transporte local",
        cost: "US$ 200 a US$ 300",
        description: "Metrô, ônibus e trens locais nas cidades."
      }
    ]
  },
  {
    category: "Hospedagem (13 noites)",
    items: [
      {
        name: "Hotel Business (3-4 estrelas)",
        cost: "US$ 1.300 a US$ 2.600",
        description: "Hotéis de qualidade em localizações centrais."
      },
      {
        name: "Ryokan Tradicional (2 noites)",
        cost: "US$ 400 a US$ 800",
        description: "Experiência autêntica japonesa com onsen."
      },
      {
        name: "Budget Hotel/Capsule",
        cost: "US$ 650 a US$ 1.300",
        description: "Opções econômicas mas limpas e funcionais."
      }
    ]
  },
  {
    category: "Alimentação e Experiências",
    items: [
      {
        name: "Alimentação",
        cost: "US$ 700 a US$ 1.400",
        description: "Média de US$ 50 a US$ 100 por pessoa por dia."
      },
      {
        name: "Experiências Culturais",
        cost: "US$ 200 a US$ 400",
        description: "Cerimônia do chá, aulas de culinária, shows tradicionais."
      },
      {
        name: "Compras e Souvenirs",
        cost: "US$ 500 a US$ 1.000",
        description: "Eletrônicos, roupas e lembranças típicas."
      }
    ]
  }
];

export const totalEstimates = {
  orlando: {
    min: "US$ 16.472",
    max: "US$ 27.390"
  },
  japao: {
    min: "US$ 8.500",
    max: "US$ 15.000"
  }
};