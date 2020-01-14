import React, { Component } from 'react';
import BreadcrumbCustom from '../../components/breadcrumb';

class Weekly extends Component {
    render() {
        return (
            <div>
               <BreadcrumbCustom first={'报表'} second={"周报表"}/>
            </div>
        );
    }
}

export default Weekly;