import { css } from 'styled-components';

export const _ribbon = css`
  position: relative;
  z-index: ${({ theme }) => theme.zindex.swap.ribbon};
  min-width: 100%;
  width: 100%;
  height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: ${({ $active }) => ($active ? 'none' : 'all')};
`;

export const _float = css`
  min-width: calc(100% + 22px);
  width: calc(100% + 22px);
  min-height: 0;
  height: 0;
  display: flex;
  flex-direction: column;
  justify-content: ${({ $left }) => ($left ? 'flex-start' : 'flex-end')};
  align-items: ${({ $left }) => ($left ? 'flex-start' : 'flex-end')};
`;

export const _wrapper = css`
  min-width: 100%;
  width: 100%;
  min-height: 72px;
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ $left }) => ($left ? 'flex-start' : 'flex-end')};
  overflow-x: hidden;
  overflow-y: visible;
`;

export const _position = css`
  min-width: 100%;
  width: 100%;
  min-height: 56px;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  ${({ $left }) =>
    $left &&
    css`
      transform: translateX(calc(-100% + 122px));
      border-radius: 8px 50px 50px 0;
      background: ${({ theme }) => theme.ribbon.background['primary']};
      box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.16);
      justify-content: flex-end;
    `}
  ${({ $right }) =>
    $right &&
    css`
      transform: translateX(calc(100% - 122px));
      border-radius: 50px 8px 0 50px;
      background: ${({ theme }) => theme.ribbon.background['primary']};
      box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.16);
      justify-content: flex-start;
    `}
`;

export const _triangle = css`
  ${({ $left }) =>
    $left &&
    css`
      height: 0;
      width: 0;
      border-top: 10px solid ${({ theme }) => theme.ribbon.triangle['primary']};
      border-left: 10px solid transparent;
      bottom: 8px;
    `}
  ${({ $right }) =>
    $right &&
    css`
      height: 0;
      width: 0;
      border-top: 10px solid ${({ theme }) => theme.ribbon.triangle['primary']};
      border-right: 10px solid transparent;
      bottom: 8px;
    `}
`;
