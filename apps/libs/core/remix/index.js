import configureRemix from './configureRemix';
import refsList from './state/refs';
import bubblesList from './state/bubbles';

const remix = configureRemix();

export const bubbles = bubblesList;
export const refs = refsList;

export default remix;
