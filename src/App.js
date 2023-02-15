import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import GroupWorkSpace from './components/GroupWorkspace';
import Navbar from './components/Navbar';

//the main workspace for the application
function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="App-main">
        <Sidebar/>
        <GroupWorkSpace/>
      </main>
    </div>
  );
}

export default App;
