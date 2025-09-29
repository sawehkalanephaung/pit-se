import { Link } from 'react-router-dom';
import { SimulationSummary } from '../../data/simulations';
import { classNames } from '../../utils/class_names';

export interface SimulationCardProps {
  simulation: SimulationSummary;
}

export function SimulationCard({ simulation }: SimulationCardProps) {
  const { id, name, description, category, thumbnailUrl } = simulation;

  return (
    <li>
      <Link
        to={`/simulations/${id}`}
        className={classNames(
          'group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500',
          'hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl'
        )}
        aria-label={`View details for ${name}`}
      >
        <div className="relative aspect-video overflow-hidden bg-slate-100">
          <img
            src={thumbnailUrl}
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4 px-5 py-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
            <span className="whitespace-nowrap rounded-full border border-blue-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
              {category}
            </span>
          </div>
          <p className="text-sm text-slate-600">{description}</p>
          <div className="mt-auto flex justify-end">
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
              Try →
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default SimulationCard;
