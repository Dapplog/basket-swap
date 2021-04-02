import { css } from 'styled-components';

export const _percent = css`
  min-width: 100%;
  width: 100%;
  min-height: 48px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 22px;
`;

export const _option = css`
  min-width: 25%;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2px;
`;

export const _indicator = css`
  min-width: 100%;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
`;

export const _label = css`
  padding-top: 4px;
  line-height: 1;
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 700 : 400)};
  color: ${({ $active, theme }) =>
    $active ? theme.text.active : theme.text.faded};
  text-shadow: 1px 1px 0
    ${({ $active, theme }) => ($active ? theme.text.shadow : 'transparent')};
  cursor: pointer;
`;

export const _cutout = css`
  min-width: 100%;
  width: 100%;
  min-height: 12px;
  height: 12px;
  border-radius: 4px;
  background: ${({ theme }) => theme.background.lowest};
  box-shadow: inset 1px 1px 4px 0 rgba(0, 0, 0, 0.16);
  padding: 1px;
  overflow: hidden;
`;

export const _fill = css`
  min-width: 100%;
  width: 100%;
  min-height: 100%;
  height: 100%;
  border-radius: 2px;
  background: ${({ $active, theme }) =>
    $active ? theme.percent.fill : 'transparent'};
`;
