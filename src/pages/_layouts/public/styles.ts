import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;

  background: linear-gradient(
    95deg,
    var(--primary-background),
    var(--secondary-background)
  );
`;
