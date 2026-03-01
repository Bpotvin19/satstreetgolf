export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logos">
        <span className="footer-logo-word">Satstreet</span>
        <div className="footer-sep" />
        <span className="footer-logo-word" style={{ fontSize: 13 }}>Bitcoin Sports Network</span>
        <div className="footer-sep" />
        <span className="footer-logo-word" style={{ fontSize: 13 }}>Glen Abbey</span>
      </div>
      <div className="footer-center">
        &copy; 2026 Satstreet Inc. &bull; Bitcoin Sports Network<br />
        <span style={{ color: 'rgba(255,255,255,.16)' }}>The Bitcoin Golf &amp; Hold&rsquo;em Open &bull; Glen Abbey Golf Club, Oakville ON</span>
      </div>
      <div className="footer-right">
        <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'var(--ghost)' }}>Venue</span><br />
        <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,.4)', letterSpacing: '.05em' }}>Glen Abbey Golf Club</span><br />
        <span style={{ fontSize: 10, color: 'var(--ghost)' }}>1333 Dorval Dr, Oakville ON L6M 4X7</span>
      </div>
    </footer>
  );
}
