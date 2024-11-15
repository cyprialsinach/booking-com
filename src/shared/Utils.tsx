export default class Utils {
  private static instance?: Utils;

  static getInstance() {
    if (!this.instance) {
      this.instance = new Utils();
    }
    return this.instance;
  }

  numberWithCommas(x: number) {
    return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  capitalizeFirstChar(word: string) {
    if (!word) return ""; // Return empty string if input is empty or undefined
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
