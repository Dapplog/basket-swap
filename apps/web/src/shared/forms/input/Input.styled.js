import styled from 'styled-components';

export const _input = styled.div`
  ${({ theme }) => theme.styles.forms.input};
`;

export const _float = styled.div`
  width: 0;
  height: 0;
  display: flex;
  flex-direction: column;
  align-items: ${({ $left }) => ($left ? 'flex-end' : 'flex-start')};
  justify-content: ${({ $left }) => ($left ? 'flex-start' : 'flex-end')};
`;

export const _arrow = styled.div`
  > svg {
    fill: ${({ theme }) => theme.background['higher']};
    stroke: ${({ theme }) => theme.background['base']};
    transform: ${({ $left }) =>
      $left
        ? 'translate(-16px, 35%) rotate(175deg)'
        : 'translate(16px, -25%) rotate(-5deg)'};
    min-width: 20px;
    width: 20px;
    min-height: 56px;
    height: 56px;
    cursor: pointer;
    transition: transform ease-out 100ms;
    &:hover {
      transform: ${({ $left }) =>
        $left
          ? 'translate(-16px, 34%) rotate(175deg) scale(1.16)'
          : 'translate(16px, -22%) rotate(-5deg) scale(1.16)'};
    }
  }
`;

export const _ticker = styled.div`
  width: 0;
  height: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 16px;
`;

export const _symbol = styled.div`
  color: ${({ theme }) => theme.text.placeholder};
  text-shadow: none;
  line-height: 1;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
`;
