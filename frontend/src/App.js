import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Header from './components/header';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <div className='pages'>
        <Routes>
          <Route path='/' element={<Home />} />
        
      </Routes>
      </div>
      

      </BrowserRouter>
     
    </div>
  );
}

export default App;
