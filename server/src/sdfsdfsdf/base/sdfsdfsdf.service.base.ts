/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Sdfsdfsdf, Sdf } from "@prisma/client";

export class SdfsdfsdfServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SdfsdfsdfFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SdfsdfsdfFindManyArgs>
  ): Promise<number> {
    return this.prisma.sdfsdfsdf.count(args);
  }

  async findMany<T extends Prisma.SdfsdfsdfFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SdfsdfsdfFindManyArgs>
  ): Promise<Sdfsdfsdf[]> {
    return this.prisma.sdfsdfsdf.findMany(args);
  }
  async findOne<T extends Prisma.SdfsdfsdfFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SdfsdfsdfFindUniqueArgs>
  ): Promise<Sdfsdfsdf | null> {
    return this.prisma.sdfsdfsdf.findUnique(args);
  }
  async create<T extends Prisma.SdfsdfsdfCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SdfsdfsdfCreateArgs>
  ): Promise<Sdfsdfsdf> {
    return this.prisma.sdfsdfsdf.create<T>(args);
  }
  async update<T extends Prisma.SdfsdfsdfUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SdfsdfsdfUpdateArgs>
  ): Promise<Sdfsdfsdf> {
    return this.prisma.sdfsdfsdf.update<T>(args);
  }
  async delete<T extends Prisma.SdfsdfsdfDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SdfsdfsdfDeleteArgs>
  ): Promise<Sdfsdfsdf> {
    return this.prisma.sdfsdfsdf.delete(args);
  }

  async findSdfs(
    parentId: string,
    args: Prisma.SdfFindManyArgs
  ): Promise<Sdf[]> {
    return this.prisma.sdfsdfsdf
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .sdfs(args);
  }
}
