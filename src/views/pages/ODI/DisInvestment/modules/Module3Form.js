import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label
} from 'reactstrap'
import makeAnimated from 'react-select/animated'
import Select from 'react-select'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'
import '../../../../../assets/scss/plugins/forms/switch/react-toggle.scss'
import 'flatpickr/dist/themes/light.css'
import '../../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss'
import { Edit, Calendar, PlusSquare, MinusSquare } from 'react-feather'
import Flatpickr from 'react-flatpickr'

import { AvInput, AvGroup, AvFeedback } from 'availity-reactstrap-validation'

const categoryTypeOptions = [
  {
    value: 'JV SDS',
    label: 'JV SDS'
  },
  {
    value: 'WO SDS',
    label: 'WO SDS'
  }
]

const investmentMethodOptions = [
  {
    value: 'SPV/ Holding Company',
    label: 'SPV/ Holding Company'
  },
  {
    value: 'Operating',
    label: 'Operating'
  },
  {
    value: 'Operating Cum SPV',
    label: 'Operating Cum SPV'
  }
]

class Module3Form extends React.Component {
  constructor (props) {
    super(props)
  }

  state = {
    isChecked: false,
    amountRepatriatedOnDisinvestment: false,
    amountRepatriatedSinceReportingOnDisinvestment: false,
    remittanceOrTransactionDate: new Date(),
    repatriatedDate: new Date(),
    amountRepatriatedArray: [
      {
        checked: false
      }
    ],
    remitanceOrTransactionDetailsArray: [
      {
        checked: false
      }
    ]
  }

  handleSwitchChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
    })
  }

  updateAmountRepatriated = (e, amountRepatriatedId) => {
    const amountRepatriatedArray = [
      ...this.state.amountRepatriatedArray
    ]
    amountRepatriatedArray[amountRepatriatedId].value =
      e.target.value
    this.setState({
      amountRepatriatedArray
    })
  }

  onCheckedAmountRepatriated = amountRepatriatedId => {
    const amountRepatriatedArray = [
      ...this.state.amountRepatriatedArray
    ]
    amountRepatriatedArray[
      amountRepatriatedId
    ].checked = !amountRepatriatedArray[amountRepatriatedId]
      .checked
    this.setState({
      amountRepatriatedArray
    })
  }

  addAmountRepatriatedRow = () => {
    const amountRepatriatedArray = [
      ...this.state.amountRepatriatedArray,
      {
        value: '',
        checked: true
      }
    ]
    this.setState({
      amountRepatriatedArray
    })
  }

  deleteAmountRepatriatedRows = amountRepatriatedId => {
    if (this.state.amountRepatriatedArray.length > 1) {
      this.state.amountRepatriatedArray.splice(
        amountRepatriatedId,
        1
      )
      this.setState({
        // amountRepatriatedArray: this.state.amountRepatriatedArray.filter(e => !e.checked).slice(-1)
        amountRepatriatedArray: this.state.amountRepatriatedArray.filter(
          x => x !== amountRepatriatedId
        )
      })
    }
  }

  updateRemitanceOrTransactionValue = (e, remitanceOrTransactionId) => {
    const remitanceOrTransactionDetailsArray = [
      ...this.state.remitanceOrTransactionDetailsArray
    ]
    remitanceOrTransactionDetailsArray[remitanceOrTransactionId].value =
      e.target.value
    this.setState({
      remitanceOrTransactionDetailsArray
    })
  }

  onCheckedRemitanceOrTransaction = remitanceOrTransactionId => {
    const remitanceOrTransactionDetailsArray = [
      ...this.state.remitanceOrTransactionDetailsArray
    ]
    remitanceOrTransactionDetailsArray[
      remitanceOrTransactionId
    ].checked = !remitanceOrTransactionDetailsArray[remitanceOrTransactionId]
      .checked
    this.setState({
      remitanceOrTransactionDetailsArray
    })
  }

  addRemitanceOrTransactionRow = () => {
    const remitanceOrTransactionDetailsArray = [
      ...this.state.remitanceOrTransactionDetailsArray,
      {
        value: '',
        checked: true
      }
    ]
    this.setState({
      remitanceOrTransactionDetailsArray
    })
  }

  deleteRemitanceOrTransactionRows = remitanceOrTransactionId => {
    if (this.state.remitanceOrTransactionDetailsArray.length > 1) {
      this.state.remitanceOrTransactionDetailsArray.splice(
        remitanceOrTransactionId,
        1
      )
      this.setState({
        // remitanceOrTransactionDetailsArray: this.state.remitanceOrTransactionDetailsArray.filter(e => !e.checked).slice(-1)
        remitanceOrTransactionDetailsArray: this.state.remitanceOrTransactionDetailsArray.filter(
          x => x !== remitanceOrTransactionId
        )
      })
    }
  }

  render () {
    let { remittanceOrTransactionDate, repatriatedDate } = this.state
    return (
      <Card>
        <CardHeader>
          <CardTitle> Overseas Direct Investment Details </CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
              <Col sm='12' md='12'>
                <Label for='summaryODIAmount'>
                  Summary of the Overseas Direct Investment(Cumulative amount)
                </Label>
              </Col>
              <Col sm='3'>
                {/* <Label>Equity</Label> */}
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='equitySummaryODI'
                    id='equitySummaryODI'
                    placeholder='Equity Amount'
                  />
                  <AvFeedback>Please enter Equity Amount </AvFeedback>
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='3'>
                {/* <Label>Loan</Label> */}
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='loanSummaryODI'
                    id='loanSummaryODI'
                    placeholder='Loan Amount'
                  />
                  <AvFeedback>Please enter Loan Amount </AvFeedback>
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='3'>
                {/* <Label>Guarantees Issued</Label> */}
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='GuaranteesIssuedSummaryODI'
                    id='GuaranteesIssuedSummaryODI'
                    placeholder='Guarantees Issued Amount'
                  />
                  <AvFeedback>Please enter Guarantees Issued Amount</AvFeedback>
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='3'>
                {/* <Label>Guarantees Invoked</Label> */}
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='GuaranteesInvokedSummaryODI'
                    id='GuaranteesInvokedSummaryODI'
                    placeholder='Guarantees Invoked Amount'
                  />
                  <AvFeedback>
                    Please enter Guarantees Invoked Amount
                  </AvFeedback>
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='12'>
                <Label for='datewiseRemittancesOrTransactionDetails'>
                  Date wise details of remittances / transaction(attach separate
                  sheet if necessary)
                </Label>
              </Col>
              {this.state.remitanceOrTransactionDetailsArray.map(
                (
                  remitanceOrTransactionDetailField,
                  remitanceOrTransactionId
                ) => {
                  return (
                    <Row
                      style={{ width: '100%', 'margin-left': '0px' }}
                      key={remitanceOrTransactionId}
                      value={remitanceOrTransactionDetailField.value}
                      checked={remitanceOrTransactionDetailField.checked}
                      onChange={e =>
                        this.updateRemitanceOrTransactionValue(
                          e,
                          remitanceOrTransactionId
                        )
                      }
                      onChecked={() =>
                        this.onCheckedRemitanceOrTransaction(
                          remitanceOrTransactionId
                        )
                      }
                    >
                      <Col sm='3'>
                        <Label for='disInvestmentDate'>
                          Date of Remittance/ Transaction
                        </Label>
                        <AvGroup className='has-icon-left position-relative'>
                          <Flatpickr
                            className='form-control'
                            value={remittanceOrTransactionDate}
                            onChange={enteredDate => {
                              this.setState({
                                remittanceOrTransactionDate: enteredDate
                              })

                              this.props.capturedDisInvestmentData.remittanceOrTransactionDate = new Date(
                                this.state.remittanceOrTransactionDate
                              ).toDateString()
                            }}
                          />
                          <div className='form-control-position'>
                            <Calendar size={15} />
                          </div>
                        </AvGroup>
                      </Col>
                      <Col sm='3'>
                        <Label for='investmentMethodOptions'>
                          Method of Investment
                        </Label>
                        <AvGroup className='has-icon-left position-relative'>
                          <Select
                            className='React'
                            classNamePrefix='select'
                            defaultValue={investmentMethodOptions[1]}
                            name='investmentMethodOptions'
                            options={categoryTypeOptions}
                            isClearable={true}
                            onChange={selectedMethodTypeOption => {
                              this.setState({ selectedMethodTypeOption })
                              this.props.capturedDisInvestmentData.selectedMethodTypeOption =
                                selectedMethodTypeOption.label
                            }}
                          />
                        </AvGroup>
                      </Col>
                      <Col sm='3'>
                        <Label for='categoryType'>
                          {' '}
                          Category of Investment{' '}
                        </Label>
                        <AvGroup className='has-icon-left position-relative'>
                          <Select
                            className='React'
                            classNamePrefix='select'
                            defaultValue={categoryTypeOptions[1]}
                            name='categoryTypeOptions'
                            options={categoryTypeOptions}
                            isClearable={true}
                            onChange={selectedCategoryTypeOption => {
                              this.setState({ selectedCategoryTypeOption })
                              this.props.capturedDisInvestmentData.selectedCategoryTypeOption =
                                selectedCategoryTypeOption.label
                            }}
                          />
                        </AvGroup>
                      </Col>
                      <Col sm='3'>
                        <Label>Amount</Label>
                        <AvGroup className='has-icon-left position-relative'>
                          <AvInput
                            type='text'
                            name='remittanceOrTransactionAmount'
                            id='remittanceOrTransactionAmount'
                            placeholder='Amount'
                          />
                          <AvFeedback>Please enter Amount </AvFeedback>
                          <div className='form-control-position'>
                            <Edit size={15} />
                          </div>
                        </AvGroup>
                      </Col>
                    </Row>
                  )
                }
              )}
              <Col sm='12'>
                <div
                  onClick={this.deleteRemitanceOrTransactionRows}
                  className='fonticon-container'
                  style={{ float: 'right', width: '40px', color: 'primary' }}
                >
                  <div className='fonticon-wrap'>
                    <MinusSquare size={30} className='fonticon-wrap' />
                  </div>
                </div>
                <div
                  onClick={this.addRemitanceOrTransactionRow}
                  className='fonticon-container'
                  style={{ float: 'right', width: '40px', color: 'primary' }}
                >
                  <div className=' fonticon-wrap'>
                    <PlusSquare size={30} className='fonticon-wrap' />
                  </div>
                </div>
              </Col>
              <Col sm='12'>
                <Label for='amountRepatriatedOnDisinvestment'>
                  Amount Repatriated on disinvestment(attach separate sheet if
                  necessary)
                </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <label className='react-toggle-wrapper'>
                    <Toggle
                      checked={this.state.amountRepatriatedOnDisinvestment}
                      onChange={checkedValue => {
                        this.setState({
                          amountRepatriatedOnDisinvestment:
                            checkedValue.target.checked
                        })

                        this.props.capturedDisInvestmentData.amountRepatriatedOnDisinvestment =
                          checkedValue.target.checked
                      }}
                      name='controlledSwitch'
                      value='yes'
                    />
                    <Button.Ripple color='primary' size='sm'>
                      {this.state.amountRepatriatedOnDisinvestment
                        ? 'Yes'
                        : 'No'}
                    </Button.Ripple>
                  </label>
                </AvGroup>
              </Col>
              {this.state.amountRepatriatedArray.map(
                (
                  amountRepatriatedField,
                  amountRepatriatedId
                ) => {
                  return (
                    <Row
                      style={{ width: '100%', 'margin-left': '0px' }}
                      key={amountRepatriatedId}
                      value={amountRepatriatedField.value}
                      checked={amountRepatriatedField.checked}
                      onChange={e =>
                        this.updateAmountRepatriated(
                          e,
                          amountRepatriatedId
                        )
                      }
                      onChecked={() =>
                        this.onCheckedAmountRepatriated(
                          amountRepatriatedId
                        )
                      }
                    >
                      <Col
                        sm='3'
                        style={
                          this.state.amountRepatriatedOnDisinvestment
                            ? {}
                            : { display: 'none' }
                        }
                      >
                        <Label for='repatriationDate'>
                          Date of Repatriation
                        </Label>
                        <AvGroup className='has-icon-left position-relative'>
                          <Flatpickr
                            className='form-control'
                            value={repatriatedDate}
                            onChange={enteredDate => {
                              this.setState({
                                repatriatedDate: enteredDate
                              })

                              this.props.capturedDisInvestmentData.repatriatedDate = new Date(
                                this.state.repatriatedDate
                              ).toDateString()
                            }}
                          />
                          <div className='form-control-position'>
                            <Calendar size={15} />
                          </div>
                        </AvGroup>
                      </Col>
                      <Col
                        sm='3'
                        style={
                          this.state.amountRepatriatedOnDisinvestment
                            ? {}
                            : { display: 'none' }
                        }
                      >
                        <Label>Equity</Label>
                        <AvGroup className='has-icon-left position-relative'>
                          <AvInput
                            type='text'
                            name='equityRepatriated '
                            id='equityRepatriated '
                            placeholder='Equity Amount'
                          />
                          <AvFeedback>Please enter Equity Amount </AvFeedback>
                          <div className='form-control-position'>
                            <Edit size={15} />
                          </div>
                        </AvGroup>
                      </Col>
                      <Col
                        sm='3'
                        style={
                          this.state.amountRepatriatedOnDisinvestment
                            ? {}
                            : { display: 'none' }
                        }
                      >
                        <Label>Loan</Label>
                        <AvGroup className='has-icon-left position-relative'>
                          <AvInput
                            type='text'
                            name='loanRepatriated '
                            id='loanRepatriated '
                            placeholder='Loan Amount'
                          />
                          <AvFeedback>Please enter Loan Amount </AvFeedback>
                          <div className='form-control-position'>
                            <Edit size={15} />
                          </div>
                        </AvGroup>
                      </Col>
                      <Col
                        sm='3'
                        style={
                          this.state.amountRepatriatedOnDisinvestment
                            ? {}
                            : { display: 'none' }
                        }
                      >
                        <Label>Others (Please Specify)</Label>
                        <AvGroup className='has-icon-left position-relative'>
                          <AvInput
                            type='text'
                            name='othersRepatriated '
                            id='othersRepatriated '
                            placeholder='Others'
                          />
                          <AvFeedback>Please enter Others</AvFeedback>
                          <div className='form-control-position'>
                            <Edit size={15} />
                          </div>
                        </AvGroup>
                      </Col>
                    </Row>
                  )
                }
              )}
              <Col
                sm='12'
                style={
                  this.state.amountRepatriatedOnDisinvestment
                    ? {}
                    : { display: 'none' }
                }
              >
                <div
                  onClick={this.deleteAmountRepatriatedRows}
                  className='fonticon-container'
                  style={{ float: 'right', width: '40px', color: 'primary' }}
                >
                  <div className='fonticon-wrap'>
                    <MinusSquare size={30} className='fonticon-wrap' />
                  </div>
                </div>
                <div
                  onClick={this.addAmountRepatriatedRow}
                  className='fonticon-container'
                  style={{ float: 'right', width: '40px', color: 'primary' }}
                >
                  <div className=' fonticon-wrap'>
                    <PlusSquare size={30} className='fonticon-wrap' />
                  </div>
                </div>
              </Col>
              <Col sm='12'>
                <Label for='nameVerticalIcons'>
                  Amount repatriated since reporting of the last APR except the
                  disinvestment proceeds
                </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <label className='react-toggle-wrapper'>
                    <Toggle
                      checked={
                        this.state
                          .amountRepatriatedSinceReportingOnDisinvestment
                      }
                      onChange={checkedValue => {
                        this.setState({
                          amountRepatriatedSinceReportingOnDisinvestment:
                            checkedValue.target.checked
                        })

                        this.props.capturedDisInvestmentData.amountRepatriatedSinceReportingOnDisinvestment =
                          checkedValue.target.checked
                      }}
                      name='controlledSwitch'
                      value='yes'
                    />
                    <Button.Ripple color='primary' size='sm'>
                      {this.state.amountRepatriatedSinceReportingOnDisinvestment
                        ? 'Yes'
                        : 'No'}
                    </Button.Ripple>
                  </label>
                </AvGroup>
              </Col>
              <Col sm='4'>
                {/* <Label>Equity</Label> */}
                <AvGroup
                  className='has-icon-left position-relative'
                  style={
                    this.state.amountRepatriatedSinceReportingOnDisinvestment
                      ? {}
                      : { display: 'none' }
                  }
                >
                  <AvInput
                    type='text'
                    name='equityAPR'
                    id='equityAPR'
                    placeholder='Equity Amount'
                  />
                  <AvFeedback>Please enter Equity Amount </AvFeedback>
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='4'>
                {/* <Label>Loan</Label> */}
                <AvGroup
                  className='has-icon-left position-relative'
                  style={
                    this.state.amountRepatriatedSinceReportingOnDisinvestment
                      ? {}
                      : { display: 'none' }
                  }
                >
                  <AvInput
                    type='text'
                    name='loanAPR'
                    id='loanAPR'
                    placeholder='Loan Amount'
                  />
                  <AvFeedback>Please enter Loan Amount </AvFeedback>
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='4'>
                {/* <Label>Guarantees Issued</Label> */}
                <AvGroup
                  className='has-icon-left position-relative'
                  style={
                    this.state.amountRepatriatedSinceReportingOnDisinvestment
                      ? {}
                      : { display: 'none' }
                  }
                >
                  <AvInput
                    type='text'
                    name='othersAPR'
                    id='othersAPR'
                    placeholder='Others (Please Specify)'
                  />
                  <AvFeedback>Please enter Others</AvFeedback>
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
      </Card>
    )
  }
}
export default Module3Form
