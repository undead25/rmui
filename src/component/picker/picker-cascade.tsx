import * as React from 'react';
import * as classNames from 'classnames';
import Picker from './picker';

export default class PickerCascade extends React.Component<MUI.PickerCascadeProps, any> {

  static defaultProps = {
    dataMap: { id: 'label', items: 'children' },
    selected: [1, 1, 1],
    show: false
  };

  private text: Array<string> = [];

  /**
   * PickerCascade 构造函数
   * @param {MUI.PickerCascadeProps} props - Props 属性
   */
  constructor(props: MUI.PickerCascadeProps) {
    super(props);
    const { data, dataMap } = props;
    const { parsedData } = this.parseData(data, dataMap.items);
    this.state = {
      data: parsedData,
      selected: []
    };
  }

  /**
   * 解析数据，将传入数据解析成多列可处理数据
   * @param {Array<any>} data 
   * @param {string} subKey 
   * @param {Array<any>} [selected=[]] 
   * @param {Array<any>} [group=[]] 
   * @param {Array<any>} [newselected=[]] 
   * @returns {{ parsedData: Array<any>, newselected: Array<any> }} 
   */
  // tslint:disable-next-line:max-line-length
  public parseData(data: Array<any>, subKey: string, selected: Array<any> = [], group: Array<any> = [], newselected: Array<any> = []): { parsedData: Array<any>, newselected: Array<any> } {
    let _selected: number = 0;

    if (Array.isArray(selected) && selected.length > 0) {
      let _selectedClone = selected.slice(0);
      _selected = _selectedClone.shift();
      selected = _selectedClone;
    }

    if (typeof data[_selected] === 'undefined') {
      _selected = 0;
    }

    newselected.push(_selected);

    let item = data[_selected];

    var _group = JSON.parse(JSON.stringify(data));
    _group.forEach(g => delete g[subKey]);
    group.push({ items: _group, mapKeys: { 'label': this.props.dataMap.id } });

    if (typeof item[subKey] !== 'undefined' && Array.isArray(item[subKey])) {
      return this.parseData(item[subKey], subKey, selected, group, newselected);
    } else {
      return { parsedData: group, newselected };
    }
  }

  /**
   * Column改变后更新列内容
   * @param {object} item - 改变的 item 内容
   * @param {number} itemIdx - 改变的 item 索引值
   * @param {number} columnIdx - 改变的列索引
   * @param {Array<any>} selected - 改变后选中的值
   * @param {Picker} picker - picker组件
   */
  // tslint:disable-next-line:no-unused-variable
  public updateColumn = (item: object, itemIdx: number, columnIdx: number, selected: Array<any>, picker: Picker) => {
    const { data, dataMap } = this.props;
    const { parsedData, newselected } = this.parseData(data, dataMap.items, selected);

    this.setState({
      data: parsedData,
      selected: newselected
    }, () => this.adjustSelectedValue(newselected));

    // update picker
    picker.setState({ selected: newselected });
  }

  /**
   * 根据selected索引调整选中值传给父组件
   * @param {Array<any>} selected 
   */
  public adjustSelectedValue(selected: Array<any>): void {
    let _text = [];
    
    this.state.data.forEach((group, _i) => {
      _text.push(group.items[selected[_i]][this.props.dataMap.id]);
    });
    
    this.text = _text;
  }

  /**
   * 点击确定按钮后，emit 选中数据给父组件
   */
  public handleConfirm = (): void => {
    if (this.props.onConfirm) this.props.onConfirm(this.text);
  }

  /**
   * Render() 渲染 DOM
   * @returns {JSX.Element}
   */
  public render(): JSX.Element {
    return (
      <Picker
        show={this.props.show}
        onColunmChange={this.updateColumn}
        onConfirm={this.handleConfirm}
        value={this.props.value}
        data={this.state.data}
        onCancel={this.props.onCancel}
      />
    );
  }
}
