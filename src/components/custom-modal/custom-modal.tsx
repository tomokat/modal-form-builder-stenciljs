import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'custom-modal',
  styleUrl: 'custom-modal.css',
  shadow: true,
})
export class CustomModal {
  @Prop() isOpen: boolean;
  @Prop() referenceObject: any;
  @Prop() fieldDefinitions: any[];

  renderField(field) {
    const { fieldName, type, value } = field;
    const fieldValue = fieldName ? this.referenceObject[fieldName] : value;

    switch (type) {
      case 'filler':
        return <p>{value}</p>;
      case 'button':
        return <button>{fieldValue}</button>;
      case 'display':
        return <p>{fieldValue}</p>;
      case 'radio':
        return (
          <div>
            {fieldValue.map(option => (
              <label>
                <input type="radio" name={fieldName} value={option.value} checked={option.selected} />
                {option.caption}
              </label>
            ))}
          </div>
        );
      default:
        return null;
    }
  }

  render() {
    if (!this.isOpen) {
      return null;
    }

    return (
      <div class="modal">
        <div class="modal-content">
          <span class="close" onClick={() => this.isOpen = false}>&times;</span>
          {this.fieldDefinitions.map(field => this.renderField(field))}
          <div class="modal-footer">
            <button onClick={() => this.isOpen = false}>Close</button>
            <button>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}
