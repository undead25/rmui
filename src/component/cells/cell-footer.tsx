import * as React from 'react';
import * as classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import './cells.scss'

export function CellFooter(props: MUI.CellsProps) {
    const { children, cellFooterText, className = '', linkUrl, ...others } = props;

    const cls = classNames({
        'cell-ft': true,
        [className as string]: className,
    });

    const footerCls = classNames({
        "cell-right-txt": true,
        'text-gray': !className,
        [className as string]: className,
    });

    let footText;
    if (cellFooterText) {
        if (linkUrl) {
            footText = (
                <Link className={footerCls} to={linkUrl}>{cellFooterText}</Link>
            );
        } else {
            footText = (
                <span className={footerCls}>{cellFooterText}</span>
            );
        }
    } else {
        footText = { children }
    }

    return (
        <div
            className={cls}
            {...others}
        >
            { children }
      </div>
    )

}

export default CellFooter;