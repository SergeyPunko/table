export function generateHslColor(id?: string): string {
  if (!id) {
    const hue = Math.floor(Math.random() * 360);
    const saturation = 45 + Math.floor(Math.random() * 25);
    const lightness = 65 + Math.floor(Math.random() * 15);
    return `${hue}, ${saturation}%, ${lightness}%`;
  }

  const lastSixChars = id.slice(-6).padStart(6, '0');

  const part1 = parseInt(lastSixChars.substring(0, 2), 16) || 0;
  const part2 = parseInt(lastSixChars.substring(2, 4), 16) || 0;
  const part3 = parseInt(lastSixChars.substring(4, 6), 16) || 0;

  const hue = Math.floor((part1 / 255) * 360);
  const saturation = 45 + Math.floor((part2 / 255) * 25);
  const lightness = 65 + Math.floor((part3 / 255) * 15);

  return `${hue}, ${saturation}%, ${lightness}%`;
}

export function getColorVariants(baseHSL: string) {
  const [hue, saturation] = baseHSL.split(', ');
  const sat = saturation.replace('%', '');

  return {
    header: `hsl(${hue}, ${sat}%, 74%)`,
    background: `hsl(${hue}, ${sat}%, 98%)`,
    timeBackground: `hsl(${hue}, ${sat}%, 85%)`,
    text: `hsl(${hue}, ${sat}%, 35%)`,
  };
}

export function getOccupancyColorClass(occupancy: number, maxCapacity: number): string {
  const percentage = (occupancy / maxCapacity) * 100;

  if (percentage < 50) return 'red';
  if (percentage < 75) return 'yellow';
  return 'green';
}