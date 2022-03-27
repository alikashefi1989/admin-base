import { BaseService } from './base.service';
import { ApiResponseModel } from '../models/service/apiResponse.model';
import { UserExistApiPayloadModel, UserExistApiResponseModel, VerifyAndLoginPayloadModel, VerifyAndLoginResponseModel } from '../models/service/login.model';

export class LoginService extends BaseService {

    isUserExist(data: UserExistApiPayloadModel): Promise<ApiResponseModel<UserExistApiResponseModel>> {
        return this.checkIsUserExist(data);
    }

    verifyAndLogin(data: VerifyAndLoginPayloadModel): Promise<ApiResponseModel<VerifyAndLoginResponseModel>> {
        return this.userVerifyAndLogin(data);
    }
}
