import { FC } from 'react';

import './CustomLink.scss';

type Props = {
  theme: string;
  text: string;
};

const CustomLink: FC<Props> = ({ 
  theme,
  text 
}) => {
  return (
    <a href='/' className={`CustomLink CustomLink_${theme}`}>
      {text}
    </a>
  );
}

export { CustomLink };