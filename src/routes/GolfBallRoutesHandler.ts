import { Hono, Context } from 'hono';
import { GolfBallsController } from "../controllers/GolfBallController";

export function golfBallsRouteHandler(api: Hono) {
  api.get('/golfballs/', async (c) =>{
    const golfBall = await GolfBallsController.readAll();
    return c.json({golfBall});
  });
  api.get('/golfballs/:id', async (c) =>{
    const id = parseInt(c.req.param('id'));
    const golfBall = await GolfBallsController.read(id);
    return c.json({golfBall});
  });
  api.post('/golfballs/',async (c) => {
    const newGolfBall = await c.req.json();
    const createdGolfBall = await GolfBallsController.create(newGolfBall);
    return c.json({ createdGolfBall });
  })
  api.patch('/golfballs/:id',async (c) => {
    const id = parseInt(c.req.param('id'));
    const golfBall = await c.req.json();
    const updatedGolfBall = await GolfBallsController.update(id,golfBall);
    return c.json({ updatedGolfBall });
  })
  api.delete('/golfballs/:id',async (c) => {
    const id = parseInt(c.req.param('id'));
    const deletedGolfBall = await GolfBallsController.delete(id);
    return c.json({deletedGolfBall});
  })
}