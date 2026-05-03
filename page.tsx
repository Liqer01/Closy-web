"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState({
    online: false,
    clients: 0,
    maxClients: 128,
  });

  const fetchServerStatus = async () => {
    try {
      const targetUrl = `http://178.208.187.251:30120/dynamic.json?t=${Date.now()}`;
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}`;
      
      const res = await fetch(proxyUrl);
      const result = await res.json();
      
      if (result && result.contents) {
        const data = JSON.parse(result.contents);
        setStatus({
          online: true,
          clients: data.clients || 0,
          maxClients: data.sv_maxclients || 128,
        });
      } else {
        setStatus((prev) => ({ ...prev, online: false }));
      }
    } catch (error) {
      setStatus((prev) => ({ ...prev, online: false }));
    }
  };

  useEffect(() => {
    fetchServerStatus();
    const interval = setInterval(fetchServerStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#020202] text-white flex flex-col items-center justify-center p-4 font-sans overflow-hidden relative">
      
      {/* Arka Plan Neon Işımaları */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* İnce Izgara Deseni */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
      </div>

      <div className="relative z-10 w-full max-w-5xl">
        
        {/* Header Alanı */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] tracking-[0.3em] font-bold text-blue-400 mb-4 uppercase">
             Official Platform
          </div>
          <h1 className="text-8xl font-black tracking-tighter bg-gradient-to-b from-white via-white to-white/20 bg-clip-text text-transparent drop-shadow-2xl uppercase">
            CLOSY
          </h1>
          <div className="flex items-center justify-center gap-4 text-gray-500 tracking-[0.2em] text-xs font-light">
            <span>DEVELOPMENT</span>
            <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
            <span>GAMING HUB</span>
            <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
            <span>2026</span>
          </div>
        </div>

        {/* Kartlar Alanı */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* FiveM Sunucu Kartı */}
          <div className="lg:col-span-2 group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-[2.5rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-[#0a0a0a]/80 backdrop-blur-3xl border border-white/10 p-8 rounded-[2.5rem] flex flex-col justify-between min-h-[320px]">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight">Main Server</h2>
                  </div>
                  <p className="text-gray-400 text-sm font-light">Roleplay deneyiminin zirvesi şimdi aktif.</p>
                </div>
                <div className={`px-4 py-1.5 rounded-full border text-[10px] font-black tracking-widest flex items-center gap-2 transition-colors duration-500 ${status.online ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
                  <span className={`w-2 h-2 rounded-full ${status.online ? 'bg-green-500 animate-ping' : 'bg-red-500'}`}></span>
                  {status.online ? 'LIVE NOW' : 'OFFLINE'}
                </div>
              </div>

              <div className="mt-12 flex items-center justify-between">
                <div>
                  <div className="text-6xl font-black font-mono tracking-tighter flex items-baseline gap-1">
                    {status.online ? status.clients : '0'}
                    <span className="text-xl text-gray-700 font-sans tracking-normal">/{status.maxClients}</span>
                  </div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mt-2 font-bold">Active Players</p>
                </div>
                
                {/* FiveM Bağlantı Linki Buraya Eklendi */}
                <a href="fivem://connect/178.208.187.251:30120">
                  <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold text-sm hover:bg-blue-500 hover:text-white transition-all duration-300 transform group-hover:translate-x-1 uppercase">
                    SUNUCUYA BAĞLAN
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Discord Kartı */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-[2.5rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-[#0a0a0a]/80 backdrop-blur-3xl border border-white/10 p-8 rounded-[2.5rem] flex flex-col justify-between h-full min-h-[320px]">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center border border-purple-500/20">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Discord Hub</h3>
                  <p className="text-gray-500 text-sm mt-2 font-light line-clamp-2">Topluluğa katıl ve güncellemeleri kaçırma.</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
                  <span className="text-gray-500">Latency</span>
                  <span className="text-green-400 font-mono">18ms</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Uptime</span>
                  <span className="text-white font-mono">99.9%</span>
                </div>
                <a 
                  href="https://discord.gg/closydev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <button className="w-full py-3 rounded-xl border border-white/10 text-xs font-bold hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 uppercase">
                    DİSCORD'A KATIL
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Alt Detaylar */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 pt-8">
           <div className="flex gap-8">
              <div className="text-center md:text-left">
                <p className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">Location</p>
                <p className="text-xs text-gray-400 mt-1 font-medium">Germany / Frankfurt</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">Framework</p>
                <p className="text-xs text-gray-400 mt-1 font-medium">QBCore Premium</p>
              </div>
           </div>
           <p className="text-[10px] text-gray-700 tracking-[0.4em] uppercase font-black">
             &copy; CLOSY PROJECT - ALL RIGHTS RESERVED
           </p>
        </div>

      </div>
    </main>
  );
}