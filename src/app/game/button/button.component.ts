import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Button} from '../board/board.component';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {

    @Input() button: Button;
    @Input() selected = false;
    @Output() onSelect = new EventEmitter<Button>();

    constructor() {
    }

    ngOnInit() {
    }

    background() {
        return {
            'background-color': this.button.color
        };
    }

    selectButton(): void {
        this.onSelect.emit(this.button);
    }
}
