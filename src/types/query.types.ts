export type ListQueryParams = {
    filterQuery?: string | null;
    cursor?: string | null;
    limit? : number | null;
}

export type GetBoardsQueryParams = {
    team_id?: string | null;
    query?: string | null;
    owner?: string | null;
    offset?: string | null;
    limit?: number | null;
    sort?: string | null;
}

export type GetOrgMembersQueryParams = {
    query: OrgMembersQueryOptions
}

export type OrgMembersQueryOptions = {
    active?: string | null;
    cursor?: string | null;
    license?: string | null;
    offset?: string | null;
    limit?: number | null;
    role?: string | null;
}

export type GetBoardMembersQueryParams = {
    offset?: string | null;
    limit? : number | null;
}