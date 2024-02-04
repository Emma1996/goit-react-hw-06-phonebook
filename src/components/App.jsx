import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        fontSize: 30,
        color: '#010101',
        padding: 10,
        alignItems: 'center',
        alignContent: 'center',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
