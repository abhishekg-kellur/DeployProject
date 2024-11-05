import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import CreateItemForm from './CRUD/createItem';
import ReadItemForm from './CRUD/readItem';
import UpdateItemForm from './CRUD/updateItem';
import DeleteItemForm from './CRUD/deleteItem';

function App() {

  const [activeForm, setActiveForm] = useState(null);

  const showForm = (form) => {
    setActiveForm(form);
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Item Manager</h1>
      <div>
        <button onClick={() => showForm('create')} style={buttonStyle}>
          Create Item
        </button>
        <button onClick={() => showForm('read')} style={buttonStyle}>
          Get Items
        </button>
        <button onClick={() => showForm('update')} style={buttonStyle}>
          Update Item
        </button>
        <button onClick={() => showForm('delete')} style={buttonStyle}>
          Delete Item
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        {activeForm === 'create' && <CreateItemForm />}
        {activeForm === 'read' && <ReadItemForm />}
        {activeForm === 'update' && <UpdateItemForm />}
        {activeForm === 'delete' && <DeleteItemForm />}
      </div>

    </div>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  margin: '10px',
  fontSize: '16px',
  cursor: 'pointer',
};

export default App;
