import * as React from 'react';
import { Cards, CardHeader,  CardBody, CardFooter} from '../../../src/component/cards';


class PageCard extends React.Component<any, any> {

  public render(): JSX.Element {
    return (
      <div>
        <Cards>
            <CardHeader>CardHeader</CardHeader>
            <CardBody>CardBody</CardBody>
            <CardFooter>CardFooter</CardFooter>
        </Cards>
        </div>
      
    )
  }
}


export default PageCard;