import { newSpecPage } from '@stencil/core/testing';
import { FloedeButton } from '../floede-button';

describe('floede-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FloedeButton],
      html: `<floede-button></floede-button>`,
    });
    expect(page.root).toEqualHtml(`
      <floede-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </floede-button>
    `);
  });
});
