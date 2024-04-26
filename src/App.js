import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Links from './Components/Links';
import Main from './Components/Main';
import Faq from './Components/Faq';

function App() {
  return (
    <div className="App w-[1200px] m-auto sm:w-[100%]">
     <Navbar/>
     <Links/>
     <Main/>
     <Faq/>
    </div>
  );
}

export default App;
