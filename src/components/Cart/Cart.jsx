import { Container } from "@mui/system";
import React, { useEffect } from "react";
import "./Cart.css";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useMyTour } from "../../contexts/MyToursContextProvider";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const Cart = () => {
  const {
    mytours,
    getMyTours,
    deleteFromMyTours,
    incrementCountOfMembers,
    decrementCountOfMembers,
  } = useMyTour();

  useEffect(() => {
    getMyTours();
  }, []);
  return (
    <div style={{ marginTop: "60px" }}>
      <Container>
        <h6 className="cart_h6">Your Cart</h6>
        {/* <div className="cart_emptyIMG"></div>
        <p color="error" className="cart_Oops">
          Oops! Your cart is empty!
        </p>
        <p className="cart_P">
          Looks like you haven’t added
          <br /> anything to your cart yet
        </p>
        <button className="cart_btn">BOOK NOW</button> */}
        <div>
          {mytours?.tours.map((every) => (
            <div>
              <div
                className="cart_tour_img"
                style={{ backgroundImage: `url(${every.everyTour.image})` }}
              >
                <div className="cart_tour_img__block">
                  <div className="cart_tour_data">
                    <span>
                      {every.everyTour.date_start} - {every.everyTour.date_end}
                    </span>
                  </div>
                  <h6 className="cart_tour_place">
                    {every.everyTour.departure} - {every.everyTour.arrival}
                  </h6>

                  <div className="cart_tour_block_turist">
                    <span className="cart_tour_turist">
                      Turists:
                      <AddCircleOutlineIcon
                        fontSize="small"
                        style={{
                          margin: " 0 0 -5px 5px",
                        }}
                        onClick={() =>
                          incrementCountOfMembers(every.everyTour.id)
                        }
                      ></AddCircleOutlineIcon>
                      <span
                        style={{
                          margin: "0 10px",
                        }}
                      >
                        {every.member}
                      </span>
                      <RemoveCircleOutlineIcon
                        fontSize="small"
                        style={{
                          margin: "0 0 -5px ",
                        }}
                        onClick={() =>
                          decrementCountOfMembers(every.everyTour.id)
                        }
                      ></RemoveCircleOutlineIcon>
                      <span
                        sx={{ color: "white", margin: "0 0 -5px " }}
                        onClick={() => deleteFromMyTours(every.everyTour.id)}
                      >
                        <CancelOutlinedIcon />
                      </span>
                    </span>
                  </div>
                </div>

                <div className="cart_tour_lineIMG">
                  <h6>
                    FLY HIGH <div></div>
                  </h6>

                  <span>{every.subPrice} $</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div>
          <div className="cart_tour_img">
            <div className="cart_tour_img__block">
              <div className="cart_tour_data">
                <span>25.04.2023 - 02.04.2023</span>
              </div>
              <h6 className="cart_tour_place">BISHKEK - TURKEY</h6>

              <div className="cart_tour_block_turist">
                <span className="cart_tour_turist">
                  Turists:
                  <AddCircleOutlineIcon
                    fontSize="small"
                    style={{
                      margin: " 0 0 -5px 5px",
                    }}
                  ></AddCircleOutlineIcon>
                  <span>1</span>
                  <RemoveCircleOutlineIcon
                    fontSize="small"
                    style={{
                      margin: " 0 0 -5px 5px",
                    }}
                  ></RemoveCircleOutlineIcon>
                </span>
              </div>
            </div>

            <div className="cart_tour_lineIMG">
              <h6>
                FLY HIGH <div></div>
              </h6>

              <span>880$</span>
            </div>
          </div>
        </div> */}

        <div>
          <div className="cart_totalPrice__DIV">
            <span className="cart_totalPrice">
              Total: <span>{mytours?.totalPrice} $</span>
            </span>
          </div>
          <div className="cart_block_continue_boy">
            <Link to={"/tours"} style={{ textDecoration: "none" }}>
              <div className="cart_continue">
                <span>
                  <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
                  Continue booking
                </span>
              </div>
            </Link>
          </div>
          <Link to={"/payment"} style={{ textDecoration: "none" }}>
            <div>
              <button className="cart_buy_btn">BUY</button>
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
