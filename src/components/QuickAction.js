import React from 'react';
import './QuickAction.css';

const QuickAction = ({ icon, title, onClick }) => {
  return (
    <div className="quick-action" onClick={onClick}>
      <div className="quick-action-icon">
        {icon}
      </div>
      <div className="quick-action-title">
        {title}
      </div>
    </div>
  );
};

export default QuickAction; 