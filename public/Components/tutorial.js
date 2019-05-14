import React from 'react';
import ReactDOM from 'react-dom';
import ReactHtmlTable from 'html-react-table'
export default class Tutorial extends React.Component {
    render() {
        return (
            <div>
                <h1>Tutorial</h1>
                <ReactHtmlTable
                    columns={[
                        { key: 'id', name: 'ID1' },
                        { key: 'title', name: 'Title' },
                        { key: 'count', name: 'Count' }]}
                    rows={[{ id: 0, title: 'row1', count: 20 }, { id: 1, title: 'row1', count: 40 }, { id: 2, title: 'row1', count: 60 }]} />
            </div>
        );
    }
}