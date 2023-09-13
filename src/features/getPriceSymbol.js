export default function getPriceSymbol(priceRange) {
  switch (priceRange) {
    case "A":
      return "$";
    case "B":
      return "$$";
    case "C":
      return "$$$";
    case "D":
      return "$$$$";
    default:
      return "";
  }
}
