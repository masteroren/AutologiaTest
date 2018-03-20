import { actions } from './../../../store/reducer';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
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

  @Output() onQuestionsLoaded: EventEmitter<any> = new EventEmitter();

  constructor(private store: Store, private router: Router) {
  }

  ngOnInit() {
    console.log('Commercial car!');
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
      this.questions = this.questionsTypes[1].list;
      this.onQuestionsLoaded.emit();
    })
  }

  ngOnDestroy(){
    this.unSubscriber()
    localStorage.setItem('questionsTypes', JSON.stringify(this.questionsTypes));
  }

  getQuestionsFromLocalStorage() {
    this.questionsTypes = JSON.parse(localStorage.getItem('questionsTypes'));
    this.questions = this.questionsTypes[1].list;
  }

  resetSelection() {
    localStorage.clear();
    this.store.dispatch({
      type: actions.INIT_QUESTIONS
    })
  }
}
