import { IRootService } from '../services/root-sevice.interface';
import { UserService } from '../services/user.service';
import { TodoService } from '../services/todo.service';

// TODO: Here you can add root services
export const services: Array<(new () => IRootService) | (new () => object)> = [UserService, TodoService];