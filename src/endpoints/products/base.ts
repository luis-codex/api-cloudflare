import { z } from "zod";

export const product = z.object({
  id: z.number().int(),
  name: z.string(),
  slug: z.string(),
  description: z.string(),
  price: z.number(),
  stock: z.number(),
  category: z.string(),
  image: z.string(),
});

export const ProductModel = {
  tableName: "products",
  primaryKeys: ["id"],
  schema: product,
  serializer: (obj: Object) => {
    const o = obj as unknown as z.infer<typeof product>;
    return {
      ...o,
      price: Number(o.price),
      stock: Number(o.stock),
      slug: o.name.toLowerCase().replace(/\s+/g, "-"),
    };
  },
  serializerObject: product,
};
