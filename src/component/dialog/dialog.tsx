import * as React from 'react';
import * as classNames from 'classNames';
import PropTypes from 'prop-types';

export function Dialog (props: MUI.DialogProps) {
     const { normalChildren, cancelChildren, otherChildren ,...others} = props;
     return (
       <div
        {...others }
       >
          { normalChildren }
          { cancelChildren }
          { otherChildren }
       </div>
     )
}

export default Dialog;