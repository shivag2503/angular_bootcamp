import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    console.log(parsedValue);
    if(!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters () {
    this.includeLetters = !this.includeLetters;    
  }

  onChangeUseNumbers () {
    this.includeNumbers = !this.includeNumbers;    
  }

  onChangeUseSymbols () {
    this.includeSymbols = !this.includeSymbols;    
  }

  onButtonClicked () {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+=-?/<>;:';

    let validChars = '';
    if (this.includeNumbers) {
      validChars += numbers;
    }

    if (this.includeSymbols) {
      validChars += symbols;
    }

    if (this.includeLetters) {
      validChars += letters;
    }

    let generatedPassword = '';

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index]; 
    }
    this.password = generatedPassword;
  }

}
