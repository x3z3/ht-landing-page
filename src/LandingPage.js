import React from 'react';
import { DefaultButton } from '@fluentui/react';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import './LandingPage.css';

initializeIcons();

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="logo-container">
          <img src="/HT.svg" alt="Logo" className="app-logo" />
          <span className="app-name">Hypertherm AI Chatbot</span>
        </div>
        <DefaultButton
          iconProps={{ iconName: 'Upload' }}
          text="Upload"
          href={process.env.REACT_APP_UPLOAD_LINK || '#'}
          className="upload-button rounded-button"
        />
      </header>
      <main className="landing-main">
        <div className="logo-placeholder">
          <img src="/HT.svg" alt="Logo" />
          <h1>Start Chatting</h1>
        </div>
        <h2>Select your domain</h2>
        <div className="domain-buttons">
          <DefaultButton
            iconProps={{ iconName: 'EngineeringGroup' }} // Example icon
            text="Engineering"
            className="domain-button rounded-button"
            href={process.env.REACT_APP_ENGINEERING_LINK || '#'}
          />
          <DefaultButton
            iconProps={{ iconName: 'People' }} // Example icon
            text="Shared Services"
            className="domain-button rounded-button"
            href={process.env.REACT_APP_SHARED_SERVICES_LINK || '#'}
          />
          <DefaultButton
            iconProps={{ iconName: 'Shop' }} // Example icon
            text="Procurement"
            className="domain-button rounded-button"
            href={process.env.REACT_APP_PROCUREMENT_LINK || '#'}
          />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
