import React, { useEffect, useState } from "react";
function Home() {
  const [data, setData] = useState([]);
  const url = "/src/pages/data.json";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((d) => setData(d));
  }, []);
  return <div>{console.log(data)}</div>;
}

export default Home;
