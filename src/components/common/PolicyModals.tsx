import React from 'react';
import { Modal } from './Modal';

interface PolicyModalsProps {
  privacyOpen: boolean;
  termsOpen: boolean;
  onClosePrivacy: () => void;
  onCloseTerms: () => void;
}

export const PolicyModals: React.FC<PolicyModalsProps> = ({
  privacyOpen,
  termsOpen,
  onClosePrivacy,
  onCloseTerms
}) => {
  return (
    <>
      {/* Privacy Policy */}
      <Modal
        isOpen={privacyOpen}
        onClose={onClosePrivacy}
        title="Privacy & Data Governance Charter"
        subtitle="National Sahityotsav 2026 Delegation Privacy Framework"
        maxWidth="2xl"
      >
        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            The National Sahityotsav Organization is dedicated to maintaining the confidentiality and integrity of all participant, institutional, and judge data across all tiers of the competition.
          </p>
          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
            <h5 className="font-semibold text-white mb-1">1. Information Collection & Usage</h5>
            <p className="text-slate-400">
              Information collected during preliminary and national registrations (names, institutional affiliations, age categories, scores, and media recordings) is utilized solely for festival administration, jury evaluation, score verification, and authenticated digital certificate issuance.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
            <h5 className="font-semibold text-white mb-1">2. Public Performance & Media Rights</h5>
            <p className="text-slate-400">
              Photographs, stage audio recordings, and broadcast streams from the public auditoriums in Chennai are part of the public cultural archive and non-commercial festival documentation.
            </p>
          </div>
        </div>
      </Modal>

      {/* Terms & Regulations */}
      <Modal
        isOpen={termsOpen}
        onClose={onCloseTerms}
        title="Festival Code & Competition Bylaws"
        subtitle="Official Regulations Governing National Sahityotsav 2026"
        maxWidth="2xl"
      >
        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Participation in National Sahityotsav 2026 signifies explicit adherence to the festival charter, code of conduct, and unanimous decisions of the National Grand Jury.
          </p>
          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
            <h5 className="font-semibold text-white mb-1">1. Academic & Creative Integrity</h5>
            <p className="text-slate-400">
              All compositions, speech drafts, poetry recitations, and scientific colloquium papers must reflect original creative output. Plagiarism or unauthorized synthetic AI assistance disqualifies entries.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
            <h5 className="font-semibold text-white mb-1">2. Adjudication Finality</h5>
            <p className="text-slate-400">
              The jury score sheets, point aggregates, and official medal declarations signed by the Jury President are final, transparent, and binding.
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};
