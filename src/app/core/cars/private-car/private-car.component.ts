import { actions } from './../../../store/reducer';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
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

  @Output() onQuestionsLoaded: EventEmitter<any> = new EventEmitter();

  constructor(private store: Store, private router: Router) {
  }

  ngOnInit() {
    console.log('Private car!');
    if (localStorage.getItem('questionsTypes')) {
      this.getQuestionsFromLocalStorage();
      this.onQuestionsLoaded.emit();
    } else {
      this.store.dispatch({
        type: actions.INIT_QUESTIONS
      })
    }

    this.unSubscriber = this.store.subscribe(() => {
      this.questionsTypes = this.store.getState().questionsTypes;
      localStorage.setItem('questionsTypes', JSON.stringify(this.questionsTypes));
      this.questions = this.questionsTypes[0].list;
      this.onQuestionsLoaded.emit();
    })
  }

  ngOnDestroy() {
    this.unSubscriber();
    localStorage.setItem('questionsTypes', JSON.stringify(this.questionsTypes));
  }

  getQuestionsFromLocalStorage() {
    this.questionsTypes = JSON.parse(localStorage.getItem('questionsTypes'));
    this.questions = this.questionsTypes[0].list;
  }

  resetSelection() {
    localStorage.clear();
    this.store.dispatch({
      type: actions.INIT_QUESTIONS
    })
  }
}
