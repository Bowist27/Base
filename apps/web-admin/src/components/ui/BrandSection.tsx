/**
 * BrandSection Component
 * Left side branding with gradient background
 */

const BrandSection: React.FC = () => {
  return (
    <section className="brand-section">
      <div className="brand-content">
        <h1 className="brand-title">
          QONTROL.
        </h1>
        <p className="brand-description">
          Plataforma administrativa centralizada para la gestión de tiendas y auditorías en tiempo real.
        </p>
      </div>
    </section>
  );
};

export default BrandSection;
