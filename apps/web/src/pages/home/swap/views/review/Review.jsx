import React, { useMemo } from 'react';
import {
  _review,
  _title,
  _content,
  _container,
  _button,
} from './Review.styled';
import { useSharedRef } from 'core/hooks/remix/useSharedRef';
import { BASKET_ADD_COIN, SWAP_LAYERS_REF } from 'core/remix/state/refs';
import { AnimateView } from './animations/AnimateView';
import { useKeys } from 'core/hooks/useKeys';
import { useTranslation } from 'react-i18next';
import { useRemix } from 'core/hooks/remix/useRemix';
import {
  REVIEW_ACTIVE,
  VIEW_POSITION,
  VIEW_REVIEW,
} from 'core/remix/state/bubbles';
import { useBubble } from 'core/hooks/remix/useBubble';

export const Review = () => {
  const { t } = useTranslation();
  const key = useKeys(8);
  const [view, setView] = useBubble(VIEW_POSITION);
  const review_active = view === 'VIEW_REVIEW';

  const watch = [t, view];
  return useMemo(
    () => (
      <AnimateView {...key[0]}>
        <_review
          {...key[1]}
          onClick={() => {
            if (!review_active) setView(VIEW_REVIEW);
          }}
        >
          <_title {...key[2]}>
            <_content {...key[3]}>
              <h3 {...key[5]}>{t('review.title')}</h3>
              <_button {...key[3]} onClick={() => console.log("Swap!")}>
                <span {...key[5]}>{t('Swap!')}</span>
              </_button>
            </_content>
          </_title>
          <_container {...key[7]}></_container>
        </_review>
        
      </AnimateView>
    ),
    watch,
  );
};

export default Review;
