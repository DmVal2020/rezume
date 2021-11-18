import './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home'
import CreateRezume from './containers/CreateRezume/CreateRezume';

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
        <CreateRezume />
      </Layout>
    </div>
  );
}

export default App;
