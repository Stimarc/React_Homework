import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #40dc35;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const Cards = ({ cards, onDeleteCard, onAddCard }) => {
  const [newCard, setNewCard] = useState({
    cardNumber: '',
    clientId: '',
  });

  const handleAddCard = () => {
    onAddCard({
      ...newCard,
      id: Date.now(),
    });
    setNewCard({
      cardNumber: '',
      clientId: '',
    });
  };

  const handleDeleteCard = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    onDeleteCard(updatedCards);
  };

  return (
    <Container>
      <h1>Cards</h1>
      <div>
        <h2>Add a New Card</h2>
        <Input
          type="text"
          placeholder="Card Number"
          value={newCard.cardNumber}
          onChange={(e) => setNewCard({ ...newCard, cardNumber: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Client ID"
          value={newCard.clientId}
          onChange={(e) => setNewCard({ ...newCard, clientId: e.target.value })}
        />
        <Button onClick={handleAddCard}>Add Card</Button>
      </div>

      {cards.map((card) => (
        <CardContainer key={card.id}>
          <p>Card Number: {card.cardNumber}</p>
          <p>Client ID: {card.clientId || 'Not Linked'}</p>
          <Button onClick={() => handleDeleteCard(card.id)}>Delete Card</Button>
        </CardContainer>
      ))}
    </Container>
  );
};