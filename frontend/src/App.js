import './App.css';
import {BrowserRouter as Router, Routes , Route ,} from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header';
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
<Router>
  <Header/>
  <div className="Pages">
  <Routes>
    <Route path='/' element={<Home/>}/>
  </Routes>
  </div>
  <Footer/>
</Router>
    </div>
  );
}

export default App;
