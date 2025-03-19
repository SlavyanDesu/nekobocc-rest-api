import { Elysia } from 'elysia';
import NekoBocc from 'nekobocc';

const nekobocc = new NekoBocc();
const app = new Elysia().get('/', 'Server is online');

const isError = (error: unknown): error is Error => error instanceof Error;

const safeCall = async (fn: (...args: any[]) => Promise<any>, ...args: any[]) => {
  try {
    return await fn(...args);
  } catch (error) {
    const message = isError(error) ? error.message : 'Unknown error';

    const statusCode = 'status' in (error as any) ? (error as any).status : 500;

    return {
      error: message,
      code: statusCode,
    };
  }
};

app.get('/random', () => safeCall(nekobocc.random));
app.get('/get', ({ query }) => safeCall(nekobocc.get, query.url));
app.get('/release', ({ query }) => safeCall(nekobocc.release, Number(query.page)));
app.get('/search', ({ query }) => safeCall(nekobocc.search, query.q));

app.listen(3000);
console.log(`Server is running at http://${app.server?.hostname}:${app.server?.port}`);
