import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
import Alert from './components/Alert';
import MicDemo from './components/MicDemo';

import { ChakraProvider } from '@chakra-ui/react'


function App() {
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <>
      <ChakraProvider>
        <Router>
          <Navbar />

          <Alert alert={alert} />

          <div className="container my-3">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <div>
                    <MicDemo /> 
                    <Home showAlert={showAlert} />{" "}
                  </div>
                }
              />
              <Route exact path="/about" element={<About />} />
              <Route
                exact
                path="/login"
                element={<Login showAlert={showAlert} />}
              />
              <Route
                exact
                path="/signup"
                element={<Signup showAlert={showAlert} />}
              />
            </Routes>
          </div>
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
