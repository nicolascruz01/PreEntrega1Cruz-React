import React from 'react';
import NaviBar from './components/NaviBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <>
      <NaviBar />
      <ItemListContainer greeting={"Bienvevidos a la mejor tienda online de funkos"}/>
    </>
  )
};

export default App
