import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'rl-tag-input-item',
  template: `
    <span class="btn btn-primary btn-sm selected">
      {{text}}<span class="close-selected" (click)="removeTag()">&nbsp;x</span>
    </span>
  `,
  styles: [`
    :host .selected {
      margin-right: 0.2rem;
    }

    :host .close-selected {
      margin-left: 0.3rem;
    }
  `]
})
export class TagInputItemComponent {
  @Input() selected: boolean;
  @Input() text: string;
  @Input() index: number;
  @Output() tagRemoved: EventEmitter<number> = new EventEmitter<number>();
  @HostBinding('class.ng2-tag-input-item-selected') get isSelected() { return !!this.selected; }

  constructor() { }

  removeTag(): void {
    this.tagRemoved.emit(this.index);
  }
}
