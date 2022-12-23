import { RATE, QTY } from "./action_type";
const initialState = {
  data: [
    {
      id: 1,
      name: "Ravi",
      qty: 3,
      rate: 10,
    },
    {
      id: 2,
      name: "Prajal",
      qty: 3,
      rate: 10,
    },
  ],
};
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case RATE: {
      const { id, data } = action.payload;
      // console.log(id, data);
      const edit = state.data.map((e) =>
        e.id == id ? { ...e, rate: data } : e
      );
      return { ...state, data: edit };
    }
    case QTY: {
      const { id, data } = action.payload;
      // console.log(id, data);
      const edit = state.data.map((e) =>
        e.id == id ? { ...e, qty: data } : e
      );
      return { ...state, data: edit };
    }
    default:
      return state;
  }
};
export default reducers;
