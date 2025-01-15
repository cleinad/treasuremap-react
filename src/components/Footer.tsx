import React from 'react'
import { Link } from 'react-router-dom';

interface Props {
    nextPageLink: string;
}

const Footer = ({nextPageLink}:Props) => {
  return (
    <div className="next-page">
        {/*<Link to="/wealth">Onto the Next!</Link>*/}
    </div>
  )
}

export default Footer;