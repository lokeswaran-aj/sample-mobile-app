import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SdfsdfsdfService } from "./sdfsdfsdf.service";
import { SdfsdfsdfControllerBase } from "./base/sdfsdfsdf.controller.base";

@swagger.ApiTags("sdfsdfsdfs")
@common.Controller("sdfsdfsdfs")
export class SdfsdfsdfController extends SdfsdfsdfControllerBase {
  constructor(
    protected readonly service: SdfsdfsdfService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
