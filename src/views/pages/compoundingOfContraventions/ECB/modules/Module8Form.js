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







class Module8Form extends React.Component {
  constructor(props){
    super(props)
  
  } 

  state = {
    collapse: true,
    isChecked: false,
    basicPicker: new Date(),
    dateOfIncorporation: new Date(),
    dateOfIncorporation2: new Date(),
    dateOfDrawDown: new Date(),
    nameOfApplicant: '',
    incomeTaxPan: '',
    natureOfActivitiesUnderTakenNicCode: '',
    briefParticularsAboutTheForeignLender: '',
    isTheApplicantAnEligibleBorrower: '',
    isTheLenderEligiblrLender: '',
    isTheLenderAnEquityHolder: '',
    whatisTheLevelOfHisHoldingAtTheTimeOfLoanAgreement: '',
    amountInForeign: '',
    rateOfInterest: '',
    periodOfLoan: '',
    amountInForeignCurrency: '',
    amountInInr: '',
    detailsOfDrawDown: '',
    detailsOfLRNno: '',
    detailsOfEcb2returnsSubmittedandPeriodOfReturnandDateOfSubmission: '',
    detailsOfUtilizationOfEcbInForeignCurrencyAndIndianRupee: '',
    natureOfContraventionandReasonsForTheContravention: '',
    allSupportingDocumentsMatBeSubmitted: '',
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
    this.props.capturedECBData.incomeTaxPan = e.target.value
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
    let { basicPicker, dateOfIncorporation, dateOfIncorporation2, dateOfDrawDown } = this.state
    const {errors} = this.state;
    return (
      <Card>
        <CardHeader>
          <CardTitle>Exports of Goods and Services</CardTitle>
        </CardHeader>
        <CardBody>
          <div>                       
            <Row>
              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameOfApplicant'>Name of the applicant</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='nameOfApplicant'
                    id='nameOfApplicant'
                    value={
                      this.props.capturedECBData &&
                      this.props.capturedECBData.hasOwnProperty('nameApplicant')
                        ? this.props.capturedECBData.nameApplicant
                        : this.state.nameOfApplicant
                    }
                    onChange={e => {
                      this.setState({ nameOfApplicant: e.target.value})
                      this.props.capturedECBData.nameOfApplicant =
                      e.target.value
                    }}
                    required
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter Name of the applicant </AvFeedback>
                 </AvGroup>
              </Col>
             
              
              <Col sm='6'>
              <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Date of incorporation</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <Flatpickr
                    className='form-control'
                    value={dateOfIncorporation}
                    // value={
                    //   this.props.capturedECBData &&
                    //   this.props.capturedECBData.hasOwnProperty('dateIncorporationecb')
                    //     ? new Date(this.props.capturedECBData.dateIncorporationecb)
                    //     : dateOfIncorporation
                    // }
                    onChange={dateOfIncorporation => {
                      this.setState({
                        dateOfIncorporation
                      })

                      this.props.capturedECBData.dateIncorporationecb = new Date(
                        this.state.dateOfIncorporation
                      ).toISOString()
                    }}
                    
                  />
                  <div className='form-control-position'>
                    <Calendar size={15} />{' '}
                  </div>{' '}
                <AvFeedback>Please enter Date of incorporation </AvFeedback>
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
                      this.props.capturedECBData &&
                      this.props.capturedECBData.hasOwnProperty('incometaxPan')
                        ? this.props.capturedECBData.incometaxPan
                        : this.state.incomeTaxPan
                    }
                    onChange={this.handleChange}
                    required
                  />
                  {errors.incomeTaxPan.length > 0 && 
                  <span className='error' style={{color:'#E55252', fontSize:"12px"}}>{errors.incomeTaxPan}</span>}
                
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                {/* <AvFeedback>Please enter Income-tax PAN </AvFeedback> */}
                 </AvGroup> 
              </Col>

              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Nature of activities under taken (Please give NIC code - 1987)</Label>
                <AvGroup className='has-icon-left position-relative'>
                
                  <AvInput
                    type='text'
                    name='natureOfActivitiesUnderTakenNicCode'
                    id='natureOfActivitiesUnderTakenNicCode'
                    value={
                      this.props.capturedECBData &&
                      this.props.capturedECBData.hasOwnProperty('natureActivitiesUnderTakenNicCode')
                        ? this.props.capturedECBData.natureActivitiesUnderTakenNicCode
                        : this.state.natureOfActivitiesUnderTakenNicCode
                    }
                    onChange={e => {
                      this.setState({ natureOfActivitiesUnderTakenNicCode: e.target.value})
                      this.props.capturedECBData.natureOfActivitiesUnderTakenNicCode =
                      e.target.value
                    }}
                    required
                  />
                
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter Nature of activities under taken (Please give NIC code - 1987) </AvFeedback>
                 </AvGroup> 
              </Col>

                     
              <Col sm='12'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Brief particulars about the foreign lender</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='briefParticularsAboutTheForeignLender'
                    id='briefParticularsAboutTheForeignLender'
                    value={
                      this.props.capturedECBData &&
                      this.props.capturedECBData.hasOwnProperty('briefParticularsAboutForeignLender')
                        ? this.props.capturedECBData.briefParticularsAboutForeignLender
                        : this.state.briefParticularsAboutTheForeignLender
                    }
                    onChange={e => {
                      this.setState({ briefParticularsAboutTheForeignLender: e.target.value})
                      this.props.capturedECBData.briefParticularsAboutTheForeignLender =
                      e.target.value
                    }}
                    required
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter Brief particulars about the foreign lender </AvFeedback>
                 </AvGroup>
              </Col>
              
           
        <Col sm='4'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Is the applicant an eligible borrower?</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='isTheApplicantAnEligibleBorrower'
                    id='isTheApplicantAnEligibleBorrower'
                    value={
                      this.props.capturedECBData &&
                      this.props.capturedECBData.hasOwnProperty('ApplicantAnEligibleBorrower')
                        ? this.props.capturedECBData.ApplicantAnEligibleBorrower
                        : this.state.isTheApplicantAnEligibleBorrower
                    }
                    onChange={e => {
                      this.setState({ isTheApplicantAnEligibleBorrower: e.target.value})
                      this.props.capturedECBData.isTheApplicantAnEligibleBorrower =
                      e.target.value
                    }}
                    required
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter Is the applicant an eligible borrower? </AvFeedback>
                 </AvGroup>
              </Col>
                  
           
        <Col sm='4'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Is the lender eligible lender?</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='isTheLenderEligiblrLender'
                    id='isTheLenderEligiblrLender'
                    value={
                      this.props.capturedECBData &&
                      this.props.capturedECBData.hasOwnProperty('LenderEligibleLender')
                        ? this.props.capturedECBData.LenderEligibleLender
                        : this.state.isTheLenderEligiblrLender
                    }
                    onChange={e => {
                      this.setState({ isTheLenderEligiblrLender: e.target.value})
                      this.props.capturedECBData.isTheLenderEligiblrLender =
                      e.target.value
                    }}
                    required
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter Is the lender eligible lender? </AvFeedback>
                 </AvGroup>
              </Col>
                  
           
        <Col sm='4'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Is the lender an equity holder?</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='isTheLenderAnEquityHolder'
                    id='isTheLenderAnEquityHolder'
                    value={
                      this.props.capturedECBData &&
                      this.props.capturedECBData.hasOwnProperty('LenderAnEquityHolder')
                        ? this.props.capturedECBData.LenderAnEquityHolder
                        : this.state.isTheLenderAnEquityHolder
                    }
                    onChange={e => {
                      this.setState({ isTheLenderAnEquityHolder: e.target.value})
                      this.props.capturedECBData.isTheLenderAnEquityHolder =
                      e.target.value
                    }}
                    required
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter Is the lender an equity holder? </AvFeedback>
                 </AvGroup>
              </Col>


          
              <Col sm='12'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>What is the level of his holding at the time of loan agreement?</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='whatisTheLevelOfHisHoldingAtTheTimeOfLoanAgreement'
                    id='whatisTheLevelOfHisHoldingAtTheTimeOfLoanAgreement'
                    value={
                      this.props.capturedECBData &&
                      this.props.capturedECBData.hasOwnProperty('whatisLevelOfHisHoldingAtTheTimeOfLoanAgreement')
                        ? this.props.capturedECBData.whatisLevelOfHisHoldingAtTheTimeOfLoanAgreement
                        : this.state.whatisTheLevelOfHisHoldingAtTheTimeOfLoanAgreement
                    }
                    onChange={e => {
                      this.setState({ whatisTheLevelOfHisHoldingAtTheTimeOfLoanAgreement: e.target.value})
                      this.props.capturedECBData.whatisTheLevelOfHisHoldingAtTheTimeOfLoanAgreement =
                      e.target.value
                    }}
                    required
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter What is the level of his holding at the time of loan agreement? </AvFeedback>
                 </AvGroup>
              </Col>

                  
                   
              <Col sm='6'>
              <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Date of incorporation</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <Flatpickr
                    className='form-control'
                    value={dateOfIncorporation2}
                    // value={
                    //   this.props.capturedECBData &&
                    //   this.props.capturedECBData.hasOwnProperty('dateIncorporation2')
                    //     ? new Date(this.props.capturedECBData.dateIncorporation2)
                    //     : dateOfIncorporation2
                    // }
                    onChange={dateOfIncorporation2 => {
                      this.setState({
                        dateOfIncorporation2
                      })

                      this.props.capturedECBData.dateOfIncorporation2 = new Date(
                        this.state.dateOfIncorporation2
                      ).toISOString()
                    }}
                    
                  />
                  <div className='form-control-position'>
                    <Calendar size={15} />{' '}
                  </div>{' '}
                <AvFeedback>Please enter Date of incorporation </AvFeedback>
                 </AvGroup>{' '}
              </Col>
              
              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Amount in Foreign Currency and Indian Rupee</Label>
                <AvGroup className='has-icon-left position-relative'>
                
                  <AvInput
                    type='text'
                    name='amountInForeign'
                    id='amountInForeign'
                    value={
                      this.props.capturedECBData &&
                      this.props.capturedECBData.hasOwnProperty('amountForeign')
                        ? this.props.capturedECBData.amountForeign
                        : this.state.amountInForeign
                    }
                    onChange={e => {
                      this.setState({ amountInForeign: e.target.value})
                      this.props.capturedECBData.amountInForeign =
                      e.target.value
                    }}
                    required
                  />
                
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter Amount in Foreign Currency and Indian Rupee  </AvFeedback>
                 </AvGroup> 
              </Col>

              
              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Rate of interest</Label>
                <AvGroup className='has-icon-left position-relative'>
                
                  <AvInput
                    type='text'
                    name='rateOfInterest'
                    id='rateOfInterest'
                    value={
                      this.props.capturedECBData &&
                      this.props.capturedECBData.hasOwnProperty('rateInterest')
                        ? this.props.capturedECBData.rateInterest
                        : this.state.rateOfInterest
                    }
                    onChange={e => {
                      this.setState({ rateOfInterest: e.target.value})
                      this.props.capturedECBData.rateOfInterest =
                      e.target.value
                    }}
                    required
                  />
                
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter Rate of interest </AvFeedback>
                 </AvGroup> 
              </Col>

              
              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Period of loan</Label>
                <AvGroup className='has-icon-left position-relative'>
                
                  <AvInput
                    type='text'
                    name='periodOfLoan'
                    id='periodOfLoan'
                    value={
                      this.props.capturedECBData &&
                      this.props.capturedECBData.hasOwnProperty('periodLoan')
                        ? this.props.capturedECBData.periodLoan
                        : this.state.periodOfLoan
                    }
                    onChange={e => {
                      this.setState({ periodOfLoan: e.target.value})
                      this.props.capturedECBData.periodOfLoan =
                      e.target.value
                    }}
                    required
                  />
                
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter Period of loan </AvFeedback>
                 </AvGroup> 
              </Col>

              <CardHeader>
          <CardTitle style={{width:"1200px",  marginBottom:"20px"}}>Repayment particulars</CardTitle>
        </CardHeader>
                
              <Col sm='4'>
              <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Date of draw down</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <Flatpickr
                    className='form-control'
                    value={dateOfDrawDown}
                    // value={
                    //   this.props.capturedECBData &&
                    //   this.props.capturedECBData.hasOwnProperty('dateDrawDown')
                    //     ? new Date(this.props.capturedECBData.dateDrawDown)
                    //     : dateOfDrawDown
                    // }
                    onChange={dateOfDrawDown => {
                      this.setState({
                        dateOfDrawDown
                      })

                      this.props.capturedECBData.dateDrawDown = new Date(
                        this.state.dateOfDrawDown
                      ).toISOString()
                    }}
                    
                  />
                  <div className='form-control-position'>
                    <Calendar size={15} />{' '}
                  </div>{' '}
                <AvFeedback>Please enter Date of draw down </AvFeedback>
                 </AvGroup>{' '}
              </Col>
              
                  
           
        <Col sm='4'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Amount in Foreign Currency	</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='amountInForeignCurrency'
                    id='amountInForeignCurrency'
                    value={
                      this.props.capturedECBData &&
                      this.props.capturedECBData.hasOwnProperty('amountForeignCurrency')
                        ? this.props.capturedECBData.amountForeignCurrency
                        : this.state.amountInForeignCurrency
                    }
                    onChange={e => {
                      this.setState({ amountInForeignCurrency: e.target.value})
                      this.props.capturedECBData.amountInForeignCurrency =
                      e.target.value
                    }}
                    required
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter Amount in Foreign Currency </AvFeedback>
                 </AvGroup>
              </Col>
                  
           
        <Col sm='4'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Amount in INR</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='amountInInr'
                    id='amountInInr'
                    value={
                      this.props.capturedECBData &&
                      this.props.capturedECBData.hasOwnProperty('amountInr')
                        ? this.props.capturedECBData.amountInr
                        : this.state.amountInInr
                    }
                    onChange={e => {
                      this.setState({ amountInInr: e.target.value})
                      this.props.capturedECBData.amountInInr =
                      e.target.value
                    }}
                    required
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter Amount in INR </AvFeedback>
                 </AvGroup>
              </Col>


                     


              <Col sm='12'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Details of draw down</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='detailsOfDrawDown'
                    id='detailsOfDrawDown'
                    value={
                      this.props.capturedECBData &&
                      this.props.capturedECBData.hasOwnProperty('detailsDrawDown')
                        ? this.props.capturedECBData.detailsDrawDown
                        : this.state.detailsOfDrawDown
                    }
                    onChange={e => {
                      this.setState({ detailsOfDrawDown: e.target.value})
                      this.props.capturedECBData.detailsOfDrawDown =
                      e.target.value
                    }}
                    required
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter Details of draw down </AvFeedback>
                 </AvGroup>
              </Col>

              <Col sm='12'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Details of LRN Number - application and receipt</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='detailsOfLRNno'
                    id='detailsOfLRNno'
                    value={
                      this.props.capturedECBData &&
                      this.props.capturedECBData.hasOwnProperty('detailsLRNno')
                        ? this.props.capturedECBData.detailsLRNno
                        : this.state.detailsOfLRNno
                    }
                    onChange={e => {
                      this.setState({ detailsOfLRNno: e.target.value})
                      this.props.capturedECBData.detailsOfLRNno =
                      e.target.value
                    }}
                    required
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter Details of LRN Number - application and receipt </AvFeedback>
                 </AvGroup>
              </Col>

              <Col sm='12'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Details of ECB 2 returns submitted; Period of return: Date of submission</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='detailsOfEcb2returnsSubmittedandPeriodOfReturnandDateOfSubmission'
                    id='detailsOfEcb2returnsSubmittedandPeriodOfReturnandDateOfSubmission'
                    value={
                      this.props.capturedECBData &&
                      this.props.capturedECBData.hasOwnProperty('detailsEcb2returnsSubmittedandPeriodOfReturnandDateOfSubmission')
                        ? this.props.capturedECBData.detailsEcb2returnsSubmittedandPeriodOfReturnandDateOfSubmission
                        : this.state.detailsOfEcb2returnsSubmittedandPeriodOfReturnandDateOfSubmission
                    }
                    onChange={e => {
                      this.setState({ detailsOfEcb2returnsSubmittedandPeriodOfReturnandDateOfSubmission: e.target.value})
                      this.props.capturedECBData.detailsOfEcb2returnsSubmittedandPeriodOfReturnandDateOfSubmission =
                      e.target.value
                    }}
                    required
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter Details of ECB 2 returns submitted; Period of return: Date of submission </AvFeedback>
                 </AvGroup>
              </Col>

              <Col sm='12'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Details of Utilization of ECB in Foreign Currency and Indian Rupee</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='detailsOfUtilizationOfEcbInForeignCurrencyAndIndianRupee'
                    id='detailsOfUtilizationOfEcbInForeignCurrencyAndIndianRupee'
                    value={
                      this.props.capturedECBData &&
                      this.props.capturedECBData.hasOwnProperty('detailsUtilizationOfEcbInForeignCurrencyAndIndianRupee')
                        ? this.props.capturedECBData.detailsUtilizationOfEcbInForeignCurrencyAndIndianRupee
                        : this.state.detailsOfUtilizationOfEcbInForeignCurrencyAndIndianRupee
                    }
                    onChange={e => {
                      this.setState({ detailsOfUtilizationOfEcbInForeignCurrencyAndIndianRupee: e.target.value})
                      this.props.capturedECBData.detailsOfUtilizationOfEcbInForeignCurrencyAndIndianRupee =
                      e.target.value
                    }}
                    required
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter Details of Utilization of ECB in Foreign Currency and Indian Rupee </AvFeedback>
                 </AvGroup>
              </Col>

              <Col sm='12'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Nature of contravention and reasons for the contravention</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='natureOfContraventionandReasonsForTheContravention'
                    id='natureOfContraventionandReasonsForTheContravention'
                    value={
                      this.props.capturedECBData &&
                      this.props.capturedECBData.hasOwnProperty('natureContraventionandReasonsForTheContravention')
                        ? this.props.capturedECBData.natureContraventionandReasonsForTheContravention
                        : this.state.natureOfContraventionandReasonsForTheContravention
                    }
                    onChange={e => {
                      this.setState({ natureOfContraventionandReasonsForTheContravention: e.target.value})
                      this.props.capturedECBData.natureOfContraventionandReasonsForTheContravention =
                      e.target.value
                    }}
                    required
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter Nature of contravention and reasons for the contravention  </AvFeedback>
                 </AvGroup>
              </Col>

              <Col sm='12'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>All supporting documents may be submitted</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='allSupportingDocumentsMatBeSubmitted'
                    id='allSupportingDocumentsMatBeSubmitted'
                    value={
                      this.props.capturedECBData &&
                      this.props.capturedECBData.hasOwnProperty('allSupportingDocumentsMaySubmitted')
                        ? this.props.capturedECBData.allSupportingDocumentsMaySubmitted
                        : this.state.allSupportingDocumentsMatBeSubmitted
                    }
                    onChange={e => {
                      this.setState({ allSupportingDocumentsMatBeSubmitted: e.target.value})
                      this.props.capturedECBData.allSupportingDocumentsMatBeSubmitted =
                      e.target.value
                    }}
                    required
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter All supporting documents may be submitted </AvFeedback>
                 </AvGroup>
              </Col>

            </Row>
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default Module8Form
