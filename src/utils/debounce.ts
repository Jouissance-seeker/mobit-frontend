const debounce = (fn: Function, delay: number) => {
  let timeoutID: ReturnType<typeof setTimeout> | undefined;
  return (...args: any[]) => {
    if (timeoutID) clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export default debounce;
