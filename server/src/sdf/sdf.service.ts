import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SdfServiceBase } from "./base/sdf.service.base";

@Injectable()
export class SdfService extends SdfServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
