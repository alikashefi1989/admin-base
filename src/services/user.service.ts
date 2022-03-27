import { CrudService } from './crud.service';
import { UserEntityCreateModel, UserEntityModel, UserEntityUpdateModel } from '../models/entities/user.model';

export class UserService extends CrudService<UserEntityModel, UserEntityCreateModel, UserEntityUpdateModel> {
    crudBaseUrl = 'user';
}
