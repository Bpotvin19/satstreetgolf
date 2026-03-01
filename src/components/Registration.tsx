import { useState, useRef, useCallback } from 'react';

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
    <path d="M7 1l6 6-6 6M13 7H1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SpinnerIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ animation: 'spinA .7s linear infinite' }}>
    <circle cx="12" cy="12" r="10" stroke="rgba(11,36,68,.25)" strokeWidth="3" />
    <path d="M12 2a10 10 0 0 1 10 10" stroke="rgba(11,36,68,.88)" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export default function Registration() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const successRef = useRef<HTMLDivElement>(null);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3400);
  }, []);

  const handleSubmit = useCallback(() => {
    const f1 = (document.getElementById('f1') as HTMLInputElement)?.value.trim();
    const f2 = (document.getElementById('f2') as HTMLInputElement)?.value.trim();
    const f3 = (document.getElementById('f3') as HTMLInputElement)?.value.trim();
    const f5 = (document.getElementById('f5') as HTMLInputElement)?.value.trim();
    if (!f1 || !f2) { showToast('Please enter your full name.'); return; }
    if (!f3 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f3)) { showToast('Please enter a valid email address.'); return; }
    if (!f5) { showToast('Please enter your company name.'); return; }
    const regtype = document.querySelector('input[name=regtype]:checked') as HTMLInputElement | null;
    if (!regtype) { showToast('Please select a registration type.'); return; }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
      setTimeout(() => {
        successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }, 1300);
  }, [showToast]);

  return (
    <>
      <section className="section reg sec-pad" id="reg">
        <div className="reg-glow" />
        <div className="reg-inner">
          <div className="rv">
            <div className="slabel" style={{ justifyContent: 'center' }}><span className="slabel-txt">Registration</span></div>
            <h2 className="dh" style={{ marginBottom: 14, textAlign: 'center' }}>Secure <em>Your Spot</em></h2>
            <p className="reg-desc">Complete the form below to register for the Bitcoin Golf &amp; Hold&rsquo;em Open. All registrations are reviewed prior to confirmation. Sponsorship inquiries are welcome in the same form.</p>
          </div>

          {!submitted && (
            <div className="form-card rv d1" id="formWrap">
              <div className="form-row">
                <div className="fld"><label className="fld-lbl">First Name</label><input type="text" id="f1" placeholder="James" /></div>
                <div className="fld"><label className="fld-lbl">Last Name</label><input type="text" id="f2" placeholder="Calloway" /></div>
              </div>
              <div className="form-row">
                <div className="fld"><label className="fld-lbl">Email Address</label><input type="email" id="f3" placeholder="james@calloway.com" /></div>
                <div className="fld"><label className="fld-lbl">Phone (optional)</label><input type="tel" id="f4" placeholder="+1 416 000 0000" /></div>
              </div>
              <div className="form-row">
                <div className="fld"><label className="fld-lbl">Company / Fund</label><input type="text" id="f5" placeholder="Calloway Capital Partners" /></div>
                <div className="fld"><label className="fld-lbl">Role / Title</label><input type="text" id="f6" placeholder="Managing Partner" /></div>
              </div>
              <div className="form-row full" style={{ marginBottom: 15 }}>
                <div className="fld">
                  <label className="fld-lbl">Registration Type</label>
                  <div className="radio-group">
                    <label className="r-opt"><input type="radio" name="regtype" value="team" /><span className="r-opt-lbl">Team of Four</span></label>
                    <label className="r-opt"><input type="radio" name="regtype" value="individual" /><span className="r-opt-lbl">Individual Entry</span></label>
                    <label className="r-opt"><input type="radio" name="regtype" value="dinner" /><span className="r-opt-lbl">Dinner Only</span></label>
                  </div>
                </div>
              </div>
              <div className="form-row full" style={{ marginBottom: 15 }}>
                <div className="fld">
                  <label className="fld-lbl">Interested in Sponsorship?</label>
                  <div className="radio-group">
                    <label className="r-opt"><input type="radio" name="sponsor" value="yes" /><span className="r-opt-lbl">Yes, I&rsquo;d like to discuss</span></label>
                    <label className="r-opt"><input type="radio" name="sponsor" value="no" /><span className="r-opt-lbl">Not at this time</span></label>
                  </div>
                </div>
              </div>
              <div className="form-row full">
                <div className="fld">
                  <label className="fld-lbl">Anything else you&rsquo;d like us to know? (optional)</label>
                  <textarea id="f7" rows={3} placeholder="Team member names, dietary requirements, sponsorship interest details..." />
                </div>
              </div>
              <button className="form-submit" disabled={submitting} onClick={handleSubmit}>
                {submitting ? <><SpinnerIcon /> Processing...</> : <><ArrowIcon /> Secure Your Spot</>}
              </button>
              <p className="form-note">All registrations are subject to confirmation. Your information is kept strictly confidential and is not shared with third parties.</p>
            </div>
          )}

          <div className={`form-success${submitted ? ' show' : ''}`} ref={successRef}>
            <div className="succ-ring">&#10003;</div>
            <div className="succ-h">Registration Received</div>
            <p className="succ-p">Thank you. Your registration has been received and will be confirmed by the Satstreet team within two business days. We look forward to seeing you on June 8th.</p>
          </div>
        </div>
      </section>

      {toast && (
        <div className="toast" style={{ display: 'block' }}>{toast}</div>
      )}
    </>
  );
}
