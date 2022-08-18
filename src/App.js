// import logo from './logo.svg';
import './App.css';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <Navbar />
        <Dashboard /> 
      </div>
      </div>
    </div>
  );
}

export default App;
