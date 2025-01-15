import React from "react";

interface Props {
  title: string;
  subtitle?: string; //? indicates optional
  updateDate: string;
}

const ArticleHeader = ({ title, updateDate, subtitle }: Props) => {
  return (
    <>
      <div className="page-title">
        <h1>{title}</h1>
      </div>
      <div className="page-subtitle">{subtitle}</div>
      <div className="updateDate">updated on {updateDate}</div>
    </>
  );
};

export default ArticleHeader;
