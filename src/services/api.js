const fetchData = async () => {
  try {
    const res = await fetch(process.env.REACT_APP_BASE_ENDPOINT);
    const data = await res.json();
    return { error: null, data };
  } catch (error) {
    return { error, data: [] };
  }
};

export { fetchData };
