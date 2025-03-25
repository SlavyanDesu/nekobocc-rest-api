import { Elysia } from 'elysia';
import NekoBocc from 'nekobocc';
import { safeCall } from './helper';

const nekobocc = new NekoBocc();
const app = new Elysia();

app.get('/', () => ({ message: 'API is online' }));

app.get('/random', async () => safeCall(null, nekobocc.random));

app.get('/get', async ({ query }) => safeCall('string', nekobocc.get, query.url));

app.get('/release', async ({ query }) => safeCall('number', nekobocc.release, query.page));

app.get('/search', async ({ query }) => safeCall('string', nekobocc.search, query.q));

app.listen(Bun.env.PORT ?? 3000);

console.log(`Server is running at http://${app.server?.hostname}:${app.server?.port}`);
