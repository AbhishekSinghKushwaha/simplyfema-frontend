import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Form
} from 'reactstrap'
import Checkbox from '../../../../../components/Main/checkbox/CheckboxesVuexy'
import { Check } from 'react-feather'

class Module7Form extends React.Component {
  constructor (props) {
    super(props)
  }

  state = {
    isChecked: false,
    AnnexureOption1: false,
    AnnexureOption2: false,
    AnnexureOption3: false,
    AnnexureOption4: false,
    AnnexureOption5: false,
    AnnexureOption6: false,
    AnnexureOption7: false,
    AnnexureOption8: false
  }

  handleSwitchChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
    })
  }

  render () {
    return (
      <Card>
        <CardHeader>
          <CardTitle> Annexures</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
              <Col sm='2'>
                <dt>
                  <Checkbox
                    color='primary'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                        AnnexureOption1: checkedValue.target.checked
                      })

                      this.props.capturedDisInvestmentData.AnnexureOption1 =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='10'>
                <dd>
                  <p>Disinvestment Letter to AD Bank </p>
                </dd>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col sm='2'>
                <dt>
                  <Checkbox
                    color='primary'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                        AnnexureOption2: checkedValue.target.checked
                      })
                      this.props.capturedDisInvestmentData.AnnexureOption2 =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='10'>
                <dd>
                  <p>All Remittances [Equity/Loan/Guarantee] </p>
                </dd>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col sm='2'>
                <dt>
                  <Checkbox
                    color='primary'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                        AnnexureOption3: checkedValue.target.checked
                      })
                      this.props.capturedDisInvestmentData.AnnexureOption3 =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='10'>
                <dd>
                  <p>Declaration from the Company on</p>
                  <p>(a) Sale including W/off</p>
                  <p>(b) No Outstanding dues</p>
                  <p>(c) Indian party not under any investigation </p>
                </dd>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col sm='2'>
                <dt>
                  <Checkbox
                    color='primary'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                        AnnexureOption4: checkedValue.target.checked
                      })
                      this.props.capturedDisInvestmentData.AnnexureOption4 =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='10'>
                <dd>
                  <p>
                    Annual Account for XXXXXXXXXX for FY XXXX-XX until the
                    period of liquidation
                  </p>
                </dd>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col sm='2'>
                <dt>
                  <Checkbox
                    color='primary'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                        AnnexureOption5: checkedValue.target.checked
                      })
                      this.props.capturedDisInvestmentData.AnnexureOption5 =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='10'>
                <dd>
                  <p>Share Certificates Shareholding</p>
                </dd>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col sm='2'>
                <dt>
                  <Checkbox
                    color='primary'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                        AnnexureOption6: checkedValue.target.checked
                      })
                      this.props.capturedDisInvestmentData.AnnexureOption6 =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='10'>
                <dd>
                  <p>Pattern FIRC Copy - Disinvestment Proceeds APR Filings</p>
                </dd>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col sm='2'>
                <dt>
                  <Checkbox
                    color='primary'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                     onChange={checkedValue => {
                      this.setState({
                        AnnexureOption7: checkedValue.target.checked
                      })
                      this.props.capturedDisInvestmentData.AnnexureOption7 =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='10'>
                <dd>
                  <p>
                    Liquidation - Copy of Court Order Valuation Certificate -
                    Fair
                  </p>
                </dd>
              </Col>
            </Row>
            <hr></hr>{' '}
            <Row>
              <Col sm='2'>
                <dt>
                  <Checkbox
                    color='primary'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                        AnnexureOption8: checkedValue.target.checked
                      })
                      this.props.capturedDisInvestmentData.AnnexureOption8 =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='10'>
                <dd>
                  <p>Value before Liquidation</p>
                </dd>
              </Col>
            </Row>
            <hr></hr>
          </Form>
        </CardBody>
      </Card>
    )
  }
}
export default Module7Form
