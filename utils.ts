import { PokemonEntry, Binder, CustomSlots } from './types';

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

export const parseCSVData = (csvContent: string): { binder: Binder; extras: PokemonEntry[]; slots: CustomSlots } => {
    const lines = csvContent.split("\n");
    const newBinder: Binder = {};
    const newExtras: PokemonEntry[] = [];
    const newSlots: CustomSlots = {};
    
    for(let i=1; i<lines.length; i++) {
        if (!lines[i].trim()) continue;
        const row = parseCSVRow(lines[i]); 
        if (row.length < 9) continue;
        
        // CSV Structure:
        // SystemKey, Name, ApiId, DisplayId, Category, ParentKey, Owned, Value, ImageURL, FanArtURL, CardType, DreamURL, IdealURL, IsTrainer
        const [key, name, apiId, displayId, category, parentKey, ownedStr, value, url, fanArtUrl, cardType, dreamUrl, idealUrl, isTrainerStr] = row;
        
        const isOwned = ownedStr === "TRUE";
        const isTrainer = isTrainerStr === "TRUE";
        const typeVal = cardType || "standard";
        
        // If the entry has ANY collected data, add to binder
        if (isOwned || value || url || name || fanArtUrl || dreamUrl || idealUrl || typeVal !== "standard") {
            newBinder[key] = { 
                name: name, 
                owned: isOwned, 
                value: value, 
                url: url, 
                fanArtUrl: fanArtUrl || "", 
                dreamUrl: dreamUrl || "", 
                idealUrl: idealUrl || "",
                cardType: typeVal 
            };
        }
        
        // If it is a Manual entry (added via "Manual Input"), add to extraPokemon
        if (category === "Manual") {
            newExtras.push({ 
                name: name, 
                apiId: parseInt(apiId) || 0, 
                key: key, 
                isMega: false, 
                displayId: displayId, 
                cardImage: null, 
                isTrainer: isTrainer, 
                isBase: false 
            });
        }
        
        // If it is a Slot (child of another card), add to customSlots
        if (category === "Slot" && parentKey) {
            if (!newSlots[parentKey]) newSlots[parentKey] = [];
            newSlots[parentKey].push(key);
        }
    }
    
    return { binder: newBinder, extras: newExtras, slots: newSlots };
};