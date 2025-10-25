import { D1UpdateEndpoint, O, UpdateFilters } from "chanfana";
import { HandleArgs } from "../../types";
import { ProductModel } from "./base";

export class ProductUpdate extends D1UpdateEndpoint<HandleArgs> {
  _meta = {
    model: ProductModel,
    fields: ProductModel.schema.pick({
      name: true,
      description: true,
      price: true,
      stock: true,
      category: true,
      image: true,
    }),
  };

  before(
    oldObj: O<typeof this.meta>,
    filters: UpdateFilters
  ): Promise<UpdateFilters> {
    oldObj.slug = oldObj.name.toLowerCase().replace(/\s+/g, "-");
    return Promise.resolve(filters);
  }
}
