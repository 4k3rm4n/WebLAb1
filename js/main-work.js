import { OfferModel } from '/WebLAb1/js/model/OfferModel.js';
import { OfferView } from '/WebLAb1/js/view/OfferView.js';
import { OfferController } from '/WebLAb1/js/controller/OfferController.js';

document.addEventListener('DOMContentLoaded', () => {
        const model = new OfferModel();
        const view = new OfferView();
        const controller = new OfferController(model, view);
});
