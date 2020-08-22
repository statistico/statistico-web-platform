import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartBar,
  faChartLine,
  faSortNumericUp,
  faTh,
} from '@fortawesome/free-solid-svg-icons';

import TeamStatsSelect from '../TeamStatsSelect/TeamStatsSelect';
import classes from './TeamStatsMenu.module.css';

const teamStatsMenu = ({ addStat }) => {
  return (
    <div className={classes.TeamStatsMenu}>
      <div className={classes.Icons}>
        <span>
          <FontAwesomeIcon icon={faSortNumericUp} size="2x" />
        </span>
        <span>
          <FontAwesomeIcon icon={faChartLine} size="2x" />
        </span>
        <span>
          <FontAwesomeIcon icon={faChartBar} size="2x" />
        </span>
        <span>
          <FontAwesomeIcon icon={faTh} size="2x" />
        </span>
      </div>
      <TeamStatsSelect addStat={addStat} />
    </div>
  );
};

teamStatsMenu.propTypes = {
  addStat: PropTypes.func.isRequired,
};

export default teamStatsMenu;
