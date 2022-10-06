import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
function App() {
  return (
    <>
    <Navbar title="Text Utils" text="About"/>
    <div className="container my-3">
    <TextForm heading="Enter The Text To Analyse"/>
    </div>
    </>
  );
}

export default App;
