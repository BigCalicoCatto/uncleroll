'use client';

import { useState, useRef } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sections = {
    sauce: useRef<HTMLDivElement>(null),
    menus: useRef<HTMLDivElement>(null),
    price: useRef<HTMLDivElement>(null),
    location: useRef<HTMLDivElement>(null),
    cta: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <style>{`
        @media (min-width: 768px) {
          .sauce-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>

      {/* BANNER */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.3rem 0.8rem",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ width: "98px", height: "98px" }}>
          <img
            src="/unclerolllogo.webp"
            alt="Uncle Roll Logo"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>

        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <a href="#" style={{ fontSize: "1.5rem", color: "#22c55e", textDecoration: "none" }}>
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="#" style={{ fontSize: "1.5rem", color: "#22c55e", textDecoration: "none" }}>
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.5rem",
              color: "#22c55e",
              cursor: "pointer",
              padding: "0.5rem",
            }}
          >
            <i className={`fas fa-${menuOpen ? "times" : "bars"}`}></i>
          </button>
        </div>

        {menuOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: "white",
              borderBottom: "2px solid #22c55e",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "1.5rem",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            <button
              onClick={() => scrollToSection(sections.sauce)}
              style={{
                background: "none",
                border: "none",
                fontSize: "1rem",
                color: "#22c55e",
                cursor: "pointer",
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Sos
            </button>
            <button
              onClick={() => scrollToSection(sections.menus)}
              style={{
                background: "none",
                border: "none",
                fontSize: "1rem",
                color: "#22c55e",
                cursor: "pointer",
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection(sections.price)}
              style={{
                background: "none",
                border: "none",
                fontSize: "1rem",
                color: "#22c55e",
                cursor: "pointer",
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Harga
            </button>
            <button
              onClick={() => scrollToSection(sections.location)}
              style={{
                background: "none",
                border: "none",
                fontSize: "1rem",
                color: "#22c55e",
                cursor: "pointer",
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Lokasi
            </button>
            <button
              onClick={() => scrollToSection(sections.cta)}
              style={{
                background: "none",
                border: "none",
                fontSize: "1rem",
                color: "#22c55e",
                cursor: "pointer",
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Hubungi
            </button>
          </div>
        )}
      </div>

      {/* HERO SECTION */}
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "175%",
          backgroundColor: "#ffffff",
          overflow: "hidden",
        }}
      >
        <img
          src="/unclerollhero.webp"
          alt="Uncle Roll Hero"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "transparent",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
            gap: "2rem",
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              lineHeight: "1.2",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              margin: 0,
            }}
          >
            UNCLE ROLL'S VIETNAM ROLL
          </h1>

          <div
            style={{
              backgroundColor: "rgba(34, 197, 94, 0.5)",
              padding: "1.5rem 2rem",
              borderRadius: "8px",
              width: "100%",
            }}
          >
            <p
              style={{
                fontSize: "1.5rem",
                color: "white",
                textAlign: "center",
                margin: 0,
                fontWeight: "500",
              }}
            >
              Vietnam Roll Terpadu Seantero Dunia!
            </p>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "4rem",
              animation: "bounce 2s infinite",
            }}
          >
            <style>{`
              @keyframes bounce {
                0%, 100% { transform: translateY(0); opacity: 1; }
                50% { transform: translateY(12px); opacity: 0.7; }
              }
            `}</style>
            <button
              onClick={() => scrollToSection(sections.sauce)}
              style={{
                background: "none",
                border: "none",
                fontSize: "2rem",
                color: "#22c55e",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                filter: "drop-shadow(0 0 8px #22c55e)",
                padding: 0,
              }}
            >
              <i className="fas fa-chevron-down"></i>
            </button>
          </div>
        </div>
      </div>

      {/* POWER MOTTO 1 */}
      <div style={{ backgroundColor: "#22c55e", width: "100%", padding: "2rem 1rem", textAlign: "center", color: "white" }}>
        <p style={{ fontSize: "1.3rem", fontWeight: "bold", margin: "0.5rem 0" }}>PADAT DENGAN INTI</p>
        <p style={{ fontSize: "1.3rem", fontWeight: "bold", margin: "0.5rem 0" }}>BAHAN YANG SEGAR</p>
        <p style={{ fontSize: "1.3rem", fontWeight: "bold", margin: "0.5rem 0" }}>KEPUASAN TERJAMIN</p>
      </div>

      {/* POWER MOTTO 2 */}
      <div style={{ backgroundColor: "#f97316", width: "100%", padding: "1.5rem 1rem", textAlign: "center", color: "#ffff00", fontSize: "1.2rem", fontWeight: "bold" }}>
        GANDINGAN KHAS SOS HOMEMADE TERMAHSYUR!!
      </div>

      {/* SAUCE SECTION */}
      <div ref={sections.sauce} style={{ width: "100%", backgroundColor: "#ffffff", padding: "2rem 1rem" }}>
        <div className="sauce-grid" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div style={{ position: "relative", width: "100%", paddingBottom: "100%", backgroundColor: "#ffffff", borderRadius: "8px", overflow: "hidden", border: "3px solid #22c55e" }}>
            <img src="/unclesweet.webp" alt="Sweet Sauce" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "50%", background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)", display: "flex", alignItems: "flex-end", padding: "1.5rem 1rem" }}>
              <p style={{ color: "white", fontSize: "1.65rem", fontWeight: "bold", margin: 0, textAlign: "center", width: "100%" }}>Homemade Sweet & Spicy Chili Sauce</p>
            </div>
          </div>

          <div style={{ position: "relative", width: "100%", paddingBottom: "100%", backgroundColor: "#ffffff", borderRadius: "8px", overflow: "hidden", border: "3px solid #22c55e" }}>
            <img src="/unclemint.webp" alt="Mint Sauce" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "50%", background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)", display: "flex", alignItems: "flex-end", padding: "1.5rem 1rem" }}>
              <p style={{ color: "white", fontSize: "1.65rem", fontWeight: "bold", margin: 0, textAlign: "center", width: "100%" }}>Creamy Mint Secret Sauce</p>
            </div>
          </div>
        </div>
      </div>

      {/* MENUS SECTION */}
      <div ref={sections.menus} style={{ width: "100%", backgroundColor: "#ffffff", backgroundImage: "url(/unclerollhero.webp)", backgroundSize: "cover", backgroundPosition: "center", padding: "2rem 1rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem", paddingBottom: "2rem", borderBottom: "1px solid rgba(0,0,0,0.1)", alignItems: "center" }}>
          <div style={{ position: "relative", width: "100%", paddingBottom: "100%", backgroundColor: "#ffffff", borderRadius: "8px", overflow: "hidden", border: "3px solid #22c55e" }}>
            <img src="/chicken.webp" alt="Chicken" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ backgroundColor: "rgba(255,255,255,0.5)", padding: "1rem", borderRadius: "8px" }}>
            <h3 style={{ fontSize: "1.15rem", fontWeight: "bold", margin: "0 0 0.5rem 0", color: "#22c55e" }}>Teriyaki Chicken Roll</h3>
            <p style={{ fontSize: "0.9rem", lineHeight: "1.4", margin: 0, color: "#000" }}>Hirisan dada ayam yang dimasak bersama sos Teriyaki Homemade menggunakan resipi rahsia Uncle Roll!</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem", paddingBottom: "2rem", borderBottom: "1px solid rgba(0,0,0,0.1)", alignItems: "center" }}>
          <div style={{ backgroundColor: "rgba(255,255,255,0.5)", padding: "1rem", borderRadius: "8px" }}>
            <h3 style={{ fontSize: "1.15rem", fontWeight: "bold", margin: "0 0 0.5rem 0", color: "#22c55e" }}>Ketam Raja Laut Roll</h3>
            <p style={{ fontSize: "0.9rem", lineHeight: "1.4", margin: 0, color: "#000" }}>Isi ketam yang dipanaskan sebelum dibalut, memastikan kesegaran bahan. Roll disediakan segar setiap sebelum setiap pesanan!</p>
          </div>
          <div style={{ position: "relative", width: "100%", paddingBottom: "100%", backgroundColor: "#ffffff", borderRadius: "8px", overflow: "hidden", border: "3px solid #22c55e" }}>
            <img src="/crab.webp" alt="Crab" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem", paddingBottom: "2rem", borderBottom: "1px solid rgba(0,0,0,0.1)", alignItems: "center" }}>
          <div style={{ position: "relative", width: "100%", paddingBottom: "100%", backgroundColor: "#ffffff", borderRadius: "8px", overflow: "hidden", border: "3px solid #22c55e" }}>
            <img src="/shrimp.webp" alt="Shrimp" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ backgroundColor: "rgba(255,255,255,0.5)", padding: "1rem", borderRadius: "8px" }}>
            <h3 style={{ fontSize: "1.15rem", fontWeight: "bold", margin: "0 0 0.5rem 0", color: "#22c55e" }}>Udang Ratu Laut Roll</h3>
            <p style={{ fontSize: "0.9rem", lineHeight: "1.4", margin: 0, color: "#000" }}>Udang segar yang dikopek dan direbus, kemanisan dan kesegaran udang terjamin!</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", alignItems: "center" }}>
          <div style={{ backgroundColor: "rgba(255,255,255,0.5)", padding: "1rem", borderRadius: "8px" }}>
            <h3 style={{ fontSize: "1.15rem", fontWeight: "bold", margin: "0 0 0.5rem 0", color: "#22c55e" }}>Itik Salai Mengilai Roll</h3>
            <p style={{ fontSize: "0.9rem", lineHeight: "1.4", margin: 0, color: "#000" }}>Disediakan dengan menggunakan daging itik salai yang premium, rasa salai yang kuat hingga teringat-ingat!</p>
          </div>
          <div style={{ position: "relative", width: "100%", paddingBottom: "100%", backgroundColor: "#ffffff", borderRadius: "8px", overflow: "hidden", border: "3px solid #22c55e" }}>
            <img src="/smoked.webp" alt="Smoked Duck" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </div>

      {/* PRICE SECTION 1 */}
      <div ref={sections.price} style={{ backgroundColor: "#22c55e", width: "100%", padding: "1rem 1rem", textAlign: "center", color: "white" }}>
        <p style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "0.3rem 0" }}>MIX and MATCH</p>
        <p style={{ fontSize: "2rem", fontWeight: "bold", margin: "0.3rem 0" }}>3 ROLL RM10</p>
        <p style={{ fontSize: "1.3rem", fontWeight: "bold", margin: "0.3rem 0" }}>FREE 1 SOS</p>
      </div>

      {/* PRICE SECTION 2 */}
      <div style={{ backgroundColor: "#f97316", width: "100%", padding: "1rem 1rem", textAlign: "center", color: "#ffff00" }}>
        <p style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "0.3rem 0" }}>MIX and MATCH</p>
        <p style={{ fontSize: "2rem", fontWeight: "bold", margin: "0.3rem 0" }}>10 ROLL RM30</p>
        <p style={{ fontSize: "1.3rem", fontWeight: "bold", margin: "0.3rem 0" }}>FREE 3 SOS</p>
      </div>

      {/* REVIEWS SECTION */}
      <div style={{ backgroundColor: "#ffffff", width: "100%", padding: "2rem 1rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ backgroundColor: "#ffffff", border: "2px solid #22c55e", borderRadius: "8px", padding: "1rem" }}>
            <p style={{ fontSize: "0.85rem", lineHeight: "1.3", margin: "0 0 0.5rem 0", color: "#000" }}>SEDAPPPPP SANGAT, selalu beli lepas ambik anak sekolah, anak-anak suka sangat</p>
            <p style={{ fontSize: "0.8rem", fontWeight: "bold", margin: 0, color: "#22c55e" }}>- Anisha</p>
          </div>

          <div style={{ backgroundColor: "#ffffff", border: "2px solid #22c55e", borderRadius: "8px", padding: "1rem" }}>
            <p style={{ fontSize: "0.85rem", lineHeight: "1.3", margin: "0 0 0.5rem 0", color: "#000" }}>Terbaik! Sos dia memang syahdu, layan betul makan, kenyang sampai terduduk</p>
            <p style={{ fontSize: "0.8rem", fontWeight: "bold", margin: 0, color: "#22c55e" }}>- Sham</p>
          </div>

          <div style={{ backgroundColor: "#ffffff", border: "2px solid #22c55e", borderRadius: "8px", padding: "1rem" }}>
            <p style={{ fontSize: "0.85rem", lineHeight: "1.3", margin: "0 0 0.5rem 0", color: "#000" }}>Makanan kalau rasa tak lalu nak makan, tapi nak makan. Ringan je makan tapi kenyang.. Bahan2 semua fresh</p>
            <p style={{ fontSize: "0.8rem", fontWeight: "bold", margin: 0, color: "#22c55e" }}>- Jijan</p>
          </div>
        </div>
      </div>

      {/* LOCATION SECTION */}
      <div ref={sections.location} style={{ backgroundColor: "#22c55e", width: "100%", padding: "2rem 1rem", textAlign: "center", color: "white" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", margin: "0 0 1.5rem 0" }}>DAPATKAN SEKARANG DI GERAI UNCLE ROLL</h2>
        <div style={{ position: "relative", width: "100%", paddingBottom: "100%", backgroundColor: "#000", borderRadius: "8px", overflow: "hidden", marginBottom: "1.5rem" }}>
          <img src="/map.webp" alt="Map" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <a href="#" style={{ backgroundColor: "white", color: "#22c55e", padding: "1rem 2rem", borderRadius: "8px", textDecoration: "none", fontWeight: "bold", fontSize: "1rem", display: "inline-block", textAlign: "center" }}>
            <i className="fab fa-waze" style={{ marginRight: "0.5rem" }}></i>Waze
          </a>
          <a href="#" style={{ backgroundColor: "white", color: "#22c55e", padding: "1rem 2rem", borderRadius: "8px", textDecoration: "none", fontWeight: "bold", fontSize: "1rem", display: "inline-block", textAlign: "center" }}>
            <i className="fas fa-map-marker-alt" style={{ marginRight: "0.5rem" }}></i>Google Maps
          </a>
        </div>
      </div>

      {/* CTA SECTION */}
      <div ref={sections.cta} style={{ backgroundColor: "#ffffff", width: "100%", padding: "2rem 1rem", textAlign: "center", color: "#000" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "0 0 2rem 0" }}>HUBUNGI UNCLE ROLL untuk tempahan awal!</h2>
        
        <div style={{ display: "flex", gap: "2rem", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
          <div style={{ width: "280px", height: "280px" }}>
            <img
              src="/unclerolllogo.webp"
              alt="Uncle Roll Logo"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
            <a href="#" style={{ backgroundColor: "#22c55e", color: "white", padding: "1rem 2rem", borderRadius: "8px", textDecoration: "none", fontWeight: "bold", fontSize: "1rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <i className="fab fa-whatsapp"></i>WhatsApp
            </a>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a href="#" style={{ backgroundColor: "#f97316", color: "white", width: "50px", height: "50px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", textDecoration: "none" }}>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" style={{ backgroundColor: "#f97316", color: "white", width: "50px", height: "50px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", textDecoration: "none" }}>
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ backgroundColor: "#000", width: "100%", padding: "2rem 1rem", textAlign: "center", color: "#888", fontSize: "0.85rem" }}>
        <p style={{ margin: "0.5rem 0" }}>Copyright Uncle Roll 2026</p>
        <p style={{ margin: "0.5rem 0" }}>Engineered by FatCalico&Co for FatCalico&Co</p>
      </div>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </div>
  );
}
