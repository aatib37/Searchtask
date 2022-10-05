
import './App.css';
import { store } from './redux/store';
import { Search } from './Search';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Search/>
    </Provider>
  );
}

export default App;
