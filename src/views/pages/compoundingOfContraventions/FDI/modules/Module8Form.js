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
          <CardTitle>Exports of Goods and Services</CardTitle>
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
                <AvFeedback>Please enter Name of the applicant </AvFeedback>
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

                      this.props.capturedFDIData.dateOfIncorporation = new Date(
                        this.state.dateOfIncorporation
                      ).toDateString()
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
                    id='nameVerticalIcons'
                  />
                
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter Income-tax PAN </AvFeedback>
                 </AvGroup> 
              </Col>

              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Nature of activities under taken (Please give NIC code - 1987)</Label>
                <AvGroup className='has-icon-left position-relative'>
                
                  <AvInput
                    type='text'
                    name='natureOfActivitiesUnderTakenNicCode'
                    id='nameVerticalIcons'
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
                    id='nameVerticalIcons'
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
                    id='nameVerticalIcons'
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
                    id='nameVerticalIcons'
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
                    id='nameVerticalIcons'
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
                    id='nameVerticalIcons'
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
                    value={basicPicker}
                    onChange={dateOfIncorporation2 => {
                      this.setState({
                        dateOfIncorporation2
                      })

                      this.props.capturedFDIData.dateOfIncorporation2 = new Date(
                        this.state.dateOfIncorporation2
                      ).toDateString()
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
                    name='name'
                    id='nameVerticalIcons'
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
                    id='nameVerticalIcons'
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
                    id='nameVerticalIcons'
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
                    value={basicPicker}
                    onChange={dateOfDrawDown => {
                      this.setState({
                        dateOfDrawDown
                      })

                      this.props.capturedFDIData.dateOfDrawDown = new Date(
                        this.state.dateOfDrawDown
                      ).toDateString()
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
                    id='nameVerticalIcons'
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
                    id='nameVerticalIcons'
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
                    id='nameVerticalIcons'
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
                    id='nameVerticalIcons'
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
                    id='nameVerticalIcons'
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
                    id='nameVerticalIcons'
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
                    id='nameVerticalIcons'
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
                    id='nameVerticalIcons'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter All supporting documents may be submitted </AvFeedback>
                 </AvGroup>
              </Col>

            </Row>
          </Form>
        </CardBody>
      </Card>
    )
  }
}
export default Module8Form
