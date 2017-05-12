import { Http, Response, } from '@angular/http';
import { actions } from './reducer'
import 'rxjs/Rx';

export class Middleware {

    constructor(private http: Http) {
        this.http = http;
    }

    call = store => next => action => {
        switch (action.type) {

            case actions.INIT_QUESTIONS:
                this.http.get('http://autologiaRest.orenwebtest.com/SearchService/Questions')
                    .map(res => res.json())
                    .subscribe(data => {
                        next({
                            type: action.type,
                            payload: {
                                questionsTypes: data.questionsTypes
                            }
                        })
                    })
            break;

            case actions.SEARCH_CARS:
                this.http.post('http://autologiaRest.orenwebtest.com/SearchService/Search', {
                    id: action.payload.mainType,
                    type: action.payload.questionsType
                })
                    .map(r => r.json())
                    .subscribe(data => {
                        next({
                            type: action.type,
                            payload: data
                        })
                    })
                break;

            default:
                return next({ action });
        }
    };
}


