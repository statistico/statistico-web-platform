import React, { useState } from "react";

import Aux from '../Aux/Aux';
import SidebarMenu from "../../components/Navigation/SidebarMenu/SidebarMenu";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import classes from './Layout.module.css';

const Layout = () => {
    const [sidebarMenuOpen, setSidebarMenuOpen] = useState(false);

    const sidebarToggleHandler = () => {
        setSidebarMenuOpen(!sidebarMenuOpen);
    }

    return (
        <Aux>
            <Toolbar open={sidebarMenuOpen} clicked={sidebarToggleHandler}/>
            <SidebarMenu open={sidebarMenuOpen} />
            <main className={classes.Layout}>
                <p>Statistico Web Platform</p>
            </main>
        </Aux>
    )
}

export default Layout;