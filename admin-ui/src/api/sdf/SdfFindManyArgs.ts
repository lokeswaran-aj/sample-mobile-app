import { SdfWhereInput } from "./SdfWhereInput";
import { SdfOrderByInput } from "./SdfOrderByInput";

export type SdfFindManyArgs = {
  where?: SdfWhereInput;
  orderBy?: Array<SdfOrderByInput>;
  skip?: number;
  take?: number;
};
