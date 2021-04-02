import React from 'react';
import { _tokens, _icon, _name } from './Tokens.styled';
import TokenListsLogo from 'design/assets/token-lists.png';
import { useTranslation } from 'react-i18next';

export const Tokens = () => {
  const { t } = useTranslation();

  return (
    <_tokens>
      <_icon>
        <img src={TokenListsLogo} alt={t('basket.token.lists')} />
      </_icon>
      <_name>{t('basket.token.lists')}</_name>
    </_tokens>
  );
};

export default Tokens;
