import teamMemberImageOne from '../../assets/photos/members/tarpoe.jpg';
import teamMemberImageTwo from '../../assets/photos/members/sahdoh.png';
import teamMemberImageThree from '../../assets/photos/members/ehsoe.jpg';
import teamMemberImageFour from '../../assets/photos/members/C.jpg';
import teamMemberImage from '../../assets/photos/members/team-member.svg';


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
    imageUrl: teamMemberImageOne,
  },
  {
    id: 'saw-sah-doh',
    name: 'Saw Sah Doh',
    role: 'Full-Stack Developer',
    imageUrl: teamMemberImageTwo,
  },
  {
    id: 'saw-eh-soe',
    name: 'Saw Eh Soe',
    role: 'Full-Stack Developer',
    imageUrl: teamMemberImageThree,
  },
  {
    id: 'saw-tar-poe-2',
    name: 'Saw Tar Poe',
    role: 'Full-Stack Developer',
    imageUrl: teamMemberImageFour,
  },
  {
    id: 'member-name',
    name: 'Member Name',
    role: 'Role',
    imageUrl: teamMemberImage,
  },
];
