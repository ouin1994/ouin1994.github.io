import React, { Component } from 'react';
import BreadcrumbCustom from '../../components/breadcrumb';
class RipeWarehouseOrder extends Component {
    render() {
        return (
            <div>
                <BreadcrumbCustom first={'工作单'} second={"成品入库单"}/>
            </div>
        );
    }
}

export default RipeWarehouseOrder;