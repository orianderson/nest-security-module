import { Module, DynamicModule } from "@nestjs/common";

import { BcryptService } from "./bcrypt.service";

@Module({})
export class BcryptModule {
  static register(): DynamicModule {
    return {
      module: BcryptModule,
      providers: [BcryptService],
      exports: [BcryptService],
    };
  }
}
