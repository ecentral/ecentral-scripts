import React from 'react';
import AppLayout from './AppLayout';
import logo from '../assets/react-logo.svg';

/* eslint-disable  react/prefer-stateless-function */
export default class App extends React.Component {
    render () {
        return (
            <AppLayout>
                <p>
                    This stuff is running with React.
                </p>
                <p>
                    <img src={logo} height={100} alt="React Logo" />
                </p>
            </AppLayout>
        );
    }
}
