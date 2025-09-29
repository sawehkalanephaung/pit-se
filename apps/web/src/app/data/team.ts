import teamMemberImage from '../../assets/photos/team-member.svg';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'saw-tar-poe',
    name: 'Saw Tar Poe',
    role: 'Full-Stack Developer',
    imageUrl: teamMemberImage,
  },
  {
    id: 'saw-sah-doh',
    name: 'Saw Sah Doh',
    role: 'Full-Stack Developer',
    imageUrl: teamMemberImage,
  },
  {
    id: 'saw-eh-soe',
    name: 'Saw Eh Soe',
    role: 'Full-Stack Developer',
    imageUrl: teamMemberImage,
  },
  {
    id: 'saw-tar-poe-2',
    name: 'Saw Tar Poe',
    role: 'Full-Stack Developer',
    imageUrl: teamMemberImage,
  },
  {
    id: 'member-name',
    name: 'Member Name',
    role: 'Role',
    imageUrl: teamMemberImage,
  },
];
