import * as React from 'react';
import * as classNames from 'classnames';

import Picker from './picker';

export default class PickerCascade extends React.Component<MUI.PickerCascadeProps, any> {
  private group: Array<any> = [];
  private selected;
  private text = '';

  constructor(props) {
    super(props);
    const { items = [], selected, dataMap = { id: 'name', items: 'sub' } } = this.props;
    const { group, newselected } = this.parseData(items, dataMap.items, selected);
    this.group = group;
    this.selected = newselected;
  }

  public render() {
    const { items = [], show = false, dataMap = { id: 'name', items: 'sub' } } = this.props;
    return (
      <Picker
        show={show}
        items={this.group}
        selected={this.selected}
      />
    );
  }

  private parseData(data, subKey, selected, group:Array<any> = [], newSelected:Array<any> = []) {
    const { dataMap = { id: 'name', items: 'sub' } } = this.props;
    let _selected = 0;

    if (Array.isArray(selected) && selected.length > 0) {
      let _selectedClone = selected.slice(0);
      _selected = _selectedClone.shift();
      selected = _selectedClone;
    }

    if (typeof data[_selected] === 'undefined') {
      _selected = 0;
    }

    newSelected.push(_selected);

    let item = data[_selected];

    let _group = JSON.parse(JSON.stringify(data));
    _group.forEach(g => delete g[subKey]);
    group.push({ items: _group, mapKeys: { 'label': dataMap.id } });
    if (typeof item[subKey] !== 'undefined' && Array.isArray(item[subKey])) {
      return this.parseData(item[subKey], subKey, selected, group, newSelected);
    } else {
      return { group, newSelected };
    }
  }

  private handleChange() {

  }

  private updateGroup(item, i, groupIndex, selected, picker) {
    const { items, dataMap } = this.props;
    //validate if item exists

    const { group, newselected } = this.parseData(items, dataMap.items, selected);

    let text = '';
    try {
      group.forEach((group, _i) => {
        text += `${group['items'][selected[_i]][this.props.dataMap.id]} `;
      });
    } catch (err) {
      //wait
      text = this.text;
    }


    //console.log(groups)
    this.group = group;
    this.text = text;
    this.selected = newselected;

    //update picker
    // picker.setState({
    //   selected: newselected
    // });
  }

};
