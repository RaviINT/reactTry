import React, { useState } from "react";

function Popup() {
  const [status, setStatus] = useState();
  const Pop = ({ value }) => {
    return (
      <div
        style={{
          border: "2px solid red",
          width: "200px",

          marginTop: "10px",
        }}
      >
        Hey! I am a modal no :{value + 1}
      </div>
    );
  };
  let arr = [1, 2];
  return (
    <div>
      {arr.map((el, i) => (
        <div key={i} style={{ margin: "10px" }}>
          <button
            onClick={() => {
              setStatus(i);
            }}
          >
            Click Me
          </button>
          {status === i && (
            <div>
              <Pop value={i} />
              <button onClick={() => setStatus(-1)}>close</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Popup;
