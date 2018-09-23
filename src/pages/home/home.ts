import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    private speechRecognition: SpeechRecognition
  ) {}

  feature() {
    // Check feature available
    this.speechRecognition
      .isRecognitionAvailable()
      .then((available: boolean) => alert(available));
  }

  startListening() {
    // Start the recognition process
    this.speechRecognition
      .startListening({})
      .subscribe(
        (matches: Array<string>) => alert(JSON.stringify(matches)),
        onerror => alert(JSON.stringify(onerror))
      );
  }
}
