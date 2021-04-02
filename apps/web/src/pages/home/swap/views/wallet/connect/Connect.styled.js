import styled from 'styled-components';
import { m } from 'framer-motion';

export const _connect = styled(m.div)`
  width: 100%;
  min-height: 100%;
  height: 100%;
  padding-top: 16px;
  > h3 {
    width: 100%;
    padding: 8px 24px;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-shadow: 1px 1px 4px ${({ theme }) => theme.text['shadow']};
    color: ${({ theme }) => theme.text['active']};
    text-align: center;
  }
`;

export const _container = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const _list = styled.div`
  padding: 0 24px;
`;

export const _walletconnect = styled.div`
  min-width: 60%;
  width: 60%;
  height: 100%;
  padding-top: 12px;
`;
