import styled from 'styled-components';
import { m } from 'framer-motion';

export const _qr = styled(m.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 32px;
`;

export const _container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background['low']};
  border-radius: ${({ theme }) => theme.border_radius['round']};
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.08);
`;

export const _code = styled.div`
  min-width: 180px;
  width: 180px;
  min-height: 180px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.border_radius['round']};
  background: ${({ theme }) => theme.background['high']};
  box-shadow: inset 0 0 23px 0 rgba(255, 255, 255, 0.12),
    2px 2px 2px 0 rgba(0, 0, 0, 0.08);
  cursor: pointer;
  &:hover {
    > svg {
      opacity: 1;
    }
  }
  > svg {
    transition: opacity 150ms ease-out;
    opacity: 0.75;
    min-width: calc(100% - 24px);
    width: calc(100% - 24px);
    min-height: calc(100% - 24px);
    height: calc(100% - 24px);
  }
`;

export const _name = styled.div`
  padding: 8px 0;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text['active']};
  text-shadow: 1px 1px 0 ${({ theme }) => theme.text['shadow']};
  border-radius: 0 0 ${({ theme }) => theme.border_radius['round']}
    ${({ theme }) => theme.border_radius['round']};
`;

export const _title = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const _float = styled.div`
  width: 100%;
  height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const _logo = styled.div`
  min-width: 36px;
  width: 36px;
  min-height: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  > svg {
    min-width: 32px;
    width: 32px;
    min-height: 32px;
    height: 32px;
    bottom: 78px;
    border-radius: 50%;
    background: ${({ theme }) => theme.qr['background']};
    padding: 4px;
  }
`;
