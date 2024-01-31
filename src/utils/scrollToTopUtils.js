const useScrollToTop = (trigger) => {
  if (trigger) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

export default useScrollToTop;
