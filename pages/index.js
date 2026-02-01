import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <>
      <Head>
        <title>KRIDHA Packaged Drinking Water | Vedika Enterprises</title>

        <meta
          name="description"
          content="KRIDHA Packaged Drinking Water supplier in Lohta, Varanasi. Daily water supply and water supply for marriages and events. Call now."
        />

        <meta
          name="keywords"
          content="water supplier in lohta, packaged drinking water varanasi, water supply for marriage, kridha water, vedika enterprises"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Local SEO */}
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Varanasi" />
        <meta name="geo.position" content="25.2677;82.9913" />
      </Head>

      <div className={dark ? "dark" : ""}>
        <main className="container">

          {/* HEADER */}
          <header className="header">
            <h1>KRIDHA Packaged Drinking Water</h1>
            <p className="sub">Vedika Enterprises</p>
            <p className="owner">Proprietor: Shivam Rai</p>

            <div className="buttons">
              <a href="tel:7000204611" className="btn call">
                📞 Call
              </a>
              <a
                href="https://wa.me/917000204611"
                target="_blank"
                className="btn whatsapp"
              >
                💬 WhatsApp
              </a>
            </div>

            <button onClick={() => setDark(!dark)} className="toggle">
              🌙 Dark Mode
            </button>
          </header>

          {/* IMAGE */}
          <img
            src="/Whatsapp Image 2026-02-01.jpg"
            alt="KRIDHA Packaged Drinking Water Supplier in Varanasi"
            className="image"
          />

          {/* SERVICES */}
          <section className="card">
            <h2>Our Services</h2>
            <ul>
              <li>🚰 Daily Packaged Drinking Water Supply</li>
              <li>💍 Water Supply for Marriages & Events</li>
              <li>📦 Sizes: 200ml, 500ml, 1L, 2L</li>
            </ul>
          </section>

          {/* AREA */}
          <section className="card">
            <h2>Service Area</h2>
            <p>
              Kashi Vishwanathpuram Colony, Harpalpur, Lohta, Varanasi and nearby areas
            </p>
          </section>

          {/* CONTACT */}
          <section className="card">
            <h2>Contact Details</h2>
            <p>📞 7000204611, 9044364832</p>
            <p>📧 raibhaiya786@gmail.com</p>
            <p>
              📍 Kashi Vishwanathpuram Colony, Harpalpur, Lohta, VNS – 221107
            </p>
          </section>

          {/* MAP */}
          <section className="card">
            <h2>Our Location</h2>

            <div className="map">
              <iframe
                src="https://www.google.com/maps?q=Kashi+Vishwanathpuram+Colony+Harpalpur+Lohta+Varanasi+221107&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Kashi+Vishwanathpuram+Colony+Harpalpur+Lohta+Varanasi+221107"
              target="_blank"
              className="btn direction"
            >
              📍 Get Directions
            </a>
          </section>

          <footer>
            <p>© 2026 KRIDHA Packaged Drinking Water</p>
          </footer>

        </main>
      </div>
    </>
  );
}
