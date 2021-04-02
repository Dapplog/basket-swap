import styled from 'styled-components';
import { media } from 'design';

export const _footer = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zindex.footer['base']};
  width: 100%;
  min-height: 88px;
  height: 88px;
  background: ${({ theme }) => theme.background['lowest']};
`;

export const _container = styled.div`
  min-width: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

export const _disclaimer = styled.div`
  color: ${({ theme }) => theme.text['placeholder']};
  text-align: center;
  > span {
    display: block;
    font-size: 14px;
    font-weight: 700;
    text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.12);
    ${media.tablet`
      display: inline;
  `};
  }
  ${media.tablet`
    padding: 0 24px;
  `};
`;

export const _made = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > span {
    color: ${({ theme }) => theme.text['solid']};
    font-size: 16px;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
  }
  > svg {
    margin: 0 8px;
    min-width: 22px;
    width: 22px;
    min-height: 22px;
    height: 22px;
    fill: #ff6b81;
    stroke: #c8090d;
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2));
  }
`;
