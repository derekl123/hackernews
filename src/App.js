import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import { Provider } from 'react-redux'
import Store from './Store';


class App extends React.Component {


  render() {
    return <Provider store={Store}><div className="App">
      <SearchBar />
    </div>
    </Provider>
  }

}

export default App;
