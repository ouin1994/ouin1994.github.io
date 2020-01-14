import React, { Component } from 'react';
import BreadcrumbCustom from '../../components/breadcrumb';
class RawOutput extends Component {
    render() {
        return (
            <div>
                <BreadcrumbCustom first={'工作单'} second={"原料出库"} />
            </div>
        );
    }
}

export default RawOutput;