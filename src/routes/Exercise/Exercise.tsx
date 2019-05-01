/** @jsx jsx */
import React from 'react';
import { connect } from 'react-redux';
import { jsx, css } from '@emotion/core'
import { IExercise } from '../../services/api/exercise-api';
import { IWithExercisesState, getExercise } from '../../store/entities/exercises';
import { RouteComponentProps } from 'react-router';
import { Card } from 'antd';

const pageWrapper = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const content = css`
  display: flex;
  justify-content: center;
`;

const card = css`
  width: 100%;
  max-width: 1000px;
  padding: 10px;
  box-sizing: border-box;
`;

export interface IExerciseRouteParams {
  id: string;
}

interface IOwnProps extends RouteComponentProps<IExerciseRouteParams>{}

interface IStateProps {
  exercise: IExercise;
}

interface IDispatchProps {
  // onMount: () => void;
};

interface IProps extends IOwnProps, IStateProps, IDispatchProps {};

interface IState {
  initLoading: boolean;
  loading: boolean;
}

export class ExercisePage extends React.Component<IProps, IState> {
  render() {
    return (
      <div css={pageWrapper}>
        <h1>Exercise</h1>
        <div css={content}>
          {this.props.exercise && (
            <Card title={this.props.exercise.name} css={card}>
              <div dangerouslySetInnerHTML={{__html: this.props.exercise.description}} />
              <div><a target="_blank" href={`https://www.youtube.com/results?search_query=${this.props.exercise.name.split(' ').join('+')}`}>Find video on youtube</a></div>
            </Card>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IWithExercisesState, ownProps: IOwnProps): IStateProps => ({
  exercise: getExercise(state, ownProps.match.params.id)
});

export const Exercise = connect(mapStateToProps, null)(ExercisePage)
