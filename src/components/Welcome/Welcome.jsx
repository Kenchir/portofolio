import React, { Component } from "react";
import "./Welcome.css";
import ReactGA from "react-ga";
import myImage from "../../img/myself.jpg";
export class Welcome extends Component {
  render() {
    return (
      <section className="intro text-center" id="title-section">
        <div className="title-text col-sm-10 col-sm-12 col-lg-12">
          <div>
            {/* <img
              src="https://res.cloudinary.com/do7m8vtor/image/upload/v1579866024/mypic/IMG_20170910_155935.jpg"
              width="200"
              height="200"
              className="rounded-circle mx-auto d-block img-responsive"
              alt=""
            /> */}
            <img
              src={myImage}
              width="10%"
              height="10%"
              className="rounded mx-auto d-block img-responsive"
              alt=""
            />
            <div class="rank-label-container">
              <label htmlFor="file-upload" class="rank-label">
                <img
                  src="https://res.cloudinary.com/do7m8vtor/image/upload/v1579866024/mypic/IMG_20170910_155935.jpg"
                  width="20"
                  alt=""
                />
              </label>{" "}
            </div>{" "}
          </div>{" "}
          <i> Oh!Hello, Nice to meet you </i>{" "}
          <div className="col-md-4 text-center mt-2 mx-auto">
            <h4> Chirchir Kenneth </h4> <i className="fas fa-phone fa-sm"> </i>
            &nbsp;Mobile No: +254727399473<br></br>
            <i class="far fa-envelope fa-sm"> </i>&nbsp;Email:
            kipkogeichirchir2@gmail.com{" "}
          </div>{" "}
          <div className="col-md-4 text-center mt-2 mx-auto">
            <a
              href="https://github.com/Kenchir"
              onClick={() =>
                ReactGA.event({
                  category: "Viewing",
                  action: "Github Profile",
                })
              }
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
            >
              {" "}
              <i
                class="fab fa-github-square fa-4x p-2"
                style={{
                  color: "silver",
                }}
              >
                {" "}
              </i>
            </a>

            <a
              href="https://www.linkedin.com/in/kenneth-chirchir-4b0a9b140/"
              onClick={() =>
                ReactGA.event({
                  category: "Viewing",
                  action: "LinkedIn Profile",
                })
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i class="fab fa-linkedin fa-4x p-2"> </i>
            </a>
            <a
              href="https://stackoverflow.com/users/15065292/kenneth-chirchir"
              onClick={() =>
                ReactGA.event({
                  category: "Viewing",
                  action: "StackOverflow Profile",
                })
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i
                class="fab fa-stack-overflow fa-4x p-2"
                style={{
                  color: "orange",
                }}
              >
                {" "}
              </i>
            </a>
          </div>
          <h4 className="title ">
            <label
              class="typewrite"
              data-period="2000"
              data-type='[ "Innovative", "passionate", "Creative" ]'
            >
              <span class="wrap"> </span>{" "}
            </label>{" "}
          </h4>{" "}
        </div>{" "}
      </section>
    );
  }
}

export default Welcome;
