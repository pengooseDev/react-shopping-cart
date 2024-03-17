import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './router.constant';
import { Header } from '../layout';

export const Router = () => {
  return (
    <Routes>
      {Object.entries(ROUTES).map(([key, { PATH, TITLE, COMPONENT }]) => (
        <Route
          key={key}
          path={PATH}
          element={
            <>
              <Header title={TITLE.GLOBAL} />
              <COMPONENT />
            </>
          }
        />
      ))}
    </Routes>
  );
};
