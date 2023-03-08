import { Module } from "@nestjs/common";
import { SdfsdfsdfModuleBase } from "./base/sdfsdfsdf.module.base";
import { SdfsdfsdfService } from "./sdfsdfsdf.service";
import { SdfsdfsdfController } from "./sdfsdfsdf.controller";
import { SdfsdfsdfResolver } from "./sdfsdfsdf.resolver";

@Module({
  imports: [SdfsdfsdfModuleBase],
  controllers: [SdfsdfsdfController],
  providers: [SdfsdfsdfService, SdfsdfsdfResolver],
  exports: [SdfsdfsdfService],
})
export class SdfsdfsdfModule {}
