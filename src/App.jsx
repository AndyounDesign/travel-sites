import React, { useState } from 'react';

const App = () => {
    const [activePage, setActivePage] = useState('orlando');
    const [activeTab, setActiveTab] = useState('roteiro');
    const [roteiroView, setRoteiroView] = useState('lista');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Funções para gerenciamento das abas
    const setPage = (page) => {
        setActivePage(page);
        setActiveTab('roteiro');
        setIsDrawerOpen(false); // Fecha o drawer ao selecionar uma página
    };

    const handleRoteiroViewChange = (view) => {
        setRoteiroView(view);
    };

    const RoteiroViewToggle = ({ view, onViewChange }) => (
        <div className="flex mt-4 md:mt-0">
            <button
                className={`sub-nav-button text-sm mr-2 ${view === 'lista' ? 'active' : 'text-gray-600'}`}
                onClick={() => onViewChange('lista')}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M3 7a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 19a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            </button>
            <button
                className={`sub-nav-button text-sm ${view === 'calendario' ? 'active' : 'text-gray-600'}`}
                onClick={() => onViewChange('calendario')}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M6 3a1 1 0 011-1h2a1 1 0 011 1v1h4V3a1 1 0 011-1h2a1 1 0 011 1v1h2a2 2 0 012 2v13a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2h2V3a1 1 0 011-1zm6 5a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1h-4z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    );

    const orlandoContent = (
        <div id="orlando-plan">
            <header className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#1e40af] mb-2">Sua Viagem para Orlando</h1>
                <p className="text-lg md:text-xl text-gray-600">Roteiro e Custos Detalhados para 17 dias</p>
            </header>

            <nav className="flex justify-center border-b border-gray-300 mb-8">
                <button
                    className={`tab-button py-4 px-6 md:px-12 text-lg font-medium transition-colors duration-200 ${activeTab === 'roteiro' ? 'active' : ''}`}
                    onClick={() => setActiveTab('roteiro')}
                >
                    Roteiro
                </button>
                <button
                    className={`tab-button py-4 px-6 md:px-12 text-lg font-medium transition-colors duration-200 ${activeTab === 'valores' ? 'active' : ''}`}
                    onClick={() => setActiveTab('valores')}
                >
                    Valores
                </button>
                <button
                    className={`tab-button py-4 px-6 md:px-12 text-lg font-medium transition-colors duration-200 ${activeTab === 'ferramentas' ? 'active' : ''}`}
                    onClick={() => setActiveTab('ferramentas')}
                >
                    Ferramentas
                </button>
                <button
                    className={`tab-button py-4 px-6 md:px-12 text-lg font-medium transition-colors duration-200 ${activeTab === 'dicas' ? 'active' : ''}`}
                    onClick={() => setActiveTab('dicas')}
                >
                    Dicas
                </button>
            </nav>

            <main className="bg-white p-4 md:p-8 rounded-lg shadow-xl">
                {activeTab === 'roteiro' && (
                    <section id="roteiro" className="tab-content active">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-700">Roteiro Diário (17 dias)</h2>
                                <p className="text-sm text-gray-500">Detalhes dos dias e atividades planejadas.</p>
                            </div>
                            <RoteiroViewToggle view={roteiroView} onViewChange={handleRoteiroViewChange} />
                        </div>

                        {roteiroView === 'lista' && (
                            <div id="roteiro-lista" className="roteiro-sub-content">
                                {/* Day 1 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dia 1: Chegada em Orlando</h3>
                                    <p className="text-gray-700">Chegue em Orlando (MCO), retire o carro alugado e faça o check-in no hotel. Aproveite o restante do dia para descansar e se aclimatar. Uma boa opção é explorar a área do hotel e jantar em um restaurante próximo.</p>
                                </div>
                                {/* Day 2 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dia 2: ✨ Magic Kingdom</h3>
                                    <p className="text-gray-700">O dia começa no parque mais icônico da Disney! Chegue 30 minutos antes do horário de abertura. Comece pelas atrações mais concorridas na Fantasyland e Tomorrowland.</p>
                                    <ul className="list-none mt-4 text-gray-600">
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="mk-atracao-1" />
                                            <label htmlFor="mk-atracao-1">Seven Dwarfs Mine Train</label>
                                        </li>
                                        <span className="text-auxiliar">A atração mais concorrida da Fantasyland. Vá assim que o parque abrir.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="mk-atracao-2" />
                                            <label htmlFor="mk-atracao-2">Peter Pan's Flight</label>
                                        </li>
                                        <span className="text-auxiliar">Outra atração clássica que cria filas longas rapidamente.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="mk-atracao-3" />
                                            <label htmlFor="mk-atracao-3">Jungle Cruise</label>
                                        </li>
                                        <span className="text-auxiliar">Passeio de barco descontraído com piadas de guias hilárias.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="mk-atracao-4" />
                                            <label htmlFor="mk-atracao-4">Haunted Mansion</label>
                                        </li>
                                        <span className="text-auxiliar">Uma das atrações mais icônicas da Disney, não pode faltar.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="mk-atracao-5" />
                                            <label htmlFor="mk-atracao-5">Space Mountain</label>
                                        </li>
                                        <span className="text-auxiliar">Montanha-russa no escuro na Tomorrowland, divertida e clássica.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="mk-destaque-1" />
                                            <label htmlFor="mk-destaque-1">Assistir ao desfile e ao show de fogos noturno</label>
                                        </li>
                                        <span className="text-auxiliar">Assista o desfile na Main Street U.S.A. e o show de fogos na frente do castelo.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="mk-alimentacao-1" />
                                            <label htmlFor="mk-alimentacao-1">Alimentação</label>
                                        </li>
                                        <span className="text-auxiliar">Coma no Casey's Corner para cachorros-quentes ou reserve o Be Our Guest (caro).</span>
                                    </ul>
                                </div>
                                {/* Day 3 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dia 3: 🎬 Hollywood Studios</h3>
                                    <p className="text-gray-700">Mergulhe no mundo do cinema. As atrações de Star Wars são muito concorridas, então use o sistema de fura-fila aqui.</p>
                                    <ul className="list-none mt-4 text-gray-600">
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="hs-atracao-1" />
                                            <label htmlFor="hs-atracao-1">Star Wars: Rise of the Resistance</label>
                                        </li>
                                        <span className="text-auxiliar">Uma das atrações mais impressionantes da Disney. Agende a Lightning Lane individual assim que disponível.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="hs-atracao-2" />
                                            <label htmlFor="hs-atracao-2">Slinky Dog Dash</label>
                                        </li>
                                        <span className="text-auxiliar">Montanha-russa divertida na Toy Story Land. Chegue cedo ou use o Genie+.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="hs-atracao-3" />
                                            <label htmlFor="hs-atracao-3">The Twilight Zone Tower of Terror</label>
                                        </li>
                                        <span className="text-auxiliar">Clássico da adrenalina. Vá no final do dia para pegar menos fila.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="hs-atracao-4" />
                                            <label htmlFor="hs-atracao-4">Mickey & Minnie's Runaway Railway</label>
                                        </li>
                                        <span className="text-auxiliar">Uma atração moderna e cheia de efeitos visuais.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="hs-destaque-1" />
                                            <label htmlFor="hs-destaque-1">Assistir ao "Fantasmic!"</label>
                                        </li>
                                        <span className="text-auxiliar">O show noturno é imperdível. Chegue com 30-45 minutos de antecedência para pegar um bom lugar.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="hs-alimentacao-1" />
                                            <label htmlFor="hs-alimentacao-1">Alimentação</label>
                                        </li>
                                        <span className="text-auxiliar">Almoce no Woody's Lunch Box (rápido) ou no Sci-Fi Dine-In Theater (temático).</span>
                                    </ul>
                                </div>
                                {/* Day 4 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dia 4: 🌐 Epcot</h3>
                                    <p className="text-gray-700">Um dia de volta ao mundo e de olho no futuro. Na parte da manhã, explore o "Future World" e o "World Celebration". À tarde, caminhe pelos pavilhões do "World Showcase".</p>
                                    <ul className="list-none mt-4 text-gray-600">
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="epcot-atracao-1" />
                                            <label htmlFor="epcot-atracao-1">Guardians of the Galaxy: Cosmic Rewind</label>
                                        </li>
                                        <span className="text-auxiliar">Montanha-russa fechada e moderna. Requer agendamento de fila virtual ou Lightning Lane individual.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="epcot-atracao-2" />
                                            <label htmlFor="epcot-atracao-2">Remy's Ratatouille Adventure</label>
                                        </li>
                                        <span className="text-auxiliar">Simulador 4D divertido no pavilhão da França. Chegue cedo ou use o Genie+.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="epcot-atracao-3" />
                                            <label htmlFor="epcot-atracao-3">Test Track</label>
                                        </li>
                                        <span className="text-auxiliar">Atração de alta velocidade. É uma das mais concorridas.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="epcot-atracao-4" />
                                            <label htmlFor="epcot-atracao-4">Soarin' Around the World</label>
                                        </li>
                                        <span className="text-auxiliar">Simulador de voo sobre as maravilhas do mundo.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="epcot-destaque-1" />
                                            <label htmlFor="epcot-destaque-1">Passear pelo World Showcase</label>
                                        </li>
                                        <span className="text-auxiliar">Visite os 11 pavilhões de países e experimente a culinária do **EPCOT International Food & Wine Festival**.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="epcot-alimentacao-1" />
                                            <label htmlFor="epcot-alimentacao-1">Alimentação</label>
                                        </li>
                                        <span className="text-auxiliar">O Space 220 oferece uma experiência única. Explore as opções de comidas dos países do World Showcase.</span>
                                    </ul>
                                </div>
                                {/* Day 5 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dia 5: 🛍️ Dia de Compras e Lazer</h3>
                                    <p className="text-gray-700">Momento de descanso dos parques. Visite os outlets e shoppings para aproveitar os preços. Almoce no Disney Springs, o complexo de entretenimento e lojas da Disney.</p>
                                    <ul className="list-none mt-4 text-gray-600">
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="compras-local-1" />
                                            <label htmlFor="compras-local-1">Visitar o Orlando International Premium Outlets</label>
                                        </li>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="compras-local-2" />
                                            <label htmlFor="compras-local-2">Visitar o The Florida Mall</label>
                                        </li>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="compras-local-3" />
                                            <label htmlFor="compras-local-3">Passear e almoçar no Disney Springs</label>
                                        </li>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="compras-destaque-1" />
                                            <label htmlFor="compras-destaque-1">Jantar no The Boathouse (Disney Springs)</label>
                                        </li>
                                    </ul>
                                </div>
                                {/* Day 6 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dia 6: 🌎 Animal Kingdom</h3>
                                    <p className="text-gray-700">Dia de explorar a natureza e a vida selvagem. Chegue cedo e vá direto para a área de Pandora para as atrações mais concorridas.</p>
                                    <ul className="list-none mt-4 text-gray-600">
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="ak-atracao-1" />
                                            <label htmlFor="ak-atracao-1">Avatar Flight of Passage</label>
                                        </li>
                                        <span className="text-auxiliar">A atração principal do parque, chegue cedo ou use o Lightning Lane.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="ak-atracao-2" />
                                            <label htmlFor="ak-atracao-2">Kilimanjaro Safaris</label>
                                        </li>
                                        <span className="text-auxiliar">Passeio de safári. Vá pela manhã, quando os animais estão mais ativos.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="ak-atracao-3" />
                                            <label htmlFor="ak-atracao-3">Expedition Everest</label>
                                        </li>
                                        <span className="text-auxiliar">Montanha-russa radical com um visual incrível.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="ak-destaque-1" />
                                            <label htmlFor="ak-destaque-1">Assistir ao "Festival of the Lion King"</label>
                                        </li>
                                        <span className="text-auxiliar">Um dos melhores shows de palco dos parques, com muita música e acrobacias.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="ak-alimentacao-1" />
                                            <label htmlFor="ak-alimentacao-1">Alimentação</label>
                                        </li>
                                        <span className="text-auxiliar">Restaurante temático Tiffins ou Yak & Yeti, com comida asiática.</span>
                                    </ul>
                                </div>
                                {/* Day 7 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dia 7: 🪄 Universal Studios</h3>
                                    <p className="text-gray-700">Dia de visitar o primeiro parque da Universal. Concentre-se nas áreas de "Diagon Alley" (Harry Potter) e "Springfield" (Os Simpsons).</p>
                                    <ul className="list-none mt-4 text-gray-600">
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="us-atracao-1" />
                                            <label htmlFor="us-atracao-1">Harry Potter and the Escape from Gringotts</label>
                                        </li>
                                        <span className="text-auxiliar">A atração principal de Harry Potter no Diagon Alley.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="us-atracao-2" />
                                            <label htmlFor="us-atracao-2">Despicable Me Minion Mayhem</label>
                                        </li>
                                        <span className="text-auxiliar">Simulador 3D divertido para todas as idades.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="us-atracao-3" />
                                            <label htmlFor="us-atracao-3">Transformers: The Ride-3D</label>
                                        </li>
                                        <span className="text-auxiliar">Simulador de alta tecnologia que te coloca no meio da ação.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="us-destaque-1" />
                                            <label htmlFor="us-destaque-1">Andar no trem "Hogwarts Express" (é preciso ter ingresso `Park-to-Park`)</label>
                                        </li>
                                        <span className="text-auxiliar">Conecta os dois parques temáticos da Universal e é uma atração por si só.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="us-alimentacao-1" />
                                            <label htmlFor="us-alimentacao-1">Alimentação</label>
                                        </li>
                                        <span className="text-auxiliar">Jantar no Leaky Cauldron ou no Finnegan's Bar & Grill (pub irlandês).</span>
                                    </ul>
                                </div>
                                {/* Day 8 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dia 8: 🎢 Islands of Adventure</h3>
                                    <p className="text-gray-700">O parque das montanhas-russas radicais. Explore a área do Jurassic Park, a Ilha da Marvel e a vila de Hogsmeade.</p>
                                    <ul className="list-none mt-4 text-gray-600">
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="ioa-atracao-1" />
                                            <label htmlFor="ioa-atracao-1">Hagrid's Magical Creatures Motorbike Adventure</label>
                                        </li>
                                        <span className="text-auxiliar">A montanha-russa mais popular, chegue cedo ou prepare-se para a fila.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="ioa-atracao-2" />
                                            <label htmlFor="ioa-atracao-2">The Incredible Hulk Coaster</label>
                                        </li>
                                        <span className="text-auxiliar">Montanha-russa radical do Hulk.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="ioa-atracao-3" />
                                            <label htmlFor="ioa-atracao-3">Jurassic Park River Adventure</label>
                                        </li>
                                        <span className="text-auxiliar">Passeio de barco que termina com uma queda emocionante.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="ioa-atracao-4" />
                                            <label htmlFor="ioa-atracao-4">Harry Potter and the Forbidden Journey</label>
                                        </li>
                                        <span className="text-auxiliar">Simulador que te leva dentro do Castelo de Hogwarts.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="ioa-alimentacao-1" />
                                            <label htmlFor="ioa-alimentacao-1">Alimentação</label>
                                        </li>
                                        <span className="text-auxiliar">Three Broomsticks para um almoço temático e Butterbeer.</span>
                                    </ul>
                                </div>
                                {/* Day 9 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dia 9: 🛍️ Mais Compras e Lazer</h3>
                                    <p className="text-gray-700">Outro dia de descanso para ir nas lojas que faltaram, ou para relaxar na piscina do hotel.</p>
                                    <ul className="list-none mt-4 text-gray-600">
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="compras2-local-1" />
                                            <label htmlFor="compras2-local-1">Visitar o The Mall at Millenia (lojas de luxo)</label>
                                        </li>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="compras2-local-2" />
                                            <label htmlFor="compras2-local-2">Visitar lojas de departamento como Ross e Marshalls</label>
                                        </li>
                                    </ul>
                                </div>
                                {/* Day 10 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dia 10: 🎢 Seaworld</h3>
                                    <p className="text-gray-700">Dia dedicado a um parque diferente, focado em atrações com temática marinha e montanhas-russas radicais. O parque também possui shows de golfinhos e orcas.</p>
                                    <ul className="list-none mt-4 text-gray-600">
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="sw-atracao-1" />
                                            <label htmlFor="sw-atracao-1">Manta</label>
                                        </li>
                                        <span className="text-auxiliar">Montanha-russa que simula o voo de uma arraia.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="sw-atracao-2" />
                                            <label htmlFor="sw-atracao-2">Mako</label>
                                        </li>
                                        <span className="text-auxiliar">Montanha-russa hypercoaster inspirada em tubarões.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="sw-atracao-3" />
                                            <label htmlFor="sw-atracao-3">Kraken</label>
                                        </li>
                                        <span className="text-auxiliar">Montanha-russa sem chão que faz 7 inversões.</span>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="sw-destaque-1" />
                                            <label htmlFor="sw-destaque-1">Show de golfinhos "Dolphin Days"</label>
                                        </li>
                                        <span className="text-auxiliar">Assista o show de golfinhos e outras apresentações com animais.</span>
                                    </ul>
                                </div>
                                {/* Day 11 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dia 11: ☀️ Parque Aquático</h3>
                                    <p className="text-gray-700">Um dia para se refrescar. Visite o **Universal's Volcano Bay** ou **Disney's Typhoon Lagoon** para aproveitar os toboáguas e piscinas de ondas. </p>
                                    <ul className="list-none mt-4 text-gray-600">
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="aq-atracao-1" />
                                            <label htmlFor="aq-atracao-1">Aproveitar os toboáguas e piscinas de ondas</label>
                                        </li>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="aq-destaque-1" />
                                            <label htmlFor="aq-destaque-1">Destaque: O Vulcão Krakatau do Volcano Bay é a principal atração</label>
                                        </li>
                                    </ul>
                                </div>
                                {/* Day 12 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dia 12: 🛍️ Compras e Lazer</h3>
                                    <p className="text-gray-700">Aproveite o dia para comprar lembranças, visitar o Walmart ou o Target para comprar snacks e produtos que valem a pena.</p>
                                    <ul className="list-none mt-4 text-gray-600">
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="compras3-local-1" />
                                            <label htmlFor="compras3-local-1">Comprar lembranças e presentes</label>
                                        </li>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="compras3-local-2" />
                                            <label htmlFor="compras3-local-2">Visitar o Walmart ou o Target</label>
                                        </li>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="compras3-destaque-1" />
                                            <label htmlFor="compras3-destaque-1">Visitar as lojas de departamento Ross e TJ Maxx</label>
                                        </li>
                                    </ul>
                                </div>
                                {/* Day 13 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dia 13: 🎨 Retorno ao Parque Favorito</h3>
                                    <p className="text-gray-700">Escolha o seu parque favorito da Disney ou da Universal para um dia de despedida. É a chance de repetir as atrações que mais gostaram!</p>
                                    <ul className="list-none mt-4 text-gray-600">
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="retorno-parque-1" />
                                            <label htmlFor="retorno-parque-1">Escolher e visitar o parque favorito</label>
                                        </li>
                                    </ul>
                                </div>
                                {/* Day 14 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dia 14: 🛍️ Últimas Compras</h3>
                                    <p className="text-gray-700">Dia perfeito para as últimas compras. Passe nos Outlets novamente ou explore um shopping que ainda não conheceu.</p>
                                    <ul className="list-none mt-4 text-gray-600">
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="ultimas-compras-1" />
                                            <label htmlFor="ultimas-compras-1">Voltar aos Outlets</label>
                                        </li>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="ultimas-compras-2" />
                                            <label htmlFor="ultimas-compras-2">Explorar um shopping diferente</label>
                                        </li>
                                    </ul>
                                </div>
                                {/* Day 15 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dia 15: 🍔 Dia de Lazer</h3>
                                    <p className="text-gray-700">Relaxe no hotel, curta a piscina ou faça um último passeio em um restaurante temático. Jante no CityWalk da Universal ou no Disney Springs para um clima de despedida.</p>
                                    <ul className="list-none mt-4 text-gray-600">
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="lazer-1" />
                                            <label htmlFor="lazer-1">Relaxar no hotel</label>
                                        </li>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="lazer-2" />
                                            <label htmlFor="lazer-2">Jantar no CityWalk ou Disney Springs</label>
                                        </li>
                                    </ul>
                                </div>
                                {/* Day 16 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dia 16: ✈️ Dia Livre e Organização</h3>
                                    <p className="text-gray-700">Último dia para se despedir, arrumar as malas e se preparar para a volta. Aproveite a manhã para tomar um café da manhã especial.</p>
                                    <ul className="list-none mt-4 text-gray-600">
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="organizacao-1" />
                                            <label htmlFor="organizacao-1">Arrumar as malas</label>
                                        </li>
                                        <li className="checkbox-item">
                                            <input type="checkbox" id="organizacao-2" />
                                            <label htmlFor="organizacao-2">Tomar um café da manhã especial</label>
                                        </li>
                                    </ul>
                                </div>
                                {/* Day 17 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dia 17: Retorno ao Brasil</h3>
                                    <p className="text-gray-700">Check-out do hotel e retorno ao Aeroporto de Orlando (MCO) para o voo de volta ao Brasil.</p>
                                </div>
                            </div>
                        )}
                        {roteiroView === 'calendario' && (
                            <div id="roteiro-calendario" className="roteiro-sub-content">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold">Setembro 2026</h3>
                                        <p className="text-sm text-gray-500">Viagem de 17 dias, iniciando em 06/09/2026 (sábado)</p>
                                    </div>
                                    <div className="flex">
                                        <button
                                            id="lista-view-button-2"
                                            className={`sub-nav-button text-sm mr-2 ${roteiroView === 'lista' ? 'active' : 'text-gray-600'}`}
                                            onClick={() => handleRoteiroViewChange('lista')}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                                <path fillRule="evenodd" d="M3 7a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 19a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        <button
                                            id="calendario-view-button-2"
                                            className={`sub-nav-button text-sm ${roteiroView === 'calendario' ? 'active' : 'text-gray-600'}`}
                                            onClick={() => handleRoteiroViewChange('calendario')}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                                <path fillRule="evenodd" d="M6 3a1 1 0 011-1h2a1 1 0 011 1v1h4V3a1 1 0 011-1h2a1 1 0 011 1v1h2a2 2 0 012 2v13a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2h2V3a1 1 0 011-1zm6 5a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1h-4z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="calendar-grid text-sm">
                                    <div className="text-center font-bold text-gray-600">Dom</div>
                                    <div className="text-center font-bold text-gray-600">Seg</div>
                                    <div className="text-center font-bold text-gray-600">Ter</div>
                                    <div className="text-center font-bold text-gray-600">Qua</div>
                                    <div className="text-center font-bold text-gray-600">Qui</div>
                                    <div className="text-center font-bold text-gray-600">Sex</div>
                                    <div className="text-center font-bold text-gray-600">Sáb</div>

                                    {/* Dias vazios */}
                                    <div className="bg-gray-200 rounded-lg"></div>
                                    <div className="bg-gray-200 rounded-lg"></div>
                                    <div className="bg-gray-200 rounded-lg"></div>
                                    <div className="bg-gray-200 rounded-lg"></div>
                                    <div className="bg-gray-200 rounded-lg"></div>
                                    <div className="bg-gray-200 rounded-lg"></div>
                                    
                                    {/* Dia 1 - Chegada */}
                                    <div className="bg-[#e0f7fa] rounded-lg calendar-day">
                                        <span className="day-number">6</span>
                                        <span className="day-activity text-sm font-semibold text-blue-800">Dia 1: Chegada</span>
                                    </div>
                                    {/* Dia 2 - Magic Kingdom */}
                                    <div className="bg-[#bbdefb] rounded-lg calendar-day">
                                        <span className="day-number">7</span>
                                        <span className="day-activity text-sm font-semibold text-blue-800">Dia 2: Magic Kingdom</span>
                                    </div>
                                    {/* Dia 3 - Hollywood Studios */}
                                    <div className="bg-[#bbdefb] rounded-lg calendar-day">
                                        <span className="day-number">8</span>
                                        <span className="day-activity text-sm font-semibold text-blue-800">Dia 3: Hollywood Studios</span>
                                    </div>
                                    {/* Dia 4 - Epcot */}
                                    <div className="bg-[#bbdefb] rounded-lg calendar-day">
                                        <span className="day-number">9</span>
                                        <span className="day-activity text-sm font-semibold text-blue-800">Dia 4: Epcot</span>
                                    </div>
                                    {/* Dia 5 - Compras */}
                                    <div className="bg-[#e0f7fa] rounded-lg calendar-day">
                                        <span className="day-number">10</span>
                                        <span className="day-activity text-sm font-semibold text-blue-800">Dia 5: Compras e Lazer</span>
                                    </div>
                                    {/* Dia 6 - Animal Kingdom */}
                                    <div className="bg-[#bbdefb] rounded-lg calendar-day">
                                        <span className="day-number">11</span>
                                        <span className="day-activity text-sm font-semibold text-blue-800">Dia 6: Animal Kingdom</span>
                                    </div>
                                    {/* Dia 7 - Universal Studios */}
                                    <div className="bg-[#bbdefb] rounded-lg calendar-day">
                                        <span className="day-number">12</span>
                                        <span className="day-activity text-sm font-semibold text-blue-800">Dia 7: Universal Studios</span>
                                    </div>
                                    {/* Dia 8 - Islands of Adventure */}
                                    <div className="bg-[#bbdefb] rounded-lg calendar-day">
                                        <span className="day-number">13</span>
                                        <span className="day-activity text-sm font-semibold text-blue-800">Dia 8: Islands of Adventure</span>
                                    </div>
                                    {/* Dia 9 - Compras */}
                                    <div className="bg-[#e0f7fa] rounded-lg calendar-day">
                                        <span className="day-number">14</span>
                                        <span className="day-activity text-sm font-semibold text-blue-800">Dia 9: Compras e Lazer</span>
                                    </div>
                                    {/* Dia 10 - Seaworld */}
                                    <div className="bg-[#bbdefb] rounded-lg calendar-day">
                                        <span className="day-number">15</span>
                                        <span className="day-activity text-sm font-semibold text-blue-800">Dia 10: SeaWorld</span>
                                    </div>
                                    {/* Dia 11 - Aqua Park */}
                                    <div className="bg-[#bbdefb] rounded-lg calendar-day">
                                        <span className="day-number">16</span>
                                        <span className="day-activity text-sm font-semibold text-blue-800">Dia 11: Parque Aquático</span>
                                    </div>
                                    {/* Dia 12 - Compras */}
                                    <div className="bg-[#e0f7fa] rounded-lg calendar-day">
                                        <span className="day-number">17</span>
                                        <span className="day-activity text-sm font-semibold text-blue-800">Dia 12: Compras e Lazer</span>
                                    </div>
                                    {/* Dia 13 - Retorno ao Parque */}
                                    <div className="bg-[#bbdefb] rounded-lg calendar-day">
                                        <span className="day-number">18</span>
                                        <span className="day-activity text-sm font-semibold text-blue-800">Dia 13: Retorno ao Parque Favorito</span>
                                    </div>
                                    {/* Dia 14 - Compras */}
                                    <div className="bg-[#e0f7fa] rounded-lg calendar-day">
                                        <span className="day-number">19</span>
                                        <span className="day-activity text-sm font-semibold text-blue-800">Dia 14: Últimas Compras</span>
                                    </div>
                                    {/* Dia 15 - Lazer */}
                                    <div className="bg-[#e0f7fa] rounded-lg calendar-day">
                                        <span className="day-number">20</span>
                                        <span className="day-activity text-sm font-semibold text-blue-800">Dia 15: Dia de Lazer</span>
                                    </div>
                                    {/* Dia 16 - Organização */}
                                    <div className="bg-[#e0f7fa] rounded-lg calendar-day">
                                        <span className="day-number">21</span>
                                        <span className="day-activity text-sm font-semibold text-blue-800">Dia 16: Organização</span>
                                    </div>
                                    {/* Dia 17 - Retorno */}
                                    <div className="bg-[#e0f7fa] rounded-lg calendar-day">
                                        <span className="day-number">22</span>
                                        <span className="day-activity text-sm font-semibold text-blue-800">Dia 17: Retorno ao Brasil</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </section>
                )}
                {activeTab === 'valores' && (
                    <section id="valores" className="tab-content active">
                        <h2 className="text-2xl font-bold mb-6 text-gray-700">Estimativa de Custos (por casal)</h2>
                        <div className="mb-8">
                            <p className="text-lg font-semibold text-gray-700">Visão em Reais (R$)</p>
                            <p className="text-sm text-gray-500 mb-4">Os preços podem variar dependendo da antecedência da compra e da época da viagem.</p>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left table-auto border-collapse rounded-lg overflow-hidden">
                                    <thead className="bg-[#1e40af] text-white">
                                        <tr>
                                            <th className="p-4">Categoria</th>
                                            <th className="p-4 text-center">Custo para o Casal</th>
                                            <th className="p-4">Observações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-blue-100 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="reais-passagem" />
                                                <label htmlFor="reais-passagem">Passagem Aérea</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">R$ 6.000 a R$ 12.000</td>
                                            <td className="p-4">Voos de ida e volta, saindo de São Paulo, com escala.</td>
                                        </tr>
                                        <tr className="bg-blue-100 border-b border-blue-200">
                                            <td colSpan="3" className="p-4 font-bold bg-blue-200 text-gray-700">Hospedagem (17 noites)</td>
                                        </tr>
                                        <tr className="bg-blue-50 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="reais-hospedagem-disney" />
                                                <label htmlFor="reais-hospedagem-disney">Hotel da Disney (econômico/moderado)</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">R$ 17.000 a R$ 42.500</td>
                                            <td className="p-4">Custo total para 17 noites, com diárias entre R$ 1.000 e R$ 2.500.</td>
                                        </tr>
                                        <tr className="bg-blue-100 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="reais-hospedagem-3star" />
                                                <label htmlFor="reais-hospedagem-3star">Hotel 3 estrelas (fora do complexo)</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">R$ 5.100 a R$ 10.200</td>
                                            <td className="p-4">Custo total para 17 noites, com diárias entre R$ 300 e R$ 600.</td>
                                        </tr>
                                        <tr className="bg-blue-50 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="reais-hospedagem-4star" />
                                                <label htmlFor="reais-hospedagem-4star">Hotel 4 estrelas (fora do complexo)</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">R$ 10.200 a R$ 17.000</td>
                                            <td className="p-4">Custo total para 17 noites, com diárias entre R$ 600 e R$ 1.000.</td>
                                        </tr>
                                        <tr className="bg-blue-100 border-b border-blue-200">
                                            <td colSpan="3" className="p-4 font-bold bg-blue-200 text-gray-700">Ingressos dos Parques (8 dias de parque)</td>
                                        </tr>
                                        <tr className="bg-blue-50 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="reais-ing-mk" />
                                                <label htmlFor="reais-ing-mk">Magic Kingdom (2 dias)</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">R$ 3.000 a R$ 3.800</td>
                                            <td className="p-4">Entrada para o parque mais icônico da Disney.</td>
                                        </tr>
                                        <tr className="bg-blue-100 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="reais-ing-hs" />
                                                <label htmlFor="reais-ing-hs">Hollywood Studios (2 dias)</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">R$ 2.800 a R$ 3.500</td>
                                            <td className="p-4">Parque com foco em cinema e aventuras radicais.</td>
                                        </tr>
                                        <tr className="bg-blue-50 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="reais-ing-epcot" />
                                                <label htmlFor="reais-ing-epcot">Epcot (2 dias)</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">R$ 2.600 a R$ 3.200</td>
                                            <td className="p-4">Viagem ao redor do mundo e ao futuro.</td>
                                        </tr>
                                        <tr className="bg-blue-100 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="reais-ing-ak" />
                                                <label htmlFor="reais-ing-ak">Animal Kingdom (1 dia)</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">R$ 1.300 a R$ 1.600</td>
                                            <td className="p-4">Foco em natureza e vida selvagem.</td>
                                        </tr>
                                        <tr className="bg-blue-50 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="reais-ing-us" />
                                                <label htmlFor="reais-ing-us">Universal Studios (1 dia)</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">R$ 1.400 a R$ 1.800</td>
                                            <td className="p-4">Parque com atrações de cinema e séries de TV.</td>
                                        </tr>
                                        <tr className="bg-blue-100 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="reais-ing-ioa" />
                                                <label htmlFor="reais-ing-ioa">Islands of Adventure (1 dia)</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">R$ 1.400 a R$ 1.800</td>
                                            <td className="p-4">Parque com montanhas-russas radicais e Harry Potter.</td>
                                        </tr>
                                        <tr className="bg-blue-50 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="reais-ing-sw" />
                                                <label htmlFor="reais-ing-sw">SeaWorld (1 dia)</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">R$ 1.000 a R$ 1.300</td>
                                            <td className="p-4">Parque com vida marinha e montanhas-russas.</td>
                                        </tr>
                                        <tr className="bg-blue-100 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="reais-ing-aq" />
                                                <label htmlFor="reais-ing-aq">Parque Aquático (1 dia)</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">R$ 800 a R$ 1.100</td>
                                            <td className="p-4">Universal's Volcano Bay ou Disney's Typhoon Lagoon.</td>
                                        </tr>
                                        <tr className="bg-blue-50 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="reais-carro" />
                                                <label htmlFor="reais-carro">Aluguel de Carro</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">R$ 1.500 a R$ 3.000</td>
                                            <td className="p-4">Custo para 17 dias. Empresas confiáveis: Alamo, Enterprise, National.</td>
                                        </tr>
                                        <tr className="bg-blue-100 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="reais-alimentacao" />
                                                <label htmlFor="reais-alimentacao">Alimentação</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">R$ 10.000 a R$ 17.000</td>
                                            <td className="p-4">Média de R$ 300 a R$ 500 por dia para o casal.</td>
                                        </tr>
                                        <tr className="bg-blue-50 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="reais-compras" />
                                                <label htmlFor="reais-compras">Compras</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">R$ 6.000 a R$ 10.000</td>
                                            <td className="p-4">Estimativa para roupas, presentes e eletrônicos.</td>
                                        </tr>
                                        <tr className="bg-blue-100">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="reais-lazer" />
                                                <label htmlFor="reais-lazer">Lazer Extra</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">R$ 1.100 a R$ 2.750</td>
                                            <td className="p-4">Shows (`Cirque du Soleil`), mini-golf ou outras atividades.</td>
                                        </tr>
                                    </tbody>
                                    <tfoot className="bg-[#1e40af] text-white">
                                        <tr>
                                            <th className="p-4">TOTAL ESTIMADO</th>
                                            <th className="p-4 text-center">R$ 45.300 a R$ 75.200</th>
                                            <th className="p-4"></th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-gray-700">Visão em Dólares (US$)</p>
                            <p className="text-sm text-gray-500 mb-4">Cotação utilizada: US$ 1,00 = R$ 5,50. A taxa de câmbio pode variar.</p>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left table-auto border-collapse rounded-lg overflow-hidden">
                                    <thead className="bg-[#1e40af] text-white">
                                        <tr>
                                            <th className="p-4">Categoria</th>
                                            <th className="p-4 text-center">Custo para o Casal</th>
                                            <th className="p-4">Observações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-blue-100 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="dolar-passagem" />
                                                <label htmlFor="dolar-passagem">Passagem Aérea</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">US$ 2.182 a US$ 4.364</td>
                                            <td className="p-4">Voos de ida e volta, saindo de São Paulo, com escala.</td>
                                        </tr>
                                        <tr className="bg-blue-100 border-b border-blue-200">
                                            <td colSpan="3" className="p-4 font-bold bg-blue-200 text-gray-700">Hospedagem (17 noites)</td>
                                        </tr>
                                        <tr className="bg-blue-50 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="dolar-hospedagem-disney" />
                                                <label htmlFor="dolar-hospedagem-disney">Hotel da Disney (econômico/moderado)</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">US$ 3.090 a US$ 7.727</td>
                                            <td className="p-4">Custo total para 17 noites, com diárias entre US$ 180 e US$ 450.</td>
                                        </tr>
                                        <tr className="bg-blue-100 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="dolar-hospedagem-3star" />
                                                <label htmlFor="dolar-hospedagem-3star">Hotel 3 estrelas (fora do complexo)</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">US$ 927 a US$ 1.855</td>
                                            <td className="p-4">Custo total para 17 noites, com diárias entre US$ 55 e US$ 110.</td>
                                        </tr>
                                        <tr className="bg-blue-50 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="dolar-hospedagem-4star" />
                                                <label htmlFor="dolar-hospedagem-4star">Hotel 4 estrelas (fora do complexo)</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">US$ 1.855 a US$ 3.090</td>
                                            <td className="p-4">Custo total para 17 noites, com diárias entre US$ 110 e US$ 180.</td>
                                        </tr>
                                        <tr className="bg-blue-100 border-b border-blue-200">
                                            <td colSpan="3" className="p-4 font-bold bg-blue-200 text-gray-700">Ingressos dos Parques (8 dias de parque)</td>
                                        </tr>
                                        <tr className="bg-blue-50 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="dolar-ing-mk" />
                                                <label htmlFor="dolar-ing-mk">Magic Kingdom (2 dias)</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">US$ 545 a US$ 691</td>
                                            <td className="p-4">Entrada para o parque mais icônico da Disney.</td>
                                        </tr>
                                        <tr className="bg-blue-100 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="dolar-ing-hs" />
                                                <label htmlFor="dolar-ing-hs">Hollywood Studios (2 dias)</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">US$ 509 a US$ 636</td>
                                            <td className="p-4">Parque com foco em cinema e aventuras radicais.</td>
                                        </tr>
                                        <tr className="bg-blue-50 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="dolar-ing-epcot" />
                                                <label htmlFor="dolar-ing-epcot">Epcot (2 dias)</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">US$ 473 a US$ 582</td>
                                            <td className="p-4">Viagem ao redor do mundo e ao futuro.</td>
                                        </tr>
                                        <tr className="bg-blue-100 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="dolar-ing-ak" />
                                                <label htmlFor="dolar-ing-ak">Animal Kingdom (1 dia)</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">US$ 236 a US$ 291</td>
                                            <td className="p-4">Foco em natureza e vida selvagem.</td>
                                        </tr>
                                        <tr className="bg-blue-50 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="dolar-ing-us" />
                                                <label htmlFor="dolar-ing-us">Universal Studios (1 dia)</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">US$ 254 a US$ 327</td>
                                            <td className="p-4">Parque com atrações de cinema e séries de TV.</td>
                                        </tr>
                                        <tr className="bg-blue-100 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="dolar-ing-ioa" />
                                                <label htmlFor="dolar-ing-ioa">Islands of Adventure (1 dia)</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">US$ 254 a US$ 327</td>
                                            <td className="p-4">Parque com montanhas-russas radicais e Harry Potter.</td>
                                        </tr>
                                        <tr className="bg-blue-50 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="dolar-ing-sw" />
                                                <label htmlFor="dolar-ing-sw">SeaWorld (1 dia)</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">US$ 182 a US$ 236</td>
                                            <td className="p-4">Parque com vida marinha e montanhas-russas.</td>
                                        </tr>
                                        <tr className="bg-blue-100 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="dolar-ing-aq" />
                                                <label htmlFor="dolar-ing-aq">Parque Aquático (1 dia)</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">US$ 145 a US$ 200</td>
                                            <td className="p-4">Universal's Volcano Bay ou Disney's Typhoon Lagoon.</td>
                                        </tr>
                                        <tr className="bg-blue-50 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="dolar-carro" />
                                                <label htmlFor="dolar-carro">Aluguel de Carro</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">US$ 273 a US$ 546</td>
                                            <td className="p-4">Custo para 17 dias. Empresas confiáveis: Alamo, Enterprise, National.</td>
                                        </tr>
                                        <tr className="bg-blue-100 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="dolar-alimentacao" />
                                                <label htmlFor="dolar-alimentacao">Alimentação</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">US$ 1.818 a US$ 3.090</td>
                                            <td className="p-4">Média de US$ 50 a US$ 85 por pessoa por dia.</td>
                                        </tr>
                                        <tr className="bg-blue-50 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="dolar-compras" />
                                                <label htmlFor="dolar-compras">Compras</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">US$ 1.090 a US$ 1.818</td>
                                            <td className="p-4">Estimativa para roupas, presentes e eletrônicos.</td>
                                        </tr>
                                        <tr className="bg-blue-100">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="dolar-lazer" />
                                                <label htmlFor="dolar-lazer">Lazer Extra</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">US$ 200 a US$ 500</td>
                                            <td className="p-4">Shows (`Cirque du Soleil`), mini-golf ou outras atividades.</td>
                                        </tr>
                                    </tbody>
                                    <tfoot className="bg-[#1e40af] text-white">
                                        <tr>
                                            <th className="p-4">TOTAL ESTIMADO</th>
                                            <th className="p-4 text-center">US$ 16.472 a US$ 27.390</th>
                                            <th className="p-4"></th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </section>
                )}
                {activeTab === 'ferramentas' && (
                    <section id="ferramentas" className="tab-content active">
                        <h2 className="text-2xl font-bold mb-6 text-gray-700">Ferramentas de Planejamento com IA</h2>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                            <h3 className="text-xl font-bold text-[#1e40af] mb-2">Gerador de Lista de Viagem</h3>
                            <p className="text-gray-700 mb-4">Crie uma lista de viagem personalizada para a sua viagem. Basta informar o que você e sua esposa gostam de fazer e a IA irá gerar uma lista completa para você.</p>
                            <textarea id="lista-prompt" className="w-full h-24 p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#1e40af] transition-colors" placeholder="Ex: Roupas para parques temáticos, eletrônicos para fotos, kits de primeiros socorros, etc."></textarea>
                            <button id="gerar-lista" className="mt-4 bg-[#1e40af] hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg shadow transition-colors">Gerar Lista de Viagem</button>
                            <div id="lista-output" className="mt-4 p-4 bg-white border border-gray-200 rounded-lg hidden">
                                <p className="text-gray-700">Sua lista de viagem será gerada aqui...</p>
                            </div>
                            <div id="lista-loading" className="mt-4 p-4 text-gray-700 hidden">
                                Gerando sua lista de viagem...
                            </div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                            <h3 className="text-xl font-bold text-[#1e40af] mb-2">Gerador de Plano de Refeições</h3>
                            <p className="text-gray-700 mb-4">Crie um plano de refeições sugerido para os dias de parque, considerando o roteiro e suas preferências.</p>
                            <textarea id="refeicao-prompt" className="w-full h-24 p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#1e40af] transition-colors" placeholder="Ex: Opções de refeições rápidas e econômicas nos parques, um jantar romântico no Epcot, etc."></textarea>
                            <button id="gerar-refeicao" className="mt-4 bg-[#1e40af] hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg shadow transition-colors">Gerar Plano de Refeições</button>
                            <div id="refeicao-output" className="mt-4 p-4 bg-white border border-gray-200 rounded-lg hidden">
                                <p className="text-gray-700">Seu plano de refeições será gerado aqui...</p>
                            </div>
                            <div id="refeicao-loading" className="mt-4 p-4 text-gray-700 hidden">
                                Gerando seu plano de refeições...
                            </div>
                        </div>
                    </section>
                )}
                {activeTab === 'dicas' && (
                    <section id="dicas" className="tab-content active">
                        <h2 className="text-2xl font-bold mb-6 text-gray-700">Dicas Gerais para a Viagem</h2>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                            <h3 className="text-xl font-bold text-[#1e40af] mb-2">Sistemas de "Fura-Fila": Genie+ e Universal Express Pass</h3>
                            <p className="text-gray-700 mb-4">O antigo FastPass+ da Disney foi substituído por um sistema pago, e a Universal tem seu próprio passe para agilizar as filas. Entender como eles funcionam pode salvar muito tempo.</p>
                            <ul className="list-none mt-4 text-gray-600">
                                <li className="mb-4">
                                    <span className="font-bold">Disney: Genie+ e Lightning Lane</span><br/>
                                    - <span className="font-semibold">Genie+:</span> É um serviço pago (a partir de US$ 15 por pessoa, por dia) que permite agendar horários para entrar em filas rápidas em várias atrações. Você pode agendar uma atração por vez, a partir do horário de abertura do parque.
                                    - <span className="font-semibold">Lightning Lane:</span> É o nome da fila rápida do Genie+. Algumas atrações mais populares, como `Star Wars: Rise of the Resistance`, não estão inclusas no Genie+ e precisam ser compradas separadamente (a partir de US$ 15 por pessoa, por atração).
                                    - <span className="font-semibold">Vale a pena?</span> Na baixa temporada (Setembro), pode não ser essencial para todos os parques, mas é altamente recomendado para o Magic Kingdom e Hollywood Studios, que têm as atrações mais concorridas.
                                </li>
                                <li className="mb-4">
                                    <span className="font-bold">Universal: Universal Express Pass</span><br/>
                                    - É um serviço pago (o preço varia bastante) que permite usar a fila rápida (`Express Lane`) em quase todas as atrações. A versão ilimitada (`Unlimited`) permite que você repita as atrações quantas vezes quiser.
                                    - <span className="font-semibold">Vale a pena?</span> Se você quer evitar filas de forma geral e aproveitar o máximo de atrações em um único dia, o Express Pass é um excelente investimento.
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                            <h3 className="text-xl font-bold text-[#1e40af] mb-2">Checklist Essencial (O que levar na mochila)</h3>
                            <p className="text-gray-700 mb-4">Esses itens farão toda a diferença nos dias de parque, ajudando a evitar imprevistos e economizar tempo e dinheiro.</p>
                            <ul className="list-none mt-4 text-gray-600">
                                <li className="checkbox-item"><input type="checkbox" id="dica-checklist-1" /><label htmlFor="dica-checklist-1">Garrafa de água reutilizável</label></li>
                                <li className="checkbox-item"><input type="checkbox" id="dica-checklist-2" /><label htmlFor="dica-checklist-2">Protetor solar e óculos de sol</label></li>
                                <li className="checkbox-item"><input type="checkbox" id="dica-checklist-3" /><label htmlFor="dica-checklist-3">Capa de chuva ou poncho</label></li>
                                <li className="checkbox-item"><input type="checkbox" id="dica-checklist-4" /><label htmlFor="dica-checklist-4">Snacks e pequenos lanches</label></li>
                                <li className="checkbox-item"><input type="checkbox" id="dica-checklist-5" /><label htmlFor="dica-checklist-5">Carregador portátil para o celular</label></li>
                                <li className="checkbox-item"><input type="checkbox" id="dica-checklist-6" /><label htmlFor="dica-checklist-6">Documentos essenciais (passaporte, visto, vouchers)</label></li>
                                <li className="checkbox-item"><input type="checkbox" id="dica-checklist-7" /><label htmlFor="dica-checklist-7">Dinheiro trocado para gorjetas e compras pequenas</label></li>
                                <li className="checkbox-item"><input type="checkbox" id="dica-checklist-8" /><label htmlFor="dica-checklist-8">Kit de primeiros socorros (curativos, analgésicos)</label></li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                            <h3 className="text-xl font-bold text-[#1e40af] mb-2">Informações sobre Ingressos e Parques</h3>
                            <ul className="list-none mt-4 text-gray-600">
                                <li className="mb-4">
                                    <span className="font-bold">Validade dos Ingressos:</span> A maioria dos ingressos para múltiplos dias na Disney tem uma validade de 14 dias a partir do primeiro uso. Isso significa que você não precisa visitar os parques em dias consecutivos, o que é perfeito para o seu roteiro de 17 dias.
                                </li>
                                <li className="mb-4">
                                    <span className="font-bold">Regras de Entrada:</span> Você pode entrar e sair do mesmo parque quantas vezes quiser no mesmo dia. Para visitar mais de um parque por dia, é necessário ter a opção `Park Hopper` (Disney) ou `Park-to-Park` (Universal) no seu ingresso.
                                </li>
                                <li className="mb-4">
                                    <span className="font-bold">Agendamento de Visita:</span> O sistema da Disney `Park Pass` exige que você reserve a visita aos parques com antecedência. Certifique-se de fazer as reservas assim que comprar os ingressos, especialmente para o Magic Kingdom, que costuma esgotar mais rápido.
                                </li>
                                <li className="mb-4">
                                    <span className="font-bold">Horários de Funcionamento:</span> Os horários de abertura e fechamento variam. Você pode checar os horários atualizados nos aplicativos oficiais `My Disney Experience` (Disney) e `Universal Orlando Resort` (Universal).
                                </li>
                            </ul>
                        </div>
                    </section>
                )}
            </main>
        </div>
    );

    const japaoContent = (
        <div id="japao-plan">
            <header className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#1e40af] mb-2">Sua Viagem para o Japão</h1>
                <p className="text-lg md:text-xl text-gray-600">Roteiro e Custos Detalhados para 25 dias</p>
            </header>

            <nav className="flex justify-center border-b border-gray-300 mb-8">
                <button
                    className={`tab-button py-4 px-6 md:px-12 text-lg font-medium transition-colors duration-200 ${activeTab === 'roteiro' ? 'active' : ''}`}
                    onClick={() => setActiveTab('roteiro')}
                >
                    Roteiro
                </button>
                <button
                    className={`tab-button py-4 px-6 md:px-12 text-lg font-medium transition-colors duration-200 ${activeTab === 'valores' ? 'active' : ''}`}
                    onClick={() => setActiveTab('valores')}
                >
                    Valores
                </button>
                <button
                    className={`tab-button py-4 px-6 md:px-12 text-lg font-medium transition-colors duration-200 ${activeTab === 'ferramentas' ? 'active' : ''}`}
                    onClick={() => setActiveTab('ferramentas')}
                >
                    Ferramentas
                </button>
                <button
                    className={`tab-button py-4 px-6 md:px-12 text-lg font-medium transition-colors duration-200 ${activeTab === 'dicas' ? 'active' : ''}`}
                    onClick={() => setActiveTab('dicas')}
                >
                    Dicas
                </button>
            </nav>

            <main className="bg-white p-4 md:p-8 rounded-lg shadow-xl">
                {activeTab === 'roteiro' && (
                    <section id="roteiro" className="tab-content active">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-700">Roteiro Diário (25 dias)</h2>
                                <p className="text-sm text-gray-500">Detalhes dos dias e atividades planejadas.</p>
                            </div>
                            <RoteiroViewToggle view={roteiroView} onViewChange={handleRoteiroViewChange} />
                        </div>

                        {roteiroView === 'lista' && (
                            <div id="roteiro-lista" className="roteiro-sub-content">
                                {/* Day 1 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dia 1: Chegada em Tóquio</h3>
                                    <p className="text-gray-700">Chegue no Aeroporto de Narita (NRT) ou Haneda (HND) em Tóquio. Pegue o trem para o centro da cidade, faça o check-in no hotel e descanse da longa viagem.</p>
                                </div>
                                {/* Day 2 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dia 2: Explorando a Cultura Tradicional de Tóquio</h3>
                                    <p className="text-gray-700">Visite o Templo Senso-ji em Asakusa, o bairro mais antigo de Tóquio. Depois, explore o Palácio Imperial e caminhe pelos jardins. À tarde, visite o Parque Ueno, que abriga vários museus.</p>
                                    <ul className="list-none mt-4 text-gray-600">
                                        <li className="checkbox-item"><input type="checkbox" id="jp-atracao-1" /><label htmlFor="jp-atracao-1">Templo Senso-ji e Nakamise-dori</label></li>
                                        <li className="checkbox-item"><input type="checkbox" id="jp-atracao-2" /><label htmlFor="jp-atracao-2">Palácio Imperial e seus jardins</label></li>
                                        <li className="checkbox-item"><input type="checkbox" id="jp-atracao-3" /><label htmlFor="jp-atracao-3">Parque Ueno</label></li>
                                    </ul>
                                </div>
                                {/* Day 3 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dia 3: A Tóquio Moderna e Futurista</h3>
                                    <p className="text-gray-700">Explore o vibrante bairro de Shibuya, com seu famoso cruzamento. Visite a estátua de Hachiko e, em seguida, o bairro de Harajuku, conhecido por sua moda de rua. Termine o dia em Shinjuku, com a vista panorâmica do Tokyo Metropolitan Government Building.</p>
                                    <ul className="list-none mt-4 text-gray-600">
                                        <li className="checkbox-item"><input type="checkbox" id="jp-atracao-4" /><label htmlFor="jp-atracao-4">Cruzamento de Shibuya e estátua de Hachiko</label></li>
                                        <li className="checkbox-item"><input type="checkbox" id="jp-atracao-5" /><label htmlFor="jp-atracao-5">Bairro de Harajuku e Takeshita Street</label></li>
                                        <li className="checkbox-item"><input type="checkbox" id="jp-atracao-6" /><label htmlFor="jp-atracao-6">Observatório do Tokyo Metropolitan Government Building</label></li>
                                    </ul>
                                </div>
                                {/* Day 4 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dia 4: Animes e Eletrônicos em Tóquio</h3>
                                    <p className="text-gray-700">Mergulhe na cultura pop japonesa em Akihabara. Passeie pelas lojas de mangás, animes e eletrônicos. À noite, experimente o famoso ramen.</p>
                                    <ul className="list-none mt-4 text-gray-600">
                                        <li className="checkbox-item"><input type="checkbox" id="jp-atracao-7" /><label htmlFor="jp-atracao-7">Explorar Akihabara</label></li>
                                        <li className="checkbox-item"><input type="checkbox" id="jp-atracao-8" /><label htmlFor="jp-atracao-8">Visitar o Tokyo Skytree</label></li>
                                        <li className="checkbox-item"><input type="checkbox" id="jp-alimentacao-1" /><label htmlFor="jp-alimentacao-1">Jantar em um restaurante de ramen</label></li>
                                    </ul>
                                </div>
                                {/* Day 5 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dia 5: Viagem para Hakone</h3>
                                    <p className="text-gray-700">Faça um bate-e-volta para Hakone, conhecida por suas águas termais e vistas do Monte Fuji. Passeie de barco no Lago Ashi e ande no teleférico para apreciar a paisagem.</p>
                                    <ul className="list-none mt-4 text-gray-600">
                                        <li className="checkbox-item"><input type="checkbox" id="jp-atracao-9" /><label htmlFor="jp-atracao-9">Passeio de barco no Lago Ashi</label></li>
                                        <li className="checkbox-item"><input type="checkbox" id="jp-atracao-10" /><label htmlFor="jp-atracao-10">Teleférico de Hakone</label></li>
                                    </ul>
                                </div>
                                {/* Day 6 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dia 6: Relaxando em Tóquio</h3>
                                    <p className="text-gray-700">Dia livre para compras, visitar algum museu que tenha gostado ou explorar outros bairros como Ginza. Jante em um restaurante de sushi. </p>
                                </div>
                                {/* Day 7 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dia 7: Viagem para Quioto</h3>
                                    <p className="text-gray-700">Pegue o trem-bala (Shinkansen) de Tóquio para Quioto. Faça o check-in no hotel e use a tarde para explorar a área de Gion, o bairro das gueixas.</p>
                                    <ul className="list-none mt-4 text-gray-600">
                                        <li className="checkbox-item"><input type="checkbox" id="jp-atracao-11" /><label htmlFor="jp-atracao-11">Passear em Gion</label></li>
                                        <li className="checkbox-item"><input type="checkbox" id="jp-alimentacao-2" /><label htmlFor="jp-alimentacao-2">Jantar em um restaurante tradicional de Quioto</label></li>
                                    </ul>
                                </div>
                                {/* Day 8 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dia 8: Templos e Santuários em Quioto</h3>
                                    <p className="text-gray-700">Explore alguns dos templos e santuários mais famosos de Quioto. Comece pelo Kinkaku-ji (Pavilhão Dourado) e depois vá para o Ryoan-ji, famoso por seu jardim de pedras. Termine o dia no Kiyomizu-dera.</p>
                                    <ul className="list-none mt-4 text-gray-600">
                                        <li className="checkbox-item"><input type="checkbox" id="jp-atracao-12" /><label htmlFor="jp-atracao-12">Kinkaku-ji (Pavilhão Dourado)</label></li>
                                        <li className="checkbox-item"><input type="checkbox" id="jp-atracao-13" /><label htmlFor="jp-atracao-13">Ryoan-ji</label></li>
                                        <li className="checkbox-item"><input type="checkbox" id="jp-atracao-14" /><label htmlFor="jp-atracao-14">Kiyomizu-dera</label></li>
                                    </ul>
                                </div>
                                {/* Day 9 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dia 9: A Floresta de Bambu e o Santuário dos Mil Portões</h3>
                                    <p className="text-gray-700">Visite a Floresta de Bambu em Arashiyama e o Templo Tenryu-ji. À tarde, explore o Fushimi Inari-taisha, com seus milhares de portões torii vermelhos.</p>
                                    <ul className="list-none mt-4 text-gray-600">
                                        <li className="checkbox-item"><input type="checkbox" id="jp-atracao-15" /><label htmlFor="jp-atracao-15">Floresta de Bambu de Arashiyama</label></li>
                                        <li className="checkbox-item"><input type="checkbox" id="jp-atracao-16" /><label htmlFor="jp-atracao-16">Fushimi Inari-taisha</label></li>
                                    </ul>
                                </div>
                                {/* Day 10 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dia 10: Bate-e-Volta para Nara</h3>
                                    <p className="text-gray-700">Faça uma viagem de um dia para Nara, a antiga capital do Japão, para ver o Templo Todai-ji e interagir com os cervos sagrados no Parque de Nara.</p>
                                    <ul className="list-none mt-4 text-gray-600">
                                        <li className="checkbox-item"><input type="checkbox" id="jp-atracao-17" /><label htmlFor="jp-atracao-17">Templo Todai-ji</label></li>
                                        <li className="checkbox-item"><input type="checkbox" id="jp-atracao-18" /><label htmlFor="jp-atracao-18">Parque de Nara</label></li>
                                    </ul>
                                </div>
                                {/* Day 11-13 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dias 11-13: Explorando Quioto e Deslocamento para Osaka</h3>
                                    <p className="text-gray-700">Use esses dias para explorar outras áreas de Quioto, como o Castelo Nijo ou o Mercado Nishiki. No final do terceiro dia, pegue o trem para Osaka.</p>
                                </div>
                                {/* Day 14-15 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dias 14-15: Explorando Osaka</h3>
                                    <p className="text-gray-700">Mergulhe na vibrante vida noturna de Dotonbori. Visite o Castelo de Osaka e o Universal Studios Japan se tiver interesse.</p>
                                    <ul className="list-none mt-4 text-gray-600">
                                        <li className="checkbox-item"><input type="checkbox" id="jp-atracao-19" /><label htmlFor="jp-atracao-19">Dotonbori</label></li>
                                        <li className="checkbox-item"><input type="checkbox" id="jp-atracao-20" /><label htmlFor="jp-atracao-20">Castelo de Osaka</label></li>
                                        <li className="checkbox-item"><input type="checkbox" id="jp-atracao-21" /><label htmlFor="jp-atracao-21">Universal Studios Japan</label></li>
                                    </ul>
                                </div>
                                {/* Day 16-17 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dias 16-17: Hiroshima e Miyajima</h3>
                                    <p className="text-gray-700">Viaje para Hiroshima. Visite o Parque Memorial da Paz e o Museu da Paz de Hiroshima. No dia seguinte, pegue a balsa para Miyajima e veja o icônico santuário flutuante de Itsukushima.</p>
                                </div>
                                {/* Day 18-20 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dias 18-20: Kanazawa e o Jardim Kenrokuen</h3>
                                    <p className="text-gray-700">Viaje para Kanazawa. Passeie pelo Jardim Kenrokuen, um dos mais bonitos do Japão, e explore o bairro de gueixas de Higashi Chaya. A cidade é perfeita para uma experiência mais tranquila e cultural.</p>
                                </div>
                                {/* Day 21-23 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dias 21-23: Retorno a Tóquio e Últimas Compras</h3>
                                    <p className="text-gray-700">Pegue o trem de volta para Tóquio. Use os últimos dias para comprar souvenirs, visitar lojas de eletrônicos ou simplesmente passear por bairros que gostaram.</p>
                                </div>
                                {/* Day 24 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dia 24: Dia Livre</h3>
                                    <p className="text-gray-700">Último dia para se despedir do Japão, fazer as malas e se preparar para a volta. Aproveite para ir em algum lugar que ainda não visitou.</p>
                                </div>
                                {/* Day 25 */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dia 25: Retorno ao Brasil</h3>
                                    <p className="text-gray-700">Check-out do hotel e retorno ao aeroporto de Tóquio para o voo de volta ao Brasil.</p>
                                </div>
                            </div>
                        )}
                        {roteiroView === 'calendario' && (
                            <div id="roteiro-calendario" className="roteiro-sub-content">
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold">Setembro/Outubro 2026</h3>
                                    <p className="text-sm text-gray-500">Viagem de 25 dias</p>
                                </div>
                                <div className="calendar-grid text-sm">
                                    <div className="text-center font-bold text-gray-600">Dom</div>
                                    <div className="text-center font-bold text-gray-600">Seg</div>
                                    <div className="text-center font-bold text-gray-600">Ter</div>
                                    <div className="text-center font-bold text-gray-600">Qua</div>
                                    <div className="text-center font-bold text-gray-600">Qui</div>
                                    <div className="text-center font-bold text-gray-600">Sex</div>
                                    <div className="text-center font-bold text-gray-600">Sáb</div>

                                    {/* Dias vazios */}
                                    <div className="bg-gray-200 rounded-lg"></div>
                                    <div className="bg-gray-200 rounded-lg"></div>
                                    <div className="bg-gray-200 rounded-lg"></div>
                                    <div className="bg-gray-200 rounded-lg"></div>
                                    <div className="bg-gray-200 rounded-lg"></div>
                                    <div className="bg-gray-200 rounded-lg"></div>
                                    
                                    <div className="bg-[#e0f7fa] rounded-lg calendar-day"><span className="day-number">6</span><span className="day-activity text-sm font-semibold text-blue-800">Dia 1: Chegada</span></div>
                                    <div className="bg-[#bbdefb] rounded-lg calendar-day"><span className="day-number">7</span><span className="day-activity text-sm font-semibold text-blue-800">Dia 2: Tóquio</span></div>
                                    <div className="bg-[#bbdefb] rounded-lg calendar-day"><span className="day-number">8</span><span className="day-activity text-sm font-semibold text-blue-800">Dia 3: Tóquio</span></div>
                                    <div className="bg-[#bbdefb] rounded-lg calendar-day"><span className="day-number">9</span><span className="day-activity text-sm font-semibold text-blue-800">Dia 4: Tóquio</span></div>
                                    <div className="bg-[#e0f7fa] rounded-lg calendar-day"><span className="day-number">10</span><span className="day-activity text-sm font-semibold text-blue-800">Dia 5: Hakone</span></div>
                                    <div className="bg-[#bbdefb] rounded-lg calendar-day"><span className="day-number">11</span><span className="day-activity text-sm font-semibold text-blue-800">Dia 6: Tóquio</span></div>
                                    <div className="bg-[#bbdefb] rounded-lg calendar-day"><span className="day-number">12</span><span className="day-activity text-sm font-semibold text-blue-800">Dia 7: Quioto</span></div>
                                    <div className="bg-[#bbdefb] rounded-lg calendar-day"><span className="day-number">13</span><span className="day-activity text-sm font-semibold text-blue-800">Dia 8: Quioto</span></div>
                                    <div className="bg-[#bbdefb] rounded-lg calendar-day"><span className="day-number">14</span><span className="day-activity text-sm font-semibold text-blue-800">Dia 9: Quioto</span></div>
                                    <div className="bg-[#bbdefb] rounded-lg calendar-day"><span className="day-number">15</span><span className="day-activity text-sm font-semibold text-blue-800">Dia 10: Nara</span></div>
                                    <div className="bg-[#e0f7fa] rounded-lg calendar-day"><span className="day-number">16</span><span className="day-activity text-sm font-semibold text-blue-800">Dia 11: Quioto</span></div>
                                    <div className="bg-[#e0f7fa] rounded-lg calendar-day"><span className="day-number">17</span><span className="day-activity text-sm font-semibold text-blue-800">Dia 12: Quioto</span></div>
                                    <div className="bg-[#e0f7fa] rounded-lg calendar-day"><span className="day-number">18</span><span className="day-activity text-sm font-semibold text-blue-800">Dia 13: Osaka</span></div>
                                    <div className="bg-[#bbdefb] rounded-lg calendar-day"><span className="day-number">19</span><span className="day-activity text-sm font-semibold text-blue-800">Dia 14: Osaka</span></div>
                                    <div className="bg-[#bbdefb] rounded-lg calendar-day"><span className="day-number">20</span><span className="day-activity text-sm font-semibold text-blue-800">Dia 15: Osaka</span></div>
                                    <div className="bg-[#bbdefb] rounded-lg calendar-day"><span className="day-number">21</span><span className="day-activity text-sm font-semibold text-blue-800">Dia 16: Hiroshima</span></div>
                                    <div className="bg-[#bbdefb] rounded-lg calendar-day"><span className="day-number">22</span><span className="day-activity text-sm font-semibold text-blue-800">Dia 17: Miyajima</span></div>
                                    <div className="bg-[#e0f7fa] rounded-lg calendar-day"><span className="day-number">23</span><span className="day-activity text-sm font-semibold text-blue-800">Dia 18: Kanazawa</span></div>
                                    <div className="bg-[#bbdefb] rounded-lg calendar-day"><span className="day-number">24</span><span className="day-activity text-sm font-semibold text-blue-800">Dia 19: Kanazawa</span></div>
                                    <div className="bg-[#bbdefb] rounded-lg calendar-day"><span className="day-number">25</span><span className="day-activity text-sm font-semibold text-blue-800">Dia 20: Kanazawa</span></div>
                                    <div className="bg-[#e0f7fa] rounded-lg calendar-day"><span className="day-number">26</span><span className="day-activity text-sm font-semibold text-blue-800">Dia 21: Retorno a Tóquio</span></div>
                                    <div className="bg-[#bbdefb] rounded-lg calendar-day"><span className="day-number">27</span><span className="day-activity text-sm font-semibold text-blue-800">Dia 22: Tóquio</span></div>
                                    <div className="bg-[#bbdefb] rounded-lg calendar-day"><span className="day-number">28</span><span className="day-activity text-sm font-semibold text-blue-800">Dia 23: Tóquio</span></div>
                                    <div className="bg-[#e0f7fa] rounded-lg calendar-day"><span className="day-number">29</span><span className="day-activity text-sm font-semibold text-blue-800">Dia 24: Dia Livre</span></div>
                                    <div className="bg-[#e0f7fa] rounded-lg calendar-day"><span className="day-number">30</span><span className="day-activity text-sm font-semibold text-blue-800">Dia 25: Retorno ao Brasil</span></div>
                                    {/* Days of October 2026, assuming the trip starts on Sep 6 */}
                                    <div className="bg-gray-200 rounded-lg"></div>
                                    <div className="bg-gray-200 rounded-lg"></div>
                                    <div className="bg-gray-200 rounded-lg"></div>
                                    <div className="bg-gray-200 rounded-lg"></div>
                                    <div className="bg-gray-200 rounded-lg"></div>
                                </div>
                            </div>
                        )}
                    </section>
                )}
                {activeTab === 'valores' && (
                    <section id="valores" className="tab-content active">
                        <h2 className="text-2xl font-bold mb-6 text-gray-700">Estimativa de Custos (por casal)</h2>
                        <div className="mb-8">
                            <p className="text-lg font-semibold text-gray-700">Visão em Reais (R$)</p>
                            <p className="text-sm text-gray-500 mb-4">Os preços podem variar dependendo da antecedência da compra e da época da viagem.</p>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left table-auto border-collapse rounded-lg overflow-hidden">
                                    <thead className="bg-[#1e40af] text-white">
                                        <tr>
                                            <th className="p-4">Categoria</th>
                                            <th className="p-4 text-center">Custo para o Casal</th>
                                            <th className="p-4">Observações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-blue-100 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="reais-passagem-jp" />
                                                <label htmlFor="reais-passagem-jp">Passagem Aérea</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">R$ 20.000 a R$ 36.000</td>
                                            <td className="p-4">Voos de ida e volta, saindo de São Paulo, com escala.</td>
                                        </tr>
                                        <tr className="bg-blue-100 border-b border-blue-200">
                                            <td colSpan="3" className="p-4 font-bold bg-blue-200 text-gray-700">Hospedagem (24 noites)</td>
                                        </tr>
                                        <tr className="bg-blue-50 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="reais-hospedagem-jp" />
                                                <label htmlFor="reais-hospedagem-jp">Hotel (econômico/moderado)</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">R$ 12.000 a R$ 28.800</td>
                                            <td className="p-4">Custo total para 24 noites, com diárias entre R$ 500 e R$ 1.200.</td>
                                        </tr>
                                        <tr className="bg-blue-100 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="reais-transporte-jp" />
                                                <label htmlFor="reais-transporte-jp">Transporte Interno</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">R$ 5.000 a R$ 6.000</td>
                                            <td className="p-4">Inclui `Japan Rail Pass` de 21 dias e transporte local nas cidades.</td>
                                        </tr>
                                        <tr className="bg-blue-50 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="reais-alimentacao-jp" />
                                                <label htmlFor="reais-alimentacao-jp">Alimentação</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">R$ 10.000 a R$ 18.000</td>
                                            <td className="p-4">Média de R$ 200 a R$ 400 por dia para o casal.</td>
                                        </tr>
                                        <tr className="bg-blue-100 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="reais-compras-jp" />
                                                <label htmlFor="reais-compras-jp">Compras e Lazer</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">R$ 6.000 a R$ 12.000</td>
                                            <td className="p-4">Souvenirs, ingressos para templos, etc.</td>
                                        </tr>
                                        <tr className="bg-blue-50">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="reais-extra-jp" />
                                                <label htmlFor="reais-extra-jp">Reserva de Emergência</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">R$ 5.000 a R$ 10.000</td>
                                            <td className="p-4">Recomendado para imprevistos.</td>
                                        </tr>
                                    </tbody>
                                    <tfoot className="bg-[#1e40af] text-white">
                                        <tr>
                                            <th className="p-4">TOTAL ESTIMADO</th>
                                            <th className="p-4 text-center">R$ 58.000 a R$ 110.800</th>
                                            <th className="p-4"></th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-gray-700">Visão em Dólares (US$)</p>
                            <p className="text-sm text-gray-500 mb-4">Cotação utilizada: US$ 1,00 = R$ 5,50. A taxa de câmbio pode variar.</p>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left table-auto border-collapse rounded-lg overflow-hidden">
                                    <thead className="bg-[#1e40af] text-white">
                                        <tr>
                                            <th className="p-4">Categoria</th>
                                            <th className="p-4 text-center">Custo para o Casal</th>
                                            <th className="p-4">Observações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-blue-100 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="dolar-passagem-jp" />
                                                <label htmlFor="dolar-passagem-jp">Passagem Aérea</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">US$ 3.636 a US$ 6.545</td>
                                            <td className="p-4">Voos de ida e volta, saindo de São Paulo, com escala.</td>
                                        </tr>
                                        <tr className="bg-blue-100 border-b border-blue-200">
                                            <td colSpan="3" className="p-4 font-bold bg-blue-200 text-gray-700">Hospedagem (24 noites)</td>
                                        </tr>
                                        <tr className="bg-blue-50 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="dolar-hospedagem-jp" />
                                                <label htmlFor="dolar-hospedagem-jp">Hotel (econômico/moderado)</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">US$ 2.182 a US$ 5.236</td>
                                            <td className="p-4">Custo total para 24 noites, com diárias entre US$ 90 e US$ 215.</td>
                                        </tr>
                                        <tr className="bg-blue-100 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="dolar-transporte-jp" />
                                                <label htmlFor="dolar-transporte-jp">Transporte Interno</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">US$ 909 a US$ 1.091</td>
                                            <td className="p-4">Inclui `Japan Rail Pass` de 21 dias e transporte local nas cidades.</td>
                                        </tr>
                                        <tr className="bg-blue-50 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="dolar-alimentacao-jp" />
                                                <label htmlFor="dolar-alimentacao-jp">Alimentação</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">US$ 1.818 a US$ 3.272</td>
                                            <td className="p-4">Média de US$ 40 a US$ 70 por pessoa por dia.</td>
                                        </tr>
                                        <tr className="bg-blue-100 border-b border-blue-200">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="dolar-compras-jp" />
                                                <label htmlFor="dolar-compras-jp">Compras e Lazer</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">US$ 1.091 a US$ 2.182</td>
                                            <td className="p-4">Souvenirs, ingressos para templos, etc.</td>
                                        </tr>
                                        <tr className="bg-blue-50">
                                            <td className="p-4 font-medium checkbox-item">
                                                <input type="checkbox" id="dolar-extra-jp" />
                                                <label htmlFor="dolar-extra-jp">Reserva de Emergência</label>
                                            </td>
                                            <td className="p-4 text-center font-bold">US$ 909 a US$ 1.818</td>
                                            <td className="p-4">Recomendado para imprevistos.</td>
                                        </tr>
                                    </tbody>
                                    <tfoot className="bg-[#1e40af] text-white">
                                        <tr>
                                            <th className="p-4">TOTAL ESTIMADO</th>
                                            <th className="p-4 text-center">US$ 10.545 a US$ 20.145</th>
                                            <th className="p-4"></th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </section>
                )}
                {activeTab === 'ferramentas' && (
                    <section id="ferramentas" className="tab-content active">
                        <h2 className="text-2xl font-bold mb-6 text-gray-700">Ferramentas de Planejamento com IA</h2>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                            <h3 className="text-xl font-bold text-[#1e40af] mb-2">Gerador de Lista de Viagem</h3>
                            <p className="text-gray-700 mb-4">Crie uma lista de viagem personalizada para a sua viagem de 25 dias para o Japão. Basta informar o que você gosta de fazer e a IA irá gerar uma lista completa para você.</p>
                            <textarea id="lista-prompt" className="w-full h-24 p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#1e40af] transition-colors" placeholder="Ex: Itens para o clima do Japão, adaptadores de tomada, etc."></textarea>
                            <button id="gerar-lista" className="mt-4 bg-[#1e40af] hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg shadow transition-colors">Gerar Lista de Viagem</button>
                            <div id="lista-output" className="mt-4 p-4 bg-white border border-gray-200 rounded-lg hidden">
                                <p className="text-gray-700">Sua lista de viagem será gerada aqui...</p>
                            </div>
                            <div id="lista-loading" className="mt-4 p-4 text-gray-700 hidden">
                                Gerando sua lista de viagem...
                            </div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                            <h3 className="text-xl font-bold text-[#1e40af] mb-2">Gerador de Plano de Refeições</h3>
                            <p className="text-gray-700 mb-4">Crie um plano de refeições sugerido para os 25 dias de viagem, considerando o roteiro e suas preferências.</p>
                            <textarea id="refeicao-prompt" className="w-full h-24 p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#1e40af] transition-colors" placeholder="Ex: Opções de refeições econômicas em Tóquio, pratos típicos de Quioto, etc."></textarea>
                            <button id="gerar-refeicao" className="mt-4 bg-[#1e40af] hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg shadow transition-colors">Gerar Plano de Refeições</button>
                            <div id="refeicao-output" className="mt-4 p-4 bg-white border border-gray-200 rounded-lg hidden">
                                <p className="text-gray-700">Seu plano de refeições será gerado aqui...</p>
                            </div>
                            <div id="refeicao-loading" className="mt-4 p-4 text-gray-700 hidden">
                                Gerando seu plano de refeições...
                            </div>
                        </div>
                    </section>
                )}
                {activeTab === 'dicas' && (
                    <section id="dicas" className="tab-content active">
                        <h2 className="text-2xl font-bold mb-6 text-gray-700">Dicas Gerais para a Viagem</h2>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                            <h3 className="text-xl font-bold text-[#1e40af] mb-2">Checklist Essencial (O que levar na mala)</h3>
                            <p className="text-gray-700 mb-4">Esses itens farão toda a diferença na sua viagem ao Japão.</p>
                            <ul className="list-none mt-4 text-gray-600">
                                <li className="checkbox-item"><input type="checkbox" id="dica-checklist-1-jp" /><label htmlFor="dica-checklist-1-jp">Japan Rail Pass (ativado ou voucher)</label></li>
                                <li className="checkbox-item"><input type="checkbox" id="dica-checklist-2-jp" /><label htmlFor="dica-checklist-2-jp">Adaptador de tomada (Tipo A/B)</label></li>
                                <li className="checkbox-item"><input type="checkbox" id="dica-checklist-3-jp" /><label htmlFor="dica-checklist-3-jp">Moeda local (ienes)</label></li>
                                <li className="checkbox-item"><input type="checkbox" id="dica-checklist-4-jp" /><label htmlFor="dica-checklist-4-jp">Capa de chuva ou guarda-chuva pequeno</label></li>
                                <li className="checkbox-item"><input type="checkbox" id="dica-checklist-5-jp" /><label htmlFor="dica-checklist-5-jp">Sapatos confortáveis para caminhar</label></li>
                                <li className="checkbox-item"><input type="checkbox" id="dica-checklist-6-jp" /><label htmlFor="dica-checklist-6-jp">Passaporte e visto (se necessário)</label></li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                            <h3 className="text-xl font-bold text-[#1e40af] mb-2">Dicas de Transporte</h3>
                            <ul className="list-none mt-4 text-gray-600">
                                <li className="mb-4">
                                    <span className="font-bold">Japan Rail Pass:</span> É um passe de trem que permite viagens ilimitadas na maioria das linhas de trem-bala (`Shinkansen`) e outras linhas da JR por um período específico (7, 14 ou 21 dias). Para um roteiro de 25 dias, a melhor opção é comprar um passe de 21 dias e usar trens locais nos dias restantes.
                                </li>
                                <li className="mb-4">
                                    <span className="font-bold">Cartões de transporte (Suica/Pasmo):</span> Além do JR Pass, compre um cartão de transporte recarregável (como o Suica ou Pasmo) para usar em metrôs, ônibus e linhas não-JR nas cidades.
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                            <h3 className="text-xl font-bold text-[#1e40af] mb-2">Costumes e Etiqueta</h3>
                            <ul className="list-none mt-4 text-gray-600">
                                <li className="mb-4">
                                    <span className="font-bold">Sapatos:</span> É comum tirar os sapatos ao entrar em casas, templos e em alguns restaurantes.
                                </li>
                                <li className="mb-4">
                                    <span className="font-bold">Gorjetas:</span> Dar gorjetas não é um hábito no Japão. O serviço de qualidade é esperado e já está incluso no preço.
                                </li>
                            </ul>
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
            {/* Sidebar de navegação */}
            <div className={`fixed inset-y-0 left-0 transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out bg-white p-4 md:p-8 shadow-md md:w-64 z-20`}>
                <div className="flex items-center justify-between mb-8">
                    <div className="text-2xl font-bold text-[#1e40af]">Planos</div>
                    <button
                        className="md:hidden p-2 rounded-full hover:bg-gray-200 transition-colors"
                        onClick={() => setIsDrawerOpen(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <ul className="space-y-4">
                    <li>
                        <button
                            className={`w-full text-left font-medium py-3 px-4 rounded-lg transition-colors duration-200 ${activePage === 'orlando' ? 'bg-[#1e40af] text-white shadow-lg' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                            onClick={() => setPage('orlando')}
                        >
                            Orlando
                        </button>
                    </li>
                    <li>
                        <button
                            className={`w-full text-left font-medium py-3 px-4 rounded-lg transition-colors duration-200 ${activePage === 'japao' ? 'bg-[#1e40af] text-white shadow-lg' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                            onClick={() => setPage('japao')}
                        >
                            Japão
                        </button>
                    </li>
                </ul>
            </div>
            {/* Botão para abrir o drawer no mobile */}
            <div className="flex-1 p-4 md:p-8">
                <button
                    className="md:hidden fixed top-4 left-4 z-30 p-2 rounded-full bg-white shadow-lg"
                    onClick={() => setIsDrawerOpen(true)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                {activePage === 'orlando' && orlandoContent}
                {activePage === 'japao' && japaoContent}
            </div>
            {/* Overlay para o fundo escurecido em mobile */}
            {isDrawerOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
                    onClick={() => setIsDrawerOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default App;
