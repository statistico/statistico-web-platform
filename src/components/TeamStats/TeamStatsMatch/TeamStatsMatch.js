import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux/Aux';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import ResultList from '../../ResultList/ResultList';
import Wrapper from '../../Wrapper/Wrapper';
import classes from './TeamStatsMatch.module.css';

const teamStatsMatch = (props) => {
  const { seasonIds, teamId } = props;

  return (
    <Aux>
      <Wrapper styles={classes.ResultList}>
        <ErrorBoundary>
          <ResultList teamId={teamId} seasonIds={seasonIds} />
        </ErrorBoundary>
      </Wrapper>
    </Aux>
  );
};

teamStatsMatch.propTypes = {
  seasonIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  teamId: PropTypes.number.isRequired,
};

export default teamStatsMatch;
