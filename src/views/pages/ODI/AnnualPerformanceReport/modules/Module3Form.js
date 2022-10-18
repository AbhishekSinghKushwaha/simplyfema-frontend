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
  Button,
  Label,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap'
import makeAnimated from 'react-select/animated'
import InputMask from 'react-input-mask'

import {
  AvInput,
  AvGroup,
  AvFeedback,
  AvField
} from 'availity-reactstrap-validation'

import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/light.css'
import '../../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss'
import { Edit, Calendar } from 'react-feather'
import Select from 'react-select'

class Module3Form extends React.Component {
  state = {
    basicPicker: new Date(),
    thisYear: new Date().getFullYear(),
    lastYear: new Date().getFullYear() - 1,
    lastYearDividend: '',
    thisYearDividend: '',
    dividendThisYear: '',
    dividendSinceCommencement: ''
  }

  render () {
    const animatedComponents = makeAnimated()

    let {
      basicPicker,
      thisYear,
      lastYear,
      lastYearDividend,
      thisYearDividend,
      dividendThisYear,
      dividendSinceCommencement
    } = this.state

    return (
      <Card>
        <CardHeader>
          <CardTitle>
            Operational details of the JV/ WOS for the last two years (FCY -
            XXXXX)
          </CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
              <Col sm='6'>
                <Label for='nameVerticalIcons'>
                  Previous Year - {this.state.lastYear}
                </Label>
              </Col>
              <Col sm='6'>
                <Label for='nameVerticalIcons'>
                  Current Year - {this.state.thisYear}
                </Label>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='lastYearProfit'
                    id='lastYearProfit'
                    placeholder='Net Profit / (Loss)'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='thisYearProfit'
                    id='thisYearProfit'
                    placeholder='Net Profit / (Loss)'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <InputMask
                    name='name'
                    id='lastYearDividend'
                    placeholder='Dividend'
                    mask='99.99%'
                    className='form-control'
                    onChange={event => {
                      this.setState({
                        lastYearDividend: event.target.value
                      })
                      this.props.capturedAPRData.lastYearDividend = lastYearDividend
                    }}
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <InputMask
                    name='thisYearDividend'
                    mask='99.99%'
                    className='form-control'
                    id='nameVerticalIcons'
                    placeholder='Dividend'
                    onChange={event => {
                      this.setState({
                        thisYearDividend: event.target.value
                      })
                      this.props.capturedAPRData.thisYearDividend = thisYearDividend
                    }}
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='lastYearNetWorth'
                    id='lastYearNetWorth'
                    placeholder='Net worth'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='thisYearNetWorth'
                    id='thisYearNetWorth'
                    placeholder='Net worth'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
            </Row>
            <Row>
              <Col sm='12'>
                <CardHeader>
                  <CardTitle>
                    Repatriation from the JV / WOS (FCY - INR)
                  </CardTitle>
                </CardHeader>
              </Col>
              <Col sm='6'>
                <Label for='nameVerticalIcons'>
                  Current Year - {this.state.thisYear}
                </Label>
              </Col>
              <Col sm='6'>
                <Label for='nameVerticalIcons'>
                  Since commencement of Business
                </Label>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <InputMask
                    name='dividendThisYear'
                    id='dividendThisYear'
                    placeholder='Dividend'
                    mask='99.99%'
                    className='form-control'
                    onChange={event => {
                      this.setState({
                        dividendThisYear: event.target.value
                      })
                      this.props.capturedAPRData.dividendThisYear = dividendThisYear
                    }}
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <InputMask
                    name='dividendSinceCommencement'
                    mask='99.99%'
                    className='form-control'
                    id='dividendSinceCommencement'
                    placeholder='Dividend'
                    onChange={event => {
                      this.setState({
                        dividendSinceCommencement: event.target.value
                      })
                      this.props.capturedAPRData.dividendSinceCommencement = dividendSinceCommencement
                    }}
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='thisyearLoanRepayment'
                    id='thisyearLoanRepayment'
                    placeholder='Repayment of Loan'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='sinceCommencementLoanRepayment'
                    id='sinceCommencementLoanRepayment'
                    placeholder='Repayment of Loan'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='thisYearNonEquityExports'
                    id='thisYearNonEquityExports'
                    placeholder='Non-Equity Exports Realised (in INR) ( export of goods & services)'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='sinceCommencementNonEquityExports'
                    id='sinceCommencementNonEquityExports'
                    placeholder='Non-Equity Exports Realised (in INR) ( export of goods & services)'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='thisYearRoyalties'
                    id='thisYearRoyalties'
                    placeholder='Royalties'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='sinceCommencementRoyalties'
                    id='sinceCommencementRoyalties'
                    placeholder='Royalties'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='thisYearTechnicalKnowHowFees'
                    id='thisYearTechnicalKnowHowFees'
                    placeholder='Technical Know-how Fees'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='sinceCommencementTechnicalKnowHowFees'
                    id='sinceCommencementTechnicalKnowHowFees'
                    placeholder='Technical Know-how Fees'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='thisYearConsultancyFees'
                    id='thisYearConsultancyFees'
                    placeholder='Consultancy Fees'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='sinceCommencementConsultancyFees'
                    id='sinceCommencementConsultancyFees'
                    placeholder='Consultancy Fees'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='thisYearOthers'
                    id='thisYearOthers'
                    placeholder='Others (Please specify)'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='sinceCommencementOthers'
                    id='sinceCommencementOthers'
                    placeholder='Others (Please specify)'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='thisYearProfit'
                    id='thisYearProfit'
                    placeholder='Profit'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='sinceCommencementProfit'
                    id='sinceCommencementProfit'
                    placeholder='Profit'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='thisYearRetainedEarnings'
                    id='thisYearRetainedEarnings'
                    placeholder='Retained Earnings'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='sinceCommencementRetainedEarnings'
                    id='sinceCommencementRetainedEarnings'
                    placeholder='Retained Earnings'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='thisYearFDI'
                    id='thisYearFDI'
                    placeholder='FDI by JV/ WOS/ SDS into India'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='sinceCommencementFDI'
                    id='sinceCommencementFDI'
                    placeholder='FDI by JV/ WOS/ SDS into India'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='thisYearRefund'
                    id='thisYearRefund'
                    placeholder='Refund of excess share application money @ '
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='sinceCommencementRefund'
                    name='sinceCommencementRefund'
                    id='nameVerticalIcons'
                    placeholder='Refund of excess share application money @ '
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>{' '}
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='thisYearTransactionDetails'
                    id='thisYearTransactionDetails'
                    placeholder='Transaction Details'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>{' '}
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='sinceCommencementDetails'
                    id='sinceCommencementDetails'
                    placeholder='Transaction Details'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='12'>
                <AvGroup className='has-icon-left position-relative'>
                  <Button.Ripple
                    outline
                    color='primary'
                    type='reset'
                    className='mb-1'
                  >
                    Reset
                  </Button.Ripple>
                </AvGroup>
              </Col>
            </Row>
          </Form>
        </CardBody>
        <div>
          <hr></hr>
        </div>
      </Card>
    )
  }
}
export default Module3Form
