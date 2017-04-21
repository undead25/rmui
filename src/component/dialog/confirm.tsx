import * as React from 'react';
import * as classNames from 'classNames';
import PropTypes from 'prop-types';

export function Confirm (props: MUI.ConfirmProps ) {
    const {children, ...others} = props;
    return (
        <div {...others}>{children}</div>
    )
}

export default Confirm;