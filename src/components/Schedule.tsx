const events = [
  { time: '12:00', period: 'PM', title: 'Arrival & Registration', desc: 'Guests arrive at Glen Abbey. Welcome reception, check-in, cart assignment, and distribution of golfer inclusions. An opportunity to connect before the round begins.', delay: 'd1' },
  { time: '1:30', period: 'PM', title: 'Shotgun Start', desc: "All teams tee off simultaneously from assigned holes across the championship layout. Scramble format. 18 holes of championship play on one of Canada's most storied courses.", delay: 'd1' },
  { time: '5:30', period: 'PM', title: 'Post-Round Cocktail Reception', desc: 'Players return to the clubhouse. Score submission, casual networking, and a cocktail reception while results are tabulated.', delay: 'd2' },
  { time: '6:30', period: 'PM', title: 'Dinner Buffet Opens', desc: "A curated buffet dinner service opens in the private dining room. Golf results are announced and extra Hold\u2019em cards are distributed to winning teams.", delay: 'd2' },
  { time: '7:30', period: 'PM', title: "Texas Hold\u2019em Tournament Begins", desc: 'Players take their seats at the poker tables. Starting hands reflect the cards earned on the course. No buy-ins. No re-buys. Sponsor-donated prizes only.', delay: 'd3' },
  { time: '9:30', period: 'PM', title: 'Awards & Close of Evening', desc: 'Poker tournament concludes. Golf and poker awards presented. Official programme closes. The evening remains open for guests who wish to continue privately.', delay: 'd3' },
];

export default function Schedule() {
  return (
    <section className="section schedule sec-pad" id="schedule">
      <div className="wrap">
        <div className="rv" style={{ marginBottom: 56 }}>
          <div className="slabel"><span className="slabel-txt">Day of Schedule</span></div>
          <h2 className="dh">Monday, <em>June 8</em></h2>
          <p style={{ fontFamily: "'DM Mono',monospace", fontSize: '10.5px', letterSpacing: '.1em', color: 'var(--ghost)', marginTop: 10 }}>Glen Abbey Golf Club &bull; 1333 Dorval Dr, Oakville, ON &bull; All times local ET</p>
        </div>
        <div className="timeline">
          {events.map((e, i) => (
            <div className={`tl rv ${e.delay}`} key={i}>
              <div className="tl-t">
                <div className="tl-th">{e.time}</div>
                <div className="tl-ts">{e.period}</div>
              </div>
              <div className="tl-spine">
                <div className="tl-node" />
                <div className="tl-rail" />
              </div>
              <div className="tl-body">
                <div className="tl-h">{e.title}</div>
                <div className="tl-p">{e.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
