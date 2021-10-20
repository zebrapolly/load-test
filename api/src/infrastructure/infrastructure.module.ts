import { Module } from "@nestjs/common";
import { StorageModule } from "./storage";

@Module({
    imports: [StorageModule],
    exports: [StorageModule]
})
export class InfrastructureModule {}