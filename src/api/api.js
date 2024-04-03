import axios from "axios";

const currentHeaders = {
  "TOKEN": "123",
  "Content-Type": "application/json"
};

const currentUrl = {
  "allCards": "http://devapp.bonusmoney.pro/mobileapp/getAllCompanies",
  "allCardsIdeal": "http://devapp.bonusmoney.pro/mobileapp/getAllCompaniesIdeal",
  "allCardsLong":"http://devapp.bonusmoney.pro/mobileapp/getAllCompaniesLong",
  "allCardsError": "http://devapp.bonusmoney.pro/mobileapp/getAllCompaniesError",
};

const getAllCards = async (offset = 50, limit = 5) => {
  try {
    const { data } = await axios.post(currentUrl.allCards, {
      offset,
      limit
    }, {
      headers: currentHeaders
    });

    return data.companies;
  } catch (e) {
    console.error('что то не так', e);
  }
};


const getAllCardsLong = async (offset = 0, limit = 10) => {

  const { data } = await axios.post(currentUrl.allCardsLong, {
    offset,
    limit
  }, {
    headers: currentHeaders
  });
  return data.companies;
};



const getAllCardsIdeal = async (offset = 0, limit = 5) => {

    const { data } = await axios.post(currentUrl.allCardsIdeal, {
      offset,
      limit
    }, {
      headers: currentHeaders
    });
    return data.companies;
};


const getAllCardsError = async (offset = 0, limit = 5) => {

  const { data } = await axios.post(currentUrl.allCardsError, {
    offset,
    limit
  }, {
    headers: currentHeaders
  });
  return data.companies;
};

export { getAllCards, getAllCardsIdeal, getAllCardsLong, getAllCardsError };