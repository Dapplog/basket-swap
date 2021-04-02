import React from 'react';
import { _item } from './Item.styled';
import { nanoid } from 'nanoid';

export const Item = ({ children }) => {
  return <_item key={nanoid()}>{children}</_item>;
};

export default Item;
