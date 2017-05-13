import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '../../../store/store';
import { actions } from '../../../store/reducer';
import { TimerObservable } from "rxjs/observable/TimerObservable";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnDestroy {
  public cars = [];
  private unSubscribe: any;
  public showSpinner: boolean = false;
  public showError: boolean = false;

  constructor(private store: Store, private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log('Results in process!');
    let mainType = this.route.snapshot.params["mainType"];
    let questionsTypes = JSON.parse(localStorage.getItem('questionsTypes'));

    this.unSubscribe = this.store.subscribe(() => {
      let results = this.store.getState().results;
      if (results) {
        console.log('Results done!');
        this.cars = results.carSearchResult.list;
        this.showSpinner = false;

        if (this.cars.length === 0) {
          this.showError = true;
        }
      }
    })

    this.store.dispatch({
      type: actions.SEARCH_CARS,
      payload: {
        mainType: mainType,
        questionsType: questionsTypes[mainType - 1]
      }
    })

    this.showSpinner = true;
  }

  ngOnDestroy() {
    this.unSubscribe();
  }
}
