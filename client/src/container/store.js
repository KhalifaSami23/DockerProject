import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

const initialValue = {};
const context = createContext(initialValue);

export const useStoreState = () => {
  const [user, dispatch] = useContext(context);
  return user;
};
export const useStoreDispatch = () => {
  const [user, dispatch] = useContext(context);
  return dispatch;
};

export const useStore = () => {
  return useContext(context);
};

const StoreProvider = (props) => {
  const value = useReducer(reducer, initialValue);

  return <context.Provider value={value}>{props.children}</context.Provider>;
};

export default StoreProvider;
