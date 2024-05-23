import React from 'react';

interface Props {
  name: string;
  url: string;
}

const Footer: React.FC<Props> = ({ url, name }) => {
  return (
    <footer>
      Made with
      <a href={url}>{name}</a>!
    </footer>
  );
};

export default Footer;
