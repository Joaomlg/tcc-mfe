import { Root, createRoot } from "react-dom/client";
import App from "./App";

export default class AppWebComponent extends HTMLElement {
  root!: Root;
  container!: HTMLSpanElement;

  render() {
    if (!this.root) {
      this.root = createRoot(this.container);
    }

    this.root.render(<App />);
  }

  connectedCallback() {
    this.container = document.createElement("span");
    this.container.style.height = '100%';
    this.container.style.width = '100%';
    
    this.attachShadow({ mode: "open" }).appendChild(this.container);
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }
}

const tagName = "tcc-mfe-home";

if (!window.customElements.get(tagName)) {
  customElements.define(tagName, AppWebComponent);
}
