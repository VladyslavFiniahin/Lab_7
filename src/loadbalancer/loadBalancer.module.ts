import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';
import { LoadBalancerController } from './loadBalancer.controller';
import { LoadBalancerService } from './loadBalancer.service';
import { Server, ServerSchema } from 'src/schemas/server.schema';

@Module({
  imports: [
    MongooseModule.forRoot(''),
    MongooseModule.forFeature([{ name: Server.name, schema: ServerSchema }]),
    HttpModule,
  ],
  controllers: [LoadBalancerController],
  providers: [LoadBalancerService],
})
export class LoadBalancerModule {}

