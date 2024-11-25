import { FunctionComponent, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { IceCream } from './consts/types';
import IceCreamList from './components/IceCreamList';
import NewIceCream from './components/NewIceCream';
import Modal from './components/Modal';

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

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<IceCreamList iceCreamList={iceCreamList} />} />
          <Route path='/add' element={<NewIceCream onAdd={addIceCream} />} />
        </Routes>
      </HashRouter>
      <Modal />
    </div>
  );
}

export default App;
