import Axios, { AxiosInstance, AxiosRequestConfig, CancelTokenSource } from "axios";
import { API_URL } from "../enums/api.enum";
import { ApiResponseModel } from "../models/service/apiResponse.model";
import { UserExistApiPayloadModel, UserExistApiResponseModel, VerifyAndLoginPayloadModel, VerifyAndLoginResponseModel } from "../models/service/login.model";
import { store } from "../state-management/redux/store";

export abstract class BaseService {

    constructor() {
        this.axiosInstance = Axios.create(this.axiosRequestConfig);
    }

    protected baseUrl: string = API_URL.BASE_URL;
    private static token: string | null | undefined;
    protected axiosInstance: AxiosInstance;

    protected axiosRequestConfigDefault: AxiosRequestConfig = {
        baseURL: this.baseUrl,
        headers: { 'Content-Type': 'application/json' },
    };

    private _axiosRequestConfig: AxiosRequestConfig = this.axiosRequestConfigDefault;

    get axiosRequestConfig() {
        return this._axiosRequestConfig;
    }

    set axiosRequestConfig(config: AxiosRequestConfig) {
        if (config.headers) {
            config.headers = {
                ...this._axiosRequestConfig.headers,
                ...config.headers,
            };
        }
        this._axiosRequestConfig = { ...this._axiosRequestConfig, ...config };
    }

    protected set_axiosRequestConfig_default() {
        this._axiosRequestConfig = this.axiosRequestConfigDefault;
    }

    get axiosTokenInstance(): AxiosInstance {
        let axiosInstanceWithToken: AxiosInstance;

        let token = BaseService.token;

        if (!BaseService.token) {
            token = store.getState().token;
            if (token) BaseService.setToken(token);
        }

        if (token) {
            this.axiosRequestConfig = {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: 'Bearer ' + token,
                },
            };
            axiosInstanceWithToken = Axios.create({
                ...this.axiosRequestConfig,
            });
        } else {
            axiosInstanceWithToken = this.axiosInstance;
        }
        // this.set_401_interceptors(axiosInstanceWithToken);
        axiosInstanceWithToken.interceptors.response.use(
            function (response) {
                // Any status code that lie within the range of 2xx cause this function to trigger
                // Do something with response data
                return response;
            },
            function (error) {
                // Any status codes that falls outside the range of 2xx cause this function to trigger
                // Do something with response error
                return Promise.reject(error);
            }
        );

        return axiosInstanceWithToken;
    }

    private static setToken(t: string) {
        BaseService.token = t;
    }

    static removeToken() {
        BaseService.token = undefined;
    }

    static msgRequestCanceled = 'request-canceled';
    static cancelTokenSource(): CancelTokenSource {
        return Axios.CancelToken.source();
    }

    protected checkIsUserExist(data: UserExistApiPayloadModel): Promise<ApiResponseModel<UserExistApiResponseModel>> {
        const instance = Axios.create({ baseURL: this.baseUrl, });
        return instance.post(API_URL.USER_EXIST, data);
    }

    protected userVerifyAndLogin(data: VerifyAndLoginPayloadModel): Promise<ApiResponseModel<VerifyAndLoginResponseModel>> {
        const instance = Axios.create({ baseURL: this.baseUrl, });
        return instance.post(API_URL.VERIFY_AND_LOGIN, data);
    }
}