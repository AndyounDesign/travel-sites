# 🌎 Planejador de Viagens - Orlando e Japão

Uma aplicação web interativa desenvolvida em React para planejamento de viagens para Orlando e Japão, com roteiros detalhados, estimativas de custos e ferramentas de planejamento.

## ✨ Funcionalidades

- **Roteiros Detalhados**: Planos de 17 dias para Orlando e 25 dias para o Japão
- **Estimativas de Custos**: Valores em reais e dólares para todas as categorias
- **Interface Responsiva**: Funciona perfeitamente em desktop e mobile
- **Visualizações Múltiplas**: Lista e calendário para os roteiros
- **Checkboxes Interativos**: Marque atividades conforme completa
- **Ferramentas de IA**: Geradores de listas e planos de refeições (em desenvolvimento)

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd travel-planner
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:3000
```

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework principal
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework de estilos
- **PostCSS** - Processamento de CSS

## 📁 Estrutura do Projeto

```
travel-planner/
├── src/
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Ponto de entrada
│   └── index.css        # Estilos globais
├── index.html           # HTML principal
├── package.json         # Dependências
├── vite.config.js       # Configuração Vite
├── tailwind.config.js   # Configuração Tailwind
└── postcss.config.js    # Configuração PostCSS
```

## 🎯 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter

## 🔧 Resolução de Problemas

### Erros Corrigidos:
- ✅ Estrutura HTML adequada para React
- ✅ Configuração correta do Vite
- ✅ Estilos CSS/Tailwind organizados
- ✅ Componentização adequada
- ✅ Responsividade para mobile

### Se encontrar problemas:
1. Certifique-se que todas as dependências estão instaladas
2. Verifique se o Node.js está na versão correta
3. Limpe o cache: `npm cache clean --force`
4. Delete `node_modules` e execute `npm install` novamente

## 📱 Funcionalidades por Destino

### Orlando (17 dias)
- Magic Kingdom, Hollywood Studios, Epcot, Animal Kingdom
- Universal Studios e Islands of Adventure
- SeaWorld e parques aquáticos
- Roteiro de compras e lazer
- Estimativas detalhadas de custos

### Japão (25 dias)
- Tóquio: cultura tradicional e moderna
- Quioto: templos e santuários
- Osaka: vida noturna e culinária
- Hiroshima e Miyajima
- Kanazawa e jardins

## 🚧 Próximas Funcionalidades

- [ ] Integração com APIs de IA para geração de listas
- [ ] Sistema de favoritos
- [ ] Exportação para PDF
- [ ] Sincronização com calendário
- [ ] Modo offline

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.