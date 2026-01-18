import React, { useState, useEffect, useMemo, useRef } from 'react';
import { PokemonEntry, Binder, CustomSlots, FilterSettings } from './types.ts';
import { RAW_POKEMON, DEFAULT_COLLECTION_CSV } from './constants.ts';
import { parseCSVData } from './utils.ts';
import { 
    IconSearch, IconCheck, IconDna, IconDownload, IconUpload, IconTrash, 
    IconSort, IconEye, IconMenu, IconX, IconGraph, IconFilter, IconSave, 
    IconStar, IconSparkles 
} from './components/Icons.tsx';
import { Toast, ConfirmDialog } from './components/UI.tsx';
import StatsBar from './components/StatsBar.tsx';
import DexJumpSidebar from './components/DexJumpSidebar.tsx';
import GridView from './components/GridView.tsx';
import DetailView from './components/DetailView.tsx';
import AddPokemonModal from './components/AddPokemonModal.tsx';

const App = () => {
    const [view, setView] = useState<'grid' | 'detail'>('grid');
    const [selectedEntry, setSelectedEntry] = useState<PokemonEntry | null>(null);
    const [binder, setBinder] = useState<Binder>({});
    const [customSlots, setCustomSlots] = useState<CustomSlots>({}); 
    const [extraPokemon, setExtraPokemon] = useState<PokemonEntry[]>([]); 
    const [searchQuery, setSearchQuery] = useState("");
    const [showAddModal, setShowAddModal] = useState(false);
    const [toastMsg, setToastMsg] = useState<string | null>(null);
    const [confirmConfig, setConfirmConfig] = useState<{ msg: string; action: () => void } | null>(null);
    const [showMobileSearch, setShowMobileSearch] = useState(false);
    const [showSortMenu, setShowSortMenu] = useState(false);
    const [showSaveMenu, setShowSaveMenu] = useState(false);
    const [showViewMenu, setShowViewMenu] = useState(false);
    const [isFabOpen, setIsFabOpen] = useState(false);
    const [sortMode, setSortMode] = useState<'dex' | 'value-high' | 'value-low'>('dex');
    
    // Filter States
    const [showFilters, setShowFilters] = useState(false);
    const [showStats, setShowStats] = useState(false); 
    const [filterSettings, setFilterSettings] = useState<FilterSettings>({
        showOwned: true, 
        showNotOwned: true,
        showGen1Only: false, 
        showBase151: false, 
        show1999: false, 
        showSlots: true,
        showClown: false, 
        showDream: false,
        showIdeal: false,
        showTrainers: true, 
        showStandard: true,
        showEX: true, showGX: true, showV: true, showVMAX: true, showVSTAR: true, showMEGA: true,
    });
    
    const [gridColumns, setGridColumns] = useState(0); 
    const [savedScroll, setSavedScroll] = useState(0);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const savedBinder = localStorage.getItem('project151_binder');
        const savedSlots = localStorage.getItem('project151_slots');
        const savedExtras = localStorage.getItem('project151_extras');
        const savedColumns = localStorage.getItem('project151_gridColumns');
        
        if (savedBinder && savedBinder !== "{}" && savedBinder !== "undefined") {
            try {
                setBinder(JSON.parse(savedBinder));
                if (savedSlots) setCustomSlots(JSON.parse(savedSlots));
                if (savedExtras) setExtraPokemon(JSON.parse(savedExtras));
            } catch (e) {
                console.error("Failed to parse local storage", e);
                loadDefaults();
            }
        } else {
            loadDefaults();
        }

        if (savedColumns) setGridColumns(parseInt(savedColumns));
    }, []);

    const loadDefaults = () => {
        const { binder: defaultBinder, extras: defaultExtras, slots: defaultSlots } = parseCSVData(DEFAULT_COLLECTION_CSV);
        setBinder(defaultBinder);
        setExtraPokemon(defaultExtras);
        setCustomSlots(defaultSlots);
        localStorage.setItem('project151_binder', JSON.stringify(defaultBinder));
        localStorage.setItem('project151_extras', JSON.stringify(defaultExtras));
        localStorage.setItem('project151_slots', JSON.stringify(defaultSlots));
    };

    useEffect(() => {
        if (view === 'detail') {
            window.scrollTo(0, 0);
        } else {
            const timer = setTimeout(() => {
                window.scrollTo(0, savedScroll);
            }, 0);
            return () => clearTimeout(timer);
        }
    }, [view, savedScroll]);

    const fullEntries = useMemo(() => {
        let currentDex = 1;
        let result: PokemonEntry[] = [];
        
        RAW_POKEMON.forEach(raw => {
            let entry: PokemonEntry;
            if (typeof raw === 'string') {
                entry = { name: raw, apiId: currentDex, key: currentDex.toString(), isMega: false, displayId: currentDex.toString().padStart(3, '0'), isBase: true, isTrainer: false };
                currentDex++;
                result.push(entry);
            } else if (raw && typeof raw === 'object') {
                entry = { 
                    name: raw.name || "", 
                    cardImage: raw.cardImage,
                    apiId: currentDex, 
                    key: currentDex.toString(), 
                    isMega: false, 
                    displayId: currentDex.toString().padStart(3, '0'), 
                    isBase: true, 
                    isTrainer: false 
                };
                currentDex++;
                result.push(entry);
            }
        });

        const sortedExtras = [...extraPokemon].sort((a, b) => a.apiId - b.apiId);
        
        if (filterSettings.showGen1Only) {
            const gen1Extras = sortedExtras.filter(e => e.apiId <= 151);
            result = [...result, ...gen1Extras];
        } else {
            result = [...result, ...sortedExtras];
        }

        if (!filterSettings.showTrainers) {
            result = result.filter(e => !e.isTrainer);
        }

        result.sort((a, b) => {
            if (a.apiId !== b.apiId) return a.apiId - b.apiId;
            if (a.isTrainer !== b.isTrainer) return a.isTrainer ? 1 : -1;
            return 0;
        });

        let finalResult: PokemonEntry[] = [];
        const getRarityWeight = (r: string) => {
                if (r === 'standard') return 0;
                if (r === 'EX') return 1;
                if (r === 'GX') return 2;
                if (r === 'V') return 3;
                if (r === 'VMAX') return 4;
                if (r === 'VSTAR') return 5;
                if (r === 'MEGA') return 6;
                return 0;
        };

        result.forEach(entry => {
            finalResult.push(entry);
            if (filterSettings.showSlots && customSlots[entry.key]) {
                const slotEntries = customSlots[entry.key].map(childKey => {
                    const cardData = binder[childKey];
                    const rarity = cardData ? (cardData.cardType || "standard") : "standard";
                    return {
                        ...entry,
                        key: childKey,
                        isCustom: true,
                        isBase: false,
                        name: entry.name + " (Slot)",
                        _sortWeight: getRarityWeight(rarity),
                        isTrainer: entry.isTrainer
                    };
                });
                slotEntries.sort((a, b) => (a._sortWeight || 0) - (b._sortWeight || 0));
                slotEntries.forEach(s => finalResult.push(s));
            }
        });
        
        if (sortMode === 'value-high') {
             finalResult.sort((a, b) => {
                 const valA = parseFloat(binder[a.key]?.value || "0");
                 const valB = parseFloat(binder[b.key]?.value || "0");
                 return valB - valA;
             });
        } else if (sortMode === 'value-low') {
            finalResult.sort((a, b) => {
                 const valA = parseFloat(binder[a.key]?.value || "0");
                 const valB = parseFloat(binder[b.key]?.value || "0");
                 return valA - valB;
             });
        }

        return finalResult;
    }, [customSlots, extraPokemon, filterSettings, binder, sortMode]);

    const stats = useMemo(() => {
        const currentList = fullEntries;
        const owned = currentList.filter(e => binder[e.key]?.owned).length;
        return { total: currentList.length, owned };
    }, [fullEntries, binder]);

    const handleEntrySelect = (entry: PokemonEntry) => {
        setSavedScroll(window.scrollY);
        setSelectedEntry(entry);
        setView('detail');
    };

    const saveCardToBinder = (key: string, data: any) => {
        const existing = binder[key] || {};
        const ownedStatus = (data.owned !== undefined) ? data.owned : (existing.owned || false);
        const cardValue = (data.value !== undefined) ? data.value : (existing.value || "");
        
        const newBinder = { 
            ...binder, 
            [key]: { 
                url: data.url, 
                fanArtUrl: data.fanArtUrl,
                dreamUrl: data.dreamUrl,
                idealUrl: data.idealUrl,
                name: data.name, 
                owned: ownedStatus, 
                value: cardValue,
                cardType: data.cardType || "standard"
            } 
        };
        setBinder(newBinder);
        localStorage.setItem('project151_binder', JSON.stringify(newBinder));
        setToastMsg(`Saved ${data.name}!`);
    };

    const toggleOwnedStatus = (key: string) => {
        const entry = binder[key] || {};
        const newBinder = { ...binder, [key]: { ...entry, owned: !entry.owned } };
        setBinder(newBinder);
        localStorage.setItem('project151_binder', JSON.stringify(newBinder));
    };

    const addCustomSlot = (parentEntry: PokemonEntry) => {
        const newKey = `${parentEntry.key}-extra-${Date.now()}`;
        const existingChildren = customSlots[parentEntry.key] || [];
        const newSlots = { ...customSlots, [parentEntry.key]: [...existingChildren, newKey] };
        setCustomSlots(newSlots);
        localStorage.setItem('project151_slots', JSON.stringify(newSlots));
        
        const newEntry = { ...parentEntry, key: newKey, isCustom: true, name: parentEntry.name + " (Slot)" };
        setSelectedEntry(newEntry);
        setToastMsg("Extra Slot Added!");
    };

    const removeCustomSlot = (entry: PokemonEntry) => {
        setConfirmConfig({
            msg: "Delete this extra slot permanently?",
            action: () => {
                const parentKey = Object.keys(customSlots).find(pKey => customSlots[pKey].includes(entry.key));
                if (parentKey) {
                    const newChildren = customSlots[parentKey].filter(k => k !== entry.key);
                    const newSlots = { ...customSlots, [parentKey]: newChildren };
                    setCustomSlots(newSlots);
                    localStorage.setItem('project151_slots', JSON.stringify(newSlots));
                    const newBinder = { ...binder };
                    delete newBinder[entry.key];
                    setBinder(newBinder);
                    localStorage.setItem('project151_binder', JSON.stringify(newBinder));
                    setView('grid');
                    setToastMsg("Slot Removed");
                }
            }
        });
    };
    
    const deleteExtraPokemon = (entry: PokemonEntry) => {
        setConfirmConfig({
            msg: `Remove ${entry.name} from your collection?`,
            action: () => {
                const newExtras = extraPokemon.filter(p => p.key !== entry.key);
                setExtraPokemon(newExtras);
                localStorage.setItem('project151_extras', JSON.stringify(newExtras));
                const newBinder = { ...binder };
                delete newBinder[entry.key];
                const newSlots = {...customSlots};
                delete newSlots[entry.key];
                setBinder(newBinder);
                setCustomSlots(newSlots);
                localStorage.setItem('project151_binder', JSON.stringify(newBinder));
                localStorage.setItem('project151_slots', JSON.stringify(newSlots));
                setView('grid');
                setToastMsg("Entry Removed");
            }
        });
    };
    
    const swapSlotWithParent = (childEntry: PokemonEntry) => {
        const parentKey = Object.keys(customSlots).find(pKey => customSlots[pKey].includes(childEntry.key));
        if (!parentKey) return;
        
        setConfirmConfig({
            msg: `Promote this card to the Main Entry? The current Main card will move to this slot.`,
            action: () => {
                const parentData = binder[parentKey] || {};
                const childData = binder[childEntry.key] || {};
                
                const newBinder = {
                    ...binder,
                    [parentKey]: { ...childData },
                    [childEntry.key]: { ...parentData }
                };
                
                setBinder(newBinder);
                localStorage.setItem('project151_binder', JSON.stringify(newBinder));
                setToastMsg("Entries Swapped!");
            }
        });
    };

    const handleAddPokemon = (newPoke: PokemonEntry) => {
        const newList = [...extraPokemon, newPoke];
        setExtraPokemon(newList);
        localStorage.setItem('project151_extras', JSON.stringify(newList));
        setShowAddModal(false);
        setToastMsg(`${newPoke.name} Added!`);
    };

    const handleSetGridColumns = (cols: number) => {
        setGridColumns(cols);
        localStorage.setItem('project151_gridColumns', cols.toString());
    };

    const handleExportCSV = () => {
        const generateAllEntriesForExport = () => {
            let curDex = 1;
            let res: PokemonEntry[] = [];
            RAW_POKEMON.forEach(raw => {
                if (typeof raw === 'string') {
                    res.push({ name: raw, apiId: curDex, key: curDex.toString(), isMega: false, displayId: curDex.toString().padStart(3, '0'), isBase: true, isTrainer: false });
                    curDex++;
                } else {
                    res.push({ name: raw.name || "", cardImage: raw.cardImage, apiId: curDex, key: curDex.toString(), isMega: false, displayId: curDex.toString().padStart(3, '0'), isBase: true, isTrainer: false });
                    curDex++;
                }
            });
            extraPokemon.forEach(e => res.push(e));
            let fin: PokemonEntry[] = [];
            res.forEach(e => {
                fin.push(e);
                if (customSlots[e.key]) {
                    customSlots[e.key].forEach(ck => {
                        fin.push({ ...e, key: ck, isCustom: true, name: e.name + " (Slot)", isTrainer: e.isTrainer });
                    });
                }
            });
            return fin;
        };

        const allEntries = generateAllEntriesForExport();
        const headers = ["SystemKey", "Name", "ApiId", "DisplayId", "Category", "ParentKey", "Owned", "Value", "ImageURL", "FanArtURL", "CardType", "DreamURL", "IdealURL", "IsTrainer"];
        const rows = [headers.join(",")];

        allEntries.forEach(entry => {
            const b = binder[entry.key] || {};
            let category = "Base";
            if (entry.isMega) category = "Mega";
            if (extraPokemon.find(e => e.key === entry.key)) category = "Manual";
            if (entry.isCustom) category = "Slot";
            let parentKey = "";
            if (entry.isCustom) parentKey = Object.keys(customSlots).find(p => customSlots[p].includes(entry.key)) || "";

            const safeName = `"${(b.name || entry.name).replace(/"/g, '""')}"`;
            const safeValue = `"${(b.value || "").replace(/"/g, '""')}"`;
            const safeUrl = `"${(b.url || "").replace(/"/g, '""')}"`;
            const safeFanArt = `"${(b.fanArtUrl || "").replace(/"/g, '""')}"`;
            const safeDream = `"${(b.dreamUrl || "").replace(/"/g, '""')}"`;
            const safeIdeal = `"${(b.idealUrl || "").replace(/"/g, '""')}"`;
            const safeCardType = `"${(b.cardType || "standard").replace(/"/g, '""')}"`;

            const hasData = b.owned || b.url || b.value || b.fanArtUrl || b.dreamUrl || b.idealUrl || (b.cardType && b.cardType !== 'standard');
            if (hasData || category === "Manual" || category === "Slot") {
                const row = [entry.key, safeName, entry.apiId, entry.displayId, category, parentKey, b.owned ? "TRUE" : "FALSE", safeValue, safeUrl, safeFanArt, safeCardType, safeDream, safeIdeal, entry.isTrainer ? "TRUE" : "FALSE"];
                rows.push(row.join(","));
            }
        });

        const blob = new Blob([rows.join("\n")], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'project151_collection.csv';
        a.click();
        URL.revokeObjectURL(url);
    };

    const handleImportCSV = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const text = e.target?.result as string;
                const { binder: newBinder, extras: newExtras, slots: newSlots } = parseCSVData(text);
                setBinder(newBinder);
                setExtraPokemon(newExtras);
                setCustomSlots(newSlots);
                localStorage.setItem('project151_binder', JSON.stringify(newBinder));
                localStorage.setItem('project151_extras', JSON.stringify(newExtras));
                localStorage.setItem('project151_slots', JSON.stringify(newSlots));
                setToastMsg("Imported!");
            } catch (err) {
                setToastMsg("Import Error");
            }
            event.target.value = '';
        };
        reader.readAsText(file);
    };

    const toggleFilter = (key: keyof FilterSettings) => setFilterSettings(prev => ({ ...prev, [key]: !prev[key] }));

    return (
        <div className="min-h-screen pb-24">
            <Toast msg={toastMsg} onClose={() => setToastMsg(null)} />
            <ConfirmDialog config={confirmConfig} onCancel={() => setConfirmConfig(null)} />
            <input type="file" ref={fileInputRef} onChange={handleImportCSV} accept=".csv" className="hidden" />

            {view === 'grid' && <DexJumpSidebar entries={fullEntries} />}
            
            {view === 'grid' && (
                <div className="fixed bottom-6 right-6 z-40 flex flex-col-reverse gap-4 items-end">
                    <button 
                        onClick={() => setIsFabOpen(!isFabOpen)} 
                        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center border-2 transition-all duration-300 z-50 ${isFabOpen ? 'bg-slate-700 border-slate-500 rotate-90 text-white' : 'bg-indigo-600 border-indigo-400 text-white'}`}
                    >
                        {isFabOpen ? <IconX /> : <IconMenu />}
                    </button>

                    <div className={`flex flex-col-reverse gap-3 items-end transition-all duration-300 ${isFabOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                        <div className="relative flex items-center justify-end">
                            {showMobileSearch && (
                                <div className="absolute right-14 animate-zoom origin-right z-50">
                                    <input autoFocus type="text" placeholder="Search..." className="bg-slate-800/95 border border-indigo-500 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none shadow-2xl w-48 text-white" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                                </div>
                            )}
                            <button onClick={() => setShowMobileSearch(!showMobileSearch)} className="w-10 h-10 rounded-full shadow-lg bg-slate-800/90 border border-slate-600 text-indigo-400 flex items-center justify-center"><IconSearch /></button>
                        </div>
                        <div className="relative flex items-center justify-end">
                            {showSortMenu && (
                                <div className="absolute right-14 top-0 bg-slate-800 border border-slate-600 rounded-xl p-2 shadow-2xl flex flex-col gap-1 w-32 animate-zoom origin-right z-50">
                                    <button onClick={() => setSortMode('dex')} className={`px-2 py-1.5 rounded text-[10px] font-bold text-left ${sortMode === 'dex' ? "bg-indigo-600 text-white" : "text-slate-400"}`}>Dex Order</button>
                                    <button onClick={() => setSortMode('value-high')} className={`px-2 py-1.5 rounded text-[10px] font-bold text-left ${sortMode === 'value-high' ? "bg-indigo-600 text-white" : "text-slate-400"}`}>Value High</button>
                                    <button onClick={() => setSortMode('value-low')} className={`px-2 py-1.5 rounded text-[10px] font-bold text-left ${sortMode === 'value-low' ? "bg-indigo-600 text-white" : "text-slate-400"}`}>Value Low</button>
                                </div>
                            )}
                            <button onClick={() => setShowSortMenu(!showSortMenu)} className="w-10 h-10 rounded-full shadow-lg bg-slate-800/90 border border-slate-600 text-indigo-400 flex items-center justify-center"><IconSort /></button>
                        </div>
                        <div className="relative flex items-center justify-end">
                            {showViewMenu && (
                                <div className="absolute right-14 bottom-0 bg-slate-800 border border-slate-600 rounded-xl p-3 shadow-2xl flex flex-col gap-3 w-48 animate-zoom origin-bottom-right z-50">
                                    <div className="flex flex-col gap-2">
                                        <button onClick={() => toggleFilter('showOwned')} className={`px-3 py-2 rounded-lg text-xs font-bold border flex items-center justify-between ${filterSettings.showOwned ? "bg-green-900/50 text-green-400 border-green-500" : "bg-slate-700 text-slate-500 border-slate-600"}`}><span>Show Owned</span>{filterSettings.showOwned && <IconCheck />}</button>
                                        <button onClick={() => toggleFilter('showNotOwned')} className={`px-3 py-2 rounded-lg text-xs font-bold border flex items-center justify-between ${filterSettings.showNotOwned ? "bg-rose-900/50 text-rose-400 border-rose-500" : "bg-slate-700 text-slate-500 border-slate-600"}`}><span>Show Missing</span>{filterSettings.showNotOwned && <IconCheck />}</button>
                                    </div>
                                    <div className="border-t border-slate-700 pt-2 flex flex-col gap-2">
                                        <button onClick={() => toggleFilter('showClown')} className={`px-3 py-2 rounded-lg text-xs font-bold border flex items-center justify-between ${filterSettings.showClown ? "bg-pink-900/50 text-pink-400 border-pink-500" : "bg-slate-700 text-slate-500 border-slate-600"}`}><span className="flex items-center gap-2">🤡 Fan Art</span>{filterSettings.showClown && <IconCheck />}</button>
                                        <button onClick={() => toggleFilter('showDream')} className={`px-3 py-2 rounded-lg text-xs font-bold border flex items-center justify-between ${filterSettings.showDream ? "bg-amber-900/50 text-amber-400 border-amber-500" : "bg-slate-700 text-slate-500 border-slate-600"}`}><span className="flex items-center gap-2"><IconStar /> Dream</span>{filterSettings.showDream && <IconCheck />}</button>
                                        <button onClick={() => toggleFilter('showIdeal')} className={`px-3 py-2 rounded-lg text-xs font-bold border flex items-center justify-between ${filterSettings.showIdeal ? "bg-cyan-900/50 text-cyan-400 border-cyan-500" : "bg-slate-700 text-slate-500 border-slate-600"}`}><span className="flex items-center gap-2"><IconSparkles /> Ideal</span>{filterSettings.showIdeal && <IconCheck />}</button>
                                    </div>
                                    <div className="border-t border-slate-700 pt-2 grid grid-cols-5 gap-1">
                                        {[0, 1, 2, 4, 6].map(col => (
                                            <button key={col} onClick={() => handleSetGridColumns(col)} className={`py-1 rounded text-xs font-bold border ${gridColumns === col ? 'bg-indigo-600 text-white' : 'bg-slate-700 text-slate-400'}`}>{col === 0 ? 'A' : col}</button>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <button onClick={() => setShowViewMenu(!showViewMenu)} className="w-10 h-10 rounded-full shadow-lg bg-slate-800/90 border border-slate-600 text-indigo-400 flex items-center justify-center"><IconEye /></button>
                        </div>
                    </div>
                </div>
            )}

            <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-700 shadow-xl">
                <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.location.reload()}>
                        <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-slate-900 font-bold"><IconDna /></div>
                        <h1 className="text-xl font-bold tracking-tight text-white">Pro-151 <span className="text-indigo-400 text-sm font-normal">v3.5</span></h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={() => setShowStats(!showStats)} className={`p-2 rounded-full transition-colors ${showStats ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}><IconGraph /></button>
                        <button onClick={() => setShowFilters(!showFilters)} className={`p-2 rounded-full transition-colors ${showFilters ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}><IconFilter /></button>
                        <div className="relative">
                            <button onClick={() => setShowSaveMenu(!showSaveMenu)} className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border ${showSaveMenu ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-slate-800 border-transparent text-slate-400'}`}><IconSave /> Data</button>
                            {showSaveMenu && (
                                <div className="absolute top-full right-0 mt-2 w-48 bg-slate-800 border border-slate-600 rounded-xl p-2 shadow-2xl flex flex-col gap-1 z-50 animate-zoom origin-top-right">
                                    <button onClick={() => { handleExportCSV(); setShowSaveMenu(false); }} className="px-3 py-2 rounded-lg text-xs font-bold text-left text-slate-300 flex items-center gap-3 hover:bg-slate-700"><IconDownload /> Export CSV</button>
                                    <button onClick={() => { fileInputRef.current?.click(); setShowSaveMenu(false); }} className="px-3 py-2 rounded-lg text-xs font-bold text-left text-slate-300 flex items-center gap-3 hover:bg-slate-700"><IconUpload /> Import CSV</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {view === 'grid' && showStats && <StatsBar binder={binder} totalCards={stats.total} ownedCards={stats.owned} />}
                {showFilters && (
                    <div className="border-t border-slate-800 bg-slate-900/95 backdrop-blur-sm p-4 flex flex-wrap gap-2">
                         {[
                            { key: 'showGen1Only', label: '151' },
                            { key: 'showBase151', label: 'NEW' },
                            { key: 'show1999', label: 'OG' },
                            { key: 'showSlots', label: 'Slots+' },
                            { key: 'showTrainers', label: 'Trainer' }
                        ].map(f => (
                            <button key={f.key} onClick={() => toggleFilter(f.key as keyof FilterSettings)} className={`px-4 py-1.5 rounded-full text-[11px] font-bold border ${filterSettings[f.key as keyof FilterSettings] ? "bg-indigo-600 text-white border-indigo-500" : "bg-slate-800 text-slate-400 border-slate-700"}`}>{f.label}</button>
                        ))}
                    </div>
                )}
            </header>

            {showAddModal && <AddPokemonModal onClose={() => setShowAddModal(false)} onAdd={handleAddPokemon} />}

            <main className="max-w-7xl mx-auto px-4 py-6">
                {view === 'grid' ? (
                    <GridView entries={fullEntries} searchQuery={searchQuery} binder={binder} gridColumns={gridColumns} filterSettings={filterSettings} onSelect={handleEntrySelect} onToggleOwned={toggleOwnedStatus} onOpenAddModal={() => setShowAddModal(true)} />
                ) : (
                    selectedEntry && <DetailView entry={selectedEntry} binderEntry={binder[selectedEntry.key]} onSave={saveCardToBinder} onToggleOwned={toggleOwnedStatus} onAddSlot={addCustomSlot} onRemoveSlot={removeCustomSlot} onSwapSlot={swapSlotWithParent} onDeletePokemon={deleteExtraPokemon} onBack={() => setView('grid')} filterSettings={filterSettings} />
                )}
            </main>
        </div>
    );
};

export default App;