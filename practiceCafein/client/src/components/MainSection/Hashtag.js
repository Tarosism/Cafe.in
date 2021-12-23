import axios from "axios";
import React, { useState } from "react";

export default function Hashtag({ text, mainSearchHandle }) {
  const [selectedHash, setSelectedHash] = useState(null);

  const hashSearch = () => {
    axios
      .get(`http://localhost:8080/posts/cafe-list/${text.id}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (selectedHash === res.data.data.name) return;
        mainSearchHandle(res.data.data);
        setSelectedHash(res.data.data.name);
      });
  };
  return (
    <>
      {!text ? (
        ""
      ) : (
        <div>
          {text.name.split(/(#[^\s#]+)/g).map((fill) => {
            if (fill.match(/(#[^\s#]+)/g))
              return <a onClick={hashSearch}>{fill} </a>;
          })}
        </div>
      )}
    </>
  );
}
