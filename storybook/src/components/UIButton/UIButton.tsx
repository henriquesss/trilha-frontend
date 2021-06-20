import React from 'react';

const UIButton: React.FC = ({ children, ...rest }) => {
  return (
      <button className="button" {...rest}>
          { children }
      </button>
  );
}

export default UIButton;