function Work() {
  return (
    <section className="work padding">
      <div className="container">
        <header className="sec-header text-center">
          <h2 className="heading">Our Work</h2>
          <div className="dot-wrapper">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </header>
        {/* Blog Cards */}
        <div className="flex">
          <div className="flex-23">
            <img className="flexible-img" src="work-image1.jpg" alt="Work  1" />
          </div>
          <div className="flex-23">
            <img className="flexible-img" src="work-image2.jpg" alt="Work  1" />
          </div>
          <div className="flex-23">
            <img className="flexible-img" src="work-image3.jpg" alt="Work  1" />
          </div>
          <div className="flex-23">
            <img className="flexible-img" src="work-image4.jpg" alt="Work  1" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
