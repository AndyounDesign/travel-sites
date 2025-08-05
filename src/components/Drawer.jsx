import React from 'react';
import Button from './Button';

const Drawer = ({ 
  isOpen, 
  isCollapsed, 
  onToggle, 
  isMobile, 
  children 
}) => {
  const MenuIcon = () => (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );

  const CloseIcon = () => (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  const ChevronRightIcon = () => (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );

  const ChevronLeftIcon = () => (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );

  const getToggleIcon = () => {
    if (isMobile) {
      return isOpen ? <CloseIcon /> : <MenuIcon />;
    }
    return isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />;
  };

  return (
    <>
      {/* Drawer */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-20 bg-white shadow-xl border-r border-gray-200
          transform transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:relative md:translate-x-0
          ${isCollapsed ? 'md:w-16' : 'md:w-64'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h2 className={`
            font-bold text-xl text-gray-900 transition-all duration-300
            ${isCollapsed ? 'md:opacity-0 md:w-0 md:overflow-hidden' : 'opacity-100'}
          `}>
            Planos
          </h2>
          
          <Button
            variant="ghost"
            size="sm"
            icon={getToggleIcon()}
            onClick={onToggle}
            title={isCollapsed ? "Expandir menu" : "Recolher menu"}
            aria-label={isCollapsed ? "Expandir menu" : "Recolher menu"}
          />
        </div>

        {/* Content */}
        <div className="p-4">
          {children}
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden animate-fade-in"
          onClick={onToggle}
          aria-hidden="true"
        />
      )}

      {/* Mobile Toggle Button - Only show when drawer is closed */}
      {isMobile && !isOpen && (
        <Button
          variant="secondary"
          size="sm"
          icon={<MenuIcon />}
          onClick={onToggle}
          className="fixed top-4 left-4 z-30 shadow-lg md:hidden"
          title="Abrir menu"
          aria-label="Abrir menu de navegação"
        />
      )}
    </>
  );
};

const DrawerItem = ({ 
  icon, 
  label, 
  active = false, 
  collapsed = false, 
  onClick 
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 p-3 rounded-lg text-left
        font-medium transition-all duration-200
        ${active 
          ? 'bg-blue-600 text-white shadow-sm' 
          : 'text-gray-700 hover:bg-gray-100'
        }
      `}
      title={collapsed ? label : undefined}
    >
      <span className="flex-shrink-0">
        {icon}
      </span>
      <span className={`
        transition-all duration-300
        ${collapsed ? 'md:opacity-0 md:w-0 md:overflow-hidden' : 'opacity-100'}
      `}>
        {label}
      </span>
    </button>
  );
};

Drawer.Item = DrawerItem;

export default Drawer;