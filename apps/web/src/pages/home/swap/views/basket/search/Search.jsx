import React from 'react';
import { _search } from './Search.styled';
import { useTranslation } from 'react-i18next';

export const Search = () => {
  const { t } = useTranslation();

  return (
    <_search>
      <input placeholder={t('basket.search')} />
    </_search>
  );
};

export default Search;
