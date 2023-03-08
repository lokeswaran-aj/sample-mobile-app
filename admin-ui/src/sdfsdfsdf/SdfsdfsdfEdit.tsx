import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { SdfTitle } from "../sdf/SdfTitle";

export const SdfsdfsdfEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="sdfs"
          reference="Sdf"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SdfTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
