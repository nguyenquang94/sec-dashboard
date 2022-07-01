// @ts-expect-error
function debounce(func, wait, immediate) {
  let timeout: NodeJS.Timeout | null;
  // @ts-ignore
  return function executedFunction(...args) {
    // @ts-ignore
    const context = this;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;
    // @ts-ignore
    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

export default debounce;
