import './App.css';
import H2 from './components/H2/H2';
import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';
//import React, {useState} from 'react';
import Paragraph from './components/Paragraph/Paragraph';


function App() {

let escText = "The benefits may include on-demand transportation, mobility, independence and convenience, and emergency power. During the 1920s, cars had another benefit: 'couples finally had a way to head off on unchaperoned dates, plus they had a private space to snuggle up close at the end of the night.'";

  return (
    <div className="App">
      <Logo/>     
      <Header/><br/>
      <Paragraph someText="A car (or automobile) is a wheeled motor vehicle that is used for transportation." />
      <Paragraph someText="Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels,
       and mainly transport people instead of goods."/><br/>
      <H2 someText="Brief History of Cars"/><br/><hr/>
      <Paragraph someText="The year 1886 is regarded as the birth year of the car when German inventor Carl Benz patented his Benz Patent-Motorwagen."/>
      <Paragraph someText="Cars became widely available during the 20th century. One of the first cars affordable by the masses was the 1908 Model T,
       an American car manufactured by the Ford Motor Company. Cars were rapidly adopted in the US, where they replaced animal-drawn carriages and carts."/><br/>
      <H2 someText="Properties"/><br/><hr/>
      <Paragraph someText="Cars have controls for driving, parking, passenger comfort, and a variety of lights. Over the decades, 
      additional features and controls have been added to vehicles, making them progressively more complex. 
      These include rear-reversing cameras, air conditioning, navigation systems, and in-car entertainment."/><br/>
      <Paragraph someText="Most cars in use in the early 2020s are propelled by an internal combustion engine, fueled by the 
      combustion of fossil fuels. Electric cars, which were invented early in the history of the car, became 
      commercially available in the 2000s and are predicted to cost less to buy than gasoline cars before 2025."/><br/>
      <H2 someText="Cost and Benefits"/><br/><hr/>
      <Paragraph someText="The costs of car usage, which may include the cost of: acquiring the vehicle, repairs and auto 
      maintenance, fuel, depreciation, driving time, parking fees, taxes, and insurance, are weighed against 
      the cost of the alternatives, and the value of the benefits – perceived and real – of vehicle usage."/><br/>
      <Paragraph someText={escText}/><br/>
      <H2 someText=""/><br/><hr/>
      <Paragraph someText=""/><br/>

    </div>
  );
}

export default App;
