import React from 'react';

interface Link {
  key: string;
  url: string;
}

interface Props {
  links: Link[];
}

const QuickSightButton: React.FC<Props> = ({ links }) => {
  const changeUrl = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="button-container">
      {links.map(link => (
        <button key={link.key} className="quickSight-button" onClick={() => changeUrl(link.url)}>
          {link.key}
        </button>
      ))}
    </div>
  );
};

export default QuickSightButton;

