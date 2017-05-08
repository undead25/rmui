import * as React from 'react';
import { connect } from 'react-redux';

import { List, Picker } from '../../../src/component';
import { showDistrictAction, hideDistrictAction, districtConfirmAction } from './picker.redux';

class PagePicker extends React.Component<any, any> {
  private defaultV = '请选择';
  private items = [
    {label: '广东省', value: 'gd'},
    {label: '湖南省', value: 'hn'},
    {label: '湖北省', value: 'hb'},
    {label: '广西省', value: 'gx'},
    {label: '香港特别行政区', value: 'xg'},
    {label: '浙江省', value: 'zj'},
    {label: '河南省', value: 'hn2'},
    {label: '辽宁省', value: 'ln'}
  ];

  public render(): JSX.Element {
    const { showDistrict, isDistrictShown, districtSelected, onDistrictCancel, onDistrictConfirm } = this.props;

    const Cell = List.Cell;

    return (
      <div>
        <div className="hd">
          <h1>Picker</h1>
          <p>多列选择器</p>
        </div>
        <div className="bd">
          <List>
            <Cell arrow onClick={showDistrict} value={() => this.getValue()}>地区（单列）</Cell>
            <Picker
              show={isDistrictShown}
              items={this.items}
              onCancel={onDistrictCancel}
              onConfirm={onDistrictConfirm}
              selected={districtSelected}
            />
          </List>
        </div>
      </div>
    );
  }

  private getValue = () => {
    return this.props.districtSelected ? this.props.districtSelected.label : '请选择';
  }
}

const mapStateToProps = (state: any) => ({
  isDistrictShown: state.PagePicker.isDistrictShown,
  districtSelected: state.PagePicker.districtSelected
});

const mapDispatchToProps = (dispatch: any) => ({
  showDistrict: () => dispatch(showDistrictAction),
  onDistrictCancel: () => dispatch(hideDistrictAction),
  onDistrictConfirm: (value) => dispatch(districtConfirmAction(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(PagePicker);
