//Entity Information

import React from 'react'
import Checkbox from '../../../../../components/Main/checkbox/CheckboxesVuexy'

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
import { FaFileWord, FaFilePdf, FaFile, FaPrint ,FaPlus } from 'react-icons/fa'
import {
  AvInput,
  AvGroup,
  AvFeedback,
  AvField
} from 'availity-reactstrap-validation'
import { Edit, PlusSquare,Calendar, MinusSquare , FileText , Check } from 'react-feather'
import "./popup.scss"

import makeAnimated from 'react-select/animated'
// import AvInputMask from 'react-Avinput-mask'
import Select from 'react-select'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'
import '../../../../../assets/scss/plugins/forms/switch/react-toggle.scss'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/light.css'
import '../../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss'


import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const FemaRegOptions = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  
  ]

const RegDisOptions = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: 'Others', label: 'Others' },
  
  ]

const CAAOptions = [
  { value: 'Central', label: 'Central' },
  { value: 'Regional', label: 'Regional' }
]

const CentralOptions = [
  { value: 'Mumbai', label: 'Mumbai' },
  { value: 'Delhi', label: 'Delhi' }
]

const ActivityOptions = [
  { value: 'Activity 1', label: 'Activity 1' },
  { value: 'Activity 2', label: 'Activity 2' },
  { value: 'Activity 3', label: 'Activity 3' },
  
]

const PayOptions = [
  { value: 'Mumbai', label: 'Mumbai' },
  { value: 'Delhi', label: 'Delhi' },
  { value: 'Bangalore', label: 'Bangalore' },
  { value: 'Hyderabad', label: 'Hyderabad' },
  { value: 'Ahmedabad', label: 'Ahmedabad' },
  { value: 'Chennai', label: 'Chennai' },
  { value: 'Kolkata', label: 'Kolkata' },
  { value: 'Surat', label: 'Surat' },
  { value: 'Pune', label: 'Pune' },
  { value: 'Jaipur', label: 'Jaipur' },
  { value: 'Lucknow', label: 'Lucknow' },
  { value: 'Kanpur', label: 'Kanpur' },
  { value: 'Nagpur', label: 'Nagpur' },
  { value: 'Indore', label: 'Indore' },
  { value: 'Thane', label: 'Thane' },
  { value: 'Bhopal', label: 'Bhopal' },
  { value: 'Vishakhapatnam', label: 'Vishakhapatnam' },
  { value: 'Pimpri-Chinchwad', label: 'Pimpri-Chinchwad' },
  { value: 'Patna', label: 'Patna' },
  { value: 'Vadodara', label: 'Vadodara' },
  { value: 'Ghaziabad', label: 'Ghaziabad' },
  { value: 'Ludhiana', label: 'Ludhiana' },
  { value: 'Agra', label: 'Agra' },
  { value: 'Nashik', label: 'Nashik' },
  { value: 'Faridabad', label: 'Faridabad' },
  { value: 'Meerut', label: 'Meerut' },
  { value: 'Rajkot', label: 'Rajkot' },
  { value: 'Kalyan-Dombivli', label: 'Vadodara' },
  { value: 'Vasai-Vihar', label: 'Vasai-Vihar' },
  { value: 'Varanasi', label: 'Varanasi' },
  { value: 'Srinagar', label: 'Srinagar' },
  { value: 'Aurangabad', label: 'Aurangabad' },
  { value: 'Dhanbad', label: 'Dhanbad' },
  { value: 'Amritsar', label: 'Vadodara' },
  { value: 'Navi Mumbai', label: 'Navi Mumbai' },
  { value: 'Allahabad', label: 'Allahabad' },
 
]


class Module2Form extends React.Component {
  constructor(props){
    super(props)

  } 

  state = {
    collapse: true,
    isChecked: false,
    dateOfIncorporation: new Date(),
    questions: [''],
    questions2: [''],
    selectFemaReg : ' ',
    selectFemaNo: '',
    selectcAAoption:'',
    selectPayOption: '',
    selectCentralOptions:'',


    sample_others_1:false,
    sample_others_2:false,
    sample_others_3:false,

    sample_subjectOfCompounding_1 : false ,
    sample_subjectOfCompounding_2 : false ,
    sample_subjectOfCompounding_3 : false ,

    sample_rbi_1 : false ,
    sample_rbi_2 : false ,
    sample_rbi_3 : false ,

    sample_indiaOrNot_1 : false ,
    sample_indiaOrNot_2 : false ,
    sample_indiaOrNot_3 : false ,

    input1_1:"",
    input1_2:"",
    input1_3:"",
    input1_4:"",
    input1_5:"",
    input1_6:"",
    input1_7:"",
    input1_8:"",
    input1_9:"",
    input1_10:"",
    input1_11:"",
    
    
    input2_1:"",
    input2_2:"",
    input2_3:"",
    input2_4:"",
    input2_5:"",
    input2_6:"",
    input2_7:"",
    input2_8:"",
    input2_9:"",
    input2_10:"",
    input2_11:"",
  }

  
  handleText = i => e => {
    let questions = [...this.state.questions]
    questions[i] = e.target.value
    this.props.capturedCOCData.input1_1 = 
    this.state.input1_1
    this.props.capturedCOCData.input1_2 = 
    this.state.input1_2
    this.props.capturedCOCData.input1_3 = 
    this.state.input1_3
    this.props.capturedCOCData.input1_4 = 
    this.state.input1_4
    this.props.capturedCOCData.input1_5 = 
    this.state.input1_5
    this.props.capturedCOCData.input1_6 = 
    this.state.input1_6
    this.props.capturedCOCData.input1_7 = 
    this.state.input1_7
    this.props.capturedCOCData.input1_8 = 
    this.state.input1_8
    this.props.capturedCOCData.input1_9 = 
    this.state.input1_9
    this.props.capturedCOCData.input1_10 = 
    this.state.input1_10
    this.props.capturedCOCData.input1_11= 
    this.state.input1_11
    this.setState({
      questions,
      input1_1 : questions[0],
      input1_2 : questions[1],
      input1_3 : questions[2],
      input1_4 : questions[3],
      input1_5 : questions[4],
      input1_6 : questions[5],
      input1_7 : questions[6],
      input1_8 : questions[7],
      input1_9 : questions[8],
      input1_10 : questions[9],
      input1_11 : questions[10],
    })
  }

  handleDelete = i => e => {
    e.preventDefault()
    let questions = [
      ...this.state.questions.slice(0 , i),
      ...this.state.questions.slice(i + 1)
    ]
    this.setState({
      questions
    })
  }

  
  addInput = e => {
    e.preventDefault()
    let questions = this.state.questions.concat([''])
      this.setState({
      questions,
      showPlus:false
    })
  }

  handleText2 = i => e => {
    let questions2 = [...this.state.questions2]
    questions2[i] = e.target.value
    
    this.props.capturedCOCData.input2_1 = 
    this.state.input2_1
    this.props.capturedCOCData.input2_2 = 
    this.state.input2_2
    this.props.capturedCOCData.input2_3 = 
    this.state.input2_3
    this.props.capturedCOCData.input2_4 = 
    this.state.input2_4
    this.props.capturedCOCData.input2_5 = 
    this.state.input2_5
    this.props.capturedCOCData.input2_6 = 
    this.state.input2_6
    this.props.capturedCOCData.input2_7 = 
    this.state.input2_7
    this.props.capturedCOCData.input2_8 = 
    this.state.input2_8
    this.props.capturedCOCData.input2_9 = 
    this.state.input2_9
    this.props.capturedCOCData.input2_10 = 
    this.state.input2_10
    this.props.capturedCOCData.input2_11= 
    this.state.input2_11
    this.setState({
      questions2,
      input2_1 : questions2[0],
      input2_2 : questions2[1],
      input2_3 : questions2[2],
      input2_4 : questions2[3],
      input2_5 : questions2[4],
      input2_6 : questions2[5],
      input2_7 : questions2[6],
      input2_8 : questions2[7],
      input2_9 : questions2[8],
      input2_10 : questions2[9],
      input2_11 : questions2[10],
    })
  }


  handleDelete2 = i => e => {
    e.preventDefault()
    let questions2 = [
      ...this.state.questions2.slice(0 , i),
      ...this.state.questions2.slice(i + 1)
    ]
    this.setState({
      questions2,
      
    })
  }

  
  addInput2 = e => {
    e.preventDefault()
    let questions2 = this.state.questions2.concat([''])
      this.setState({
      questions2,
      showPlus:false
    })
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
    const excelStyle = {
      height: 'auto',
      width: '30px',
      color: 'orange'
    }

    const plusStyle = {
      height: 'auto',
      width: '30px',
      color: '#187bcd'
    }

    return (
      <Card>
        <CardHeader>
          <CardTitle>FEMA GUIDELINES</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>                       
            <Row>
              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Nature of Contravention</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='natureOfContravention'
                    id='nameVerticalIcons'
                  />
                  <AvFeedback> 
                    Please enter Nature of Contravention
                  </AvFeedback>
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
             
              

              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>FEMA Regulation</Label>
                <AvGroup style={{zIndex:"11"}}  className='has-icon-left position-relative'>
                  <Select 
                    className='React'
                    classNamePrefix='select'
                    // defaultValue={investmentPurposeOptions[1]}
                    name='clear'
                    options={FemaRegOptions}
                    isClearable={true}
                    onChange={selectFemaReg => {
                      this.setState({ selectFemaReg})
                      this.props.capturedCOCData.selectFemaReg =
                      selectFemaReg.label
                    }}
                  />
                  <AvFeedback> 
                    Please enter FEMA regulation
                    </AvFeedback>{/* 
                  <div className='form-control-position'>
                    <Calendar size={15} />
                  </div> */}
                </AvGroup>
              </Col>


              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Regulation No. with Description </Label>
                <AvGroup style={{zIndex:"11"}}  className='has-icon-left position-relative'>
                  <Select 
                    className='React'
                    classNamePrefix='select'
                    // defaultValue={investmentPurposeOptions[1]}
                    name='clear'
                    options={RegDisOptions}
                    isClearable={true}
                    onChange={selectFemaNo => {
                      this.setState({ selectFemaNo})
                      this.props.capturedCOCData.selectFemaNo =
                      selectFemaNo.label
                    }}
                  />
                  <AvFeedback> 
                    Please enter Regulation No. with Description 
                    </AvFeedback>{/* 
                  <div className='form-control-position'>
                    <Calendar size={15} />
                  </div> */}
                </AvGroup>
              </Col>


              <Col sm='6'>           
{this.state.questions.map((question, index) => (
      <Row   key={index}>

        
  <Col sm='9'>
  
<Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Others - {index+1}</Label>
    
    <AvGroup  className='has-icon-left position-relative' style={{marginBottom:"10px"}}>
    
      <AvInput
        type='text'
        name='input1'
        id='nameVerticalIcons'
        onChange={this.handleText(index)} 
        value={question}
      />

    <AvFeedback> Please enter Ohters</AvFeedback>
    
    </AvGroup>
  </Col>
  
  <Col sm="3">
    <Row>
  <Col sm="4" >
  <a href="#samples-others">
                <div
                  // onClick={this.popupwala}
                  className='fonticon-container'
                  style={{
                    position:'absolute',
                    top:"27px",
                    width: '40px',    
                    color: 'primary'
                  }}
                >
                  <div className=' fonticon-wrap'>
                    <FileText size={30} className='fonticon-wrap' />
                  </div>
                </div>
                </a>

                
                <div className="popup" id="samples-others" >
              <div className="popup__content">
                

              <a href="#" className="popup__close">&times;</a>
                  <div className="popup__right">
                    <p className="popup__text">
                    <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                       sample_others_1: checkedValue.target.checked
                      })

                        this.props.capturedCOCData.sample_others_1 =
                          checkedValue.target.checked
                    }}
                  />
                </dt>
                
                <h2 style={{fontSize:"20px"}}>Sample 1</h2>
                

                </div>
                                      </p>
                
                
                    <p className="popup__text">
                    <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                       sample_others_2: checkedValue.target.checked
                      })

                        this.props.capturedCOCData.sample_others_2 =
                          checkedValue.target.checked
                    }}
                  />
                </dt>
                
                <h2 style={{fontSize:"20px"}}>Sample 2</h2>
                

                </div>
                                      </p>
                
                
                    <p className="popup__text">
                    <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                       sample_others_3: checkedValue.target.checked
                      })

                        this.props.capturedCOCData.sample_others_3 =
                          checkedValue.target.checked
                    }}
                  />
                </dt>
                
                <h2 style={{fontSize:"20px"}}>Sample 3</h2>
                

                </div>
                                      </p>
                
                
                </div>
                </div>
          </div>
                 </Col>
  
  {index !== 0 && 
  <Col sm="4" >
             <div
                  onClick={this.handleDelete(index)}
                  className='fonticon-container'
                  style={{
                    position:'absolute',
                    top:"28px",
                    width: '40px',
                    color: 'primary'
                  }}
                >
                  <div className='fonticon-wrap'>
                    <MinusSquare size={30} className='fonticon-wrap' />
                  </div>
                </div>
             </Col>}
 
                 {index +1 === this.state.questions.length && 
                 <Col sm="4" >
                 <div
                  onClick={this.addInput}
                  className='fonticon-container'
                  style={{
                    position:'absolute',
                    top:"27px",
                    width: '40px',
                    color: 'primary'
                  }}
                >
                  <div className=' fonticon-wrap'>
                    <PlusSquare size={30} className='fonticon-wrap' />
                  </div>
                </div>
                 </Col>}
                 </Row>
                 </Col>
 
  </Row >
    ))}    
    
</Col>
              
           
              <CardHeader>
          <CardTitle style={{width:"1200px",  marginBottom:"20px"}}>COMPOUNDING AUTHORITY ADDRESS</CardTitle>
        </CardHeader>

                  
              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>COMPOUNDING AUTHORITY ADDRESS</Label>
                <AvGroup style={{zIndex:"10"}} className='has-icon-left position-relative'>
                  <Select
                    className='React'
                    classNamePrefix='select'
                    defaultValue={CAAOptions[0]}
                    name='clear'
                    options={CAAOptions}
                    isClearable={true}
                    onChange={selectcAAoption => {
                      this.setState({ selectcAAoption})
                      this.props.capturedCOCData.selectcAAoption =
                      selectcAAoption.label
                    }}
                  />
                  <AvFeedback> 
                    Please enter COMPOUNDING AUTHORITY ADDRESS
                    </AvFeedback>{/* 
                  <div className='form-control-position'>
                    <Calendar size={15} />
                  </div> */}
                </AvGroup>
              </Col>
                  
              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Central</Label>
                <AvGroup style={{zIndex:"10"}} className='has-icon-left position-relative'>
                  <Select
                    className='React'
                    classNamePrefix='select'
                    defaultValue={CentralOptions[0]}
                    name='clear'
                    options={CentralOptions}
                    isClearable={true}
                    onChange={selectCentralOptions => {
                      this.setState({ selectCentralOptions})
                      this.props.capturedCOCData.selectCentralOptions =
                      selectCentralOptions.label
                    }}
                  />
                  <AvFeedback> 
                    Please enter Central
                    </AvFeedback>{/* 
                  <div className='form-control-position'>
                    <Calendar size={15} />
                  </div> */}
                </AvGroup>
              </Col>

              <Col sm='10'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Subject of Compounding</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='subjectOfCompounding'
                    id='nameVerticalIcons'
                  />
                  <AvFeedback> 
                  Please enter Subject of Compounding
                  </AvFeedback>
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>

              <Col sm="1" >
              <a href="#samples-subjectOfCompounding">
                <div
                  // onClick={this.popupwala}
                  className='fonticon-container'
                  style={{
                    position:'absolute',
                    top:"27px",
                    width: '40px',    
                    color: 'primary'
                  }}
                >
                  <div className=' fonticon-wrap'>
                    <FileText size={30} className='fonticon-wrap' />
                  </div>
                </div>
                </a>

                
                <div className="popup" id="samples-subjectOfCompounding" >
              <div className="popup__content">
                

              <a href="#" className="popup__close">&times;</a>
                  <div className="popup__right">
                    <p className="popup__text">
                    <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                       sample_subjectOfCompounding_1: checkedValue.target.checked
                      })

                        this.props.capturedCOCData.sample_subjectOfCompounding_1 =
                          checkedValue.target.checked
                    }}
                  />
                </dt>
                
                <h2 style={{fontSize:"20px"}}>Sample 1</h2>
                

                </div>
                                      </p>
                
                
                    <p className="popup__text">
                    <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                       sample_subjectOfCompounding_2: checkedValue.target.checked
                      })

                        this.props.capturedCOCData.sample_subjectOfCompounding_2 =
                          checkedValue.target.checked
                    }}
                  />
                </dt>
                
                <h2 style={{fontSize:"20px"}}>Sample 2</h2>
                

                </div>
                                      </p>
                
                
                    <p className="popup__text">
                    <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                       sample_subjectOfCompounding_3: checkedValue.target.checked
                      })

                        this.props.capturedCOCData.sample_subjectOfCompounding_3 =
                          checkedValue.target.checked
                    }}
                  />
                </dt>
                
                <h2 style={{fontSize:"20px"}}>Sample 3</h2>
                

                </div>
                                      </p>
                
                
                </div>
                </div>
          </div>
                 </Col>

<Col sm='12'>           
{this.state.questions2.map((question, index) => (
      <Row   key={index}>

        
  <Col sm='10'>
  
<Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>RBI Reference Letter - {index+1}</Label>
    
    <AvGroup  className='has-icon-left position-relative' style={{marginBottom:"10px"}}>
    
      <AvInput
        type='text'
        name='rbiReferenceLetter'
        id='nameVerticalIcons'
        onChange={this.handleText2(index)} 
        value={question}
      />

    <AvFeedback>
      Please enter RBI Reference Letter
    </AvFeedback>
    
    </AvGroup>
  </Col>
  
  <Col sm="2">
    <Row>
  <Col sm="4" >
  <a href="#samples-rbi">
                <div
                  // onClick={this.popupwala}
                  className='fonticon-container'
                  style={{
                    position:'absolute',
                    top:"27px",
                    width: '40px',    
                    color: 'primary'
                  }}
                >
                  <div className=' fonticon-wrap'>
                    <FileText size={30} className='fonticon-wrap' />
                  </div>
                </div>
                </a>

                
                <div className="popup" id="samples-rbi" >
              <div className="popup__content">
                

              <a href="#" className="popup__close">&times;</a>
                  <div className="popup__right">
                    <p className="popup__text">
                    <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                       sample_rbi_1: checkedValue.target.checked
                      })

                        this.props.capturedCOCData.sample_rbi_1 =
                          checkedValue.target.checked
                    }}
                  />
                </dt>
                
                <h2 style={{fontSize:"20px"}}>Sample 1</h2>
                

                </div>
                                      </p>
                
                
                    <p className="popup__text">
                    <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                       sample_rbi_2: checkedValue.target.checked
                      })

                        this.props.capturedCOCData.sample_rbi_2 =
                          checkedValue.target.checked
                    }}
                  />
                </dt>
                
                <h2 style={{fontSize:"20px"}}>Sample 2</h2>
                

                </div>
                                      </p>
                
                
                    <p className="popup__text">
                    <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                       sample_rbi_3: checkedValue.target.checked
                      })

                        this.props.capturedCOCData.sample_rbi_3 =
                          checkedValue.target.checked
                    }}
                  />
                </dt>
                
                <h2 style={{fontSize:"20px"}}>Sample 3</h2>
                

                </div>
                                      </p>
                
                
                </div>
                </div>
          </div>
                 </Col>
  
  {index !== 0 && 
  <Col sm="4" >
             <div
                  onClick={this.handleDelete2(index)}
                  className='fonticon-container'
                  style={{
                    position:'absolute',
                    top:"28px",
                    width: '40px',
                    color: 'primary'
                  }}
                >
                  <div className='fonticon-wrap'>
                    <MinusSquare size={30} className='fonticon-wrap' />
                  </div>
                </div>
             </Col>}
 
                 {index +1 === this.state.questions2.length && 
                 <Col sm="4" >
                 <div
                  onClick={this.addInput2}
                  className='fonticon-container'
                  style={{
                    position:'absolute',
                    top:"27px",
                    width: '40px',
                    color: 'primary'
                  }}
                >
                  <div className=' fonticon-wrap'>
                    <PlusSquare size={30} className='fonticon-wrap' />
                  </div>
                </div>
                 </Col>}
                 </Row>
                 </Col>
 
  </Row >
    ))}    
    
</Col>
              <Col sm='10'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Whether the Applicant is resident in India or resident outside India ?</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='residentOutsideIndia'
                    id='nameVerticalIcons'
                  />
                  <AvFeedback> 
                  Please enter Whether the Applicant is resident in India or resident outside India ?
                  </AvFeedback>
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
      
              <Col sm="1" >
                
  <a href="#samples-indiaOrOutside">
                <div
                  // onClick={this.popupwala}
                  className='fonticon-container'
                  style={{
                    position:'absolute',
                    top:"27px",
                    width: '40px',    
                    color: 'primary'
                  }}
                >
                  <div className=' fonticon-wrap'>
                    <FileText size={30} className='fonticon-wrap' />
                  </div>
                </div>
                </a>

                
                <div className="popup" id="samples-indiaOrOutside" >
              <div className="popup__content">
                

              <a href="#" className="popup__close">&times;</a>
                  <div className="popup__right">
                    <p className="popup__text">
                    <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                       sample_indiaOrNot_1: checkedValue.target.checked
                      })

                        this.props.capturedCOCData.sample_indiaOrNot_1 =
                          checkedValue.target.checked
                    }}
                  />
                </dt>
                
                <h2 style={{fontSize:"20px"}}>Sample 1</h2>
                </div>
                                      </p>
                
                
                    <p className="popup__text">
                    <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                       sample_indiaOrNot_2: checkedValue.target.checked
                      })

                        this.props.capturedCOCData.sample_indiaOrNot_2 =
                          checkedValue.target.checked
                    }}
                  />
                </dt>
                
                <h2 style={{fontSize:"20px"}}>Sample 2</h2>
                

                </div>
                                      </p>
                
                
                    <p className="popup__text">
                    <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                       sample_indiaOrNot_3: checkedValue.target.checked
                      })

                        this.props.capturedCOCData.sample_indiaOrNot_3 =
                          checkedValue.target.checked
                    }}
                  />
                </dt>
                
                <h2 style={{fontSize:"20px"}}>Sample 3</h2>
                

                </div>
                                      </p>
                
                
                </div>
                </div>
          </div> </Col>
              
              <Col sm='12'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Name of the Adjudicating Authority before whom the case in pending</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='nameOfAdjudicatingAuthority'
                    id='nameVerticalIcons'
                  />
                  <AvFeedback> 
                  Please enter Name of the Adjudicating Authority before whom the case in pending
                  </AvFeedback>
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
      

              
              <CardHeader>
          <CardTitle style={{width:"1200px",  marginBottom:"20px"}}>APPLICATION FEE DETAILS</CardTitle>
        </CardHeader>


        <Col sm='3'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Compounding Application Fee</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='compoundingApplicationFee'
                    id='nameVerticalIcons'
                  />
                  <AvFeedback> 
                  Please enter Compounding Application Fee
                  </AvFeedback>
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>


              <Col sm='3'>
              <Label style={{paddingBottom:'13px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons'>Date of Incorporation / Registration</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <Flatpickr
                    style={{position:'relative' , bottom:'5px'}}
                    className='form-control'
                    value={this.state.dateOfIncorporation}
                    defaultDate={new Date}
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



        <Col sm='3'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Office Telephone Number (with STD Code)</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='officeTeleNumber'
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

      
              <Col sm='3'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Central</Label>
                <AvGroup style={{zIndex:"0"}} className='has-icon-left position-relative'>
                  <Select
                    className='React'
                    classNamePrefix='select'
                    defaultValue={PayOptions[0]}
                    name='clear'
                    options={PayOptions}
                    isClearable={true}
                    onChange={selectPayOption => {
                      this.setState({ selectPayOption})
                      this.props.capturedCOCData.selectPayOption =
                      selectPayOption.label
                    }}
                  />
                  <AvFeedback> 
                    Please enter Central
                    </AvFeedback>{/* 
                  <div className='form-control-position'>
                    <Calendar size={15} />
                  </div> */}
                </AvGroup>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    )
  }
}
export default Module2Form
