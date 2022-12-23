import {RATE,QTY} from "./action_type";
export const changeRate = (e,el) => {
  return {
    type: RATE,
    payload:{id:e,data:el}
  };
};
export const changeQty = (e,el) => {
  return {
    type: QTY,
    payload:{id:e,data:el}
  };
};

