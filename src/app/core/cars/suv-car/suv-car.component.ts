import { actions } from './../../../store/reducer';
import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Store } from '../../../store/store';

@Component({
  selector: 'app-suv-car',
  templateUrl: './suv-car.component.html',
  styleUrls: ['./suv-car.component.scss']
})
export class SuvCarComponent implements OnInit, OnDestroy {
  private questionsTypes;
  private questions;
  private unSubscriber

  @Output() onQuestionsLoaded: EventEmitter<any> = new EventEmitter();dddd

  constructor(private store: Store) {
  }

  ngOnInit() {
    console.log('SUV car!');
    this.getQuestions();

    this.unSubscriber = this.store.subscribe(() => {
      this.getQuestions();
    })
  }

  ngOnDestroy(){
    this.unSubscriber();
    localStorage.setItem('questionsTypes', JSON.stringify(this.questionsTypes));
  }

  getQuestions() {
    if (localStorage.getItem('questionsTypes')) {
      this.questionsTypes = JSON.parse(localStorage.getItem('questionsTypes'));
      this.questions = this.questionsTypes[2].list;
    }
  }
  
}
