import React, { Component } from 'react';
import BreadcrumbCustom from '../../components/breadcrumb';
class RawWarehouse extends Component {
    render() {
        return (
            <div>
                <BreadcrumbCustom first={'工作单'} second={"原料入库"}/>
            </div>
        );
    }
}

export default RawWarehouse;