function LuxuryMap() {
  return (
    <div className="h-[320px] w-full rounded-[24px] border border-[rgba(212,175,55,0.3)] bg-[#10141B] overflow-hidden">
      <div className="h-full w-full flex items-center justify-center">
        <div className="text-center px-6">
          <div className="mx-auto mb-4 h-12 w-12 rounded-full border-2 border-[#D4AF37] flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.418 0-8-2.239-8-5.5 0-4.5 4-8 8-11s8 6.5 8 11c0 3.261-3.582 5.5-8 5.5Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
            </svg>
          </div>
          <p className="text-xl text-white">Taj Lake Palace</p>
          <p className="mt-1 text-sm text-[#C9B26D]">Udaipur, India</p>
        </div>
      </div>
    </div>
  );
}

export default LuxuryMap;
