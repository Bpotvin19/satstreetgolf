export default function Perks() {
  return (
    <section className="section perks sec-pad" id="perks">
      <div className="wrap">
        <div className="rv" style={{ marginBottom: 44 }}>
          <div className="slabel"><span className="slabel-txt">Golfer Inclusions</span></div>
          <h2 className="dh">What Every Golfer <em>Receives</em></h2>
        </div>
        <div className="perks-grid rv d1">
          <div className="perk-card">
            <div className="perk-icon">&#9971;</div>
            <div>
              <div className="perk-h">Titleist ProV1 Golf Balls</div>
              <div className="perk-p">Every registered golfer receives a sleeve of Titleist ProV1 balls &mdash; the choice of Tour professionals worldwide.</div>
            </div>
          </div>
          <div className="perk-card">
            <div className="perk-icon">&#127944;</div>
            <div>
              <div className="perk-h">Custom Satstreet Golf Hat</div>
              <div className="perk-p">A custom-branded Satstreet hat, produced exclusively for this event. Presented to each golfer upon arrival.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
