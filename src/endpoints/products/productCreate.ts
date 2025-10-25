import { D1CreateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { ProductModel } from "./base";

export class ProductCreate extends D1CreateEndpoint<HandleArgs> {
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
