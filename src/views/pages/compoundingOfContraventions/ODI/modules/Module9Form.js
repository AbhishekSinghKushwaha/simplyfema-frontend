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
  AvForm,
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







class Module9Form extends React.Component {
  constructor(props){
    super(props)
  
  } 

  state = {
    collapse: true,
    isChecked: false,
    basicPicker: new Date(),
    dateOfIncorporation: new Date(),
    dOIofOverseasEntity: new Date(),
    dateOfReciept: new Date(),
    nameOfTheApplicant: '',
    incomeTaxPan: '',
    natureOfActivitiesUnderTaken: '',
    nameOfOverseasEntity: '',
    natureOfActivitiesUnderTakenByOverseasEntity: '',
    natureOfEntityWOSorJV: '',
    detailsOfRemittanceSentandDateOfRemittanceandAmountInFCYandInINR: '',
    detailsOfOtherFinancialCommitment: '',
    detailsOfUINAppliedAndRecieved: '',
    approvalOfOtherRegulatorsIfRequired: '',
    detailsOfAPRSubmitted: '',
    natureOfContraventionsAndReasonForTheContravention: '',
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
    this.props.capturedODIData.incomeTaxPan = e.target.value
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
    let { basicPicker, dateOfIncorporation, dOIofOverseasEntity, dateOfReciept } = this.state
    const {errors} = this.state;
    return (
      <Card>
        <CardHeader>
          <CardTitle>Overseas Direct Investments</CardTitle>
        </CardHeader>
        <CardBody>
          <div>                       
            <Row>
              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Name of the applicant</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='nameOfTheApplicant'
                    id='nameOfTheApplicant'
                    value={
                      this.props.capturedODIData &&
                      this.props.capturedODIData.hasOwnProperty('nameTheApplicant')
                        ? this.props.capturedODIData.nameTheApplicant
                        : this.state.nameOfTheApplicant
                    }
                    onChange={e => {
                      this.setState({ nameOfTheApplicant: e.target.value})
                      this.props.capturedODIData.nameOfTheApplicant =
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
                    //   this.props.capturedODIData &&
                    //   this.props.capturedODIData.hasOwnProperty('dateIncorporationodi')
                    //     ? new Date(this.props.capturedODIData.dateIncorporationodi)
                    //     : dateOfIncorporation
                    // }
                    onChange={dateOfIncorporation => {
                      this.setState({
                        dateOfIncorporation
                      })

                      this.props.capturedODIData.dateIncorporationodi = new Date(
                        this.state.dateOfIncorporation
                      ).toISOString()
                    }}
                    required
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
                      this.props.capturedODIData &&
                      this.props.capturedODIData.hasOwnProperty('incometaxPan')
                        ? this.props.capturedODIData.incometaxPan
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
                    name='natureOfActivitiesUnderTaken'
                    id='natureOfActivitiesUnderTaken'
                    value={
                      this.props.capturedODIData &&
                      this.props.capturedODIData.hasOwnProperty('natureActivitiesUnderTaken')
                        ? this.props.capturedODIData.natureActivitiesUnderTaken
                        : this.state.natureOfActivitiesUnderTaken
                    }
                    onChange={e => {
                      this.setState({ natureOfActivitiesUnderTaken: e.target.value})
                      this.props.capturedODIData.natureOfActivitiesUnderTaken =
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

              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Name of Overseas entity</Label>
                <AvGroup className='has-icon-left position-relative'>
                
                  <AvInput
                    type='text'
                    name='nameOfOverseasEntity'
                    id='nameOfOverseasEntity'
                    value={
                      this.props.capturedODIData &&
                      this.props.capturedODIData.hasOwnProperty('nameOverseasEntity')
                        ? this.props.capturedODIData.nameOverseasEntity
                        : this.state.nameOfOverseasEntity
                    }
                    onChange={e => {
                      this.setState({ nameOfOverseasEntity: e.target.value})
                      this.props.capturedODIData.nameOfOverseasEntity =
                      e.target.value
                    }}
                    required
                  />
                
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter Name of Overseas entity </AvFeedback>
                </AvGroup> 
              </Col>

              <Col sm='6'>
              <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Date of incorporation of overseas entity</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <Flatpickr
                    className='form-control'
                    value={dOIofOverseasEntity}
                    // value={
                    //   this.props.capturedODIData &&
                    //   this.props.capturedODIData.hasOwnProperty('dOIOverseasEntity')
                    //     ? new Date(this.props.capturedODIData.dOIOverseasEntity)
                    //     : dOIofOverseasEntity
                    // }
                   onChange={dOIofOverseasEntity => {
                      this.setState({
                        dOIofOverseasEntity
                      })

                      this.props.capturedODIData.dOIofOverseasEntity = new Date(
                        this.state.dOIofOverseasEntity
                      ).toISOString()
                    }}
                    required
                  />
                  <div className='form-control-position'>
                    <Calendar size={15} />{' '}
                  </div>{' '}
                <AvFeedback>Please enter Date of incorporation of overseas entity </AvFeedback>
                </AvGroup>{' '}
              </Col>
                     

              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Nature of activities under taken by overseas entity</Label>
                <AvGroup className='has-icon-left position-relative'>
                
                  <AvInput
                    type='text'
                    name='natureOfActivitiesUnderTakenByOverseasEntity'
                    id='natureOfActivitiesUnderTakenByOverseasEntity'
                    value={
                      this.props.capturedODIData &&
                      this.props.capturedODIData.hasOwnProperty('natureActivitiesUnderTakenByOverseasEntity')
                        ? this.props.capturedODIData.natureActivitiesUnderTakenByOverseasEntity
                        : this.state.natureOfActivitiesUnderTakenByOverseasEntity
                    }
                    onChange={e => {
                      this.setState({ natureOfActivitiesUnderTakenByOverseasEntity: e.target.value})
                      this.props.capturedODIData.natureOfActivitiesUnderTakenByOverseasEntity =
                      e.target.value
                    }}
                    required
                  />
                
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter Nature of activities under taken by overseas entity </AvFeedback>
                </AvGroup> 
              </Col>


              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Nature of entity - WOS / JV</Label>
                <AvGroup className='has-icon-left position-relative'>
                
                  <AvInput
                    type='text'
                    name='natureOfEntityWOSorJV'
                    id='natureOfEntityWOSorJV'
                    value={
                      this.props.capturedODIData &&
                      this.props.capturedODIData.hasOwnProperty('natureEntityWOSorJV')
                        ? this.props.capturedODIData.natureEntityWOSorJV
                        : this.state.natureOfEntityWOSorJV
                    }
                    onChange={e => {
                      this.setState({ natureOfEntityWOSorJV: e.target.value})
                      this.props.capturedODIData.natureOfEntityWOSorJV =
                      e.target.value
                    }}
                    required
                  />
                
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter Nature of entity - WOS / JV </AvFeedback>
                </AvGroup> 
              </Col>


              <Col sm='12'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Details of remittance sent - Date of remittance; Amount in FCY and in INR</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='detailsOfRemittanceSentandDateOfRemittanceandAmountInFCYandInINR'
                    id='detailsOfRemittanceSentandDateOfRemittanceandAmountInFCYandInINR'
                    value={
                      this.props.capturedODIData &&
                      this.props.capturedODIData.hasOwnProperty('detailsRemittanceSentandDateOfRemittanceandAmountInFCYandInINR')
                        ? this.props.capturedODIData.detailsRemittanceSentandDateOfRemittanceandAmountInFCYandInINR
                        : this.state.detailsOfRemittanceSentandDateOfRemittanceandAmountInFCYandInINR
                    }
                    onChange={e => {
                      this.setState({ detailsOfRemittanceSentandDateOfRemittanceandAmountInFCYandInINR: e.target.value})
                      this.props.capturedODIData.detailsOfRemittanceSentandDateOfRemittanceandAmountInFCYandInINR =
                      e.target.value
                    }}
                    required
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter Details of remittance sent - Date of remittance; Amount in FCY and in INR </AvFeedback>
                </AvGroup>
              </Col>
              
           


              <Col sm='12'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Details of other financial Commitment</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='detailsOfOtherFinancialCommitment'
                    id='detailsOfOtherFinancialCommitment'
                    value={
                      this.props.capturedODIData &&
                      this.props.capturedODIData.hasOwnProperty('detailsOtherFinancialCommitment')
                        ? this.props.capturedODIData.detailsOtherFinancialCommitment
                        : this.state.detailsOfOtherFinancialCommitment
                    }
                    onChange={e => {
                      this.setState({ detailsOfOtherFinancialCommitment: e.target.value})
                      this.props.capturedODIData.detailsOfOtherFinancialCommitment =
                      e.target.value
                    }}
                    required
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter Details of other financial Commitment </AvFeedback>
                </AvGroup>
              </Col>
              
           


              <Col sm='12'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Details of UIN applied and received</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='detailsOfUINAppliedAndRecieved'
                    id='detailsOfUINAppliedAndRecieved'
                    value={
                      this.props.capturedODIData &&
                      this.props.capturedODIData.hasOwnProperty('detailsUINAppliedAndRecieved')
                        ? this.props.capturedODIData.detailsUINAppliedAndRecieved
                        : this.state.detailsOfUINAppliedAndRecieved
                    }
                    onChange={e => {
                      this.setState({ detailsOfUINAppliedAndRecieved: e.target.value})
                      this.props.capturedODIData.detailsOfUINAppliedAndRecieved =
                      e.target.value
                    }}
                    required
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter Details of UIN applied and received </AvFeedback>
                </AvGroup>
              </Col>
              
           

              <Col sm='6'>
              <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Date of receipt of share certificate</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <Flatpickr
                    className='form-control'
                    value={dateOfReciept}
                    // value={
                    //   this.props.capturedODIData &&
                    //   this.props.capturedODIData.hasOwnProperty('dateReciept')
                    //     ? new Date(this.props.capturedODIData.dateReciept)
                    //     : dateOfReciept
                    // }
                    onChange={dateOfReciept => {
                      this.setState({
                        dateOfReciept
                      })

                      this.props.capturedODIData.dateReciept = new Date(
                        this.state.dateOfReciept
                      ).toISOString()
                    }}
                    required
                  />
                  <div className='form-control-position'>
                    <Calendar size={15} />{' '}
                  </div>{' '}
                <AvFeedback>Please enter Date of receipt of share certificate </AvFeedback>
                </AvGroup>{' '}
              </Col>
                     

              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Approval of other regulators if required</Label>
                <AvGroup className='has-icon-left position-relative'>
                
                  <AvInput
                    type='text'
                    name='approvalOfOtherRegulatorsIfRequired'
                    id='approvalOfOtherRegulatorsIfRequired'
                    value={
                      this.props.capturedODIData &&
                      this.props.capturedODIData.hasOwnProperty('approvalOtherRegulatorsIfRequired')
                        ? this.props.capturedODIData.approvalOtherRegulatorsIfRequired
                        : this.state.approvalOfOtherRegulatorsIfRequired
                    }
                    onChange={e => {
                      this.setState({ approvalOfOtherRegulatorsIfRequired: e.target.value})
                      this.props.capturedODIData.approvalOfOtherRegulatorsIfRequired =
                      e.target.value
                    }}
                    required
                  />
                
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter Approval of other regulators if required </AvFeedback>
                </AvGroup> 
              </Col>


              <Col sm='12'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Details of APRs submitted: For the period ended; date of submission</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='detailsOfAPRSubmitted'
                    id='detailsOfAPRSubmitted'
                    value={
                      this.props.capturedODIData &&
                      this.props.capturedODIData.hasOwnProperty('detailsAPRSubmitted')
                        ? this.props.capturedODIData.detailsAPRSubmitted
                        : this.state.detailsOfAPRSubmitted
                    }
                    onChange={e => {
                      this.setState({ detailsOfAPRSubmitted: e.target.value})
                      this.props.capturedODIData.detailsOfAPRSubmitted =
                      e.target.value
                    }}
                    required
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter Details of APRs submitted: For the period ended; date of submission </AvFeedback>
                </AvGroup>
              </Col>
              
              <Col sm='12'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Nature of contravention and reasons for the contravention</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='natureOfContraventionsAndReasonForTheContravention'
                    id='natureOfContraventionsAndReasonForTheContravention'
                    value={
                      this.props.capturedODIData &&
                      this.props.capturedODIData.hasOwnProperty('natureContraventionsAndReasonForTheContravention')
                        ? this.props.capturedODIData.natureContraventionsAndReasonForTheContravention
                        : this.state.natureOfContraventionsAndReasonForTheContravention
                    }
                    onChange={e => {
                      this.setState({ natureOfContraventionsAndReasonForTheContravention: e.target.value})
                      this.props.capturedODIData.natureOfContraventionsAndReasonForTheContravention =
                      e.target.value
                    }}
                    required
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter Nature of contravention and reasons for the contravention </AvFeedback>
                </AvGroup>
              </Col>
              
              <Col sm='12'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>All supporting documents may be submitted</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='allSupportingDocumentsMayBeSubmitted'
                    id='allSupportingDocumentsMayBeSubmitted'
                    value={
                      this.props.capturedODIData &&
                      this.props.capturedODIData.hasOwnProperty('allSupportingDocumentsMaySubmitted')
                        ? this.props.capturedODIData.allSupportingDocumentsMaySubmitted
                        : this.state.allSupportingDocumentsMayBeSubmitted
                    }
                    onChange={e => {
                      this.setState({ allSupportingDocumentsMayBeSubmitted: e.target.value})
                      this.props.capturedODIData.allSupportingDocumentsMayBeSubmitted =
                      e.target.value
                    }}
                    required
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please enter All supporting documents may be submitted</AvFeedback>
                </AvGroup>
              </Col>
              

            </Row>
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default Module9Form
