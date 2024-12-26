import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'floede-button',
  styleUrl: 'floede-button.scss',
  shadow: true,
})
export class FloedeButton {
  render() {
    return (
      <Host>
        <button class="floede-c-button">
          <slot></slot>
        </button>
      </Host>
    );
  }
}
