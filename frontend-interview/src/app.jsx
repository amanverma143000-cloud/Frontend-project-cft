import React, { useState } from "react";
import CardGrid from "./components/CardGrid";
import Pagination from "./components/Pagination";
import data from "./data/data";
import "./App.css";

function App() {
  const [items, setItems] = useState(data || []);
  const [page, setPage] = useState(1);

  const perPage = 6;

  const handleDelete = (id) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  const start = (page - 1) * perPage;
  const currentData = (items || []).slice(start, start + perPage);

  return (
    <div className="app">
      <CardGrid data={currentData} onDelete={handleDelete} />

      <Pagination
        total={items.length}
        perPage={perPage}
        currentPage={page}
        setPage={setPage}
      />
    </div>
  );
}

export default App;