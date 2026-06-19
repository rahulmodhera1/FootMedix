import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import Logo from "./components/Logo";
import Avatar from "./components/Avatar";
import CountUp from "./components/CountUp";

const BOOK_URL = "https://footmedix.janeapp.com/";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Top bar */}
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__contact">
            <a href="tel:+14379903008" aria-label="Call FootMedix">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              <span>437-990-3008</span>
            </a>
            <a href="mailto:footmedix1@gmail.com" aria-label="Email FootMedix">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></svg>
              <span>footmedix1@gmail.com</span>
            </a>
          </div>
          <div className="topbar__note">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
            <span>520 Ellesmere Rd, Ste 215, Scarborough, ON</span>
          </div>
        </div>
      </div>

      <Nav />

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero__bg" aria-hidden="true"></div>
        <div className="hero__orbs" aria-hidden="true">
          <span className="orb orb--a"></span>
          <span className="orb orb--b"></span>
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="eyebrow">Chiropody &amp; Foot Care Clinic · Scarborough</span>
            <h1>
              Healthy feet,
              <br />
              <span>every step of the way.</span>
            </h1>
            <p className="hero__lead">
              At FootMedix, our registered chiropodist provides expert, personalized foot
              care — from custom orthotics and diabetic foot care to ingrown toenails and
              callus removal. Walk in with discomfort, walk out with relief.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary btn--lg" href={BOOK_URL} target="_blank" rel="noopener">
                Book an Appointment
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </a>
              <a className="btn btn--ghost btn--lg" href="#services">Explore Services</a>
            </div>
            <ul className="hero__badges">
              <li>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
                Registered Chiropodist
              </li>
              <li>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
                Accepting New Patients
              </li>
              <li>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
                Most Insurance Plans
              </li>
            </ul>
          </div>
          <div className="hero__card">
            <div className="infocard">
              <h3>Visit the Clinic</h3>
              <ul className="infocard__list">
                <li>
                  <span className="infocard__ico">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </span>
                  <div>
                    <strong>Location</strong>
                    520 Ellesmere Rd, Ste 215<br />Scarborough, ON M1R 0B1
                  </div>
                </li>
                <li>
                  <span className="infocard__ico">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </span>
                  <div>
                    <strong>Contact</strong>
                    <a href="tel:+14379903008">437-990-3008</a><br />
                    <a href="mailto:footmedix1@gmail.com">footmedix1@gmail.com</a>
                  </div>
                </li>
                <li>
                  <span className="infocard__ico">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                  </span>
                  <div>
                    <strong>Hours</strong>
                    By appointment · Mon–Sat
                  </div>
                </li>
              </ul>
              <a className="btn btn--primary btn--block" href={BOOK_URL} target="_blank" rel="noopener">Book Online Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="strip">
        <div className="container strip__inner">
          <div className="strip__item"><strong><CountUp end={2} /></strong><span>registered chiropodists</span></div>
          <div className="strip__item"><strong><CountUp end={9} suffix="+" /></strong><span>foot care services</span></div>
          <div className="strip__item"><strong>Most</strong><span>insurance plans accepted</span></div>
        </div>
      </section>

      {/* Services */}
      <section className="section has-orbs" id="services">
        <div className="orbs orbs--soft" aria-hidden="true">
          <span className="orb orb--a"></span>
          <span className="orb orb--b"></span>
        </div>
        <div className="container">
          <div className="section__head">
            <span className="eyebrow eyebrow--center">What We Treat</span>
            <h2>Comprehensive Foot Care Services</h2>
            <p>From routine maintenance to specialized treatment, we care for every part of your foot health under one roof.</p>
          </div>

          <div className="grid services">
            <article className="card service">
              <div className="service__ico">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
              </div>
              <h3>General Foot Health</h3>
              <p>Routine assessments and maintenance to keep your feet comfortable, healthy and pain-free.</p>
            </article>

            <article className="card service">
              <div className="service__ico">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
              </div>
              <h3>Nail Care</h3>
              <p>Professional trimming and management of thickened, discoloured or problematic toenails.</p>
            </article>

            <article className="card service">
              <div className="service__ico">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m18 2 4 4-14 14H4v-4L18 2z" /><path d="m14.5 5.5 4 4" /></svg>
              </div>
              <h3>Callus &amp; Corn Removal</h3>
              <p>Gentle removal of thick, hardened skin caused by friction and pressure, restoring comfort.</p>
            </article>

            <article className="card service">
              <div className="service__ico">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19a6 6 0 0 1 12 0" /><path d="M2 19h18" /><path d="M16 12c2.5 0 4-1.5 4-4s-1.5-4-4-4" /></svg>
              </div>
              <h3>Custom Orthotics</h3>
              <p>Custom-made devices that discreetly support, align and accommodate your feet to improve function.</p>
            </article>

            <article className="card service">
              <div className="service__ico">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h3>Ingrown Toenails</h3>
              <p>Conservative and minor surgical treatment for painful, swollen and infected ingrown nails.</p>
            </article>

            <article className="card service">
              <div className="service__ico">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
              </div>
              <h3>Diabetic Foot Care</h3>
              <p>Regular monitoring, education and care to help prevent serious complications from diabetes.</p>
            </article>

            <article className="card service">
              <div className="service__ico">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2v6a6 6 0 0 0 12 0V2" /><path d="M6 22v-6a6 6 0 0 1 12 0v6" /><path d="M6 2h12" /><path d="M6 22h12" /></svg>
              </div>
              <h3>Compression Stockings</h3>
              <p>Fitting and supply of medical-grade compression stockings to improve circulation and comfort.</p>
            </article>

            <article className="card service">
              <div className="service__ico">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /><path d="M11 8v6" /><path d="M8 11h6" /></svg>
              </div>
              <h3>Warts Removal</h3>
              <p>Effective treatment of plantar warts and verrucae for clear, healthy skin.</p>
            </article>

            <article className="card service">
              <div className="service__ico">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
              </div>
              <h3>Biomechanical &amp; Gait Analysis</h3>
              <p>Detailed assessment of how you walk and stand to diagnose and correct foot abnormalities.</p>
            </article>
          </div>

          <div className="section__cta">
            <p>Not sure what you need? We&apos;ll assess your feet and recommend the right care.</p>
            <a className="btn btn--primary" href={BOOK_URL} target="_blank" rel="noopener">Book a Consultation</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section section--alt" id="about">
        <div className="container about">
          <div className="about__media" aria-hidden="true">
            <div className="about__photo">
              <svg viewBox="0 0 24 24" width="120" height="120" fill="currentColor" opacity="0.9"><path d="M15.5 2c-2 0-3.3 1.4-3.3 3.6 0 1 .2 1.9.2 2.8 0 1.1-.6 1.7-1.7 1.7-1.4 0-2.2-1-2.5-2.6C7.7 5.3 6.4 4 4.8 4 3.2 4 2 5.3 2 7.1c0 3.5 2.4 6.6 5.9 7.9.9.3 1.4 1 1.5 2l.2 1.9c.2 1.7 1.5 3.1 3.4 3.1 2.1 0 3.6-1.6 3.6-3.9 0-1.6-.5-3.1-.5-4.7 0-3.4.6-5 2.2-6.3.9-.7 1.4-1.6 1.4-2.7C19.9 3.5 18 2 15.5 2z" /></svg>
            </div>
            <div className="about__stat">
              <strong>College of Chiropodists of Ontario</strong>
              <span>Registered &amp; regulated practitioner</span>
            </div>
          </div>
          <div className="about__content">
            <span className="eyebrow">About FootMedix</span>
            <h2>Expert, compassionate care for your feet</h2>
            <p>
              FootMedix is a dedicated chiropody clinic in Scarborough, Toronto, home to two
              chiropodists registered with the College of Chiropodists of Ontario. A
              chiropodist is a primary healthcare professional who specializes in the
              assessment, management and prevention of diseases and disorders of the foot —
              through therapeutic, surgical, orthotic and palliative care.
            </p>
            <p>
              From podiatric nail and skin disorders to biomechanical and gait analyses,
              custom orthotics and diabetic foot care, every patient receives a thorough,
              personalized assessment and a treatment plan built around their needs and
              lifestyle. Our goal is simple: to get you back on your feet, comfortably.
            </p>
            <ul className="about__list">
              <li><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> Two registered chiropodists in good standing</li>
              <li><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> Individualized, holistic patient-first care</li>
              <li><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> Conservative and surgical treatment options</li>
              <li><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> Currently accepting new patients</li>
            </ul>
            <a className="btn btn--primary" href="#team">Meet Our Chiropodists</a>
          </div>
        </div>
      </section>

      {/* Team / Chiropodists */}
      <section className="section" id="team">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow eyebrow--center">Meet the Team</span>
            <h2>Our Chiropodists</h2>
            <p>Both of our chiropodists are registered and in good standing with the College of Chiropodists of Ontario, with advanced training from the Michener Institute.</p>
          </div>

          <div className="grid team">
            <article className="team-card">
              <div className="team-card__top">
                <Avatar src="/team/Radha.png" initials="RM" alt="Radha Modhera, Chiropodist" />
                <div className="team-card__name">
                  <h3>Radha Modhera</h3>
                  <div className="team-card__role">Chiropodist · BSc (Hons)</div>
                </div>
              </div>
              <div className="team-card__creds">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                College of Chiropodists of Ontario
              </div>
              <p>
                Radha graduated from the University of Waterloo with a Bachelor of Science in
                Honours Kinesiology and holds an Advanced Graduate Diploma in Chiropody from the
                Michener Institute of Education at UHN. A licensed chiropodist in good standing,
                she is passionate about getting patients back on their feet through an
                individualized, holistic approach to care — with a special interest in diabetic
                foot prevention.
              </p>
              <a className="team-card__link" href={BOOK_URL} target="_blank" rel="noopener">
                Book with Radha
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </a>
            </article>

            <article className="team-card">
              <div className="team-card__top">
                <Avatar src="/team/Emily.png" initials="E" alt="Emily, Chiropodist" />
                <div className="team-card__name">
                  <h3>Emily</h3>
                  <div className="team-card__role">Chiropodist · BKin</div>
                </div>
              </div>
              <div className="team-card__creds">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                College of Chiropodists of Ontario
              </div>
              <p>
                Emily completed her Bachelor of Kinesiology at the University of Toronto and a
                Graduate Advanced Diploma of Health Sciences in Chiropody at the Michener
                Institute for Applied Health Sciences. She has assessed and treated patients of
                all ages at the Diabetes Education Centre at North York General Hospital and the
                Waterloo Foot Clinic, with experience in podiatric nail and skin disorders,
                biomechanical and gait analyses, and diabetic foot care and education.
              </p>
              <a className="team-card__link" href={BOOK_URL} target="_blank" rel="noopener">
                Book with Emily
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section section--alt" id="why">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow eyebrow--center">Why Choose FootMedix</span>
            <h2>Care you can stand on</h2>
            <p>We combine clinical expertise with a warm, welcoming approach so every visit feels easy.</p>
          </div>
          <div className="grid why">
            <div className="card why__item">
              <div className="why__ico"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5l-8-3z" /><path d="m9 12 2 2 4-4" /></svg></div>
              <h3>Regulated Professional</h3>
              <p>Treatment by a chiropodist registered with the College of Chiropodists of Ontario.</p>
            </div>
            <div className="card why__item">
              <div className="why__ico"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg></div>
              <h3>Easy Online Booking</h3>
              <p>Reserve your appointment in seconds through our secure JaneApp booking system.</p>
            </div>
            <div className="card why__item">
              <div className="why__ico"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></div>
              <h3>Patient-First Comfort</h3>
              <p>A calm, friendly clinic where your comfort and questions always come first.</p>
            </div>
            <div className="card why__item">
              <div className="why__ico"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg></div>
              <h3>Insurance Friendly</h3>
              <p>Most extended health plans cover chiropody. We provide receipts for easy reimbursement.</p>
            </div>
          </div>
          <p className="why__note">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
            Please note: Chiropodists in Ontario are not able to bill under OHIP. However, most extended health care plans cover chiropody services.
          </p>
        </div>
      </section>

      {/* CTA banner */}
      <section className="cta">
        <div className="container cta__inner">
          <div>
            <h2>Ready to put your best foot forward?</h2>
            <p>Book your appointment online today — it only takes a minute.</p>
          </div>
          <div className="cta__actions">
            <a className="btn btn--white btn--lg" href={BOOK_URL} target="_blank" rel="noopener">Book an Appointment</a>
            <a className="btn btn--outline-white btn--lg" href="tel:+14379903008">Call 437-990-3008</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow eyebrow--center">Get In Touch</span>
            <h2>Visit FootMedix</h2>
            <p>Conveniently located in Scarborough at Ellesmere &amp; Birchmount. Free, accessible parking on site.</p>
          </div>

          <div className="contact">
            <div className="contact__info">
              <div className="contact__row">
                <span className="contact__ico"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></span>
                <div>
                  <strong>Address</strong>
                  <a href="https://maps.google.com/?q=520+Ellesmere+Rd+Ste+215+Scarborough+ON+M1R+0B1" target="_blank" rel="noopener">520 Ellesmere Rd, Ste 215<br />Scarborough, ON M1R 0B1</a>
                </div>
              </div>
              <div className="contact__row">
                <span className="contact__ico"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg></span>
                <div>
                  <strong>Phone</strong>
                  <a href="tel:+14379903008">437-990-3008</a>
                </div>
              </div>
              <div className="contact__row">
                <span className="contact__ico"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></svg></span>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:footmedix1@gmail.com">footmedix1@gmail.com</a>
                </div>
              </div>
              <div className="contact__row">
                <span className="contact__ico"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></span>
                <div>
                  <strong>Hours</strong>
                  By appointment only<br />Monday – Saturday
                </div>
              </div>
              <a className="btn btn--primary btn--block" href={BOOK_URL} target="_blank" rel="noopener">Book Your Appointment</a>
            </div>

            <div className="contact__map">
              <iframe
                title="FootMedix location map"
                src="https://www.google.com/maps?q=520%20Ellesmere%20Rd%20Ste%20215%20Scarborough%20ON%20M1R%200B1&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <a href="#home" className="brand brand--light">
              <Logo height={64} light />
            </a>
            <p>Your trusted chiropody and foot care clinic in Scarborough, Toronto. Expert care for healthier, happier feet.</p>
          </div>

          <div className="footer__col">
            <h4>Explore</h4>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#why">Why Us</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer__col">
            <h4>Services</h4>
            <a href="#services">Custom Orthotics</a>
            <a href="#services">Diabetic Foot Care</a>
            <a href="#services">Ingrown Toenails</a>
            <a href="#services">Callus &amp; Corn Removal</a>
            <a href="#services">Compression Stockings</a>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <a href="https://maps.google.com/?q=520+Ellesmere+Rd+Ste+215+Scarborough+ON+M1R+0B1" target="_blank" rel="noopener">520 Ellesmere Rd, Ste 215<br />Scarborough, ON M1R 0B1</a>
            <a href="tel:+14379903008">437-990-3008</a>
            <a href="mailto:footmedix1@gmail.com">footmedix1@gmail.com</a>
            <a className="btn btn--primary btn--sm" href={BOOK_URL} target="_blank" rel="noopener">Book Appointment</a>
          </div>
        </div>
        <div className="footer__bar">
          <div className="container footer__bar-inner">
            <span>© {year} FootMedix. All rights reserved.</span>
            <span>Chiropody &amp; Foot Care · Scarborough, Toronto</span>
          </div>
        </div>
      </footer>

      <a className="floating-book" href={BOOK_URL} target="_blank" rel="noopener" aria-label="Book an appointment">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
        <span>Book Now</span>
      </a>

      <Reveal />
    </>
  );
}
