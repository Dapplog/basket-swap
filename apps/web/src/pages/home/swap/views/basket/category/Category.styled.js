import styled from 'styled-components';

export const _category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const _title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text['burn']};
  border-bottom: 2px dashed ${({ theme }) => theme.text['burn']};
  padding: 2px 20px;
`;

export const _list = styled.div`
  margin-top: 16px;
  padding: 8px;
`;
