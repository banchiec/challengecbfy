import { render } from 'react-dom';
import Main from './components/main/Main'
import './App.css';

function App(purchase) {
  render(<Main purchase={purchase} />, document.getElementById('root'))
}

export default App;
