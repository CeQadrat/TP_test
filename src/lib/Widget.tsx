import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App';

export default class Widget {
  options: { id?: string }; // TODO: use for configuration in future

  container: HTMLElement | null = null;

  constructor(options = {}) {
    this.options = options;
  }

  renderWidget(container: HTMLElement): void {
    this.container = container;

    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      container
    );
  }

  unmount(): void {
    if (this.container) {
      ReactDOM.unmountComponentAtNode(this.container);
    }
  }
}
