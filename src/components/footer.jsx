import React from 'react';

export const FooterComponent = ({ data, personal }) => {
  const current_year = data.show_year ? new Date().getFullYear() : '2025';
  const copyright_text = data.copyright_text
    .replace('%name%', personal.full_name)
    .replace('%year%', current_year);

  return (
    <footer className="bg-dark py-4">
      <div className="container text-center">
        <p className="text-muted mb-0">{copyright_text}</p>
      </div>
    </footer>
  );
};