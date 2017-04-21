import * as React from 'react';
import * as classNames from 'classnames';
import Proptypes from 'prop-types';


export function Mask (props: MUI.MaskProps) {
    const {transparent, ...others} = props;
    const cls = classNames({
      mask: !transparent,
      'mask-transparent': transparent,
    });

    return(
      <div
        className={cls}
        { ...others }
      ></div>
    )
}

export default Mask;