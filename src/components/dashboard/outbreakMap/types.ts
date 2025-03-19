
export interface RegionData {
  id: string;
  name: string;
  level: 'high' | 'moderate' | 'low' | 'recovered';
  coordinates: [number, number];
  cases: number;
}

export const getLevelColor = (level: RegionData['level']): string => {
  switch (level) {
    case 'high':
      return '#FF6B6B'; // red
    case 'moderate':
      return '#FEC6A1'; // soft orange
    case 'low':
      return '#4CD964'; // green
    case 'recovered':
      return '#20C997'; // teal
    default:
      return '#8E9196'; // neutral gray
  }
};

export const regions: RegionData[] = [
  { id: '1', name: 'United States', level: 'moderate', coordinates: [-95.7129, 37.0902], cases: 2500 },
  { id: '2', name: 'Brazil', level: 'high', coordinates: [-51.9253, -14.2350], cases: 3800 },
  { id: '3', name: 'United Kingdom', level: 'low', coordinates: [-3.4360, 55.3781], cases: 860 },
  { id: '4', name: 'China', level: 'high', coordinates: [104.1954, 35.8617], cases: 4200 },
  { id: '5', name: 'India', level: 'high', coordinates: [78.9629, 20.5937], cases: 5100 },
  { id: '6', name: 'Australia', level: 'low', coordinates: [133.7751, -25.2744], cases: 310 },
  { id: '7', name: 'South Africa', level: 'moderate', coordinates: [22.9375, -30.5595], cases: 1750 },
  { id: '8', name: 'Japan', level: 'recovered', coordinates: [138.2529, 36.2048], cases: 990 },
  { id: '9', name: 'Russia', level: 'moderate', coordinates: [105.3188, 61.5240], cases: 2100 },
  { id: '10', name: 'Canada', level: 'recovered', coordinates: [-106.3468, 56.1304], cases: 580 }
];
