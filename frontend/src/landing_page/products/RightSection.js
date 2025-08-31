import React from "react";

function RightSection({
    imageURL,
    productName,
    productDescreption,
    learnMore,
  }) {
  return (
    <div className="container" style={{ padding: "80px 0 0 0" }}>
      <div className="row">
        <div className="col-4 p-3">
        <h2 className="mb-3" style={{marginTop:"3rem"}}>{productName}</h2>
          <p className="fs-5 text-muted">{productDescreption}</p>
          <div>
            <a
              href={learnMore}
              style={{textDecoration: "none" }}
            >
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-7">
          <img src={imageURL}/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
