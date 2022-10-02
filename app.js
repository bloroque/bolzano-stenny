// ***** Section one *****
const SectionOneComponent = () => {
  return (
    <div class="section-one">
      <div>how we do it</div>
      <div>We use data-driven creativity to solve business problems</div>
    </div>
  );
};

ReactDOM.render(<SectionOneComponent />, document.querySelector('#sectionOne'));

//  ***** Section two *****
const SectionTwoComponent = () => {
  return (
    <div class="section-two">
      <img class="bg-img" src="./assets/images/image1.png" alt="background" />
      <div>
        By harnessing powerful insights and smart targeting, we're able to
        create behavior-changing ideas and experiences that deliver value to
        brands. Supported by our proprietary{' '}
        <u>Creative Intelligence process</u>,<u>unique tools</u> and{' '}
        <u>global partners</u>, we are able to put data at the heart of
        everything we do to orchestrate experiences that deliver creativity with
        precision and purpose.
      </div>
      <img class="pencil" src="./assets/images/pencil.png" alt="pencil" />
    </div>
  );
};

ReactDOM.render(<SectionTwoComponent />, document.querySelector('#sectionTwo'));

//  ***** Section three *****
const SectionThreeComponent = () => {
  return (
    <div class="section-three">
      <div class="section-three-title">business problems we've solved</div>
      <div class="container contain-card-section-three">
        <div class="row">
          <div class="col-lg-6">
            <div class="card-section">
              <h3>Can a love story double as a hearing test?</h3>
              <a>Find out here</a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card-section">
              <h3>How close to an AFL player can you get?</h3>
              <a>Find out here</a>
            </div>
          </div>
        </div>
      </div>
      <div class="section-view">
        <a href="#">View our work</a>
      </div>
    </div>
  );
};

ReactDOM.render(
  <SectionThreeComponent />,
  document.querySelector('#sectionThree')
);

//  ***** Footer *****
const FooterComponent = () => {
  return (
    <div class="contain-footer">
      <div class="container">
        <div class="row">
          <div class="footer">
            <div class="footer-icon">
              <img src="./assets/images/linkedin.png" alt="linkedin" />
              <img src="./assets/images/twitter.png" alt="twitter" />
              <img src="./assets/images/facebook.png" alt="facebook" />
            </div>

            <div class="footer-right">
              &copy; Proximity Worldwide 2018. All Rights Reserved.{' '}
              <u>Privacy statement</u>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<FooterComponent />, document.querySelector('#footer'));
