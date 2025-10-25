import { Hono } from "hono";
import { fromHono } from "chanfana";
import { ProductList } from "./productList";
import { ProductCreate } from "./productCreate";
import { ProductRead } from "./productRead";
import { ProductUpdate } from "./productUpdate";
import { ProductDelete } from "./productDelete";

export const productsRouter = fromHono(new Hono());

productsRouter.get("/", ProductList);
productsRouter.post("/", ProductCreate);
productsRouter.get("/:id", ProductRead);
productsRouter.put("/:id", ProductUpdate);
productsRouter.delete("/:id", ProductDelete);
