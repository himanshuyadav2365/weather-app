import './App.css';
import Home from './components/Home';
import {Provider} from "react-redux"
import app from './utils/store';

function App() {
  return (
    <Provider store={app}>
      <div>
      <Home/>
      </div>
    </Provider>
  );
}

export default App;
