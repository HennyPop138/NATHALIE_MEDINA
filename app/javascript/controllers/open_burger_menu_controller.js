import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="open-burger-menu"
export default class extends Controller {
  static targets = [ "burgerMenu" ]

  connect() {
    console.log("hello from open-burger-menu controller");
  }

  toggleMobileMenu() {
    this.burgerMenuTarget.classList.toggle('open');
  }

  myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
}
