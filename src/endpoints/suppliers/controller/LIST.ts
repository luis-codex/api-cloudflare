import { D1ListEndpoint } from "chanfana";
import { HandleArgs } from "../../../types";
import { SupplierModel } from "../../../schemas/schemaSuppliers";

export class SupplierList extends D1ListEndpoint<HandleArgs> {
  _meta = {
    model: SupplierModel,
  };
  dbName = "SUPPLIERS_DB";
  searchFields = ["name", "rut", "email", "address"];
  defaultOrderBy = "id DESC";
}
