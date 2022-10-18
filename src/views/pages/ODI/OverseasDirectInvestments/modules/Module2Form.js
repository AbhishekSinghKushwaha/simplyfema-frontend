import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,

  Label,

} from 'reactstrap'
import makeAnimated from 'react-select/animated'

import 'flatpickr/dist/themes/light.css'
import '../../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss'
import { Edit } from 'react-feather'


import {
  AvInput,
  AvGroup,
  AvFeedback,
  AvField
} from 'availity-reactstrap-validation'

class Module2Form extends React.Component {
  constructor(props){
    super(props)
  
  } 

  state = {
    basicPicker: new Date(),
    thisYear: new Date().getFullYear(),
    lastYear: new Date().getFullYear() - 1,
    lastToLastYear: new Date().getFullYear() - 2
  }

  render () {
    const animatedComponents = makeAnimated()
    console.log(this.props.capturedODIData)
    let { basicPicker } = this.state

    return (
      <Card>
        <CardHeader>
          <CardTitle>
            Financial particulars of the IP for the last 3 years
          </CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
              <Col sm='4'>
                <Label for='thisYear'>
                  
                  31-3-{this.state.thisYear}
                </Label>
              </Col>
              <Col sm='4'>
                <Label for='lastYear'>
                  
                  31-3-{this.state.lastYear}
                </Label>
              </Col>
              <Col sm='4'>
                <Label for='lastToLastYear'>
                  
                  31-3-{this.state.lastToLastYear}
                </Label>
              </Col>
              <Col sm='4'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='thisYearParticulars'
                    id='thisYearParticulars'
                    placeholder='Particulars (Actual Amt. in Rs.)'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='4'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='lastYearParticulars'
                    id='lastYearParticulars'
                    placeholder='Particulars (Actual Amt. in Rs.)'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='4'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='lastToLastYearParticulars'
                    id='lastToLastYearParticulars'
                    placeholder='Particulars (Actual Amt. in Rs.)'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='4'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='thisYearForeignExchangeEarnings'
                    id='thisYearForeignExchangeEarnings'
                    placeholder=' Foreign exchange earnings
                    (excluding equity exports to JV/WOS)
                    '
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='4'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='lastYearForeignExchangeEarnings'
                    id='lastYearForeignExchangeEarnings'
                    placeholder=' Foreign exchange earnings
                    (excluding equity exports to JV/WOS)
                    '
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='4'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='lastToLastYearForeignExchangeEarnings'
                    id='lastToLastYearForeignExchangeEarnings'
                    placeholder=' Foreign exchange earnings
                    (excluding equity exports to JV/WOS)
                    '
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='4'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='thisYearNetProfit'
                    id='thisYearNetProfit'
                    placeholder='Net profit
                    '
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='4'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='lastYearNetProfit'
                    id='lastYearNetProfit'
                    placeholder='Net profit
                    '
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='4'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='lastToLastYearNetProfit'
                    id='lastToLastYearNetProfit'
                    placeholder='Net profit
                    '
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='4'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='thisYearPaidUpCapital'
                    id='thisYearPaidUpCapital'
                    placeholder='Paid-up Capital
                    '
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='4'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='lastYearPaidUpCapital'
                    id='lastYearPaidUpCapital'
                    placeholder='Paid-up Capital
                    '
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='4'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='lastToLastYearPaidUpCapital'
                    id='lastToLastYearPaidUpCapital'
                    placeholder='Paid-up Capital
                    '
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='4'>
                <Label>Net Worth</Label>
              </Col>
              <Col sm='4'>
                <Label>Net Worth</Label>
              </Col>
              <Col sm='4'>
                <Label>Net Worth</Label>
              </Col>
              <Col sm='4'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='thisYearIndianParty'
                    id='thisYearIndianParty'
                    placeholder='Indian Party'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='4'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='thisYearGroupCompany'
                    id='thisYearGroupCompany'
                    placeholder='Group Company'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='4'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='lastYearIndianParty'
                    id='lastYearIndianParty'
                    placeholder='Indian Party'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='4'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='lastYearGroupCompany'
                    id='lastYearGroupCompany'
                    placeholder='Group Company'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='4'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='lastToLastYearIndianParty'
                    id='lastToLastYearIndianParty'
                    placeholder='Indian Party'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='4'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='lastToLastYearGroupCompany'
                    id='lastToLastYearGroupCompany'
                    placeholder='Group Company'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
            </Row>
          </Form>
        </CardBody>
  
      </Card>
    )
  }
}
export default Module2Form
