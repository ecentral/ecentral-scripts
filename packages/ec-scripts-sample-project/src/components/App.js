import React from 'react';
import AppLayout from './AppLayout';

/* eslint-disable  react/prefer-stateless-function */
export default class App extends React.Component {
    render () {
        return (
            <AppLayout>
                <p>
                    This stuff is running w/ React.
                </p>
            </AppLayout>
        );
    }
}
