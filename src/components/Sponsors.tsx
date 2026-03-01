import { go } from '../utils';

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
    <path d="M7 1l6 6-6 6M13 7H1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Sponsors() {
  return (
    <section className="section sponsor-sec sec-pad" id="sponsor-sec">
      <div className="wrap">
        <div className="sponsor-layout">
          <div className="rv">
            <div className="slabel"><span className="slabel-txt">Partnership Opportunities</span></div>
            <h2 className="dh" style={{ marginBottom: 20 }}>Partner<br /><em>With Us</em></h2>
            <p className="sponsor-p">The Bitcoin Golf &amp; Hold&rsquo;em Open offers a targeted platform for firms seeking alignment with institutional-grade capital allocators, digital asset operators, and high-net-worth investors in one room.</p>
            <p className="sponsor-p">Sponsorship is not a logo placement. It is an invitation into a room you cannot buy a ticket to. We work with a select number of partners to ensure authenticity and exclusivity for all involved.</p>
            <button className="btn-primary" style={{ marginTop: 10, display: 'inline-flex' }} onClick={() => go('reg')}>
              <ArrowIcon />
              Inquire About Sponsorship
            </button>
          </div>
          <div className="rv d2">
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase' as const, color: 'var(--ghost)', marginBottom: 16 }}>Who Should Partner With Us</div>
            <div className="sponsor-tiers">
              <div className="tier">
                <div className="tier-dot" style={{ background: 'var(--gold)' }} />
                <div><div className="tier-h">Digital Asset Firms &amp; Exchanges</div><div className="tier-p">Access a room of allocators and OTC-level operators</div></div>
              </div>
              <div className="tier">
                <div className="tier-dot" style={{ background: 'var(--gold-hi)' }} />
                <div><div className="tier-h">Capital Allocators &amp; Family Offices</div><div className="tier-p">Align your brand with institutional peers in digital assets</div></div>
              </div>
              <div className="tier">
                <div className="tier-dot" style={{ background: 'var(--btc)' }} />
                <div><div className="tier-h">Bitcoin-Focused Companies</div><div className="tier-p">Support an event built around the Bitcoin community and ethos</div></div>
              </div>
              <div className="tier">
                <div className="tier-dot" style={{ background: 'white', opacity: 0.4 }} />
                <div><div className="tier-h">Corporate &amp; Strategic Partners</div><div className="tier-p">Connect with decision-makers across the digital asset landscape</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
