"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [consentGiven, setConsentGiven] = useState<boolean>(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent) {
      setConsentGiven(true); // If consent exists, load Google Analytics
    } else {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setConsentGiven(true); // Set state to true
    setShowBanner(false);
  };

  return (
    <>
      {/* Google Analytics Scripts (Loads only if consent is given) */}
      {consentGiven && process.env.NODE_ENV === 'production' && (
        <>
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-SMMDL656BT"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-SMMDL656BT', { 'debug_mode': true });
            `}
          </Script>
        </>
      )}

      {/* Cookie Consent Banner */}
      {showBanner && <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white p-3 md:p-4 rounded-lg shadow-lg w-full max-w-lg flex justify-between items-center z-50">
        <p className="text-sm">
          By using our website, you agree to our use of cookies as described in
          our
          <a href="/cookie-policy" className="underline text-orange-400 pl-1">
            Cookies Policy
          </a>
          .
        </p>
        <button
          onClick={acceptCookies}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm transition"
        >
          Accept
        </button>
      </div>}
    </>
  );
};

export default CookieBanner;
