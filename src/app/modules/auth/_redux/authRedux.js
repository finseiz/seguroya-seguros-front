import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const actionTypes = {
  Login: "[Auth] Login",
  Logout: "[Auth] Logout",
  setUser: "[Auth] Set User",
};

const initialAuthState = {
  user: undefined,
  authToken: undefined,
};

export const reducer = persistReducer(
  { storage, key: "v706-auth", whitelist: ["user", "authToken"] },
  (state = initialAuthState, action) => {
    switch (action.type) {
      case actionTypes.Login: {
        const { authToken } = action.payload;
        return { ...state, authToken };
      }

      case actionTypes.Logout: {
        return initialAuthState;
      }

      case actionTypes.setUser: {
        const { user } = action.payload;
        return { ...state, user };
      }

      default:
        return state;
    }
  }
);

export const actions = {
  login: (authToken) => ({ type: actionTypes.Login, payload: { authToken } }),
  logout: () => ({ type: actionTypes.Logout }),
  setUser: (user) => ({ type: actionTypes.setUser, payload: { user } }),
};