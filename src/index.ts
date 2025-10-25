import { ApiException, fromHono } from "chanfana";
import { Hono } from "hono";
import { ContentfulStatusCode } from "hono/utils/http-status";
import { alertsRouter } from "./endpoints/alerts/router";
import { ordersRouter } from "./endpoints/orders/router";
import { productsRouter } from "./endpoints/products/router";
import { suppliersRouter } from "./endpoints/suppliers/router";

const app = new Hono<{ Bindings: Env }>();

app.onError((err, c) => {
  if (err instanceof ApiException) {
    return c.json(
      { success: false, errors: err.buildResponse() },
      err.status as ContentfulStatusCode
    );
  }

  console.error("Global error handler caught:", err);

  return c.json(
    {
      success: false,
      errors: [{ code: 7000, message: "Internal Server Error" }],
    },
    500
  );
});

const openapi = fromHono(app, {
  docs_url: "/",
  schema: {
    info: {
      title: "My Awesome API",
      version: "2.0.0",
      description: "This is the documentation for my awesome API.",
    },
  },
});

openapi.route("/products", productsRouter);
openapi.route("/suppliers", suppliersRouter);
openapi.route("/orders", ordersRouter);
openapi.route("/alerts", alertsRouter);

export default app;
