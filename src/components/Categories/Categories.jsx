import React from "react";
import "./Categories.css";
import { Container } from "@mui/system";

const Categories = () => {
  return (
    <>
      <div className="background-image" alt="">
        <Container>
          <span className="categories_span-CATEGORIES">CATEGORIES</span>

          <div className="categories_card_block">
            {/*  */}
            <div className="categories_card beach B_T">
              <h6>BEACHES</h6>
              <div></div>
            </div>

            <div className="categories_card iconiccities I_C">
              <div>
                <span>ICONIC CITIES</span>
              </div>
            </div>

            <div className="categories_card desert D_S">
              <div></div>
              <h6>DESERT</h6>
            </div>

            <div className="categories_card mountains">
              <h6>MOUNTAINS</h6>
              <div></div>
            </div>

            <div className="categories_card skiing D_S">
              <div></div>
              <h6>SKIING</h6>
            </div>

            <div className="categories_card camping I_C">
              <div>
                <span>CAMPING</span>
              </div>
            </div>

            <div className="categories_card tropic B_T">
              <h6>TROPIC</h6>
              <div></div>
            </div>
            {/*  */}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Categories;
