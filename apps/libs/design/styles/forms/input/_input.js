import { css } from 'styled-components';

export const _input = css`
  min-width: 100%;
  width: 100%;
  height: 42px;
  border-radius: 4px;
  background: ${({ theme }) => theme.background.lowest};
  box-shadow: inset 1px 1px 4px 0 rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: row;
  align-items: center;
  > input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 4px 16px;
    line-height: 1;
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.text.input};
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.08);
    letter-spacing: 0.5px;
    &::placeholder {
      color: ${({ theme }) => theme.text.placeholder};
      text-shadow: none;
    }
  }
`;
