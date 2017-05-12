export const actions = {
    INIT_QUESTIONS: 'INIT_QUESTIONS',
    GET_QUESTIONS: 'GET_QUESTIONS',
    SET_QUESTIONS: 'SET_QUESTIONS',
    SEARCH_CARS: 'SEARCH_CARS',
    SET_RESULTS: 'SET_RESULTS'
}

const initState = {
    questionsTypes: []
};

export class Reducer {
    static reduce = (state = initState, action) => {
        switch (action.type) {
            case actions.INIT_QUESTIONS:
                return Object.assign({}, state, {questionsTypes: action.payload.questionsTypes});
            case actions.SET_QUESTIONS:
                return Object.assign({}, state, action.payload);
            case actions.SET_RESULTS:
                return Object.assign({}, state, action.payload);
            case actions.SEARCH_CARS:
                return Object.assign({}, state, {results: action.payload});
            default:
                return state;
        }
    }
}

