"use client";

import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

export default function ClientProviders() {
  useEffect(() => {
    // Only scroll to top if there is NO hash in URL
    if (!window.location.hash) {
      window.scrollTo({ top: 0 });
    }
  }, []);

  return <Toaster position="bottom-center" />;
}
