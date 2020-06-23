import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";

// import "./app.css";
import configureStore from "../store";
import Size from "./routes/Size";
import Type from "./routes/Type";
import Toppings from "./routes/Toppings";
import OrderDetails from "./routes/OrderDetails";
import NotFound from "./routes/NotFound";

const store = configureStore();

const App: React.FC = (): React.ReactElement => {
  return (
      <BrowserRouter>
        <Provider store={store}>
            <Switch>
                <Route exact path="/" component={Size} />
                <Route exact path="/type" component={Type} />
                <Route exact path="/toppings" component={Toppings} />
                <Route exact path="/details" component={OrderDetails} />
                <Route component={NotFound} />
            </Switch>
        </Provider>
      </BrowserRouter>
  );
};

export default App;
