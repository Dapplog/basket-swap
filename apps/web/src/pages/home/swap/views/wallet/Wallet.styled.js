import styled from 'styled-components';
import { m } from 'framer-motion';

export const _wallet = styled.div`
  min-width: 100%;
  width: 100%;
  min-height: ${({ $height }) => $height}px;
  height: ${({ $height }) => $height}px;
  position: relative;
  border-radius: ${({ theme }) => theme.border_radius['roundest']};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const _action = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zindex.swap['button_connect']};
  min-width: 100%;
  width: 100%;
  height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const _content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 8px;
`;

export const _button = styled(m.div)`
  border-radius: ${({ theme }) => theme.border_radius['button']};
  box-shadow: inset 1px 1px 16px 0 ${({ theme }) => theme.primary['light']},
    2px 2px 4px -2px rgba(0, 0, 0, 0.16);
  border: 2px solid ${({ theme }) => theme.primary['shadow']};
  background: ${({ theme }) => theme.primary['background']};
  padding: 8px 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  > span {
    margin-left: 8px;
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.primary['text']};
    text-shadow: -1px -1px 0 rgba(255, 255, 255, 0.32),
      1px 1px 24px ${({ theme }) => theme.primary['text']};
    line-height: 1;
  }
  > svg {
    min-width: 16px;
    width: 16px;
    min-height: 16px;
    height: 16px;
    fill: ${({ theme }) => theme.primary['text']};
  }
`;

export const _container = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zindex.swap['choose_wallet']};
  min-width: 100%;
  width: 100%;
  height: ${({ $height }) => $height}px;
  background: transparent;
`;
