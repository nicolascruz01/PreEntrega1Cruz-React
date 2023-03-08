import React from 'react';
import NaviBar from './components/NaviBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemCount from './components/ItemCount';

const App = () => {
  return (
    <>
      <NaviBar />
      <ItemListContainer greeting={"Bienvevidos a la mejor tienda online de funkos"}/>
      <ItemCount  />
    </>
  )
};

export default App
