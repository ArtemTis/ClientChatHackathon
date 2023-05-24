import './App.css';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from './utils/redux/store'
import { router } from './utils/router'


function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
