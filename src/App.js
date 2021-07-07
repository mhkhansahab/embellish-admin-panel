import './App.css';
import "./Styles/fonts.css";
import Layout from "./Containers/layouts/mainLayout";
import {BrowserRouter as Router} from "react-router-dom";

function App(){
  return (
    <div className="App">
      <Router>
      <Layout></Layout>
      </Router>
    </div>
  );
}


export default App;
