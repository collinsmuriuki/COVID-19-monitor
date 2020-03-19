import { createSelector } from 'reselect';

const selectCountriesCases = state => state.countriesCases;

export const selectCountries = createSelector(
  [selectCountriesCases],
  data => data.countries
);

export const selectIsFetching = createSelector(
  [selectCountriesCases],
  data => data.isFetching
);

export const selectErrorMessage = createSelector(
  [selectCountriesCases],
  data => data.selectErrorMessage
);