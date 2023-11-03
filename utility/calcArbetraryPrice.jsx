function calcArbitraryPrice(id) {
  const numericValue = parseInt(id, 10);

  // Adjust the range of prices as needed
  const minDollars = 20;
  const maxDollars = 60;

  // Calculate the arbitrary price within the specified range
  const calculatedDollars =
    (numericValue % (maxDollars - minDollars + 1)) + minDollars;

  // Calculate the cents dynamically based on the numeric value
  const calculatedCents = (numericValue % 100).toString().padStart(2, "0");

  return `${calculatedDollars}.${calculatedCents}`;
}

export default calcArbitraryPrice;
