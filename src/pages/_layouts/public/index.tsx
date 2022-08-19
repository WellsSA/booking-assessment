import { Wrapper } from './styles';

interface Props {
  children: React.ReactNode;
}

const PublicLayout: React.FC<Props> = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PublicLayout;
