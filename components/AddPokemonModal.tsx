import React, { useState } from 'react';
import { IconX } from './Icons';
import { GENERATION_DATA } from '../constants';
import { PokemonEntry } from '../types';

interface AddPokemonModalProps {
    onClose: () => void;
    onAdd: (newPoke: PokemonEntry) => void;
}

const AddPokemonModal: React.FC<AddPokemonModalProps> = ({ onClose, onAdd }) => {
    const [mode, setMode] = useState<'list' | 'manual'>('list');
    const [activeGen, setActiveGen] = useState(1);
    const [selectedId, setSelectedId] = useState("");
    const [url, setUrl] = useState("");
    
    // Manual States
    const [manualName, setManualName] = useState("");
    const [manualId, setManualId] = useState("");
    const [isTrainer, setIsTrainer] = useState(false);

    const currentList = GENERATION_DATA[activeGen] || [];

    const handleSubmit = () => {
        if (mode === 'list') {
            if (!selectedId) return;
            const poke = currentList.find(p => p.id === parseInt(selectedId));
            if (!poke) return;
            const newPoke: PokemonEntry = { 
                name: poke.name, 
                apiId: poke.id, 
                key: poke.id.toString() + "-" + poke.name.toLowerCase(), 
                isMega: false, 
                displayId: poke.id.toString().padStart(3, '0'), 
                cardImage: url || null, 
                isTrainer: false, 
                isBase: false 
            };
            onAdd(newPoke);
        } else {
            if (!manualName || !manualId) return;
            const idNum = parseInt(manualId);
            const newPoke: PokemonEntry = { 
                name: manualName, 
                apiId: idNum, 
                key: idNum.toString() + "-" + manualName.toLowerCase().replace(/ /g, '-'), 
                isMega: false, 
                displayId: idNum.toString().padStart(3, '0'), 
                cardImage: url || null,
                isTrainer: isTrainer,
                isBase: false
            };
            onAdd(newPoke);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
            <div className="bg-slate-800 rounded-xl p-6 w-full max-w-md border border-slate-700">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold">Add Entry</h3>
                    <button onClick={onClose}><IconX /></button>
                </div>

                <div className="flex gap-2 mb-4 bg-slate-900/50 p-1 rounded-lg">
                    <button onClick={() => setMode('list')} className={`flex-1 py-1.5 rounded-md text-xs font-bold transition-colors ${mode === 'list' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}>From Pokedex</button>
                    <button onClick={() => setMode('manual')} className={`flex-1 py-1.5 rounded-md text-xs font-bold transition-colors ${mode === 'manual' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}>Manual Input</button>
                </div>

                <div className="space-y-4">
                    {mode === 'list' ? (
                        <>
                            <div className="flex overflow-x-auto gap-2 mb-2 pb-2 -mx-2 px-2 no-scrollbar snap-x">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(gen => (
                                    <button 
                                        key={gen}
                                        onClick={() => { setActiveGen(gen); setSelectedId(""); }} 
                                        className={`snap-center flex-shrink-0 px-4 py-2 rounded-lg text-xs font-bold transition-all border ${activeGen === gen ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg scale-105' : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700 hover:text-white'}`}
                                    >
                                        Gen {gen}
                                    </button>
                                ))}
                            </div>
                            <div>
                                <label className="block text-xs text-slate-400 mb-1">Select Pokemon (Gen {activeGen})</label>
                                <select className="w-full glass-input rounded px-3 py-2 text-white" value={selectedId} onChange={(e) => setSelectedId(e.target.value)}>
                                    <option value="">-- Choose a Pokemon --</option>
                                    {currentList.map(p => <option key={p.id} value={p.id}>#{p.id} - {p.name}</option>)}
                                </select>
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                <label className="block text-xs text-slate-400 mb-1">Entry Name</label>
                                <input type="text" className="w-full glass-input rounded px-3 py-2 text-white" placeholder="e.g. Lucario, Cynthia..." value={manualName} onChange={(e) => setManualName(e.target.value)} />
                            </div>
                            <div>
                                <label className="block text-xs text-slate-400 mb-1">Sort ID Number</label>
                                <input type="number" className="w-full glass-input rounded px-3 py-2 text-white" placeholder="e.g. 448 (Tip: Use 1000+ for Trainers)" value={manualId} onChange={(e) => setManualId(e.target.value)} />
                                <p className="text-[10px] text-slate-500 mt-1">This determines where it sits in the grid.</p>
                            </div>
                            <div className="flex items-center gap-3 bg-slate-900 px-3 py-2 rounded-lg border border-slate-700 mt-2">
                                <div className="flex-1">
                                    <span className="text-sm font-bold text-white block">Is this a Trainer?</span>
                                    <span className="text-xs text-slate-400">Adds separation line in grid</span>
                                </div>
                                <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                                    <input type="checkbox" name="trainerToggle" id="trainerToggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-300 left-0" checked={isTrainer} onChange={() => setIsTrainer(!isTrainer)} />
                                    <label htmlFor="trainerToggle" className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer transition-colors duration-300 ${isTrainer ? 'bg-indigo-500' : 'bg-slate-600'}`}></label>
                                </div>
                            </div>
                        </>
                    )}

                    <div>
                        <label className="block text-xs text-slate-400 mb-1">Default Image URL (Optional)</label>
                        <input type="text" className="w-full glass-input rounded px-3 py-2 text-white" placeholder="https://..." value={url} onChange={(e) => setUrl(e.target.value)} />
                    </div>
                    <button onClick={handleSubmit} disabled={mode === 'list' ? !selectedId : (!manualName || !manualId)} className={`w-full py-3 rounded-lg font-bold mt-4 shadow-lg transition-colors ${((mode === 'list' && selectedId) || (mode === 'manual' && manualName && manualId)) ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'bg-slate-700 text-slate-500 cursor-not-allowed'}`}>Add to List</button>
                </div>
            </div>
        </div>
    );
};

export default AddPokemonModal;