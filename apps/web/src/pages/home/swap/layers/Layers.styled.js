import styled from 'styled-components';

export const _layers = styled.div`
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
