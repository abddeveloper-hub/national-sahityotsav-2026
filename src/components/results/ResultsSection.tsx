import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ParticipantResult, StateLeaderboardEntry } from '../../types/festival';
import { festivalService } from '../../services/festivalService';
import { Modal } from '../common/Modal';
import { Search, Trophy, Award, CheckCircle, AlertCircle, FileCheck, ArrowUpRight } from 'lucide-react';

export const ResultsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'search' | 'leaderboard' | 'national'>('search');
  const [searchId, setSearchId] = useState('');
  const [searchResult, setSearchResult] = useState<ParticipantResult | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [searching, setSearching] = useState(false);
  
  const [leaderboard, setLeaderboard] = useState<StateLeaderboardEntry[]>([]);
  const [allResults, setAllResults] = useState<ParticipantResult[]>([]);
  const [certificateModal, setCertificateModal] = useState<ParticipantResult | null>(null);

  useEffect(() => {
    festivalService.getStateLeaderboard().then(setLeaderboard);
    festivalService.getAllResults().then(setAllResults);
  }, []);

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchId.trim()) return;

    setSearching(true);
    setHasSearched(true);
    const res = await festivalService.searchParticipant(searchId);
    setSearchResult(res);
    setSearching(false);
  };

  const sampleSearchIds = ['NS-2026-4821', 'NS-2026-1042', 'NS-2026-3190', 'NS-2026-8819'];

  return (
    <section id="results" className="py-20 sm:py-28 relative bg-[#070A12] border-t border-amber-500/15 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-amber-500/10 via-emerald-500/5 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Public Scoring & Recognition"
          title="Results &"
          highlightedTitle="Leaderboard"
          description="Transparent, authenticated live scores and state standings verified by the National Sahityotsav Grand Jury."
        />

        {/* Section Navigation Tabs: Live Results / State Leaderboard / National Results */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          <button
            onClick={() => setActiveTab('search')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'search'
                ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20'
                : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Search className="w-4 h-4" />
            <span>Search Participant Result</span>
          </button>

          <button
            onClick={() => setActiveTab('leaderboard')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'leaderboard'
                ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20'
                : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>State Leaderboard</span>
          </button>

          <button
            onClick={() => setActiveTab('national')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'national'
                ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20'
                : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>National Results Highlights</span>
          </button>
        </div>

        {/* TAB 1: PARTICIPANT RESULT SEARCH */}
        {activeTab === 'search' && (
          <div className="max-w-3xl mx-auto">
            
            {/* Search Input Box Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0D1424] border border-amber-500/30 shadow-2xl backdrop-blur-md">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Official National Score Repository</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  Look Up Participant Performance
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Enter the unique Participant ID or Certificate Serial to retrieve verified adjudication cards.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-stretch gap-3">
                <div className="relative flex-1">
                  <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                    placeholder="Enter Participant ID (e.g. NS-2026-4821)"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 uppercase font-mono tracking-wider"
                  />
                </div>
                <button
                  type="submit"
                  disabled={searching || !searchId.trim()}
                  className="px-8 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 disabled:opacity-50 transition-all duration-200 shadow-lg shadow-amber-500/20 shrink-0"
                >
                  {searching ? 'Verifying...' : 'Search'}
                </button>
              </form>

              {/* Quick sample chips */}
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                <span className="font-medium text-slate-500">Quick Test IDs:</span>
                {sampleSearchIds.map((id) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => {
                      setSearchId(id);
                      festivalService.searchParticipant(id).then((res) => {
                        setSearchResult(res);
                        setHasSearched(true);
                      });
                    }}
                    className="px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-amber-300 border border-slate-800 font-mono text-[11px] transition-colors"
                  >
                    {id}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Result Display */}
            {hasSearched && (
              <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
                {searchResult ? (
                  <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#0A0F1E] border-2 border-amber-400/40 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                          <span>ID: {searchResult.id}</span>
                          <span>•</span>
                          <span className="text-emerald-400 flex items-center gap-1 font-sans">
                            <CheckCircle className="w-3.5 h-3.5" /> Verified Result
                          </span>
                        </div>
                        <h4 className="text-2xl font-serif font-bold text-white mt-1">
                          {searchResult.participantName}
                        </h4>
                        <div className="text-sm text-slate-300 mt-0.5">
                          {searchResult.institution}
                        </div>
                      </div>

                      {/* Medal / Position Badge */}
                      <div className="self-start sm:self-center px-4 py-2 rounded-2xl bg-amber-500/10 border border-amber-400/40 text-center">
                        <div className="text-[10px] uppercase font-bold text-slate-400">Position Achieved</div>
                        <div className="text-base font-bold text-amber-300 font-serif">
                          {searchResult.position}
                        </div>
                      </div>
                    </div>

                    {/* Result Details Grid */}
                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                        <div className="text-slate-400">Competition Event</div>
                        <div className="text-white font-semibold mt-0.5 truncate">{searchResult.eventName}</div>
                      </div>
                      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                        <div className="text-slate-400">Category</div>
                        <div className="text-white font-semibold mt-0.5">{searchResult.category}</div>
                      </div>
                      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                        <div className="text-slate-400">State & District</div>
                        <div className="text-white font-semibold mt-0.5">{searchResult.state} ({searchResult.district})</div>
                      </div>
                      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                        <div className="text-slate-400">Points Awarded</div>
                        <div className="text-amber-300 font-bold font-mono text-sm mt-0.5">{searchResult.points} Pts</div>
                      </div>
                    </div>

                    {/* Certificate Action */}
                    <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="text-xs text-slate-400 font-mono">
                        Certificate Serial: <span className="text-slate-200">{searchResult.certificateId}</span>
                      </div>
                      <button
                        onClick={() => setCertificateModal(searchResult)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-amber-300 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 transition-colors"
                      >
                        <FileCheck className="w-4 h-4" />
                        <span>View Authenticated Certificate</span>
                      </button>
                    </div>

                  </div>
                ) : (
                  <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
                    <AlertCircle className="w-10 h-10 text-amber-400 mx-auto mb-2 opacity-70" />
                    <h4 className="text-base font-bold text-white">No Record Found for "{searchId}"</h4>
                    <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
                      Please ensure you entered the exact Participant ID as printed on your fest badge (e.g. NS-2026-4821) or click one of the quick test IDs above.
                    </p>
                  </div>
                )}
              </div>
            )}

          </div>
        )}

        {/* TAB 2: STATE LEADERBOARD */}
        {activeTab === 'leaderboard' && (
          <div className="max-w-4xl mx-auto">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0D1424] border border-amber-500/30 shadow-2xl overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                    State Delegation Standings
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    Live aggregate medal tally across all 120 championship events.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 px-3 py-1.5 rounded-full border border-emerald-500/30 self-start sm:self-auto">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Real-time Sync</span>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-300">
                  <thead className="text-xs uppercase bg-slate-900/80 text-slate-400 border-b border-slate-800">
                    <tr>
                      <th className="py-3 px-4">Rank</th>
                      <th className="py-3 px-4">State Delegation</th>
                      <th className="py-3 px-3 text-center">Gold (1st)</th>
                      <th className="py-3 px-3 text-center">Silver (2nd)</th>
                      <th className="py-3 px-3 text-center">Bronze (3rd)</th>
                      <th className="py-3 px-4 text-right">Points</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {leaderboard.map((row) => (
                      <tr
                        key={row.code}
                        className={`hover:bg-slate-800/40 transition-colors ${
                          row.rank <= 3 ? 'bg-amber-500/[0.03]' : ''
                        }`}
                      >
                        <td className="py-3.5 px-4 font-mono font-bold">
                          {row.rank === 1 ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-400 text-slate-950 text-xs">1</span>
                          ) : row.rank === 2 ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-300 text-slate-950 text-xs">2</span>
                          ) : row.rank === 3 ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-700 text-white text-xs">3</span>
                          ) : (
                            <span className="text-slate-500 ml-2">#{row.rank}</span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 font-medium text-white">
                          <div className="flex items-center gap-2">
                            <span>{row.state}</span>
                            <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                              {row.code}
                            </span>
                          </div>
                        </td>
                        <td className="py-3.5 px-3 text-center font-semibold text-amber-300">{row.goldCount}</td>
                        <td className="py-3.5 px-3 text-center font-semibold text-slate-300">{row.silverCount}</td>
                        <td className="py-3.5 px-3 text-center font-semibold text-amber-600">{row.bronzeCount}</td>
                        <td className="py-3.5 px-4 text-right font-mono font-bold text-amber-400 text-base">
                          {row.totalPoints}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: NATIONAL RESULTS HIGHLIGHTS */}
        {activeTab === 'national' && (
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {allResults.map((res) => (
                <div
                  key={res.id}
                  className="p-5 rounded-2xl bg-[#0D1424]/90 border border-slate-800 hover:border-amber-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-mono text-amber-400 font-semibold">{res.id}</span>
                      <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">
                        {res.position}
                      </span>
                    </div>
                    <h4 className="text-base font-serif font-bold text-white">{res.participantName}</h4>
                    <p className="text-xs text-slate-400 mt-1">{res.institution}</p>
                    <div className="mt-3 text-xs text-slate-300 font-medium bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                      {res.eventName} ({res.category})
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span>{res.state}</span>
                    <button
                      onClick={() => setCertificateModal(res)}
                      className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
                    >
                      <span>Certificate</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Certificate Modal */}
      <Modal
        isOpen={!!certificateModal}
        onClose={() => setCertificateModal(null)}
        title="Authenticated Sahityotsav Laurels"
        subtitle="National Sahityotsav Adjudication Board • 2026"
        maxWidth="2xl"
      >
        {certificateModal && (
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 text-slate-900 border-4 border-amber-600 shadow-2xl relative">
            <div className="text-center space-y-2">
              <div className="text-[11px] uppercase tracking-widest text-amber-900 font-bold">
                Republic of India • National Sahityotsav 2026
              </div>
              <h3 className="text-2xl font-serif font-black text-amber-950">
                Certificate of National Excellence
              </h3>
              <div className="w-16 h-0.5 bg-amber-700 mx-auto my-2" />
              <p className="text-xs text-slate-700 italic">This is proudly conferred upon</p>
              <div className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
                {certificateModal.participantName}
              </div>
              <p className="text-xs text-slate-800">
                representing <strong className="font-semibold">{certificateModal.institution}</strong> ({certificateModal.state})
              </p>
              <p className="text-xs text-slate-700 pt-2">
                for securing <strong className="text-amber-900 font-bold">{certificateModal.position}</strong> in the national championship event
              </p>
              <div className="text-base font-serif font-bold text-amber-950">
                "{certificateModal.eventName}"
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-amber-400/80 flex items-center justify-between text-[11px] text-slate-700 font-mono">
              <div>Serial: {certificateModal.certificateId}</div>
              <div>Adjudicated: {certificateModal.publishedAt}</div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
