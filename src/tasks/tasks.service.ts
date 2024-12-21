import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async create(taskData: Partial<Task>): Promise<Task> {
    const newTask = this.taskRepository.create(taskData);
    return this.taskRepository.save(newTask);
  }

  async remove(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
