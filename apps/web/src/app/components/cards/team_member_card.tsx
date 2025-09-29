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
        'flex h-full flex-col items-center justify-between rounded-3xl border bg-white px-8 py-10 text-center shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-transform duration-200',
        'hover:-translate-y-1',
        muted ? 'border-slate-200 text-slate-400' : 'border-slate-200 text-slate-700'
      )}
      aria-label={`${name}, ${role}`}
    >
      <img
        src={imageUrl}
        alt=""
        className={classNames('mb-6 h-36 w-36 object-contain', muted ? 'opacity-50' : 'opacity-100')}
        loading="lazy"
      />
      <div className="space-y-2">
        <h3 className={classNames('text-lg font-semibold', muted ? 'text-slate-400' : 'text-slate-900')}>
          {name}
        </h3>
        <p className="text-sm text-slate-500">{role}</p>
      </div>
    </article>
  );
}

export default TeamMemberCard;
