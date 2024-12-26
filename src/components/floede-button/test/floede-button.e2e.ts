import { newE2EPage } from '@stencil/core/testing';

describe('floede-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<floede-button></floede-button>');

    const element = await page.find('floede-button');
    expect(element).toHaveClass('hydrated');
  });
});
