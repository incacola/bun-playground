import { Hono } from "hono";
import { golfBallsRouteHandler } from "./GolfBallRoutesHandler";

export function routHandlers(api: Hono) {
  golfBallsRouteHandler(api);
  //Add other Handlers
}