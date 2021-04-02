import React, { useEffect, useMemo } from 'react';
import { _category, _list, _title } from './Category.styled';
import { useTokenList } from 'core/hooks/api/useTokenList';
import { TokenListProvider } from '@solana/spl-token-registry';
import { map } from 'lodash';
import { useKeys } from 'core/hooks/useKeys';
import Item from './item/Item';
import ItemArrow from 'design/icons/item_arrow/ItemArrow';
import { useBubble } from 'core/hooks/remix/useBubble';
import { SWAP_BASKET_ACTIVE } from 'core/remix/state/bubbles';

export const Category = ({ type }) => {
  const [active] = useBubble(SWAP_BASKET_ACTIVE);
  const { tokenList } = useTokenList(type);
  const num_keys = tokenList?.tokens?.length + 3 || 50;
  const key = useKeys(num_keys);

  useEffect(() => {
    (async () => {
      // const token_list = await new TokenListProvider().resolve();
      // const list = token_list.getList();
    })();
  }, []);

  let count = -1;
  const render_list = useMemo(
    () =>
      key.length &&
      map(tokenList?.tokens, (token) => {
        count++;
        return (
          <Item {...key[count]} count={count}>
            {ItemArrow()}
            <img src={token.logoURI} alt={`${token.symbol} Logo`} />
            <span>{token.symbol}</span>
          </Item>
        );
      }),
    [key.length, tokenList?.tokens],
  );

  const watch = [active];
  return useMemo(
    () => (
      <_category {...key[num_keys - 1]}>
        <_title {...key[num_keys - 2]}>
          {active === 'left'
            ? 'From Coin'
            : active === 'right'
            ? 'To Coin'
            : ''}
        </_title>
        <_list {...key[num_keys - 3]}>{render_list}</_list>
      </_category>
    ),
    watch,
  );
};

export default Category;
