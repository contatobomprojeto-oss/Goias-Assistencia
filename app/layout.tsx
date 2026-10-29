import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Goiás Residencial Concierge | Assistência de Alto Padrão',
  description: 'Concierge e Assistência Residencial de Luxo para Residências de Alto Padrão em Goiás.',
  openGraph: {
    title: 'Goiás Residencial Concierge',
    description: 'Concierge e Assistência Residencial de Luxo para Residências de Alto Padrão em Goiás.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Goiás Residencial Concierge',
    description: 'Concierge e Assistência Residencial de Luxo para Residências de Alto Padrão em Goiás.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400..700;1,6..72,400..700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-992242659"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-992242659');
              gtag('event', 'conversion', {
                  'send_to': 'AW-992242659/XgdWCNfEp_4CEOPXkdkD',
                  'transaction_id': ''
              });
            `,
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PFCR7CSG');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body suppressHydrationWarning className="bg-[#f1fcf3] text-[#141e19] font-['Plus_Jakarta_Sans',sans-serif] antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PFCR7CSG"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
