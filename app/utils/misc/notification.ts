export const showNotification = (type: string, message: string) => {
  const classSuccess = 'bg-primary-light text-primary border-b border-primary';
  const classError = 'bg-red-500 text-white border-b border-b-white';
  const toast = document.createElement('div');
  toast.className = `notification fixed animate-slideUpDown top-0 left-0 right-0 h-16 p-5 text-center z-[9999] ${
    type === 'error'
      ? classError
      : type === 'success'
      ? classSuccess
      : classSuccess
  }`;
  toast.innerText = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
};
