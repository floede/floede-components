import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'floede-input',
  styleUrl: 'floede-input.scss',
  shadow: true,
})
export class FloedeInput {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
