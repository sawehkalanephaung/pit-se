import { TeamMember } from '../../data/team';
import { classNames } from '../../utils/class_names';

export interface TeamMemberCardProps {
  member: TeamMember;
  muted?: boolean;
}

export function TeamMemberCard({ member, muted = false }: TeamMemberCardProps) {
  const { name, role, imageUrl } = member;

  return (
    <article
      className={classNames(
        'group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500',
        'hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl',
        muted ? 'opacity-70' : 'opacity-100'
      )}
      aria-label={`${name}, ${role}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
        <img
          src={imageUrl}
          alt=""
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col flex-1 gap-4 px-5 py-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
        </div>
        <p className="mt-auto text-sm text-slate-600">
          {role.toLowerCase()}.
        </p>
      </div>
    </article>
  );
}

export default TeamMemberCard;
