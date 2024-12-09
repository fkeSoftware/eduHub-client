import React from "react";
import "./homePage.css";
import first from "./first.png";
import motif from "./motif.png";
import sewing from "./sewing.png";
type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <div className="component-layout home-layout scrollable-layout">
        <div className="first-head">
          Home
          <div className="sub-layout d-grid grid-column-three justify-center align-i-center align-c-center gap-1rem">
            <div className="card-layout rounded-card">
              <p className="text text-dark-mode text-center">
                card title example
              </p>
              <img src="https://via.placeholder.com/360x360.png?text=FKE+EduHub" />
              <p className="small-text small-text-dark-mode">
                card content example
              </p>
            </div>
            <div className="card-layout rounded-card">
              <p className="text text-dark-mode text-center">
                card title example
              </p>
              <img src="https://via.placeholder.com/360x360.png?text=FKE+EduHub" />
              <p className="small-text small-text-dark-mode">
                card content example
              </p>
            </div>
            <div className="card-layout rounded-card">
              <p className="text text-dark-mode text-center">
                card title example
              </p>
              <img src="https://via.placeholder.com/360x360.png?text=FKE+EduHub" />
              <p className="small-text small-text-dark-mode">
                card content example
              </p>
            </div>
            <div className="card-layout rounded-card">
              <p className="text text-dark-mode text-center">
                card title example
              </p>
              <img src="https://via.placeholder.com/360x360.png?text=FKE+EduHub" />
              <p className="small-text small-text-dark-mode">
                card content example
              </p>
            </div>
            <div className="card-layout rounded-card">
              <p className="text text-dark-mode text-center">
                card title example
              </p>
              <img src="https://via.placeholder.com/360x360.png?text=FKE+EduHub" />
              <p className="small-text small-text-dark-mode">
                card content example
              </p>
            </div>
            <div className="card-layout rounded-card">
              <p className="text text-dark-mode text-center">
                card title example
              </p>
              <img src="https://via.placeholder.com/360x360.png?text=FKE+EduHub" />
              <p className="small-text small-text-dark-mode">
                card content example
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
