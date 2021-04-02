import React from 'react';
import { _footer, _container, _disclaimer, _made } from './Footer.styled';
import Heart from '../../../../libs/design/icons/heart/Heart';

const Footer = () => {
  return (
    <_footer>
      <_container>
        <_disclaimer>
          <span>This is intended as a tech demo.</span>{' '}
          <span>Use at your own risk.</span>
        </_disclaimer>
        <_made>
          <span>Made with</span>
          <Heart />
          <span>in Canada.</span>
        </_made>
      </_container>
    </_footer>
  );
};

export default Footer;
