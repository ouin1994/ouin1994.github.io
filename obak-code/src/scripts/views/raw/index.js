import React, { Component } from 'react';
import BreadcrumbCustom from '../../components/breadcrumb';

class Raw extends Component {
    render() {
        return (
            <div>
               <BreadcrumbCustom first={'库存'} second={"原料库存记录"}/>
            </div>
        );
    }
}

export default Raw;