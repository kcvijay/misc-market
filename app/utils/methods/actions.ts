export const getAllProducts = async (query: string) => {
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${query}&limit=12&skip=0`
  );
  return response.json();
};

export const getProductById = async (id: string) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  return response.json();
};
