import { useState } from 'react';
import { nanoid } from 'nanoid';
import { BehaviorSubject } from 'rxjs';

const configureRemix = () => {
  const refs = new BehaviorSubject(new Map());
  const bubbles = new BehaviorSubject(new Map());
  const observers = new BehaviorSubject(new Map());

  return {
    addRef(key, info) {
      refs.next(new Map(refs.getValue().set(key, info)));
    },
    addBubble(key, initial) {
      bubbles.next(new Map(bubbles.getValue().set(key, initial)));
    },
    addObserver({ key, get }) {
      const id = nanoid();
      observers.next(
        new Map(
          observers
            .getValue()
            .set(key, new Map(observers.getValue().set(id, get))),
        ),
      );
      return { id };
    },
    removeRef({ key }) {
      refs.next(new Map(refs.getValue().set(key, undefined)));
    },
    removeBubble({ key }) {
      bubbles.next(new Map(bubbles.getValue().set(key, undefined)));
    },
    removeObserver({ key, id }) {
      observers.next(
        new Map(
          observers
            .getValue()
            .set(key, new Map(observers.getValue().set(id, undefined))),
        ),
      );
    },
    refs,
    bubbles,
    observers,
  };
};

export default configureRemix;
