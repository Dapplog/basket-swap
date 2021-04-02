import styled, { css } from 'styled-components';
import { media } from 'design';

export const _header = styled.div`
  z-index: 50;
  display: flex;
  width: 100%;
  min-width: 100%;
  height: 0;
  flex-direction: column;
  align-items: center;
`;

export const _container = styled.div`
  min-width: 100%;
  width: 100%;
  height: 64px;
  min-height: 64px;
  border-bottom: 1px solid ${({ theme }) => theme.border['high']};
  background: ${({ theme }) => theme.ribbon.background['primary']};
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1px 24px 0 24px;
`;

export const _left = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const _right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const _item = styled.div`
  margin-right: ${({ $right }) => ($right ? '0' : '8px')};
  color: ${({ theme }) => theme.text['faded']};
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  padding: 12px 18px;
  border-radius: 12px;
  transition: transform ease-out 100ms, color ease-out 100ms;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({ $active }) =>
    $active
      ? css`
          background: ${({ theme }) => theme.background['base']};
          color: ${({ theme }) => theme.text['active']};
          text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.08);
          box-shadow: inset 1px 1px 4px 0 rgba(0, 0, 0, 0.16);
        `
      : css`
          &:hover {
            color: ${({ theme }) => theme.text['shadow']};
            transform: translateY(2px);
          }
        `}
`;

export const _button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 16px;
  margin: ${({ $left }) => ($left ? '0 12px 0 0' : '0 0 0 12px')};
  cursor: pointer;
  &:hover {
    > svg {
      transform: scale(1.2);
      fill: ${({ theme }) => theme.text['shadow']};
    }
  }
  > svg {
    fill: ${({ theme }) => theme.text['faded']};
    stroke: ${({ $settings, theme }) =>
      $settings ? theme.text['faded'] : 'transparent'};
    min-width: 28px;
    width: 28px;
    min-height: 28px;
    height: 28px;
    transition: transform ease-out 100ms;
  }
`;

export const _pill = styled.div`
  min-width: 16px;
  width: 16px;
  height: 0;
  margin-left: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  > span {
    border-radius: 6px;
    background: ${({ theme }) => theme.secondary.background};
    color: ${({ theme }) => theme.secondary.text};
    border: 0 solid ${({ theme }) => theme.secondary.border};
    padding: 2px 5px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-shadow: none;
    position: relative;
    left: 4px;
    bottom: 10px;
  }
`;
