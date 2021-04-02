import React from 'react';
import {
  _header,
  _container,
  _item,
  _left,
  _right,
  _button,
  _pill,
} from './Header.styled';
import Palette from '../../../../libs/design/icons/palette/Palette';
import More from '../../../../libs/design/icons/more/More';

const Header = () => {
  return (
    <_header>
      <_container>
        <_left>
          <_item $active>
            BasketSwap
            <_pill>
              <span>Beta</span>
            </_pill>
          </_item>
        </_left>
        <_right>
          <_button>
            <Palette />
          </_button>
          <_button>
            <More />
          </_button>
        </_right>
      </_container>
    </_header>
  );
};

export default Header;
