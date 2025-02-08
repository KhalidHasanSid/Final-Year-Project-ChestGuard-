import React from 'react';

export const Card = ({ children, className }) => (
  <div className={`p-4 shadow-md rounded-xl bg-[#087198] ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children }) => (
  <div className="p-4">{children}</div>
);