import React, { lazy, Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import LazyLoader from '../LazyLoader/LazyLoader';

function Dashboard(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Dashboard