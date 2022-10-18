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
  Label
} from 'reactstrap'

import {
  AvInput,
  AvGroup,
  AvFeedback,
  AvField
} from 'availity-reactstrap-validation'


import Toggle from 'react-toggle'
import 'react-toggle/style.css'
import '../../../../../assets/scss/plugins/forms/switch/react-toggle.scss'
import 'flatpickr/dist/themes/light.css'
import '../../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss'
import { Edit,Mail } from 'react-feather'

class Module3Form extends React.Component {
  constructor(props){
    super(props)
  
  } 

  state = {
    isChecked: false,
    spvCheck : false
  }

  handleSwitchChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,

    })
  }

  render () {

    const {spvCheck} = this.state
    return (
      <Card>
        <CardHeader>
          <CardTitle> JV / WOS Details </CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
              <Col sm='6'>
                <Label for='particularsJVOrWOS'>
                  Particulars of existing JV and WOS already in operation or
                  under implementation, of the IP/ RI
                </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='particularsJVOrWOS'
                    id='particularsJVOrWOS'
                    placeholder='Summary of the Overseas Direct Investment (Cumulative amount)'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='nameJVOrWOS'>Name of JV/WOS </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='nameJVOrWOS'
                    id='nameJVOrWOS'
                    placeholder='Name of JV/WOS'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='addressJVOrWOS'>Address of JV/WOS </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='addressJVOrWOS'
                    id='addressJVOrWOS'
                    placeholder='Address of JV/WOS'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='countryName'>Name of the country </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='countryName'
                    id='countryName'
                    placeholder='Name of the country'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='emailJVOrWOS'>E-mail id of the JV/ WOS </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='email'
                    name='emailJVOrWOS'
                    id='emailJVOrWOS'
                    placeholder='E-mail id of the JV/ WOS'
                  />
                  <div className='form-control-position'>
                    <Mail size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='accountingYearJVOrWOS'>
                  Accounting year followed by the JV/WOS
                </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='accountingYearJVOrWOS'
                    id='accountingYearJVOrWOS'
                    placeholder='Accounting year followed by the JV/WOS'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='activityCodeJVOrWOS'>
                  Activity code of the JV/WOS as per NIC 1987
                </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='activityCodeJVOrWOS'
                    id='activityCodeJVOrWOS'
                    placeholder='Activity code of the JV/WOS as per NIC 1987'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='costOverseasAcquisition'>
                  Estimated cost/ Fair Value of overseas acquisition
                </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='costOverseasAcquisition'
                    id='costOverseasAcquisition'
                    placeholder='Estimated cost/ Fair Value of overseas
                    acquisition'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='financialCommitmentJVorWOS'>
                  Financial commitment w.r.t above JV/WOS
                </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='financialCommitmentJVorWOS'
                    id='financialCommitmentJVorWOS'
                    placeholder='Financial commitment w.r.t above JV/WOS'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='financialCommitmentAllJVorWOS'>
                  Financial Commitment w.r.t. all JV/ WOS
                </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='financialCommitmentAllJVorWOS'
                    id='financialCommitmentAllJVorWOS'
                    placeholder='Financial Commitment w.r.t. all JV/ WOS'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='spvCheck'>Whether JV/WOS is SPV </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <label className='react-toggle-wrapper'>
                    <Toggle
                            checked={this.state.spvCheck}
                            onChange={checkedValue => {
                              this.setState({
                                spvCheck:
                                  checkedValue.target.checked
                              })
      
                              this.props.capturedODIData.spvCheck =
                                checkedValue.target.checked
                            }}
                      name='controlledSwitch'
                      value='yes'
                    />

                    <Button.Ripple
                      color='primary'
                      // onClick={this.handleSwitchChange}
                      size='sm'
                    >
                      {this.state.spvCheck ? 'Yes' : 'No'}
                    </Button.Ripple>
                  </label>
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
