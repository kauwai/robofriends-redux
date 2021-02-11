import React from 'react';

export default function Scroll({ children }) {
  return (
    <div
      style={{
        overflowY: 'scroll',
        marginTop: '16px',
        borderTop: '1px solid green',
        height: '800px',
      }}
    >
      {children}
    </div>
  );
}
