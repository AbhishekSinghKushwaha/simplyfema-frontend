import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Form,
  Button,
  Label,
  Collapse,
  Input
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
  Edit,
  CreditCard,
  Printer,
  MapPin,
  ChevronDown
} from 'react-feather'

class Module1Form extends React.Component {
  constructor(props){
    super(props)
  
  } 

  state = {
    collapse: true
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

 
  handleChange (e) {
    console.log(e.target.value)
  }



  // componentDidMount() {}

  // componentWillUnmount() {}

  render () {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Company / Individual Information</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
              <Col sm='6'>
                <Label for='companyActivites'>
                  Activities of the Company / Individual
                </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='companyActivites'
                    id='companyActivites'
                    placeholder='Company Activities'
                  />

                  <AvFeedback>Please enter Company Activitiese</AvFeedback>
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>{' '}
             
              <Col sm='6'>
                <Label for='disinvestingPANNumber'>
                  {' '}
                  PAN No of the disinvesting IP / RI
                </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='disinvestingPANNumber'
                    id='disinvestingPANNumber'
                    placeholder='PAN Number'
                  />
                  <AvFeedback>Please enter disinvesting IP/RI PAN Number</AvFeedback>
                  <div className='form-control-position'>
                    <CreditCard size={15} />
                  </div>
                </AvGroup>
              </Col>{' '}
            </Row>{' '}
          </Form>
        </CardBody>
     
        <CardHeader>
          <CardTitle> Signatory Details</CardTitle>
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
              {' '}
              <Row>
                <Col sm='6'>
                  <Label for='signatoryName'>Name of Signatory</Label>
                  <AvGroup className='has-icon-left position-relative'>
                    <AvInput
                      required
                      type='text'
                      ref='signatoryName'
                      name='signatoryName'
                      id='signatoryName'
                      placeholder='Signatory Name'
                    />
                    <AvFeedback>Please enter Signatory Name</AvFeedback>
                    <div className='form-control-position'>
                      <User size={15} />
                    </div>
                  </AvGroup>
                </Col>{' '}
                <Col sm='6'>
                  <Label for='signatoryDesignation'>Designation</Label>
                  <AvGroup className='has-icon-left position-relative'>
                    <AvInput
                      type='text'
                      name='signatoryDesignation'
                      id='signatoryDesignation'
                      placeholder='Designation'
                    />
                    <AvFeedback>Please enter Signatory Designation</AvFeedback>
                    <div className='form-control-position'>
                      <Edit size={15} />
                    </div>
                  </AvGroup>
                </Col>
                <Col sm='6'>
                  <Label for='signatoryFaxNo'>Fax. No</Label>
                  <AvGroup className='has-icon-left position-relative'>
                    <AvInput
                      type='text'
                      name='signatoryFaxNo'
                      id='signatoryFaxNo'
                      placeholder='Fax. No'
                    />
                    <AvFeedback>Please enter Signatory Fax No</AvFeedback>
                    <div className='form-control-position'>
                      <Printer size={15} />
                    </div>
                  </AvGroup>
                </Col>
                <Col sm='6'>
                  <Label for='signatoryTelNo'>Tel. No</Label>
                  <AvGroup className='has-icon-left position-relative'>
                    <AvInput
                      type='number'
                      name='signatoryTelNo'
                      id='signatoryTelNo'
                      placeholder='Tel. No'
                    />
                    <AvFeedback>Please enter Signatory Tel. No</AvFeedback>
                    <div className='form-control-position'>
                      <Smartphone size={15} />
                    </div>
                  </AvGroup>
                </Col>
                <Col sm='12'>
                  <Label for='signatoryPlace'>Place</Label>
                  <AvGroup className='has-icon-left position-relative'>
                    <AvInput
                      type='text'
                      name='signatoryPlace'
                      id='signatoryPlace'
                      placeholder='Place'
                    />
                    <AvFeedback>Please enter Signatory Name</AvFeedback>
                    <div className='form-control-position'>
                      <MapPin size={15} />
                    </div>
                  </AvGroup>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Collapse>{' '}
      
        <CardHeader>
          <CardTitle>AD Bank Details</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
              <Col sm='6'>
                <Label for='nameADBank'>Name of the AD bank</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='nameADBank'
                    id='nameADBank'
                    placeholder='Name of the AD bank'
                  />
                  <AvFeedback>Please enter Name of the AD bank</AvFeedback>
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>{' '}
              <Col sm='6'>
                <Label for='addressADBank'> AD Bank Address</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='addressADBank'
                    id='addressADBank'
                    placeholder='AD Bank Address'
                  />
                  <AvFeedback>Please enter AD Bank Address</AvFeedback>
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>{' '}
              <Col sm='12'>
                <AvGroup className='has-icon-left position-relative'>
                  {/* <Button.Ripple
                    color='primary'
                    type='submit'
                    className='mr-1 mb-1'
                    onClick={e => e.preventDefault()}
                  >
                    Submit
                  </Button.Ripple> */}
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
            </Row>{' '}
          </Form>
        </CardBody>
      </Card>
    )
  }
}
export default Module1Form
