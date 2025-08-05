import React from 'react';
import Card from './Card';

const TipsSection = ({ destination }) => {
  return (
    <Card>
      <Card.Header>
        <h2 className="heading-3">
          Dicas - {destination === 'orlando' ? 'Orlando' : 'Japão'}
        </h2>
        <p className="body-small">
          Dicas importantes e informações úteis
        </p>
      </Card.Header>
      <Card.Content>
        <div className="text-center py-12">
          <div className="text-6xl mb-4">💡</div>
          <h3 className="heading-4 mb-2">Em desenvolvimento</h3>
          <p className="body-base">
            A seção de dicas estará disponível em breve
          </p>
        </div>
      </Card.Content>
    </Card>
  );
};

export default TipsSection;