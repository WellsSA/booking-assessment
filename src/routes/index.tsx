import { Routes, Route } from 'react-router-dom';

import { Booking } from 'pages';

import PublicRoute from './PublicRoute';

const CustomRoutes: React.FC = () => {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route
        path="/"
        element={
          <PublicRoute>
            <Booking />
          </PublicRoute>
        }
      />
    </Routes>
  );
};

export default CustomRoutes;
