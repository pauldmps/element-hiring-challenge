import { productDetails, PRODUCT_ID } from "./constants";

export const enum ACTIONS {
  ADD_PRODUCT = "ADD_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
}

export interface IPayload {
  id: PRODUCT_ID;
  coverage: number;
  premium: number;
}

interface IAction {
  type: ACTIONS;
  payload: IPayload;
}

export interface IStateItems {
  id: PRODUCT_ID;
  productName: string;
  coverage: number;
  premium: number;
}

interface IState {
  cartData: Array<IStateItems>;
  totalPremium: number;
}

export const initialState: IState = { cartData: [], totalPremium: 0 };

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case ACTIONS.ADD_PRODUCT: {
      const stateCopy = Object.assign({}, state);
      const index = stateCopy.cartData.findIndex(
        (item) => item.id === action.payload.id
      );
      const product = productDetails.find(
        (product) => product.id === action.payload.id
      )!;
      const coverage = action.payload.coverage;
      const premium = coverage * (product?.risk / 100);
      stateCopy.totalPremium += premium;
      if (index === -1) {
        stateCopy.cartData.push({
          coverage,
          premium,
          ...product,
        });
        return stateCopy;
      }
      stateCopy.cartData[index] = {
        coverage,
        premium,
        ...product,
      };
      return stateCopy;
    }

    case ACTIONS.REMOVE_PRODUCT: {
      const stateCopy = Object.assign({}, state);
      const index = stateCopy.cartData.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) {
        return stateCopy;
      }
      const product = productDetails.find(
        (product) => product.id === action.payload.id
      )!;
      const coverage = action.payload.coverage;
      const premium = coverage * (product?.risk / 100);
      stateCopy.cartData = stateCopy.cartData.filter((_, i) => i !== index);
      stateCopy.totalPremium = Math.abs(stateCopy.totalPremium - premium);
      return stateCopy;
    }

    default:
      return state;
  }
};

export default reducer;
