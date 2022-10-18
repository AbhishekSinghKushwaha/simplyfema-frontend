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
  Button
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
  { value: 'Operating', label: 'Operating' },
  { value: 'Operating Cum SPV', label: 'Operating Cum SPV' }
]

class Module4Form extends React.Component {
  constructor(props){
    super(props)
  
  } 

  state = {
    isChecked: false,
    investmentDate: new Date(),
    investmentTypeOption : "WO SDS",
    stepDownSubsidiaryOption : "SPV/ Holding Company"

  }
  handleSwitchChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
    })
  }
  render () {
    let { investmentDate, rangePicker } = this.state
    return (
      <Card>
        <CardHeader>
          <CardTitle>
            Furnish the details of investment/ disinvestment of Step down
            subsidiary (SDS) of JV/ WOS in the prescribed format
          </CardTitle>
        </CardHeader>
        <CardBody>
          <Label></Label>
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
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='nameLevelCountryParentSDS'>Name, Level and Country name of the parent of SDS</Label>
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
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='nameParentSDS'>
                  Name of the Parent of the SDS
                </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='nameParentSDS'
                    id='nameParentSDS'
                    placeholder='Name of the Parent of the SDS'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                
                <Label for='investmentAmountFCY'>
                  Investment Amount in FCY and Date of investment (if any)
                </Label> 
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

                      this.props.capturedODIData.investmentDate = new Date(
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
                      this.props.capturedODIData.investmentTypeOption =
                      investmentTypeOption.label
                    }}
                  />

                </AvGroup>
              </Col> <Col sm='6'>
                <Label for='stepDownSubsidiaryOptions'>Type of Step Down Subsidiary </Label>
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
                      this.props.capturedODIData.stepDownSubsidiaryOption =
                      stepDownSubsidiaryOption.label
                    }}
                  />

                </AvGroup>
                </Col>
              <Col sm='6'>
                <Label for='nicCode1987'>
                Activity code as per NIC 1987
                </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='nicCode1987'
                    id='nicCode1987'
                    placeholder='Activity code as per NIC 1987'
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
      </Card>
    )
  }
}
export default Module4Form
