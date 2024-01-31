import { useEffect } from "react";

const useDynamicTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default useDynamicTitle;
