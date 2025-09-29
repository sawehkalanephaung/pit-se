import { FormEvent, useMemo, useState } from 'react';
import { SimulationCategory } from '../../data/simulations';
import { useSimulations } from '../../hooks/use_simulations';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import SimulationCard from '../../components/cards/simulation_card';
import SimulationCardSkeleton from '../../components/cards/simulation_card_skeleton';
import { classNames } from '../../utils/class_names';

const categoryFilters: Array<SimulationCategory | 'All'> = [
  'All',
  'Physics',
  'Chemistry',
  'Earth & Space',
  'Mathematics',
];

export function BrowseSimulations() {
  const [selectedCategory, setSelectedCategory] = useState<SimulationCategory | 'All'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const { simulations, loading, empty, allSimulations } = useSimulations({ searchTerm });

  const filteredSimulations = useMemo(() => {
    if (selectedCategory === 'All') {
      return simulations;
    }

    return simulations.filter((simulation) => simulation.category === selectedCategory);
  }, [simulations, selectedCategory]);

  const showEmptyState = !loading && (empty || filteredSimulations.length === 0);

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section
      id="simulations"
      className="border-t border-slate-100 bg-slate-50"
      aria-labelledby="browse-simulations-title"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
              Browse Simulations
            </p>
            <h2 id="browse-simulations-title" className="text-3xl font-bold text-slate-900 md:text-4xl">
              Discover Physics, Math, Chemistry, Earth Science, and more.
            </h2>
            <p className="max-w-2xl text-sm text-slate-600">
              Filter simulations by subject or search by name to find your next interactive lesson.
            </p>
          </div>
          <form className="w-full max-w-xs" role="search" aria-label="Search simulations" onSubmit={handleSearchSubmit}>
            <Input
              type="search"
              label="Search simulations"
              placeholder="Search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </form>
        </div>

        <div className="mt-8 flex flex-wrap gap-3" role="group" aria-label="Filter simulations by subject">
          {categoryFilters.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <Button
                key={category}
                variant={isActive ? 'primary' : 'secondary'}
                onClick={() => setSelectedCategory(category)}
                aria-pressed={isActive}
              >
                {category}
              </Button>
            );
          })}
        </div>

        <div className="mt-10">
          {loading ? (
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" aria-live="polite" aria-busy="true">
              {Array.from({ length: 6 }).map((_, index) => (
                <li key={index}>
                  <SimulationCardSkeleton />
                </li>
              ))}
            </ul>
          ) : showEmptyState ? (
            <div
              className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-8 py-16 text-center"
              role="status"
              aria-live="polite"
            >
              <p className="text-lg font-semibold text-slate-900">No simulations found</p>
              <p className="mt-2 max-w-md text-sm text-slate-600">
                Try adjusting your search or selecting a different subject filter to discover more simulations.
              </p>
            </div>
          ) : (
            <ul
              className={classNames(
                'grid gap-6',
                filteredSimulations.length >= 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'
              )}
              aria-live="polite"
            >
              {filteredSimulations.map((simulation) => (
                <SimulationCard key={simulation.id} simulation={simulation} />
              ))}
            </ul>
          )}
        </div>

        <div className="mt-10 flex justify-center">
          <Button as="a" href="#" variant="secondary" className="px-8" aria-label="See more simulations">
            See more
          </Button>
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {filteredSimulations.length} of {allSimulations.length} simulations.
        </p>
      </div>
    </section>
  );
}

export default BrowseSimulations;
