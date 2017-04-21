import * as React from 'react';
import { connect } from 'react-redux';
import { Cells, Cell, CellHeader, CellBody, CellFooter, CellTitle, CellTips } from '../../../src/component/cells';

class PageCell extends React.Component<any, any> {

    public render(): JSX.Element {
        return (
            <Cells >
                <Cell >
                    <CellHeader>CellHeader </CellHeader>
                    <CellBody>CellBody</CellBody>
                    <CellFooter>CellFooter</CellFooter>
                </Cell>
                <Cell className="cell-access">
                    <CellTitle >CellTitle </CellTitle>
                    <CellHeader>CellHeader </CellHeader>
                    <CellBody >CellBody</CellBody>
                    <CellFooter>CellFooter</CellFooter>
                    <CellTips >CellTips</CellTips>
                </Cell>

            </Cells>
        )
    }
}

const mapStateToProps = (state: any) => ({

});

const mapDispatchToProps = (dispatch: any) => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(PageCell);