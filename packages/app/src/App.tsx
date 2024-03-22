import { Layout } from './layouts/Layout';
import { FloatRouter } from './router/FloatRouter';
import { Router } from './router/Router';

function App() {
  return (
    <>
      <Layout>
        <Router />
      </Layout>
      <FloatRouter />
    </>
  );
}

export default App;
