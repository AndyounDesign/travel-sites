import React from 'react';
import Button from './Button';

const Navigation = ({ tabs, activeTab, onTabChange, className = '' }) => {
  return (
    <nav className={`flex border-b border-gray-200 ${className}`} role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={activeTab === tab.id}
          aria-controls={`panel-${tab.id}`}
          className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.icon && <span className="mr-2">{tab.icon}</span>}
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

const TabPanel = ({ id, activeTab, children, className = '' }) => {
  if (activeTab !== id) return null;
  
  return (
    <div
      id={`panel-${id}`}
      role="tabpanel"
      aria-labelledby={`tab-${id}`}
      className={`animate-fade-in ${className}`}
    >
      {children}
    </div>
  );
};

const ViewToggle = ({ 
  options, 
  value, 
  onChange, 
  size = 'sm',
  className = '' 
}) => {
  return (
    <div className={`inline-flex bg-gray-100 rounded-lg p-1 ${className}`}>
      {options.map((option) => (
        <Button
          key={option.id}
          variant={value === option.id ? 'primary' : 'ghost'}
          size={size}
          icon={option.icon}
          onClick={() => onChange(option.id)}
          className={value === option.id ? 'shadow-sm' : ''}
          title={option.title}
        >
          <span className="sr-only md:not-sr-only">{option.label}</span>
        </Button>
      ))}
    </div>
  );
};

Navigation.TabPanel = TabPanel;
Navigation.ViewToggle = ViewToggle;

export default Navigation;