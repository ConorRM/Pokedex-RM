import React, { useEffect, useState } from 'react';
import { IconCheck, IconMaximize, IconMinimize, IconX } from './Icons';

export const Toast = ({ msg, onClose }: { msg: string | null; onClose: () => void }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [msg, onClose]);

    if (!msg) return null;
    return (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-800 border border-indigo-500 text-white px-6 py-3 rounded-xl shadow-2xl z-[100] animate-bounce flex items-center gap-2">
            <IconCheck />
            <span className="font-semibold">{msg}</span>
        </div>
    );
};

export const ConfirmDialog = ({ config, onCancel }: { config: { msg: string; action: () => void } | null; onCancel: () => void }) => {
    if (!config) return null;
    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
            <div className="bg-slate-800 rounded-xl p-6 w-full max-w-sm border border-slate-700 shadow-2xl transform transition-all scale-100">
                <h3 className="text-xl font-bold mb-3 text-white">Confirm Action</h3>
                <p className="text-slate-300 mb-6">{config.msg}</p>
                <div className="flex justify-end gap-3">
                    <button onClick={onCancel} className="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors">Cancel</button>
                    <button onClick={() => { config.action(); onCancel(); }} className="px-5 py-2 bg-red-600 hover:bg-red-500 rounded-lg text-sm font-bold text-white shadow-lg transition-transform active:scale-95">Confirm</button>
                </div>
            </div>
        </div>
    );
};

export const ImagePreviewModal = ({ src, onClose }: { src: string; onClose: () => void }) => {
    const [fillMode, setFillMode] = useState(false);
    useEffect(() => {
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
        return () => { if (viewport) viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'); };
    }, []);

    if (!src) return null;
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black" onClick={onClose}>
            <div className="absolute top-4 right-4 flex gap-4 z-50">
                <button onClick={(e) => { e.stopPropagation(); setFillMode(!fillMode); }} className="text-white hover:text-indigo-400 bg-slate-800/80 p-3 rounded-full backdrop-blur transition-colors">
                    {fillMode ? <IconMinimize /> : <IconMaximize />}
                </button>
                <button onClick={onClose} className="text-white hover:text-red-400 bg-slate-800/80 p-3 rounded-full backdrop-blur transition-colors">
                    <IconX />
                </button>
            </div>
            <img src={src} alt="Preview" className={`transition-all duration-300 animate-zoom ${fillMode ? "w-full h-full object-cover" : "max-w-full max-h-full object-contain p-1"}`} onClick={(e) => e.stopPropagation()} />
        </div>
    );
};
