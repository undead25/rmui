import * as React from 'react';
import { Page, PageTips, Wrapper } from '../../../src/component/page';

class PageWrap extends React.Component<any, any> {

  public render(): JSX.Element {
    return (
      <Wrapper >
        
          <PageTips >PageTips</PageTips>
          <Page >Page</Page>

      </Wrapper >
    )
  }
}

export default PageWrap;