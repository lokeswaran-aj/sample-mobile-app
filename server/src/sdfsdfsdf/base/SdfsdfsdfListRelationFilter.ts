/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SdfsdfsdfWhereInput } from "./SdfsdfsdfWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SdfsdfsdfListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SdfsdfsdfWhereInput,
  })
  @ValidateNested()
  @Type(() => SdfsdfsdfWhereInput)
  @IsOptional()
  @Field(() => SdfsdfsdfWhereInput, {
    nullable: true,
  })
  every?: SdfsdfsdfWhereInput;

  @ApiProperty({
    required: false,
    type: () => SdfsdfsdfWhereInput,
  })
  @ValidateNested()
  @Type(() => SdfsdfsdfWhereInput)
  @IsOptional()
  @Field(() => SdfsdfsdfWhereInput, {
    nullable: true,
  })
  some?: SdfsdfsdfWhereInput;

  @ApiProperty({
    required: false,
    type: () => SdfsdfsdfWhereInput,
  })
  @ValidateNested()
  @Type(() => SdfsdfsdfWhereInput)
  @IsOptional()
  @Field(() => SdfsdfsdfWhereInput, {
    nullable: true,
  })
  none?: SdfsdfsdfWhereInput;
}
export { SdfsdfsdfListRelationFilter as SdfsdfsdfListRelationFilter };
