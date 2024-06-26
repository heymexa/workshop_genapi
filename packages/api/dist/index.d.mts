import { UseQueryOptions, QueryKey, UseQueryResult, UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import { AxiosRequestConfig, AxiosError } from 'axios';

/**
 * Generated by orval v6.30.2 🍺
 * Do not edit manually.
 * Generation API
 * OpenAPI spec version: 1.0.0
 */
type TestApiCreate = {
    param?: string;
};

/**
 * Generated by orval v6.30.2 🍺
 * Do not edit manually.
 * Generation API
 * OpenAPI spec version: 1.0.0
 */
type TestApiCreateResponse = {
    result?: string;
    status?: string;
};

/**
 * Generated by orval v6.30.2 🍺
 * Do not edit manually.
 * Generation API
 * OpenAPI spec version: 1.0.0
 */
type TestApiGet = {
    isOk?: boolean;
    status?: string;
};

declare const customInstance: <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig) => Promise<T>;
type ErrorType<Error> = AxiosError<Error>;

type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];
declare const testApiGet: (options?: SecondParameter<typeof customInstance>, signal?: AbortSignal) => Promise<TestApiGet>;
declare const getTestApiGetQueryKey: () => readonly ["/api/v1/test"];
declare const getTestApiGetQueryOptions: <TData = TestApiGet, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof testApiGet>>, TError, TData>>;
    request?: SecondParameter<typeof customInstance>;
}) => UseQueryOptions<TestApiGet, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
type TestApiGetQueryResult = NonNullable<Awaited<ReturnType<typeof testApiGet>>>;
type TestApiGetQueryError = ErrorType<unknown>;
declare const useTestApiGet: <TData = TestApiGet, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof testApiGet>>, TError, TData>>;
    request?: SecondParameter<typeof customInstance>;
}) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
declare const testApiCreate: (testApiCreate: TestApiCreate, options?: SecondParameter<typeof customInstance>) => Promise<TestApiCreateResponse>;
declare const getTestApiCreateMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof testApiCreate>>, TError, {
        data: TestApiCreate;
    }, TContext>;
    request?: SecondParameter<typeof customInstance>;
}) => UseMutationOptions<Awaited<ReturnType<typeof testApiCreate>>, TError, {
    data: TestApiCreate;
}, TContext>;
type TestApiCreateMutationResult = NonNullable<Awaited<ReturnType<typeof testApiCreate>>>;
type TestApiCreateMutationBody = TestApiCreate;
type TestApiCreateMutationError = ErrorType<unknown>;
declare const useTestApiCreate: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof testApiCreate>>, TError, {
        data: TestApiCreate;
    }, TContext>;
    request?: SecondParameter<typeof customInstance>;
}) => UseMutationResult<Awaited<ReturnType<typeof testApiCreate>>, TError, {
    data: TestApiCreate;
}, TContext>;

export { type TestApiCreate, type TestApiCreateMutationBody, type TestApiCreateMutationError, type TestApiCreateMutationResult, type TestApiCreateResponse, type TestApiGet, type TestApiGetQueryError, type TestApiGetQueryResult, getTestApiCreateMutationOptions, getTestApiGetQueryKey, getTestApiGetQueryOptions, testApiCreate, testApiGet, useTestApiCreate, useTestApiGet };
