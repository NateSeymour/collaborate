import {config} from "@/config.ts";
import {QueryClient, useMutation, useQuery} from "@tanstack/vue-query";

export const apiClient: QueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0,
            retryDelay: 0,
            staleTime: 0,
        },
    },
});

interface QueryOptions {
    queryKey: string[],
    retry?: number | boolean,
    retryDelay?: number,
    staleTime?: number,
}

function buildQuery<T>(endpoint: string) {
    return async (): Promise<T> => {
        const res = await fetch(`${config.api.base}${endpoint}`, {
            method: 'GET',
            credentials: 'same-origin',
        });

        if (!res.ok) {
            throw `[API] Endpoint '${endpoint}' returned ${res.status} (${res.statusText}).`;
        }

        return await res.json();
    };
}

export function useApiQuery<T>(endpoint: string, options: QueryOptions) {
    const queryFn = buildQuery<T>(endpoint);

    return useQuery({
        ...options,
        queryFn,
    });
}

export async function fetchQuery<T>(endpoint: string, options: QueryOptions) {
    const queryFn = buildQuery<T>(endpoint);

    return await apiClient.fetchQuery({
        queryFn,
        ...options,
    });
}

type Resolvable<T> = (() => T) | T;

interface MutationOptions<RequestT, ResponseT> {
    cacheKey?: string[],
    onSuccess?: (response: ResponseT) => void,
    body?: Resolvable<RequestT>,
}

export function buildMutation<RequestT, ResponseT>(endpoint: string, options: MutationOptions<RequestT, ResponseT>) {
    return useMutation({
        mutationFn: async (body?: Resolvable<RequestT>): Promise<ResponseT> => {
            let requestBody = body || options.body;

            if(typeof requestBody === 'function') {
                /*
                 * Ignore is required here because TS doesn't understand the function check above.
                 */
                // @ts-ignore
                requestBody = requestBody();
            }

            const res = await fetch(`${config.api.base}${endpoint}`, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: requestBody ? JSON.stringify(requestBody) : undefined,
            });

            if(!res.ok) {
                throw `[API] Endpoint '${endpoint}' returned ${res.status} (${res.statusText}).`;
            }

            const contentType = res.headers.get('Content-Type');
            if(contentType && contentType.includes('application/json')) {
                return await res.json();
            }

            let responseValue: ResponseT;

            // @ts-ignore
            return responseValue;
        },
        onSuccess: (response: ResponseT) => {
            if(options.cacheKey) {
                apiClient.invalidateQueries(options.cacheKey);
            }

            options.onSuccess?.(response);
        },
    });
}