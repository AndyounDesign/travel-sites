import React, { useState } from 'react';
import Card from './Card';
import { orlandoValues, japaoValues, totalEstimates } from '../data/valuesData';

const ValuesSection = ({ destination }) => {
  const [checkedItems, setCheckedItems] = useState(new Set());
  const isOrlando = destination === 'orlando';
  const values = isOrlando ? orlandoValues : japaoValues;
  const total = isOrlando ? totalEstimates.orlando : totalEstimates.japao;

  const toggleItem = (categoryIndex, itemIndex) => {
    const key = `${categoryIndex}-${itemIndex}`;
    const newChecked = new Set(checkedItems);
    if (newChecked.has(key)) {
      newChecked.delete(key);
    } else {
      newChecked.add(key);
    }
    setCheckedItems(newChecked);
  };

  return (
    <Card>
      <Card.Header>
        <h2 className="heading-3">
          Orçamento - {isOrlando ? 'Orlando' : 'Japão'}
        </h2>
        <p className="body-small">
          Estimativas de custos para sua viagem
        </p>
      </Card.Header>
      
      <Card.Content>
        <div className="space-y-8">
          {values.map((category, categoryIndex) => (
            <div key={categoryIndex} className="border-l-4 border-blue-600 pl-6">
              <h3 className="heading-4 text-blue-600 mb-4">
                {category.category}
              </h3>
              
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => {
                  const itemKey = `${categoryIndex}-${itemIndex}`;
                  const isChecked = checkedItems.has(itemKey);
                  
                  return (
                    <div
                      key={itemIndex}
                      className={`
                        p-4 rounded-lg border transition-all duration-200 cursor-pointer
                        ${isChecked 
                          ? 'bg-green-50 border-green-200' 
                          : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                        }
                      `}
                      onClick={() => toggleItem(categoryIndex, itemIndex)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex items-center mt-1">
                          <div className={`
                            w-4 h-4 rounded border-2 flex items-center justify-center transition-all duration-200
                            ${isChecked 
                              ? 'bg-green-600 border-green-600' 
                              : 'border-gray-300 bg-white'
                            }
                          `}>
                            {isChecked && (
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h4 className={`
                              font-medium transition-all duration-200
                              ${isChecked 
                                ? 'text-green-800 line-through' 
                                : 'text-gray-800'
                              }
                            `}>
                              {item.name}
                            </h4>
                            
                            <div className={`
                              text-lg font-bold transition-all duration-200
                              ${isChecked 
                                ? 'text-green-600' 
                                : 'text-blue-600'
                              }
                            `}>
                              {item.cost}
                            </div>
                          </div>
                          
                          <p className="body-small mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Card.Content>

      <Card.Footer>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 bg-blue-600 text-white rounded-lg">
          <h3 className="text-xl font-bold">
            Total Estimado
          </h3>
          <div className="text-2xl font-bold">
            {total.min} a {total.max}
          </div>
        </div>
        
        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex gap-2">
            <svg className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <h4 className="font-medium text-yellow-800">
                Importante
              </h4>
              <p className="text-sm text-yellow-700 mt-1">
                Os valores são estimativas baseadas em preços médios. Custos podem variar conforme a temporada, 
                câmbio do dólar e escolhas pessoais. Recomenda-se adicionar 10-20% como margem de segurança.
              </p>
            </div>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default ValuesSection;