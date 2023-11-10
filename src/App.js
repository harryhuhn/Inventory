import "./App.css";
import SearchBar from "./SearchBar";
import ItemsDisplay from "./ItemsDisplay";
import AddItem from "./AddItem";
import { useState, useEffect } from "react";
import Test from "./Class";


function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({items: []});

  useEffect(() => { 
    fetch("https:/inventory-deployment-a654368fdac9.herokuapp.com/items/")
      .then((response) => response.json())
      .then((data) => setData({ items: data }));
  }, []);

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  }

  const deleteItem = (item) => {
  const items = data["items"];
  const requestOptions = {
    method: "DELETE"
  }
  fetch(`https:/inventory-deployment-a654368fdac9.herokuapp.com/items/${item.id}/`, requestOptions)
    .then((response) => {
      if (response.ok) {
        const idx = items.indexOf(item);
        items.splice(idx, 1);
        setData({ items: items });
      }
  });
}

  const addItemToData = (item) => {
    let items = data["items"];

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    };
    /*fetch("http://localhost:3000/items", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        items.push(data);
        setData({ items: items });
      });
    setData({ items: items });*/
    fetch("https:/inventory-deployment-a654368fdac9.herokuapp.com/items/", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        items.push(data);
        setData({ items: items });
      });
    setData({ items: items });
  }

  const filterData = (data) => {
    const filteredData = [];
    if (!filters.partNumber && !filters.name && !filters.type && !filters.brand && (!filters.price || filters.price===0) && !filters.BT && !filters.PTR && !filters.CAC) {
      return data;
    }
    for (const item of data) {
      if (filters.partNumber !== "" && item.partNumber !== filters.partNumber) {
        continue;
      }
      if (filters.name !== "" && item.name !== filters.name) {
        continue;
      }
      if (filters.price > 0 && parseFloat(item.price) > parseFloat(filters.price)) {
        continue;
      }
      if (filters.type !== "" && item.type !== filters.type) {
        continue;
      }
      if (filters.brand !== "" && item.brand !== filters.brand) {
        continue;
      }
      if (filters.BT === "BT" && item.BT !== "BT") {
        console.log(item.partNumber);
        continue;
      }
      if (filters.PTR === "PTR" && item.PTR !== "PTR") {
        continue;
      }
      if (filters.CAC === "CAC" && item.CAC !== "CAC") {
        continue;
      }
      filteredData.push(item);
    }
    return filteredData;
  }

  return (
    <div className="container">
      <div className="row mt-3">
        <SearchBar updateSearchParams={updateFilters} />
      </div>
      <div className="row mt-3">
        <ItemsDisplay
          deleteItem={deleteItem} items={filterData(data["items"])} />
      </div>
      <div className="row mt-3">
        <AddItem addItem={addItemToData} />
      </div>
    </div>
  );
}

export default App;
