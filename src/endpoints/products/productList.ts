import { D1ListEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { ProductModel } from "./base";

export class ProductList extends D1ListEndpoint<HandleArgs> {
	_meta = {
		model: ProductModel,
	};

	searchFields = ["name", "slug", "description", "category"];
	defaultOrderBy = "id DESC";
}
