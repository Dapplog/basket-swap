import styled from 'styled-components';

export const _proxy = styled.div`
  position: absolute;
  z-index: ${({ theme }) => theme.zindex['proxy']};
`;
