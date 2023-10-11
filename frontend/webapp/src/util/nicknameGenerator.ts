const adjectives = [
    'Spicy',
    'Angry',
    'Doubtful',
    'Genius',
    'Insane',
    'Lovely',
    'Conniving',
];

const nouns = [
    'Chinchilla',
    'Gecko',
    'Ostrich',
    'Whale',
    'Bullfrog',
    'Bunny',
];

export function generateNickname(): string {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];

    return `${adj} ${noun}`;
}