import { newSpecPage } from '@stencil/core/testing';
import { FloedeInput } from '../floede-input';

describe('floede-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FloedeInput],
      html: `<floede-input></floede-input>`,
    });
    expect(page.root).toEqualHtml(`
      <floede-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </floede-input>
    `);
  });
});
