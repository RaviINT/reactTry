import axios from "axios";
import React, { useState,useEffect } from "react";
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
  const [page,setPage]=useState(0)
  const fetchMoreData = () => {
    console.log("calling",page)
    axios
      .get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=20`)
      .then((res) => {
        setItems([...items,...res.data.data]);
      });
  };
  useEffect(()=>{
    fetchMoreData()
  },[page])
  console.log(items)
  return (
    <div>
      <h1>demo: react-infinite-scroll-component</h1>
      <hr />
      <InfiniteScroll
        dataLength={items.length}
        next={()=>setPage(page+1)}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {items.map((i, index) => (
          <div style={style} key={index}>
            div - #{index}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default Scroll;
