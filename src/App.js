
// import {swiper} from 'swiper';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Routess from './config/Routess';



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route render={props => (
        <>
        <Header {...props}/>
        <Footer />
        <Routess />
            
        </>
    )}/>
    </Routes>

</BrowserRouter>
  );
}

export default App;
