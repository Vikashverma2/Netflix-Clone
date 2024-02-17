import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HeroPage from './Components/HeroPage'
import SignInPage from "./Components/SignInPage";



function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HeroPage/>}>
        </Route>
        <Route path="login" element={<SignInPage/>} />
      </Routes>
    </BrowserRouter>

    
    </>
  );
}

export default App;
