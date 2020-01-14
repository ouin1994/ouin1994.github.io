import React, { Component } from 'react';
import BreadcrumbCustom from '../../components/breadcrumb';
class Ripe extends Component {
    render() {
        return (
            <div>
                <BreadcrumbCustom first={'库存'} second={"成品库存"}/>
            </div>
        );
    }
}

export default Ripe;