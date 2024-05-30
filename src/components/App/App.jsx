import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';

import { useState, useEffect } from 'react';

import { fetchGrocery } from '../../groceryApi/grocery.api';
import AddGroceryForm from '../AddGroceryForm/AddGroceryForm';

function App() {
const [groceryList, setGroceryList] = useState([
]);

const refreshGrocery = () => {
    const groceryPromise = fetchGrocery();
    groceryPromise
    .then((response) => {
        console.log('SERVER DATA:', response);
        setGroceryList(response.data);
    })
    .catch((err) => {
        console.error('ERROR:', err);
    });
};

useEffect(() => {
    refreshGrocery();
}, []);

const handleClickDelete = (id) => {
  console.log('DELETE - groceryId:', id);
  deleteGrocery(id)
    .then((response) => {
      refreshGrocery();
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
};

return (
    <div>
    <AddGroceryForm groceryRefreshCallback={refreshGrocery} />
    {groceryList.map((groceryData, dataIndex) => {
        return (   
        <div key={dataIndex}>
            <Header />
            <h3>{groceryData.Name}</h3>
            <p>{groceryData.Quantity}</p>
            <p>{groceryData.Unit}</p>
            <p>{groceryData.Purchased}</p>
            <button onClick={() => handleClickDelete(groceryData.id)}>Delete</button>
        </div>
        );
    })}
    </div>
);
}

export default App;