import styled from 'styled-components';
import { m } from 'framer-motion';

export const _trade = styled(m.div)`
  position: absolute;
  z-index: ${({ theme }) => theme.zindex.swap.container};
  min-width: 100%;
  width: 100%;
  height: ${({ $height }) => $height}px;
  transform: translateY(${({ $top }) => $top}px);
  border-radius: ${({ theme }) => theme.border_radius['roundest_inside']};
  overflow: ${({ $active }) => ($active ? 'hidden' : 'visible')};
`;

export const _wrapper = styled(m.div)`
  position: relative;
  z-index: ${({ theme }) => theme.zindex.swap.container};
  min-width: 100%;
  width: 100%;
  height: ${({ $height }) => $height || 0}px;
  display: flex;
  justify-content: space-between;
  padding-top: 36px;
  padding-bottom: 12px;
  border-radius: ${({ theme }) => theme.border_radius['roundest_inside']};
  background: ${({ theme }) => theme.background['lower']};
  box-shadow: 1px 1px 12px 2px rgba(0, 0, 0, 0.16),
    inset 0 0 16px 0 rgba(255, 255, 255, 0.12);
`;

export const _actions = styled(m.div)`
  min-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0 12px;
  bottom: 28px;
`;

export const _basket = styled(m.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px;
  > svg {
    fill: ${({ theme }) => theme.text['faded']};
    min-width: 36px;
    width: 36px;
    min-height: 36px;
    height: 36px;
  }
`;

export const _center = styled(m.div)`
  position: relative;
  z-index: ${({ theme }) => theme.zindex.swap.center};
  min-width: 100%;
  min-height: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const _chevron = styled(m.div)`
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: ${({ $right }) => ($right ? '0 0 0 12px' : '0 12px 0 0')};
  > svg {
    min-width: 16px;
    width: 16px;
    min-height: 16px;
    height: 16px;
    fill: ${({ theme }) => theme.text['faded']};
    transform: ${({ $right }) => ($right ? 'scaleX(-1)' : 'scaleX(1)')};
    opacity: 0.66;
  }
`;

export const _coin = styled(m.div)`
  min-width: 28px;
  width: 28px;
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${({ $right }) => ($right ? '0 0 0 8px' : '0 8px 0 0')};
  > div {
    min-width: 32px;
    width: 32px;
    min-height: 32px;
    height: 32px;
    border-radius: 50px;
    background: ${({ theme }) => theme.background['higher']};
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.08);
  }
  > span {
    font-size: 11px;
    font-weight: 700;
    color: ${({ theme }) => theme.text['faded']};
    margin-top: 2px;
  }
`;

export const _float = styled(m.div)`
  min-width: 100%;
  width: 100%;
  height: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const _form = styled(m.div)`
  position: relative;
  z-index: ${({ theme }) => theme.zindex.swap.form};
  min-width: 100%;
  width: 100%;
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 72px;
`;

export const _icon = styled(m.div)`
  min-width: 32px;
  width: 32px;
  min-height: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 8px;
  margin-left: 8px;
  cursor: pointer;
  &:hover {
    > svg {
      transform: scale(1.16);
      fill: ${({ theme }) => theme.text['shadow']};
    }
  }
  > svg {
    min-width: ${({ $small }) => ($small ? '20px' : '26px')};
    width: ${({ $small }) => ($small ? '20px' : '26px')};
    min-height: ${({ $small }) => ($small ? '20px' : '26px')};
    height: ${({ $small }) => ($small ? '20px' : '26px')};
    fill: ${({ theme }) => theme.text['faded']};
    stroke: ${({ theme }) => theme.text['faded']};
    transition: transform ease-out 100ms;
  }
`;

export const _title = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zindex.swap.center};
  min-width: 100%;
  width: 100%;
  height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const _content = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  transform: translateY(${({ $active }) => ($active ? '-8px' : '-20px')});
  > h3 {
    color: ${({ theme }) => theme.text['active']};
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-shadow: 1px 1px 4px ${({ theme }) => theme.text['shadow']};
    padding: 0 24px;
  }
  > svg {
    min-width: 16px;
    width: 16px;
    min-height: 16px;
    height: 16px;
    fill: rgba(255, 255, 255, 0.55);
    filter: drop-shadow(1px 1px 4px ${({ theme }) => theme.text['shadow']});
    transform: rotate(-90deg);
  }
`;
