import * as React from 'react';
import { connect } from 'react-redux';

import { List, Picker } from '../../../src/component';
import { showDistrictAction } from './picker.redux';

class PagePicker extends React.Component<any, any> {
  public render(): JSX.Element {
    const { showDistrict, isDistrictShown } = this.props;
    const Cell = List.Cell;
    return (
      <div>
        <div className="hd">
          <h1>Picker</h1>
          <p>多列选择器</p>
        </div>
        <div className="bd">
          <List>
            <Cell arrow value="请选择" onClick={showDistrict}>地区（单列）</Cell>
          </List>
        </div>
        <Picker show={isDistrictShown}></Picker>
      </div>
    );
  }

}

const mapStateToProps = (state: any) => ({
  isDistrictShown: state.PagePicker.isDistrictShown
});

const mapDispatchToProps = (dispatch: any) => ({
  showDistrict: () => dispatch(showDistrictAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(PagePicker);
