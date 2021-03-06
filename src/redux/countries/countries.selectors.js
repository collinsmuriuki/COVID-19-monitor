import { createSelector } from 'reselect';
import { filterCountriesfromContinents } from '../../utils/filer-countries.utils';

const selectCountriesCases = state => state.countriesCases;

export const selectCountries = createSelector(
  [selectCountriesCases],
  data => data.countries
);

export const selectCountry = createSelector(
  [selectCountriesCases],
  data => data.country
);

export const selectCountryCount = createSelector(
  [selectCountriesCases],
  data => filterCountriesfromContinents(data.countries).length
);

export const selectIsFetching = createSelector(
  [selectCountriesCases],
  data => data.isFetching
);

export const selectErrorMessage = createSelector(
  [selectCountriesCases],
  data => data.errorMessage
);
