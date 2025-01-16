import React from "react";
import { Link } from "react-router-dom";

interface Props {
  previousPageLink?: string;
  nextPageLink: string;
}

const Footer = ({ previousPageLink, nextPageLink }: Props) => {
  return (
    <>
      <div className="page-buttons">
        <div className="previous-page">
          {<Link to={"/" + previousPageLink}>Previous Page</Link>}
        </div>
        <div className="next-page">
          {<Link to={"/" + nextPageLink}>Onto the Next!</Link>}
        </div>
      </div>
    </>
  );
};

export default Footer;
