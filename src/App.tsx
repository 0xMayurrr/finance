import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';

const FinanceTracker = lazy(() => import('./pages/FinanceTracker'));

const PageLoader = () => (
  <div className="min-h-screen bg-[#050507] flex flex-col items-center justify-center text-white">
    <div className="w-12 h-12 border-4 border-purple-600/30 border-t-purple-500 rounded-full animate-spin mb-4" />
    <p className="text-sm font-semibold tracking-wider text-purple-300">BUILDICY FINANCE OPS</p>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" theme="dark" richColors />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Main Finance Dashboard Routes */}
          <Route path="/" element={<FinanceTracker />} />
          <Route path="/finance" element={<FinanceTracker />} />
          <Route path="/dashboard" element={<FinanceTracker />} />
          <Route path="/admin" element={<FinanceTracker />} />

          {/* Catch-all redirects to root */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
