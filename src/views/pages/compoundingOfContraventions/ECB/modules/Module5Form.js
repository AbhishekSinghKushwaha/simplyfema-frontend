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
    basicPicker: new Date(),
    nameOfThePerson: '',
    addressOfThePerson: '',
    panNumber: '',
    designationOrStatus: '',
    errors:{
      panNumber: '',
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case 'panNumber': 
        errors.panNumber = 
          value.length < 10
            ? 'Please enter valid PAN Number'
            : '';
        break;
      default:
        break;
    }
    this.setState({errors, [name]: value});

    this.setState({ panNumber: e.target.value})
    this.props.capturedECBData.panNumber = e.target.value
  }

  handleSwitchChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
    })
  }

  render () {
    let { basicPicker } = this.state
    const {errors} = this.state;
    return (
      <Card>
        <CardHeader>
          <CardTitle>Authorised Signatory</CardTitle>
        </CardHeader>
        <CardBody>
          <div>                       
            <Row>
              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Name of the person</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='nameOfThePerson'
                    id='nameOfThePerson'
                    value={
                      this.props.capturedECBData &&
                      this.props.capturedECBData.hasOwnProperty('nameOfPerson')
                        ? this.props.capturedECBData.nameOfPerson
                        : this.state.nameOfThePerson
                    }
                    onChange={e => {
                      this.setState({ nameOfThePerson: e.target.value})
                      this.props.capturedECBData.nameOfThePerson =
                      e.target.value
                    }}
                    required
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
                    id='addressOfThePerson'
                    value={
                      this.props.capturedECBData &&
                      this.props.capturedECBData.hasOwnProperty('addressOfPerson')
                        ? this.props.capturedECBData.addressOfPerson
                        : this.state.addressOfThePerson
                    }
                    onChange={e => {
                      this.setState({ addressOfThePerson: e.target.value})
                      this.props.capturedECBData.addressOfThePerson =
                      e.target.value
                    }}
                    required
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
                    id='panNumber'
                    value={
                      this.props.capturedECBData &&
                      this.props.capturedECBData.hasOwnProperty('Pannumber')
                        ? this.props.capturedECBData.Pannumber
                        : this.state.panNumber
                    }
                    onChange={this.handleChange}
                    required
                  />
                  {errors.panNumber.length > 0 && 
                  <span className='error' style={{color:'#E55252', fontSize:"12px"}}>{errors.panNumber}</span>}
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                {/* <AvFeedback>Please enter PAN number</AvFeedback> */}
                </AvGroup> 
              </Col>

                     
              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Designation / Status</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='designationOrStatus'
                    id='designationOrStatus'
                    value={
                      this.props.capturedECBData &&
                      this.props.capturedECBData.hasOwnProperty('designation')
                        ? this.props.capturedECBData.designation
                        : this.state.designationOrStatus
                    }
                    onChange={e => {
                      this.setState({ designationOrStatus: e.target.value})
                      this.props.capturedECBData.designationOrStatus =
                      e.target.value
                    }}
                    required
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter Designation / Status</AvFeedback>
                </AvGroup>
              </Col>
              
                     
            </Row>
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default Module5Form
