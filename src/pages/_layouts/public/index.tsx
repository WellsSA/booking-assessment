import { Wrapper, Content } from './styles';

interface Props {
  children: React.ReactNode;
}

const PublicLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default PublicLayout;
