
import './App.css';
import Header from './components/header';

// instead of for, we'll use htmlFor
// instead of class, we'll use className
// instead of using <Link> we'll use import


function App() {
  return (
    <div className="App">
      <input name='user' />
      <Header />
    </div>
  );
}

export default App;
