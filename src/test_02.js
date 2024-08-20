const players = [
  { name: 'мечник', health: '10' },
  { name: 'маг', health: '100' },
  { name: 'лучник', health: '45' },
];

export function levelHealth(level) {
  if (level.health > 50) {
    return 'healthy';
  }
  if (level.health < 15) {
    return 'critical';
  }
  return 'wounded';
}

export const logo = players.sort((player1, player2) => player2.health - player1.health);
