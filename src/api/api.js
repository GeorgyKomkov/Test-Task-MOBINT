import axios from "axios";

const currentHeaders = {
  "TOKEN": "123",
  "Content-Type": "application/json"
};

const currentUrl = {
  allCards: "http://devapp.bonusmoney.pro/mobileapp/getAllCompanies",
  allCardsIdeal: "http://devapp.bonusmoney.pro/mobileapp/getAllCompaniesIdeal",
  allCardsLong:"http://devapp.bonusmoney.pro/mobileapp/getAllCompaniesLong",
  allCardsError: "http://devapp.bonusmoney.pro/mobileapp/getAllCompaniesError",
};

const getAllCards = async (offset = 0, limit = 10) => {

    const { data } = await axios.post(currentUrl.allCardsIdeal, {
      offset,
      limit
    }, {
      headers: currentHeaders
    });
    console.log('123123213')
    return data.companies;
  
};



export  default getAllCards;