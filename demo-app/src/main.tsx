import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import MetricsViewer from './MetricsViewer.tsx'; 
import SurveyPage from './SurveyPage.tsx'; 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MetricsViewer />} />
        <Route path="/app" element={<App />} />
         <Route path="/survey/:surveyId" element={<SurveyPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
