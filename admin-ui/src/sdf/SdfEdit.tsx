import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SdfsdfsdfTitle } from "../sdfsdfsdf/SdfsdfsdfTitle";

export const SdfEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="sdfsdfsdf.id"
          reference="Sdfsdfsdf"
          label="sdfsdfsdf"
        >
          <SelectInput optionText={SdfsdfsdfTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
