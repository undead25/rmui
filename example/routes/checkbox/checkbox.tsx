import * as React from 'react';
import { connect } from 'react-redux';

import { List, Checkbox } from '../../../src/component';

class PageCheckbox extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div>
        <div className="hd">
          <h1>Checkbox</h1>
          <p>复选框</p>
        </div>
        <div className="bd">
          <List renderHeader={() => '基本样式'}>
            <Checkbox>选项一</Checkbox>
          </List>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PageCheckbox);
