/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { SdfsdfsdfWhereUniqueInput } from "./SdfsdfsdfWhereUniqueInput";
import { SdfsdfsdfUpdateInput } from "./SdfsdfsdfUpdateInput";

@ArgsType()
class UpdateSdfsdfsdfArgs {
  @Field(() => SdfsdfsdfWhereUniqueInput, { nullable: false })
  where!: SdfsdfsdfWhereUniqueInput;
  @Field(() => SdfsdfsdfUpdateInput, { nullable: false })
  data!: SdfsdfsdfUpdateInput;
}

export { UpdateSdfsdfsdfArgs as UpdateSdfsdfsdfArgs };
