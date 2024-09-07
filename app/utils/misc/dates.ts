export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-FI', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
