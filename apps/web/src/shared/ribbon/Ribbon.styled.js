import styled from 'styled-components';
import { m } from 'framer-motion';

export const _position = styled.div`
  ${({ theme }) => theme.styles.ribbons.basic.position};
`;

export const _float = styled.div`
  ${({ theme }) => theme.styles.ribbons.basic.float};
`;

export const _wrapper = styled.div`
  ${({ theme }) => theme.styles.ribbons.basic.wrapper};
`;

export const _ribbon = styled(m.div)`
  ${({ theme }) => theme.styles.ribbons.basic.ribbon};
`;

export const _triangle = styled.div`
  ${({ theme }) => theme.styles.ribbons.basic.triangle};
`;
