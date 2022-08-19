import React from 'react';

import { Container } from './styles';

interface Props {
  name: string;
  children: React.ReactNode;
}

const NamedSection: React.FC<Props> = ({ name, children }) => {
  return (
    <Container className="namedSection">
      <h1>{name}</h1>
      {children}
    </Container>
  );
};

export default NamedSection;
