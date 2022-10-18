//fdi

import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Form,
  Table,
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







class Module7Form extends React.Component {
  constructor(props){
    super(props)
  
  } 

  state = {
    collapse: true,
    isChecked: false,
    basicPicker: new Date(),
    dateOfReportingRbiTA: new Date(),
    dateOfIncorporation: new Date(),
    reportRbiTA: new Date(),
    dateOfAllotmentOfSharesTB : new Date(),
    dateOfReportingRBITB: new Date(),
    dateOfRecieptTC: new Date(),
    dateOfRefundTC: new Date(),
    rbiLetterTC :  new Date(),
    dateOfFillingROC :  new Date(),
    dateTI :  new Date(),
    nameofApplicant: '',
    incomeTaxPan: '',
    natureOfActivitiesUnderTakenNicCode: '',
    briefParticularsAboutTheForeignInvestor: '',
    detailsOfForrignInwardRemittancesRecievedByApplicantCompanyFromDateOfIncorporationTillDate: '',
    copiesOfBalanceSheetDuringThePeriodOfReceiptOfShareApplicationMoney: '',
    natureOfContraventionAndReasonsForTheContravention: '',
    slNoTA: '',
    TAnameOfRemitter: '',
    TAtotalAmount: '',
    TAdelayIfAny: '',
    TAtotal: '',
    TBnameOfInvestor: '',
    TBnoOfSharesAlloted: '',
    TBamountForWhichSharesAlloted: '',
    TBdelayIfAny: '',
    TBtotal: '',
    TCslNo: '',
    TcnameOfRemitter: '',
    TCtotalAmountINR: '',
    TCExcessShareApplicationMoney: '',
    TCamountInForex: '',
    TCtotal: '',
    ACSlNo: '',
    nameACenterAuthorizationZCapital: '',
    ACwithEffectFrom: '',
    ACdateOfBoardMeeting: '',
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
    this.props.capturedFDIData.incomeTaxPan = e.target.value
}

  handleSwitchChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
    })
  }

  onEntered = () => {
    this.setState({
       status: 'Opened' })
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
      dateOfReportingRbiTA,
      dateOfIncorporation,
      reportRbiTA,
      dateOfAllotmentOfSharesTB,
      dateOfReportingRBITB,
      dateOfRecieptTC,
      dateOfRefundTC,
      rbiLetterTC ,
      dateOfFillingROC,
      dateTI,
    } = this.state
    const {errors} = this.state;

    return (
      <Card>
        <CardHeader>
          <CardTitle>Foreign Direct Investment in India</CardTitle>
        </CardHeader>
        <CardBody>
          <div>                       
            <Row>
              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameofApplicant'>Name of the applicant</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='nameofApplicant'
                    id='nameofApplicant'
                    value={
                      this.props.capturedFDIData &&
                      this.props.capturedFDIData.hasOwnProperty('nameApplicant')
                        ? this.props.capturedFDIData.nameApplicant
                        : this.state.nameofApplicant
                    }
                    onChange={e => {
                      this.setState({ nameofApplicant: e.target.value})
                      this.props.capturedFDIData.nameofApplicant =
                      e.target.value
                    }}
                    required
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please Enter  Name of the applicant</AvFeedback>
                </AvGroup>
              </Col>
             
              
              <Col sm='6'>
              <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Date of incorporation</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <Flatpickr
                    className='form-control'
                    value={dateOfIncorporation}
                    // value={
                    //   this.props.capturedFDIData &&
                    //   this.props.capturedFDIData.hasOwnProperty('dateIncorporationfdi')
                    //     ? new Date(this.props.capturedFDIData.dateIncorporationfdi)
                    //     : dateOfIncorporation
                    // }
                    onChange={dateOfIncorporation => {
                      this.setState({ dateOfIncorporation})
                      this.props.capturedFDIData.dateIncorporationfdi =new Date(
                      this.state.dateOfIncorporation).toISOString()
                    }}
                    
                  />
                  <div className='form-control-position'>
                    <Calendar size={15} />{' '}
                  </div>{' '}
                <AvFeedback>Please Enter Date of incorporation</AvFeedback>
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
                      this.props.capturedFDIData &&
                      this.props.capturedFDIData.hasOwnProperty('incometaxPan')
                        ? this.props.capturedFDIData.incometaxPan
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
                {/* <AvFeedback>Please Enter Income-tax PAN</AvFeedback> */}
                </AvGroup> 
              </Col>

              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Nature of activities under taken (Please give NIC code - 1987/2008)</Label>
                <AvGroup className='has-icon-left position-relative'>
                
                  <AvInput
                    type='text'
                    name='natureOfActivitiesUnderTakenNicCode'
                    id='natureOfActivitiesUnderTakenNicCode'
                    value={
                      this.props.capturedFDIData &&
                      this.props.capturedFDIData.hasOwnProperty('natureActivitiesUnderTakenNicCode')
                        ? this.props.capturedFDIData.natureActivitiesUnderTakenNicCode
                        : this.state.natureOfActivitiesUnderTakenNicCode
                    }
                    onChange={e => {
                      this.setState({ natureOfActivitiesUnderTakenNicCode: e.target.value})
                      this.props.capturedFDIData.natureOfActivitiesUnderTakenNicCode =
                      e.target.value
                    }}
                    required
                  />
                
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please Enter Nature of activities under taken (Please give NIC code - 1987/2008)</AvFeedback>
                </AvGroup> 
              </Col>

                     
              <Col sm='12'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Brief particulars about the foreign investor</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='briefParticularsAboutTheForeignInvestor'
                    id='briefParticularsAboutTheForeignInvestor'
                    value={
                      this.props.capturedFDIData &&
                      this.props.capturedFDIData.hasOwnProperty('briefParticularsAboutForeignInvestor')
                        ? this.props.capturedFDIData.briefParticularsAboutForeignInvestor
                        : this.state.briefParticularsAboutTheForeignInvestor
                    }
                    onChange={e => {
                      this.setState({ briefParticularsAboutTheForeignInvestor: e.target.value})
                      this.props.capturedFDIData.briefParticularsAboutTheForeignInvestor =
                      e.target.value
                    }}
                    required
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please Enter Brief particulars about the foreign investor</AvFeedback>
                </AvGroup>
              </Col>
              
                     
              <Col sm='12'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Details of foreign inward remittances received by Applicant Company from date of incorporation till date</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='detailsOfForrignInwardRemittancesRecievedByApplicantCompanyFromDateOfIncorporationTillDate'
                    id='detailsOfForrignInwardRemittancesRecievedByApplicantCompanyFromDateOfIncorporationTillDate'
                    value={
                      this.props.capturedFDIData &&
                      this.props.capturedFDIData.hasOwnProperty('detailsForeignInwardRemittancesRecievedByApplicantCompanyFromDateOfIncorporationTillDate')
                        ? this.props.capturedFDIData.detailsForeignInwardRemittancesRecievedByApplicantCompanyFromDateOfIncorporationTillDate
                        : this.state.detailsOfForrignInwardRemittancesRecievedByApplicantCompanyFromDateOfIncorporationTillDate
                    }
                    onChange={e => {
                      this.setState({ detailsOfForrignInwardRemittancesRecievedByApplicantCompanyFromDateOfIncorporationTillDate: e.target.value})
                      this.props.capturedFDIData.detailsOfForrignInwardRemittancesRecievedByApplicantCompanyFromDateOfIncorporationTillDate =
                      e.target.value
                    }}
                    required
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please Enter Details of foreign inward remittances received by Applicant Company from date of incorporation till date</AvFeedback>
                </AvGroup>
              </Col>
              
                     
              <Col sm='12'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Copies of Balance Sheet during the period of receipt of share application money and allotment of shares</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='copiesOfBalanceSheetDuringThePeriodOfReceiptOfShareApplicationMoney'
                    id='copiesOfBalanceSheetDuringThePeriodOfReceiptOfShareApplicationMoney'
                    value={
                      this.props.capturedFDIData &&
                      this.props.capturedFDIData.hasOwnProperty('copiesBalanceSheetDuringThePeriodOfReceiptOfShareApplicationMoney')
                        ? this.props.capturedFDIData.copiesBalanceSheetDuringThePeriodOfReceiptOfShareApplicationMoney
                        : this.state.copiesOfBalanceSheetDuringThePeriodOfReceiptOfShareApplicationMoney
                    }
                    onChange={e => {
                      this.setState({ copiesOfBalanceSheetDuringThePeriodOfReceiptOfShareApplicationMoney: e.target.value})
                      this.props.capturedFDIData.copiesOfBalanceSheetDuringThePeriodOfReceiptOfShareApplicationMoney =
                      e.target.value
                    }}
                    required
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please Enter Copies of Balance Sheet during the period of receipt of share application money and allotment of shares</AvFeedback>
                </AvGroup>
              </Col>
              
                     
              <Col sm='12'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Nature of contravention and reasons for the contravention</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='natureOfContraventionAndReasonsForTheContravention'
                    id='natureOfContraventionAndReasonsForTheContravention'
                    value={
                      this.props.capturedFDIData &&
                      this.props.capturedFDIData.hasOwnProperty('natureContraventionAndReasonsForTheContravention')
                        ? this.props.capturedFDIData.natureContraventionAndReasonsForTheContravention
                        : this.state.natureOfContraventionAndReasonsForTheContravention
                    }
                    onChange={e => {
                      this.setState({ natureOfContraventionAndReasonsForTheContravention: e.target.value})
                      this.props.capturedFDIData.natureOfContraventionAndReasonsForTheContravention =
                      e.target.value
                    }}
                    required
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please Enter Nature of contravention and reasons for the contravention</AvFeedback>
                </AvGroup>
              </Col>

              <CardHeader>
          <CardTitle style={{width:"1200px",  marginBottom:"20px"}}>Table A</CardTitle>
        </CardHeader>

                  
             <Col sm='12'>
              <React.Fragment>
        <Row>
          <Table responsive bordered striped style={{color:" rgba(60 , 60 , 60 , 0.8)"}} >
            <thead>
              <tr >
                <th style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>Sl. No.</th>
                <th style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}} className=''>
                  <div> Name of Remitter </div>
                </th>
                <th style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}} className=''>
                  <div> Total Amount (INR) </div>
                </th>
                <th style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}} className=''>
                  <div>	Date of Receipt </div>
                </th>
                <th style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}} className=''>
                  <div> Reported to RBI on*</div>
                </th>
                <th style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}} className=''>
                  <div> Delay if any</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td style={{width: '5%' ,border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>
                <AvGroup  className=''>
                          <AvInput
                            type='text'
                            name='slNoTA'
                            id='slNoTA'
                            value={
                              this.props.capturedFDIData &&
                              this.props.capturedFDIData.hasOwnProperty('SlNoTA')
                                ? this.props.capturedFDIData.SlNoTA
                                : this.state.slNoTA
                            }
                            onChange={e => {
                              this.setState({ slNoTA: e.target.value})
                              this.props.capturedFDIData.slNoTA =
                              e.target.value
                            }}
                            required
                          />
                          <div className='form-control-position'>
                            <Edit size={15} />
                          </div>
                    <AvFeedback>Please Enter Sl No</AvFeedback>
                    </AvGroup>
                </td>
                
                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>
                    <AvGroup className='has-icon-left position-relative'>
                          <AvInput
                            type='text'
                            name='TAnameOfRemitter'
                            id='TAnameOfRemitter'
                            value={
                              this.props.capturedFDIData &&
                              this.props.capturedFDIData.hasOwnProperty('TAnameRemitter')
                                ? this.props.capturedFDIData.TAnameRemitter
                                : this.state.TAnameOfRemitter
                            }
                            onChange={e => {
                              this.setState({ TAnameOfRemitter: e.target.value})
                              this.props.capturedFDIData.TAnameOfRemitter =
                              e.target.value
                            }}
                            required
                          />
                          <div className='form-control-position'>
                            <Edit size={15} />
                          </div>
                    <AvFeedback>Please Enter  Name of Remitter</AvFeedback>
                    </AvGroup>
                </td>

                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>
                    <AvGroup className='has-icon-left position-relative'>
                          <AvInput
                            type='text'
                            name='TAtotalAmount'
                            id='TAtotalAmount'
                            value={
                              this.props.capturedFDIData &&
                              this.props.capturedFDIData.hasOwnProperty('TAtotalamount')
                                ? this.props.capturedFDIData.TAtotalamount
                                : this.state.TAtotalAmount
                            }
                            onChange={e => {
                              this.setState({ TAtotalAmount: e.target.value})
                              this.props.capturedFDIData.TAtotalAmount =
                              e.target.value
                            }}
                            required
                          />
                          <div className='form-control-position'>
                            <Edit size={15} />
                          </div>
                    <AvFeedback>Please Enter  Total Amount (INR)</AvFeedback>
                    </AvGroup>
                </td>


                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>
                    <AvGroup className='has-icon-left position-relative'>
                      <Flatpickr
                        className='form-control'
                        value={dateOfReportingRbiTA}
                        // value={
                        //   this.props.capturedFDIData &&
                        //   this.props.capturedFDIData.hasOwnProperty('dateReportingRbiTA')
                        //     ? new Date(this.props.capturedFDIData.dateReportingRbiTA)
                        //     : dateOfReportingRbiTA
                        // }
                        onChange={dateOfReportingRbiTA => {
                          this.setState({ dateOfReportingRbiTA})
                          this.props.capturedFDIData.dateReportingRbiTA =new Date(
                          this.state.dateOfReportingRbiTA).toISOString()
                        }}
                        
                      />
                      <div className='form-control-position'>
                        <Calendar size={15} />{' '}
                      </div>{' '}
                    <AvFeedback>Please Enter Date of Receipt</AvFeedback>
                    </AvGroup>{' '}
                </td>
                
                        

                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>
                    <AvGroup className='has-icon-left position-relative'>
                      <Flatpickr
                        className='form-control'
                        value={reportRbiTA}
                        // value={
                        //   this.props.capturedFDIData &&
                        //   this.props.capturedFDIData.hasOwnProperty('reportrbiTA')
                        //     ? new Date(this.props.capturedFDIData.reportrbiTA)
                        //     : reportRbiTA
                        // }
                        onChange={reportRbiTA => {
                          this.setState({ reportRbiTA})
                          this.props.capturedFDIData.reportrbiTA =new Date(
                          this.state.reportRbiTA).toISOString()
                        }}
                        
                      />
                      <div className='form-control-position'>
                        <Calendar size={15} />{' '}
                      </div>{' '}
                    <AvFeedback>Please Enter Reported to RBI on*</AvFeedback>
                    </AvGroup>{' '}
                </td>
                
                        
                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>
                    <AvGroup className='has-icon-left position-relative'>
                          <AvInput
                            type='text'
                            name='TAdelayIfAny'
                            id='TAdelayIfAny'
                            value={
                              this.props.capturedFDIData &&
                              this.props.capturedFDIData.hasOwnProperty('TAdelayifany')
                                ? this.props.capturedFDIData.TAdelayifany
                                : this.state.TAdelayIfAny
                            }
                            onChange={e => {
                              this.setState({ TAdelayIfAny: e.target.value})
                              this.props.capturedFDIData.TAdelayIfAny =
                              e.target.value
                            }}
                            required
                          />
                          <div className='form-control-position'>
                            <Edit size={15} />
                          </div>
                    <AvFeedback>Please Enter Delay if any</AvFeedback>
                    </AvGroup>
                </td>


               
              </tr>


              <tr>
                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}></td>
                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)' , textAlign: 'center'}} >Total</td>
                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>
                <AvGroup className='position-relative'>
                          <AvInput
                           disabled="true"
                            type='text'
                            name='TAtotal'
                            id='TAtotal'
                            value={
                              this.props.capturedFDIData &&
                              this.props.capturedFDIData.hasOwnProperty('TATotal')
                                ? this.props.capturedFDIData.TATotal
                                : this.state.TAtotal
                            }
                            onChange={e => {
                              this.setState({ TAtotal: e.target.value})
                              this.props.capturedFDIData.TAtotal =
                              e.target.value
                            }}
                            
                          />
                         
                  <AvFeedback>Please Enter Total </AvFeedback>
                  </AvGroup>
                </td>
                
                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}></td>
                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}></td>
                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}></td>
              </tr>

              </tbody>
              </Table>
          </Row>
        </React.Fragment>
        </Col>
              
        <CardHeader>
          <CardTitle style={{width:"1200px",  marginBottom:"20px"}}>Table B</CardTitle>
        </CardHeader>

                  
             <Col sm='12'>
              <React.Fragment>
        <Row>
          <Table borderless responsive striped style={{color:" rgba(60 , 60 , 60 , 0.8)"}} >
            <thead>
              <tr>
                <th style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>Name of Investor	</th>
                <th style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}} className=''>
                  <div> Date of allotment of shares </div>
                </th>
                <th style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}} className=''>
                  <div> Number of shares allotted	</div>
                </th>
                <th style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}} className=''>
                  <div>	Amount for which shares allotted </div>
                </th>
                <th style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}} className=''>
                  <div> Date of reporting to RBI*</div>
                </th>
                <th style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}} className=''>
                  <div> Delay if any</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>
                <AvGroup className='has-icon-left position-relative'>
                          <AvInput
                            type='text'
                            name='TBnameOfInvestor'
                            id='TBnameOfInvestor'
                            value={
                              this.props.capturedFDIData &&
                              this.props.capturedFDIData.hasOwnProperty('TBnameofInvestor')
                                ? this.props.capturedFDIData.TBnameofInvestor
                                : this.state.TBnameOfInvestor
                            }
                            onChange={e => {
                              this.setState({ TBnameOfInvestor: e.target.value})
                              this.props.capturedFDIData.TBnameOfInvestor =
                              e.target.value
                            }}
                            required
                          />
                          <div className='form-control-position'>
                            <Edit size={15} />
                          </div>
                    <AvFeedback>Please Enter Name of Investor</AvFeedback>
                    </AvGroup>
                </td>
                
                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>
                    <AvGroup className='has-icon-left position-relative'>
                      <Flatpickr
                        className='form-control'
                        value={dateOfAllotmentOfSharesTB}
                        // value={
                        //   this.props.capturedFDIData &&
                        //   this.props.capturedFDIData.hasOwnProperty('dateAllotmentOfSharesTB')
                        //     ? new Date(this.props.capturedFDIData.dateAllotmentOfSharesTB)
                        //     : dateOfAllotmentOfSharesTB
                        // }
                        onChange={dateOfAllotmentOfSharesTB => {
                          this.setState({ dateOfAllotmentOfSharesTB})
                          this.props.capturedFDIData.dateAllotmentOfSharesTB =new Date(
                          this.state.dateOfAllotmentOfSharesTB).toISOString()
                        }}
                        
                      />
                      <div className='form-control-position'>
                        <Calendar size={15} />{' '}
                      </div>{' '}
                    <AvFeedback>Please Enter Date of allotment of shares </AvFeedback>
                    </AvGroup>{' '}
                </td>
                
                    
                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>
                    <AvGroup className='has-icon-left position-relative'>
                          <AvInput
                            type='text'
                            name='TBnoOfSharesAlloted'
                            id='TBnoOfSharesAlloted'
                            value={
                              this.props.capturedFDIData &&
                              this.props.capturedFDIData.hasOwnProperty('TBnoSharesAlloted')
                                ? this.props.capturedFDIData.TBnoSharesAlloted
                                : this.state.TBnoOfSharesAlloted
                            }
                            onChange={e => {
                              this.setState({ TBnoOfSharesAlloted: e.target.value})
                              this.props.capturedFDIData.TBnoOfSharesAlloted =
                              e.target.value
                            }}
                            required
                          />
                          <div className='form-control-position'>
                            <Edit size={15} />
                          </div>
                    <AvFeedback>Please Enter Number of shares allotted</AvFeedback>
                    </AvGroup>
                </td>

                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>
                    <AvGroup className='has-icon-left position-relative'>
                          <AvInput
                            type='text'
                            name='TBamountForWhichSharesAlloted'
                            id='TBamountForWhichSharesAlloted'
                            value={
                              this.props.capturedFDIData &&
                              this.props.capturedFDIData.hasOwnProperty('TBamountWhichSharesAlloted')
                                ? this.props.capturedFDIData.TBamountWhichSharesAlloted
                                : this.state.TBamountWhichSharesAlloted
                            }
                            onChange={e => {
                              this.setState({ TBamountWhichSharesAlloted: e.target.value})
                              this.props.capturedFDIData.TBamountWhichSharesAlloted =
                              e.target.value
                            }}
                            required
                          />
                          <div className='form-control-position'>
                            <Edit size={15} />
                          </div>
                    <AvFeedback>Please Enter Amount for which shares allotted </AvFeedback>
                    </AvGroup>
                </td>

    

                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>
                    <AvGroup className='has-icon-left position-relative'>
                      <Flatpickr
                        className='form-control'
                        value={dateOfReportingRBITB}
                        // value={
                        //   this.props.capturedFDIData &&
                        //   this.props.capturedFDIData.hasOwnProperty('dateReportingRBITB')
                        //     ? new Date(this.props.capturedFDIData.dateReportingRBITB)
                        //     : dateOfReportingRBITB
                        // }
                        onChange={dateOfReportingRBITB => {
                          this.setState({ dateOfReportingRBITB})
                          this.props.capturedFDIData.dateReportingRBITB =new Date(
                          this.state.dateOfReportingRBITB).toISOString()
                        }}
                        
                      />
                      <div className='form-control-position'>
                        <Calendar size={15} />{' '}
                      </div>{' '}
                    <AvFeedback>Please Enter Date of reporting to RBI*</AvFeedback>
                    </AvGroup>{' '}
                </td>
                
                        
                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>
                    <AvGroup className='has-icon-left position-relative'>
                          <AvInput
                            type='text'
                            name='TBdelayIfAny'
                            id='TBdelayIfAny'
                            value={
                              this.props.capturedFDIData &&
                              this.props.capturedFDIData.hasOwnProperty('TBdelayifany')
                                ? this.props.capturedFDIData.TBdelayifany
                                : this.state.TBdelayIfAny
                            }
                            onChange={e => {
                              this.setState({ TBdelayIfAny: e.target.value})
                              this.props.capturedFDIData.TBdelayIfAny =
                              e.target.value
                            }}
                            required
                          />
                          <div className='form-control-position'>
                            <Edit size={15} />
                          </div>
                    <AvFeedback>Please Enter Delay if any</AvFeedback>
                    </AvGroup>
                </td>


               
              </tr>


              <tr>
                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)' , }}></td>
                <td style={{  border: '1px solid rgba(180 , 180 , 180 , 0.5)',}}></td>
                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)', textAlign:'center', }}>
                Total
                </td>
                
                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)' ,  }}>
                <AvGroup className='position-relative'>
                          <AvInput
                           disabled="true"
                            type='text'
                            name='TBtotal'
                            id='TBtotal'
                            value={
                              this.props.capturedFDIData &&
                              this.props.capturedFDIData.hasOwnProperty('TBTotal')
                                ? this.props.capturedFDIData.TBTotal
                                : this.state.TBtotal
                            }
                            onChange={e => {
                              this.setState({ TBtotal: e.target.value})
                              this.props.capturedFDIData.TBtotal =
                              e.target.value
                            }}
                            
                          />
                         
                <AvFeedback>Please Enter Total</AvFeedback>
                </AvGroup>
                </td>
                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)' , }}></td>
                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)' , }}></td>

              </tr>

              </tbody>
              </Table>
          </Row>
        </React.Fragment>
        </Col>
              
           
              <CardHeader>
          <CardTitle style={{width:"1200px",  marginBottom:"20px"}}>Table C</CardTitle>
        </CardHeader>

                  
             <Col sm='12'>
              <React.Fragment>
        <Row>
          <Table borderless responsive striped style={{color:" rgba(60 , 60 , 60 , 0.8)"}}>
            <thead>
              <tr>
                <th style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>Sl. No.</th>
                <th style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}} className=''>
                  <div> Name of Remitter </div>
                </th>
                <th style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}} className=''>
                  <div> Total Amount (INR) </div>
                </th>
                <th style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}} className=''>
                  <div>	Date of Receipt </div>
                </th>
                <th style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}} className=''>
                  <div> 	Excess share application money</div>
                </th>
                <th style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}} className=''>
                  <div>Date of refund of share application money</div>
                </th>
                <th style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}} className=''>
                  <div>Amount in forex</div>
                </th>
                <th style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}} className=''>
                  <div>RBI approval letter and date</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td style={{width: '5%' ,border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>
                <AvGroup  className=''>
                          <AvInput
                            type='text'
                            name='TCslNo'
                            id='TCslNo'
                            value={
                              this.props.capturedFDIData &&
                              this.props.capturedFDIData.hasOwnProperty('TCSlNo')
                                ? this.props.capturedFDIData.TCSlNo
                                : this.state.TCslNo
                            }
                            onChange={e => {
                              this.setState({ TCslNo: e.target.value})
                              this.props.capturedFDIData.TCslNo =
                              e.target.value
                            }}
                            required
                          />
                          <div className='form-control-position'>
                            <Edit size={15} />
                          </div>
                    <AvFeedback>Please Enter Sl. No.</AvFeedback>
                    </AvGroup>
                </td>
                
                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>
                    <AvGroup className='has-icon-left position-relative'>
                          <AvInput
                            type='text'
                            name='TcnameOfRemitter'
                            id='TcnameOfRemitter'
                            value={
                              this.props.capturedFDIData &&
                              this.props.capturedFDIData.hasOwnProperty('TcnameRemitter')
                                ? this.props.capturedFDIData.TcnameRemitter
                                : this.state.TcnameOfRemitter
                            }
                            onChange={e => {
                              this.setState({ TcnameOfRemitter: e.target.value})
                              this.props.capturedFDIData.TcnameOfRemitter =
                              e.target.value
                            }}
                            required
                          />
                          <div className='form-control-position'>
                            <Edit size={15} />
                          </div>
                    <AvFeedback>Please Enter Name of Remitter</AvFeedback>
                    </AvGroup>
                </td>

                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>
                    <AvGroup className='has-icon-left position-relative'>
                          <AvInput
                            type='text'
                            name='TCtotalAmountINR'
                            id='TCtotalAmountINR'
                            value={
                              this.props.capturedFDIData &&
                              this.props.capturedFDIData.hasOwnProperty('TCtotalamountINR')
                                ? this.props.capturedFDIData.TCtotalamountINR
                                : this.state.TCtotalAmountINR
                            }
                            onChange={e => {
                              this.setState({ TCtotalAmountINR: e.target.value})
                              this.props.capturedFDIData.TCtotalAmountINR =
                              e.target.value
                            }}
                            required
                          />
                          <div className='form-control-position'>
                            <Edit size={15} />
                          </div>
                    <AvFeedback>Please Enter Total Amount (INR)</AvFeedback>
                    </AvGroup>
                </td>


                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>
                    <AvGroup className='has-icon-left position-relative'>
                      <Flatpickr
                        className='form-control'
                        value={dateOfRecieptTC}
                        // value={
                        //   this.props.capturedFDIData &&
                        //   this.props.capturedFDIData.hasOwnProperty('dateRecieptTC')
                        //     ? new Date(this.props.capturedFDIData.dateRecieptTC)
                        //     : dateOfRecieptTC
                        // }
                        onChange={dateOfRecieptTC => {
                          this.setState({ dateOfRecieptTC})
                          this.props.capturedFDIData.dateRecieptTC =new Date(
                          this.state.dateOfRecieptTC).toISOString()
                        }}
                        
                        />
                      <div className='form-control-position'>
                        <Calendar size={15} />{' '}
                      </div>{' '}
                    <AvFeedback>Please Enter Date of Receipt</AvFeedback>
                    </AvGroup>{' '}
                </td>

                
                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>
                    <AvGroup className='has-icon-left position-relative'>
                          <AvInput
                            type='text'
                            name='TCExcessShareApplicationMoney'
                            id='TCExcessShareApplicationMoney'
                            value={
                              this.props.capturedFDIData &&
                              this.props.capturedFDIData.hasOwnProperty('TCExcessshareApplicationMoney')
                                ? this.props.capturedFDIData.TCExcessshareApplicationMoney
                                : this.state.TCExcessShareApplicationMoney
                            }
                            onChange={e => {
                              this.setState({ TCExcessShareApplicationMoney: e.target.value})
                              this.props.capturedFDIData.TCExcessShareApplicationMoney =
                              e.target.value
                            }}
                            required
                          />
                          <div className='form-control-position'>
                            <Edit size={15} />
                          </div>
                    <AvFeedback>Please Enter Excess share application money</AvFeedback>
                    </AvGroup>
                </td>


                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>
                    <AvGroup className='has-icon-left position-relative'>
                      <Flatpickr
                        className='form-control'
                        value={dateOfRefundTC}
                        // value={
                        //   this.props.capturedFDIData &&
                        //   this.props.capturedFDIData.hasOwnProperty('dateRefundTC')
                        //     ? new Date(this.props.capturedFDIData.dateRefundTC)
                        //     : dateOfRefundTC
                        // }
                        onChange={dateOfRefundTC => {
                          this.setState({ dateOfRefundTC})
                          this.props.capturedFDIData.dateRefundTC =new Date(
                          this.state.dateOfRefundTC).toISOString()
                        }}
                        
                        />
                            

                      <div className='form-control-position'>
                        <Calendar size={15} />{' '}
                      </div>{' '}
                    <AvFeedback>Please Enter Date of refund of share application money</AvFeedback>
                    </AvGroup>{' '}
                </td>
                
                        
                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>
                    <AvGroup className='has-icon-left position-relative'>
                          <AvInput
                            type='text'
                            name='TCamountInForex'
                            id='TCamountInForex'
                            value={
                              this.props.capturedFDIData &&
                              this.props.capturedFDIData.hasOwnProperty('TCamountinForex')
                                ? this.props.capturedFDIData.TCamountinForex
                                : this.state.TCamountInForex
                            }
                            onChange={e => {
                              this.setState({ TCamountInForex: e.target.value})
                              this.props.capturedFDIData.TCamountInForex =
                              e.target.value
                            }}
                            required
                          />
                          <div className='form-control-position'>
                            <Edit size={15} />
                          </div>
                    <AvFeedback>Please Enter Amount in forex</AvFeedback>
                    </AvGroup>
                </td>

                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>
                    <AvGroup className='has-icon-left position-relative'>
                      <Flatpickr
                        className='form-control'
                        value={rbiLetterTC}
                        // value={
                        //   this.props.capturedFDIData &&
                        //   this.props.capturedFDIData.hasOwnProperty('rbiletterTC')
                        //     ? new Date(this.props.capturedFDIData.rbiletterTC)
                        //     : rbiLetterTC
                        // }
                        onChange={rbiLetterTC => {
                          this.setState({ rbiLetterTC})
                          this.props.capturedFDIData.rbiletterTC =new Date(
                          this.state.rbiLetterTC).toISOString()
                        }}
                        required
                      />
                      <div className='form-control-position'>
                        <Calendar size={15} />{' '}
                      </div>{' '}
                    <AvFeedback>Please Enter RBI approval letter and date</AvFeedback>
                    </AvGroup>{' '}
                </td>
                
               
              </tr>


              <tr>
                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5) ' , textAlign:'center'}} ></td>
                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5) ' , textAlign:'center'}}>Total</td>
                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>
                <AvGroup className='position-relative'>
                          <AvInput
                           disabled="true"
                            type='text'
                            name='TCtotal'
                            value={
                              this.props.capturedFDIData &&
                              this.props.capturedFDIData.hasOwnProperty('TCTotal')
                                ? this.props.capturedFDIData.TCTotal
                                : this.props.TCtotal
                            }
                            id='TCtotal'
                            onChange={e => {
                              this.setState({ TCtotal: e.target.value})
                              this.props.capturedFDIData.TCtotal =
                              e.target.value
                            }}
                          />
                         
                  <AvFeedback>Please Enter Total</AvFeedback>
                  </AvGroup>
                </td>
                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5) ' , textAlign:'center'}} ></td>
                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5) ' , textAlign:'center'}} ></td>
                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5) ' , textAlign:'center'}} ></td>
                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5) ' , textAlign:'center'}} ></td>
                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5) ' , textAlign:'center'}} ></td>

              </tr>

              </tbody>
              </Table>
          </Row>
        </React.Fragment>
        </Col>
              
           
              <CardHeader>
          <CardTitle style={{width:"1200px",  marginBottom:"20px"}}>AUTHORISED CAPITAL</CardTitle>
        </CardHeader>

                  
             <Col sm='12'>
              <React.Fragment>
        <Row>
          <Table borderless responsive striped style={{color:" rgba(60 , 60 , 60 , 0.8)"}}>
            <thead>
              <tr>
                <th style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>Sl. No.</th>
                <th style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}} className=''>
                  <div> Date </div>
                </th>
                <th style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}} className=''>
                  <div> 	Authorised Capital </div>
                </th>
                <th style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}} className=''>
                  <div>		With effect from </div>
                </th>
                <th style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}} className=''>
                  <div> Date of Board meeting</div>
                </th>
                <th style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}} className=''>
                  <div> Date of filing with ROC</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td style={{width: '5%' ,border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>
                <AvGroup  className=''>
                          <AvInput
                            type='text'
                            name='ACSlNo'
                            id='ACSlNo'
                            value={
                              this.props.capturedFDIData &&
                              this.props.capturedFDIData.hasOwnProperty('ACslNo')
                                ? this.props.capturedFDIData.ACslNo
                                : this.state.ACSlNo
                            }       
                            onChange={e => {
                              this.setState({ ACSlNo: e.target.value})
                              this.props.capturedFDIData.ACSlNo =
                              e.target.value
                            }}
                            required                   
                          />
                          <div className='form-control-position'>
                            <Edit size={15} />
                          </div>
                    <AvFeedback>Please Enter Sl. No.</AvFeedback>
                    </AvGroup>
                </td>
                
                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>
                    <AvGroup className='has-icon-left position-relative'>
                      <Flatpickr
                        className='form-control'
                        value={dateTI}
                        // value={
                        //   this.props.capturedFDIData &&
                        //   this.props.capturedFDIData.hasOwnProperty('DateTI')
                        //     ? new Date(this.props.capturedFDIData.DateTI)
                        //     : dateTI
                        // }
                        onChange={dateTI => {
                          this.setState({ dateTI})
                          this.props.capturedFDIData.DateTI =new Date(
                          this.state.dateTI).toISOString()
                        }}
                        
                      />
                      <div className='form-control-position'>
                        <Calendar size={15} />{' '}
                      </div>{' '}
                    <AvFeedback>Please Enter Date</AvFeedback>
                    </AvGroup>{' '}
                </td>

                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>
                    <AvGroup className='has-icon-left position-relative'>
                          <AvInput
                            type='text'
                            name='nameACenterAuthorizationZCapital'
                            id='nameACenterAuthorizationZCapital'
                            value={
                              this.props.capturedFDIData &&
                              this.props.capturedFDIData.hasOwnProperty('nameACenterAuthorizationCapital')
                                ? this.props.capturedFDIData.nameACenterAuthorizationCapital
                                : this.state.nameACenterAuthorizationZCapital
                            }
                            onChange={e => {
                              this.setState({ nameACenterAuthorizationZCapital: e.target.value})
                              this.props.capturedFDIData.nameACenterAuthorizationZCapital =
                              e.target.value
                            }}
                            required
                          />
                          <div className='form-control-position'>
                            <Edit size={15} />
                          </div>
                    <AvFeedback>Please Enter Authorised Capital</AvFeedback>
                    </AvGroup>
                </td>

                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>
                    <AvGroup className='has-icon-left position-relative'>
                          <AvInput
                            type='text'
                            name='ACwithEffectFrom'
                            id='ACwithEffectFrom'
                            value={
                              this.props.capturedFDIData &&
                              this.props.capturedFDIData.hasOwnProperty('ACEffectFrom')
                                ? this.props.capturedFDIData.ACEffectFrom
                                : this.state.ACwithEffectFrom
                            }
                            onChange={e => {
                              this.setState({ ACwithEffectFrom: e.target.value})
                              this.props.capturedFDIData.ACwithEffectFrom =
                              e.target.value
                            }}
                            required
                          />
                          <div className='form-control-position'>
                            <Edit size={15} />
                          </div>
                    <AvFeedback>Please Enter With effect from</AvFeedback>
                    </AvGroup>
                </td>
                
                
                 <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>
                    <AvGroup className='has-icon-left position-relative'>
                          <AvInput
                            type='text'
                            name='ACdateOfBoardMeeting'
                            id='ACdateOfBoardMeeting'
                            value={
                              this.props.capturedFDIData &&
                              this.props.capturedFDIData.hasOwnProperty('ACdateBoardMeeting')
                                ? this.props.capturedFDIData.ACdateBoardMeeting
                                : this.state.ACdateOfBoardMeeting
                            }
                            onChange={e => {
                              this.setState({ ACdateOfBoardMeeting: e.target.value})
                              this.props.capturedFDIData.ACdateOfBoardMeeting =
                              e.target.value
                            }}
                            required
                          />
                          <div className='form-control-position'>
                            <Edit size={15} />
                          </div>
                    <AvFeedback>Please Enter Date of Board meeting</AvFeedback>
                    </AvGroup>
                </td>

                <td style={{ border: '1px solid rgba(180 , 180 , 180 , 0.5)'}}>
                    <AvGroup className='has-icon-left position-relative'>
                      <Flatpickr
                        className='form-control'
                        value={dateOfFillingROC}
                        // value={
                        //   this.props.capturedFDIData &&
                        //   this.props.capturedFDIData.hasOwnProperty('dateFillingROC')
                        //     ? new Date(this.props.capturedFDIData.dateFillingROC)
                        //     : dateOfFillingROC
                        // }
                        onChange={dateOfFillingROC => {
                          this.setState({ dateOfFillingROC})
                          this.props.capturedFDIData.dateFillingROC =new Date(
                          this.state.dateOfFillingROC).toISOString()
                        }}
                        
                      />
                      <div className='form-control-position'>
                        <Calendar size={15} />{' '}
                      </div>{' '}
                    <AvFeedback>Please Enter Date of filing with ROC</AvFeedback>
                    </AvGroup>{' '}
                </td>
              </tr>
              </tbody>
              </Table>
            </Row>
          </React.Fragment>
          </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default Module7Form
