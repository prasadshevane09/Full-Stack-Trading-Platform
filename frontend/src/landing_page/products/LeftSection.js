import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescreption,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row" style={{ padding: "80px 0 0 0" }}>
        <div className="col-7 p-3">
          <img src={imageURL} style={{width:"75%", marginLeft:"100px"}} />
        </div>
        <div className="col-1"></div>
        <div className="col-4">
          <h2 className="mt-5 mb-4">{productName}</h2>
          <p className="ls-des">{productDescreption}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              learnMore{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-4 mb-5">
            <a href={googlePlay}>
              <img  src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "50px", width:"30%" }}
              />
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default LeftSection;
