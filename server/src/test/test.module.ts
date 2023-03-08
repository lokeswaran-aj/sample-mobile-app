import { Module } from "@nestjs/common";
import { TestModuleBase } from "./base/test.module.base";
import { TestService } from "./test.service";
import { TestController } from "./test.controller";

@Module({
  imports: [TestModuleBase],
  controllers: [TestController],
  providers: [TestService],
  exports: [TestService],
})
export class TestModule {}
