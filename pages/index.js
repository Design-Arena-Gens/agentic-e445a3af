import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Futuristic Profile — Your Name</title>
        <meta
          name="description"
          content="Welcome to my futuristic personal landing page. Explore my journey, skills, and the missions I'm on."
        />
      </Head>
      <main className={styles.page}>
        <div className={styles.backgroundGrid} />
        <div className={styles.aurora} />
        <section className={styles.hero}>
          <div className={styles.heroCard}>
            <div className={styles.heroContent}>
              <span className={styles.badge}>Mission-Ready Visionary</span>
              <h1 className={styles.heroTitle}>
                Hello, I&apos;m <span>Your Name</span>
              </h1>
              <p className={styles.heroSubtitle}>
                A multidisciplinary creator blending full-stack engineering, immersive product design, and strategic
                storytelling. I build experiences that feel sentient—augmenting human potential with elegantly crafted
                technology.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#contact">
                  Initiate Collaboration
                </a>
                <a className={styles.ghostButton} href="#about">
                  Decode My Profile
                </a>
              </div>
              <div className={styles.heroStatus}>
                <span className={styles.pulse} />
                Currently exploring spatial interfaces &amp; neural design systems.
              </div>
            </div>
          </div>
          <div className={styles.profileOrb}>
            <div className={styles.orbGlow} />
            <div className={styles.orbCore}>
              <div className={styles.orbLogo}>YN</div>
            </div>
          </div>
        </section>

        <section id="about">
          <h2 className={styles.sectionTitle}>About the Operator</h2>
          <p className={styles.sectionSubtitle}>
            Over the last decade I&apos;ve architected platforms, directed cross-disciplinary product teams, and crafted
            futuristic storytelling initiatives. I thrive where bleeding-edge tech meets human emotion—translating complex
            systems into intuitive narratives that resonate.
          </p>
          <div className={styles.aboutGrid}>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Origin Story</h3>
              <p className={styles.cardBody}>
                Former aerospace engineer turned digital experience architect. I&apos;ve led high-impact missions at
                startups and global labs, ship rapidly, and iterate with purpose.
              </p>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Specialties</h3>
              <p className={styles.cardBody}>
                Full-stack product systems, real-time visualizations, conversational interfaces, and speculative design
                prototypes that become reality.
              </p>
              <div className={styles.capsuleList}>
                <span className={styles.capsule}>Next.js</span>
                <span className={styles.capsule}>WebGL</span>
                <span className={styles.capsule}>AI UX</span>
                <span className={styles.capsule}>Design Ops</span>
              </div>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Guiding Principles</h3>
              <p className={styles.cardBody}>
                Design with empathy, code with intention, and tell stories that bridge today with tomorrow. Every
                interaction should feel alive, inclusive, and luminous.
              </p>
            </article>
          </div>
        </section>

        <section id="contact">
          <h2 className={styles.sectionTitle}>Transmission Channels</h2>
          <p className={styles.sectionSubtitle}>
            Let&apos;s collaborate on the next paradigm shift—products, narratives, or multi-sensory experiences that
            redefine what&apos;s possible.
          </p>
          <div className={styles.aboutGrid}>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Message Capsule</h3>
              <p className={styles.cardBody}>
                Send a transmission detailing your mission objectives, team constellation, and timeline. I&apos;ll respond
                within 24 hours with a strategic alignment plan.
              </p>
              <a className={styles.primaryButton} href="mailto:hello@yourname.io">
                hello@yourname.io
              </a>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Signal Beacon</h3>
              <p className={styles.cardBody}>
                Follow the feed for design experiments, code artifacts, and behind-the-scenes dispatches from ongoing
                explorations.
              </p>
              <div className={styles.socials}>
                <a href="https://dribbble.com" target="_blank" rel="noreferrer">
                  Dribbble
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </article>
          </div>
        </section>

        <footer className={styles.footer}>
          <span>© {new Date().getFullYear()} Your Name. All systems optimal.</span>
          <div className={styles.socials}>
            <a href="#about">Profile</a>
            <a href="#contact">Contact</a>
            <a href="mailto:hello@yourname.io">Email</a>
          </div>
        </footer>
      </main>
    </>
  );
}
