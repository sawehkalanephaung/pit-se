import { useEffect, useMemo, useState } from 'react';
import { simulationSummaries, SimulationSummary } from '../data/simulations';
import { useDebouncedValue } from './use_debounced_value';

export interface UseSimulationsOptions {
  searchTerm?: string;
  debounceMs?: number;
}

export interface UseSimulationsResult {
  allSimulations: SimulationSummary[];
  simulations: SimulationSummary[];
  loading: boolean;
  empty: boolean;
}

export function useSimulations({
  searchTerm = '',
  debounceMs = 300,
}: UseSimulationsOptions = {}): UseSimulationsResult {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<SimulationSummary[]>([]);

  const debouncedSearchTerm = useDebouncedValue(searchTerm.trim().toLowerCase(), debounceMs);

  useEffect(() => {
    setLoading(true);

    const timeout = window.setTimeout(() => {
      setData(simulationSummaries);
      setLoading(false);
    }, 600);

    return () => window.clearTimeout(timeout);
  }, []);

  const filteredSimulations = useMemo(() => {
    if (!debouncedSearchTerm) {
      return data;
    }

    return data.filter((simulation) =>
      simulation.name.toLowerCase().includes(debouncedSearchTerm)
    );
  }, [data, debouncedSearchTerm]);

  return {
    allSimulations: data,
    simulations: filteredSimulations,
    loading,
    empty: !loading && filteredSimulations.length === 0,
  };
}
