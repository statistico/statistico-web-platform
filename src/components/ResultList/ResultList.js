import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../Loader/Loader';
import ResultItem from '../ResultItem/ResultItem';
import useFetchesTeamResults from '../../hooks/useFetchesTeamResults';
import classes from './ResultList.module.css';

const ResultList = (props) => {
  const { seasonId, teamId } = props;

  const payload = {
    team: {
      id: teamId,
    },
    seasonIds: [seasonId],
    sort: 'date_asc',
  };

  const { results, loading } = useFetchesTeamResults(payload);

  return (
    <div className={classes.ResultList}>
      <Loader loading={loading}>
        <h3>Results</h3>
        {results.map((result) => {
          return <ResultItem result={result} key={result.id} />;
        })}
      </Loader>
    </div>
  );
};

ResultList.propTypes = {
  seasonId: PropTypes.number.isRequired,
  teamId: PropTypes.number.isRequired,
};

export default ResultList;