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
    let { basicPicker } = this.state
    

    return (
      <Card>
        <CardHeader>
          <CardTitle>Foreign Direct Investment in India</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>                       
            <Row>
              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Name of the applicant</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='nameofApplicant'
                    id='nameVerticalIcons'
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
                    value={basicPicker}
                    onChange={dateOfIncorporation => {
                      this.setState({ dateOfIncorporation})
                      this.props.capturedODIData.dateOfIncorporation =new Date(
                      this.state.dateOfIncorporation).toDateString()
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
                    id='nameVerticalIcons'
                  />
                
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                <AvFeedback>Please Enter Income-tax PAN</AvFeedback>
                </AvGroup> 
              </Col>

              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Nature of activities under taken (Please give NIC code - 1987/2008)</Label>
                <AvGroup className='has-icon-left position-relative'>
                
                  <AvInput
                    type='text'
                    name='natureOfActivitiesUnderTakenNicCode'
                    id='nameVerticalIcons'
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
                    id='nameVerticalIcons'
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
                    id='nameVerticalIcons'
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
                    id='nameVerticalIcons'
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
                    id='nameVerticalIcons'
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
                            id='nameVerticalIcons'
                           
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
                            id='nameVerticalIcons'
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
                            id='nameVerticalIcons'
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
                        value={basicPicker}
                        onChange={dateOfReportingRbiTA => {
                          this.setState({ dateOfReportingRbiTA})
                          this.props.capturedODIData.dateOfReportingRbiTA =new Date(
                          this.state.dateOfReportingRbiTA).toDateString()
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
                        value={basicPicker}
                        onChange={reportRbiTA => {
                          this.setState({ reportRbiTA})
                          this.props.capturedODIData.reportRbiTA =new Date(
                          this.state.reportRbiTA).toDateString()
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
                            id='nameVerticalIcons'
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
                            id='nameVerticalIcons'
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
                            id='nameVerticalIcons'
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
                        value={basicPicker}
                        onChange={dateOfAllotmentOfSharesTB => {
                          this.setState({ dateOfAllotmentOfSharesTB})
                          this.props.capturedODIData.dateOfAllotmentOfSharesTB =new Date(
                          this.state.dateOfAllotmentOfSharesTB).toDateString()
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
                            id='nameVerticalIcons'
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
                            id='nameVerticalIcons'
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
                        value={basicPicker}
                        onChange={dateOfReportingRBITB => {
                          this.setState({ dateOfReportingRBITB})
                          this.props.capturedODIData.dateOfReportingRBITB =new Date(
                          this.state.dateOfReportingRBITB).toDateString()
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
                            id='nameVerticalIcons'
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
                            id='nameVerticalIcons'
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
                            id='nameVerticalIcons'
                           
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
                            id='nameVerticalIcons'
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
                            id='nameVerticalIcons'
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
                        value={basicPicker}
                        onChange={dateOfRecieptTC => {
                          this.setState({ dateOfRecieptTC})
                          this.props.capturedODIData.dateOfRecieptTC =new Date(
                          this.state.dateOfRecieptTC).toDateString()
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
                            id='nameVerticalIcons'
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
                        value={basicPicker}
                        onChange={dateOfRefundTC => {
                          this.setState({ dateOfRefundTC})
                          this.props.capturedODIData.dateOfRefundTC =new Date(
                          this.state.dateOfRefundTC).toDateString()
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
                            id='nameVerticalIcons'
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
                        value={basicPicker}
                        onChange={rbiLetterTC => {
                          this.setState({ rbiLetterTC})
                          this.props.capturedODIData.rbiLetterTC =new Date(
                          this.state.rbiLetterTC).toDateString()
                        }}
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
                            id='nameVerticalIcons'
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
                            id='nameVerticalIcons'
                           
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
                        value={basicPicker}
                        onChange={dateTI => {
                          this.setState({ dateTI})
                          this.props.capturedODIData.dateTI =new Date(
                          this.state.dateTI).toDateString()
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
                            id='nameVerticalIcons'
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
                            id='nameVerticalIcons'
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
                            id='nameVerticalIcons'
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
                        value={basicPicker}
                        onChange={dateOfFillingROC => {
                          this.setState({ dateOfFillingROC})
                          this.props.capturedODIData.dateOfFillingROC =new Date(
                          this.state.dateOfFillingROC).toDateString()
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
          </Form>
        </CardBody>
      </Card>
    )
  }
}
export default Module7Form
