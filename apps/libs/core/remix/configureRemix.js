import { nanoid } from 'nanoid';
import { BehaviorSubject } from 'rxjs';

const configureRemix = () => {
  const refs = new BehaviorSubject(new Map());
  const bubbles = new BehaviorSubject(new Map());

  return {
    addRef(key, info) {
      const current_list = refs.getValue();
      const current_item = current_list.get(key);

      if (!current_item) {
        const next_item = new BehaviorSubject(info);
        refs.next(current_list.set(key, next_item));
      } else {
        current_item.next(info);
      }
    },
    addBubble(key, state) {
      console.log(key, state);
      const current_list = bubbles.getValue();
      const current_item = current_list.get(key);

      if (!current_item) {
        const next_item = new BehaviorSubject(state);
        bubbles.next(current_list.set(key, next_item));
        return bubbles;
      } else {
        current_item.next(state);
      }
    },
    removeRef({ key }) {
      const current_list = refs.getValue();
      const current_item = current_list.get(key);

      if (current_item) {
        current_item.next(undefined);
      }
    },
    removeBubble({ key }) {
      const current_list = bubbles.getValue();
      const current_item = current_list.get(key);

      if (current_item) {
        current_item.next(undefined);
      }
    },
    refs,
    bubbles,
  };
};

export default configureRemix;
