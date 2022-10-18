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
  Calendar,
  

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
    let { basicPicker } = this.state
  

    

    return (
      <Card>
        <CardHeader>
          <CardTitle style={{fontSize:'23px', fonWeight:'bold' }}>Business Profile</CardTitle>
        </CardHeader>
        <CardBody>
        <Label> </Label>
          <Form>                       
            <Row>
              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons' >Legal Name of Business / Name of Individual</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='legalNameOfBusiness'
                    id='nameVerticalIcons'
                    placeholder='Legal Name of Business / Name of Individual'
                  />
                  <AvFeedback>
                    Please Enter Legal Name of Business / Name of Individual
                  </AvFeedback>
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>

          

              <Col sm='6'>
              <Label style={{paddingBottom:'13px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons'>Date of Incorporation / Registration</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <Flatpickr
                    style={{position:'relative' , bottom:'5px'}}
                    className='form-control'
                    value={basicPicker}
                    onChange={dateOfIncorporation => {
                      this.setState({
                        dateOfIncorporation
                      })

                      this.props.capturedCOCData.dateOfIncorporation = new Date(
                        this.state.dateOfIncorporation
                      ).toDateString()
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
              

              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons'>PAN Number</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='PANnumber'
                    id='nameVerticalIcons'
                  />
                  <AvFeedback>
                      Please enter PAN number
                  </AvFeedback>
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>

              
              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons'>CIN Number</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='CINnumber'
                    id='nameVerticalIcons'
                  />
                  <AvFeedback>
                    Please Enter CIN number
                  </AvFeedback>
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
                    // defaultValue={investmentPurposeOptions[1]}
                    name='clear'
                    options={NicOptions}
                    isClearable={true}
                    onChange={selectNicOption => {
                      this.setState({ selectNicOption})
                      this.props.capturedCOCData.selectNicOption =
                      selectNicOption.label
                    }}
                  />
                 <AvFeedback>Please select NIC Code</AvFeedback>
                 {/* 
                  <div className='form-control-position'>
                    <Calendar size={15} />
                  </div> */}
                </AvGroup>
              </Col>

                  {/* {console.log("selectNicOption " , this.state.selectNicOption)} */}

              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons'>Main Activities</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='mainActivities'
                    id='nameVerticalIcons'
                  />
                  <AvFeedback>
                   Please enter main activities
                  </AvFeedback>
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
                    id='nameVerticalIcons'
                  />
                  <AvFeedback>
                    Please Enter additional activities
                  </AvFeedback>
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
                    onChange={selectActivityOption => {
                      this.setState({ selectActivityOption})
                      this.props.capturedCOCData.selectActivityOption =
                      selectActivityOption.label
                    }}
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


        <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons'>Building No. / Flat No.</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='buildingNumber'
                    id='nameVerticalIcons'
                  />
                  <AvFeedback>
                   Please enter building number/flat number
                  </AvFeedback>
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>



        <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons'>Floor No.</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='floorNumber'
                    id='nameVerticalIcons'
                  />
                  <AvFeedback>
                   Please enter Floor number
                  </AvFeedback>
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>



        <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons'>Name of the Premises / Building</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='nameOfThePremisesOrBuilding'
                    id='nameVerticalIcons'
                  />
                  <AvFeedback>
                  Please Enter name premises / building 
                  </AvFeedback>
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>



        <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons'>Road / Street</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='roadOrStreet'
                    id='nameVerticalIcons'
                  />
                  <AvFeedback>
                   Please enter Road/Street
                  </AvFeedback>
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
                    id='nameVerticalIcons'
                  />
                  <AvFeedback>
                    Please enter City / Town / Locality / Village
                  </AvFeedback>
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
                    id='nameVerticalIcons'
                  />
                  <AvFeedback>
                    Please enter state
                  </AvFeedback>
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
                    id='nameVerticalIcons'
                  />
                  <AvFeedback>
                   Please enter Pincode
                  </AvFeedback>
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
                    type='text'
                    name='officeEmailAddress'
                    id='nameVerticalIcons'
                  />
                  <AvFeedback>
                   Please enter Office Email Address
                  </AvFeedback>
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
                    id='nameVerticalIcons'
                  />
                  <AvFeedback>
                   Please enter Mobile Number
                  </AvFeedback>
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
                    id='nameVerticalIcons'
                  />
                  <AvFeedback>
                   Please enter Office Telephone Number (with STD Code)
                  </AvFeedback>
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
                    id='nameVerticalIcons'
                  />
                  <AvFeedback>
                  Please enter Office FAX Number (with STD Code)
                  </AvFeedback>
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>




            </Row>
          </Form>
        </CardBody>
      </Card>
    )
  }
}
export default Module1Form
