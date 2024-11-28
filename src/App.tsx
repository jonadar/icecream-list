import { FunctionComponent, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { IceCream } from './consts/types';
import IceCreamList from './components/IceCreamList';
import NewIceCream from './components/NewIceCream';

import './App.scss';


const list: IceCream[] = [{
  title: "hello",
  description: "there",
  color: "#FF00FF"
},
{
  title: "why",
  description: "are you there",
  color: "#FFFF00"
}, {
  title: "am",
  description: "I here yet",
  color: "#00FFFF"
}]

const App: FunctionComponent = () => {
  const [iceCreamList, setIceCreamList] = useState<IceCream[]>(list || []);

  const addIceCream = (newItem: IceCream) => {
    setIceCreamList([...iceCreamList, newItem]);
  }

  const updateIceCream = (index: number, newItem: IceCream) => {
    const updatedList = [...iceCreamList]; // Clone the array
    updatedList.splice(index, 1, newItem); // Replace the item at the given index
    setIceCreamList(updatedList); // Update state
  }

  const removeIceCream = (index: number) => {
    const updatedList = [...iceCreamList]; // Clone the array
    updatedList.splice(index, 1); // Remove the item at the given index
    setIceCreamList(updatedList); // Update state
  }

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<IceCreamList iceCreamList={iceCreamList} updateIceCream={updateIceCream} removeIceCream={removeIceCream} />} />
          <Route path='/add' element={<NewIceCream onAdd={addIceCream} />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
