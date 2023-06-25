const debounce = (fn, wait) => {
    let timeout;
    return () => {
        console.log("call");
        clearTimeout(timeout);
        timeout = setTimeout(fn, wait);
    };
};

export default debounce;
