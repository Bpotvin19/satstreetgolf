export default function Evening() {
  return (
    <section className="section evening sec-pad" id="evening">
      <div className="wrap">
        <div className="evening-grid">
          <div className="rv">
            <div className="slabel"><span className="slabel-txt">The Evening Experience</span></div>
            <div className="ev-right-h">After the Round,<br />the <em>Real Game Begins</em></div>
            <p className="ev-right-p">The evening programme is designed to be as compelling as the golf itself. Following the close of the round, guests transition into a curated dinner and poker experience &mdash; relaxed in atmosphere, elevated in company.</p>
            <p className="ev-right-p" style={{ fontSize: 13 }}>The poker tournament is accessible only to registered golfers or dinner attendees, preserving the quality of the room for the entire evening.</p>
            <div className="poker-note">
              <div className="poker-note-h">Poker Tournament Rules</div>
              <div className="poker-rule">No buy-ins or re-buys &mdash; cards are earned through golf performance</div>
              <div className="poker-rule">Must be registered as a golfer or dinner attendee to participate</div>
              <div className="poker-rule">Prizes are sponsor-donated &mdash; no cash or Bitcoin prizes awarded</div>
            </div>
          </div>
          <div className="ev-cards rv d2">
            <div className="ev-card">
              <div className="ev-icon-wrap">&#127869;</div>
              <div className="ev-content">
                <div className="ev-h">Buffet Dinner Opens</div>
                <div className="ev-p">A curated buffet dinner opens as players return from the course. An opportunity to settle in before the poker begins.</div>
              </div>
            </div>
            <div className="ev-card">
              <div className="ev-icon-wrap">&#127183;</div>
              <div className="ev-content">
                <div className="ev-h">Texas Hold&rsquo;em Tournament</div>
                <div className="ev-p">Players bring their course-earned cards to the table. The number of cards you hold shapes your starting position at the poker table.</div>
              </div>
            </div>
            <div className="ev-card">
              <div className="ev-icon-wrap">&#127942;</div>
              <div className="ev-content">
                <div className="ev-h">Sponsor-Donated Prizes</div>
                <div className="ev-p">A curated prize pool sourced from event sponsors. No cash prizes. No Bitcoin payouts. Just recognition and bragging rights.</div>
              </div>
            </div>
            <div className="ev-card">
              <div className="ev-icon-wrap">&#128101;</div>
              <div className="ev-content">
                <div className="ev-h">Exclusive to Registered Guests</div>
                <div className="ev-p">The evening is closed to the public. Participation in the poker tournament is limited to golfers and registered dinner attendees only.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
