import React, { Component } from 'react';
import BreadcrumbCustom from '../../components/breadcrumb';
import { Row, Col, Card } from 'antd';
import EchartsArea from './echart/echartsArea';
import EchartsEffectScatter from './echart/echartsEffectScatter';

class Summary extends Component {
    render() {
        return (
            <div>
                <BreadcrumbCustom first={'报表'} second={"总报表"} />
                <Row gutter={24}>
                    <Col span={12}>
                        <Card>
                            <EchartsArea />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <EchartsEffectScatter></EchartsEffectScatter>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Summary;