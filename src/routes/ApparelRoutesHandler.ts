import { Hono } from 'hono';
import { ApparelController } from "../controllers/ApparelController";

export function apparelsRoutesHandler(api: Hono) {
  api.get('/apparel/', async (c) =>{
    const apparel = await ApparelController.readAll();
    return c.json({apparel});
  });
  api.get('/apparel/:id', async (c) =>{
    const id = parseInt(c.req.param('id'));
    const apparel = await ApparelController.read(id);
    return c.json({apparel});
  });
  api.post('/apparel/',async (c) => {
    const newApparel = await c.req.json();
    const createdApparel = await ApparelController.create(newApparel);
    return c.json({ createdApparel });
  })
  api.patch('/apparel/:id',async (c) => {
    const id = parseInt(c.req.param('id'));
    const apparel = await c.req.json();
    const updatedApparel = await ApparelController.update(id,apparel);
    return c.json({ updatedApparel });
  })
  api.delete('/apparel/:id',async (c) => {
    const id = parseInt(c.req.param('id'));
    const deletedApparel = await ApparelController.delete(id);
    return c.json({deletedApparel});
  })
}