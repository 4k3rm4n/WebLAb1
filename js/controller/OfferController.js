export class OfferController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
  
      this.init();
    }
  
    init() {
      this.view.bindEvents(
        (title, description) => this.handleSaveOffer(title, description),
        () => this.getUsername()
      );
  
      const allOffers = this.model.getAllOffers();
      this.view.renderOffers(allOffers);
    }
  
    handleSaveOffer(title, description) {
      const username = this.getUsername();
      const newOffer = this.model.addOffer(title, description, username);
      this.view.renderOffer(newOffer);
    }
  
    getUsername() {
      const userData = localStorage.getItem('user');
      if (!userData) return null;
  
      try {
        const user = JSON.parse(userData);
        return user.username; // предполагается, что в user есть поле username
      } catch (error) {
        console.error('Помилка при розпарсуванні користувача з localStorage', error);
        return null;
      }
    }
  }
  