import {
    BOARDMEMBER_ROLE,
    Policy,
    TeamAccountDiscoverySettings,
    TeamCollaborationSettings,
    TeamCopyAccessLevelSettings, TeamInvitationSettings,
    TeamPicture, TeamSharingPolicySettings
} from './miro.types';

export type TeamUpdateDto = {
    name?: string;
    picture?: TeamPicture;
}

export type TeamSettingUpdateDto = {
    teamAccountDiscoverySettings: TeamAccountDiscoverySettings;
    teamCollaborationSettings: TeamCollaborationSettings;
    teamCopyAccessLevelSettings: TeamCopyAccessLevelSettings;
    teamInvitationSettings: TeamInvitationSettings;
    teamSharingPolicySettings: TeamSharingPolicySettings;
}

export type TeamInviteDto = {
    userEmail: string;
}

export type BoardUpdateDto = {
    description?: string;
    name?: string;
    policy?: Policy;
    teamId?: string;
}

export type TeamCreateDto = {
    name?: string;
    picture?: TeamPicture;
}

export type BoardMemberUpdateDto = {
    role: BOARDMEMBER_ROLE;
}

export type BoardMemberShareDto = {
    emails: string[];
    role: BOARDMEMBER_ROLE;
    message: string;
}

export type BoardCreateDto = {
    description: string;
    name: string;
    policy: Policy;
}

export type BoardCopyDto = {
    description: string;
    name: string;
    policy: Policy;
    teamId: string;
}