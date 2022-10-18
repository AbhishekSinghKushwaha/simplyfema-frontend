//Entity Information

import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
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

const NicOptions = [
  { value: 'NIC Code of 2008', label: 'NIC Code of 2008' },
  { value: 'NIC Code of 1987', label: 'NIC Code of 1987' },
  { value: 'NIC Code of 2004', label: 'NIC Code of 2004' },
  ]

const ActivityOptions = [
  { value: 'Activity 1', label: 'Activity 1' },
  { value: 'Activity 2', label: 'Activity 2' },
  { value: 'Activity 3', label: 'Activity 3' },
  
]

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const phoneno = /\+?\d[\d -]{8,12}\d/;
const telephone= /\d{3}([- ]*)\d{8}/
const fax = /[+][0-9]{2}[' '][1-9]{2,5}[' '][1-9]*?/

class Module1Form extends React.Component {
  constructor(props){
    super(props)
  
  } 

  state = {
    collapse: true,
    isChecked: false,
    basicPicker: new Date(),

    selectNicOption: 'NIC Code of 2008',
    dateOfIncorporation: new Date(),
    selectActivityOption : '', 
    legalNameOfBusiness: '',
      CINnumber: '',
      PANnumber: '', 
      mainActivities: '', 
      additionalActivities: '', 
      buildingNumber: '', 
      floorNumber: '', 
      nameOfThePremisesOrBuilding: '', 
      roadOrStreet: '', 
      area: '', 
      cityOrTownOrLocalityOrVillage: '',
      state: '',
      country: '', 
      pincode: '', 
      officeEmailAddress: '', 
      mobileNumber: '', 
      officeTelephoneNumber: '',
      officeFaxNumber: '',
    errors: {
      legalNameOfBusiness: '',
      CINnumber: '',
      PANnumber: '', 
      mainActivities: '', 
      additionalActivities: '', 
      buildingNumber: '', 
      floorNumber: '', 
      nameOfThePremisesOrBuilding: '', 
      roadOrStreet: '', 
      area: '', 
      cityOrTownOrLocalityOrVillage: '',
      state: '',
      country: '', 
      pincode: '', 
      officeEmailAddress: '', 
      mobileNumber: '', 
      officeTelephoneNumber: '',
      officeFaxNumber: ''
    }   
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case 'legalNameOfBusiness': 
        errors.legalNameOfBusiness = 
          value.length == 0
            ? 'Please enter name of the business/individual'
            : '';
        break;
      case 'CINnumber': 
        errors.CINnumber = 
          value.length < 21
            ? 'Please enter valid CIN Number'
            : '';
        break;
      case 'PANnumber': 
        errors.PANnumber = 
          value.length < 10
            ? 'Please enter valid PAN Number'
            : '';
        break;
        case 'mainActivities': 
        errors.mainActivities = 
          value.length == 0
            ? 'Please enter main activities'
            : '';
        break;
        case 'additionalActivities': 
        errors.additionalActivities = 
          value.length == 0
            ? 'Please enter additional activities'
            : '';
        break;
        case 'buildingNumber': 
        errors.buildingNumber = 
          value.length == 0
            ? 'Please enter building number'
            : '';
        break;
        case 'floorNumber': 
        errors.floorNumber = 
          value.length == 0
            ? 'Please enter floor number'
            : '';
        break;
        case 'nameOfThePremisesOrBuilding': 
        errors.nameOfThePremisesOrBuilding = 
          value.length == 0
            ? 'Please enter name of the building'
            : '';
        break;
        case 'roadOrStreet': 
        errors.roadOrStreet = 
          value.length == 0
            ? 'Please enter street'
            : '';
        break;
        case 'area': 
        errors.area = 
          value.length == 0
            ? 'Please enter area'
            : '';
        break;
        case 'cityOrTownOrLocalityOrVillage': 
        errors.cityOrTownOrLocalityOrVillage = 
          value.length == 0
            ? 'Please enter city'
            : '';
        break;
        case 'state': 
        errors.state = 
          value.length == 0
            ? 'Please enter state'
            : '';
        break;
        case 'country': 
        errors.country = 
          value.length == 0
            ? 'Please enter country'
            : '';
        break;
        case 'pincode': 
        errors.pincode = 
          value.length == 0
            ? 'Please enter pincode'
            : '';
        break;
        case 'officeEmailAddress': 
        errors.officeEmailAddress = 
          validEmailRegex.test(value)
          ? ''
          : 'Email is not valid';
        break;
        case 'mobileNumber': 
        errors.mobileNumber = 
          phoneno.test(value)
          ? ''
          : 'Mobile number not valid'
        break;
        case 'officeTelephoneNumber': 
        errors.officeTelephoneNumber = 
          telephone.test(value)
          ? ''
          : 'Telephhone number not valid'
        break;
        case 'officeFaxNumber': 
        errors.officeFaxNumber = 
          fax.test(value)
          ? ''
          : 'Fax number not valid'
        break;
      default:
        break;
    }
    this.setState({errors, [name]: value});

    this.setState({ officeFaxNumber: e.target.value})
    this.props.capturedLOData.officeFaxNumber = e.target.value
  }

  handleSwitchChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
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

    let { basicPicker,
          dateOfIncorporation 
      } = this.state
    const {errors} = this.state;
    

    return (
      <Card>
        <CardHeader>
          <CardTitle style={{fontSize:'23px', fonWeight:'bold' }}>Business Profile</CardTitle>
        </CardHeader>
        <CardBody>
        <Label> </Label>
          <div>                       
            <Row>
              <Col sm='12'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons' >Legal Name of Business / Name of Individual</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='legalNameOfBusiness'
                    id='legalNameOfBusiness'
                    placeholder='Legal Name of Business / Name of Individual'
                    value={
                      this.props.capturedLOData &&
                      this.props.capturedLOData.hasOwnProperty('legalNameBusiness')
                        ? this.props.capturedLOData.legalNameBusiness
                        : this.state.legalNameOfBusiness
                    }
                    onChange={e => {
                      this.setState({ legalNameOfBusiness: e.target.value})
                      this.props.capturedLOData.legalNameOfBusiness =
                      e.target.value
                    }}
                    required
                    />
                    {errors.legalNameOfBusiness.length > 0 ? 
                  <span className='error' style={{color:'#E55252', fontSize:"12px"}}>{errors.legalNameOfBusiness}</span>:
                  <AvFeedback>
                    Please Enter Legal Name of Business / Name of Individual
                  </AvFeedback>}
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>

          

              <Col sm='4'>
              <Label style={{paddingBottom:'13px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons'>Date of Incorporation / Registration</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <Flatpickr
                    style={{position:'relative' , bottom:'5px'}}
                    className='form-control'
                    // defaultDate={dateOfIncorporation}
                    value={dateOfIncorporation}
                    // value={ 
                    //   this.props.capturedLOData &&
                    //   this.props.capturedLOData.hasOwnProperty('dateIncorporation')
                    //     ? new Date(this.props.capturedLOData.dateIncorporation)
                    //     : dateOfIncorporation
                    // }
                    onChange={enteredDate => {
                      this.setState({dateOfIncorporation:enteredDate})
                      this.props.capturedLOData.dateIncorporation = new Date(
                        this.state.dateOfIncorporation
                      ).toISOString()
                    }}
                  />
                  <AvFeedback>
                      Please Enter Date of Incorporation
                  </AvFeedback>
                  <div className='form-control-position'>
                    <Calendar size={15}   style={{position:'relative' , bottom:'5px'}}/>{' '}
                  </div>{' '}
                </AvGroup>{' '}
              </Col>
              

              <Col sm='4'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons'>PAN Number</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='PANnumber'
                    id='PANnumber'
                    value={
                      this.props.capturedLOData &&
                      this.props.capturedLOData.hasOwnProperty('panNumber')
                        ? this.props.capturedLOData.panNumber
                        : this.state.PANnumber
                    }
                    onChange={e => {
                      this.setState({ PANnumber: e.target.value})
                      this.props.capturedLOData.PANnumber =
                      e.target.value
                    }}
                    required
                    />
                    {errors.PANnumber.length > 0 ? 
                  <span className='error' style={{color:'#E55252', fontSize:"12px"}}>{errors.PANnumber}</span>:
                  <AvFeedback>
                      Please enter PAN number
                  </AvFeedback>}
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>

              
              <Col sm='4'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons'>CIN Number</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='CINnumber'
                    id='CINnumber'
                    value={
                      this.props.capturedLOData &&
                      this.props.capturedLOData.hasOwnProperty('cinNumber')
                        ? this.props.capturedLOData.cinNumber
                        : this.state.CINnumber
                    }
                    onChange={e => {
                      this.setState({ CINnumber: e.target.value})
                      this.props.capturedLOData.CINnumber =
                      e.target.value
                    }}
                    required
                    />
                    {errors.CINnumber.length > 0 ? 
                  <span className='error' style={{color:'#E55252', fontSize:"12px"}}>{errors.CINnumber}</span>:
                  <AvFeedback>
                    Please Enter CIN number
                  </AvFeedback>}
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              
              <CardHeader>
          <CardTitle style={{width:"1200px",  marginBottom:"20px" ,fontSize:'23px', fonWeight:'bold'}}>COMPANY BUSINESS ACTIVITIES</CardTitle>
        </CardHeader>

        <Col sm='6'>
                <Label 
                style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}
                  for='nameVerticalIcons'>NIC Code</Label>
                <AvGroup style={{zIndex:"100"}} className='has-icon-left position-relative'>
                  <Select
                    className='React'
                    classNamePrefix='select'
                    defaultValue={NicOptions[0]}
                    name='clear'
                    options={NicOptions}
                    isClearable={true}
                    value={{
                      label:
                        this.props.capturedLOData &&
                        this.props.capturedLOData.hasOwnProperty(
                          'selectnicOption'
                        )
                          ? this.props.capturedLOData.selectnicOption
                          : NicOptions[0].label,
                      value:
                        this.props.capturedLOData &&
                        this.props.capturedLOData.hasOwnProperty(
                          'selectnicOption'
                        )
                          ? this.props.capturedLOData.selectnicOption
                          : NicOptions[0].value
                    }}
                    onChange={
                      selectNicOption => {
                      this.setState({ selectNicOption})
                      this.props.capturedLOData.selectnicOption = selectNicOption.label
                    }}
                    required
                    />
                 <AvFeedback>Please select NIC Code</AvFeedback>
                 {/* 
                  <div className='form-control-position'>
                    <Calendar size={15} />
                  </div> */}
                </AvGroup>
              </Col>



              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons'>Main Activities</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='mainActivities'
                    id='mainActivities'
                    value={
                      this.props.capturedLOData &&
                      this.props.capturedLOData.hasOwnProperty('mainactivities')
                        ? this.props.capturedLOData.mainactivities
                        : this.state.mainActivities
                    }
                    onChange={e => {
                      this.setState({ mainActivities: e.target.value})
                      this.props.capturedLOData.mainActivities =
                      e.target.value
                    }}
                    required
                    />
                    {errors.mainActivities.length > 0 ?
                  <span className='error' style={{color:'#E55252', fontSize:"12px"}}>{errors.mainActivities}</span>:
                  <AvFeedback>
                   Please enter main activities
                  </AvFeedback>}
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>


              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons'>Addition Activities</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='additionalActivities'
                    id='additionalActivities'
                    value={
                      this.props.capturedLOData &&
                      this.props.capturedLOData.hasOwnProperty('additionalactivities')
                        ? this.props.capturedLOData.additionalactivities
                        : this.state.additionalActivities
                    }
                    onChange={e => {
                      this.setState({ additionalActivities: e.target.value})
                      this.props.capturedLOData.additionalActivities =
                      e.target.value
                    }}
                    required
                    />
                    {errors.additionalActivities.length > 0 ? 
                  <span className='error' style={{color:'#E55252', fontSize:"12px"}}>{errors.additionalActivities}</span>:
                  <AvFeedback>
                    Please Enter additional activities
                  </AvFeedback>}
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
      

              

              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons'>Select the Activities</Label>
                <AvGroup style={{zIndex:"100"}} className='has-icon-left position-relative'>
                  <Select
                    className='React'
                    classNamePrefix='select'
                    // defaultValue={investmentPurposeOptions[1]}
                    name='clear'
                    options={ActivityOptions}
                    isClearable={true}
                    value={{
                      label:
                        this.props.capturedLOData &&
                        this.props.capturedLOData.hasOwnProperty(
                          'selectactivityOption'
                        )
                          ? this.props.capturedLOData.selectactivityOption
                          : ActivityOptions[0].label,
                      value:
                        this.props.capturedLOData &&
                        this.props.capturedLOData.hasOwnProperty(
                          'selectactivityOption'
                        )
                          ? this.props.capturedLOData.selectactivityOption
                          : ActivityOptions[0].value
                    }}
                    onChange={selectActivityOption => {
                      this.setState({ selectActivityOption})
                      this.props.capturedLOData.selectactivityOption = selectActivityOption.label
                    }}
                    required
                    />
                  <AvFeedback>
                    Please select the activities
                    </AvFeedback>{/* 
                  <div className='form-control-position'>
                    <Calendar size={15} />
                  </div> */}
                </AvGroup>
              </Col>
             
             
              <CardHeader>
          <CardTitle style={{width:"1200px",  marginBottom:"20px" ,fontSize:'23px', fonWeight:'bold'}}>REGISTERED OFFICE ADDRESS</CardTitle>
        </CardHeader>


        <Col sm='4'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons'>Building No. / Flat No.</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='buildingNumber'
                    id='buildingNumber'
                    value={
                      this.props.capturedLOData &&
                      this.props.capturedLOData.hasOwnProperty('buildingNo')
                        ? this.props.capturedLOData.buildingNo
                        : this.state.buildingNumber
                    }
                    onChange={e => {
                      this.setState({ buildingNumber: e.target.value})
                      this.props.capturedLOData.buildingNumber =
                      e.target.value
                    }}
                    required
                    />
                    {errors.buildingNumber.length > 0 ? 
                  <span className='error' style={{color:'#E55252', fontSize:"12px"}}>{errors.buildingNumber}</span>:
                  <AvFeedback>
                   Please enter building number/flat number
                  </AvFeedback>}
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>



        <Col sm='4'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons'>Floor No.</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='floorNumber'
                    id='floorNumber'
                    value={
                      this.props.capturedLOData &&
                      this.props.capturedLOData.hasOwnProperty('floorNo')
                        ? this.props.capturedLOData.floorNo
                        : this.state.floorNumber
                    }
                    onChange={e => {
                      this.setState({ floorNumber: e.target.value})
                      this.props.capturedLOData.floorNumber =
                      e.target.value
                    }}
                    required
                    />
                    {errors.floorNumber.length > 0 ? 
                  <span className='error' style={{color:'#E55252', fontSize:"12px"}}>{errors.floorNumber}</span>:
                  <AvFeedback>
                   Please enter Floor number
                  </AvFeedback>}
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>



        <Col sm='4'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons'>Name of the Premises / Building</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='nameOfThePremisesOrBuilding'
                    id='nameOfThePremisesOrBuilding'
                    value={
                      this.props.capturedLOData &&
                      this.props.capturedLOData.hasOwnProperty('nameThePremisesOrBuilding')
                        ? this.props.capturedLOData.nameThePremisesOrBuilding
                        : this.state.nameOfThePremisesOrBuilding
                    }
                    onChange={e => {
                      this.setState({ nameOfThePremisesOrBuilding: e.target.value})
                      this.props.capturedLOData.nameOfThePremisesOrBuilding =
                      e.target.value
                    }}
                    required
                    />
                    {errors.nameOfThePremisesOrBuilding.length > 0 ? 
                  <span className='error' style={{color:'#E55252', fontSize:"12px"}}>{errors.nameOfThePremisesOrBuilding}</span>:
                  <AvFeedback>
                  Please Enter name premises / building 
                  </AvFeedback>}
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>



        <Col sm='4'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons'>Road / Street</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='roadOrStreet'
                    id='roadOrStreet'
                    value={
                      this.props.capturedLOData &&
                      this.props.capturedLOData.hasOwnProperty('Street')
                        ? this.props.capturedLOData.Street
                        : this.state.roadOrStreet
                    }
                    onChange={e => {
                      this.setState({ roadOrStreet: e.target.value})
                      this.props.capturedLOData.roadOrStreet =
                      e.target.value
                    }}
                    required
                    />
                    {errors.roadOrStreet.length > 0 ? 
                  <span className='error' style={{color:'#E55252', fontSize:"12px"}}>{errors.roadOrStreet}</span>:
                  <AvFeedback>
                   Please enter Road/Street
                  </AvFeedback>}
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>


        <Col sm='4'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons'>Area</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='area'
                    id='area'
                    value={
                      this.props.capturedLOData &&
                      this.props.capturedLOData.hasOwnProperty('Area')
                        ? this.props.capturedLOData.Area
                        : this.state.area
                    }
                    onChange={e => {
                      this.setState({ area: e.target.value})
                      this.props.capturedLOData.area =
                      e.target.value
                    }}
                    required
                    />
                    {errors.area.length > 0 ?
                  <span className='error' style={{color:'#E55252', fontSize:"12px"}}>{errors.area}</span>:
                  <AvFeedback>
                   Please enter Area
                  </AvFeedback>}
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>


        <Col sm='4'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons'>City / Town / Locality / Village</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='cityOrTownOrLocalityOrVillage'
                    id='cityOrTownOrLocalityOrVillage'
                    value={
                      this.props.capturedLOData &&
                      this.props.capturedLOData.hasOwnProperty('City')
                        ? this.props.capturedLOData.City
                        : this.state.cityOrTownOrLocalityOrVillage
                    }
                    onChange={e => {
                      this.setState({ cityOrTownOrLocalityOrVillage: e.target.value})
                      this.props.capturedLOData.cityOrTownOrLocalityOrVillage =
                      e.target.value
                    }}
                    required
                    />
                    {errors.cityOrTownOrLocalityOrVillage.length > 0 ? 
                  <span className='error' style={{color:'#E55252', fontSize:"12px"}}>{errors.cityOrTownOrLocalityOrVillage}</span>:
                  <AvFeedback>
                    Please enter City / Town / Locality / Village
                  </AvFeedback>}
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>



        <Col sm='4'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons'>State</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='state'
                    id='state'
                    value={
                      this.props.capturedLOData &&
                      this.props.capturedLOData.hasOwnProperty('State')
                        ? this.props.capturedLOData.State
                        : this.state.state
                    }
                    onChange={e => {
                      this.setState({ state: e.target.value})
                      this.props.capturedLOData.state =
                      e.target.value
                    }}
                    required
                    />
                    {errors.state.length > 0 ? 
                  <span className='error' style={{color:'#E55252', fontSize:"12px"}}>{errors.state}</span>:
                  <AvFeedback>
                    Please enter state
                  </AvFeedback>}
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>



        <Col sm='4'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons'>Country</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='country'
                    id='country'
                    value={
                      this.props.capturedLOData &&
                      this.props.capturedLOData.hasOwnProperty('Country')
                        ? this.props.capturedLOData.Country
                        : this.state.country
                    }
                    onChange={e => {
                      this.setState({ country: e.target.value})
                      this.props.capturedLOData.country =
                      e.target.value
                    }}
                    required
                    />
                    {errors.country.length > 0 ? 
                  <span className='error' style={{color:'#E55252', fontSize:"12px"}}>{errors.country}</span>:
                  <AvFeedback>
                    Please enter Country
                  </AvFeedback>}
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>



        <Col sm='4'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons'>Pincode</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='pincode'
                    id='pincode'
                    value={
                      this.props.capturedLOData &&
                      this.props.capturedLOData.hasOwnProperty('Pincode')
                        ? this.props.capturedLOData.Pincode
                        : this.state.pincode
                    }
                    onChange={e => {
                      this.setState({ pincode: e.target.value})
                      this.props.capturedLOData.pincode =
                      e.target.value
                    }}
                    required
                    />
                    {errors.pincode.length > 0 ? 
                  <span className='error' style={{color:'#E55252', fontSize:"12px"}}>{errors.pincode}</span>:
                  <AvFeedback>
                   Please enter Pincode
                  </AvFeedback>}
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>

              <CardHeader>
          <CardTitle style={{width:"1200px",  marginBottom:"20px" ,fontSize:'23px', fonWeight:'bold'} }>CONTACT INFORMATION</CardTitle>
        </CardHeader>


        <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons'>Office Email Address</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='email'
                    name='officeEmailAddress'
                    id='officeEmailAddress'
                    value={
                      this.props.capturedLOData &&
                      this.props.capturedLOData.hasOwnProperty('officeemailAddress')
                        ? this.props.capturedLOData.officeemailAddress
                        : this.state.officeEmailAddress
                    }
                    onChange={e => {
                      this.setState({ officeEmailAddress: e.target.value})
                      this.props.capturedLOData.officeEmailAddress =
                      e.target.value
                    }}
                    required
                    />
                    {errors.officeEmailAddress.length > 0 ? 
                  <span className='error' style={{color:'#E55252', fontSize:"12px"}}>{errors.officeEmailAddress}</span>:
                  <AvFeedback>
                   Please enter Office Email Address
                  </AvFeedback>}
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>

        <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons'>Mobile Number</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='mobileNumber'
                    id='mobileNumber'
                    value={
                      this.props.capturedLOData &&
                      this.props.capturedLOData.hasOwnProperty('mobileNo')
                        ? this.props.capturedLOData.mobileNo
                        : this.state.mobileNumber
                    }
                    onChange={e => {
                      this.setState({ mobileNumber: e.target.value})
                      this.props.capturedLOData.mobileNumber =
                      e.target.value
                    }}
                    required
                    />
                    {errors.mobileNumber.length > 0 ? 
                  <span className='error' style={{color:'#E55252', fontSize:"12px"}}>{errors.mobileNumber}</span>:
                  <AvFeedback>
                   Please enter Mobile Number
                  </AvFeedback>}
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>


        <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons'>Office Telephone Number (with STD Code)</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='officeTelephoneNumber'
                    id='officeTelephoneNumber'
                    value={
                      this.props.capturedLOData &&
                      this.props.capturedLOData.hasOwnProperty('officeTelephoneNo')
                        ? this.props.capturedLOData.officeTelephoneNo
                        : this.state.officeTelephoneNumber
                    }
                    onChange={e => {
                      this.setState({ officeTelephoneNumber: e.target.value})
                      this.props.capturedLOData.officeTelephoneNumber =
                      e.target.value
                    }}
                    required
                    />
                    {errors.officeTelephoneNumber.length > 0 ? 
                  <span className='error' style={{color:'#E55252', fontSize:"12px"}}>{errors.officeTelephoneNumber}</span>:
                  <AvFeedback>
                   Please enter Office Telephone Number (with STD Code)
                  </AvFeedback>}
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>


        <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons'>Office FAX Number (with STD Code)</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='officeFaxNumber'
                    id='officeFaxNumber'
                    value={
                      this.props.capturedLOData &&
                      this.props.capturedLOData.hasOwnProperty('officeFaxNo')
                        ? this.props.capturedLOData.officeFaxNo
                        : this.state.officeFaxNumber
                    }
                    onChange={this.handleChange}
                    required
                    />
                    {errors.officeFaxNumber.length > 0 ? 
                  <span className='error' style={{color:'#E55252', fontSize:"12px"}}>{errors.officeFaxNumber}</span>:
                  <AvFeedback>
                  Please enter Office FAX Number (with STD Code)
                  </AvFeedback>}
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>




            </Row>
          </div>
        </CardBody>
      </Card>
    )
  }
}

export default Module1Form