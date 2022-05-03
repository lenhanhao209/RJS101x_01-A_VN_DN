import React from "react";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
