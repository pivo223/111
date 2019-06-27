import React, { Component } from "react";
import { Col, Row, Input, Checkbox, Icon } from "antd";

export default class InputValue extends Component {
  funcSwitchTier = tier => {
    switch (tier) {
      case 8:
        return this.props.inputVal ? this.props.inputVal * 5 : "";
      case 7:
        return this.props.inputVal ? this.props.inputVal * 5 : "";
      case 6:
        return this.props.inputVal ? this.props.inputVal * 4 : "";
      case 5:
        return this.props.inputVal ? this.props.inputVal * 3 : "";
      case 4:
        return this.props.inputVal ? this.props.inputVal * 2 : "";
      case 3:
        return this.props.inputVal ? this.props.inputVal * 2 : "";
      case 2:
        return this.props.inputVal ? this.props.inputVal * 1 : "";
      default:
        break;
    }
  };

  render() {
    return (
      <Row
        style={{ border: "2px solid", padding: "10px", margin: 3 }}
        gutter={5}
      >
        <Col xs={10} sm={10} md={6}>
          <Input
            style={{
              backgroundColor: "#ffffff",
              color: "red",
              textAlign: "center"
            }}
            className="form-control"
            // style={{ margin: "auto", width: "auto" }}
            type="text"
            placeholder="Вводим кол-во"
            value={this.props.inputVal}
            onInput={e => {
              this.props.fv(e.target.value);
            }}
          />
        </Col>
        <Col xs={10} sm={4} md={3}>
          <Input
            style={{
              backgroundColor: "#ffffff",
              color: "red",
              textAlign: "center"
            }}
            className="form-control"
            // style={{ margin: "auto", width: "auto" }}
            type="text"
            placeholder="Выбирите Тир продукта"
            value={this.funcSwitchTier(this.props.tierValue)}
            disabled
          />
        </Col>
        <Col xs={10} sm={3} md={2}>
          <Checkbox
            defaultchecked={false}
            onChange={e => {
              this.props.oneMoreArr(e.target.checked);
            }}
          >
            <br />
            Раскрыть дерево
              </Checkbox>
        </Col>
        <Col xs={10} sm={4} md={3}>
          <Input
            style={{
              backgroundColor: "#ffffff",
              color: "red",
              textAlign: "center"
            }}
            className="form-control"
            // style={{ margin: "auto", width: "auto" }}
            type="text"
            placeholder="Рес нужного тира"
            value={this.props.inputVal}
            disabled
          />
        </Col>
        <Col xs={10} sm={4} md={3}>
          <Input
            suffix={<Icon type="user"></Icon>}
            style={{
              backgroundColor: "#ffffff",
              color: "red",
              textAlign: "center"
            }}
            className="form-control"
            // style={{ margin: "auto", width: "auto" }}
            type="text"
            placeholder="Возврат ресурсов от выбора города"
            value={
              this.props.persentValue && this.props.inputVal
                ? "Бонус от города = " + (this.props.persentValue / 100) * this.props.inputVal
                : "Бонус от города"
            }
            disabled
          />
        </Col>
      </Row>
    );
  }
}
