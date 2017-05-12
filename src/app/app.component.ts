import { appRoutes } from './app.routing';
import { applyMiddleware } from 'redux';
import { WelcomComponent } from './cars/welcom.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '../store/store';
import { actions } from '../store/reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Store]
})
export class AppComponent implements OnInit, OnDestroy {
  private showMenu: boolean = false;
  private unSubscriber: any;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.unSubscriber = this.store.subscribe(() => {
      let questionsTypes = this.store.getState().questionsTypes;
      if (questionsTypes) {
        localStorage.setItem('questionsTypes', JSON.stringify(questionsTypes));
      }
      this.showMenu = true;
    })

    this.store.dispatch({
      type: actions.INIT_QUESTIONS
    })
  }

  ngOnDestroy() {
    this.unSubscriber();
  }
}
