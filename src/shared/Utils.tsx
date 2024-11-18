class Utils {
  private static instance: Utils;
  static getInstance() {
    if (!this.instance) {
      this.instance = new Utils();
    }

    return this.instance;
  }
  numberWithCommas(x: any) {
    if (typeof x === "number") {
      // Ensure the number has at most two decimal places
      x = x.toFixed(2);
    } else {
      // Attempt to parse it to a number if it's a string
      const parsedNumber = parseFloat(x);
      if (!isNaN(parsedNumber)) {
        x = parsedNumber.toFixed(2);
      }
    }
    // Add commas to the number and return
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  capitalizeFirstChar(word: string) {
    if (!word) return ""; // Return empty string if input is empty or undefined
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
const utils = Utils.getInstance();
export default utils;
