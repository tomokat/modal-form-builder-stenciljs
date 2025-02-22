import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  @State() isModalOpen: boolean = false;

  claimObject = {
    urgency: 'high',
    name: 'Tomo',
    creditCardNumber: '123456789',
    options: [
      { caption: 'ignore', value: 1, selected: true },
      { caption: 'callback', value: 2, selected: false },
      { caption: 'talk to manager', value: 3, selected: false }
    ]
  };

  fieldDefinitions = [
    { fieldName: null, type: 'filler', value: 'some random text' },
    { fieldName: 'urgency', type: 'button' },
    { fieldName: 'name', type: 'display' },
    { fieldName: 'options', type: 'radio' }
  ];

  render() {
    return (
      <div class="app-home">
        <button onClick={() => this.isModalOpen = true}>Open Modal</button>
        <custom-modal
          isOpen={this.isModalOpen}
          referenceObject={this.claimObject}
          fieldDefinitions={this.fieldDefinitions}
        ></custom-modal>
      </div>
    );
  }
}
