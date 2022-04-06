import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Auth from "./views/Auth";
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/login" element={<Auth/>}></Route> */}
        <Route path="/login" element={<Auth authRoute={'login'} />} />
        <Route path="/register" element={<Auth authRoute={'register'} />} />
      </Routes>
    </Router>
    </AuthContextProvider>
    
  );
}

export default App;
