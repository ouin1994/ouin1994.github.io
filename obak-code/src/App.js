import React from 'react';
import { MainRouter } from "~"
import { Provider } from "react-redux";

import store from './scripts/redux/store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainRouter></MainRouter>
      </Provider>
    </div>
  );
}
export default App;
