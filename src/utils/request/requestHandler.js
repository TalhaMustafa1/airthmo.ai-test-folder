const requestHandler = async ({ url, requestOptions, data }) => {
  try {
    const options = { ...requestOptions, body: JSON.stringify(data) };
    const results = await fetch(url, options);
    const response = await results.json();
    if (results) return response;
  } catch (error) {
    console.log(error);
  }
};

export default requestHandler;
