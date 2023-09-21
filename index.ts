import { Hono } from 'hono'
import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json'
import { routHandlers } from './src/routes';


const app = new Hono()

app.use('*', logger());
app.use('*', prettyJSON());
app.get('/', (c) => c.text('Hello to my world!'))
routHandlers(app);

export default app