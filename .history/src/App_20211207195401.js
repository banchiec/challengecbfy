import { render } from 'react-dom';
import Main from './components/card/Card'
import './App.css';

function App(purchase) {
  render(<Main />, document.getElementById('root'))
}

export default App;
