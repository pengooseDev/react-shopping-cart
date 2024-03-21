import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './router.constant';
import { loadDefault } from '../utils/loadDefault';

export const Router = () => {
  return (
    <Routes>
      {Object.entries(ROUTES).map(
        ([key, { PATH, COMPONENT_PATH, COMPONENT_NAME }]) => {
          const LazyComponent = lazy(() =>
            loadDefault(COMPONENT_PATH, COMPONENT_NAME)
          );

          return (
            <Route
              key={key}
              path={PATH}
              element={
                <Suspense fallback={<h1>Loading...</h1>}>
                  <LazyComponent />
                </Suspense>
              }
            />
          );
        }
      )}
    </Routes>
  );
};
