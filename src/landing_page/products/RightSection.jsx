function RightSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row p-3 mt-6 mb-6">
        
        <div className="col-1"></div>
    <div className="col-5 mt-5 ">
          <h1>{productName}</h1>
          <p className="fs-5">{productDescription}</p>

          <div className="mt-3 mb-3">
            <a href={tryDemo} style={{textDecoration:'none'}}>Try Demo <i class="fa-solid fa-arrow-right ms-2"></i> </a>
            <a className="ms-5" href={learnMore} style={{textDecoration:'none'}}>Learn More <i class="fa-solid fa-arrow-right ms-2"></i> </a>
          </div>

          <div className="mt-4 ">
            <a  href={googlePlay}>
            <img src="media\images\googlePlayBadge.svg" alt="Google Play" />
          </a>
          <a className="ms-5" href={appStore}>
            <img src="media\images\appstoreBadge.svg" alt="Google Play" />
          </a>
          </div>
          
        </div>
        
        {/* <div className="col-1"></div> */}

        <div className="col-5 ms-5">
          <img src={imageURL} alt="Product" style={{ width: "100%" }} />
        </div>
        
        

        
      </div>
    </div>
  );
}

export default RightSection;
