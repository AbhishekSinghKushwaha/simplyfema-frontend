//Entity Information

import React from 'react'
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
  Edit,
  CreditCard,
  Printer,
  MapPin,
  ChevronDown,
  Mail,
  Calendar
} from 'react-feather'

import makeAnimated from 'react-select/animated'
// import AvInputMask from 'react-Avinput-mask'
import Select from 'react-select'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'
import '../../../../../assets/scss/plugins/forms/switch/react-toggle.scss'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/light.css'
import '../../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss'







class Module5Form extends React.Component {
  constructor(props){
    super(props)
  
  } 

  state = {
    collapse: true,
    isChecked: false,
    basicPicker: new Date()
  }

  handleSwitchChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
    })
  }

  render () {
    let { basicPicker } = this.state

    return (
      <Card>
        <CardHeader>
          <CardTitle>Authorised Signatory</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>                       
            <Row>
              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Name of the person</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='nameOfThePerson'
                    id='nameVerticalIcons'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter Name of the person</AvFeedback>
                </AvGroup>
              </Col>
             
              
             
              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Address of the Person</Label>
                <AvGroup className='has-icon-left position-relative'>
                
                  <AvInput
                    type='text'
                    name='addressOfThePerson'
                    id='nameVerticalIcons'
                  />
                
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter Address of the Person</AvFeedback>
                </AvGroup> 
              </Col>

              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>PAN Number</Label>
                <AvGroup className='has-icon-left position-relative'>
                
                  <AvInput
                    type='text'
                    name='panNumber'
                    id='nameVerticalIcons'
                  />
                
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter PAN number</AvFeedback>
                </AvGroup> 
              </Col>

                     
              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Designation / Status</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='designationOrStatus'
                    id='nameVerticalIcons'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter Designation / Status</AvFeedback>
                </AvGroup>
              </Col>
              
                     
            </Row>
          </Form>
        </CardBody>
      </Card>
    )
  }
}
export default Module5Form
