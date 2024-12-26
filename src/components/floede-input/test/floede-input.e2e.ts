import { newE2EPage } from '@stencil/core/testing';

describe('floede-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<floede-input></floede-input>');

    const element = await page.find('floede-input');
    expect(element).toHaveClass('hydrated');
  });
});
