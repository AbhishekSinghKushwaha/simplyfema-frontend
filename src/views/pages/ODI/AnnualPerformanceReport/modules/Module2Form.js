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

class Module2Form extends React.Component {
  constructor(props){
    super(props)
  
  } 
  state = {
    basicPicker: new Date(),
    foreignShareValue: '',
    indianShareValue: ''
  }

  render () {
    console.log(this.props.capturedAPRData)

    const animatedComponents = makeAnimated()
    
    let {
      basicPicker,
      foreignShareValue,
      indianShareValue
    } = this.state

    return (
      <Card>
        <CardHeader>
          <CardTitle>
            
            Capital structure as on the last day of the accounting year of JV /
            WOS(FCY - XXXX)
          </CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
              <Col sm='6'>
                <Label for='nameVerticalIcons'> Indian </Label>
              </Col>
              <Col sm='6'>
                <Label for='nameVerticalIcons'> Foreign </Label>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='number'
                    name='indianAmount'
                    id='indianAmount'
                    placeholder='Amount'
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
                    name='foreignAmount'
                    id='foreignAmount'
                    placeholder='Amount'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='6'>
                <AvGroup className='has-icon-left position-relative'>
                  <InputMask
                    name='indianShare'
                    id='indianShare'
                    placeholder='Percentage'
                    mask='99.99%'
                    className='form-control'
                    onChange={event => {
                      this.setState({
                        indianShareValue: event.target.value
                      })
                      this.props.capturedAPRData.indianShareValue = indianShareValue
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
                    name='foreignShare'
                    mask='99.99%'
                    className='form-control'
                    id='foreignShare'
                    placeholder='Percentage'
                    onChange={event => {
                      this.setState({
                        foreignShareValue: event.target.value
                      })
                      this.props.capturedAPRData.foreignShareValue = foreignShareValue
                    }}
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
                    color='warning'
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
