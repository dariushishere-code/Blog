import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import DotPattern from "@/components/ui/dot-pattern";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";

const Gallery = lazy(() => import("@/pages/Gallery"));

/** Scrolls back to the top whenever the route changes. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      {/* Whole-page background: subtle dotted grid fading out from the top */}
      <DotPattern
        cx={1}
        cy={1}
        cr={1}
        className="fixed inset-0 -z-20 text-white/5 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,white,transparent)]"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/gallery"
          element={
            <Suspense fallback={null}>
              <Gallery />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}