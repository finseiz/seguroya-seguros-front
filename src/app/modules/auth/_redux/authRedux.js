import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const actionTypes = {
  Login: "[Login] Action",
  Logout: "[Logout] Action",
  Register: "[Register] Action",
  UserRequested: "[Request User] Action",
  UserLoaded: "[Load User] Auth API",
  setSessionExpired: "SET_SESSION_EXPIRED"
};

const initialAuthState = {
  user: undefined,
  authToken: undefined,
  sessionExpired: false,
};

export const reducer = persistReducer(
  { storage, key: "v706-auth", whitelist: ["user", "authToken"] },
  (state = initialAuthState, action) => {
    switch (action.type) {
      case actionTypes.Login: {
        const { authToken } = action.payload;

        return { authToken, user: undefined };
      }

      case actionTypes.Register: {
        const { authToken } = action.payload;

        return { authToken, user: undefined };
      }

      case actionTypes.Logout: {
        // TODO: Change this code. Actions in reducer aren't allowed.
        return initialAuthState;
      }

      case actionTypes.UserLoaded: {
        const { user } = action.payload;
        return { ...state, user };
      }

      case actionTypes.setSessionExpired: {
        return {...state, sessionExpired: true };
      }

      default:
        return state;
    }
  }
);

export const actions = {
  login: (authToken) => ({ type: actionTypes.Login, payload: { authToken } }),
  register: (authToken) => ({
    type: actionTypes.Register,
    payload: { authToken },
  }),
  logout: () => ({ type: actionTypes.Logout }),
  requestUser: (user) => ({
    type: actionTypes.UserRequested,
    payload: { user },
  }),
  fulfillUser: (user) => ({ type: actionTypes.UserLoaded, payload: { user } }),
  setUser: (user) => ({ type: actionTypes.SetUser, payload: { user } }),
  setSessionExpired: () => ({ type: actionTypes.setSessionExpired }),
};