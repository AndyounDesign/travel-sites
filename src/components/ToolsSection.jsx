import React from 'react';
import Card from './Card';

const ToolsSection = ({ destination }) => {
  return (
    <Card>
      <Card.Header>
        <h2 className="heading-3">
          Ferramentas - {destination === 'orlando' ? 'Orlando' : 'Japão'}
        </h2>
        <p className="body-small">
          Apps e recursos úteis para sua viagem
        </p>
      </Card.Header>
      <Card.Content>
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🛠️</div>
          <h3 className="heading-4 mb-2">Em desenvolvimento</h3>
          <p className="body-base">
            A seção de ferramentas estará disponível em breve
          </p>
        </div>
      </Card.Content>
    </Card>
  );
};

export default ToolsSection;