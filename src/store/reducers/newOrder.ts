import { DETAIL_LOADING_ACTION, DETAIL_SET_ACTION, DETAIL_ERROR_ACTION, DETAIL_CLEAR_ACTION } from "../actions/actionTypes";

interface OrderDetailState {
  state:  string;
  hide: boolean; 
}
const initialState: OrderDetailState = {
    state: 'Create Order', 
    hide: false
};

 const CreateNewOrderReducer = (
    state: OrderDetailState = initialState,
    action: any
  ): OrderDetailState => {
    switch (action.type) {
      case DETAIL_LOADING_ACTION:
        return {
          state: 'Loading ....', 
          hide: true
        };
  
      case DETAIL_SET_ACTION:
        return {
          state: 'Order id: ' + action.id + 'Created ', 
          hide: true
        };
      case DETAIL_ERROR_ACTION:
        return {
          state: 'Found Error', 
          hide: true
        };
      case DETAIL_CLEAR_ACTION:
        return {...initialState};
      default:
        return state;
    }
  };
  
  export default CreateNewOrderReducer;