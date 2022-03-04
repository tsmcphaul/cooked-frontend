import './App.css';
import Navbar from './components/Navbar';
import RecipeContainer from './components/recipes/RecipeContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <RecipeContainer />
    </div>
  );
}

export default App;
