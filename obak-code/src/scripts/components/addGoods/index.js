import { Modal, Button, Select, Input } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getList, changeIncidentals, changeFreight, changeVisible, changeOrderDetails, changeOrderList, changePrice } from '../../redux/actions';
const { Option } = Select;

@connect(
  state => {
    return {
      goodsList: state.getIn(["list", "goodsList"]),
      visible: state.getIn(["list", "visible"]),
      orderInfo: state.getIn(["order", "orderInfo"]),
      orderDetails: state.getIn(["order", "orderDetails"])
    }
  }
)
class GoodAdd extends Component {
  state = {
    loading: false,
    value: "请选择产品",
    num: 1,
    chooseGood: {},
  };

  handleOk = () => {
    this.props.dispatch(changeOrderDetails(this.state.chooseGood))
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
      this.props.dispatch(changeOrderList(this.props.orderDetails))
      this.props.dispatch(changeVisible(false))
      let totalPrice = this.state.chooseGood.name.num * this.state.chooseGood.price;
      let totalFreight = this.state.chooseGood.name.num * this.state.chooseGood.freight;
      let totalIncidentals = this.state.chooseGood.name.num * this.state.chooseGood.incidentals;
      this.props.dispatch(changePrice(totalPrice))
      this.props.dispatch(changeFreight(totalFreight))
      this.props.dispatch(changeIncidentals(totalIncidentals))
      this.setState({
        value: "请选择产品",
        num: 1
      })
    }, 1000);
  };

  handleCancel = () => {
    this.props.dispatch(changeVisible(false))
  };
  getValue = (val, option) => {

    this.setState({
      value: option.props.children
    })
    delete option.props.item["_id"]

    this.setState({
      chooseGood: option.props.item
    })
  }
  changeNum = (e) => {
    if (this.state.value !== "请选择产品") {
      this.setState({
        num: e.target.value
      })
      this.state.chooseGood.name.num = e.target.value * 1
    }

  }
  componentDidMount() {
    this.props.dispatch(getList({
      url: "/react/goodsList"
    }))
  }
  render() {
    const { loading } = this.state;
    const {
      goodsList,
      visible
    } = this.props
    return (
      <div>
        <Modal
          visible={visible}
          title="添加产品"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              取消
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              确定
            </Button>,
          ]}
        >
          <div>
            <div>
              <span style={{ width: "30%" }}>选择产品</span>
              <Select value={this.state.value} onChange={this.getValue} style={{ width: "60%", marginLeft: "10%" }}>
                {
                  goodsList.map((item, i) => {
                    return <Option item={item} key={item.key} value={item.key} >{item.name.title}</Option>
                  })
                }
              </Select>
            </div>
            <div style={{ marginTop: 20 }}>
              <span style={{ width: "30%" }}>选择数量</span>
              <Input value={this.state.num} onChange={this.changeNum} style={{ width: "60%", marginLeft: "10%" }} type="number" step="1" min="1" />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
export default GoodAdd;