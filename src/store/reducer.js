// third party
import { combineReducers } from 'redux';

// project import
import customizationReducer from './customizationReducer';
import punchInReducer from './punchInSlice';

// ==============================|| REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  punchIn: punchInReducer,
});

export default reducer;
