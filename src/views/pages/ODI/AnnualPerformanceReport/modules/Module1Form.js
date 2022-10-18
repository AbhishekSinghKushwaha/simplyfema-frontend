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
  AvField
} from 'availity-reactstrap-validation'


import {
  User,
  Smartphone,
  CreditCard,
  Printer,
  MapPin,
  ChevronDown,
  Edit,
  Calendar
} from 'react-feather'

import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/light.css'
import '../../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss'

class Module1Form extends React.Component {
  constructor(props){
    super(props)
  
  } 

  state = {
    collapse: true,
    basicPicker: new Date(),
    aprDateRangePicker: new Date()
  }
  onEntered = () => {
    this.setState({
      status: 'Opened'
    })
  }
  onEnteredAll = () => {
    this.setState({
      status: 'Opened'
    })
  }
  onExited = () => {
    this.setState({
      status: 'Closed'
    })
  }

  onExiting = () => {
    this.setState({
      status: 'Closing...'
    })
  }

  toggle = () => {
    this.setState(state => ({
      collapse: !state.collapse
    }))
  }
  render () {
    let { basicPicker, aprDateRangePicker } = this.state

    return (
      <Card>
        <CardHeader>
          <CardTitle> Title 1 </CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
              <Col sm='6'>
                <Label for='nameVerticalIcons'>APR for the period </Label>
                <AvGroup className='has-icon-left position-relative'>

                  <Flatpickr
                    value={aprDateRangePicker}
                    className='form-control'
                    options={{ mode: 'range' }}
                    onChange={enteredDate => {
                      this.setState({
                        aprDateRangePicker: enteredDate
                      })

                      this.props.capturedAPRData.aprDateRangePicker = new Date(
                        this.state.aprDateRangePicker[0]
                      ).toDateString() + new Date(
                        this.state.aprDateRangePicker[1]
                      ).toDateString()
                    }}
                  />
                  <div className='form-control-position'>
                    <Calendar size={15} />
                  </div>
                <AvFeedback>Please select APR Period</AvFeedback>

                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='jvOrWOSPeriod'> JV/WOS period </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='name'
                    id='jvOrWOSPeriod'
                    placeholder='JV/WOS period'
                  />
                  <div className='form-control-position'>
                    <CreditCard size={15} />
                  </div>
                <AvFeedback>Please enter JV/WOS period</AvFeedback>
                  
                </AvGroup>
              </Col>
            </Row>
          </Form>
        </CardBody>
        <div> {/* <hr> </hr> */}</div>
        <CardHeader>
          <CardTitle> Signatory Details </CardTitle>
          <ChevronDown
            className='collapse-icon'
            size={15}
            onClick={this.toggle}
          />
        </CardHeader>
        <Collapse
          isOpen={this.state.collapse}
          onExited={this.onExited}
          onEntered={this.onEntered}
          onExiting={this.onExiting}
          onEntering={this.onEntering}
        >
          <CardBody>
            <Form>
              
              <Row>
                <Col sm='6'>
                  <Label for='ipSignature'>
                    
                    Signature of the authorized official of the IP approved by
                    the Board / RI
                  </Label>
                  <AvGroup className='has-icon-left position-relative'>
                    <AvInput
                      type='text'
                      name='ipSignature'
                      id='ipSignature'
                      placeholder='Signature of the authorized official of the IP approved by the Board / RI'
                    />
                    <div className='form-control-position'>
                      <User size={15} />
                    </div>
                <AvFeedback>Please enter Signature of the authorized official</AvFeedback>

                  </AvGroup>
                </Col>
                <Col sm='6'>
                  <Label for='nameAuthorizedIp'>
                    
                    Name of the Authorized Official of the IP
                  </Label>
                  <AvGroup className='has-icon-left position-relative'>
                    <AvInput
                      type='text'
                      name='nameAuthorizedIp'
                      id='nameAuthorizedIp'
                      placeholder='Name  of  the  Authorized Official of the IP'
                    />
                    <div className='form-control-position'>
                      <Edit size={15} />
                    </div>
                <AvFeedback>Please enter Authorized Official</AvFeedback>

                  </AvGroup>
                </Col>
                <Col sm='6'>
                  <Label for='ipAuthorizedDesignation'>
                    
                    Designation of the Authorized Official of the IP
                  </Label>
                  <AvGroup className='has-icon-left position-relative'>
                    <AvInput
                      type='text'
                      name='ipAuthorizedDesignation'
                      id='ipAuthorizedDesignation'
                      placeholder='Designation of  the  Authorized Official of the IP'
                    />
                    <div className='form-control-position'>
                      <Smartphone size={15} />
                    </div>
                <AvFeedback>Please enter Designation of  the  Authorized Official</AvFeedback>

                  </AvGroup>
                </Col>
                <Col sm='6'>
                  <Label for='ipAuthorizedPlace'> Place </Label>
                  <AvGroup className='has-icon-left position-relative'>
                    <AvInput
                      type='text'
                      name='ipAuthorizedPlace'
                      id='ipAuthorizedPlace'
                      placeholder='Place'
                    />
                    <div className='form-control-position'>
                      <MapPin size={15} />
                    </div>
                <AvFeedback>Please enter Place</AvFeedback>

                  </AvGroup>
                </Col>
                <Col sm='6'>
                  <Label for='ipdate'> Date </Label>
                  <AvGroup className='has-icon-left position-relative'>
                    <Flatpickr
                      className='form-control'
                      value={basicPicker}
                      onChange={date => {
                        this.setState({ basicPicker: date })
                      }}
                    />
                    <div className='form-control-position'>
                      <Calendar size={15} />
                    </div>
                <AvFeedback>Please select Date</AvFeedback>

                  </AvGroup>
                </Col> <Col sm='12'>
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
        </Collapse>
        <div> {/* <hr> </hr> */}</div>
     </Card>
    )
  }
}
export default Module1Form
