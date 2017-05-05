import * as React from 'react';
import * as classNames from 'classnames';
import PropTypes from 'prop-types';

import './picker.scss';
import { Overlay } from '../overlay';

export default function Picker(props: MUI.PickerProps) {
  const { show, prefix = 'mui-picker' } = props;
  const cls = classNames({

  });

  return show ? (
    <div>
      <Overlay />
      <div className={cls}>

      </div>
    </div>
  ) : null;
}
