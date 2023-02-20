import {
  Box,
  Container,
  Grid,
  TextField,
  MenuItem,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import React from "react";
import "./admin.css";
import Upload from "./image/upload.png";
const AddTour = () => {
  const [value, setValue] = React.useState(dayjs("01.01.2023"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const categories = [
    {
      value: "BEACHES",
      label: "Beaches",
    },
    {
      value: "ICONIC CITIES",
      label: "Iconic Cities",
    },
    {
      value: "DESERTS",
      label: "Deserts",
    },
    {
      value: "MOUNTAINS",
      label: "Mountains",
    },
    {
      value: "SKIING",
      label: "Skiing",
    },
    {
      value: "CAMPING",
      label: "Camping",
    },
    {
      value: "TROPIC",
      label: "Tropic",
    },
  ];
  return (
    <div>
      <Box>
        <Container>
          <Box pt={5} pb={2}>
            <Typography
              sx={{ fontSize: 24, color: "#1C4D63", fontWeight: 500 }}
            >
              NEW TOUR
            </Typography>
          </Box>
        </Container>
        <Container
          sx={{
            backgroundColor: "#CCE9F3",
            padding: 5,
            borderRadius: 3,
          }}
        >
          <Grid container spacing={5}>
            <Grid item lg={3}>
              <Box
                width={"100%"}
                height={200}
                borderRadius={3.5}
                component="img"
                src={Upload}
                position="relative"
              ></Box>
            </Grid>
            <Grid item lg={3} sm={4} md={4} xs={12}>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                fullWidth
                required
                className="inputs-white"
              />
              <Box pt={1.5}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Category"
                  fullWidth
                  required
                  className="inputs-white"
                >
                  {categories.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
              <Box pt={1.5}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="Check In"
                    inputFormat="DD/MM/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                    className="inputs-white"
                    required
                    fullWidth
                  />
                </LocalizationProvider>
              </Box>
              <Box pt={1.5}>
                <TextField
                  id="outlined-basic"
                  label="From"
                  variant="outlined"
                  fullWidth
                  required
                  className="inputs-white"
                />
              </Box>
            </Grid>
            <Grid item lg={3} sm={4} md={4} xs={12}>
              <TextField
                id="outlined-basic"
                label="Price"
                variant="outlined"
                fullWidth
                required
                className="inputs-white"
                type="number"
              />

              <Box pt={1.5}>
                <TextField
                  id="outlined-basic"
                  label="Tourists"
                  variant="outlined"
                  fullWidth
                  required
                  className="inputs-white"
                  type="number"
                />
              </Box>
              <Box pt={1.5}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="Check Out"
                    inputFormat="DD/MM/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                    className="inputs-white"
                  />
                </LocalizationProvider>
              </Box>
              <Box pt={1.5}>
                <TextField
                  id="outlined-basic"
                  label="To"
                  variant="outlined"
                  fullWidth
                  required
                  className="inputs-white"
                />
              </Box>
            </Grid>
            <Grid item lg={3} sm={12} md={12} xs={12}>
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                fullWidth
                className="inputs-white"
                multiline
                rows={9.9}
              />
            </Grid>
          </Grid>
        </Container>

        <Container>
          <Box pt={5} pb={2}>
            <Typography
              sx={{ fontSize: 24, color: "#1C4D63", fontWeight: 500 }}
            >
              HOTEL DETAILS
            </Typography>
          </Box>
        </Container>
        <Container
          sx={{
            backgroundColor: "#CCE9F3",
            padding: 5,
            borderRadius: 3,
          }}
        >
          <Grid container spacing={5}>
            <Grid item lg={3}>
              <Box
                width={"100%"}
                height={200}
                backgroundColor="white"
                borderRadius={3.5}
                component="img"
                src={Upload}
                position="relative"
              ></Box>
            </Grid>
            <Grid item lg={3} sm={8} xs={12}>
              <Box>
                <TextField
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  fullWidth
                  required
                  className="inputs-white"
                />
              </Box>
              <Box pt={1.5}>
                <TextField
                  id="outlined-basic"
                  label="Stars"
                  variant="outlined"
                  fullWidth
                  required
                  type="number"
                  className="inputs-white"
                />
              </Box>
            </Grid>
            <Grid item lg={6} md={5} sm={12} xs={12}>
              <TextField
                id="outlined-basic"
                label="Address"
                variant="outlined"
                fullWidth
                required
                className="inputs-white"
              />

              <Box pt={1.5}>
                <TextField
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                  fullWidth
                  required
                  className="inputs-white"
                  multiline
                  rows={4.3}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Container>
          <Box pt={5} pb={2}>
            <Typography
              sx={{ fontSize: 24, color: "#1C4D63", fontWeight: 500 }}
            >
              SHORT PLAN
            </Typography>
          </Box>
        </Container>
        <Container
          sx={{
            backgroundColor: "#CCE9F3",
            padding: 5,
            borderRadius: 3,
          }}
        >
          <Grid container spacing={5}>
            <Grid item lg={3}>
              <Box
                width={"100%"}
                height={200}
                backgroundColor="white"
                borderRadius={3.5}
                component="img"
                src={Upload}
                position="relative"
              ></Box>
            </Grid>
            <Grid item lg={9}>
              <Grid item lg={12} sm={12} md={12} xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Plan #1"
                  variant="outlined"
                  fullWidth
                  className="inputs-white"
                />
              </Grid>
              <Grid item lg={12} display="flex">
                <Grid item lg={6} md={6} xs={12} marginRight={2.5}>
                  <Box pt={1.5}>
                    <TextField
                      id="outlined-basic"
                      label="Plan #2"
                      variant="outlined"
                      fullWidth
                      className="inputs-white"
                    />
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} xs={12} marginLeft={2.5}>
                  <Box pt={1.5}>
                    <TextField
                      id="outlined-basic"
                      label="Plan #3"
                      variant="outlined"
                      fullWidth
                      required
                      className="inputs-white"
                    />
                  </Box>
                </Grid>
              </Grid>
              <Grid item lg={12} display="flex">
                <Grid item lg={6} xs={12} marginRight={2.5}>
                  <Box pt={1.5}>
                    <TextField
                      id="outlined-basic"
                      label="Plan #4"
                      variant="outlined"
                      fullWidth
                      type="number"
                      className="inputs-white"
                    />
                  </Box>
                </Grid>
                <Grid item lg={6} xs={12} marginLeft={2.5}>
                  <Box pt={1.5}>
                    <TextField
                      id="outlined-basic"
                      label="Plan #5"
                      variant="outlined"
                      fullWidth
                      type="number"
                      className="inputs-white"
                    />
                  </Box>
                </Grid>
              </Grid>
              <Grid item lg={12} display="flex">
                <Grid item lg={6} xs={12} marginRight={2.5}>
                  <Box pt={1.5}>
                    <TextField
                      id="outlined-basic"
                      label="Plan #6"
                      variant="outlined"
                      fullWidth
                      type="number"
                      className="inputs-white"
                    />
                  </Box>
                </Grid>
                <Grid item lg={6} xs={12} marginLeft={2.5}>
                  <Box pt={1.5}>
                    <TextField
                      id="outlined-basic"
                      label="Plan #7"
                      variant="outlined"
                      fullWidth
                      type="number"
                      className="inputs-white"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default AddTour;
