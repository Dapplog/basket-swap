import React, { useMemo } from 'react';
import { _review, _title, _content, _container } from './Review.styled';
import { useSharedRef } from 'core/hooks/remix/useSharedRef';
import { SWAP_LAYERS_REF } from 'core/remix/state/refs';
import { AnimateViewReview } from '../animations';
import { useKeys } from 'core/hooks/useKeys';
import { useTranslation } from 'react-i18next';
import { useRemix } from 'core/hooks/remix/useRemix';
import { REVIEW_ACTIVE } from 'core/remix/state/bubbles';

export const Review = (props) => {
  const { t } = useTranslation();
  const key = useKeys(8);
  const [reviewActive, setReviewActive] = useRemix(REVIEW_ACTIVE, false);

  const watch = [props];
  return useMemo(
    () => (
      <AnimateViewReview {...key[0]}>
        <_review
          {...key[1]}
          {...props}
          onClick={() => {
            if (!reviewActive) setReviewActive(true);
          }}
        >
          <_title {...key[2]}>
            <_content {...key[3]}>
              <h3 {...key[5]}>{t('review.title')}</h3>
            </_content>
          </_title>
          <_container {...key[7]} />
        </_review>
      </AnimateViewReview>
    ),
    watch,
  );
};

export default Review;
