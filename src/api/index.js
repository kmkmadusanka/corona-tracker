import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let formattedUrl = url;
  if (country) {
    formattedUrl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { deaths, recovered, confirmed, lastUpdate },
    } = await axios.get(formattedUrl);

    return { deaths, recovered, confirmed, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map(({ name }) => name);
  } catch (error) {
    console.log(error);
  }
};
