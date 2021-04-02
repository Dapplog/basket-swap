import styled from 'styled-components';
import { m } from 'framer-motion';

export const _discord = styled.div`
  z-index: ${({ theme }) => theme.zindex.fixed.discord};
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const _overlay = styled(m.div)`
  position: fixed;
  min-width: 100%;
  min-height: 100%;
  background: ${({ theme }) => theme.discord['shadow']};
  cursor: pointer;
`;

export const _chat = styled(m.div)`
  min-width: 320px;
  min-height: 480px;
  position: relative;
  right: 16px;
  bottom: 16px;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 2px 2px 32px 2px rgba(46, 53, 97, 0.4);
`;

export const _button = styled(m.div)`
  z-index: ${({ theme }) => theme.zindex.fixed['discord']};
  position: relative;
  bottom: 16px;
  right: 16px;
  min-width: 56px;
  width: 56px;
  min-height: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.discord['border']};
  background: ${({ theme }) => theme.discord['button']};
  box-shadow: 0 3px 8px -1px rgba(115, 136, 217, 0.16),
    0 6px 16px 2px rgba(115, 136, 217, 0.14),
    0px 1px 32px 2px rgba(115, 136, 217, 0.12);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  > svg {
    min-width: 32px;
    width: 32px;
    min-height: 32px;
    height: 32px;
    fill: black;
  }
`;
