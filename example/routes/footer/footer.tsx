import * as React from 'react';
import { Footer } from '../../../src/component/footer';
import { Cards, CardBody, CardHeader, CardFooter} from '../../../src/component/cards';
import { connect } from 'react-redux';
import { creatAction } from './footer.redux';

class PageFooter extends React.Component<any, any> {

  public render(): JSX.Element {
    const { handleItemClick, datalist, handleURLClick} = this.props;
    return (
      <div>
        <Cards>
            <CardHeader>CardHeader</CardHeader>
            <CardBody>CardBody</CardBody>
            <CardFooter>CardFooter</CardFooter>
        </Cards>
      <Footer className=':before'>
        
        {
          datalist.map((foot,index) => {
            return <div className='footer-item ' key={index}>{foot.label}</div>
          })
        }
      </Footer>
        </div>
    )
  }
  componentWillMount() {
     this.props.handleItemClick(this.props.datalist)
  }

};



const mapStateToProps = (state: any) => ({
    datalist: state.PageFooter.datalist
})


const mapDispatchToProps = (dispatch: any) => ({
  handleItemClick: (datalist: any) => dispatch(creatAction(datalist)),
  // handleURLClick: (url: string) => dispatch(addurlAction(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(PageFooter);