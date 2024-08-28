

import {atom} from "recoil"

export const cartState = atom({
    key: 'cartState', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
  });
  export const subtotalState = atom({
    key: 'subtotalState',
    default: 0,
  });
  export const userState = atom({
    key: 'userState',
    default: {
      isRegistered: false, // Beispielwert
      checkoutRedirect: false,
    },
  });
  export const favoriteState = atom({
    key: 'favoriteState',
    default: [],
  });