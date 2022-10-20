import { Links } from './miro.types';

export type PaginatedResponse<Data> = {
    total?: number;
    size?: number;
    offset?: number;
    limit?: number;
    links?: Links;
    type?: string;
    data: Data[];
}

export type FetchOptions = {
    method?: string;
    body?: any;
};
