export type SimulationCategory = 'Physics' | 'Chemistry' | 'Earth & Space' | 'Mathematics';

export interface SimulationSummary {
  id: string;
  name: string;
  description: string;
  category: SimulationCategory;
  thumbnailUrl: string;
}

export const simulationSummaries: SimulationSummary[] = [
  {
    id: 'newtons-cradle',
    name: "Newton's Cradle",
    description: 'Explore momentum transfer and energy conservation with a classic physics toy.',
    category: 'Physics',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=640&q=80',
  },
  {
    id: 'molecular-bonds',
    name: 'Molecular Bonds',
    description: 'Build molecules and visualize bond strengths across common compounds.',
    category: 'Chemistry',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=640&q=80',
  },
  {
    id: 'graphing-functions',
    name: 'Graphing Functions',
    description: 'Manipulate linear and quadratic functions to see how coefficients change the graph.',
    category: 'Mathematics',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=640&q=80',
  },
  {
    id: 'plate-tectonics',
    name: 'Plate Tectonics',
    description: 'Simulate plate movements to understand earthquakes, volcanoes, and mountain formation.',
    category: 'Earth & Space',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1462332420958-a05d1e002413?auto=format&fit=crop&w=640&q=80',
  },
  {
    id: 'circuit-builder',
    name: 'Circuit Builder',
    description: 'Design simple circuits and measure current, voltage, and resistance instantly.',
    category: 'Physics',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=640&q=80',
  },
  {
    id: 'periodic-trends',
    name: 'Periodic Trends',
    description: 'Discover patterns in the periodic table and predict element behaviors.',
    category: 'Chemistry',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1581092334410-7d83e3e035bc?auto=format&fit=crop&w=640&q=80',
  },
  {
    id: 'solar-system-tour',
    name: 'Solar System Tour',
    description: 'Travel through our solar system and compare planetary composition and scale.',
    category: 'Earth & Space',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1580428180126-8ef6104719c8?auto=format&fit=crop&w=640&q=80',
  },
  {
    id: 'probability-lab',
    name: 'Probability Lab',
    description: 'Run chance experiments to see probability distributions come to life.',
    category: 'Mathematics',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=640&q=80',
  },
];
