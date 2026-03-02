export default function Format() {
  return (
    <section className="section format sec-pad" id="format">
      <div className="wrap">
        <div className="format-grid">
          <div className="rv">
            <div className="slabel"><span className="slabel-txt">Tournament Format</span></div>
            <h2 className="dh" style={{ marginBottom: 20 }}>Scramble Golf,<br /><em>Elevated</em></h2>
            <p className="format-desc">The golf tournament follows a scramble format, where every player on the team hits their shot, the best position is selected, and all players play from that spot. Competitive, strategic, and accessible to golfers of all handicap levels.</p>
            <div className="reg-cards">
              <div className="reg-card">
                <div className="reg-card-icon">&#128101;</div>
                <div className="reg-card-h">Team of Four</div>
                <div className="reg-card-p">Register your full foursome. All four players tee off together from the shotgun start.</div>
              </div>
              <div className="reg-card">
                <div className="reg-card-icon">&#128100;</div>
                <div className="reg-card-h">Individual Entry</div>
                <div className="reg-card-p">Register as an individual and we will assign you to a team prior to the event.</div>
              </div>
            </div>
            <p className="format-desc" style={{ marginBottom: 0, fontSize: 13 }}>Following the round, each registered team receives <strong style={{ color: 'var(--gold-hi)' }}>two Hold&rsquo;em cards</strong> as their starting hand for the evening poker tournament.</p>
          </div>
          <div className="rv d2">
            <div className="bonus-title">Extra Cards Awarded For</div>
            <div className="bonus-list">
              <div className="bonus-item"><span className="bi-icon">&#127937;</span><span className="bi-label">Low Gross: Winning Team</span><span className="bi-card">+1 Card Each</span></div>
              <div className="bonus-item"><span className="bi-icon">&#127936;</span><span className="bi-label">Low Net: Winning Team</span><span className="bi-card">+1 Card Each</span></div>
              <div className="bonus-item"><span className="bi-icon">&#128081;</span><span className="bi-label">Skin on a Hole <span style={{ fontSize: 10, color: 'var(--ghost)' }}>(no ties)</span></span><span className="bi-card">+1 Card Each</span></div>
              <div className="bonus-item"><span className="bi-icon">&#127919;</span><span className="bi-label">Closest to Pin: Holes #3, #7, #15</span><span className="bi-card">+1 Card</span></div>
              <div className="bonus-item"><span className="bi-icon">&#128293;</span><span className="bi-label">Longest Drive: Holes #1, #4, #16</span><span className="bi-card">+1 Card</span></div>
            </div>
            <div style={{ marginTop: 20, background: 'var(--veil)', border: '1px solid var(--line2)', borderRadius: 'var(--rm)', padding: '18px 20px' }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase' as const, color: 'var(--ghost)', marginBottom: 6 }}>Base Starting Hand</div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontWeight: 600, color: 'var(--gold-hi)' }}>2 Cards Per Registered Team</div>
              <div style={{ fontSize: 11, fontWeight: 300, color: 'var(--fog)', marginTop: 4 }}>Earn more cards through performance on the course</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
