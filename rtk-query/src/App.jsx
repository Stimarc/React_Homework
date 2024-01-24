import React, { useState, useEffect } from "react";
import { Product } from "./components/Product";
import { useAddGoodsMutation, useGetGoodsQuery, useDelGoodMutation, useUpdateGoodMutation } from "./redux";


const App = () => {
  const [count, setCount] = useState('');
  const [text, setText] = useState('');
  const [storedProducts, setStoredProducts] = useState(() => {
    const storedData = localStorage.getItem('products');
    return storedData ? JSON.parse(storedData) : [];
  });

  const { data = [], isLoading } = useGetGoodsQuery(count);
  const [addGood] = useAddGoodsMutation();
  const [delGood] = useDelGoodMutation();
  const [updateGood] = useUpdateGoodMutation();

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(storedProducts));
  }, [storedProducts]);

  const addHandler = async () => {
    if (text) {
      const newProduct = {  name: text };
      await addGood({ name: text }).unwrap();
      setText('');
      setStoredProducts([...storedProducts, newProduct]);
    }
  };


  return (
    <div className="container">
      <h1>RTK Query</h1>
      <div className="add-new">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
        />
        <button className="button-add" onClick={addHandler}>add</button>
      </div>
      <select
        value={count}
        onChange={(e) => setCount(e.target.value)}
        className="select-count"
      >
        <option value="">all</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      {isLoading && <h2>loading ...</h2>}

      {!isLoading && (
        <div className="products">
          {data.map((product) => (
            <Product
              key={product.id}
              product={product}
              onDelete={() => delGood(product.id).unwrap()}
              onUpdate={(newName) => updateGood({ id: product.id, name: newName }).unwrap()}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;