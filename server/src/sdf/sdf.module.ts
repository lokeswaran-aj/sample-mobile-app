import { Module } from "@nestjs/common";
import { SdfModuleBase } from "./base/sdf.module.base";
import { SdfService } from "./sdf.service";
import { SdfController } from "./sdf.controller";
import { SdfResolver } from "./sdf.resolver";

@Module({
  imports: [SdfModuleBase],
  controllers: [SdfController],
  providers: [SdfService, SdfResolver],
  exports: [SdfService],
})
export class SdfModule {}
