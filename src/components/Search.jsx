import React, { useState, useEffect } from "react";
import Data from "../MOCK_DATA.json";
function Search() {
  const [text, setText] = useState("");
  const [data, setData] = useState(Data ?? []);
  useEffect(() => {
    let temp = Data.filter((e) => {
      if (
        e.first_name.toString().toLowerCase().includes(text.toLowerCase()) ||
        e.last_name.toString().toLowerCase().includes(text.toLowerCase()) ||
        e.email.toString().toLowerCase().includes(text.toLowerCase()) ||
        e.gender.toString().toLowerCase().includes(text.toLowerCase())
      ) {
        return e;
      }
    });
    setData(temp);
  }, [text]);
  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        border: "1px solid red",
        marginTop: "50px",
      }}
    >
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.first_name}</td>
              <td>{e.last_name}</td>
              <td>{e.email}</td>
              <td>{e.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Search;
