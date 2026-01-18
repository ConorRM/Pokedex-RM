export interface PokemonEntry {
    name: string;
    apiId: number;
    key: string;
    isMega: boolean;
    displayId: string;
    isBase: boolean;
    isTrainer: boolean;
    isCustom?: boolean;
    cardImage?: string | null;
    _sortWeight?: number;
}

export interface BinderEntry {
    url?: string;
    fanArtUrl?: string;
    dreamUrl?: string;
    idealUrl?: string;
    name?: string;
    owned?: boolean;
    value?: string;
    cardType?: string;
}

export type Binder = Record<string, BinderEntry>;
export type CustomSlots = Record<string, string[]>;

export interface FilterSettings {
    showOwned: boolean;
    showNotOwned: boolean;
    showGen1Only: boolean;
    showBase151: boolean;
    show1999: boolean;
    showSlots: boolean;
    showClown: boolean;
    showDream: boolean;
    showIdeal: boolean;
    showTrainers: boolean;
    showStandard: boolean;
    showEX: boolean;
    showGX: boolean;
    showV: boolean;
    showVMAX: boolean;
    showVSTAR: boolean;
    showMEGA: boolean;
}

export interface RawPokemonData {
    name?: string;
    cardImage?: string;
    isMega?: boolean;
    // It can also be just a string
}
