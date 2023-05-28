import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

// nest js module .. module decorator 
@Module({
  imports: [TasksModule],
})
export class AppModule{}