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
  User,
  Smartphone,
  CreditCard,
  Printer,
  MapPin,
  ChevronDown,
  Edit,
  Calendar
} from 'react-feather'

import {
  AvInput,
  AvGroup,
  AvFeedback,
  AvField
} from 'availity-reactstrap-validation'

import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/light.css'
import '../../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss'

class Module6Form extends React.Component {
    constructor(props){
    super(props)
  
  } 
  state = {
    collapse: true,
    auditoryDate: new Date(),
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
    let { auditoryDate} = this.state

    return (
      <Card>
        <CardHeader>
          <CardTitle> Details </CardTitle>
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
                  <Label for='signatoryName'>
                  Signature of the Statutory Auditors of the Indian Party
                  </Label>
                  <AvGroup className='has-icon-left position-relative'>
                    <AvInput
                      type='text'
                      name='signatoryName'
                      id='signatoryName'
                      placeholder='Signature of the Statutory Auditors of the Indian Party'
                    />
                    <div className='form-control-position'>
                      <User size={15} />
                    </div>
                    <AvFeedback>Please Enter Signature of the Statutory Auditors</AvFeedback>
                  </AvGroup>
                </Col>
                <Col sm='6'>
                  <Label for='auditorFirmName'>
                  Name   of   the   Auditor firm
                  </Label>
                  <AvGroup className='has-icon-left position-relative'>
                    <AvInput
                      type='text'
                      name='auditorFirmName'
                      id='auditorFirmName'
                      placeholder='Name   of   the   Auditor firm'
                    />
                    <div className='form-control-position'>
                      <Edit size={15} />
                    </div>
                    <AvFeedback>Please Enter Name of the Auditor firm</AvFeedback>

                  </AvGroup>
                </Col>
                <Col sm='6'>
                  <Label for='auditoryRegistrationNumber'>
                    
                  Registration number
                  </Label>
                  <AvGroup className='has-icon-left position-relative'>
                    <AvInput
                      type='number'
                      name='auditoryRegistrationNumber'
                      id='auditoryRegistrationNumber'
                      placeholder='Registration Number'
                    />
                    <div className='form-control-position'>
                      <Smartphone size={15} />
                    </div>
                    <AvFeedback>Please Enter Registration Number</AvFeedback>

                  </AvGroup>
                </Col>
                <Col sm='6'>
                  <Label for='auditoryPlace'> Place </Label>
                  <AvGroup className='has-icon-left position-relative'>
                    <AvInput
                      type='text'
                      name='auditoryPlace'
                      id='auditoryPlace'
                      placeholder='Place'
                    />
                    <div className='form-control-position'>
                      <MapPin size={15} />
                    </div>
                    <AvFeedback>Please Enter Place</AvFeedback>

                  </AvGroup>
                </Col>
                <Col sm='6'>
                  <Label for='nameVerticalIcons'> Date </Label>
                  <AvGroup className='has-icon-left position-relative'>
                    <Flatpickr
                      className='form-control'
                      value={auditoryDate}
                      onChange={enteredDate => {
                        this.setState({
                          auditoryDate: enteredDate
                        })
  
                        this.props.capturedAPRData.auditoryDate = new Date(
                          this.state.auditoryDate
                        ).toDateString()
                      }}
                    />
                    <div className='form-control-position'>
                      <Calendar size={15} />
                    </div>
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
export default Module6Form
