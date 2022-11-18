import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = [ "scrollAnchor" ]

  scrollToElement(event) {
    event.preventDefault();
    const element = this.scrollAnchorTarget;
    element.scrollIntoView({ behavior: "smooth" });
  }
}
