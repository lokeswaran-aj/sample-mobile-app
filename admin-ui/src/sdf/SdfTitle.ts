import { Sdf as TSdf } from "../api/sdf/Sdf";

export const SDF_TITLE_FIELD = "id";

export const SdfTitle = (record: TSdf): string => {
  return record.id || String(record.id);
};
