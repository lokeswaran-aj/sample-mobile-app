import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SdfsdfsdfTitle } from "../sdfsdfsdf/SdfsdfsdfTitle";

export const SdfCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="sdfsdfsdf.id"
          reference="Sdfsdfsdf"
          label="sdfsdfsdf"
        >
          <SelectInput optionText={SdfsdfsdfTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
