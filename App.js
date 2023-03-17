import { Provider } from "react-redux";
import store from "./app/store";
import React from "react";
import MainNavigator from "./src/navigations/MainNavigator";

const App = () => {
  return( 
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
