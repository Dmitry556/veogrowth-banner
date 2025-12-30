import { useRef } from 'react';
import html2canvas from 'html2canvas';

const logos = [
  { name: 'Apple', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/apple.svg' },
  { name: 'Google', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg' },
  { name: 'Microsoft', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoft.svg' },
  { name: 'Amazon', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazon.svg' },
  { name: 'Meta', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/meta.svg' },
  { name: 'Netflix', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/netflix.svg' },
  { name: 'Tesla', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tesla.svg' },
  { name: 'HubSpot', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/hubspot.svg' },
  { name: 'Adobe', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/adobe.svg' },
  { name: 'IBM', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/ibm.svg' },
];

export default function LinkedInBanner() {
  const bannerRef = useRef(null);

  const exportPNG = async () => {
    if (!bannerRef.current) return;

    const canvas = await html2canvas(bannerRef.current, {
      scale: 3, // 3x for high quality (~4752x1188 then we can resize)
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#0a0a0a',
    });

    const link = document.createElement('a');
    link.download = 'linkedin-banner.png';
    link.href = canvas.toDataURL('image/png', 1.0);
    link.click();
  };

  return (
    <div className="bg-neutral-900 min-h-screen">
      {/* Export Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={exportPNG}
          className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-black font-semibold rounded-lg transition-colors"
        >
          Export PNG (High Quality)
        </button>
      </div>

      {/* Full Size Banner */}
      <div className="flex items-center justify-center p-8" style={{ minHeight: '100vh' }}>
        <div
          ref={bannerRef}
          className="relative overflow-hidden"
          style={{
            width: '1584px',
            height: '396px',
            backgroundColor: '#0a0a0a',
          }}
        >
          {/* Subtle glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 80% 50%, rgba(45, 212, 191, 0.06) 0%, transparent 60%)'
            }}
          />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />

          {/* Logo */}
          <div
            className="absolute"
            style={{
              top: '32px',
              right: '40px',
              fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontSize: '18px',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.8)',
              letterSpacing: '0.28em',
              textTransform: 'uppercase'
            }}
          >
            Veogrowth
          </div>

          {/* Logos section */}
          <div
            className="absolute"
            style={{
              left: '0',
              top: '0',
              padding: '30px',
              paddingRight: '40px',
              background: 'linear-gradient(135deg, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.85) 100%)',
              width: '420px',
              height: '240px',
            }}
          >
            <div
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: '18px',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.7)',
                letterSpacing: '1px',
                marginBottom: '16px'
              }}
            >
              MEETINGS BOOKED WITH
            </div>
            <div className="grid grid-cols-5" style={{ gap: '8px 16px' }}>
              {logos.map((logo) => (
                <img
                  key={logo.name}
                  src={logo.url}
                  alt={logo.name}
                  style={{
                    width: '56px',
                    height: '56px',
                    filter: 'invert(1) opacity(0.7)',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div
            className="absolute z-10"
            style={{
              right: '120px',
              top: '50%',
              transform: 'translateY(-50%)',
              textAlign: 'right'
            }}
          >
            <h1
              style={{
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                fontSize: '90px',
                fontWeight: 600,
                color: '#ffffff',
                letterSpacing: '-3px',
                lineHeight: 1.1,
                marginBottom: '20px'
              }}
            >
              2 meetings first.<br/>
              <span style={{ color: '#2DD4BF' }}>Then you pay.</span>
            </h1>
            <p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: '24px',
                fontWeight: 600,
                color: '#ffffff',
                letterSpacing: '0.15em',
                textTransform: 'uppercase'
              }}
            >
              100% of your TAM. <span style={{ color: '#2DD4BF' }}>60 Days.</span>
            </p>
          </div>

          {/* Bottom accent line */}
          <div
            className="absolute bottom-0 right-0"
            style={{
              width: '60%',
              height: '3px',
              background: 'linear-gradient(90deg, transparent, #2DD4BF 50%, #0D6E5A)'
            }}
          />

        </div>
      </div>

      {/* Info */}
      <div className="fixed bottom-4 left-4 text-neutral-500 text-sm">
        1584 × 396px • Scroll horizontally if needed
      </div>
    </div>
  );
}
