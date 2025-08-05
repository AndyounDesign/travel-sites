import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';

const ToolsSection = ({ destination }) => {
  const [listaPrompt, setListaPrompt] = useState('');
  const [refeicaoPrompt, setRefeicaoPrompt] = useState('');
  const [listaOutput, setListaOutput] = useState('');
  const [refeicaoOutput, setRefeicaoOutput] = useState('');
  const [listaLoading, setListaLoading] = useState(false);
  const [refeicaoLoading, setRefeicaoLoading] = useState(false);

  const generateTravelList = async () => {
    if (!listaPrompt.trim()) return;
    
    setListaLoading(true);
    
    // Simulated AI response - in a real app, you'd call an AI API
    setTimeout(() => {
      setListaOutput(`
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

### Específico para ${destination === 'orlando' ? 'Orlando' : 'Japão'}
${destination === 'orlando' 
  ? '- Capa de chuva (chuvas frequentes)\n- Garrafa de água reutilizável\n- Snacks para os parques'
  : '- Guia de frases em japonês\n- Dinheiro em cash (muitos lugares não aceitam cartão)\n- Chinelos para ryokan'
}
      `);
      setListaLoading(false);
    }, 2000);
  };

  const generateMealPlan = async () => {
    if (!refeicaoPrompt.trim()) return;
    
    setRefeicaoLoading(true);
    
    setTimeout(() => {
      setRefeicaoOutput(`
## Plano de Refeições - ${destination === 'orlando' ? 'Orlando' : 'Japão'}

${destination === 'orlando' ? `
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
` : `
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
      `);
      setRefeicaoLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <Card>
        <Card.Header>
          <h2 className="heading-3">
            Ferramentas de Planejamento - {destination === 'orlando' ? 'Orlando' : 'Japão'}
          </h2>
          <p className="body-small">
            Ferramentas inteligentes para personalizar sua viagem
          </p>
        </Card.Header>
      </Card>

      {/* Travel List Generator */}
      <Card elevated>
        <Card.Header>
          <h3 className="heading-4 text-blue-600">
            🎒 Gerador de Lista de Viagem
          </h3>
          <p className="body-base">
            Crie uma lista de viagem personalizada baseada nas suas preferências e necessidades.
          </p>
        </Card.Header>
        
        <Card.Content>
          <div className="space-y-4">
            <div>
              <label htmlFor="lista-prompt" className="block text-sm font-medium text-gray-700 mb-2">
                Descreva suas preferências e necessidades especiais:
              </label>
              <textarea
                id="lista-prompt"
                value={listaPrompt}
                onChange={(e) => setListaPrompt(e.target.value)}
                className="form-input h-24 resize-none"
                placeholder="Ex: Roupas para parques temáticos, eletrônicos para fotos, kit de primeiros socorros, atividades aquáticas..."
              />
            </div>
            
            <Button
              variant="primary"
              onClick={generateTravelList}
              loading={listaLoading}
              disabled={!listaPrompt.trim() || listaLoading}
              className="w-full sm:w-auto"
            >
              {listaLoading ? 'Gerando...' : 'Gerar Lista de Viagem'}
            </Button>
            
            {listaOutput && (
              <div className="mt-6 p-4 bg-white border border-gray-200 rounded-lg">
                <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans">
                  {listaOutput}
                </pre>
              </div>
            )}
          </div>
        </Card.Content>
      </Card>

      {/* Meal Plan Generator */}
      <Card elevated>
        <Card.Header>
          <h3 className="heading-4 text-blue-600">
            🍽️ Gerador de Plano de Refeições
          </h3>
          <p className="body-base">
            Crie um plano de refeições personalizado considerando seu roteiro e preferências.
          </p>
        </Card.Header>
        
        <Card.Content>
          <div className="space-y-4">
            <div>
              <label htmlFor="refeicao-prompt" className="block text-sm font-medium text-gray-700 mb-2">
                Descreva suas preferências alimentares e orçamento:
              </label>
              <textarea
                id="refeicao-prompt"
                value={refeicaoPrompt}
                onChange={(e) => setRefeicaoPrompt(e.target.value)}
                className="form-input h-24 resize-none"
                placeholder="Ex: Opções de refeições rápidas e econômicas, um jantar romântico, restrições alimentares, budget para comida..."
              />
            </div>
            
            <Button
              variant="primary"
              onClick={generateMealPlan}
              loading={refeicaoLoading}
              disabled={!refeicaoPrompt.trim() || refeicaoLoading}
              className="w-full sm:w-auto"
            >
              {refeicaoLoading ? 'Gerando...' : 'Gerar Plano de Refeições'}
            </Button>
            
            {refeicaoOutput && (
              <div className="mt-6 p-4 bg-white border border-gray-200 rounded-lg">
                <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans">
                  {refeicaoOutput}
                </pre>
              </div>
            )}
          </div>
        </Card.Content>
      </Card>

      {/* Quick Tools */}
      <Card>
        <Card.Header>
          <h3 className="heading-4 text-blue-600">
            ⚡ Ferramentas Rápidas
          </h3>
        </Card.Header>
        
        <Card.Content>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2">
                📱 Apps Recomendados
              </h4>
              <ul className="text-sm text-blue-700 space-y-1">
                {destination === 'orlando' ? (
                  <>
                    <li>• My Disney Experience</li>
                    <li>• Universal Orlando Resort</li>
                    <li>• Uber/Lyft</li>
                    <li>• Google Maps</li>
                  </>
                ) : (
                  <>
                    <li>• Google Translate</li>
                    <li>• Hyperdia (trens)</li>
                    <li>• Google Maps</li>
                    <li>• Currency Converter</li>
                  </>
                )}
              </ul>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-800 mb-2">
                💡 Dicas Rápidas
              </h4>
              <ul className="text-sm text-green-700 space-y-1">
                {destination === 'orlando' ? (
                  <>
                    <li>• Chegue 30min antes da abertura</li>
                    <li>• Use o Genie+ nos dias cheios</li>
                    <li>• Leve garrafa de água</li>
                    <li>• Download dos mapas offline</li>
                  </>
                ) : (
                  <>
                    <li>• JR Pass deve ser ativado na chegada</li>
                    <li>• Sempre tenha dinheiro em espécie</li>
                    <li>• Baixe tradutor offline</li>
                    <li>• Respeite as regras locais</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default ToolsSection;