import axios from "axios";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function Scroll() {
  const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8,
  };
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const fetchMoreData = () => {
    axios.get(`https://reqres.in/api/users?page=${page}`).then((res) => {
      setItems([...items, ...res.data.data]);
    });
  };
  useEffect(() => {
    fetchMoreData();
  }, [page]);

  return (
    <div>
      <h1>demo: react-infinite-scroll-component</h1>
      <hr />
      <div id="scrollableDiv" style={{ height: 300, overflow: "auto" }}>
        <InfiniteScroll
          dataLength={items.length}
          next={() => setPage(page+1)}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          
          scrollableTarget="scrollableDiv"
       
        >
          {items.map((i, index) => (
            <div style={style} key={index}>
              div - #{index}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default Scroll;
