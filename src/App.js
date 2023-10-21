import './App.css';
//importing the components
import Section from './pages/Section'
import Main from './pages/Main'

function App() {
  return (
    <div className="App">
      {/* returning the components which will then be rendered in the index.js page */}
      <Section />
      <Main />
    </div>
  );
}

export default App;
