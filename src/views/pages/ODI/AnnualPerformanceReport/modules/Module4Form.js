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

import {
  AvInput,
  AvGroup,
  AvFeedback,
  AvField
} from 'availity-reactstrap-validation'

import InputMask from 'react-input-mask'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'
import '../../../../../assets/scss/plugins/forms/switch/react-toggle.scss'

import { Edit, Calendar } from 'react-feather'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/light.css'
import '../../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss'
import Select from 'react-select'


const investmentTypeOptions = [
  { value: 'WO SDS', label: 'WO SDS' },
  { value: 'JV SDS', label: 'JV SDS' }
]

const stepDownSubsidiaryOptions = [
  { value: 'SPV/ Holding Company', label: 'SPV/ Holding Company' },
  {value:'Operating',label:'Operating'},
  { value: 'Operating Cum SPV', label: 'Operating Cum SPV' }
]


class Module4Form extends React.Component {
  state = {
    isChecked: false,
    investmentDate: new Date(),
    rangePicker: new Date(),
    isActivityFinancialServicesToggle : false,
    sdsStakeValue : "",
    investmentTypeOption : "WO SDS",
    stepDownSubsidiaryOption : "SPV/ Holding Company"
  }
  handleSwitchChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
    })
  }
  render () {
    let { investmentDate, rangePicker,sdsStakeValue,investmentTypeOption } = this.state

    return (
      <Card>
        <CardHeader>
          <CardTitle>
            Furnish the details of investment in either Wholly owned of a Joint
            Venture Step down subsidiary (SDS) of JV/ WOS in the prescribed
            format
          </CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
              <Col sm='6'>
              <Label for='nameLevelCountrySDS'>
                    Name, Level and Country name of SDS
                  </Label>
                <AvGroup className='has-icon-left position-relative'>

                  <AvInput
                    type='text'
                    name='nameLevelCountrySDS'
                    id='nameLevelCountrySDS'
                    placeholder='Name, Level and Country name of SDS'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                  <AvFeedback>Please Enter Name, Level and Country name of SDS</AvFeedback>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label>Name, Level and Country name of the parent of SDS</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='nameLevelCountryParentSDS'
                    id='nameLevelCountryParentSDS'
                    placeholder='Name, Level and Country name of the parent of SDS'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                  <AvFeedback>Please Enter Name, Level and Country name of Parent SDS</AvFeedback>

                </AvGroup>
              </Col>
              <Col sm='12'>
                
                <Label for='investmentAmountFCY'>
                  Investment Amount in FCY and Date of investment (if any)
                </Label>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='investmentAmountFCY'
                    id='investmentAmountFCY'
                    placeholder='Amount'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                  <AvFeedback>Please Enter Investment Amount in FCY</AvFeedback>

                </AvGroup>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <Flatpickr
                    className='form-control'
                    value={investmentDate}
                    onChange={enteredDate => {
                      this.setState({
                        investmentDate: enteredDate
                      })

                      this.props.capturedAPRData.investmentDate = new Date(
                        this.state.investmentDate
                      ).toDateString()
                    }}
                  />
                  <div className='form-control-position'>
                    <Calendar size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='nameVerticalIcons'> Investment type</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <Select
                    className='React'
                    classNamePrefix='select'
                    defaultValue={investmentTypeOptions[1]}
                    name='clear'
                    options={investmentTypeOptions}
                    isClearable={true}
                    onChange={investmentTypeOption => {
                      this.setState({ investmentTypeOption })
                      this.props.capturedAPRData.investmentTypeOption =
                      investmentTypeOption.label
                    }}
                  />

                </AvGroup>
              </Col> <Col sm='6'>
                <Label for='nameVerticalIcons'>Type of Step Down Subsidiary </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <Select
                    className='React'
                    classNamePrefix='select'
                    defaultValue={stepDownSubsidiaryOptions[1]}
                    name='clear'
                    options={stepDownSubsidiaryOptions}
                    isClearable={true}
                    onChange={stepDownSubsidiaryOption => {
                      this.setState({ stepDownSubsidiaryOption })
                      this.props.capturedAPRData.stepDownSubsidiaryOption =
                      stepDownSubsidiaryOption.label
                    }}
                  />

                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label>% stake held in SDS</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <InputMask
                    name='name'
                    id='sdsStakeValue'
                    placeholder='Dividend'
                    mask='99.99%'
                    className='form-control'
                    onChange={event => {
                      this.setState({
                        sdsStakeValue: event.target.value
                      })
                      this.props.capturedAPRData.sdsStakeValue = sdsStakeValue
                    }}
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='nameVerticalIcons'>
                Is the activity of SDS into financial services
                </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <label className='react-toggle-wrapper'>
                    <Toggle
                      checked={this.state.isActivityFinancialServicesToggle}
                      // onChange={this.handleSwitchChange}
                      onChange={checkedValue => {
                        this.setState({
                          isActivityFinancialServicesToggle: checkedValue.target.checked
                        })
  
                        this.props.capturedAPRData.isActivityFinancialServicesToggle =
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
                      
                      {this.state.isActivityFinancialServicesToggle ? 'Yes' : 'No'}
                    </Button.Ripple>
                  </label>
                </AvGroup>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    )
  }
}
export default Module4Form
