import "./App.css";
import Header from "./components/Header/Header";
import data from "./data/data";
import Section from "./components/Section/Section";

function App() {
  let isDescription = false;

  return (
    <div className="App">
      <Header isDescription={isDescription} someTxt={data[1]} />
      <Section isDescription={isDescription} someTxt={data[0]} />
      <Section isDescription={isDescription} someTxt={"Something Else"} />
      <Section isDescription={isDescription} someTxt={"Another"} />
      <Section isDescription={isDescription} someTxt={"One MOre"} />
      {/* <br />
      <H2 someText="Brief History of Cars" />
      <br />
      <hr />
      <Paragraph someText="The year 1886 is regarded as the birth year of the car when German inventor Carl Benz patented his Benz Patent-Motorwagen." />
      <Paragraph
        someText="Cars became widely available during the 20th century. One of the first cars affordable by the masses was the 1908 Model T,
       an American car manufactured by the Ford Motor Company. Cars were rapidly adopted in the US, where they replaced animal-drawn carriages and carts."
      />
      <br /> */}
      {/* <H2 someText="Properties" /> */}
      {/* <br />
      <hr />
      <Paragraph
        someText="Cars have controls for driving, parking, passenger comfort, and a variety of lights. Over the decades, 
      additional features and controls have been added to vehicles, making them progressively more complex. 
      These include rear-reversing cameras, air conditioning, navigation systems, and in-car entertainment."
      /> */}
      {/* <br />
      <Paragraph
        someText="Most cars in use in the early 2020s are propelled by an internal combustion engine, fueled by the 
      combustion of fossil fuels. Electric cars, which were invented early in the history of the car, became 
      commercially available in the 2000s and are predicted to cost less to buy than gasoline cars before 2025."
      />
      <br /> */}
      {/* <H2 someText="Cost and Benefits" />
      <br />
      <hr />
      <Paragraph
        someText="The costs of car usage, which may include the cost of: acquiring the vehicle, repairs and auto 
      maintenance, fuel, depreciation, driving time, parking fees, taxes, and insurance, are weighed against 
      the cost of the alternatives, and the value of the benefits – perceived and real – of vehicle usage."
      /> */}
      {/* <br />
      <Paragraph  />
      <br />
      <H2 someText="" />
      <br />
      <hr />
      <Paragraph someText="" />
      <br /> */}
    </div>
  );
}

export default App;
