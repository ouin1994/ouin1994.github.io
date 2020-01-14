import React, { Component } from 'react';
import BreadcrumbCustom from '../../components/breadcrumb';
class RawWarehouseOrder extends Component {
    render() {
        return (
            <div>
                <BreadcrumbCustom first={'工作单'} second={"原料入库单"}/>
            </div>
        );
    }
}

export default RawWarehouseOrder;