import './App.css';
import Layout from './hoc/Layout/Layout';
import {Routes,Route} from 'react-router-dom'
import Home from './containers/Home/Home'
import CreateRezume from './containers/CreateRezume/CreateRezume';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>         
          <Route path="/create_rezume"  element={<CreateRezume/>} />
          <Route path="/" exact element={<Home/>} />
          <Route render={()=><h1 style={{textAlign:'center',color:'red'}}>404 not found</h1>} />
        </Routes>    
      </Layout>
    </div>
  );
}

export default App;
