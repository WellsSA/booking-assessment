import React from 'react';

import PublicLayout from '../pages/_layouts/public';

interface Props {
  children: React.ReactNode;
}

const PublicRoute: React.FC<Props> = ({ children }: Props) => {
  return <PublicLayout>{children}</PublicLayout>;
};

export default PublicRoute;
