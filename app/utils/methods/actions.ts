export const getAllProducts = async (
  query: string,
  limit: string,
  skip: string,
  sortBy: string,
  order: string
) => {
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${query}&limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${order}`
  );
  return response.json();
};

export const getProductById = async (id: string) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  return response.json();
};
