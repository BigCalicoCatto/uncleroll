'use client';

import { useState, useRef } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sections = {
    hero: useRef<HTMLDivElement>(null),
    sauce: useRef<HTMLDivElement>(null),
    menus: useRef<HTMLDivElement>(null),
    location: useRef<HTMLDivElement>(null),
    cta: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <style>{`
        @media (min-width: 768px) {
          .sauce-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
          .menu-row-1, .menu-row-2, .menu-row-3, .menu-row-4 {
            display: flex !important;
            flex-direction: row !important;
            gap: 2rem !important;
          }
          .menu-row-1 > div:first-child, .menu-row-3 > div:first-child {
            order: 0;
          }
          .menu-row-2, .menu-row-4 {
            flex-direction: row-reverse !important;
          }
        }
      `}</style>

      {/* BANNER */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        {/* Logo */}
        <div style={{ width: '60px', height: '60px' }}>
          <img
            src="/unclerolllogo.webp"
            alt="Uncle Roll Logo"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>

        {/* Hamburger & Social Icons */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a
              href="#"
              style={{
                fontSize: '1.5rem',
                color: '#22c55e',
                textDecoration: 'none',
              }}
            >
              <i className="fab fa-tiktok"></i>
            </a>
            <a
              href="#"
              style={{
                fontSize: '1.5rem',
                color: '#22c55e',
                textDecoration: 'none',
              }}
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              color: '#22c55e',
              cursor: 'pointer',
              padding: '0.5rem',
            }}
          >
            <i className={`fas fa-${menuOpen ? 'times' : 'bars'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: 'white',
              borderBottom: '2px solid #22c55e',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              padding: '1.5rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}
          >
            <button
              onClick={() => scrollToSection(sections.hero)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1rem',
                color: '#22c55e',
                cursor: 'pointer',
                textAlign: 'left',
                fontWeight: 'bold',
              }}
            >
              Hero
            </button>
            <button
              onClick={() => scrollToSection(sections.sauce)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1rem',
                color: '#22c55e',
                cursor: 'pointer',
                textAlign: 'left',
                fontWeight: 'bold',
              }}
            >
              Sauces
            </button>
            <button
              onClick={() => scrollToSection(sections.menus)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1rem',
                color: '#22c55e',
                cursor: 'pointer',
                textAlign: 'left',
                fontWeight: 'bold',
              }}
            >
              Menus
            </button>
            <button
              onClick={() => scrollToSection(sections.location)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1rem',
                color: '#22c55e',
                cursor: 'pointer',
                textAlign: 'left',
                fontWeight: 'bold',
              }}
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection(sections.cta)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1rem',
                color: '#22c55e',
                cursor: 'pointer',
                textAlign: 'left',
                fontWeight: 'bold',
              }}
            >
              Contact
            </button>
          </div>
        )}
      </div>

      {/* HERO SECTION */}
      <div
        ref={sections.hero}
        style={{
          position: 'relative',
          width: '100%',
          paddingBottom: '175%', // 9:16 ratio
          backgroundColor: '#000',
          overflow: 'hidden',
        }}
      >
        {/* Background Image */}
        <img
          src="/unclerollhero.webp"
          alt="Uncle Roll Hero"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            gap: '2rem',
          }}
        >
          {/* Main Title */}
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: 'black',
              textAlign: 'center',
              lineHeight: '1.2',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              margin: 0,
            }}
          >
            UNCLE ROLL'S VIETNAM ROLL
          </h1>

          {/* Tagline with Semi-transparent Background */}
          <div
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              padding: '1rem 1.5rem',
              borderRadius: '8px',
            }}
          >
            <p
              style={{
                fontSize: '1.2rem',
                color: 'white',
                textAlign: 'center',
                margin: 0,
                fontWeight: '500',
              }}
            >
              Vietnam Roll Terpadu Seantero Dunia!
            </p>
          </div>

          {/* Animated Down Arrow */}
          <div
            style={{
              position: 'absolute',
              bottom: '2rem',
              animation: 'bounce 2s infinite',
            }}
          >
            <style>{`
              @keyframes bounce {
                0%, 100% {
                  transform: translateY(0);
                  opacity: 1;
                }
                50% {
                  transform: translateY(12px);
                  opacity: 0.7;
                }
              }
            `}</style>
            <button
              onClick={() => scrollToSection(sections.sauce)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '2rem',
                color: '#22c55e',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                filter: 'drop-shadow(0 0 8px #22c55e)',
                padding: 0,
              }}
            >
              <i className="fas fa-chevron-down"></i>
            </button>
          </div>
        </div>
      </div>

      {/* POWER MOTTO BREAK 1 */}
      <div
        style={{
          backgroundColor: '#22c55e',
          width: '100%',
          padding: '2rem 1rem',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <p style={{ fontSize: '1.3rem', fontWeight: 'bold', margin: '0.5rem 0' }}>
          PADAT DENGAN INTI
        </p>
        <p style={{ fontSize: '1.3rem', fontWeight: 'bold', margin: '0.5rem 0' }}>
          BAHAN YANG SEGAR
        </p>
        <p style={{ fontSize: '1.3rem', fontWeight: 'bold', margin: '0.5rem 0' }}>
          KEPUASAN TERJAMIN
        </p>
      </div>

      {/* POWER MOTTO BREAK 2 */}
      <div
        style={{
          backgroundColor: '#f97316',
          width: '100%',
          padding: '1.5rem 1rem',
          textAlign: 'center',
          color: '#ffff00',
          fontSize: '1.2rem',
          fontWeight: 'bold',
        }}
      >
        GANDINGAN KHAS SOS HOMEMADE TERMAHSYUR!!
      </div>

      {/* SAUCE SECTION */}
      <div
        ref={sections.sauce}
        style={{
          width: '100%',
          backgroundColor: '#f5f5f5',
          padding: '2rem 1rem',
        }}
      >
        {/* Sauce Images - Two Column (mobile stacked, desktop side-by-side) */}
        <div
          className="sauce-grid"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          {/* Left Sauce - Sweet & Spicy */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '100%',
              backgroundColor: '#000',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <img
              src="/unclesweet.webp"
              alt="Homemade Sweet & Spicy Chili Sauce"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            {/* Gradient Overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '50%',
                background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '1.5rem 1rem',
              }}
            >
              <p
                style={{
                  color: 'white',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  margin: 0,
                }}
              >
                Homemade Sweet & Spicy Chili Sauce
              </p>
            </div>
          </div>

          {/* Right Sauce - Creamy Mint */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '100%',
              backgroundColor: '#000',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <img
              src="/unclemint.webp"
              alt="Creamy Mint Secret Sauce"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            {/* Gradient Overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '50%',
                background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '1.5rem 1rem',
              }}
            >
              <p
                style={{
                  color: 'white',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  margin: 0,
                }}
              >
                Creamy Mint Secret Sauce
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MENUS SECTION */}
      <div
        ref={sections.menus}
        style={{
          width: '100%',
          backgroundImage: 'url(/unclerollhero.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#000',
        }}
      >
        {/* Background Overlay */}
        <div
          style={{
            backgroundColor: 'rgba(0,0,0,0.7)',
            padding: '2rem 1rem',
            minHeight: '100%',
          }}
        >
          {/* Menu Item 1 - Chicken (Image LEFT) */}
          <div
            className="menu-row-1"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginBottom: '2rem',
              paddingBottom: '2rem',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              alignItems: 'start',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '100%',
                backgroundColor: '#000',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <img
                src="/chicken.webp"
                alt="Teriyaki Chicken Roll"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            <div style={{ color: 'white' }}>
              <h3
                style={{
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  margin: '0 0 0.5rem 0',
                  color: '#22c55e',
                }}
              >
                Teriyaki Chicken Roll
              </h3>
              <p style={{ fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>
                Hirisan dada ayam yang dimasak bersama sos Teriyaki Homemade
                menggunakan resipi rahsia Uncle Roll. Ayam diperap selama 12 jam
                sebelum digoreng bersama menjamin rasa Teriyaki dan lazat!
              </p>
            </div>
          </div>

          {/* Menu Item 2 - Crab (Image RIGHT) */}
          <div
            className="menu-row-2"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginBottom: '2rem',
              paddingBottom: '2rem',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              alignItems: 'start',
            }}
          >
            <div style={{ color: 'white' }}>
              <h3
                style={{
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  margin: '0 0 0.5rem 0',
                  color: '#22c55e',
                }}
              >
                Ketam Raja Laut Roll
              </h3>
              <p style={{ fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>
                Isi ketam yang dipanaskan sebelum dibalut, memastikan kesegaran
                bahan. Roll disediakan segar setiap sebelum setiap pesanan!
              </p>
            </div>
            <div
              className="menu-image-right"
              style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '100%',
                backgroundColor: '#000',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <img
                src="/crab.webp"
                alt="Ketam Raja Laut Roll"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>

          {/* Menu Item 3 - Shrimp (Image LEFT) */}
          <div
            className="menu-row-3"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginBottom: '2rem',
              paddingBottom: '2rem',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              alignItems: 'start',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '100%',
                backgroundColor: '#000',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <img
                src="/shrimp.webp"
                alt="Udang Ratu Laut Roll"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            <div style={{ color: 'white' }}>
              <h3
                style={{
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  margin: '0 0 0.5rem 0',
                  color: '#22c55e',
                }}
              >
                Udang Ratu Laut Roll
              </h3>
              <p style={{ fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>
                Udang segar yang dikopek dan direbus, kemanisan dan kesegaran
                udang terjamin!
              </p>
            </div>
          </div>

          {/* Menu Item 4 - Smoked Duck (Image RIGHT) */}
          <div
            className="menu-row-4"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              alignItems: 'start',
            }}
          >
            <div style={{ color: 'white' }}>
              <h3
                style={{
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  margin: '0 0 0.5rem 0',
                  color: '#22c55e',
                }}
              >
                Itik Salai Mengilai Roll
              </h3>
              <p style={{ fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>
                Disediakan dengan menggunakan daging itik salai yang premium,
                rasa salai yang kuat hingga teringat-ingat!
              </p>
            </div>
            <div
              className="menu-image-right"
              style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '100%',
                backgroundColor: '#000',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <img
                src="/smoked.webp"
                alt="Itik Salai Mengilai Roll"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* LOCATION SECTION */}
      <div
        ref={sections.location}
        style={{
          backgroundColor: '#22c55e',
          width: '100%',
          padding: '2rem 1rem',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: '0 0 1.5rem 0' }}>
          JOM BELI SEKARANG
        </h2>

        {/* Map Image Box */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            paddingBottom: '100%',
            backgroundColor: '#000',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '1.5rem',
          }}
        >
          <img
            src="/map.webp"
            alt="Store Location Map"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <a
            href="#"
            style={{
              backgroundColor: 'white',
              color: '#22c55e',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1rem',
              display: 'inline-block',
              textAlign: 'center',
              border: 'none',
            }}
          >
            <i className="fab fa-waze" style={{ marginRight: '0.5rem' }}></i>
            Waze
          </a>
          <a
            href="#"
            style={{
              backgroundColor: 'white',
              color: '#22c55e',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1rem',
              display: 'inline-block',
              textAlign: 'center',
              border: 'none',
            }}
          >
            <i className="fas fa-map-marker-alt" style={{ marginRight: '0.5rem' }}></i>
            Google Maps
          </a>
        </div>
      </div>

      {/* CTA SECTION */}
      <div
        ref={sections.cta}
        style={{
          backgroundColor: '#000',
          width: '100%',
          padding: '2rem 1rem',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0 0 2rem 0' }}>
          HUBUNGI UNCLE ROLL untuk tempahan awal!
        </h2>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
          }}
        >
          <a
            href="#"
            style={{
              backgroundColor: '#22c55e',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              border: 'none',
            }}
          >
            <i className="fab fa-whatsapp"></i>
            WhatsApp
          </a>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a
              href="#"
              style={{
                backgroundColor: '#f97316',
                color: 'white',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                textDecoration: 'none',
              }}
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              style={{
                backgroundColor: '#f97316',
                color: 'white',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                textDecoration: 'none',
              }}
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Font Awesome Link */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </div>
  );
}
