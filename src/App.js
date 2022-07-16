import './App.css';
import Header from "./Header/Header";
import ListServices from "./ListServices/ListServices";
import SliderBlock from "./SliderBlock/SliderBlock";
import ExamplesBlock from "./ExamplesBlock/ExamplesBlock";
import InformationBlock from "./InformationBlock/InformationBlock";
import ContactBlock from "./ContactBlock/ContactBlock";
import Footer from "./Footer/Footer";
import FirstBlock from "./FirstBlock/FirstBlock";

function App() {
  return (
    <div className="App">
      <Header/>
        <FirstBlock/>
        <ListServices/>
        <SliderBlock/>
        <ExamplesBlock/>
        <InformationBlock/>
        <ContactBlock/>
        <Footer/>
    </div>
  );
}

export default App;
