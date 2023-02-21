import React, { useEffect } from "react";
import "./Categories.css";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useTour } from "../../contexts/ToursContextProvider";
import { Box, Typography } from "@mui/material";

const Categories = () => {
  const { categories, getCategories } = useTour();

  useEffect(() => {
    getCategories();
  }, []);

  // <Box>
  //   {categories?.map((category) => (
  //     <Typography>{category.title}</Typography>
  //   ))}
  // </Box>;
  const navigate = useNavigate();

  return (
    <>
      <div className="background-image" alt="">
        <Container>
          <span className="categories_span-CATEGORIES">CATEGORIES</span>

          <div className="categories_card_block">
            <div
              className="categories_card beach B_T"
              onClick={() => navigate("/category/beach")}
            >
              <h6>BEACHES</h6>
              <div></div>
            </div>

            <div
              className="categories_card iconiccities I_C"
              onClick={() => navigate("/category/iconic_cities")}
            >
              <div>
                <span>ICONIC CITIES</span>
              </div>
            </div>

            <div
              className="categories_card desert D_S"
              onClick={() => navigate("/category/desert")}
            >
              <div></div>
              <h6>DESERT</h6>
            </div>

            <div
              className="categories_card mountains"
              onClick={() => navigate("/category/mountains")}
            >
              <h6>MOUNTAINS</h6>
              <div></div>
            </div>

            <div
              className="categories_card skiing D_S"
              onClick={() => navigate("/category/skiing")}
            >
              <div></div>
              <h6>SKIING</h6>
            </div>

            <div
              className="categories_card camping I_C"
              onClick={() => navigate("/category/camping")}
            >
              <div>
                <span>CAMPING</span>
              </div>
            </div>

            <div
              className="categories_card tropic B_T"
              onClick={() => navigate("/category/tropic")}
            >
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
