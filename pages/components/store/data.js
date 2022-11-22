import {action, createStore} from 'easy-peasy';

const Store = createStore({
  city: '',
  setCity: action((state, payload) => {
    return {
      ...state,
      city: payload,
    };
  }),
  sort: '',
  setSort: action((state, payload) => {
    return {
      ...state,
      sort: payload,
    };
  }),
  selectQuery: '',
  setSelectQuery: action((state, payload) => {
    return {
      ...state,
      selectQuery: payload,
    };
  }),
  businessType: '',
  setBusinessType: action((state, payload) => {
    // alert(payload)
    return {
      ...state,
      businessType: payload,
    };
  }),
  area: '',
  setArea: action((state, payload) => {
    // alert(payload)
    return {
      ...state,
      area: payload,
    };
  }),
  filterCategory: {
    type: '',
    category: '',
  },
  setFilterCategory: action((state, payload) => {
    return {
      ...state,
      filterCategory: payload,
    };
  }),
});
export default Store;
