import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from './layouts/Layout';
import { FloatRouter } from './router/FloatRouter';
import { Router } from './router/Router';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Layout>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </Layout>
      <FloatRouter />
    </>
  );
}

export default App;
