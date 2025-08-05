import React, { useState, useEffect, Suspense, lazy } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Navigation from './components/Navigation';
import Drawer from './components/Drawer';
import TravelDay from './components/TravelDay';
import { orlandoItinerary, japaoItinerary } from './data/itineraries';

// Lazy load heavy components for better performance
const CalendarView = lazy(() => import('./components/CalendarView'));
const ValuesSection = lazy(() => import('./components/ValuesSection'));
const ToolsSection = lazy(() => import('./components/ToolsSection'));
const TipsSection = lazy(() => import('./components/TipsSection'));

const App = () => {
  // Core state management
  const [activePage, setActivePage] = useState('orlando');
  const [activeTab, setActiveTab] = useState('roteiro');
  const [roteiroView, setRoteiroView] = useState('lista');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDrawerCollapsed, setIsDrawerCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false);

  // Responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Navigation handlers
  const handlePageChange = (page) => {
    setLoading(true);
    setActivePage(page);
    setActiveTab('roteiro');
    
    if (isMobile) {
      setIsDrawerOpen(false);
    }
    
    // Simulate loading for better UX
    setTimeout(() => setLoading(false), 300);
  };

  const handleTabChange = (tab) => {
    setLoading(true);
    setActiveTab(tab);
    setTimeout(() => setLoading(false), 200);
  };

  const toggleDrawer = () => {
    if (isMobile) {
      setIsDrawerOpen(!isDrawerOpen);
    } else {
      setIsDrawerCollapsed(!isDrawerCollapsed);
    }
  };

  // Navigation configuration
  const destinationPages = [
    {
      id: 'orlando',
      label: 'Orlando',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 'japao',
      label: 'Japão',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const contentTabs = [
    { id: 'roteiro', label: 'Roteiro', icon: '📅' },
    { id: 'valores', label: 'Valores', icon: '💰' },
    { id: 'ferramentas', label: 'Ferramentas', icon: '🛠️' },
    { id: 'dicas', label: 'Dicas', icon: '💡' }
  ];

  const viewToggleOptions = [
    { 
      id: 'lista', 
      label: 'Lista', 
      title: 'Visualização em lista',
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      )
    },
    { 
      id: 'calendario', 
      label: 'Calendário', 
      title: 'Visualização em calendário',
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const currentItinerary = activePage === 'orlando' ? orlandoItinerary : japaoItinerary;
  const pageTitle = activePage === 'orlando' ? 'Sua Viagem para Orlando' : 'Sua Viagem para o Japão';
  const pageSubtitle = activePage === 'orlando' ? 'Roteiro e Custos Detalhados para 17 dias' : 'Aventura Cultural de 14 dias';

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar Navigation */}
      <Drawer
        isOpen={isDrawerOpen}
        isCollapsed={isDrawerCollapsed}
        onToggle={toggleDrawer}
        isMobile={isMobile}
      >
        <div className="space-y-2">
          {destinationPages.map((page) => (
            <Drawer.Item
              key={page.id}
              icon={page.icon}
              label={page.label}
              active={activePage === page.id}
              collapsed={isDrawerCollapsed}
              onClick={() => handlePageChange(page.id)}
            />
          ))}
        </div>
      </Drawer>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        <div className="container py-8">
          {/* Page Header */}
          <header className="text-center mb-8 animate-fade-in">
            <h1 className="heading-1 text-blue-600 mb-2">
              {pageTitle}
            </h1>
            <p className="body-large">
              {pageSubtitle}
            </p>
          </header>

          {/* Content Navigation */}
          <div className="mb-8">
            <Navigation
              tabs={contentTabs}
              activeTab={activeTab}
              onTabChange={handleTabChange}
              className="justify-center"
            />
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center py-12">
              <div className="loading-spinner h-8 w-8 text-blue-600" />
            </div>
          )}

          {/* Content Panels */}
          {!loading && (
            <div className="animate-fade-in">
              <Navigation.TabPanel id="roteiro" activeTab={activeTab}>
                <Card>
                  <Card.Header>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h2 className="heading-3">
                          Roteiro Diário ({currentItinerary.length} dias)
                        </h2>
                        <p className="body-small">
                          Detalhes dos dias e atividades planejadas
                        </p>
                      </div>
                      
                      <Navigation.ViewToggle
                        options={viewToggleOptions}
                        value={roteiroView}
                        onChange={setRoteiroView}
                      />
                    </div>
                  </Card.Header>

                  <Card.Content>
                    {roteiroView === 'lista' ? (
                      <div className="space-y-6">
                        {currentItinerary.map((day) => (
                          <TravelDay
                            key={day.day}
                            day={day.day}
                            title={day.title}
                            description={day.description}
                            activities={day.activities}
                          />
                        ))}
                      </div>
                    ) : (
                      <Suspense fallback={
                        <div className="h-64 flex items-center justify-center">
                          <div className="loading-spinner h-8 w-8 text-blue-600" />
                        </div>
                      }>
                        <CalendarView itinerary={currentItinerary} />
                      </Suspense>
                    )}
                  </Card.Content>
                </Card>
              </Navigation.TabPanel>

              <Navigation.TabPanel id="valores" activeTab={activeTab}>
                <Suspense fallback={
                  <div className="h-64 flex items-center justify-center">
                    <div className="loading-spinner h-8 w-8 text-blue-600" />
                  </div>
                }>
                  <ValuesSection destination={activePage} />
                </Suspense>
              </Navigation.TabPanel>

              <Navigation.TabPanel id="ferramentas" activeTab={activeTab}>
                <Suspense fallback={
                  <div className="h-64 flex items-center justify-center">
                    <div className="loading-spinner h-8 w-8 text-blue-600" />
                  </div>
                }>
                  <ToolsSection destination={activePage} />
                </Suspense>
              </Navigation.TabPanel>

              <Navigation.TabPanel id="dicas" activeTab={activeTab}>
                <Suspense fallback={
                  <div className="h-64 flex items-center justify-center">
                    <div className="loading-spinner h-8 w-8 text-blue-600" />
                  </div>
                }>
                  <TipsSection destination={activePage} />
                </Suspense>
              </Navigation.TabPanel>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;