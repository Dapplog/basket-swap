import styled from 'styled-components';

export const _item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 4px 8px;
  cursor: pointer;
  margin-bottom: 4px;
  > svg {
    margin-right: 16px;
    min-width: 16px;
    width: 16px;
    min-height: 16px;
    height: 16px;
    fill: ${({ theme }) => theme.text['burn']};
  }
  > img {
    margin-right: 12px;
    min-width: 28px;
    width: 28px;
    min-height: 28px;
    height: 28px;
    border-radius: 50px;
    background: ${({ theme }) => theme.bamboo['higher']};
    padding: 2px;
  }
  > span {
    color: ${({ theme }) => theme.text['burn']};
    font-size: 14px;
  }
`;
