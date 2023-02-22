export function calcTotalPrice(tours) {
  return tours.reduce((acc, cur) => {
    return (acc += cur.subPrice);
  }, 0);
}

export function calcSubPrice(tour) {
  return +tour.member * tour.everyTour.price;
}

export function getToken() {
  const token = JSON.parse(localStorage.getItem("token"));
  const Authorization = `Bearer ${token.access}`;
  const config = { headers: { Authorization } };
  return config;
}
