import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Camera, 
  ShieldCheck, 
  Smartphone, 
  HardDrive, 
  Wrench, 
  CheckCircle2, 
  FileText, 
  ArrowRight, 
  MapPin, 
  Calculator, 
  Phone, 
  Eye,
  Sliders,
  Layers
} from 'lucide-react';

export const CCTVPage: React.FC = () => {
  const { openQuoteModal, setCurrentPage, siteSettings, navigateToProductCategory } = useApp();

  // Interactive CCTV Storage Calculator
  const [cameraCount, setCameraCount] = useState<number>(8);
  const [retentionDays, setRetentionDays] = useState<number>(30);
  const [resolution, setResolution] = useState<'2MP' | '4MP' | '8MP_4K'>('4MP');
  const [recordingMode, setRecordingMode] = useState<'continuous' | 'motion'>('continuous');

  // Calculation in Gigabytes / Terabytes (H.265+ encoding basis)
  // 2MP ~ 15 GB/day, 4MP ~ 25 GB/day, 8MP ~ 45 GB/day (continuous)
  const gbPerDayPerCam = resolution === '2MP' ? 15 : resolution === '4MP' ? 25 : 45;
  const factor = recordingMode === 'motion' ? 0.45 : 1.0;
  const totalGB = cameraCount * retentionDays * gbPerDayPerCam * factor;
  const totalTB = Math.ceil((totalGB / 1024) * 10) / 10;
  const recommendedHDD = totalTB <= 2 ? '2TB Purple HDD' : totalTB <= 4 ? '4TB Purple HDD' : totalTB <= 8 ? '8TB Enterprise Surveillance HDD' : `${Math.ceil(totalTB / 8) * 8}TB Multi-Drive Setup`;

  const processSteps = [
    { step: '01', title: 'Site Survey', desc: 'Free on-site inspection of lighting, blind spots, entry gates, and conduit pathways.' },
    { step: '02', title: 'System Design', desc: 'Customized schematic map indicating optimal camera focal lengths & angles.' },
    { step: '03', title: 'Equipment Selection', desc: 'Choosing genuine Hikvision/Dahua 4MP ColorVu, PTZ, NVRs & surveillance HDDs.' },
    { step: '04', title: 'Installation', desc: 'Ducting, Cat6 structured cabling, weatherproofing, and camera mounting.' },
    { step: '05', title: 'Configuration', desc: 'Configuring IP subnets, PoE ports, AI smart tripwires & mobile live apps.' },
    { step: '06', title: 'Testing & QA', desc: 'Night vision infrared checks, recording loops & bandwidth stress testing.' },
    { step: '07', title: 'Customer Handover', desc: 'User training on DMSS/Hik-Connect smartphone app and playback backups.' },
    { step: '08', title: 'Ongoing Maintenance', desc: 'Quarterly lens cleaning, firmware security patches & priority AMC support.' }
  ];

  const cctvOfferings = [
    {
      title: 'IP CCTV Systems',
      desc: 'High bandwidth digital surveillance over Cat6 Ethernet with single-cable Power over Ethernet (PoE).',
      tag: 'Crystal Clear 4K'
    },
    {
      title: '24/7 ColorVu Night Vision',
      desc: 'Ultra-sensitive F1.0 aperture cameras producing vivid daylight-like color footage even in pitch blackness.',
      tag: 'Zero Dark Spots'
    },
    {
      title: 'Remote Mobile Monitoring',
      desc: 'Watch live camera streams, playback recordings, and receive motion intruder push alarms on iOS & Android.',
      tag: 'Anywhere Access'
    },
    {
      title: 'PTZ Speed Dome Cameras',
      desc: '360-degree pan-tilt-zoom cameras with up to 32x optical zoom for open grounds, factory perimeters & parking.',
      tag: 'Wide Area'
    },
    {
      title: 'AI Smart Perimeter Defense',
      desc: 'Smart motion filters distinguishing human and vehicle intruders while ignoring pets, leaves, or rain.',
      tag: 'False Alarm Filter'
    },
    {
      title: 'CCTV AMC & Health Audits',
      desc: 'Routine quarterly recording verification, lens polishing, power supply health checks & quick breakdown dispatch.',
      tag: '24/7 Protection'
    }
  ];

  return (
    <div className="w-full text-slate-800 min-h-screen py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="relative max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 block">
              End-to-End Electronic Surveillance
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              High-Definition CCTV Solutions & Installation
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Complete surveillance planning, IP camera deployment, NVR storage optimization, remote smartphone streaming, and annual maintenance for offices, factories, retail, and homes.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setCurrentPage('request-service')}
                className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm rounded-full shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-white" />
                <span>Request CCTV Site Survey</span>
              </button>
              <button
                type="button"
                onClick={() => navigateToProductCategory('CCTV')}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm rounded-full border border-white/20 transition-all flex items-center gap-2"
              >
                <Camera className="w-4 h-4 text-blue-300" />
                <span>Browse CCTV Cameras</span>
              </button>
            </div>
          </div>
        </div>

        {/* CCTV Solutions Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1 block">
              Engineered Security
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Comprehensive CCTV Surveillance Capabilities
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Engineered for round-the-clock perimeter defense and evidence-grade recording.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cctvOfferings.map((off, idx) => (
              <div key={idx} className="bg-white hover:bg-slate-50 rounded-3xl p-6 border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-200 inline-block mb-3">
                    {off.tag}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{off.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{off.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-blue-600">
                  <span>Included in Turnkey Packages</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 8-Step Complete Process */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1 block">
              Turnkey Execution Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Our 8-Step CCTV Installation Process
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              From site survey to lifetime AMC maintenance, we manage the entire lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((step, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 relative flex flex-col justify-between">
                <div>
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-black text-xs flex items-center justify-center mb-3 shadow-sm">
                    {step.step}
                  </span>
                  <h4 className="font-bold text-sm text-slate-900 mb-1">{step.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive CCTV Storage Calculation Widget */}
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 rounded-3xl p-8 sm:p-10 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Controller */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-orange-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                  Surveillance Hard Drive Estimator (H.265+)
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Calculate CCTV Recording Storage Capacity
              </h3>
              <p className="text-xs text-slate-300">
                Estimate required surveillance hard drive capacity based on camera numbers, resolution, and desired recording days.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Number of Cameras: {cameraCount}</label>
                  <input
                    type="range"
                    min="1"
                    max="64"
                    value={cameraCount}
                    onChange={(e) => setCameraCount(parseInt(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Retention Period: {retentionDays} Days</label>
                  <input
                    type="range"
                    min="7"
                    max="90"
                    step="1"
                    value={retentionDays}
                    onChange={(e) => setRetentionDays(parseInt(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Camera Resolution</label>
                  <select
                    value={resolution}
                    onChange={(e: any) => setResolution(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white/10 text-white border border-white/20 text-xs outline-none focus:border-blue-400 [&>option]:bg-slate-900"
                  >
                    <option value="2MP">2 Megapixel (1080P HD)</option>
                    <option value="4MP">4 Megapixel (2K Quad HD - Recommended)</option>
                    <option value="8MP_4K">8 Megapixel (4K Ultra HD)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Recording Mode</label>
                  <select
                    value={recordingMode}
                    onChange={(e: any) => setRecordingMode(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white/10 text-white border border-white/20 text-xs outline-none focus:border-blue-400 [&>option]:bg-slate-900"
                  >
                    <option value="continuous">24/7 Continuous Recording</option>
                    <option value="motion">Smart Motion Activated (Save ~55% Space)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Right Output Card */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center space-y-4 shadow-xl">
              <span className="text-xs text-slate-300 font-medium">Estimated Storage Requirement</span>
              <div className="text-4xl font-black text-orange-400">
                {totalTB} <span className="text-xl font-bold text-white">TB</span>
              </div>
              <div className="p-3 bg-black/30 rounded-xl border border-white/10 text-xs text-slate-200">
                <span className="text-slate-300 block mb-0.5">Recommended Configuration:</span>
                <strong className="text-emerald-400 text-sm">{recommendedHDD}</strong>
              </div>
              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold rounded-full shadow-md transition-all"
              >
                Get Quote for this Setup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
