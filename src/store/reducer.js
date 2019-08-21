import {AGE_UP,AGE_DOWN} from './constants';
const initialState = {
  age: 20
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
//  console.log("action",action.type);
//  debugger;
  switch (action.type) {
    case AGE_UP:
      newState.age += action.data;
      break;

    case AGE_DOWN:
      newState.age -= action.data;
      break;
  }
  return newState;
};

export default reducer;