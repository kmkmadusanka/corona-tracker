import React, { useEffect, useState } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';
// styles import
import style from './CountryPicker.module.css';
// api import
import { fetchCountries } from '../../api';

const CountryPicker = ({ countryHandler }) => {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    (async () => {
      setCountryList(await fetchCountries());
    })();
  }, []);

  // create country list
  const countries = countryList.map((country, index) => (
    <option key={index} value={country}>
      {country}
    </option>
  ));

  return countryList.length ? (
    <FormControl className={style.formControl}>
      <NativeSelect onChange={countryHandler}>
        <option value="">Global</option>
        {countries}
      </NativeSelect>
    </FormControl>
  ) : null;
};

export default CountryPicker;
