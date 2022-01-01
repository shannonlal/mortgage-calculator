export interface LoadingState<T> {
    data:T;
    loading: boolean;
    errorMessage: string;
};