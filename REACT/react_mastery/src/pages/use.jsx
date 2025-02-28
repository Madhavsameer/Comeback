import React, { useEffect, useState } from "react";

function Use() {
  const [dt, setDt] = useState([]);
  const [loading, setLoading] = useState("Loading...");

  useEffect(() => {
    async function fetchData() {
      try {
        let url = "https://jsonplaceholder.typicode.com/posts";
        let rawdata = await fetch(url);
        let data = await rawdata.json();
        setDt(data);
        console.log(data);
      } catch (error) {
        setLoading("Failed to load data");
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []); 

  useEffect(() => {
    if (dt.length > 0) {
      setLoading("Data loaded successfully! 🎉");
    }
  }, [dt]); 

  return (
    <div>
      <h1>{loading}</h1>
      {dt.map((d, index) => (
        <div key={index}>
          <h2>{d.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default Use;
