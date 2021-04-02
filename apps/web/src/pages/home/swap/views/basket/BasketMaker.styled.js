import styled from 'styled-components';
import { m } from 'framer-motion';

export const _basket_maker = styled(m.div)`
  position: absolute;
  z-index: ${({ theme }) => theme.zindex.swap.container};
  min-width: 100%;
  width: 100%;
  border-radius: ${({ theme }) => theme.border_radius['roundest_inside']};
  overflow: ${({ $active }) => ($active ? 'hidden' : 'visible')};
  pointer-events: none;
`;

export const _wrapper = styled(m.div)`
  pointer-events: all;
  padding-top: 16px;
  position: relative;
  z-index: ${({ theme }) => theme.zindex.swap.basket};
  min-width: 100%;
  width: 100%;
  min-height: ${({ $height }) => $height || 0}px;
  height: ${({ $height }) => $height || 0}px;
  max-height: ${({ $height }) => $height || 0}px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.ribbon.background['primary']};
  border-radius: ${({ theme }) => theme.border_radius['roundest_inside']};
`;

export const _header = styled(m.div)`
  min-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 42px 24px 16px 24px;
`;

export const _content = styled(m.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const _title = styled.div`
  min-width: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > h3 {
    color: ${({ theme }) => theme.text['shadow']};
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.5px;
    padding: 0 24px;
    line-height: 1;
  }
`;

export const _search = styled.div`
  min-width: 100%;
  width: 100%;
  padding: 0 48px 8px 48px;
`;

export const _list = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 40px;
`;

export const _items = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  border-radius: ${({ theme }) => theme.border_radius['round']};
  padding: 8px;
`;

export const _card = styled.div`
  width: 100%;
  min-height: 48px;
  height: 48px;
  margin-bottom: 12px;
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.12);
  background: ${({ theme }) => theme.background['higher']};
  border-radius: ${({ theme }) => theme.border_radius['angle']}
    ${({ theme }) => theme.border_radius['rounder_outside']}
    ${({ theme }) => theme.border_radius['angle']}
    ${({ theme }) => theme.border_radius['rounder_outside']};
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const _actions = styled.div`
  min-width: 100%;
  width: 100%;
  height: 88px;
  min-height: 88px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
`;

export const _tokens = styled.div`
  width: 100%;
  margin-right: 6px;
`;

export const _add = styled.div`
  width: 100%;
  margin-left: 6px;
  > button {
    width: 100%;
    border: none;
    height: 48px;
    background: ${({ theme }) => theme.secondary['background']};
    border-radius: ${({ theme }) => theme.border_radius['round']};
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.secondary['solid']};
    box-shadow: -2px -2px 4px 0 rgba(255, 255, 255, 0.2),
      2px 2px 4px 0 rgba(0, 0, 0, 0.16);
    cursor: pointer;
  }
`;
