const getAdressData = async (code) => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${code}/json`);
    const data = await response.json();
    return data;
  } catch (error) {
    return (`Error cause is: ${error}`);
  }
};

export default getAdressData;
