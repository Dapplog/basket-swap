import {
  _float,
  _position,
  _wrapper,
  _ribbon,
  _triangle,
} from './ribbons/_basic';
import {
  _percent,
  _option,
  _indicator,
  _label,
  _cutout,
  _fill,
} from './percent/_percent';
import { _input } from './forms/input/_input';
import { _swap } from './swap/_swap';

const styles = {
  ribbons: {
    basic: {
      float: _float,
      position: _position,
      wrapper: _wrapper,
      ribbon: _ribbon,
      triangle: _triangle,
    },
  },
  percent: {
    basic: {
      container: _percent,
      option: _option,
      indicator: _indicator,
      label: _label,
      cutout: _cutout,
      fill: _fill,
    },
  },
  forms: {
    input: _input,
  },
  swap: {
    swap: _swap,
  },
};

export default styles;
