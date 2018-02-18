import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'typing',
  template: `{{displayedChrs}}`
})
export class TypingComponent implements OnInit {

  static readonly MAX_TYPO_PROBABILITY: number = 80;
  static readonly TYPO_FIX_SPEED: number = 200;
  static readonly RANDOM_CHARACTERS: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  @Input() message: string;
  @Input() referenceSpeed: number = 60; // ms
  @Input() speedDeviation: number = 30; // ms
  @Input() typo: boolean = true;
  @Input() typoProbability: number = 5;
  @Output('onCompleted') onCompleted = new EventEmitter<void>();

  chrs: string[] = [];
  position: number = 0;
  displayedChrs: string = '';
  progress: boolean = false;
  
  ngOnInit() {
    this.show();
  }

  show(message?: string) {
    if (message)  {
      this.message = message;
    }
    if (!this.progress && this.message && this.message.trim().length > 0) {
      this.progress = true;
      this.initParameters();
      if (this.referenceSpeed == 0) {
        this.displayedChrs = this.message;
      } else {
        this.chrs = this.message.trim().split('');
        setTimeout(this.displayCharacter.bind(this), this.randomSpeed())
      }
    }
  }

  private initParameters() {
    this.chrs = [];
    this.position = 0;
    this.displayedChrs = '';
  }

  private displayCharacter() {
    if (this.doTypo()) {
      this.displayedChrs += this.getRandomCharacter();
      setTimeout(this.correctTypo.bind(this), TypingComponent.TYPO_FIX_SPEED);
    } else {
      this.displayedChrs += this.chrs[this.position++];
      if (this.position == this.chrs.length) {
        this.onCompleted.emit();
        this.progress = false;
      } else {
        setTimeout(this.displayCharacter.bind(this), this.randomSpeed());
      }
    }
  }

  private getRandomCharacter(): string {
    return TypingComponent.RANDOM_CHARACTERS
      .charAt(Math.floor(Math.random() * TypingComponent.RANDOM_CHARACTERS.length));
  }

  private correctTypo() {
    this.displayedChrs = this.displayedChrs.slice(0, -1);
    setTimeout(this.displayCharacter.bind(this), this.randomSpeed());
  }

  private randomSpeed(): number {
    const deviation = Math.floor(Math.random() * Math.floor(this.speedDeviation));
    const direction = Math.round(Math.random()) == 0 ? 1 : -1;
    return this.referenceSpeed + (deviation * direction);
  }

  private doTypo(): boolean {
    if (this.position > 2 && !!this.typo) {
      this.typoProbability = Math.max(Math.min(TypingComponent.MAX_TYPO_PROBABILITY,
        Math.round(this.typoProbability)), 0);
      return Math.floor(Math.random() * 100) < this.typoProbability;
    }
    return false;
  }
}
