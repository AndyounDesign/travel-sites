import{r,j as e,C as a,B as h}from"./index-D7RSFwsc.js";const y=({destination:s})=>{const[i,u]=r.useState(""),[o,x]=r.useState(""),[d,g]=r.useState(""),[c,j]=r.useState(""),[n,m]=r.useState(!1),[t,p]=r.useState(!1),f=async()=>{i.trim()&&(m(!0),setTimeout(()=>{g(`
## Lista de Viagem Personalizada

### Documentos Essenciais
- Passaporte válido
- Visto americano/japonês
- Cartão de vacinação
- Vouchers de hotel e ingressos

### Roupas e Acessórios
- Roupas confortáveis para caminhada
- Protetor solar e chapéu
- Óculos de sol
- Tênis confortáveis para parques

### Eletrônicos
- Carregador portátil
- Adaptador de tomada
- Câmera/smartphone para fotos
- Cartão de memória extra

### Kit de Primeiros Socorros
- Analgésicos
- Curativos
- Remédios pessoais
- Repelente

### Específico para ${s==="orlando"?"Orlando":"Japão"}
${s==="orlando"?`- Capa de chuva (chuvas frequentes)
- Garrafa de água reutilizável
- Snacks para os parques`:`- Guia de frases em japonês
- Dinheiro em cash (muitos lugares não aceitam cartão)
- Chinelos para ryokan`}
      `),m(!1)},2e3))},v=async()=>{o.trim()&&(p(!0),setTimeout(()=>{j(`
## Plano de Refeições - ${s==="orlando"?"Orlando":"Japão"}

${s==="orlando"?`
### Café da Manhã
- **No hotel**: Aproveite o café da manhã incluído
- **Nos parques**: Starbucks ou Main Street Bakery

### Almoço nos Parques
- **Magic Kingdom**: Casey's Corner (hot dogs)
- **Epcot**: World Showcase (comidas internacionais)
- **Hollywood Studios**: Woody's Lunch Box
- **Animal Kingdom**: Yak & Yeti

### Jantar Especial
- **Be Our Guest** (Magic Kingdom) - reserva obrigatória
- **Space 220** (Epcot) - experiência única
- **Disney Springs**: The Boathouse

### Opções Econômicas
- Quick Service em todos os parques
- Comprar snacks no Walmart
- Food courts nos shoppings
`:`
### Café da Manhã
- **No hotel**: Café japonês tradicional
- **Convenience stores**: Onigiri e café

### Almoço
- **Ramen shops**: Experimente diferentes tipos
- **Bentô boxes**: Opção prática e saborosa
- **Sushi train**: Kaitenzushi

### Jantar Tradicional
- **Izakaya**: Bares japoneses com comida
- **Kaiseki**: Experiência gastronômica completa
- **Teppanyaki**: Cozinha na sua frente

### Experiências Únicas
- **Tsukiji Market**: Sushi de café da manhã
- **Memory Lane**: Yakitori bars
- **Depachika**: Basement de department stores
`}
      `),p(!1)},2e3))};return e.jsxs("div",{className:"space-y-6",children:[e.jsx(a,{children:e.jsxs(a.Header,{children:[e.jsxs("h2",{className:"heading-3",children:["Ferramentas de Planejamento - ",s==="orlando"?"Orlando":"Japão"]}),e.jsx("p",{className:"body-small",children:"Ferramentas inteligentes para personalizar sua viagem"})]})}),e.jsxs(a,{elevated:!0,children:[e.jsxs(a.Header,{children:[e.jsx("h3",{className:"heading-4 text-blue-600",children:"🎒 Gerador de Lista de Viagem"}),e.jsx("p",{className:"body-base",children:"Crie uma lista de viagem personalizada baseada nas suas preferências e necessidades."})]}),e.jsx(a.Content,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"lista-prompt",className:"block text-sm font-medium text-gray-700 mb-2",children:"Descreva suas preferências e necessidades especiais:"}),e.jsx("textarea",{id:"lista-prompt",value:i,onChange:l=>u(l.target.value),className:"form-input h-24 resize-none",placeholder:"Ex: Roupas para parques temáticos, eletrônicos para fotos, kit de primeiros socorros, atividades aquáticas..."})]}),e.jsx(h,{variant:"primary",onClick:f,loading:n,disabled:!i.trim()||n,className:"w-full sm:w-auto",children:n?"Gerando...":"Gerar Lista de Viagem"}),d&&e.jsx("div",{className:"mt-6 p-4 bg-white border border-gray-200 rounded-lg",children:e.jsx("pre",{className:"whitespace-pre-wrap text-sm text-gray-700 font-sans",children:d})})]})})]}),e.jsxs(a,{elevated:!0,children:[e.jsxs(a.Header,{children:[e.jsx("h3",{className:"heading-4 text-blue-600",children:"🍽️ Gerador de Plano de Refeições"}),e.jsx("p",{className:"body-base",children:"Crie um plano de refeições personalizado considerando seu roteiro e preferências."})]}),e.jsx(a.Content,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"refeicao-prompt",className:"block text-sm font-medium text-gray-700 mb-2",children:"Descreva suas preferências alimentares e orçamento:"}),e.jsx("textarea",{id:"refeicao-prompt",value:o,onChange:l=>x(l.target.value),className:"form-input h-24 resize-none",placeholder:"Ex: Opções de refeições rápidas e econômicas, um jantar romântico, restrições alimentares, budget para comida..."})]}),e.jsx(h,{variant:"primary",onClick:v,loading:t,disabled:!o.trim()||t,className:"w-full sm:w-auto",children:t?"Gerando...":"Gerar Plano de Refeições"}),c&&e.jsx("div",{className:"mt-6 p-4 bg-white border border-gray-200 rounded-lg",children:e.jsx("pre",{className:"whitespace-pre-wrap text-sm text-gray-700 font-sans",children:c})})]})})]}),e.jsxs(a,{children:[e.jsx(a.Header,{children:e.jsx("h3",{className:"heading-4 text-blue-600",children:"⚡ Ferramentas Rápidas"})}),e.jsx(a.Content,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"📱 Apps Recomendados"}),e.jsx("ul",{className:"text-sm text-blue-700 space-y-1",children:s==="orlando"?e.jsxs(e.Fragment,{children:[e.jsx("li",{children:"• My Disney Experience"}),e.jsx("li",{children:"• Universal Orlando Resort"}),e.jsx("li",{children:"• Uber/Lyft"}),e.jsx("li",{children:"• Google Maps"})]}):e.jsxs(e.Fragment,{children:[e.jsx("li",{children:"• Google Translate"}),e.jsx("li",{children:"• Hyperdia (trens)"}),e.jsx("li",{children:"• Google Maps"}),e.jsx("li",{children:"• Currency Converter"})]})})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"💡 Dicas Rápidas"}),e.jsx("ul",{className:"text-sm text-green-700 space-y-1",children:s==="orlando"?e.jsxs(e.Fragment,{children:[e.jsx("li",{children:"• Chegue 30min antes da abertura"}),e.jsx("li",{children:"• Use o Genie+ nos dias cheios"}),e.jsx("li",{children:"• Leve garrafa de água"}),e.jsx("li",{children:"• Download dos mapas offline"})]}):e.jsxs(e.Fragment,{children:[e.jsx("li",{children:"• JR Pass deve ser ativado na chegada"}),e.jsx("li",{children:"• Sempre tenha dinheiro em espécie"}),e.jsx("li",{children:"• Baixe tradutor offline"}),e.jsx("li",{children:"• Respeite as regras locais"})]})})]})]})})]})]})};export{y as default};
