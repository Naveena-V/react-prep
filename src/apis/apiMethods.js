const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const resData = await response.json();
    console.log("resData", resData);
    return resData ? resData : [];
  } catch (err) {
    console.log("err fetching data", err);
  }
};

export default fetchData;
