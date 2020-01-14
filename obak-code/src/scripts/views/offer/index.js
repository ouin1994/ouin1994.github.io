import React, { Component } from 'react';
import BreadcrumbCustom from '../../components/breadcrumb';
class Offer extends Component {
    render() {
        return (
            <div>
                <BreadcrumbCustom first={'工作单'} second={"报价单"}/>
            </div>
        );
    }
}

export default Offer;