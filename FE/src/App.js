import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/Home/HomePage';
import DesktopNavigation from './Navigation/DesktopNavigation';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
      <Router>
        <DesktopNavigation />
        <div className='margin'>
          <Routes>
            <Route path='/' index element={<HomePage />} />
          </Routes>
        </div>
      </Router >
    


    </>
  );
}
export default App;
