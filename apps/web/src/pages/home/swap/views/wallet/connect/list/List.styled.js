import styled from 'styled-components';
import { colors } from 'design';

export const _list = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 24px;
`;

export const _item = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120px;
`;

export const _bubble = styled.div`
  min-width: 54px;
  width: 54px;
  min-height: 54px;
  height: 54px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${({ theme }) => theme.border_radius['circle']};
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.08);
  background: ${({ theme, $logo }) =>
    $logo ? colors.background[$logo] : theme.background['low']};
  margin-bottom: 4px;
  padding: 10px;
  cursor: pointer;
`;

export const _icon = styled.div`
  min-width: 100%;
  width: 100%;
  min-height: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  > svg {
    display: block;
    min-width: 95%;
    width: 95%;
    min-height: 95%;
    height: 95%;
    fill: ${({ $logo }) => ($logo ? colors.logo[$logo] : '#fff')};
  }
`;

export const _name = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text['active']};
  text-shadow: 1px 1px 0 ${({ theme }) => theme.text['shadow']};
`;
