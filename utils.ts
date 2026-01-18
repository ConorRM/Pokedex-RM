import { PokemonEntry } from './types';

export const parseCSVRow = (str: string): string[] => {
    const result = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === '"') {
            if (inQuotes && str[i + 1] === '"') { current += '"'; i++; } 
            else { inQuotes = !inQuotes; }
        } else if (char === ',' && !inQuotes) { result.push(current); current = ''; } 
        else { current += char; }
    }
    result.push(current);
    return result;
};

export const getDefaultImage = (entry: PokemonEntry): string => {
    if (entry.cardImage) return entry.cardImage;
    if (entry.isTrainer) return 'https://tcg.pokemon.com/assets/img/global/tcg-card-back-2x.jpg';
    if (entry.apiId <= 151) return `https://images.pokemontcg.io/sv3pt5/${entry.apiId}.png`;
    return 'https://tcg.pokemon.com/assets/img/global/tcg-card-back-2x.jpg';
};
