import { ApiListResponseModel, ApiResponseModel } from '../models/service/apiResponse.model';
import { BaseService } from './base.service';

export abstract class CrudService<EntityModel, EntityCreateModel, EntityUpdateModel> extends BaseService {
    abstract crudBaseUrl: string;

    create(data: EntityCreateModel): Promise<ApiResponseModel<EntityModel>> {
        return this.axiosTokenInstance.post(`/${this.crudBaseUrl}/create`, data);
    }

    getAll(): Promise<ApiListResponseModel<EntityModel>> {
        return this.axiosTokenInstance.post(`/${this.crudBaseUrl}/get`);
    }

    get(id: string): Promise<ApiResponseModel<EntityModel>> {
        return this.axiosTokenInstance.get(`/${this.crudBaseUrl}/${id}`);
    }

    update(data: EntityUpdateModel, id: string): Promise<ApiResponseModel<EntityModel>> {
        return this.axiosTokenInstance.put(`/${this.crudBaseUrl}/update/${id}`, data);
    }

    delete(id: string): Promise<ApiResponseModel<any>> {
        // TODO: check me.
        return this.axiosTokenInstance.delete(`/${this.crudBaseUrl}/delete/${id}`);
    }
}
