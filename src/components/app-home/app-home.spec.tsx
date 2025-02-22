import { newSpecPage } from '@stencil/core/testing';
import { AppHome } from './app-home';
import { CustomModal } from '../custom-modal/custom-modal';

describe('app-home', () => {
  it('renders correctly', async () => {
    const page = await newSpecPage({
      components: [AppHome, CustomModal],
      html: `<app-home></app-home>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('opens modal on button click', async () => {
    const page = await newSpecPage({
      components: [AppHome, CustomModal],
      html: `<app-home></app-home>`,
    });

    const button = page.root.querySelector('button');
    button.click();
    await page.waitForChanges();

    const modal = page.root.querySelector('custom-modal');
    expect(modal.isOpen).toBe(true);
  });
});
