/** @jsx jsx */
import React from 'react';
import { MapDispatchToProps, connect } from 'react-redux';
import { jsx, css } from '@emotion/core'
import { IExercise } from '../../services/api/exercise-api';
import { IWithExercisesState, getExercisesIds, getExercise } from '../../store/entities/exercises';
import * as exercisesActions from '../../store/entities/exercises/actions';
import * as exerciseCategoriesActions from '../../store/entities/exercise-categories/actions';
import { ExercisesList } from '../../components/ExercisesList';
import { ExercisesFilters } from '../../containers/ExercisesFilters';
import { withRouter, RouteComponentProps } from 'react-router';
import { IWithExerciseCategoriesState, getExerciseCategoriesIds, getExerciseCategory, getExerciseCategories } from '../../store/entities/exercise-categories';
import { IExerciseCategory } from '../../services/api/exercise-category-api';
import { IKeyMap } from '../../interfaces';

interface IOwnProps extends RouteComponentProps<{}> {}

interface IStateProps {
  exercises: IExercise[];
  categories: IKeyMap<IExerciseCategory>;
}

interface IDispatchProps {
  onMount: () => void;
};

interface IState {
  initLoading: boolean;
  loading: boolean;
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

const pageWrapper = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export class ExercisesPage extends React.Component<IProps, IState> {
  async componentDidMount() {
    if (this.props.exercises.length === 0) {
      this.props.onMount();
    }
  }

  handleListItemClick = (id: number) => {
    this.props.history.push(`/exercise/${id}`)
  }

  render() {
    return (
      <div css={pageWrapper}>
        <h1>Exercises</h1>
        <ExercisesFilters />
        <ExercisesList exercises={this.props.exercises} categories={this.props.categories} onItemClick={this.handleListItemClick}/>
      </div>
    );
  }
}

const mapStateToProps = (state: IWithExercisesState & IWithExerciseCategoriesState): IStateProps => ({
  exercises: getExercisesIds(state).map(id => getExercise(state, String(id))),
  categories: getExerciseCategories(state)
});

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, {}> = (dispatch) => ({
  onMount: () => {
    dispatch({type: exercisesActions.FETCH_DATA});
    dispatch({type: exerciseCategoriesActions.FETCH_DATA});
  }
});


export const Exercises = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ExercisesPage)
)
