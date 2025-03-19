import { Elysia } from 'elysia';
import NekoBocc from 'nekobocc';

const nekobocc = new NekoBocc();
const app = new Elysia().get('/', 'Server is online');

const getRandom = async () => {
  return await nekobocc.random();
};

const getHentai = async (url: string) => {
  return await nekobocc.get(url);
};

const getRelease = async (page: number) => {
  return await nekobocc.release(page);
};

const getSearch = async (query: string) => {
  return await nekobocc.search(query);
};

app.get('/random', getRandom);
app.get('/get', ({ query }) => getHentai(query.url));
app.get('/release', ({ query }) => getRelease(Number(query.page)));
app.get('/search', ({ query }) => getSearch(query.q));

app.listen(3000)
console.log(`Server is running at ${app.server?.hostname}:${app.server?.port}`);