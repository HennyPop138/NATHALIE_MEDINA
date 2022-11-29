import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ["cardsAnchor", "aProposAnchor", "contactAnchor"]

  scrollCards(event) {
    event.preventDefault();
    const element = this.cardsAnchorTarget;
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  scrollAPropos(event) {
    event.preventDefault();
    const element = this.aProposAnchorTarget;
    element.scrollIntoView({ behavior: "smooth", block: "center"  });
  }

  scrollContact(event) {
    event.preventDefault();
    const element = this.contactAnchorTarget;
    element.scrollIntoView({ behavior: "smooth"});
  }
}
