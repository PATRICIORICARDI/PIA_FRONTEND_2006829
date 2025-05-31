import React, { useEffect } from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import "./HomePage.scss";
import type { MenuItem } from "primereact/menuitem";
import { Rating } from "primereact/rating";
import patoImage from "../public/pato.png";
import pechugaImage from "../public/pechuga.png";
import comboImage from "../public/combo.png";

const HomePage: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".section-animation").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const menuItems: MenuItem[] = [
    {
      label: "Inicio",
      icon: "pi pi-fw pi-home",
      command: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    {
      label: "Menú",
      icon: "pi pi-fw pi-list",
      command: () => {
        const section = document.getElementById("menu-section");
        section?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      label: "Ubicación",
      icon: "pi pi-fw pi-map-marker",
      command: () => {
        const section = document.getElementById("location-section");
        section?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      label: "Reseñas",
      icon: "pi pi-fw pi-comments",
      command: () => {
        const section = document.getElementById("reviews-section");
        section?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      label: "Contacto",
      icon: "pi pi-fw pi-envelope",
      command: () => {
        const footer = document.getElementById("footer");
        footer?.scrollIntoView({ behavior: "smooth" });
      },
    },
  ];

  const reviews = [
    {
      name: "Ana García",
      rating: 5,
      comment:
        "¡El mejor pato asado que he probado en la ciudad! La piel crujiente y la carne jugosa. ¡Altamente recomendado!",
    },
    {
      name: "Luis Martínez",
      rating: 4,
      comment:
        "Excelente sabor, servicio muy amable. Volveré por más muy pronto.",
    },
    {
      name: "María López",
      rating: 5,
      comment:
        "La experiencia completa: ambiente acogedor, precio justo y sabor inigualable. ¡Mis amigos quedaron fascinados!",
    },
  ];

  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo">
            <i className="pi pi-star-fill" />
            <span>Pato Asado Express</span>
          </div>
          <Menubar model={menuItems} className="menubar-custom" />
        </div>
      </nav>

      <section className="hero-section" id="hero-section">
        <div className="overlay">
          <div className="hero-content">
            <h1 className="hero-title">¡Bienvenido a Pato Asado Express!</h1>
            <p className="hero-subtitle">
              Disfruta del auténtico pato asado con recetas tradicionales
            </p>
            <Button
              label="Ordena Ahora"
              icon="pi pi-shopping-cart"
              className="p-button-rounded hero-button"
              onClick={() => window.open("/menu", "_self")}
            />
          </div>
        </div>
      </section>

      <section className="menu-section section-animation" id="menu-section">
        <div className="section-content">
          <h2 className="section-title">Nuestro Menú</h2>
          <p className="section-subtitle">
            Delicias de pato asado preparadas con pasión
          </p>

          <div className="menu-items">
            <div className="menu-item">
              <div
                className="item-image"
                style={{ backgroundImage: `url(${patoImage})` }}
              ></div>
              <div className="item-content">
                <h3>Pato Asado Clásico</h3>
                <p>Pato entero asado lentamente con especias tradicionales</p>
                <span className="price">$450</span>
              </div>
            </div>

            <div className="menu-item">
              <div
                className="item-image"
                style={{ backgroundImage: `url(${pechugaImage})` }}
              ></div>
              <div className="item-content">
                <h3>Pechuga de Pato</h3>
                <p>Pechuga glaseada con miel y salsa de frutos rojos</p>
                <span className="price">$320</span>
              </div>
            </div>

            <div className="menu-item">
              <div
                className="item-image"
                style={{ backgroundImage: `url(${comboImage})` }}
              ></div>
              <div className="item-content">
                <h3>Combo Familiar</h3>
                <p>Pato completo + 4 guarniciones + bebidas</p>
                <span className="price">$650</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="location-section section-animation"
        id="location-section"
      >
        <div className="section-content">
          <h2 className="section-title">¿Dónde nos encuentras?</h2>
          <p className="section-subtitle">
            Visítanos y disfruta de nuestra deliciosa comida
          </p>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2138.1510769653646!2d-100.39476928837608!3d25.673709477673427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866295f4b8427dff%3A0x33d068574599460b!2sSofttek!5e0!3m2!1ses!2smx!4v1748706690625!5m2!1ses!2smx"
              loading="lazy"
            ></iframe>
          </div>

          <div className="location-info">
            <div className="info-card">
              <i className="pi pi-clock" />
              <h3>Horario</h3>
              <p>Lun-Vie: 11:00 AM - 10:00 PM</p>
              <p>Sáb-Dom: 10:00 AM - 11:00 PM</p>
            </div>

            <div className="info-card">
              <i className="pi pi-map-marker" />
              <h3>Dirección</h3>
              <p>Calle Principal #123, Monterrey, NL</p>
            </div>

            <div className="info-card">
              <i className="pi pi-phone" />
              <h3>Reservaciones</h3>
              <p>+52 812 345 6789</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="reviews-section section-animation"
        id="reviews-section"
      >
        <div className="section-content">
          <h2 className="section-title">Reseñas de Nuestros Clientes</h2>
          <p className="section-subtitle">Lo que dicen nuestros comensales</p>

          <div className="reviews-container">
            {reviews.map((review, idx) => (
              <Card key={idx} className="review-card">
                <div className="review-header">
                  <div className="avatar">
                    <i className="pi pi-user" />
                  </div>
                  <div>
                    <h3 className="reviewer-name">{review.name}</h3>
                    <Rating
                      value={review.rating}
                      readOnly
                      cancel={false}
                      className="review-rating"
                    />
                  </div>
                </div>
                <p className="review-comment">{review.comment}</p>
              </Card>
            ))}
          </div>

          <div className="stats-container">
            <div className="stat-card">
              <h3>4.8</h3>
              <p>Calificación promedio</p>
            </div>
            <div className="stat-card">
              <h3>2,500+</h3>
              <p>Clientes satisfechos</p>
            </div>
            <div className="stat-card">
              <h3>98%</h3>
              <p>Recomiendan nuestro restaurante</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>¿Listo para probar nuestro delicioso pato asado?</h2>
          <p>Haz tu pedido ahora o reserva tu mesa</p>
          <div className="cta-buttons">
            <Button
              label="Ordenar en línea"
              icon="pi pi-shopping-cart"
              className="p-button-rounded"
            />
            <Button
              label="Reservar mesa"
              icon="pi pi-calendar"
              className="p-button-rounded p-button-outlined"
            />
          </div>
        </div>
      </section>

      <footer className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <i className="pi pi-star-fill" />
            <h3>Pato Asado Express</h3>
            <p>El sabor auténtico de Monterrey</p>
          </div>

          <div className="footer-columns">
            <div className="footer-column">
              <h4>Enlaces rápidos</h4>
              <ul></ul>
            </div>

            <div className="footer-column">
              <h4>Contacto</h4>
              <p>
                <i className="pi pi-map-marker" /> Calle Principal #123,
                Monterrey, NL
              </p>
              <p>
                <i className="pi pi-phone" /> +52 812 345 6789
              </p>
              <p>
                <i className="pi pi-envelope" /> info@patoasadoexpress.com
              </p>
            </div>

            <div className="footer-column">
              <h4>Síguenos</h4>
              <div className="social-icons">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="pi pi-facebook" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="pi pi-instagram" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="pi pi-twitter" />
                </a>
                <a
                  href="https://www.whatsapp.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="pi pi-whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Pato Asado Express. Todos los derechos
            reservados.
          </p>
          <div className="payment-methods">
            <i className="pi pi-credit-card" />
            <i className="pi pi-paypal" />
            <i className="pi pi-apple" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
