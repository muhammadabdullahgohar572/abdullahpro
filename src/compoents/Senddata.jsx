import chaeksin from "../Imges/images.png";
import App from "../Imges/ri_apple-fill.png";
// import tra from "../Imges/transactions.png"

export const Senddata = () => {
  return (
    <>
      <div id="cheak">
        <div className="sende">
          <div className="send1">
            <h1>
              Send & receive <br />
              money instantly
            </h1>
            <div className="lo" >
            <span >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br />
              sed do eiusmod tempor incididunt ut labore et.
            </span>
                </div>
            <div className="img1">
              <div className="sin">
                <img src={chaeksin} alt="" style={{ width: 20,marginRight:20,height:20 }} />
                <span>Instant Transfer</span>
              </div>

              <div className="sin">
                <img src={chaeksin} alt="" style={{ width: 20,marginRight:20 ,height:20}} />
                <span>Payments worldwide</span>
              </div>
            </div>
            <div className="img1">
              <div className="sin">
                <img src={chaeksin} alt="" style={{ width: 20,marginRight:20 ,height:20 }} />
                <span>Instant Transfer</span>
              </div>

              <div className="sin">
                <img src={chaeksin} alt="" style={{ width: 20,height:20,marginRight:20  }} />
                <span>Payments worldwide</span>
              </div>
            </div>
          </div>

          <div className="Electroni">
            {/* <img src={tra} alt="" className="tare"/> */}

            <div className="E">
              <div className="Elec1">
                <div className="Elecimg">
                  <img src={App} alt="" id="app" />
                </div>
                <div className="ao">
                  <span>Apple</span>
                  <br />
                  <span>Electronic</span>
                </div>
              </div>

              <div>
                <span>-799$</span>
              </div>
            </div>

            <div className="Electronic1">
              <div className="Elec1">
                <div className="Elecimg">
                  <img src={App} alt="" id="app" />
                </div>
                <div className="ao">
                  <span>Amazon</span>
                  <br />
                  <span>Electronic</span>
                </div>
              </div>

              <div>
                <span>-799$</span>
              </div>
            </div>

            <div className="Electronic1">
              <div className="Elec1">
                <div className="Elecimg">
                  <img src={App} alt="" id="app" />
                </div>
                <div className="ao">
                  <span>Twitter</span>
                  <br />
                  <span>Ads</span>
                </div>
              </div>

              <div>
                <span>-29$</span>
              </div>
            </div>

            <div className="Electronic1">
              <div className="Elec1">
                <div className="Elecimg">
                  <img src={App} alt="" id="app" />
                </div>
                <div className="ao">
                  <span>Microsoft</span>
                  <br />
                  <span>Office suite</span>
                </div>
              </div>

              <div>
                <span>-149$</span>
              </div>
            </div>

            <div className="Electronic1">
              <div className="Elec1">
                <div className="Elecimg">
                  <img src={App} alt="" id="app" />
                </div>
                <div className="ao">
                  <span>Dropbox</span>
                  <br />
                  <span>cloud</span>
                </div>
              </div>

              <div>
                <span>-14$</span>
              </div>
            </div>

            <div className="Electronic1">
              <div className="Elec1">
                <div className="Elecimg">
                  <img src={App} alt="" id="app" />
                </div>
                <div className="ao">
                  <span>paypal</span>
                  <br />
                  <span>Electronic</span>
                </div>
              </div>

              <div>
                <span>-149$</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
