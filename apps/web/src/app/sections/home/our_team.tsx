import TeamMemberCard from '../../components/cards/team_member_card';
import { teamMembers } from '../../data/team';

export function OurTeam() {
  return (
    <section
      id="team"
      className="bg-white border-t border-slate-100"
      aria-labelledby="our-team-title"
    >
      <div className="w-full max-w-6xl px-6 py-16 mx-auto">
        <div className="space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">Our Team</p>
          <h2
            id="our-team-title"
            className="text-3xl font-bold text-slate-900 md:text-4xl"
          >
            Meet the developers who make this possible.
          </h2>
        </div>

        <ul
          className="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          aria-label="Team members"
        >
          {teamMembers.map((member, index) => (
            <li key={member.id} className="flex">
              <TeamMemberCard member={member} muted={index === teamMembers.length - 1} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default OurTeam;
