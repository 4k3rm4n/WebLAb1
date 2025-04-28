export class OfferView {
    constructor() {
      this.modalEl = document.getElementById("offerModal");
      this.modal = new bootstrap.Modal(this.modalEl);
  
      this.openBtn = document.getElementById("addOfferBtn");
      this.submitBtn = document.getElementById("submitOffer");
      this.titleInput = document.getElementById("offerTitle");
      this.descriptionInput = document.getElementById("offerDescription");
      this.offersContainer = document.getElementById("offersContainer");
    }
  
    bindEvents(onSubmit, getUsername) {
      this.openBtn.onclick = () => {
        const username = getUsername();
        if (!username) {
          alert("Щоб створити офер, увійдіть у свій акаунт!");
          return;
        }
        this.modal.show();
      };
  
      this.submitBtn.onclick = () => {
        const title = this.titleInput.value.trim();
        const description = this.descriptionInput.value.trim();
        if (title && description) {
          onSubmit(title, description);
          this.clearForm();
          this.modal.hide();
        } else {
          alert("Будь ласка, заповніть усі поля!");
        }
      };
    }
  
    clearForm() {
      this.titleInput.value = "";
      this.descriptionInput.value = "";
    }
  
    renderOffer(offer) {
        const div = document.createElement("div");
        div.className = "offer";

        div.innerHTML = `
        <h3 class="offer-title">${offer.title}</h3>
        <p class="offer-description">${offer.description}</p>
        <div class="offer-footer">
            <a href="#" class="respond-link">
            <button class="respond-btn">Відгукнутися</button>
            </a>
        </div>
        `;
  
      this.offersContainer.prepend(div);
    }
  
    renderOffers(offers) {
      this.offersContainer.innerHTML = "";
      [...offers].reverse().forEach(offer => this.renderOffer(offer));
    }
  }
  