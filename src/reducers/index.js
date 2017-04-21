/**
 * Created by nicholas on 4/20/17.
 */
import {combineReducers} from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;