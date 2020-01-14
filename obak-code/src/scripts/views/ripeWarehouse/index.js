import React, { Component } from 'react';
import BreadcrumbCustom from '../../components/breadcrumb';
class RipeWarehouse extends Component {
    render() {
        return (
            <div>
                <BreadcrumbCustom first={'工作单'} second={"成品入库"}/>
            </div>
        );
    }
}

export default RipeWarehouse;