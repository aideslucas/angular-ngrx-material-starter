import { createSelector } from '@ngrx/store';

import { selectExamples, ExamplesState } from '../../examples/examples.state';

import { BookState } from './books.model';
import { selectAll, selectEntities } from './books.reducer';

const getSelectedBookId = (state: BookState) => state.selectedBookId;

export const selectBooks = createSelector(
  selectExamples,
  (state: ExamplesState) => state.books
);

export const selectSelectedBookId = createSelector(
  selectBooks,
  getSelectedBookId
);

export const selectBooksEntities = createSelector(selectBooks, selectEntities);
export const selectAllBooks = createSelector(selectBooks, selectAll);
export const selectSelectedBook = createSelector(
  selectBooksEntities,
  selectSelectedBookId,
  (bookEntities, selectedBookId) => bookEntities[selectedBookId]
);
