import { actions } from './../../../store/reducer';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '../../../store/store';

@Component({
  selector: 'app-private-car',
  templateUrl: './private-car.component.html',
  styleUrls: ['./private-car.component.scss']
})
export class PrivateCarComponent implements OnInit, OnDestroy {
  private questionsTypes;
  private questions;
  private unSubscriber;

  constructor(private store: Store, private router: Router) {
  }

  ngOnInit() {
    console.log('Private car!');
    this.getQuestions();

    this.unSubscriber = this.store.subscribe(() => {
      this.getQuestions();
    })
  }

  ngOnDestroy() {
    this.unSubscriber();
    localStorage.setItem('questionsTypes', JSON.stringify(this.questionsTypes));
  }

  getQuestions() {
    if (localStorage.getItem('questionsTypes')) {
      this.questionsTypes = JSON.parse(localStorage.getItem('questionsTypes'));
      this.questions = this.questionsTypes[0].list;
    }
  }
}
