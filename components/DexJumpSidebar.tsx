import React from 'react';
import { PokemonEntry } from '../types';

interface DexJumpSidebarProps {
    entries: PokemonEntry[];
}

const DexJumpSidebar: React.FC<DexJumpSidebarProps> = ({ entries }) => {
    const scrollToDex = (dexNum: number) => {
        const targetEntry = entries.find(e => e.apiId >= dexNum);
        if (targetEntry) {
            const el = document.getElementById(`poke-card-${targetEntry.key}`);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };
    
    const handleTouchMove = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        const el = document.elementFromPoint(touch.clientX, touch.clientY) as HTMLElement;
        if (el && el.dataset.jump) scrollToDex(parseInt(el.dataset.jump));
    };
    
    const maxId = entries.length > 0 ? entries[entries.length - 1].apiId : 151;
    const ticks = [1];
    const step = maxId > 251 ? 50 : 30;
    for (let i = step; i < maxId; i += step) ticks.push(i);
    if (maxId > 1) ticks.push(maxId);

    return (
        <div className="fixed right-1 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-1 items-center bg-black/20 backdrop-blur-sm p-1 rounded-full py-2 dex-scrubber opacity-40 hover:opacity-100 transition-opacity duration-300" onTouchMove={handleTouchMove}>
            {ticks.map(t => (
                <div key={t} onClick={() => scrollToDex(t)} data-jump={t} className="text-[9px] font-bold text-slate-300 hover:text-white cursor-pointer w-6 h-4 flex items-center justify-center select-none">{t}</div>
            ))}
        </div>
    );
};

export default DexJumpSidebar;
