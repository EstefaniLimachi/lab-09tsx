import React, { useEffect } from "react";

const fetchData = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

const FetchData: React.FC = () => {  useEffect(() => {
    const fetchProducts = async () => {
      for (let i = 1; i <= 100; i++) {
        const url = `https://dummyjson.com/products/${i}`;
        await fetchData(url);
      }
    };
    fetchProducts();
  }, []);

  return null; // Si no necesitas renderizar nada, puedes retornar null
};

export default FetchData;
