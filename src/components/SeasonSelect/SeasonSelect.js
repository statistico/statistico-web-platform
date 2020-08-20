import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

import classes from './SeasonSelect.module.css';

const seasonSelect = (props) => {
  const { seasons, selectedSeason, toggleSeason } = props;

  const options = seasons.map((season) => {
    return {
      value: season.seasonIds,
      label: season.name,
    };
  });

  const onChangeInput = (value) => {
    const s = seasons.find((season) => season.name === value.label);
    toggleSeason(s);
  };

  const defaultValue = () => {
    return {
      value: selectedSeason.seasonIds,
      label: selectedSeason.name,
    };
  };

  return (
    <div className={classes.SeasonSelect}>
      <Select
        options={options}
        defaultValue={defaultValue()}
        onChange={onChangeInput}
      />
    </div>
  );
};

seasonSelect.propTypes = {
  seasons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      current: PropTypes.bool,
      seasonIds: PropTypes.arrayOf(PropTypes.number),
    })
  ).isRequired,
  selectedSeason: PropTypes.shape({
    name: PropTypes.string,
    current: PropTypes.bool,
    seasonIds: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  toggleSeason: PropTypes.func.isRequired,
};

export default seasonSelect;