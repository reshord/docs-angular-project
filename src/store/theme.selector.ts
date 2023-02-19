import {createSelector, createFeatureSelector} from '@ngrx/store'
import { IState } from './theme.reducer'

export const state = createFeatureSelector<IState>('example')

export const themeChangerSelector = createSelector(state, (state) => state)