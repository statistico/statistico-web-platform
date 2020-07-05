import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import SidebarMenu from '../../components/Navigation/SidebarMenu/SidebarMenu';
import TeamStats from '../../components/TeamStats/TeamStats';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import useTogglesMenu from '../../hooks/useTogglesMenu';
import classes from './Layout.module.css';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

const Layout = () => {
  const { menuOpen, menuToggleHandler } = useTogglesMenu(false);

  return (
    <Aux>
      <Toolbar open={menuOpen} clicked={menuToggleHandler} />
      {menuOpen ? <SidebarMenu /> : null}
      <main className={classes.Layout}>
        <ErrorBoundary>
          <TeamStats />
        </ErrorBoundary>
      </main>
    </Aux>
  );
};

export default Layout;