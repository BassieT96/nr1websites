import Script from "next/script";

import { getAnalyticsConfig } from "@/lib/analytics/config";

export function AnalyticsProvider() {
  const { gaId, plausibleDomain } = getAnalyticsConfig();

  return (
    <>
      {gaId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="lazyOnload"
          />
          <Script id="ga4" strategy="lazyOnload">
            {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}');`}
          </Script>
        </>
      ) : null}

      {plausibleDomain ? (
        <Script
          data-domain={plausibleDomain}
          defer
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      ) : null}
    </>
  );
}
