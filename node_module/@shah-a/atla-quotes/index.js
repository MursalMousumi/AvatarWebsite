const quotes = [
  // Response set 1 for Aang
  "Aang: \"Harsh words won't solve problems, action will!\"", // S1E11
  "Aang: \"The past can be a great teacher.\"", // S3E13
  "Aang: \"It's easy to do nothing, but it's hard to forgive.\"", // S3E16

  // Response set 2 for Katara
  "Katara: \"It is the strength of your hearts that make you who you are.\"", // S1E6
  "Katara: \"Everybody, hold hands. We can do this. We have to.\"", // S2E11
  "Katara: \"I will never, ever turn my back on people who need me!\"", // S3E3

  // Response set 3 for Sokka
  "Sokka: \"I'm just a guy with a boomerang. I didn't ask for all this flying and magic!\"", // S1E2
  "Sokka: \"It's a giant mushroom! Maybe it's friendly!\"", // S2E11
  "Sokka: \"I'm just a guy who likes comedy.\"", // S3E17

  // Response set 4 for Uncle Iroh
  "Uncle Iroh: \"Pride is not the opposite of shame, but its source. True humility is the only antidote to shame.\"", // S2E9
  "Uncle Iroh: \"It is usually best to admit mistakes when they occur, and seek to restore honor.\"", // S2E15
  "Uncle Iroh: \"You can't always see the light at the end of the tunnel, but if you just keep moving, you will come to a better place.\"", // S2E20

  // Response set 5 for Cabbage Merchant
  "Cabbage Merchant: \"No! My cabbages!\"", // S1E5
  "Cabbage Merchant: \"My cabbages! This place is worse than Omashu!\"", // S1E9
  "Cabbage Merchant: \"My cabb--!... Oh, forget it!\"" // S2E15
]

const getQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

module.exports = {
  getQuote
};
