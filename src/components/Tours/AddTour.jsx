import {
  Box,
  Container,
  Grid,
  TextField,
  MenuItem,
  Typography,
  Button,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Stack from "@mui/material/Stack";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import React, { useEffect, useState } from "react";
import "./admin.css";
import Upload from "./image/upload.png";
import { useTour } from "../../contexts/ToursContextProvider";
const AddTour = () => {
  // const [date_start, setDateStart] = React.useState(dayjs());
  // const [date_end, setDateEnd] = React.useState(dayjs());

  const [imageTour, setImageTour] = useState(Upload);

  const { addTours, getCategories, categories, getHotels, hotels, addHotels } =
    useTour();
  const [formData, setFormData] = useState();

  // const handleChangeDateStart = (newValue) => {
  //   setDateStart(newValue);
  //   console.log(date_start);
  // };

  // const handleChangeDateEnd = (newValue) => {
  //   setDateEnd(newValue);
  // };

  useEffect(() => {
    getHotels();
    getCategories();
  }, []);
  console.log(hotels);

  const [newHotel, setNewHotel] = useState({
    title: "",
    address: "",
    stars: 0,
    breakfast: false,
    description: "",
    image: "",
  });
  const handleChange = (e) => {
    if (e.target.name === "image") {
      setNewHotel({ ...newHotel, [e.target.name]: e.target.files[0] });
    } else {
      setNewHotel({
        ...newHotel,
        [e.target.name]: e.target.value,
      });
    }
  };

  const [newTour, setNewTour] = useState({
    // date_start: date_start,
    // date_end: date_end,
    date_start: "",
    date_end: "",
    price: "",
    quantity: "",
    departure: "",
    arrival: "",
    in_stock: true,
    description: "",
    schedule: "",
    image: "",
    title: "",
    day_1: "",
    day_2: "",
    day_3: "",
    day_4: "",
    day_5: "",
    day_6: "",
    day_7: "",
    packet_category: 0,
    hotel: 0,
  });

  const handleChangeValue = (e) => {
    if (e.target.name === "image" || e.target.name === "schedule") {
      // const files = Array.from(e.target.files);
      setNewTour({ ...newTour, [e.target.name]: e.target.files[0] });
    } else {
      setNewTour({
        ...newTour,
        [e.target.name]: e.target.value,
      });
    }
  };

  // else if (
  //   e.target.name === "id" ||
  //   e.target.name === "quantity" ||
  //   e.target.name === "price"
  // ) {
  //   setNewTour({ ...newTour, [e.targe.value]: Number(e.target.value) });
  // }

  //! function to save
  function handleSave() {
    let newTourData = new FormData();
    newTourData.append("title", newTour.title);
    newTourData.append("date_start", newTour.date_start);
    newTourData.append("date_end", newTour.date_end);
    newTourData.append("quantity", newTour.quantity);
    newTourData.append("description", newTour.description);
    newTourData.append("price", newTour.price);
    newTourData.append("packet_category", +newTour.packet_category);
    newTourData.append("image", newTour.image);
    newTourData.append("departure", newTour.departure);
    newTourData.append("arrival", newTour.arrival);
    newTourData.append("schedule", newTour.schedule);
    newTourData.append("in_stock", newTour.in_stock);
    newTourData.append("day_1", newTour.day_1);
    newTourData.append("day_2", newTour.day_2);
    newTourData.append("day_3", newTour.day_3);
    newTourData.append("day_4", newTour.day_4);
    newTourData.append("day_5", newTour.day_5);
    newTourData.append("day_6", newTour.day_6);
    newTourData.append("day_7", newTour.day_7);
    newTourData.append("hotel", +newTour.hotel);
    console.log(newTour, "new");
    console.log(newTourData, "newData");
    addTours(newTourData);
  }

  // useEffect(() => {
  // let newHotelAdd = new FormData();
  // newHotelAdd.append("title", newHotel.title);
  // newHotelAdd.append("id", parseInt(newHotel.id));
  // newHotelAdd.append("stars", newHotel.stars);
  // newHotelAdd.append("address", newHotel.address);
  // newHotelAdd.append("image", newHotel.image);
  // newHotelAdd.append("breakfast", newHotel.breakfast);
  // newHotelAdd.append("description", newHotel.description);
  //   // console.log(newHotel, "hotel");
  //   // console.log(newHotelAdd, "hotelData");
  //   // addHotels(newHotelAdd);
  //   setFormData(newHotelAdd);
  // }, [newHotel]);

  function handleSaveHotel() {
    let newHotelAdd = new FormData();
    newHotelAdd.append("title", newHotel.title);
    newHotelAdd.append("stars", newHotel.stars);
    newHotelAdd.append("address", newHotel.address);
    newHotelAdd.append("image", newHotel.image);
    newHotelAdd.append("breakfast", newHotel.breakfast);
    newHotelAdd.append("description", newHotel.description);

    console.log(newHotel, "hotel");
    console.log(newHotelAdd, "hotelData");
    addHotels(newHotelAdd);
    setNewHotel({
      id: 0,
      title: "",
      address: "",
      stars: 0,
      breakfast: false,
      description: "",
      image: "",
    });
  }
  return (
    <div>
      <Box>
        <Container>
          <Box pt={5} pb={2} mb={5}>
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
                className="upload"
                position="relative"
                component={"input"}
                type={"file"}
                name="image"
                onChange={handleChangeValue}
              ></Box>
              {/* <TextField
                id="outlined-basic"
                label="ID OF PACKET"
                variant="outlined"
                fullWidth
                type={"integer"}
                required
                className="inputs-white"
                name="id"
                value={newTour.id}
                onChange={handleChangeValue}
              /> */}

              {/* <div>
                <label for="file_out" class="feedback__label"></label>
                <input
                  type="file"
                  id="file_out"
                  class="feedback__file"
                  name="image"
                  onChange={handleChangeValue}
                />
              </div> */}
            </Grid>
            <Grid item lg={3} sm={4} md={4} xs={12}>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                fullWidth
                required
                className="inputs-white"
                name="title"
                value={newTour.title}
                onChange={handleChangeValue}
              />
              {/* <TextField
                id="outlined-basic"
                label="avalibility"
                variant="outlined"
                fullWidth
                required
                className="inputs-white"
                name="availability"
                value={newTour.availability}
                onChange={handleChangeFile}
              /> */}
              <Box pt={1.5}>
                <FormControl fullWidth className="inputs-white">
                  <InputLabel>Category </InputLabel>
                  <Select
                    name="packet_category"
                    label={"category"}
                    value={newTour.packet_category}
                    onChange={handleChangeValue}
                  >
                    {categories?.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.title}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box pt={1.5}>
                <TextField
                  id="outlined-basic"
                  label="Check In"
                  variant="outlined"
                  fullWidth
                  required
                  placeholder="YYYY-MM-DD"
                  className="inputs-white"
                  name="date_start"
                  value={newTour.date_start}
                  onChange={handleChangeValue}
                />
              </Box>
              <Box pt={1.5}>
                <TextField
                  id="outlined-basic"
                  label="From"
                  variant="outlined"
                  fullWidth
                  required
                  className="inputs-white"
                  name="departure"
                  value={newTour.departure}
                  onChange={handleChangeValue}
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
                type="integer"
                name="price"
                value={newTour.price}
                onChange={handleChangeValue}
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
                  name="quantity"
                  value={newTour.quantity}
                  onChange={handleChangeValue}
                />
              </Box>
              <Box pt={1.5}>
                <TextField
                  id="outlined-basic"
                  label="Check Out "
                  variant="outlined"
                  fullWidth
                  placeholder="YYYY-MM-DD"
                  required
                  className="inputs-white"
                  name="date_end"
                  value={newTour.date_end}
                  onChange={handleChangeValue}
                />
              </Box>
              <Box pt={1.5}>
                <TextField
                  id="outlined-basic"
                  label="To"
                  variant="outlined"
                  fullWidth
                  required
                  className="inputs-white"
                  name="arrival"
                  value={newTour.arrival}
                  onChange={handleChangeValue}
                />
              </Box>
            </Grid>
            <Grid item lg={3} sm={12} md={12} xs={12}>
              {/* <Box>
                <TextField
                  id="outlined-basic"
                  label="hotel Id"
                  variant="outlined"
                  fullWidth
                  required
                  type="number"
                  className="inputs-white"
                  name="hotel"
                  value={newTour.hotel}
                  onChange={handleChangeValue}
                />
              </Box> */}

              <FormControl fullWidth className="inputs-white">
                <InputLabel>Hotel </InputLabel>
                <Select
                  name="hotel"
                  label={"Hotel"}
                  value={newTour.hotel}
                  onChange={handleChangeValue}
                >
                  {hotels?.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                // pt={1.5}
                id="outlined-basic"
                label="Description"
                variant="outlined"
                fullWidth
                className="inputs-white"
                multiline
                rows={7.9}
                name="description"
                value={newTour.description}
                onChange={handleChangeValue}
              />
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
                borderRadius={3.5}
                className="upload"
                position="relative"
                component={"input"}
                type={"file"}
                name="schedule"
                // value={newTour.schedule}
                onChange={handleChangeValue}
              ></Box>
              {/* <div>
                <label for="file_out" class="feedback__label"></label>
                <input
                  type="file"
                  id="file_out"
                  class="feedback__file"
                  name="schedule"
                  onChange={handleChangeValue}
                />
              </div> */}
            </Grid>
            <Grid item lg={9}>
              <Grid item lg={12} sm={12} md={12} xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Plan #1"
                  variant="outlined"
                  fullWidth
                  className="inputs-white"
                  name="day_1"
                  value={newTour.day_1}
                  onChange={handleChangeValue}
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
                      name="day_2"
                      value={newTour.day_2}
                      onChange={handleChangeValue}
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
                      name="day_3"
                      value={newTour.day_3}
                      onChange={handleChangeValue}
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
                      className="inputs-white"
                      name="day_4"
                      value={newTour.day_4}
                      onChange={handleChangeValue}
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
                      className="inputs-white"
                      name="day_5"
                      value={newTour.day_5}
                      onChange={handleChangeValue}
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
                      className="inputs-white"
                      name="day_6"
                      value={newTour.day_6}
                      onChange={handleChangeValue}
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
                      className="inputs-white"
                      name="day_7"
                      value={newTour.day_7}
                      onChange={handleChangeValue}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Box display="flex" justifyContent="end" m={3}>
            <Button onClick={handleSave}>ADD</Button>
          </Box>
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
                borderRadius={3.5}
                className="upload"
                position="relative"
                component={"input"}
                type={"file"}
                name="image"
                onChange={handleChange}
              ></Box>

              {/* <div>
                <label for="file_out" class="feedback__label"></label>
                <input
                  type="file"
                  id="file_out"
                  class="feedback__file"
                  name="image"
                  onChange={handleChange}
                />
              </div> */}
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
                  name="title"
                  value={newHotel.title}
                  onChange={handleChange}
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
                  name="stars"
                  // value={newHotel.stars}
                  onChange={handleChange}
                  inputProps={{ min: 1, max: 5 }}
                />
              </Box>
              {/* <Box pt={1.5}>
                <TextField
                  id="outlined-basic"
                  label="Id"
                  variant="outlined"
                  fullWidth
                  required
                  type="number"
                  className="inputs-white"
                  name="id"
                  value={newHotel.id}
                  onChange={handleChange}
                />
              </Box> */}
            </Grid>
            <Grid item lg={6} md={5} sm={12} xs={12}>
              <TextField
                id="outlined-basic"
                label="Address"
                variant="outlined"
                fullWidth
                required
                className="inputs-white"
                name="address"
                value={newHotel.address}
                onChange={handleChange}
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
                  name="description"
                  value={newHotel.description}
                  onChange={handleChange}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Box display="flex" justifyContent="end" p={5}>
            <Button onClick={handleSaveHotel}>ADD HOTEL</Button>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default AddTour;
