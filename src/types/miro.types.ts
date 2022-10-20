export type Links = {
    first?: string;
    last?: string;
    next?: string;
    prev?: string;
    self?: string;
}

export type Team = {
    id?: number;
    name?: string;
    picture?: TeamPicture;
    type?: string;
}

export type Picture = {
    id?: number;
    imageURL?: string;
}

export type TeamPicture = {
    id?: number;
    imageURL?: string;
    originalUrl?: string;
    type?: string;
}

export type Owner = {
    id?: number;
    name?: string;
    type?: string;
}

export type ModifiedBy = {
    id?: number;
    name?: string;
    type?: string;
}

export type CreatedBy = {
    id?: number;
    name?: string;
    type?: string;
}

export type Policy = {
    permissionsPolicy: PermissionsPolicy;
    sharingPolicy: SharingPolicy;
}

export type PermissionsPolicy = {
    collaborationToolsStartAccess?: string;
    copyAccess?: string;
    sharingAccess?: string;
}

export type SharingPolicy = {
    access?: string;
    inviteToAccountAndBoardLinkAccess?: string;
    organizationAccess?: string;
    teamAccess?: string;
}

export type Board = {
    createdAt: Date;
    createdBy: CreatedBy;
    currentUserMembership: BoardMember;
    description: string;
    id: string;
    modifiedAt: Date;
    modifiedBy: ModifiedBy;
    name: string;
    owner: Owner;
    picture: Picture;
    policy: Policy;
    permissionsPolicy: PermissionsPolicy;
    sharingPolicy: SharingPolicy;
    team: Team;
    type: string;
    viewLink: string;
    links?: Links;
}

export type TeamMember = {
    createdAt: Date;
    createdByUserId: number;
    memberId: number;
    modifiedAt: Date;
    modifiedByUserId: number;
    teamId: number;
    type: string;
    userRole: TEAMMEMBER_ROLE;
}

export type Org  ={
    id: string;
    fullLicensesPurchased: number;
    name: string;
    plan: ORG_PLAN;
    type: string;
}

export type OrgMember = {
    active: boolean;
    email: string;
    id: string;
    lastActivityAt: Date;
    license: LICENSE_TYPE;
    licenseAssignedAt: Date;
    role: ORGMEMBER_ROLE;
    type: string;
}

export type BoardMember = {
    id: string;
    name: string;
    role: BOARDMEMBER_ROLE;
    type: string;
    links?: Links;
}

export enum BOARDMEMBER_ROLE {
    VIEWER = 'viewer',
    COMMENTER = 'commenter',
    EDITOR = 'editor',
    COOWNER = 'coowner',
    OWNER = 'owner',
    GUEST = 'guest'
}

export enum TEAMMEMBER_ROLE {
    NON_TEAM = 'non_team',
    MEMBER = 'member' ,
    ADMIN = 'admin' ,
    TEAM_GUEST = 'team_guest'
}

export enum ORGMEMBER_ROLE {
    UNKNOWN = 'UNKNOWN',
    ORGANIZATION_INTERNAL_ADMIN = 'ORGANIZATION_INTERNAL_ADMIN',
    ORGANIZATION_INTERNAL_USER = 'ORGANIZATION_INTERNAL_USER',
    ORGANIZATION_EXTERNAL_USER = 'ORGANIZATION_EXTERNAL_USER',
    ORGANIZATION_TEAM_GUEST_USER = 'ORGANIZATION_TEAM_GUEST_USER'
}

export enum LICENSE_TYPE {
    UNKNOWN = 'UNKNOWN',
    FULL = 'FULL',
    OCCASIONAL = 'OCCASIONAL',
    FREE = 'FREE',
    FREE_RESTRICTED = 'FREE_RESTRICTED' ,
    FULL_TRIAL = 'FULL_TRIAL'
}

export enum ORG_PLAN {
    UNKNOWN = 'UNKNOWN',
    COMPANY = 'COMPANY',
    CONSULTANT = 'CONSULTANT',
    CONSULTANT_SLF = 'CONSULTANT_SLF',
    BUSINESS = 'BUSINESS',
    PAID_TEAM_ORG = 'PAID_TEAM_ORG',
    INTEGRATION_ORG = 'INTEGRATION_ORG',
    PROFESSIONAL_2022 = 'PROFESSIONAL_2022',
    EDU_TEAM_ORG = 'EDU_TEAM_ORG'
}

export enum TEAMSETTINGS_DISCOVERY {
    HIDDEN = 'hidden',
    REQUEST = 'request',
    JOIN = 'join'
}

export enum TEAMSETTINGS_COOWNER_ENABLED {
    ENABLED = 'enabled',
    DISABLED = 'disabled'
}

export enum TEAMSETTINGS_COPY_ACCESS_LEVEL {
    ANYONE = 'anyone',
    TEAM_MEMBERS = 'team_members',
    TEAM_EDITORS = 'team_editors',
    BOARD_OWNER = 'board_owner'
}

export enum TEAMSETTINGS_COPY_ACCESS_LEVEL_LIMITATION {
    ANYONE = 'anyone',
    TEAM_MEMBERS = 'team_members',
}
export enum TEAMSETTINGS_ALLOWED_BINARY{
    ALLOWED = 'allowed',
    NOT_ALLOWED = 'not_allowed'
}

export enum TEAMSETTINGS_ALLOWED_TERNARY{
    ALLOWED = 'allowed',
    ALLOWED_WITH_EDITING = 'allowed_with_editing',
    NOT_ALLOWED = 'not_allowed'
}

export enum TEAMSETTINGS_INVITE_EXTERNAL_USERS_ROLE{
    ONLY_ORG_ADMINS = 'only_org_admins',
    ADMINS = 'admins',
    ALL_MEMBERS = 'all_members'
}

export enum TEAMSETTINGS_SHARINGPOLICY_ASSET_ACCESS_LEVEL{
    COMPANY_ADMINS = 'COMPANY_ADMINS',
    ADMINS = 'ADMINS',
    ALL_MEMBERS = 'ALL_MEMBERS'
}

export enum TEAMSETTINGS_SHARINGPOLICY_DEFAULT_ACCESS {
    PRIVATE = 'private',
    VIEW = 'view',
    COMMENT = 'comment',
    EDIT = 'edit',
}

export enum TEAMSETTINGS_SHARINGPOLICY_DEFAULT_PROJECT_ACCESS {
    PRIVATE = 'private',
    VIEW = 'view',
}

export type TeamAccountDiscoverySettings = {
    accountDiscovery: TEAMSETTINGS_DISCOVERY
}

export type TeamCollaborationSettings = {
    coOwnerRole: TEAMSETTINGS_COOWNER_ENABLED
}

export type TeamCopyAccessLevelSettings = {
    copyAccessLevel: TEAMSETTINGS_COPY_ACCESS_LEVEL,
    copyAccessLevelLimitation : TEAMSETTINGS_COPY_ACCESS_LEVEL_LIMITATION
}

export type TeamInvitationSettings = {
    inviteExternalUsers: TEAMSETTINGS_ALLOWED_BINARY,
    whoCanInvite : TEAMSETTINGS_INVITE_EXTERNAL_USERS_ROLE
}

export type TeamSharingPolicySettings = {
    createAssetAccessLevel: TEAMSETTINGS_SHARINGPOLICY_ASSET_ACCESS_LEVEL,
    defaultBoardAccess: TEAMSETTINGS_SHARINGPOLICY_DEFAULT_ACCESS,
    defaultOrganizationAccess: TEAMSETTINGS_SHARINGPOLICY_DEFAULT_ACCESS,
    defaultProjectAccess: TEAMSETTINGS_SHARINGPOLICY_DEFAULT_PROJECT_ACCESS,
    moveBoardToAccount: TEAMSETTINGS_ALLOWED_BINARY,
    sharingOnAccount: TEAMSETTINGS_ALLOWED_BINARY,
    sharingOnOrganization: TEAMSETTINGS_ALLOWED_TERNARY,
    sharingViaPublicLink: TEAMSETTINGS_ALLOWED_TERNARY,
    sharingWithExternalUsers: TEAMSETTINGS_ALLOWED_BINARY,
    whiteListDomainsEnabled: boolean,
    whiteListedDomains: string[]
}

export type TeamSettings = {
    organizationId: number;
    teamId: number;
    teamAccountDiscoverySettings: TeamAccountDiscoverySettings;
    teamCollaborationSettings: TeamCollaborationSettings;
    teamCopyAccessLevelSettings: TeamCopyAccessLevelSettings;
    teamInvitationSettings: TeamInvitationSettings;
    teamSharingPolicySettings: TeamSharingPolicySettings;
    type: string;
}

