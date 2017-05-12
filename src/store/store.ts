import { createStore, applyMiddleware } from 'redux';
import { Component, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Reducer } from './reducer';
import { Middleware } from './middleware';

@Injectable()
export class Store {
    private _store;

    constructor(private http: Http) {
        this._store = createStore(Reducer.reduce, applyMiddleware(new Middleware(http).call))
    }

    getState() {
        return this._store.getState();
    }

    subscribe(call) : any {
        return this._store.subscribe(call);
    }

    dispatch(payload){
        this._store.dispatch(payload);
    }
}