import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SdfsdfsdfServiceBase } from "./base/sdfsdfsdf.service.base";

@Injectable()
export class SdfsdfsdfService extends SdfsdfsdfServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
