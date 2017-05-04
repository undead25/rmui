import * as React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { List } from '../../../src/component';

class PageList extends React.Component<any, any> {
  public render(): JSX.Element {
    const Cell = List.Cell;
    return (
      <div>
        <div className="hd">
          <h1>List</h1>
          <p>列表</p>
        </div>
        <div className="bd">
          <List renderHeader={() => '基本'}>
            <Cell>标题</Cell>
            <Cell value="描述文字">标题</Cell>
          </List>
          <List renderHeader={() => '箭头'}>
            <Link to="/"><Cell arrow>标题</Cell></Link>
            <Cell arrow="up">箭头上</Cell>
            <Cell arrow="down">箭头下</Cell>
          </List>
          <List renderHeader={() => '图标'}>
            <Cell thumb={require('../../assets/paid.svg')} arrow>购物车</Cell>
            <Cell thumb={require('../../assets/info.svg')} arrow>信息</Cell>
          </List>
          <List renderHeader={() => '副标题'}>
            <Cell value="描述文字" arrow subtitle="副标题">标题</Cell>
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


export default connect(mapStateToProps, mapDispatchToProps)(PageList);
