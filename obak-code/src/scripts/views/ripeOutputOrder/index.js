import React, { Component } from 'react';
import BreadcrumbCustom from '../../components/breadcrumb';
import { Row, Col, Card } from 'antd';
import OrderTable from './ripeOrderTable';
class RipeOutputOrder extends Component {
    render() {
        return (
            <div>
               <BreadcrumbCustom first={'工作单'} second={"成品出库单"}/>
               <Row gutter={24}>
                   <Col span={24}>
                        <Card
                            title="成品出库单"
                            headStyle={{ fontWeight: 500, fontSize: 24 }}
                        >
                            <OrderTable {...this.props}></OrderTable>
                        </Card>
                   </Col>
               </Row>
            </div>
        );
    }
}

export default RipeOutputOrder;