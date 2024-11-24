import './App.css';
import { FunctionComponent } from 'react';
import IceCreamList from './components/IceCreamList';
import { IceCream } from './consts/types';
import Modal from './components/Modal';


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
  return (
    <div className="App">
      <IceCreamList items={list}></IceCreamList>
      <Modal />
    </div>
  );
}

export default App;
