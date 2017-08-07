import * as React from 'react';
import { connect } from 'react-redux';

import { List, Picker, PickerCascade } from '../../../src/component';
import {
  showDistrictAction,
  hideDistrictAction,
  hideCitiesAction,
  districtConfirmAction,
  citiesConfirmAction,
  districtConfirmAction2,
  showCitiesAction
} from './picker.redux';
const cities = require('./cities.json');

class PagePicker extends React.Component<any, any> {
  private defaultV = '请选择';
  private cities: Array<any>;
  private districtData = [
    {
      items: [
        { label: '广东省', value: 'gd' },
        { label: '湖南省', value: 'hn' },
        { label: '湖北省', value: 'hb' },
        { label: '广西省', value: 'gx' },
        { label: '香港特别行政区', value: 'xg', disabled: true },
        { label: '浙江省', value: 'zj' },
        { label: '河南省', value: 'hn2' },
        { label: '辽宁省', value: 'ln' }
      ]
    }
  ];

  public render(): JSX.Element {
    const {
      showDistrict,
      showCities,
      isDistrictShown,
      isCitiesShown,
      districtSelected,
      citiesSelected,
      defaultDistrict,
      onDistrictCancel,
      onCitiesCancel,
      onDistrictConfirm,
      onCitiesConfirm,
      onDistrictConfirm2
    } = this.props;

    const Cell = List.Cell;

    return (
      <div>
        <div className="hd">
          <h1>Picker</h1>
          <p>多列选择器</p>
        </div>
        <div className="bd">
          <List>
            {<Cell
              arrow={true}
              onClick={showDistrict}
              value={() => districtSelected ? districtSelected.label : '请选择'}
            >
              地区（单列）
            </Cell>}
            {<Picker
              show={isDistrictShown}
              data={this.districtData}
              onCancel={onDistrictCancel}
              onConfirm={onDistrictConfirm}
              value="河南省"
            />}
            <Cell arrow={true} onClick={showCities} value={() => citiesSelected ? citiesSelected : '请选择'}>城市级联</Cell>
            {<PickerCascade
              show={isCitiesShown}
              onCancel={onCitiesCancel}
              onConfirm={onCitiesConfirm}
              value="广东省, 广州市, 越秀区"
              data={cities}
            />}
          </List>
          {/*<List renderHeader={()=> '带默认值'}>
            <Cell
              arrow 
              onClick={showDistrict} value={() => defaultDistrict? defaultDistrict : '请选择'}
            >
              地区（单列）
            </Cell>
            <Picker
              show={isDistrictShown}
              data={this.districtData}
              onCancel={onDistrictCancel}
              onConfirm={onDistrictConfirm2}
              selected={defaultDistrict}
            />
          </List>*/}
        </div>
      </div >
    );
  }

}

const mapStateToProps = (state: any) => ({
  isDistrictShown: state.PagePicker.isDistrictShown,
  isCitiesShown: state.PagePicker.isCitiesShown,
  districtSelected: state.PagePicker.districtSelected,
  citiesSelected: state.PagePicker.citiesSelected,
  defaultDistrict: state.PagePicker.defaultDistrict
});

const mapDispatchToProps = (dispatch: any) => ({
  showDistrict: () => dispatch(showDistrictAction),
  showCities: () => dispatch(showCitiesAction),
  onDistrictCancel: () => dispatch(hideDistrictAction),
  onCitiesCancel: () => dispatch(hideCitiesAction),
  onDistrictConfirm: (value) => dispatch(districtConfirmAction(value)),
  onCitiesConfirm: (value) => dispatch(citiesConfirmAction(value)),
  onDistrictConfirm2: (value) => dispatch(districtConfirmAction2(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(PagePicker);
