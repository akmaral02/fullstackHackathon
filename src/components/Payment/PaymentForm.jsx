import { Alert, Box, Button, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMyTour } from "../../contexts/MyToursContextProvider";
import "./Payment.css";

const PaymentForm = () => {
  const { mytours, getMyTours } = useMyTour();
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className="body">
      <div className="payment-card">
        <span className="title">PAYMENT DETAILS</span>
        <div className="input-group">
          <input type="text" className="noc" placeholder="Name on Card"></input>
        </div>
        <div className="input-group responsive">
          <input type="text" className="bi" placeholder="Card Number"></input>
          <input type="text" className="bi" placeholder="Expiry"></input>
          <input type="text" className="bi" placeholder="CVV"></input>
        </div>
        <br />
        <br />
        <span className="title">PERSONAL INFO</span>
        <div className="input-group">
          <input
            required
            type="text"
            className="pa"
            placeholder="Your Name"
          ></input>
          <input
            required
            type="number"
            className="pa"
            placeholder="Your Number"
          ></input>
        </div>
        <div className="input-group">
          <input
            type="text"
            className="pa"
            placeholder="Street Address"
            required
          ></input>
          <input type="text" className="pa" placeholder="City"></input>
        </div>
        <div className="input-group">
          <input
            required
            type="text"
            className="pa"
            placeholder="State"
          ></input>
          <input
            required
            type="text"
            className="pa"
            placeholder="Zip Code"
          ></input>
        </div>
        <Box display="flex" justifyContent="space-between" pt={5}>
          <Link to={"/mytours"} style={{ textDecoration: "none" }}>
            <Button variant="outlined" sx={{ mr: 1.5 }}>
              Go Back
            </Button>
          </Link>

          <Button variant="contained" sx={{ ml: 1.5 }} onClick={handleClick}>
            Pay {mytours?.totalPrice}
          </Button>
        </Box>
      </div>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={"success"}
          sx={{
            justifyContent: "center",
            fontSize: 20,
            // color: "inherit",
          }}
        >
          Thank for your confidence
        </Alert>
      </Snackbar>
    </div>
  );
};

export default PaymentForm;
