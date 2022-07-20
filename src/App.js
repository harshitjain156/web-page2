import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Form from './components/Form';
import Main from './components/Main';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';


import Subs from './components/Subs';

function App() {
  return (
    <div className="App">
        
        <NavBar />
        <Main />
        <Portfolio />
        <Subs />
        <Card />
        <Form />
        <Footer />
    </div>
  );
}

export default App;
