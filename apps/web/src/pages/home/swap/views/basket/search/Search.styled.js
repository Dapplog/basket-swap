import styled from 'styled-components';

export const _search = styled.div`
  ${({ theme }) => theme.styles.forms.input}
  border-radius: ${({ theme }) => theme.border_radius['circle']}
                ${({ theme }) => theme.border_radius['rounder']}
                ${({ theme }) => theme.border_radius['circle']}
                ${({ theme }) => theme.border_radius['rounder']};
  background: ${({ theme }) => theme.bamboo.base};
  > input {
    max-width: 288px;
    padding: 4px 24px;
    font-size: 18px;
    height: 36px;
    &::placeholder {
      color: ${({ theme }) => theme.text.active};
      text-shadow: 1px 1px 4px ${({ theme }) => theme.text['shadow']};
      font-size: 16px;
    }
  }
`;
