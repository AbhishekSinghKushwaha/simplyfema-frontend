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
  Collapse
} from 'reactstrap'

import {
  AvInput,
  AvGroup,
  AvFeedback,
  AvField,
  AvForm
} from 'availity-reactstrap-validation'

import {
  Smartphone,
  Edit,
  CreditCard,
  Printer,
  MapPin,
  Mail,
  Calendar
} from 'react-feather'


import Select from 'react-select'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'
import '../../../../../assets/scss/plugins/forms/switch/react-toggle.scss'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/light.css'
import '../../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss'

const investmentRouteOptions = [
  { value: 'Approval Route', label: 'Approval Route' },
  { value: 'Automatic Route', label: 'Automatic Route' }
]

const statusOptions = [
  { value: 'Public Ltd. Company', label: 'Public Ltd. Company' },
  { value: 'Unregistered Partnership', label: 'Unregistered Partnership' },
  { value: 'Registered Partnership', label: 'Registered Partnership' },
  { value: 'Individual', label: 'Individual' },
  { value: 'Public Sector Undertaking', label: 'Public Sector Undertaking' },
  { value: 'Private Ltd. Company', label: 'Private Ltd. Company' },
  { value: 'Proprietorship', label: 'Proprietorship' },
  { value: 'Trust', label: 'Trust' },
  { value: 'Society', label: 'Society' },
  { value: 'Others', label: 'Others' }
]

const investmentPurposeOptions = [
  {
    value: 'Purpose of investment in New Project @',
    label: 'Purpose of investment in New Project @'
  },
  {
    value: 'Purpose of Supplementary Investment in existing project @',
    label: 'Purpose of Supplementary Investment in existing project @'
  },
  {
    value: 'Conversion of loan into equity and vice versa $',
    label: 'Conversion of loan into equity and vice versa $'
  },
  {
    value:
      'Rollover/ change in amount and date of a guarantee already reported to Reserve Bank $$',
    label:
      'Rollover/ change in amount and date of a guarantee already reported to Reserve Bank $$'
  }
]

class Module1Form extends React.Component {
  constructor(props){
    super(props)
  
  } 

  state = {
    collapse: true,
    isChecked: false,
    personDate : new Date(),
    selectedInvestmentStatusOption: 'Proprietorship',
    selectedInvestmentRouteOption: 'Automatic Route',
    selectedInvestmentPurposeOption : 'Purpose of investment in New Project @',
  }

  handleSwitchChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
      investigationCheck : false
    })
  }

  onEntered = () => {
    this.setState({ status: 'Opened' })
  }
  onEnteredAll = () => {
    this.setState({ status: 'Opened' })
  }
  onExited = () => {
    this.setState({ status: 'Closed' })
  }

  onExiting = () => {
    this.setState({ status: 'Closing...' })
  }

  toggle = () => {
    this.setState(state => ({ collapse: !state.collapse }))
  }
  render () {
    let { personDate,investigationCheck } = this.state

    return (
      <Card>
        <CardHeader>
          <CardTitle>Indian Party / Resident Individual Details</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
              <Col sm='6'>
                <Label for='investmentRoute'> Investment Route</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <Select
                    className='React'
                    classNamePrefix='select'
                    defaultValue={investmentRouteOptions[1]}
                    name='clear'
                    options={investmentRouteOptions}
                    isClearable={true}
                    onChange={selectedInvestmentRouteOption => {
                      this.setState({ selectedInvestmentRouteOption })
                      this.props.capturedODIData.selectedInvestmentRouteOption =
                      selectedInvestmentRouteOption.label
                    }}
                  />
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='nameIPorRI'>Name of IP/ RI</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='nameIPorRI'
                    id='nameIPorRI'
                    placeholder='Name of IP/ RI'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='investmentStatus'> Investment Status
                </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <Select
                    className='React'
                    classNamePrefix='select'
                    defaultValue={statusOptions[1]}
                    name='clear'
                    options={statusOptions}
                    isClearable={true}
                    onChange={selectedInvestmentStatusOption => {
                      this.setState({ selectedInvestmentStatusOption })
                      this.props.capturedODIData.selectedInvestmentStatusOption =
                      selectedInvestmentStatusOption.label
                    }}
                  />
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='investmentPurpose'> Purpose of investment</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <Select
                    className='React'
                    classNamePrefix='select'
                    defaultValue={investmentPurposeOptions[1]}
                    name='clear'
                    options={investmentPurposeOptions}
                    isClearable={true}
                    onChange={selectedInvestmentPurposeOption => {
                      this.setState({ selectedInvestmentPurposeOption })
                      this.props.capturedODIData.selectedInvestmentPurposeOption =
                      selectedInvestmentPurposeOption.label
                    }}
                  />


                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='investigationCheck'>
                  Whether the IP/ RI is under Investigation/ Export Caution
                  list/ Banking Default List.
                </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <label className='react-toggle-wrapper'>
                    <Toggle
                      checked={this.state.investigationCheck}
                      onChange={checkedValue => {
                        this.setState({
                          investigationCheck:
                            checkedValue.target.checked
                        })

                        this.props.capturedODIData.investigationCheck =
                          checkedValue.target.checked
                      }}
                      name='controlledSwitch'
                      value='yes'
                    />

                    <Button.Ripple
                      color='primary'
                      onClick={this.handleSwitchChange}
                      size='sm'
                    >
                      {this.state.investigationCheck ? 'Yes' : 'No'}
                    </Button.Ripple>
                  </label>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='panNo'> PAN No.</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='panNo'
                    id='panNo'
                    placeholder='PAN Number'
                  />
                  <div className='form-control-position'>
                    <CreditCard size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='groupIP'>
                  Group to which the IP belongs
                </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='groupIP'
                    id='groupIP'
                    placeholder='Group to which the IP belongs'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='nicCode'>
                  Activity code of IP (1987 NIC code at 3-digit level)
                </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='nicCode'
                    id='nicCode'
                    placeholder='XXX'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='addressIPorRI'>Address of IP/ RI</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='addressIPorRI'
                    id='addressIPorRI'
                    placeholder='Address of IP/ RI'
                  />
                  <div className='form-control-position'>
                    <MapPin size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for=''>City</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='city'
                    id='city'
                    placeholder='City'
                  />
                  <div className='form-control-position'>
                    <MapPin size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='state'>State</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='state'
                    id='state'
                    placeholder='State'
                  />
                  <div className='form-control-position'>
                    <MapPin size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='pinCode'>Pin</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='pinCode'
                    id='pinCode'
                    placeholder='Pin'
                  />
                  <div className='form-control-position'>
                    <MapPin size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='networthInINR'>Networth in INR</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='networthInINR'
                    id='networthInINR'
                    placeholder='Networth in INR'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='networthAsOnDate'>Networth As on Date</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='networthAsOnDate'
                    id='networthAsOnDate'
                    placeholder='Networth As on Date'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='contactPerson'>Contact Person</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='contactPerson'
                    id='contactPerson'
                    placeholder='Contact Person'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='contactPersonDesignation'>
                  Designation of the contact person
                </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='contactPersonDesignation'
                    id='contactPersonDesignation'
                    placeholder='Designation of the contact person'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='telephoneNumber'>Telephone Number</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='telephoneNumber'
                    id='telephoneNumber'
                    placeholder='Telephone  Number'
                  />
                  <div className='form-control-position'>
                    <Smartphone size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='mobileNumber'>Mobile Number</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='mobileNumber'
                    id='mobileNumber'
                    placeholder='Mobile Number'
                  />
                  <div className='form-control-position'>
                    <Smartphone size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='faxNumber'>Fax. No</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='faxNumber'
                    id='faxNumber'
                    placeholder='Fax. No'
                  />
                  <div className='form-control-position'>
                    <Printer size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='email'>Email</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email'
                  />
                  <div className='form-control-position'>
                    <Mail size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='date'>Date</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <Flatpickr
                    className='form-control'
                    value={personDate}
                    onChange={enteredDate => {
                      this.setState({
                        personDate: enteredDate
                      })

                      this.props.capturedDisInvestmentData.personDate = new Date(
                        this.state.personDate
                      ).toDateString()
                    }}
                    
                  />
                  <div className='form-control-position'>
                    <Calendar size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='place'>Place</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='place'
                    id='place'
                    placeholder='Place'
                  />
                  <div className='form-control-position'>
                    <MapPin size={15} />
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
export default Module1Form
