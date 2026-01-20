export class CodeGenerator {
  static CreateElement(
    tagName: string,
    className?: string,
    id?: string,
    textContent?: string
  ): HTMLElement {
    const element = document.createElement(tagName);
    if (className) {
      element.className = className;
    }
    if (id) {
      element.id = id;
    }
    if (textContent) {
      element.textContent = textContent;
    }
    return element;
  }

  static apendToBody(element: HTMLElement, to?: HTMLElement): void {
    if (!to) {
      document.body.appendChild(element);
    } else {
      to.appendChild(element);
      document.body.appendChild(to);
    }
  }
}
