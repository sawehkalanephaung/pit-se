import { useState } from 'react';

import TeamMemberCard from '../../components/cards/team_member_card';
import { teamMembers } from '../../data/team';

const VISIBLE_TEAM_MEMBERS = 3;

interface ArrowIconProps {
  direction: 'left' | 'right';
}

function ArrowIcon({ direction }: ArrowIconProps) {
  const pathData =
    direction === 'left' ? 'M12.5 5L7.5 10L12.5 15' : 'M7.5 5L12.5 10L7.5 15';

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={pathData}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function OurTeam() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = Math.min(VISIBLE_TEAM_MEMBERS, teamMembers.length);
  const maxStartIndex = Math.max(teamMembers.length - visibleCount, 0);
  const hasCarousel = teamMembers.length > visibleCount;
  const visibleMembers = hasCarousel
    ? teamMembers.slice(startIndex, startIndex + visibleCount)
    : teamMembers;

  const canGoPrevious = startIndex > 0;
  const canGoNext = startIndex < maxStartIndex;

  const handlePrevious = () => {
    if (!canGoPrevious) return;

    setStartIndex((current) => Math.max(current - visibleCount, 0));
  };

  const handleNext = () => {
    if (!canGoNext) return;

    setStartIndex((current) => Math.min(current + visibleCount, maxStartIndex));
  };

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

        <div className="mt-12 flex items-center gap-4">
          {hasCarousel && (
            <button
              type="button"
              onClick={handlePrevious}
              disabled={!canGoPrevious}
              aria-label="Previous team members"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-500 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:translate-y-0 disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50 disabled:text-slate-300 disabled:shadow-none"
            >
              <ArrowIcon direction="left" />
            </button>
          )}

          <div className="flex-1">
            <ul
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              aria-label="Team members"
              aria-live={hasCarousel ? 'polite' : undefined}
            >
              {visibleMembers.map((member) => (
                <li key={member.id} className="flex">
                  <TeamMemberCard member={member} />
                </li>
              ))}
            </ul>
          </div>

          {hasCarousel && (
            <button
              type="button"
              onClick={handleNext}
              disabled={!canGoNext}
              aria-label="Next team members"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-500 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:translate-y-0 disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50 disabled:text-slate-300 disabled:shadow-none"
            >
              <ArrowIcon direction="right" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
