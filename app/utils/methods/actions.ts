export const getAllProducts = async (query: string) => {
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${query}&limit=10&skip=0`
  );
  return response.json();
};
