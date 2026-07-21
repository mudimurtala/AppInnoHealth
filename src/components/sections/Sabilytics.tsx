import { useEffect } from "react";

export function Sabilytics() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://sabilytics.vercel.app/script.js";
    script.setAttribute("data-site", "8sj835pw3yxz");
    script.setAttribute("data-domain", "innohealth.tech");
    document.head.appendChild(script);
  }, []);

  return null;
}