import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Checkbox, Row, Col, Input, Button } from "antd";
import Town from "./components/towns/town";
import Tier from "./components/tiers/tier-resourse";
import Resourse from "./components/resourses/resourse";
import { Fort } from "./components/towns/town";
import "./index.css";
import "antd/dist/antd.css";

class App extends Component {
  valueSelectTown = (valTown) => {
    this.setState({ town: valTown });
  };

  valueSelectRes = (valRes) => {
    this.setState({ res: valRes });
  };

  valueSelectTier = (valTier) => {
    this.setState({ tier: valTier });
  };

  valuePersent = () => {
    if (
      Fort.some(
        (element) =>
          JSON.stringify(element) ===
          JSON.stringify({ town: this.state.town, res: this.state.res })
      )
    ) {
      this.setState({ persent: 35 });
    } else {
      this.setState({ persent: 15 });
    }
  };

  state = {
    town: undefined,
    res: undefined,
    persent: 15,
    tier: undefined,
  };
  render() {
    const { town, persent, res, tier } = this.state;
    console.log(this.state);
    return (
      <div className="main-page">
        <Row style={{ border: "2px solid", padding: 10 }} gutter={5}>
          <Col xs={12} sm={12} md={6}>
            <Town selectTown={this.valueSelectTown} valueTown={town} />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Button
              block
              style={{
                backgroundColor: "#ffffff",
                color: "red",
                textAlign: "center",
              }}
              onClick={() => {
                this.valuePersent();
              }}>
              {"Посчитать % возврата " + persent}
            </Button>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Resourse selectRes={this.valueSelectRes} valueRes={res} />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Tier selectTier={this.valueSelectTier} valueTier={tier} />
          </Col>
        </Row>
        <Row>
          <Col span={4}>
            <Input
              className="form-control"
              style={{ margin: 30, width: "280px" }}
              type="text"
              placeholder="Вводим количество"
            />
          </Col>
          <Col span={5}>
            <Input
              className="form-control"
              style={{ margin: 30, width: "280px" }}
              type="text"
              placeholder="Результат подсчета готового ресурса"
              disabled
            />
          </Col>
          <Col span={2}>
            <Checkbox.Group style={{ width: "auto" }}>
              <Checkbox value="Х">Раскрыть дерево</Checkbox>
            </Checkbox.Group>
          </Col>
          <Col span={5}>
            <Input
              className="form-control"
              style={{ margin: 30, width: "280px" }}
              type="text"
              placeholder="результат подсчета обычного ресурса"
              disabled
            />
          </Col>
          <Col span={5}>
            <Input
              className="form-control"
              style={{ margin: 30, width: "300px" }}
              type="text"
              placeholder="результат после переработки % от городов"
              disabled
            />
          </Col>
        </Row>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
