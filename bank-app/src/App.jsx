import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { Clients, Cards } from './pages';

const App = () => {
  const [cards, setCards] = useState([
    { id: 1, clientId: 1, cardNumber: '7434-7878-9012-3056' },
    { id: 2, clientId: 2, cardNumber: '7376-5432-1008-7054' },
    { id: 3, clientId: 3, cardNumber: '7486-5932-1508-9054' },
    { id: 4, clientId: 4, cardNumber: '7036-5032-1908-1254' },
  ]);

  const [clients, setClients] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@gmail.com', phone: '+380975678765' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@gmail.com', phone: '+380635687634' },
    { id: 3, name: 'Frank Sinatra', email: 'frank.sinatra@gmail.com', phone: '+380957869796' },
    { id: 4, name: 'Michael Lidug', email: 'michael.lidug@gmail.com', phone: '+380734273587' },
  ]);

  const handleAddCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  const handleAddClient = (newClient) => {
    setClients([...clients, newClient]);
  };

  const handleDeleteCard = (updatedCards) => {
    setCards(updatedCards);
  };

  return (
    <div className="container full-height">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
                {}
                <Cards cards={cards} onDeleteCard={handleDeleteCard} onAddCard={handleAddCard} />
              </>
            }
          />
          <Route path="/clients" element={<Clients clients={clients} onAddClient={handleAddClient} onDeleteClient={(id) => handleDeleteCard(id)} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;