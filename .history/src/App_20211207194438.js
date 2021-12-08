import { render } from 'react-dom';
import Card from './components/card/Card'
import './App.css';

function App(purchase) {
  render(<Card />, document.getElementById('root'))
}

export default App;
