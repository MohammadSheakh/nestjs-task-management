import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';

@Module({
  controllers: [TasksController],
}) // apatoto kono property define kora nai 
export class TasksModule {}