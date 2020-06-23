import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { PizzaTypeReducer, PizzaSizeReducer, PizzaToppingsReducer } from "./reducers/pizzaDetails";
import CreateNewOrderReducer from "./reducers/newOrder";

export const rootReducer = combineReducers({
  Size: PizzaTypeReducer,
  Type: PizzaSizeReducer,
  Toppings: PizzaToppingsReducer,
  CreateNewOrderReducer: CreateNewOrderReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
