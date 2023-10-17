// store.js
import React, { createContext, useReducer } from 'react';

const initialState = { auth: {}, user: {} };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    const { payload } = action;
    switch (action.type) {
      case 'SET_AUTH':
        return {
          ...state,
          auth: {
            email: payload.accounts.email,
            employeeId: payload.employee_id,
            name: payload.name,
            phoneNumber: payload.addresses.primary_phone_number,
            userId: payload.id
          }
        };
      case 'SET_USER':
        return { ...state, user: payload.data, accessToken: payload.accessToken };
      case 'SET_ACCOUNT_SETTINGS':
        return { ...state, accountSettings: payload.data };
      case 'SET_BALANCE':
        return { ...state, balance: payload.data };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
