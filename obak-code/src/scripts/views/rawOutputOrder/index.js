import React, { Component } from 'react';
import BreadcrumbCustom from '../../components/breadcrumb';
class RawOutputOrder extends Component {
    render() {
        return (
            <div>
                <BreadcrumbCustom first={'工作'} second={"原料出库单"}/>
            </div>
        );
    }
}

export default RawOutputOrder;