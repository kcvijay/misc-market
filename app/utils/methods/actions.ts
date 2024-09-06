export const getAllProducts = async (
  query: string,
  limit: string,
  skip: string
) => {
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${query}&limit=${limit}&skip=${skip}`
  );
  return response.json();
};

export const getProductById = async (id: string) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  return response.json();
};
