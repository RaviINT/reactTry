import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeRate, changeQty } from "../../redux/action";
function SheetOne() {
  // const [qty,setQty]=useState()
  const [temp, setTemp] = useState([]);
  let dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  useEffect(() => {
    setTemp(data);
  }, [data]);
  return (
    <div>
      <div>
        <h2>Sheet 1</h2>
        {temp?.map((el, i) => (
          <div key={i}>
            <div>{el.name}</div>
            <input
              type="text"
              value={el.rate}
              onChange={(e) => {
                dispatch(changeRate(el.id, e.target.value));
              }}
            />
            <input
              type="text"
              value={el.qty}
              onChange={(e) => {
                dispatch(changeQty(el.id, e.target.value));
              }}
            />
            <div>Amount:{el.qty*el.rate}</div>
          </div>
        ))}
      </div>
      <div>
        <h2>Sheet 2</h2>
        {temp.map((el, i) => (
          <div key={i}>
            <div>{el.name}</div>
            <input
              type="text"
              // defaultValue={el.rate}
              value={el.rate}
              onChange={(e) => {
                dispatch(changeRate(el.id, e.target.value));
              }}
            />
            <input
              type="text"
              // defaultValue={el.qty}
              value={el.qty}
              onChange={(e) => {
                dispatch(changeQty(el.id, e.target.value));
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SheetOne;
