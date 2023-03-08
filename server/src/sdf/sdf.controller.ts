import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SdfService } from "./sdf.service";
import { SdfControllerBase } from "./base/sdf.controller.base";

@swagger.ApiTags("sdfs")
@common.Controller("sdfs")
export class SdfController extends SdfControllerBase {
  constructor(
    protected readonly service: SdfService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
