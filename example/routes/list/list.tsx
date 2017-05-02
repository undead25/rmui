import * as React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { List } from '../../../src/component';

class PageList extends React.Component<any, any> {
  public render(): JSX.Element {
    const Item = List.Item;
    return (
      <div>
        <div className="hd">
          <h1>List</h1>
          <p>列表</p>
        </div>
        <div className="bd">
          <List renderHeader={() => '基本'}>
            <Item>标题</Item>
            <Item value="描述文字">标题</Item>
          </List>
          <List renderHeader={() => '箭头'}>
            <Link to="/"><Item arrow>标题</Item></Link>
            <Item arrow="up">箭头上</Item>
            <Item arrow="down">箭头下</Item>
          </List>
          <List renderHeader={() => '图标'}>
            <Item thumb={require('../../assets/paid.svg')} arrow>购物车</Item>
            <Item thumb={require('../../assets/info.svg')} arrow>信息</Item>
          </List>
          <List renderHeader={() => '副标题'}>
            <Item value="描述文字" arrow subtitle="副标题">标题</Item>
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
