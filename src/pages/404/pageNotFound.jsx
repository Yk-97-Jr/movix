import React from "react";
import noResults from "../../assets/pagnotfound.gif";
import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Img from "../../components/lazyLooadImage/Img";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <ContentWrapper>
        <span className="bigText">404</span>
        <div className="flex flex-col items-center justify-center">
          <Img className={`w-[400px]`} src={noResults} />
        </div>
        <span className="smallText">Page not found!</span>
      </ContentWrapper>
    </div>
  );
};

export default PageNotFound;
