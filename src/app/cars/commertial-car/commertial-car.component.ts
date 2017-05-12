import { actions } from './../../../store/reducer';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '../../../store/store';

@Component({
  selector: 'app-commertial-car',
  templateUrl: './commercial-car.component.html',
  styleUrls: ['./commertial-car.component.scss']
})
export class CommertialCarComponent implements OnInit, OnDestroy {
  private questionsTypes;
  private questions;
  private unSubscriber;

  constructor(private store: Store, private router: Router) {
  }

  ngOnInit() {
    console.log('Commercial car!');
    this.getQuestions();

    this.unSubscriber = this.store.subscribe(() => {
      this.getQuestions();
    })
  }

  ngOnDestroy(){
    this.unSubscriber()
    localStorage.setItem('questionsTypes', JSON.stringify(this.questionsTypes));
  }

  getQuestions() {
    if (localStorage.getItem('questionsTypes')) {
      this.questionsTypes = JSON.parse(localStorage.getItem('questionsTypes'));
      this.questions = this.questionsTypes[1].list;
    }
  }
}
