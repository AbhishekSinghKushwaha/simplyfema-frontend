import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Form,
  Button,
  Label,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap'
import makeAnimated from 'react-select/animated'
import InputMask from 'react-input-mask'

import {
  AvInput,
  AvGroup,
  AvFeedback,
} from 'availity-reactstrap-validation'

import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/light.css'
import '../../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss'
import { Edit, Calendar } from 'react-feather'
import Select from 'react-select'

const routeOptions = [
  {
    value: 'Approval Route',
    label: 'Approval Route'
  },
  {
    value: 'Automatic Route',
    label: 'Automatic Route'
  }
]

const disinvestmentTypeOptions = [
  {
    value: 'Full Disinvestment',
    label: 'Full Disinvestment'
  },
  {
    value: 'Partial Disinvestment',
    label: 'Partial Disinvestment'
  }
]

const methodOptions = [
  {
    value:
      ' Sale or transfer of shares to another IP/ Individual, Merger / Liquidation of IP',
    label:
      ' Sale or transfer of shares to another IP/ Individual, Merger / Liquidation of IP',
    color: '#00B8D9',
    isFixed: false
  },
  {
    value: 'Closure/ Voluntary Liquidation of the JV/ WOS',
    label: 'Closure/ Voluntary Liquidation of the JV/ WOS',
    color: '#0052CC',
    isFixed: false
  },
  {
    value: 'Buy back by the JV/ WOS',
    label: 'Buy back by the JV/ WOS',
    color: '#5243AA',
    isFixed: false
  },
  {
    value: 'Merger of two or more JV/ WOS of the same IP or different IP',
    label: 'Merger of two or more JV/ WOS of the same IP or different IP',
    color: '#FF5630',
    isFixed: false
  },
  {
    value:
      'Merger of the JV/ WOS with the Step down subsidiaries of the same IP or another IP',
    label:
      'Merger of the JV/ WOS with the Step down subsidiaries of the same IP or another IP',
    color: '#FF8B00',
    isFixed: false
  },
  {
    value:
      'Merger of JV/ WOS with an Independent Foreign Company not having any relation with the IP/ RI	',
    label:
      'Merger of JV/ WOS with an Independent Foreign Company not having any relation with the IP/ RI	',
    color: '#FFC400',
    isFixed: false
  }
]

class Module2Form extends React.Component {
  constructor (props) {
    super(props)
  }

  state = {
    disInvestmentDate: new Date(),
    submissionDate: new Date(),
    selectedRouteOption: "Approval Route",
    selectedDisinvestmentTypeOption: "Partial Disinvestment",
    selectedDisinvestmentMethodOptions: null,
    recievedStakeValue : "",
    disinvestmentStakeValue : "",
  }

  render () {
    console.log(this.props.capturedDisInvestmentData)
    const animatedComponents = makeAnimated()

    let {
      disInvestmentDate,
      submissionDate,
      selectedRouteOption,
      selectedDisinvestmentTypeOption,
      selectedDisinvestmentMethodOptions,
      recievedStakeValue,
      disinvestmentStakeValue
    } = this.state

    return (
      <Card>
        <CardHeader>
          <CardTitle> Transaction Details </CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
              <Col sm='6'>
                <Label for='disInvestmentDate'> Date of DisInvestment </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <Flatpickr
                    className='form-control'
                    value={disInvestmentDate}
                    onChange={enteredDate => {
                      this.setState({
                        disInvestmentDate: enteredDate
                      })

                      this.props.capturedDisInvestmentData.disInvestmentDate = new Date(
                        this.state.disInvestmentDate
                      ).toDateString()
                    }}
                  />
                  <div className='form-control-position'>
                    <Calendar size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='disinvestmentRouteOption'> DisInvestment Route </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <Select
                    className='React'
                    classNamePrefix='select'
                    defaultValue={routeOptions[1]}
                    name='disinvestmentRouteOption'
                    options={routeOptions}
                    isClearable={true}
                    onChange={selectedRouteOption => {
                      this.setState({ selectedRouteOption })
                      this.props.capturedDisInvestmentData.disinvestmentRouteOption =
                        selectedRouteOption.label
                    }}
                  />
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='disinvestmentTypeOptions'> DisInvestment Type </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <Select
                    className='React'
                    classNamePrefix='select'
                    defaultValue={disinvestmentTypeOptions[1]}
                    name='disinvestmentTypeOptions'
                    options={disinvestmentTypeOptions}
                    isClearable={true}
                    onChange={selectedDisinvestmentTypeOption => {
                      this.setState({ selectedDisinvestmentTypeOption })
                      this.props.capturedDisInvestmentData.selectedDisinvestmentTypeOption =
                        selectedDisinvestmentTypeOption.label
                    }}
                  />
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='disinvestingIPorRI'>
                  Name of the disinvesting IP / RI
                </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='disinvestingIPorRI'
                    id='disinvestingIPorRI'
                    placeholder='Name of the disinvesting IP/ RI'
                    required
                  />
                  <AvFeedback>
                    Please enter Name of the disinvesting IP / RI
                  </AvFeedback>
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='receivingIPorRIorFP'>
                  Name of the receiving IP / RI / FP
                </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='receivingIPorRIorFP'
                    id='receivingIPorRIorFP'
                    placeholder='Name of the receiving IP / RI / FP'
                  />
                  <AvFeedback>
                    Please enter Name of the receiving IP / RI / FP
                  </AvFeedback>
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='recievedStake'>
                  Stake received by(field 10) at the time of disinvestment
                </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <InputGroup>
                    <InputGroupAddon addonType='prepend'> % </InputGroupAddon>
                    <InputMask
                      name='recievedStake'
                      className='form-control'
                      mask='99.99%'
                      placeholder='Enter Percentage'
                      onChange = {(event) => {
                        this.setState({
                          recievedStakeValue : event.target.value
                        });
                      this.props.capturedDisInvestmentData.recievedStakeValue = recievedStakeValue
                      }}
                    />
                  </InputGroup>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='disinvestmentStake'>
                  Stake held at the time of disinvestment
                </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <InputGroup>
                    <InputGroupAddon addonType='prepend'> % </InputGroupAddon>
                    <InputMask
                    name="disinvestmentStake"
                      className='form-control'
                      mask='99.99%'
                      placeholder='Enter Percentage'
                      onChange = {(event) => {
                        this.setState({
                          disinvestmentStakeValue : event.target.value
                        });
                       this.props.capturedDisInvestmentData.disinvestmentStakeValue = disinvestmentStakeValue
                      }}
                    />
                  </InputGroup>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='nameVerticalIcons'> Method of disinvestment </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    // defaultValue={[methodOptions[4], methodOptions[5]]}
                    isMulti
                    options={methodOptions}
                    className='React'
                    classNamePrefix='select'
                    onChange={selectedDisinvestmentMethodOptions => {
                      let selectedoptionsArray = [];
                      selectedDisinvestmentMethodOptions.map(option => {
                        selectedoptionsArray.push(option.label)
                      })
                      this.setState({
                        selectedDisinvestmentMethodOptions: selectedoptionsArray
                      })
                      this.props.capturedDisInvestmentData.disinvestmentMethodOptions = selectedoptionsArray
                    }}
                  />
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='totalDisinvestmentValue'>
                  Fair Value of the total disinvestment as per the valuation
                  report
                </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='totalDisinvestmentValue'
                    id='totalDisinvestmentValue'
                    placeholder='Fair Value of the total disinvestment as per the valuation report'
                  />
                  <AvFeedback>
                    Please enter  Fair Value of the total disinvestment as per the valuation
                  report
                  </AvFeedback>
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='submissionDate'>
                  Date of submission of and period to which last APR relates
                </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <Flatpickr
                    className='form-control'
                    value={submissionDate}
                    onChange={enteredSubmissionDate => {
                      this.setState({
                        submissionDate: enteredSubmissionDate
                      })

                      this.props.capturedDisInvestmentData.submissionDate = new Date(
                        this.state.submissionDate
                      ).toDateString()
                    }}
                  />
                  <div className='form-control-position'>
                    <Calendar size={15} />
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
export default Module2Form
