import React, { useState, useEffect } from 'react';
import { PokemonEntry, BinderEntry, FilterSettings } from '../types';
import { getDefaultImage } from '../utils';
import { 
    IconArrowLeft, IconChart, IconExchange, IconSave, IconPlus, IconTrash, 
    IconEye, IconImage, IconDollar, IconPalette, IconStar, IconSparkles, IconClipboard
} from './Icons';
import { ImagePreviewModal } from './UI';

interface DetailViewProps {
    entry: PokemonEntry;
    binderEntry?: BinderEntry;
    onSave: (key: string, data: BinderEntry) => void;
    onToggleOwned: (key: string) => void;
    onAddSlot: (entry: PokemonEntry) => void;
    onRemoveSlot: (entry: PokemonEntry) => void;
    onDeletePokemon: (entry: PokemonEntry) => void;
    onSwapSlot: (entry: PokemonEntry) => void;
    onBack: () => void;
    filterSettings: FilterSettings;
}

const DetailView: React.FC<DetailViewProps> = ({ 
    entry, binderEntry, onSave, onToggleOwned, onBack, 
    onAddSlot, onRemoveSlot, onDeletePokemon, onSwapSlot, filterSettings 
}) => {
    const [manualUrl, setManualUrl] = useState(binderEntry?.url || "");
    const [fanArtUrl, setFanArtUrl] = useState(binderEntry?.fanArtUrl || ""); 
    const [dreamUrl, setDreamUrl] = useState(binderEntry?.dreamUrl || ""); 
    const [idealUrl, setIdealUrl] = useState(binderEntry?.idealUrl || ""); 
    const [manualName, setManualName] = useState(binderEntry?.name || entry.name);
    const [manualValue, setManualValue] = useState(binderEntry?.value || "");
    const [selectedRarity, setSelectedRarity] = useState(binderEntry?.cardType || "standard");
    const [showImagePreview, setShowImagePreview] = useState(false);
    const [showExtraUrls, setShowExtraUrls] = useState(false);

    useEffect(() => {
        setManualUrl(binderEntry?.url || "");
        setFanArtUrl(binderEntry?.fanArtUrl || "");
        setDreamUrl(binderEntry?.dreamUrl || "");
        setIdealUrl(binderEntry?.idealUrl || "");
        setManualName(binderEntry?.name || entry.name);
        setManualValue(binderEntry?.value || "");
        setSelectedRarity(binderEntry?.cardType || "standard");
        
        if (binderEntry?.fanArtUrl || binderEntry?.dreamUrl || binderEntry?.idealUrl) {
            setShowExtraUrls(true);
        }
    }, [binderEntry, entry.name]);

    const handleManualSave = () => {
        onSave(entry.key, { 
            url: manualUrl, 
            fanArtUrl: fanArtUrl, 
            dreamUrl: dreamUrl, 
            idealUrl: idealUrl, 
            name: manualName, 
            owned: binderEntry?.owned || false, 
            value: manualValue, 
            cardType: selectedRarity 
        });
        onBack();
    };

    const handleMarketSearch = () => {
        const queryName = manualName || entry.name;
        const queryId = binderEntry?.value || entry.displayId; 
        const query = `site:pricecharting.com "${queryName}" "${queryId}" pokemon card`;
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=isch`;
        
        const w = window.innerWidth * 0.9;
        const h = window.innerHeight * 0.9;
        const left = (window.innerWidth - w) / 2;
        const top = (window.innerHeight - h) / 2;
        
        window.open(searchUrl, 'pricecharting_popup', `width=${w},height=${h},top=${top},left=${left},resizable=yes,scrollbars=yes`);
    };

    const handlePaste = async (setter: React.Dispatch<React.SetStateAction<string>>) => {
        try { const text = await navigator.clipboard.readText(); setter(text); } catch (err) { console.error("Paste failed", err); }
    };

    const isOwned = binderEntry?.owned || false;
    let displayImage = getDefaultImage(entry);
    let showingFanArt = false;
    let showingDream = false;
    let showingIdeal = false;

    if (idealUrl && filterSettings.showIdeal) {
        displayImage = idealUrl;
        showingIdeal = true;
    } else if (dreamUrl && filterSettings.showDream) {
        displayImage = dreamUrl;
        showingDream = true;
    } else if (fanArtUrl && filterSettings.showClown) { 
        displayImage = fanArtUrl; 
        showingFanArt = true; 
    } else if (manualUrl) {
        displayImage = manualUrl; 
    } else {
         if (idealUrl) { displayImage = idealUrl; showingIdeal = true; }
         else if (dreamUrl) { displayImage = dreamUrl; showingDream = true; }
         else if (fanArtUrl) { displayImage = fanArtUrl; showingFanArt = true; }
    }

    return (
        <div>
            {showImagePreview && <ImagePreviewModal src={displayImage} onClose={() => setShowImagePreview(false)} />}
            <div className="sticky top-[58px] z-30 bg-slate-900/95 backdrop-blur border-b border-slate-700 py-2 mb-4 -mx-4 px-4 shadow-lg flex flex-wrap gap-2 justify-between items-center">
                <button onClick={onBack} className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-bold text-sm"><IconArrowLeft /> Back</button>
                
                <div className="flex gap-2">
                    <button onClick={handleMarketSearch} className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-colors shadow-lg">
                        <IconChart /> Market
                    </button>
                    
                    {entry.isCustom && (
                        <button onClick={() => onSwapSlot(entry)} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-colors shadow-lg">
                            <IconExchange /> Promote
                        </button>
                    )}

                    <button 
                        onClick={handleManualSave} 
                        disabled={!manualUrl && !fanArtUrl && !dreamUrl && !idealUrl && selectedRarity === 'standard'}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors shadow-lg ${!manualUrl && !fanArtUrl && !dreamUrl && !idealUrl && selectedRarity === 'standard' ? 'bg-slate-700 text-slate-500 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-500 text-white'}`}
                    >
                        <IconSave /> Save
                    </button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 bg-slate-800 p-3 rounded-xl border border-slate-700 gap-3 shadow-md">
                <div className="w-full">
                    <div className="flex justify-between items-start">
                         <h2 className="text-lg md:text-xl font-bold flex flex-wrap items-center gap-2 leading-tight">
                            {entry.name.replace(" (Slot)", "")} 
                            <span className={`text-[10px] px-1.5 py-0.5 rounded ${entry.isMega ? 'bg-purple-900 text-purple-200' : entry.isTrainer ? 'bg-indigo-900 text-indigo-200' : 'bg-slate-700 text-slate-400'}`}>{entry.isMega ? 'MEGA' : entry.isTrainer ? 'TRAINER' : '#' + entry.displayId}</span>
                            {entry.isCustom && <span className="text-[10px] bg-blue-900 text-blue-200 px-1.5 py-0.5 rounded">EXTRA</span>}
                        </h2>
                    </div>
                    <div className="flex items-center gap-3 mt-1.5">
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${isOwned ? "text-green-400" : binderEntry ? "text-indigo-400" : "text-slate-500"}`}>{isOwned ? "OWNED" : binderEntry ? "HUNTING" : "EMPTY"}</span>
                        {binderEntry?.value && (
                            <span className="text-[10px] font-bold uppercase tracking-wider text-green-400 border border-green-900/50 bg-green-900/20 px-1.5 py-px rounded">£{binderEntry.value}</span>
                        )}
                        {showingFanArt && <span className="text-[10px] font-bold uppercase tracking-wider text-pink-400 border border-pink-900/50 bg-pink-900/20 px-1.5 py-px rounded">FAN ART</span>}
                    </div>
                </div>
                <div className="flex gap-2">
                    <button onClick={() => onAddSlot(entry)} className="flex-1 md:flex-none text-xs font-bold bg-slate-700 hover:bg-slate-600 text-slate-300 px-3 py-2 rounded-lg transition-colors flex items-center justify-center gap-1">
                        <IconPlus /> Add Slot
                    </button>
                    {entry.isCustom ? (
                        <button onClick={() => onRemoveSlot(entry)} className="flex-1 md:flex-none text-xs font-bold bg-red-900/40 hover:bg-red-900/60 text-red-400 border border-red-900 px-3 py-2 rounded-lg transition-colors flex items-center justify-center gap-1">
                            <IconTrash /> Remove Slot
                        </button>
                    ) : (
                        <button onClick={() => onDeletePokemon(entry)} className="flex-1 md:flex-none text-xs font-bold bg-red-900/40 hover:bg-red-900/60 text-red-400 border border-red-900 px-3 py-2 rounded-lg transition-colors flex items-center justify-center gap-1">
                             <IconTrash /> Delete Mon
                        </button>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-4">
                    <div className="relative group">
                        <img 
                            src={displayImage} 
                            alt={entry.name} 
                            className="w-full rounded-lg shadow-2xl border border-slate-700 bg-slate-900 p-2 object-contain max-h-[500px] cursor-zoom-in"
                            onClick={() => setShowImagePreview(true)}
                            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://tcg.pokemon.com/assets/img/global/tcg-card-back-2x.jpg"; }} 
                        />
                        <button onClick={() => setShowImagePreview(true)} className="absolute bottom-4 right-4 bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"><IconEye /></button>
                    </div>
                    
                    <button 
                        onClick={() => onToggleOwned(entry.key)} 
                        className={`w-full py-4 rounded-xl font-bold text-lg shadow-xl transition-all active:scale-95 border ${isOwned ? "bg-green-600 hover:bg-green-500 border-green-500 text-white" : "bg-slate-800 hover:bg-slate-700 border-slate-600 text-slate-400 hover:text-white"}`}
                    >
                        {isOwned ? "Mark as Missing" : "Mark as Owned"}
                    </button>
                </div>

                <div className="space-y-4">
                    <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                        <h3 className="text-sm font-bold text-slate-400 mb-3 uppercase tracking-wider flex items-center gap-2"><IconImage /> Card Data</h3>
                        
                        <div className="space-y-3">
                             <div className="relative">
                                <label className="text-xs text-slate-500 font-bold mb-1 block uppercase">Image URL (Main)</label>
                                <div className="flex gap-2">
                                    <input type="text" className="w-full glass-input rounded-lg px-3 py-2 text-white text-sm" placeholder="https://..." value={manualUrl} onChange={(e) => setManualUrl(e.target.value)} />
                                    <button onClick={() => handlePaste(setManualUrl)} className="px-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 transition-colors" title="Paste"><IconClipboard /></button>
                                </div>
                            </div>

                            <button onClick={() => setShowExtraUrls(!showExtraUrls)} className="text-xs text-indigo-400 hover:text-indigo-300 font-bold flex items-center gap-1 mt-2">
                                {showExtraUrls ? "Hide Advanced Art Options" : "Show Advanced Art Options"}
                            </button>

                            {showExtraUrls && (
                                <div className="space-y-3 pl-3 border-l-2 border-slate-700 mt-2 animate-zoom">
                                    <div className="relative">
                                        <label className="text-xs text-pink-400 font-bold mb-1 block uppercase flex items-center gap-1"><IconPalette size={12}/> Fan Art URL</label>
                                        <div className="flex gap-2">
                                            <input type="text" className="w-full glass-input rounded-lg px-3 py-2 text-white text-sm border-pink-900/30 focus:border-pink-500" placeholder="https://..." value={fanArtUrl} onChange={(e) => setFanArtUrl(e.target.value)} />
                                            <button onClick={() => handlePaste(setFanArtUrl)} className="px-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 transition-colors"><IconClipboard /></button>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <label className="text-xs text-amber-400 font-bold mb-1 block uppercase flex items-center gap-1"><IconStar size={12}/> Dream Card URL</label>
                                        <div className="flex gap-2">
                                            <input type="text" className="w-full glass-input rounded-lg px-3 py-2 text-white text-sm border-amber-900/30 focus:border-amber-500" placeholder="https://..." value={dreamUrl} onChange={(e) => setDreamUrl(e.target.value)} />
                                            <button onClick={() => handlePaste(setDreamUrl)} className="px-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 transition-colors"><IconClipboard /></button>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <label className="text-xs text-cyan-400 font-bold mb-1 block uppercase flex items-center gap-1"><IconSparkles size={12}/> Ideal Card URL</label>
                                        <div className="flex gap-2">
                                            <input type="text" className="w-full glass-input rounded-lg px-3 py-2 text-white text-sm border-cyan-900/30 focus:border-cyan-500" placeholder="https://..." value={idealUrl} onChange={(e) => setIdealUrl(e.target.value)} />
                                            <button onClick={() => handlePaste(setIdealUrl)} className="px-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 transition-colors"><IconClipboard /></button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div>
                                <label className="text-xs text-slate-500 font-bold mb-1 block uppercase">Custom Name</label>
                                <input type="text" className="w-full glass-input rounded-lg px-3 py-2 text-white text-sm" value={manualName} onChange={(e) => setManualName(e.target.value)} />
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                        <h3 className="text-sm font-bold text-slate-400 mb-3 uppercase tracking-wider flex items-center gap-2"><IconDollar /> Value & Rarity</h3>
                        <div className="grid grid-cols-2 gap-4">
                             <div>
                                <label className="text-xs text-slate-500 font-bold mb-1 block uppercase">Market Value</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-2 text-slate-400">£</span>
                                    <input type="text" className="w-full glass-input rounded-lg pl-6 pr-3 py-2 text-white text-sm font-mono" placeholder="0.00" value={manualValue} onChange={(e) => setManualValue(e.target.value)} />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs text-slate-500 font-bold mb-1 block uppercase">Card Rarity</label>
                                <select value={selectedRarity} onChange={(e) => setSelectedRarity(e.target.value)} className="w-full glass-input rounded-lg px-3 py-2 text-white text-sm">
                                    <option value="standard">Standard</option>
                                    <option value="EX">EX</option>
                                    <option value="GX">GX</option>
                                    <option value="V">V</option>
                                    <option value="VMAX">VMAX</option>
                                    <option value="VSTAR">VSTAR</option>
                                    <option value="MEGA">MEGA</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailView;