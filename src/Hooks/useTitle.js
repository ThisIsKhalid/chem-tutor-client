const { useEffect } = require("react");

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Chem Tutor`;
  }, [title]);
};

export default useTitle;