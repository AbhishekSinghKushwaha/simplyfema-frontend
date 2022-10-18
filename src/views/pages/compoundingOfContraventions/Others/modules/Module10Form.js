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







class Module10Form extends React.Component {
  constructor(props){
    super(props)
  
  } 

  state = {
    collapse: true,
    isChecked: false,
    basicPicker: new Date(),
    dateOfIncorporation: new Date(),
    dateofApprovalOffice: new Date(),
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
          <CardTitle>Branch Office / Liaison Office</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>                       
            <Row>
              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Name of the applicant</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='nameOfApplicant'
                    id='nameVerticalIcons'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback> Please enter Name of the applicant</AvFeedback>
                </AvGroup>
              </Col>
             
              
              <Col sm='6'>
              <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Date of incorporation</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <Flatpickr
                    className='form-control'
                    value={basicPicker}
                    onChange={dateOfIncorporation => {
                      this.setState({
                        dateOfIncorporation
                      })

                      this.props.capturedOthersData.dateOfIncorporation = new Date(
                        this.state.dateOfIncorporation
                      ).toDateString()
                    }}
                  />
                  <div className='form-control-position'>
                    <Calendar size={15} />{' '}
                  </div>{' '}
                <AvFeedback> Please enter Date of incorporation</AvFeedback>
                </AvGroup>{' '}
              </Col>
              

              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Income-tax PAN</Label>
                <AvGroup className='has-icon-left position-relative'>
                
                  <AvInput
                    type='text'
                    name='incomeTaxPan'
                    id='nameVerticalIcons'
                  />
                
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback> Please enter Income-tax PAN</AvFeedback>
                </AvGroup> 
              </Col>

              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Nature of activities under taken (Please give NIC code - 1987)</Label>
                <AvGroup className='has-icon-left position-relative'>
                
                  <AvInput
                    type='text'
                    name='natureOfActivitiesUnderTakenwithNic'
                    id='nameVerticalIcons'
                  />
                
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback> Please enter Nature of activities under taken (Please give NIC code - 1987)</AvFeedback>
                </AvGroup> 
              </Col>

   
              <Col sm='6'>
              <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Date of approval for opening of Liaison Office/ Branch Office</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <Flatpickr
                    className='form-control'
                    value={basicPicker}
                    onChange={dateofApprovalOffice => {
                      this.setState({
                        dateofApprovalOffice
                      })

                      this.props.capturedOthersData.dateofApprovalOffice = new Date(
                        this.state.dateofApprovalOffice
                      ).toDateString()
                    }}
                  />
                  <div className='form-control-position'>
                    <Calendar size={15} />{' '}
                  </div>{' '}
                <AvFeedback> Please enter Date of approval for opening of Liaison Office/ Branch Office</AvFeedback>
                </AvGroup>{' '}
              </Col>
              

              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Validity period of the approval</Label>
                <AvGroup className='has-icon-left position-relative'>
                
                  <AvInput
                    type='text'
                    name='validityPeriodOFTheApproval'
                    id='nameVerticalIcons'
                  />
                
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback> Please enter Validity period of the approval</AvFeedback>
                </AvGroup> 
              </Col>

   
              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Income and expenditure of the LO / BO</Label>
                <AvGroup className='has-icon-left position-relative'>
                
                  <AvInput
                    type='text'
                    name='incomeAndExpendiruteOfTheLo/Bo'
                    id='nameVerticalIcons'
                  />
                
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback> Please enter Income and expenditure of the LO / BO</AvFeedback>
                </AvGroup> 
              </Col>

   
              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Dates of submission of Annual activity Certificates</Label>
                <AvGroup className='has-icon-left position-relative'>
                
                  <AvInput
                    type='text'
                    name='datesOfSubmissionOfAnnualActivityCertificates'
                    id='nameVerticalIcons'
                  />
                
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback> Please enter Dates of submission of Annual activity Certificates</AvFeedback>
                </AvGroup> 
              </Col>

   
              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Nature of contravention and reasons for the contravention</Label>
                <AvGroup className='has-icon-left position-relative'>
                
                  <AvInput
                    type='text'
                    name='natureOfContraventionsAndReasonsForTheContravention'
                    id='nameVerticalIcons'
                  />
                
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback> Please enter Nature of contravention and reasons for the contravention</AvFeedback>
                </AvGroup> 
              </Col>

   
              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>All supporting documents may be submitted</Label>
                <AvGroup className='has-icon-left position-relative'>
                
                  <AvInput
                    type='text'
                    name='allSupportingDocumentsMayBeSubmitted'
                    id='nameVerticalIcons'
                  />
                
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback> Please enter All supporting documents may be submitted</AvFeedback>
                </AvGroup> 
              </Col>

   

            </Row>
          </Form>
        </CardBody>
      </Card>
    )
  }
}
export default Module10Form
