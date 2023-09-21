import { Hono } from "hono";
import { golfBallsRouteHandler } from "./GolfBallRoutesHandler";
import { apparelsRoutesHandler } from "./ApparelRoutesHandler";

export function routHandlers(api: Hono) {
  golfBallsRouteHandler(api);
  apparelsRoutesHandler(api);
  //Add other Handlers
}