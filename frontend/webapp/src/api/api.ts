import {config} from "@/config.ts";
import {QueryClient, useMutation, useQuery} from "@tanstack/vue-query";

export const apiClient: QueryClient = new QueryClient();

interface QueryOptions {
    queryKey: string[],
}

export function buildQuery<T>(endpoint: string, options: QueryOptions) {
    return useQuery({
        ...options,
        queryFn: async (): Promise<T> => {
            const res = await fetch(`${config.api.base}${endpoint}`, {
                method: 'GET',
                credentials: 'same-origin',
            });

            if (!res.ok) {
                throw `[API] Endpoint '${endpoint}' returned ${res.status} (${res.statusText}).`;
            }

            return await res.json();
        }
    });
}

interface MutationOptions<RequestT, ResponseT> {
    cacheKey?: string[],
    onSuccess?: (response: ResponseT) => void,
    body?: RequestT,
}

export function buildMutation<RequestT, ResponseT>(endpoint: string, options: MutationOptions<RequestT, ResponseT>) {
    return useMutation({
        mutationFn: async (body?: RequestT): Promise<ResponseT> => {
            const requestBody = body || options.body;
            if(!requestBody) {
                throw `[API] You must define a body!`;
            }

            const res = await fetch(`${config.api.base}${endpoint}`, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
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