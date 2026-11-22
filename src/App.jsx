import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Context providers
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './auth/AuthContext';

// Auth
import LoginPage from './auth/LoginPage';
import ProtectedRoute from './auth/ProtectedRoute';

// Landing page (public)
import LandingPage from './landing/LandingPage';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

// Dashboard & Views (team-only)
import DashboardLayout from './dashboard/DashboardLayout';
import OverviewView from './dashboard/views/OverviewView';
import CommercialView from './dashboard/views/CommercialView';
import InstitutionalView from './dashboard/views/InstitutionalView';
import BiosafetyView from './dashboard/views/BiosafetyView';
import InfrastructureView from './dashboard/views/InfrastructureView';
import MarketingView from './dashboard/views/MarketingView';
import ProgramView from './dashboard/views/ProgramView';
import SettingsView from './dashboard/views/SettingsView';

// Shared overlays
import Toast from './components/ui/Toast';
import LightboxModal from './components/ui/LightboxModal';

// Landing layout: sections + Footer (completely isolated from dashboard, 1:1 Festival Pet)
function LandingLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f1e5] text-[#202f6b] antialiased">
      <main className="flex-1">
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}

// Determines dynamically whether this domain runs as the Dashboard or the Landing Page:
function checkIsDashboardProject() {
  if (typeof window === 'undefined') return false;
  const host = window.location.hostname.toLowerCase();

  // 1. Domain-based separation:
  // If domain is dashboard-* / painel-* / admin-*, ALWAYS run as Dashboard
  if (host.includes('dashboard') || host.includes('painel') || host.includes('admin')) {
    return true;
  }

  // If domain is feira-eu-amo-pet / landing-*, ALWAYS run as Landing Page
  if (host.includes('feira-eu-amo-pet') || host.includes('landing')) {
    return false;
  }

  // 2. Explicit environment variable check (for custom deployments / localhost):
  return import.meta.env.VITE_APP_MODE === 'dashboard';
}

export default function App() {
  const isDashboardProject = checkIsDashboardProject();

  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          {/* Shared UI overlays */}
          <Toast />
          <LightboxModal />

          <Routes>
            {/*
             * PUBLIC — Landing Page
             * URL: /
             * Zero link or leak to dashboard.
             */}
            <Route path="/" element={<LandingLayout />} />

            {/*
             * PUBLIC — Login Gate
             * URL: /login
             * Restricted entry for organizers.
             */}
            <Route path="/login" element={<LoginPage />} />

            {/*
             * PROTECTED — Team Operations Dashboard
             * URL: /dashboard with full sub-route nesting and deep linking
             */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<OverviewView />} />
              <Route path="overview" element={<OverviewView />} />

              {/* Sub-rotas operacionais canônicas */}
              <Route path="comercial" element={<CommercialView />} />
              <Route path="prefeitura" element={<InstitutionalView />} />
              <Route path="sanidade" element={<BiosafetyView />} />
              <Route path="infraestrutura" element={<InfrastructureView />} />
              <Route path="marketing" element={<MarketingView />} />
              <Route path="programacao" element={<ProgramView />} />
              <Route path="configuracoes" element={<SettingsView />} />

              {/* Redirecionamentos transparentes para aliases em inglês */}
              <Route path="commercial" element={<Navigate to="/dashboard/comercial" replace />} />
              <Route path="institutional" element={<Navigate to="/dashboard/prefeitura" replace />} />
              <Route path="biosafety" element={<Navigate to="/dashboard/sanidade" replace />} />
              <Route path="infrastructure" element={<Navigate to="/dashboard/infraestrutura" replace />} />
              <Route path="program" element={<Navigate to="/dashboard/programacao" replace />} />
              <Route path="settings" element={<Navigate to="/dashboard/configuracoes" replace />} />

              {/* Sub-rota desconhecida dentro do dashboard redireciona para overview */}
              <Route path="*" element={<Navigate to="/dashboard/overview" replace />} />
            </Route>

            {/* Any unknown top-level route redirects to public landing */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
