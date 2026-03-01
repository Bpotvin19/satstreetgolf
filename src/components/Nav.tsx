import { go } from '../utils';

export default function Nav() {
  return (
    <nav className="nav" id="nav">
      <div className="nav-brand">
        <span className="nav-brand-name">Satstreet</span>
      </div>
      <div className="nav-sp" />
      <div className="nav-links">
        <span className="nav-link" onClick={() => go('about')}>About</span>
        <span className="nav-link" onClick={() => go('format')}>Format</span>
        <span className="nav-link" onClick={() => go('evening')}>Evening</span>
        <span className="nav-link" onClick={() => go('schedule')}>Schedule</span>
        <span className="nav-link" onClick={() => go('sponsor-sec')}>Sponsorship</span>
      </div>
      <button className="nav-cta" onClick={() => go('reg')}>Register Now</button>
    </nav>
  );
}
