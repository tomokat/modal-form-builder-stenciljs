import { newSpecPage } from '@stencil/core/testing';
import { CustomModal } from './custom-modal';

describe('custom-modal', () => {
  it('renders correctly when open', async () => {
    const page = await newSpecPage({
      components: [CustomModal],
      html: `<custom-modal></custom-modal>`,
    });

    page.root.isOpen = true;
    page.root.referenceObject = {
      urgency: 'high',
      name: 'Tomo',
      creditCardNumber: '123456789',
      options: [
        { caption: 'ignore', value: 1, selected: true },
        { caption: 'callback', value: 2, selected: false },
        { caption: 'talk to manager', value: 3, selected: false }
      ]
    };
    page.root.fieldDefinitions = [
      { fieldName: null, type: 'filler', value: 'some random text' },
      { fieldName: 'urgency', type: 'button' },
      { fieldName: 'name', type: 'display' },
      { fieldName: 'options', type: 'radio' }
    ];
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('does not render when closed', async () => {
    const page = await newSpecPage({
      components: [CustomModal],
      html: `<custom-modal></custom-modal>`,
    });

    page.root.isOpen = false;
    await page.waitForChanges();

    expect(page.root).toBeNull();
  });
});
