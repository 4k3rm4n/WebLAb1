export class OfferModel {
    constructor() {
      this.offers = this.loadOffers();
    }
  
    loadOffers() {
      const savedOffers = localStorage.getItem('offers');
      return savedOffers ? JSON.parse(savedOffers) : [];
    }
  
    saveOffers() {
      localStorage.setItem('offers', JSON.stringify(this.offers));
    }
  
    addOffer(title, description, username) {
      const newOffer = {
        id: Date.now(), 
        title,
        description,
        username,
        time: new Date().toLocaleString()
      };
      this.offers.push(newOffer);
      this.saveOffers();
      return newOffer;
    }
  
    getAllOffers() {
      return this.offers;
    }
  }
  