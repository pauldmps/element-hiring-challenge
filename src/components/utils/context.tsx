import React, { useReducer } from 'react';
import reducer, {
  ACTIONS,
  initialState,
  IPayload,
  IStateItems,
} from './reducer';

interface IContext {
  cartData: Array<IStateItems>;
  totalPremium: number;
  addToCart: (payload: IPayload) => void;
  removeFromCart: (payload: IPayload) => void;
}

export const AppContext = React.createContext<IContext | undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cartData, totalPremium } = state;

  const addToCart = (payload: IPayload) => {
    dispatch({ type: ACTIONS.ADD_PRODUCT, payload });
  };

  const removeFromCart = (payload: IPayload) => {
    dispatch({ type: ACTIONS.REMOVE_PRODUCT, payload });
  };

  return (
    <AppContext.Provider
      value={{
        cartData,
        totalPremium,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
