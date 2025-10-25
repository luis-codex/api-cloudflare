import { D1UpdateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { ProductModel } from "./base";

export class ProductUpdate extends D1UpdateEndpoint<HandleArgs> {
	_meta = {
		model: ProductModel,
		fields: ProductModel.schema.pick({
			name: true,
			slug: true,
			description: true,
			price: true,
			stock: true,
			category: true,
			image: true,
		}),
	};
}
