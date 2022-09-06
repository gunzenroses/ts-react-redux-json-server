import { FC } from 'react';
import { Link } from 'react-router-dom';

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
    <Link to='./contacts' className={`CustomLink CustomLink_${theme}`}>
      {text}
    </Link>
  );
}

export { CustomLink };