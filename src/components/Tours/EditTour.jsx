import React from "react";
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
  Switch,
  FormControlLabel,
} from "@mui/material";
import { useEffect, useState } from "react";
import "./admin.css";
import { useTour } from "../../contexts/ToursContextProvider";
import { useParams } from "react-router-dom";

const EditTour = () => {
  const {
    editTour,
    getOneTour,
    oneTour,
    getCategories,
    categories,
    getHotels,
    hotels,
  } = useTour();

  const params = useParams();

  useEffect(() => {
    getCategories();
    getHotels();
    getOneTour(params.id);
  }, []);

  useEffect(() => {
    setTour(oneTour);
  }, [oneTour]);

  const [tour, setTour] = useState(oneTour);

  const handleChangeValue = (e) => {
    if (e.target.name === "image" || e.target.name === "schedule") {
      setTour({ ...tour, [e.target.name]: e.target.files[0] });
    } else {
      setTour({
        ...tour,
        [e.target.name]: e.target.value,
      });
    }
  };

  function handleSave() {
    let editTourData = new FormData();
    editTourData.append("title", tour.title);
    editTourData.append("date_start", tour.date_start);
    editTourData.append("date_end", tour.date_end);
    editTourData.append("quantity", tour.quantity);
    editTourData.append("description", tour.description);
    editTourData.append("price", tour.price);
    editTourData.append("packet_category", +tour.packet_category);
    editTourData.append("image", tour.image);
    editTourData.append("departure", tour.departure);
    editTourData.append("arrival", tour.arrival);
    editTourData.append("schedule", tour.schedule);
    editTourData.append("in_stock", tour.in_stock);
    editTourData.append("day_1", tour.day_1);
    editTourData.append("day_2", tour.day_2);
    editTourData.append("day_3", tour.day_3);
    editTourData.append("day_4", tour.day_4);
    editTourData.append("day_5", tour.day_5);
    editTourData.append("day_6", tour.day_6);
    editTourData.append("day_7", tour.day_7);
    editTourData.append("hotel", +tour.hotel);
    // console.log(editTourData);
    editTour(params.id, editTourData);
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
                value={tour?.title}
                onChange={handleChangeValue}
              />

              <Box pt={1.5}>
                <FormControl fullWidth className="inputs-white">
                  <InputLabel>Category </InputLabel>
                  <Select
                    name="packet_category"
                    label={"category"}
                    value={tour?.packet_category}
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
                  value={tour?.date_start}
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
                  value={tour?.departure}
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
                type="number"
                name="price"
                value={tour?.price}
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
                  value={tour?.quantity}
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
                  value={tour?.date_end}
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
                  value={tour?.arrival}
                  onChange={handleChangeValue}
                />
              </Box>
            </Grid>
            <Grid item lg={3} sm={12} md={12} xs={12}>
              <FormControl fullWidth className="inputs-white">
                <InputLabel>Hotel </InputLabel>
                <Select
                  name="hotel"
                  label={"Hotel"}
                  value={tour?.hotel}
                  onChange={handleChangeValue}
                >
                  {hotels?.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Box mt={1.7}>
                <TextField
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                  fullWidth
                  className="inputs-white"
                  multiline
                  rows={7}
                  name="description"
                  value={tour?.description}
                  onChange={handleChangeValue}
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
                borderRadius={3.5}
                className="upload"
                position="relative"
                component={"input"}
                type={"file"}
                name="schedule"
                onChange={handleChangeValue}
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
                  name="day_1"
                  value={tour?.day_1}
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
                      value={tour?.day_2}
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
                      value={tour?.day_3}
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
                      value={tour?.day_4}
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
                      value={tour?.day_5}
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
                      value={tour?.day_6}
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
                      value={tour?.day_7}
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
            <Button className="buttons_for_adding_to_API" onClick={handleSave}>
              SAVE CHANGES
            </Button>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default EditTour;
