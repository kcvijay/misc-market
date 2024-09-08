export const showNotification = (type: string, message: string) => {
  const toast = document.createElement('div');
  toast.className = `fixed top-0 left-0 right-0 h-16 p-5 text-center ${
    type === 'error'
      ? 'bg-red-500 text-white border-b border-b-white'
      : type === 'success'
      ? 'bg-primary-light text-primary border-b border-primary'
      : 'bg-primary-light text-primary border-b border-primary'
  }`;
  toast.style.zIndex = '9999';
  toast.innerText = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);
};
