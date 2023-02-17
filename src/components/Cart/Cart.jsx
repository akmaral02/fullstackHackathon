import { Container } from "@mui/system";
import React from "react";
import "./Cart.css";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Cart = () => {
  return (
    <>
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
          <div>
            <div className="cart_tour_img">
              <div
                style={{
                  padding: "20px 0 0",
                  margin: "0 0 0 50px",
                }}
              >
                <div className="cart_tour_data">
                  <span>25.04.2023 - 02.04.2023</span>
                </div>
                <h6 className="cart_tour_place">BISHKEK - TURKEY</h6>

                <div
                  style={{
                    margin: "30px 0 0",
                  }}
                >
                  <span className="cart_tour_turist">
                    Turists:
                    <AddCircleOutlineIcon
                      fontSize="small"
                      style={{
                        margin: " 0 0 -5px 5px",
                      }}
                    ></AddCircleOutlineIcon>
                    <span
                      style={{
                        margin: "0 10px",
                      }}
                    >
                      1
                    </span>
                    <RemoveCircleOutlineIcon
                      fontSize="small"
                      style={{
                        margin: "0 0 -5px ",
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
          </div>
        </div>

        <div>
          <div className="cart_tour_img">
            <div
              style={{
                padding: "20px 0 0",
                margin: "0 0 0 50px",
              }}
            >
              <div className="cart_tour_data">
                <span>25.04.2023 - 02.04.2023</span>
              </div>
              <h6 className="cart_tour_place">BISHKEK - TURKEY</h6>

              <div
                style={{
                  margin: "30px 0 0",
                }}
              >
                <span className="cart_tour_turist">
                  Turists:
                  <AddCircleOutlineIcon
                    fontSize="small"
                    style={{
                      margin: " 0 0 -5px 5px",
                    }}
                  ></AddCircleOutlineIcon>
                  <span
                    style={{
                      margin: "0 10px",
                    }}
                  >
                    1
                  </span>
                  <RemoveCircleOutlineIcon
                    fontSize="small"
                    style={{
                      margin: "0 0 -5px ",
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
        </div>

        <div>
          <div className="cart_totalPrice__DIV">
            <span className="cart_totalPrice">
              Total: <span>1760$</span>
            </span>
          </div>
          <div className="cart_block_continue_boy">
            <div className="cart_continue">
              <span>
                <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
                Continue booking
              </span>
            </div>

            <button className="cart_buy_btn">BUY</button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
