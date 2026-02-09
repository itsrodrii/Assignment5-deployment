// Introduction text assisted by AI

import Hero from '../components/Hero';

function HomePage() {
  return (
    <div>
      <Hero />

      <section style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Why Shop With Us?</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
          ComponentCorner is here to showcase how modern e-commerce websites work
          using React and Single Page Application architecture. Our store provides
          fast navigation, persistent shopping carts, and a very smooth user experience
          without unnecessary page reloads. Happy shopping!
        </p>
      </section>
    </div>
  );
}

export default HomePage;
