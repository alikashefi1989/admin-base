export interface ApiListResponseModel<T> {
    data: {
        data: Array<T>
    }
}

export interface ApiResponseModel<T> {
    data: {
        data: T
    }
}