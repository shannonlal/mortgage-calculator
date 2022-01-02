export interface LoadingState<T> {
    data?:T;
    loading: boolean;
    errorMessage: string;
};

export interface ValidationError {
    errorMessage: string;
}