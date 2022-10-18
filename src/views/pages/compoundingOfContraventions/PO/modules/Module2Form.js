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
  Input,
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
import { data } from 'jquery'

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

const telephone= /\d{3}([- ]*)\d{8}/

class Module2Form extends React.Component {
  constructor(props){
    super(props);
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
    input1:'',
    rbiLetter:'',
    showPlus :true,

    sampleOthers:[
      {
        sample_others_1:false,
        sample_others_2:false,
        sample_others_3:false
      }
    ],
    

    sample_subjectOfCompounding_1 : false ,
    sample_subjectOfCompounding_2 : false ,
    sample_subjectOfCompounding_3 : false ,

    sampleRbi:[
      {
      sample_rbi_1 : false,
      sample_rbi_2 : false,
      sample_rbi_3 : false
    }
  ],  

    sample_indiaOrNot_1 : false ,
    sample_indiaOrNot_2 : false ,
    sample_indiaOrNot_3 : false ,
    natureOfContravention : '',
    subjectOfCompounding: '',
    rbiReferenceLetter: '',
    residentOutsideIndia: '',
    nameOfAdjudicatingAuthority: '',
    compoundingApplicationFee: '',
    officeTeleNumber: '',
    errors:{
      officeTeleNumber: '',
    },
    init:true
  }

  
  componentWillReceiveProps(props){
    if(props.capturedPOData && props.capturedPOData.topicNameDescription){
    let questions = props.capturedPOData.topicNameDescription
    this.setState({questions})
    }

    if(props.capturedPOData && props.capturedPOData.rbiReferenceLetter){
      let questions2 = props.capturedPOData.rbiReferenceLetter
      this.setState({questions2})
      }

      if(props.capturedPOData && props.capturedPOData!== this.props.capturedPOData && props.capturedPOData.sampleOthers){
        let sampleOthers = props.capturedPOData.sampleOthers
        this.setState({sampleOthers})
      }


      if(props.capturedPOData && props.capturedPOData!== this.props.capturedPOData && props.capturedPOData.sampleRbi){
        let sampleRbi = props.capturedPOData.sampleRbi
        this.setState({sampleRbi})
      }
  }
  
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case 'officeTeleNumber': 
        errors.officeTeleNumber = 
          telephone.test(value)
          ? ''
          : 'Telephhone number not valid'
        break;
      default:
        break;
    }
    this.setState({errors, [name]: value});

    this.setState({ officeTeleNumber: e.target.value})
    this.props.capturedPOData.officeTeleNumber = e.target.value
  }



  handleText = i => e => {
    let questions = [...this.state.questions]
    questions[i] = e.target.value
    
    this.setState({
      questions,
      input1 : questions
    })
    this.props.capturedPOData.input1 = 
    this.state.input1
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
    //let questions = []
    //e.preventDefault()
    // if(this.props.capturedPOData.topicNameDescription){
    //   questions = this.props.capturedPOData.topicNameDescription.concat([...this.state.questions])
    //   }
    // else{
    //   questions = this.state.questions.concat([''])
    // }
    //questions = this.state.questions.concat([''])
      this.setState({
      questions:this.state.questions.concat(['']),
      sampleOthers: this.state.sampleOthers.concat([{
        sample_others_1:false,
        sample_others_2:false,
        sample_others_3:false
      }]),
      showPlus:false
    }, function(){
      //console.log(this.state.questions)
    })
  }

  handleText2 = i => e => {

  let questions2 = [...this.state.questions2]
  questions2[i] = e.target.value

  this.setState({
    questions2,
    rbiLetter : questions2
  })
  this.props.capturedPOData.rbiLetter = 
  this.state.rbiLetter
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

  
  addInput2 = (e) => {
    // e.preventDefault()
    // let questions2 = []
    // if(this.props.capturedPOData.rbiReferenceLetter){
    //   questions2 = this.props.capturedPOData.rbiReferenceLetter.concat([...this.state.questions2])
    //   }
    // else{
    //   questions2 = this.state.questions2.concat([''])
    // }
    //   this.setState({
    //   questions2,
    //   showPlus:false
    // })
    this.setState({
      questions2:this.state.questions2.concat(['']),
      sampleRbi: this.state.sampleRbi.concat([{
        sample_rbi_1 : false,
        sample_rbi_2 : false,
        sample_rbi_3 : false
      }]),
      showPlus:false
    }, function(){
      //console.log(this.state.questions2)
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
    let { basicPicker, dateOfIncorporation  } = this.state
    const {errors} = this.state;

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
          <div>                       
            <Row>
              <Col sm='6'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Nature of Contravention</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='natureOfContravention'
                    id='natureOfContravention'
                    value={
                      this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('natureContravention')
                        ? this.props.capturedPOData.natureContravention
                        : this.state.natureOfContravention
                    }
                    onChange={e => {
                      this.setState({ natureOfContravention: e.target.value})
                      this.props.capturedPOData.natureOfContravention =
                      e.target.value
                    }}
                    required
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
                    value={{
                      label:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectFema'
                        )
                          ? this.props.capturedPOData.selectFema
                          : FemaRegOptions[0].label,
                      value:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectFema'
                        )
                          ? this.props.capturedPOData.selectFema
                          : FemaRegOptions[0].value
                    }}
                    onChange={selectFemaReg => {
                      this.setState({ selectFemaReg})
                      this.props.capturedPOData.selectFema =
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
                    value={{
                      label:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectRegulationNo'
                        )
                          ? this.props.capturedPOData.selectRegulationNo
                          : RegDisOptions[0].label,
                      value:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectRegulationNo'
                        )
                          ? this.props.capturedPOData.selectRegulationNo
                          : RegDisOptions[0].value
                    }}
                    onChange={selectFemaNo => {
                      this.setState({ selectFemaNo})
                      this.props.capturedPOData.selectRegulationNo =
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
{this.state.questions && this.state.questions.map((question, index) => (

  
      <Row   key={index}>

  <Col sm='9'>  
  
<Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='input1'>Others - {index+1}</Label>
    
    <AvGroup  className='has-icon-left position-relative' style={{marginBottom:"10px"}}>
    
      <Input
        type='text'
        name='input1'
        id='input1'
        onChange={this.handleText(index)}
        //value={question}
        value={
          this.props.capturedPOData &&
          this.props.capturedPOData.hasOwnProperty('topicNameDescription')
            ? this.props.capturedPOData.topicNameDescription[index]
            : this.state.input1[index]
        }
        required
      />

    <AvFeedback> Please enter Others</AvFeedback>
    
    </AvGroup>
   
  </Col>
  
  <Col sm="3">
    <Row>
  <Col sm="4" >
  <a href={"#samples-others-"+index}>
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

                
                <div className="popup" id={"samples-others-"+index} >
              <div className="popup__content">
                

              <a href="#" className="popup__close">&times;</a>
                  <div className="popup__right">
                    <span className="popup__text">
                    <div style={{display:"flex" , justifyContent:"center", alignItems:"right" }}>
                <dt>
                  {' '}
                  {/* //<div>{index.toString()}</div> */}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    checked={
                      this.state.sampleOthers && this.state.sampleOthers[index] && this.state.sampleOthers[index].sample_others_1
                    }

                    value={
                      this.state.sampleOthers && this.state.sampleOthers[index] && this.state.sampleOthers[index].sample_others_1
                    }

                    onChange = {checkedValue => {
                      this.setState(prevState => {
                        const newOthers = [...prevState.sampleOthers]
                        newOthers[index].sample_others_1 = true;
                        
                        return {sampleOthers: newOthers}
                      })
                       this.props.capturedPOData.sampleOthers =
                          this.state.sampleOthers
                    }}
                  />
                </dt>
                
                <h2 style={{fontSize:"20px", width:"96px"}}>Sample 1</h2>
                

                </div>
                                      </span>
                
                
                    <span className="popup__text">
                    <div style={{display:"flex" , justifyContent:"center", alignItems:"right" }}>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    checked={this.state.sampleOthers && this.state.sampleOthers[index] && this.state.sampleOthers[index].sample_others_2}
                    value={
                      this.state.sampleOthers && this.state.sampleOthers[index] && this.state.sampleOthers[index].sample_others_2
                    }
                    //onChange={checkedValue => {
                    //   this.setState({
                    //     sampleOthers: checkedValue.target.checked
                    //   })

                    //     this.props.capturedPOData.sampleOthers =
                    //       checkedValue.target.checked
                    // }}
                    onChange = {checkedValue => {
                      this.setState(prevState => {
                        const newOthers = [...prevState.sampleOthers]
                        newOthers[index].sample_others_2 = true;
                        return {sampleOthers: newOthers}
                      })
                       this.props.capturedPOData.sampleOthers =
                          this.state.sampleOthers
                    }}
                  />
                </dt>
                
                <h2 style={{fontSize:"20px"}}>Sample 2</h2>
                

                </div>
                                      </span>
                
                
                    <span className="popup__text">
                    <div style={{display:"flex" , justifyContent:"center", alignItems:"right" }}>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    checked={
                      this.state.sampleOthers && this.state.sampleOthers[index] && this.state.sampleOthers[index].sample_others_3}
                    value={
                      this.state.sampleOthers && this.state.sampleOthers[index] && this.state.sampleOthers[index].sample_others_3
                    }
                    // onChange={checkedValue => {
                    //   this.setState({
                    //     sampleOthers: checkedValue.target.checked
                    //   })

                    //     this.props.capturedPOData.sampleOthers =
                    //       checkedValue.target.checked
                    // }}
                    onChange = {checkedValue => {
                      this.setState(prevState => {
                        const newOthers = [...prevState.sampleOthers]
                        newOthers[index].sample_others_3 = true;
                        return {sampleOthers: newOthers}
                      })
                       this.props.capturedPOData.sampleOthers =
                          this.state.sampleOthers
                    }}
                  />
                </dt>
                
                <h2 style={{fontSize:"20px"}}>Sample 3</h2>
                

                </div>
                                      </span>
                
                
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
    )
  )}    
    
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
                    //defaultValue={CAAOptions[0]}
                    name='clear'
                    options={CAAOptions}
                    isClearable={true}
                    value={{
                      label:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectCAAoption'
                        )
                          ? this.props.capturedPOData.selectCAAoption
                          : CAAOptions[0].label,
                      value:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectCAAoption'
                        )
                          ? this.props.capturedPOData.selectCAAoption
                          : CAAOptions[0].value
                    }}
                    onChange={selectcAAoption => {
                      this.setState({ selectcAAoption})
                      this.props.capturedPOData.selectCAAoption =
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
                    value={{
                      label:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectcentralOptions'
                        )
                          ? this.props.capturedPOData.selectcentralOptions
                          : CentralOptions[0].label,
                      value:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectcentralOptions'
                        )
                          ? this.props.capturedPOData.selectcentralOptions
                          : CentralOptions[0].value
                    }}
                    onChange={selectCentralOptions => {
                      this.setState({ selectCentralOptions})
                      this.props.capturedPOData.selectcentralOptions =
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
                    id='subjectOfCompounding'
                    value={
                      this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('subjectCompounding')
                        ? this.props.capturedPOData.subjectCompounding
                        : this.state.subjectOfCompounding
                    }
                    onChange={e => {
                      this.setState({ subjectOfCompounding: e.target.value})
                      this.props.capturedPOData.subjectOfCompounding =
                      e.target.value
                    }}
                    required
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
                    <span className="popup__text">
                    <div style={{display:"flex" , justifyContent:"center", alignItems:"right" }}>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    checked={this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('sample_subjectOfCompounding_1')
                        ? this.props.capturedPOData.sample_subjectOfCompounding_1
                        : this.state.sample_subjectOfCompounding_1}
                    value={
                      this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('sample_subjectOfCompounding_1')
                        ? this.props.capturedPOData.sample_subjectOfCompounding_1
                        : this.state.sample_subjectOfCompounding_1
                    }
                    onChange={checkedValue => {
                      this.setState({
                       sample_subjectOfCompounding_1: checkedValue.target.checked
                      })

                        this.props.capturedPOData.sample_subjectOfCompounding_1 =
                          checkedValue.target.checked
                    }}
                  />
                </dt>
                
                <h2 style={{fontSize:"20px", width:"96px"}}>Sample 1</h2>
                

                </div>
                                      </span>
                
                
                    <span className="popup__text">
                    <div style={{display:"flex" , justifyContent:"center", alignItems:"right" }}>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    checked={this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('sample_subjectOfCompounding_2')
                        ? this.props.capturedPOData.sample_subjectOfCompounding_2
                        : this.state.sample_subjectOfCompounding_2}
                    value={
                      this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('sample_subjectOfCompounding_2')
                        ? this.props.capturedPOData.sample_subjectOfCompounding_2
                        : this.state.sample_subjectOfCompounding_2
                    }
                    onChange={checkedValue => {
                      this.setState({
                       sample_subjectOfCompounding_2: checkedValue.target.checked
                      })

                        this.props.capturedPOData.sample_subjectOfCompounding_2 =
                          checkedValue.target.checked
                    }}
                  />
                </dt>
                
                <h2 style={{fontSize:"20px"}}>Sample 2</h2>
                

                </div>
                                      </span>
                
                
                    <span className="popup__text">
                    <div style={{display:"flex" , justifyContent:"center", alignItems:"right" }}>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    checked={this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('sample_subjectOfCompounding_3')
                        ? this.props.capturedPOData.sample_subjectOfCompounding_3
                        : this.state.sample_subjectOfCompounding_3}
                    value={
                      this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('sample_subjectOfCompounding_3')
                        ? this.props.capturedPOData.sample_subjectOfCompounding_3
                        : this.state.sample_subjectOfCompounding_3
                    }
                    onChange={checkedValue => {
                      this.setState({
                       sample_subjectOfCompounding_3: checkedValue.target.checked
                      })

                        this.props.capturedPOData.sample_subjectOfCompounding_3 =
                          checkedValue.target.checked
                    }}
                  />
                </dt>
                
                <h2 style={{fontSize:"20px"}}>Sample 3</h2>
                

                </div>
                                      </span>
                
                
                </div>
                </div>
          </div>
                 </Col>

<Col sm='12'>           
{this.state.questions2.map((question, index) => {
  return(
      <Row   key={index}>

        
  <Col sm='10'>
  
<Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>RBI Reference Letter - {index+1}</Label>
    
    <AvGroup  className='has-icon-left position-relative' style={{marginBottom:"10px"}}>
    
      <Input
        type='text'
        name='rbiReferenceLetter'
        id='rbiReferenceLetter'
        onChange={this.handleText2(index)} 
        value={
          this.props.capturedPOData &&
          this.props.capturedPOData.hasOwnProperty('rbiReferenceLetter')
            ? this.props.capturedPOData.rbiReferenceLetter[index]
            : this.state.rbiLetter[index]
        }
        //value={question}
        // onChange={e => {
        //   this.setState({ rbiReferenceLetter: e.target.value})
        //   this.props.capturedPOData.rbiReferenceLetter =
        //   e.target.value
        // }}
        required
      />

    <AvFeedback>
      Please enter RBI Reference Letter
    </AvFeedback>
    
    </AvGroup>
  </Col>
  
  <Col sm="2">
    <Row>
  <Col sm="4" >
  <a href={"#samples-rbi-"+index}>
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

                
                <div className="popup" id={"samples-rbi-"+index} >
              <div className="popup__content">
                

              <a href="#" className="popup__close">&times;</a>
                  <div className="popup__right">
                    <span className="popup__text">
                    <div style={{display:"flex" , justifyContent:"center", alignItems:"right" }}>
                <dt>
                  {' '}
                  {/* //<div>{index.toString()}</div> */}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    checked={
                      this.state.sampleRbi && this.state.sampleRbi[index].sample_rbi_1
                   }

                   value={
                    this.state.sampleRbi && this.state.sampleRbi[index].sample_rbi_1
                   }

                   onChange = {checkedValue => {
                     
                     this.setState(prevState => {
                       const newRbi = [...prevState.sampleRbi]
                       newRbi[index].sample_rbi_1 = true;
                       return {sampleRbi: newRbi}
                     })
                      this.props.capturedPOData.sampleRbi =
                         this.state.sampleRbi
                   }}
                  />
                </dt>
                
                <h2 style={{fontSize:"20px", width:"96px"}}>Sample 1</h2>
                

                </div>
                                      </span>
                
                
                    <span className="popup__text">
                    <div style={{display:"flex" , justifyContent:"center", alignItems:"right" }}>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    checked={
                      this.state.sampleRbi && this.state.sampleRbi[index].sample_rbi_2
                   }

                   value={
                    this.state.sampleRbi && this.state.sampleRbi[index].sample_rbi_2
                   }

                   onChange = {checkedValue => {
                     
                     this.setState(prevState => {
                       const newRbi = [...prevState.sampleRbi]
                       newRbi[index].sample_rbi_2 = true;
                       return {sampleRbi: newRbi}
                     })
                      this.props.capturedPOData.sampleRbi =
                         this.state.sampleRbi
                   }}
                  />
                </dt>
                
                <h2 style={{fontSize:"20px"}}>Sample 2</h2>
                

                </div>
                                      </span>
                
                
                    <span className="popup__text">
                    <div style={{display:"flex" , justifyContent:"center", alignItems:"right" }}>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    checked={
                      this.state.sampleRbi && this.state.sampleRbi[index].sample_rbi_3
                   }

                   value={
                    this.state.sampleRbi && this.state.sampleRbi[index].sample_rbi_3
                   }

                   onChange = {checkedValue => {
                     
                     this.setState(prevState => {
                       const newRbi = [...prevState.sampleRbi]
                       newRbi[index].sample_rbi_3 = true;
                       return {sampleRbi: newRbi}
                     })
                      this.props.capturedPOData.sampleRbi =
                         this.state.sampleRbi
                   }}
                  />
                </dt>
                
                <h2 style={{fontSize:"20px"}}>Sample 3</h2>
                

                </div>
                                      </span>
                
                
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
  )})}    
    
</Col>
              <Col sm='10'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Whether the Applicant is resident in India or resident outside India ?</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='residentOutsideIndia'
                    id='residentOutsideIndia'
                    value={
                      this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('residentoutsideIndia')
                        ? this.props.capturedPOData.residentoutsideIndia
                        : this.state.residentOutsideIndia
                    }
                    onChange={e => {
                      this.setState({ residentOutsideIndia: e.target.value})
                      this.props.capturedPOData.residentOutsideIndia =
                      e.target.value
                    }}
                    required
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
                    <span className="popup__text">
                    <div style={{display:"flex" , justifyContent:"center", alignItems:"right" }}>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    checked={this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('sample_indiaOrNot_1')
                        ? this.props.capturedPOData.sample_indiaOrNot_1
                        : this.state.sample_indiaOrNot_1}
                    value={
                      this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('sample_indiaOrNot_1')
                        ? this.props.capturedPOData.sample_indiaOrNot_1
                        : this.state.sample_indiaOrNot_1
                    }
                    onChange={checkedValue => {
                      this.setState({
                       sample_indiaOrNot_1: checkedValue.target.checked
                      })

                        this.props.capturedPOData.sample_indiaOrNot_1 =
                          checkedValue.target.checked
                    }}
                  />
                </dt>
                
                <h2 style={{fontSize:"20px", width:"96px"}}>Sample 1</h2>
                </div>
                                      </span>
                
                
                    <span className="popup__text">
                    <div style={{display:"flex" , justifyContent:"center", alignItems:"right" }}>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    checked={this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('sample_indiaOrNot_2')
                        ? this.props.capturedPOData.sample_indiaOrNot_2
                        : this.state.sample_indiaOrNot_2}
                    value={
                      this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('sample_indiaOrNot_2')
                        ? this.props.capturedPOData.sample_indiaOrNot_2
                        : this.state.sample_indiaOrNot_2
                    }
                    onChange={checkedValue => {
                      this.setState({
                       sample_indiaOrNot_2: checkedValue.target.checked
                      })

                        this.props.capturedPOData.sample_indiaOrNot_2 =
                          checkedValue.target.checked
                    }}
                  />
                </dt>
                
                <h2 style={{fontSize:"20px"}}>Sample 2</h2>
                

                </div>
                                      </span>
                
                
                    <span className="popup__text">
                    <div style={{display:"flex" , justifyContent:"center", alignItems:"right" }}>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    checked={this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('sample_indiaOrNot_3')
                        ? this.props.capturedPOData.sample_indiaOrNot_3
                        : this.state.sample_indiaOrNot_3}
                    value={
                      this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('sample_indiaOrNot_3')
                        ? this.props.capturedPOData.sample_indiaOrNot_3
                        : this.state.sample_indiaOrNot_3
                    }
                    onChange={checkedValue => {
                      this.setState({
                       sample_indiaOrNot_3: checkedValue.target.checked
                      })

                        this.props.capturedPOData.sample_indiaOrNot_3 =
                          checkedValue.target.checked
                    }}
                  />
                </dt>
                
                <h2 style={{fontSize:"20px"}}>Sample 3</h2>
                

                </div>
                                      </span>
                
                
                </div>
                </div>
          </div> </Col>
              
              <Col sm='12'>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Name of the Adjudicating Authority before whom the case in pending</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='nameOfAdjudicatingAuthority'
                    value={
                      this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('nameAdjudicatingAuthority')
                        ? this.props.capturedPOData.nameAdjudicatingAuthority
                        : this.state.nameOfAdjudicatingAuthority
                    }
                    onChange={e => {
                      this.setState({ nameOfAdjudicatingAuthority: e.target.value})
                      this.props.capturedPOData.nameOfAdjudicatingAuthority =
                      e.target.value
                    }}
                    required
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


        <div style={{width:'25%', paddingRight:'7px'}}>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Compounding Application Fee</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='compoundingApplicationFee'
                    id='compoundingApplicationFee'
                    value={
                      this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('compoundingApplicationfee')
                        ? this.props.capturedPOData.compoundingApplicationfee
                        : this.state.compoundingApplicationFee
                    }
                    onChange={e => {
                      this.setState({ compoundingApplicationFee: e.target.value})
                      this.props.capturedPOData.compoundingApplicationFee =
                      e.target.value
                    }}
                    required
                  />
                  <AvFeedback> 
                  Please enter Compounding Application Fee
                  </AvFeedback>
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </div>


              <div style={{width:'25%', paddingRight:'7px'}}>
              <Label style={{paddingBottom:'13px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}}  for='nameVerticalIcons'>Date of Incorporation / Registration</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <Flatpickr
                    style={{position:'relative' , bottom:'5px'}}
                    className='form-control'
                    value={dateOfIncorporation}
                    //defaultDate={new Date}
                    // value={
                    //   this.props.capturedPOData &&
                    //   this.props.capturedPOData.hasOwnProperty('dateIncorporationmod2')
                    //     ? new Date(this.props.capturedPOData.dateIncorporationmod2)
                    //     : dateOfIncorporation
                    // }
                    onChange={enteredDate => {
                      this.setState({
                        dateOfIncorporation:enteredDate
                      })

                      this.props.capturedPOData.dateIncorporationmod2 = new Date(
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
              </div>



        <div style={{width:'26%', paddingRight:'7px'}}>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Office Telephone Number (with STD Code)</Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='officeTeleNumber'
                    id='officeTeleNumber'
                    value={
                      this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('officeTeleNo')
                        ? this.props.capturedPOData.officeTeleNo
                        : this.state.officeTeleNumber
                    }
                    onChange={this.handleChange}
                    required
                  />
                  {errors.officeTeleNumber.length > 0 ?
                  <span className='error' style={{color:'#E55252', fontSize:"12px"}}>{errors.officeTeleNumber}</span>:
                  <AvFeedback> 
                    Please enter Office Telephone Number (with STD Code)
                  </AvFeedback>}
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </div>

      
              <div style={{width:'24%'}}>
                <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>Central</Label>
                <AvGroup style={{zIndex:"0"}} className='has-icon-left position-relative'>
                  <Select
                    className='React'
                    classNamePrefix='select'
                    defaultValue={PayOptions[0]}
                    name='clear'
                    options={PayOptions}
                    isClearable={true}
                    value={{
                      label:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectpayOption'
                        )
                          ? this.props.capturedPOData.selectpayOption
                          : PayOptions[0].label,
                      value:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectpayOption'
                        )
                          ? this.props.capturedPOData.selectpayOption
                          : PayOptions[0].value
                    }}
                    onChange={selectPayOption => {
                      this.setState({ selectPayOption})
                      this.props.capturedPOData.selectpayOption =
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
              </div>
            </Row>
          </div>
        </CardBody>
      </Card>
    )
  }
}

export default Module2Form
