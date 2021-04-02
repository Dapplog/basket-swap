import styled from 'styled-components';
import { m } from 'framer-motion';
import { media } from 'design';

export const _swap = styled(m.div)`
  position: relative;
  z-index: ${({ theme }) => theme.zindex.swap['base']};
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
  box-shadow: 2px 2px 16px 0 rgba(0, 0, 0, 0.16);
  padding: 108px 24px 24px 24px;
  transition: background 250ms ease-out;
  ${media.tablet`
    padding: 88px 24px 24px 24px;
    align-items: center;
  `};
`;

export const _card = styled(m.div)`
  width: 100%;
  max-width: 420px;
  min-height: 480px;
  height: calc(100% - 104px);
  max-height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.ribbon.background['primary']};
  border-radius: ${({ theme }) => theme.border_radius['roundest']};
  background: ${({ theme }) => theme.ribbon.background['primary']};
`;

export const _view = styled(m.div)`
  min-width: 100%;
  width: 100%;
  min-height: 100%;
  height: 100%;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.border_radius['roundest']};
  background: ${({ theme }) => theme.background['lowest']};
  box-shadow: 8px 8px 32px 4px rgba(0, 0, 0, 0.16),
    0 0 0 2px rgba(231, 201, 157, 1);
`;

export const _layers = styled(m.div)`
  position: relative;
  z-index: ${({ theme }) => theme.zindex.swap.container};
  min-width: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: ${({ theme }) => theme.border_radius['roundest_inside']};
`;

export const _layer = styled(m.div)`
  position: relative;
  z-index: ${({ theme }) => theme.zindex.swap.container};
  min-width: 100%;
  width: 100%;
  height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const _wrapper = styled(m.div)`
  position: relative;
  z-index: ${({ theme }) => theme.zindex.swap.container};
  width: 100%;
  max-width: 420px;
  min-height: 540px;

  height: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transform: ${({ $end }) => ($end ? 'translateY(100%)' : 'translateY(0%)')};
`;

export const _container = styled(m.div)`
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

export const _center = styled.div`
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

export const _top = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zindex.swap.top};
  min-width: 100%;
  width: 100%;
  min-height: 54px;
  height: 54px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const _bottom = styled(m.div)`
  position: relative;
  z-index: ${({ theme }) => theme.zindex.swap.bottom};
  min-width: 100%;
  width: 100%;
  height: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const _form = styled.div`
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

export const _basket = styled.div`
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

export const _coin = styled.div`
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

export const _chevron = styled.div`
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

export const _float = styled.div`
  min-width: 100%;
  width: 100%;
  height: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const _actions = styled.div`
  min-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0 12px;
  bottom: 28px;
`;

export const _icon = styled.div`
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
