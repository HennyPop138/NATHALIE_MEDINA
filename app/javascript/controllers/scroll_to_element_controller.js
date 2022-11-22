import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ["cardsAnchor", "aProposAnchor", "contactAnchor"]

  scrollCards(event) {
    event.preventDefault();
    const element = this.cardsAnchorTarget;
    element.scrollIntoView({ behavior: "smooth" });
  }

  scrollAPropos(event) {
    event.preventDefault();
    const element = this.aProposAnchorTarget;
    element.scrollIntoView({ behavior: "smooth" });
  }

  scrollContact(event) {
    event.preventDefault();
    const element = this.contactAnchorTarget;
    element.scrollIntoView({ behavior: "smooth" });
  }
}
