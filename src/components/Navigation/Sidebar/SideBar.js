import React from 'react';
import { bool, func } from 'prop-types';

import Brand from './Brand/Brand';
import Menu from '../Menu/Menu';
import SideBarToggle from './SideBarToggle/SideBarToggle';
import SideBarWrapper from './SideBarWrapper';

const SideBar = (props) => {
  const { open, clicked } = props;

  const menuItemClicked = () => {
    clicked(true);
  };

  return (
    <SideBarWrapper open={open}>
      <Brand menuOpen={open} />
      <Menu open={open} clicked={menuItemClicked} />
      <SideBarToggle clicked={clicked} open={open} />
    </SideBarWrapper>
  );
};

SideBar.propTypes = {
  open: bool.isRequired,
  clicked: func.isRequired,
};

export default SideBar;
