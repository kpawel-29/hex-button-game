import {Component, OnInit} from '@angular/core';

declare var ColorScheme;

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.less']
})
export class BoardComponent implements OnInit {

    public buttons: Button[] = [];
    public activeButton: Button = null;

    public time = '';
    private start;

    ngOnInit() {
        this.start = performance.now();
        this.createGame();
    }

    endGame() {
        const b = performance.now();
        const ms = b - this.start;

        const min = Math.floor((ms / 1000 / 60) << 0);
        const sec = Math.floor((ms / 1000) % 60);

        this.time = `${min}:${sec}`;
    }

    createGame() {
        this.buttons = this.shuffleArray(this.buttons);
        const scm = new ColorScheme;
        scm.from_hue(150)
            .scheme('triade')
            .distance(0.1)
            .add_complement(true)
            .variation('soft')
            .web_safe(false);

        const colors: string[] = scm.colors();


        colors.forEach((c, i) => {
            this.buttons.push({id: i, color: `#${c}`});
            this.buttons.push({id: i + 12, color: `#${c}`});
        });

        this.buttons = this.shuffleArray(this.buttons);
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    checkMatchedColors(button: Button): void {
        if (!this.activeButton) {
            this.activeButton = button;
            return;
        }
        if (button.id === this.activeButton.id) {
            this.activeButton = null;
            return;
        }

        if (button.color === this.activeButton.color) {
            this.buttons = this.buttons.filter(b => b.color !== button.color);
            this.activeButton = null;
        } else {
            this.activeButton = button;
        }
        if (!this.buttons.length) {
            this.endGame();
        }
    }
}

export interface Button {
    id: number;
    color: string;
}
