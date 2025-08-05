import React, { useState } from 'react';
import Card from './Card';

const TravelDay = ({ 
  day, 
  title, 
  description, 
  activities = [], 
  className = '' 
}) => {
  const [completedActivities, setCompletedActivities] = useState(new Set());

  const toggleActivity = (activityId) => {
    const newCompleted = new Set(completedActivities);
    if (newCompleted.has(activityId)) {
      newCompleted.delete(activityId);
    } else {
      newCompleted.add(activityId);
    }
    setCompletedActivities(newCompleted);
  };

  const completionPercentage = activities.length > 0 
    ? Math.round((completedActivities.size / activities.length) * 100)
    : 0;

  return (
    <Card elevated className={`animate-fade-in ${className}`}>
      <Card.Header>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="heading-3 text-blue-600 mb-2">
              Dia {day}: {title}
            </h3>
            <p className="body-base">
              {description}
            </p>
          </div>
          
          {activities.length > 0 && (
            <div className="ml-4 text-center">
              <div className={`
                text-2xl font-bold 
                ${completionPercentage === 100 ? 'text-green-600' : 'text-gray-400'}
              `}>
                {completionPercentage}%
              </div>
              <div className="text-xs text-gray-500">
                {completedActivities.size}/{activities.length}
              </div>
            </div>
          )}
        </div>
        
        {activities.length > 0 && (
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`
                  h-2 rounded-full transition-all duration-500
                  ${completionPercentage === 100 ? 'bg-green-500' : 'bg-blue-500'}
                `}
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>
        )}
      </Card.Header>

      {activities.length > 0 && (
        <Card.Content>
          <div className="space-y-3">
            {activities.map((activity, index) => (
              <ActivityItem
                key={activity.id || index}
                activity={activity}
                completed={completedActivities.has(activity.id || index)}
                onToggle={() => toggleActivity(activity.id || index)}
              />
            ))}
          </div>
        </Card.Content>
      )}
    </Card>
  );
};

const ActivityItem = ({ activity, completed, onToggle }) => {
  return (
    <div className={`
      flex items-start gap-3 p-3 rounded-lg transition-all duration-200
      ${completed 
        ? 'bg-green-50 border border-green-200' 
        : 'bg-gray-50 hover:bg-gray-100'
      }
    `}>
      <button
        onClick={onToggle}
        className={`
          form-checkbox mt-0.5 transition-all duration-200
          ${completed ? 'text-green-600 bg-green-100' : ''}
        `}
        aria-label={`${completed ? 'Desmarcar' : 'Marcar'} ${activity.name}`}
      >
        <input 
          type="checkbox" 
          checked={completed}
          onChange={onToggle}
          className="sr-only"
        />
        <div className={`
          w-4 h-4 rounded border-2 flex items-center justify-center
          ${completed 
            ? 'bg-green-600 border-green-600' 
            : 'border-gray-300 bg-white'
          }
        `}>
          {completed && (
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      </button>

      <div className="flex-1 min-w-0">
        <div className={`
          font-medium transition-all duration-200
          ${completed 
            ? 'text-green-800 line-through' 
            : 'text-gray-800'
          }
        `}>
          {activity.name}
        </div>
        
        {activity.tip && (
          <div className="body-small mt-1 text-gray-600">
            💡 {activity.tip}
          </div>
        )}
        
        {activity.time && (
          <div className="text-xs text-gray-500 mt-1">
            🕐 {activity.time}
          </div>
        )}
      </div>
    </div>
  );
};

export default TravelDay;