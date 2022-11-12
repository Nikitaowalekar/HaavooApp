import {action, createStore} from 'easy-peasy';

const Store = createStore({
  city: '',
  setCity: action((state, payload) => {
    // alert(payload)
    return {
      ...state,
      city: payload,
    };
  }),
});
export default Store;
