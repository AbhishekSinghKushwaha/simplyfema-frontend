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
    nameOfApplicant: '',
    incomeTaxPan: '',
    natureOfActivitiesUnderTakenwithNic: '',
    validityPeriodOFTheApproval: '',
    incomeAndExpendiruteOfTheLoBo: '',
    datesOfSubmissionOfAnnualActivityCertificates: '',
    natureOfContraventionsAndReasonsForTheContravention: '',
    allSupportingDocumentsMayBeSubmitted: '',
    errors:{
      incomeTaxPan: '',
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case 'incomeTaxPan': 
        errors.incomeTaxPan = 
          value.length < 10
            ? 'Please enter valid PAN Number'
            : '';
        break;
      default:
        break;
    }
    this.setState({errors, [name]: value});

      this.setState({ incomeTaxPan: e.target.value})
      this.props.capturedLOData.incomeTaxPan = e.target.value
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
    let { basicPicker, dateOfIncorporation, dateofApprovalOffice  } = this.state
    const {errors} = this.state;
    return (
      <Card>
        <CardHeader>
          <CardTitle>Branch Office / Liaison Office</CardTitle>
        </CardHeader>
        <CardBody>
          <div>                       
            <Row>
              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Name of the applicant</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='nameOfApplicant'
                    id='nameOfApplicant'
                    value={
                      this.props.capturedLOData &&
                      this.props.capturedLOData.hasOwnProperty('nameApplicant')
                        ? this.props.capturedLOData.nameApplicant
                        : this.state.nameOfApplicant
                    }
                    onChange={e => {
                      this.setState({ nameOfApplicant: e.target.value})
                      this.props.capturedLOData.nameOfApplicant =
                      e.target.value
                    }}
                    required
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
                    value={dateOfIncorporation}
                    // value={
                    //   this.props.capturedLOData &&
                    //   this.props.capturedLOData.hasOwnProperty('dateIncorporationbo')
                    //     ? new Date(this.props.capturedLOData.dateIncorporationbo)
                    //     : dateOfIncorporation
                    // }
                    onChange={dateOfIncorporation => {
                      this.setState({
                        dateOfIncorporation
                      })

                      this.props.capturedLOData.dateIncorporationbo = new Date(
                        this.state.dateOfIncorporation
                      ).toISOString()
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
                    id='incomeTaxPan'
                    value={
                      this.props.capturedLOData &&
                      this.props.capturedLOData.hasOwnProperty('incometaxPan')
                        ? this.props.capturedLOData.incometaxPan
                        : this.state.incomeTaxPan
                    }
                    onChange={this.handleChange}
                    required
                  />
                  {errors.incomeTaxPan.length > 0 && 
                  <span className='error' style={{color:'#E55252', fontSize:"12px"}}>{errors.incomeTaxPan}</span>}
                  {/* <AvFeedback> Please enter Income-tax PAN</AvFeedback>} */}
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                
                </AvGroup> 
              </Col>

              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Nature of activities under taken (Please give NIC code - 1987)</Label>
                <AvGroup className='has-icon-left position-relative'>
                
                  <AvInput
                    type='text'
                    name='natureOfActivitiesUnderTakenwithNic'
                    id='natureOfActivitiesUnderTakenwithNic'
                    value={
                      this.props.capturedLOData &&
                      this.props.capturedLOData.hasOwnProperty('natureActivitiesUnderTakenwithNic')
                        ? this.props.capturedLOData.natureActivitiesUnderTakenwithNic
                        : this.state.natureOfActivitiesUnderTakenwithNic
                    }
                    onChange={e => {
                      this.setState({ natureOfActivitiesUnderTakenwithNic: e.target.value})
                      this.props.capturedLOData.natureOfActivitiesUnderTakenwithNic =
                      e.target.value
                    }}
                    required
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
                    value={dateofApprovalOffice}
                    // value={
                    //   this.props.capturedLOData &&
                    //   this.props.capturedLOData.hasOwnProperty('dateApprovalOffice')
                    //     ? new Date(this.props.capturedLOData.dateApprovalOffice)
                    //     : dateofApprovalOffice
                    // }
                    onChange={dateofApprovalOffice => {
                      this.setState({
                        dateofApprovalOffice
                      })

                      this.props.capturedLOData.dateApprovalOffice = new Date(
                        this.state.dateofApprovalOffice
                      ).toISOString()
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
                    id='validityPeriodOFTheApproval'
                    value={
                      this.props.capturedLOData &&
                      this.props.capturedLOData.hasOwnProperty('validityPeriodTheApproval')
                        ? this.props.capturedLOData.validityPeriodTheApproval
                        : this.state.validityPeriodOFTheApproval
                    }
                    onChange={e => {
                      this.setState({ validityPeriodOFTheApproval: e.target.value})
                      this.props.capturedLOData.validityPeriodOFTheApproval =
                      e.target.value
                    }}
                    required
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
                    name='incomeAndExpendiruteOfTheLoBo'
                    id='incomeAndExpendiruteOfTheLoBo'
                    value={
                      this.props.capturedLOData &&
                      this.props.capturedLOData.hasOwnProperty('incomeAndExpendiruteTheLoBo')
                        ? this.props.capturedLOData.incomeAndExpendiruteTheLoBo
                        : this.state.incomeAndExpendiruteOfTheLoBo
                    }
                    onChange={e => {
                      this.setState({ incomeAndExpendiruteOfTheLoBo: e.target.value})
                      this.props.capturedLOData.incomeAndExpendiruteOfTheLoBo =
                      e.target.value
                    }}
                    required
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
                    id='datesOfSubmissionOfAnnualActivityCertificates'
                    value={
                      this.props.capturedLOData &&
                      this.props.capturedLOData.hasOwnProperty('datesOfSubmissionAnnualActivityCertificates')
                        ? this.props.capturedLOData.datesOfSubmissionAnnualActivityCertificates
                        : this.state.datesOfSubmissionOfAnnualActivityCertificates
                    }
                    onChange={e => {
                      this.setState({ datesOfSubmissionOfAnnualActivityCertificates: e.target.value})
                      this.props.capturedLOData.datesOfSubmissionOfAnnualActivityCertificates =
                      e.target.value
                    }}
                    required
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
                    id='natureOfContraventionsAndReasonsForTheContravention'
                    value={
                      this.props.capturedLOData &&
                      this.props.capturedLOData.hasOwnProperty('natureContraventionsAndReasonsForTheContravention')
                        ? this.props.capturedLOData.natureContraventionsAndReasonsForTheContravention
                        : this.state.natureOfContraventionsAndReasonsForTheContravention
                    }
                    onChange={e => {
                      this.setState({ natureOfContraventionsAndReasonsForTheContravention: e.target.value})
                      this.props.capturedLOData.natureOfContraventionsAndReasonsForTheContravention =
                      e.target.value
                    }}
                    required
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
                    id='allSupportingDocumentsMayBeSubmitted'
                    value={
                      this.props.capturedLOData &&
                      this.props.capturedLOData.hasOwnProperty('allSupportingDocumentsMaySubmitted')
                        ? this.props.capturedLOData.allSupportingDocumentsMaySubmitted
                        : this.state.allSupportingDocumentsMayBeSubmitted
                    }
                    onChange={e => {
                      this.setState({ allSupportingDocumentsMayBeSubmitted: e.target.value})
                      this.props.capturedLOData.allSupportingDocumentsMayBeSubmitted =
                      e.target.value
                    }}
                    required
                  />
                
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback> Please enter All supporting documents may be submitted</AvFeedback>
                </AvGroup> 
              </Col>

   

            </Row>
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default Module10Form
