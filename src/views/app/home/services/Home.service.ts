
export default class HomeService {
  private static classInstant: HomeService;

  static getInstance() {
    if (!this.classInstant) {
      this.classInstant = new HomeService();
    }
    return this.classInstant;
  }

    useGetHotelDestination() {
      
    }
    useSearchHotel() {
        
    }
}
