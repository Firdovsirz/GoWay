import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import RouteIcon from '@mui/icons-material/Route';
import SearchIcon from '@mui/icons-material/Search';
import styles from "./BottomNavigation.module.scss";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function BottomNavigation() {
    return (
        <div className={styles['bottom-nav-container']}>
            <div className={styles['bottom-nav']}>
                <ul>
                    <li>
                        <HomeIcon className={styles['bottom-nav-icon']}/>
                    </li>
                    <li>
                        <SearchIcon className={styles['bottom-nav-icon']}/>
                    </li>
                    <li>
                        <AddCircleOutlineIcon className={styles['bottom-nav-icon']}/>
                    </li>
                    <li>
                        <RouteIcon className={styles['bottom-nav-icon']}/>
                    </li>
                    <li>
                        <AccountCircleIcon className={styles['bottom-nav-icon']}/>
                    </li>
                </ul>
            </div>
        </div>
    )
}
