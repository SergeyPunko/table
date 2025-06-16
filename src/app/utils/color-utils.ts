export function generateRandomHSL(): string {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 45 + Math.floor(Math.random() * 25); // 45-70%
  const lightness = 65 + Math.floor(Math.random() * 15); // 65-80%
  return `${hue}, ${saturation}%, ${lightness}%`;
}

export function getColorVariants(baseHSL: string) {
  const [hue, saturation] = baseHSL.split(', ');
  const sat = saturation.replace('%', '');

  return {
    header: `hsl(${hue}, ${sat}%, 74%)`,
    background: `hsl(${hue}, ${sat}%, 98%)`,
    timeBackground: `hsl(${hue}, ${sat}%, 93%)`,
    text: `hsl(${hue}, ${sat}%, 57%)`,
    border: `hsl(${hue}, ${sat}%, 85%)`
  };
}

export function getOccupancyColor(occupancy: number, maxCapacity: number): string {
  const percentage = (occupancy / maxCapacity) * 100;

  if (percentage < 50) return 'bg-red-500';
  if (percentage < 75) return 'bg-yellow-500';
  return 'bg-green-500';
}