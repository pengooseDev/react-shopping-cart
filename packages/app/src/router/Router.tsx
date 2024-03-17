import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './router.constant';
import { FloatRouter } from '../layout';

export const Router = () => {
  return (
    <Routes>
      {Object.entries(ROUTES).map(([key, { PATH, COMPONENT }]) => (
        <Route
          key={key}
          path={PATH}
          element={
            <>
              <FloatRouter />
              <COMPONENT />
            </>
          }
        />
      ))}
    </Routes>
  );
};
