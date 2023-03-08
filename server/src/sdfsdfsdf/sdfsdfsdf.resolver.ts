import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SdfsdfsdfResolverBase } from "./base/sdfsdfsdf.resolver.base";
import { Sdfsdfsdf } from "./base/Sdfsdfsdf";
import { SdfsdfsdfService } from "./sdfsdfsdf.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Sdfsdfsdf)
export class SdfsdfsdfResolver extends SdfsdfsdfResolverBase {
  constructor(
    protected readonly service: SdfsdfsdfService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
