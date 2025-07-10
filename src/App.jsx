import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import solereLogo from './assets/solere-logo.png';
import aiIcon from './assets/ai.svg';
import chipIcon from './assets/chip.svg';
import gpuIcon from './assets/gpu.svg';
import leaderIcon from './assets/leader.svg';

function Home() {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem 0' }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', marginBottom: 48 }}>
        <h1 style={{ fontSize: 48, fontWeight: 800, background: 'linear-gradient(90deg, #1de9b6 40%, #0d3c47 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 16 }}>
          Global Talent for AI, Microchip, GPU & ASIC Teams
        </h1>
        <p style={{ fontSize: 20, color: '#333', marginBottom: 32 }}>
          We connect world-class engineers and deep tech talent with the companies building the future.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
          <a href="/contact" style={{ background: 'linear-gradient(90deg, #1de9b6 60%, #0d3c47 100%)', color: '#fff', padding: '14px 36px', borderRadius: 32, fontWeight: 700, fontSize: 18, textDecoration: 'none', boxShadow: '0 4px 24px rgba(29,233,182,0.15)', transition: 'box-shadow 0.2s' }}>For Clients</a>
          <a href="/contact" style={{ background: '#fff', color: '#0d3c47', border: '2px solid #1de9b6', padding: '14px 36px', borderRadius: 32, fontWeight: 700, fontSize: 18, textDecoration: 'none', transition: 'background 0.2s' }}>For Candidates</a>
        </div>
      </section>
      {/* What We Do */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: '#0d3c47', marginBottom: 16 }}>What We Do</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
          <div style={{ flex: '1 1 240px', background: '#fff', borderRadius: 16, padding: 32, boxShadow: '0 2px 16px rgba(29,233,182,0.07)', minWidth: 240, maxWidth: 320, textAlign: 'center' }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>AI & Machine Learning</div>
            <div style={{ color: '#444' }}>LLMs, computer vision, NLP, data science, and more.</div>
          </div>
          <div style={{ flex: '1 1 240px', background: '#fff', borderRadius: 16, padding: 32, boxShadow: '0 2px 16px rgba(29,233,182,0.07)', minWidth: 240, maxWidth: 320, textAlign: 'center' }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Microchip & ASIC Design</div>
            <div style={{ color: '#444' }}>Digital, analog, SoC, verification, and layout experts.</div>
          </div>
          <div style={{ flex: '1 1 240px', background: '#fff', borderRadius: 16, padding: 32, boxShadow: '0 2px 16px rgba(29,233,182,0.07)', minWidth: 240, maxWidth: 320, textAlign: 'center' }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>GPU & High-Performance Computing</div>
            <div style={{ color: '#444' }}>CUDA, OpenCL, hardware acceleration, and more.</div>
          </div>
          <div style={{ flex: '1 1 240px', background: '#fff', borderRadius: 16, padding: 32, boxShadow: '0 2px 16px rgba(29,233,182,0.07)', minWidth: 240, maxWidth: 320, textAlign: 'center' }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Technical Leadership</div>
            <div style={{ color: '#444' }}>CTOs, VPs, and engineering managers for deep tech teams.</div>
          </div>
        </div>
      </section>
      {/* Expertise Section */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: '#0d3c47', marginBottom: 16 }}>Our Expertise</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
          <div style={{ flex: '1 1 200px', background: '#f8fffd', borderRadius: 16, padding: 24, border: '1.5px solid #e0f7f4', boxShadow: '0 2px 8px rgba(13,60,71,0.04)', textAlign: 'center', minWidth: 180 }}>
            <div style={{ fontWeight: 600, marginTop: 8 }}>AI/ML Engineers</div>
            <div style={{ color: '#666', fontSize: 15 }}>Experts in deep learning, NLP, and data science.</div>
          </div>
          <div style={{ flex: '1 1 200px', background: '#f8fffd', borderRadius: 16, padding: 24, border: '1.5px solid #e0f7f4', boxShadow: '0 2px 8px rgba(13,60,71,0.04)', textAlign: 'center', minWidth: 180 }}>
            <div style={{ fontWeight: 600, marginTop: 8 }}>Microchip & ASIC</div>
            <div style={{ color: '#666', fontSize: 15 }}>Design, verification, and layout specialists.</div>
          </div>
          <div style={{ flex: '1 1 200px', background: '#f8fffd', borderRadius: 16, padding: 24, border: '1.5px solid #e0f7f4', boxShadow: '0 2px 8px rgba(13,60,71,0.04)', textAlign: 'center', minWidth: 180 }}>
            <div style={{ fontWeight: 600, marginTop: 8 }}>GPU & HPC</div>
            <div style={{ color: '#666', fontSize: 15 }}>High-performance computing and hardware acceleration.</div>
          </div>
          <div style={{ flex: '1 1 200px', background: '#f8fffd', borderRadius: 16, padding: 24, border: '1.5px solid #e0f7f4', boxShadow: '0 2px 8px rgba(13,60,71,0.04)', textAlign: 'center', minWidth: 180 }}>
            <div style={{ fontWeight: 600, marginTop: 8 }}>Tech Leadership</div>
            <div style={{ color: '#666', fontSize: 15 }}>CTOs, VPs, and engineering managers for deep tech teams.</div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section style={{ textAlign: 'center', marginTop: 64 }}>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: '#0d3c47', marginBottom: 16 }}>Ready to Build Your Deep Tech Team?</h2>
        <p style={{ fontSize: 18, color: '#444', marginBottom: 32 }}>
          Connect with our specialists to discuss your hiring needs or career goals. Let’s shape the future together.
        </p>
        <a href="/contact" style={{ background: 'linear-gradient(90deg, #1de9b6 60%, #0d3c47 100%)', color: '#fff', padding: '16px 48px', borderRadius: 32, fontWeight: 700, fontSize: 20, textDecoration: 'none', boxShadow: '0 4px 24px rgba(29,233,182,0.15)', transition: 'box-shadow 0.2s' }}>Contact Us</a>
      </section>
    </div>
  );
}
function About() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 0' }}>
      <section style={{ marginBottom: 48 }}>
        <h1 style={{ fontSize: 40, fontWeight: 800, color: '#0d3c47', marginBottom: 16 }}>About Solere</h1>
        <p style={{ fontSize: 20, color: '#333', marginBottom: 24 }}>
          Solere is a specialist recruitment partner for companies building the future in AI, microchip design, GPU, and ASIC engineering. Our mission is to connect world-class technical talent with the most innovative teams globally.
        </p>
      </section>
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: '#0d3c47', marginBottom: 12 }}>Why Choose Us?</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: 20, background: '#f8fffd', borderRadius: 12, padding: 20, boxShadow: '0 2px 8px rgba(29,233,182,0.07)' }}>
            <strong>Deep Tech Expertise:</strong> We focus exclusively on AI, microchip, GPU, and ASIC roles—no generic recruitment.
          </li>
          <li style={{ marginBottom: 20, background: '#f8fffd', borderRadius: 12, padding: 20, boxShadow: '0 2px 8px rgba(29,233,182,0.07)' }}>
            <strong>Global Network:</strong> Our reach spans the UK, Europe, US, and beyond, giving you access to rare and exceptional talent.
          </li>
          <li style={{ marginBottom: 20, background: '#f8fffd', borderRadius: 12, padding: 20, boxShadow: '0 2px 8px rgba(29,233,182,0.07)' }}>
            <strong>Precision & Speed:</strong> We deliver tailored shortlists quickly, so you can hire with confidence and efficiency.
          </li>
          <li style={{ background: '#f8fffd', borderRadius: 12, padding: 20, boxShadow: '0 2px 8px rgba(29,233,182,0.07)' }}>
            <strong>Trusted by Innovators:</strong> We partner with startups and global leaders at the cutting edge of technology.
          </li>
        </ul>
      </section>
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: '#0d3c47', marginBottom: 12 }}>How We Work</h2>
        <ol style={{ paddingLeft: 20, color: '#333', fontSize: 18 }}>
          <li style={{ marginBottom: 12 }}><strong>Discovery:</strong> We learn your needs, culture, and goals.</li>
          <li style={{ marginBottom: 12 }}><strong>Targeted Search:</strong> We identify and engage the best-fit candidates from our network.</li>
          <li style={{ marginBottom: 12 }}><strong>Rigorous Qualification:</strong> Every candidate is screened for technical and cultural fit.</li>
          <li><strong>Support:</strong> We guide you and your new hire through every step to ensure a smooth onboarding.</li>
        </ol>
      </section>
    </div>
  );
}
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    type: 'Client',
    name: '',
    email: '',
    company: '',
    message: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 0' }}>
      <section style={{ marginBottom: 48 }}>
        <h1 style={{ fontSize: 40, fontWeight: 800, color: '#0d3c47', marginBottom: 16 }}>Contact Us</h1>
        <p style={{ fontSize: 18, color: '#333', marginBottom: 24 }}>
          Reach out to discuss your hiring needs or career opportunities in AI and deep tech.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
          <div style={{ flex: '1 1 300px', background: '#f8fffd', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(29,233,182,0.07)', minWidth: 260 }}>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>Email</div>
            <div style={{ marginBottom: 16 }}><a href="mailto:hello@solere.co" style={{ color: '#0d3c47' }}>hello@solere.co</a></div>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>Locations</div>
            <div>London · San Francisco · Berlin</div>
            <div style={{ fontWeight: 600, margin: '16px 0 8px' }}>Office Hours</div>
            <div>Mon-Fri: 7:00 AM – 7:00 PM (PST)</div>
          </div>
          <div style={{ flex: '2 1 340px', background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(29,233,182,0.07)', minWidth: 300 }}>
            {submitted ? (
              <div style={{ fontSize: 22, color: '#1de9b6', textAlign: 'center', fontWeight: 700, padding: '40px 0' }}>
                Thank you for your message!<br />We’ll be in touch soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ fontWeight: 600, marginRight: 8 }}>I am a:</label>
                  <select name="type" value={form.type} onChange={handleChange} style={{ padding: 8, borderRadius: 6, border: '1px solid #e0f7f4' }}>
                    <option value="Client">Client (Hiring Talent)</option>
                    <option value="Candidate">Candidate (Looking for Opportunities)</option>
                  </select>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="Full Name" style={{ width: '100%', padding: 12, borderRadius: 6, border: '1px solid #e0f7f4', fontSize: 16 }} />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Email" style={{ width: '100%', padding: 12, borderRadius: 6, border: '1px solid #e0f7f4', fontSize: 16 }} />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <input name="company" value={form.company} onChange={handleChange} placeholder="Company (optional)" style={{ width: '100%', padding: 12, borderRadius: 6, border: '1px solid #e0f7f4', fontSize: 16 }} />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Message" rows={4} style={{ width: '100%', padding: 12, borderRadius: 6, border: '1px solid #e0f7f4', fontSize: 16 }} />
                </div>
                <button type="submit" style={{ width: '100%', background: 'linear-gradient(90deg, #1de9b6 60%, #0d3c47 100%)', color: '#fff', fontWeight: 700, fontSize: 18, padding: '14px 0', borderRadius: 32, border: 'none', boxShadow: '0 4px 24px rgba(29,233,182,0.10)', cursor: 'pointer' }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function Footer() {
  return (
    <footer style={{
      background: '#fff',
      borderTop: '1.5px solid #e0f7f4',
      marginTop: 64,
      padding: '2.5rem 0 1.5rem 0',
      textAlign: 'center',
      color: '#0d3c47',
      fontSize: 16,
      boxShadow: '0 -2px 16px rgba(13,60,71,0.04)',
    }}>
      <div style={{ marginBottom: 16 }}>
        <a href="mailto:hello@solere.co" style={{ color: '#0d3c47', textDecoration: 'none', fontWeight: 600 }}>hello@solere.co</a>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginBottom: 16 }}>
        <a href="https://www.linkedin.com/company/solere/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="#1de9b6"/>
            <path d="M10.5 13.5V22M10.5 10.5V10.51M16 22V17.5C16 16.3954 16.8954 15.5 18 15.5C19.1046 15.5 20 16.3954 20 17.5V22M13 10.5C13 11.3284 12.3284 12 11.5 12C10.6716 12 10 11.3284 10 10.5C10 9.67157 10.6716 9 11.5 9C12.3284 9 13 9.67157 13 10.5Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <a href="https://x.com/AgencySolere" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="#0d3c47"/>
            <path d="M10 10L22 22M22 10L10 22" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
          </svg>
        </a>
      </div>
      <div style={{ marginBottom: 8 }}>
        <a href="https://www.solere.co/" target="_blank" rel="noopener noreferrer" style={{ color: '#1de9b6', fontWeight: 600, textDecoration: 'none' }}>www.solere.co</a>
      </div>
      <div style={{ color: '#aaa', fontSize: 14, marginTop: 8 }}>
        &copy; {new Date().getFullYear()} Solere. All rights reserved.
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.5rem 3rem',
        background: '#fff',
        boxShadow: '0 4px 24px rgba(13,60,71,0.06)',
        borderRadius: 18,
        margin: '2rem auto 2.5rem',
        maxWidth: 1200,
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={solereLogo} alt="Solere Logo" style={{ height: 44, marginRight: 12 }} />
        </div>
        <nav style={{ display: 'flex', gap: 40 }}>
          <Link to="/" style={{ fontWeight: 600, fontSize: 18, color: '#0d3c47', padding: '6px 0', textDecoration: 'none', transition: 'color 0.2s' }}>Home</Link>
          <Link to="/about" style={{ fontWeight: 600, fontSize: 18, color: '#0d3c47', padding: '6px 0', textDecoration: 'none', transition: 'color 0.2s' }}>About Us</Link>
          <Link to="/contact" style={{ fontWeight: 600, fontSize: 18, color: '#0d3c47', padding: '6px 0', textDecoration: 'none', transition: 'color 0.2s' }}>Contact</Link>
        </nav>
      </header>
      <main style={{ padding: '2rem', background: '#f8fafd', minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
