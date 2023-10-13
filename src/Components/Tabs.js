import React from 'react';

function Tabs({ activeTab, onTabChange }) {
  return (
    <div className="tabs-container">
      <button
        className={`tab ${activeTab === 'Reply' ? 'active' : ''}`}
        onClick={() => onTabChange('Reply')}
      >
        Reply
      </button>
      <button
        className={`tab ${activeTab === 'Notes' ? 'active' : ''}`}
        onClick={() => onTabChange('Notes')}
      >
        Notes
      </button>
    </div>
  );
}

export default Tabs;
