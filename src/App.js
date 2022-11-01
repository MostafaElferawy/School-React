// import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/sidebar.js';
import NotFound from './pages/NotFound'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Sidebar/>
        
        <Switch>
          {/* <Route path={"**"} exact component={NotFound}/> */}
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
