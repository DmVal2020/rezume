import './App.css';
import Layout from './hoc/Layout/Layout';
import {Routes,Route} from 'react-router-dom'
import Home from './containers/Home/Home'
// import Finding from './containers/Finding/Finding';
// import Editing from './containers/Editing/Editing';
import CreateRezume from './containers/CreateRezume/CreateRezume';
import Pdf from './containers/PrewResume/ResumePdf/Pdf'
import ResumeReading from './containers/ResumeReading/ResumeReading';
import ResumeEditing from './containers/ResumeEditing/ResumeEditing';
import Error from './containers/Error/Error';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>         
          <Route path="/create"  element={<CreateRezume />} />
          {/* <Route path="/read_rezume"  element={<Finding />} />
          <Route path='/read_rezume/:hash' element={<ResumeReading />} /> */}
          <Route path='/:hash' element={<ResumeReading />} />
          {/* <Route path="/edit_rezume"  element={<Editing />} /> */}
          <Route path='/edit/:hash' element={<ResumeEditing />} />
          <Route path="/pdf"  element={<Pdf />} />
          <Route path="/" exact element={<Home/>} />
          <Route path="*" element={<Error />} />
        </Routes>    
      </Layout>
    </div>
  );
}

export default App;
