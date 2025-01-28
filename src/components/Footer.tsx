import React from "react";
import { Link } from "react-router-dom";

interface Props {
  previousPageLink?: string;
  nextPageLink?: string;
}

const Footer = ({ previousPageLink, nextPageLink }: Props) => {
  return (
    <>
      <div className="page-buttons">
        <div className="previous-page">
          {previousPageLink && <Link to={"/" + previousPageLink}>Previous Page</Link>}
        </div>
        <div className="next-page">
          {nextPageLink && <Link to={"/" + nextPageLink}>Next Page</Link>}
        </div>
      </div>
    </>
  );
};

export default Footer;