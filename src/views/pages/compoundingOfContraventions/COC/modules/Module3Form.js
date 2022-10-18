import React from 'react'
import swal from 'sweetalert';
import ReactDOM from 'react-dom';
import "./popup.scss"

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
  AvField
} from 'availity-reactstrap-validation'
import { FaFileWord, FaFilePdf , FaPrint , FaPlus, FaFile , FaMinus} from 'react-icons/fa'
import Checkbox from '../../../../../components/Main/checkbox/CheckboxesVuexy'

import { Edit, PlusSquare, MinusSquare , FileText , Check } from 'react-feather'




class Module3Form extends React.Component {
  constructor(props){
    super(props)
  } 

  state = {
    sample1: new Map(),
    sample2: new Map(),
    sample3: new Map(),
    sample4: new Map(),
    background_input:'',
    natureofcontraventions_input:'',
    delayreasons_input:'',
    petitionrequest_input:'',    
    collapse: true,
    isChecked: false,
    basicPicker: new Date(),
    questions1: [''],   
    questions2: [''],  
    questions3: [''],  
    questions4: [''],   
    showPlus :true,
    checkedItems: new Map()
  }

  handleText = (i,id) => e => {
    if(id===1){
    let questions1 = [...this.state.questions1]
    questions1[i] = e.target.value
    
    this.props.capturedCOCData.background_input = 
    this.state.background_input

    this.setState({
      questions1,
      background_input : questions1,
    })
  }
  if(id===2){
    let questions2 = [...this.state.questions2]
    questions2[i] = e.target.value
    
    this.props.capturedCOCData.natureofcontraventions_input = 
    this.state.natureofcontraventions_input

    this.setState({
      questions2,
      natureofcontraventions_input : questions2,
    })
  }
  if(id===3){
    let questions3 = [...this.state.questions3]
    questions3[i] = e.target.value
    
    this.props.capturedCOCData.delayreasons_input = 
    this.state.delayreasons_input

    this.setState({
      questions3,
      delayreasons_input : questions3,
    })
  }
  if(id===4){
    let questions4 = [...this.state.questions4]
    questions4[i] = e.target.value
    
    this.props.capturedCOCData.petitionrequest_input = 
    this.state.petitionrequest_input

    this.setState({
      questions4,
      petitionrequest_input : questions4,
    })
  }
  }

  handleDelete = (i,id) => e => {
    e.preventDefault()
    if(id===1){
    let questions1 = [
      ...this.state.questions1.slice(0 , i),
      ...this.state.questions1.slice(i + 1)
    ]
    this.setState({
      questions1
    })
  }
  if(id===2){
    let questions2 = [
      ...this.state.questions2.slice(0 , i),
      ...this.state.questions2.slice(i + 1)
    ]
    this.setState({
      questions2
    })
  }
  if(id===3){
    let questions3 = [
      ...this.state.questions3.slice(0 , i),
      ...this.state.questions3.slice(i + 1)
    ]
    this.setState({
      questions3
    })
  }
  if(id===4){
    let questions4 = [
      ...this.state.questions4.slice(0 , i),
      ...this.state.questions4.slice(i + 1)
    ]
    this.setState({
      questions4
    })
  }
  }
  
  handleChange = (name, id) => e => {
    const item = name;
    const isChecked = e.target.checked;

    if(id==1){
      this.setState(prevState => ({
          sample1: prevState.sample1.set(item, isChecked)
      }));
      this.props.capturedCOCData.sample1 = this.state.sample1
    }

    if(id==2){
      this.setState(prevState => ({
          sample2: prevState.sample2.set(item, isChecked)
      }));
      this.props.capturedCOCData.sample2 = this.state.sample2
    }

    if(id==3){
      this.setState(prevState => ({
          sample3: prevState.sample3.set(item, isChecked)
      }));
      this.props.capturedCOCData.sample3 = this.state.sample3
    }
    
    if(id==4){
      this.setState(prevState => ({
          sample4: prevState.sample4.set(item, isChecked)
      }));
      this.props.capturedCOCData.sample4 = this.state.sample4
    }
};

  addBackgroundInput = (state,id)=> (e) => {
    console.log(id)
    e.preventDefault()
    if(id===1){
    let questions1 = state.concat([''])
      this.setState({
      questions1,
      showPlus:false
    })
  }
  if(id===2){
    let questions2 = state.concat([''])
      this.setState({
      questions2,
      showPlus:false
    })
  }
  if(id===3){
    let questions3 = state.concat([''])
      this.setState({
      questions3,
      showPlus:false
    })
  }
  if(id===4){
    let questions4 = state.concat([''])
      this.setState({
      questions4,
      showPlus:false
    })
  }
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

  

  render () 
  
  {

    console.log("props" , this.props.capturedCOCData)
    const inputdata = [
    {
      id:1,
      title:'1. BACKGROUND',
      state: this.state.questions1,
      func: this.addBackgroundInput,
      feedback : 'Please enter 1'
    },
    {
      id:2,
      title:'2. NATURE OF CONTRAVENTIONS',
      state: this.state.questions2,
      func: this.addBackgroundInput,
      feedback : 'Please enter 2'
    },
    {
      id:3,
      title:'3. DELAY REASONS',
      state: this.state.questions3,
      func: this.addBackgroundInput,
      feedback : 'Please enter 3'
    },
    {
      id:4,
      title:'4. PETITION REQUEST',
      state: this.state.questions4,
      func: this.addBackgroundInput,
      feedback : 'Please enter 4'
    },
    ]

    const checkboxes = [
      {   
        name: "sample_1",
        key: "sample1",
        label: "Sample 1",
      },
      {   
        name: "sample_2",
        key: "sample2",
        label: "Sample 2",
      },
      { 
        name: "sample_3",
        key: "sample3",
        label: "Sample 3"
      },
      { 
        name: "sample_4",
        key: "sample4",
        label: "Sample 4"
      }
  ];
    
    return (
      <>
      {inputdata.map((data)=>{

        const {id,title, state,func,feedback} = data
        return(
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardBody>


          <Form>                       
            <Row>
           
<Col sm="12">
 
 
{state.map((question, index) => (
      <Row   key={index}>

      <div></div>  
  <Col sm='10'>
  
<Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>{id}.{index +1}</Label>
    
    <AvGroup  className='has-icon-left position-relative' style={{marginBottom:"10px"}}>
    
      <Input
        type='text'
        //name=''
        style={{height:"100px"}}
        id='nameVerticalIcons'
        value={question}
        onChange={
          this.handleText(index,id)
          
        } 

      />

      <AvFeedback>{feedback}</AvFeedback>
    
    </AvGroup>
   
  </Col>
  

    <Col sm="2">
    <Row>
      
  <Col sm="4" >
  {id==1 && <div>
                <a href="#samples1">
                <div
                  className='fonticon-container'
                  style={{position:'absolute', top:"27px", width: '40px', color: 'primary'}}
                >
                  <div className=' fonticon-wrap'>
                    <FileText size={30} className='fonticon-wrap' />
                  </div>
                </div>
                </a>


              <div className="popup" id="samples1">
                
              <div className="popup__content">
               
              <a href="#" className="popup__close">&times;</a>
                  <div className="popup__right">
                  
                    <p className="popup__text" style={{columnCount: 1}}>
                    <div style={{display:"flex" , alignItems:"right" ,flexDirection: "column", paddingRight:"100px"}}>
                
                  {' '}
                  {checkboxes.map((item, index)=> (
                    <>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "end", justifyContent: "center"}}>
                      <Checkbox
                        color='success'
                        icon={<Check className='vx-icon' size={16} />}
                        label=''
                        onChange={this.handleChange(item.name, id)}
                      />
                      <h2 style={{fontSize:"20px", width:"110px", padding:"3px"}}>{item.label}</h2>
                      </div>
                    </>
                  ))}
                
                </div>
              </p>
                    
                </div>
                </div>
                </div>
          </div>}
    {id==2 && <div>
                <a href="#samples2">
                <div
                  className='fonticon-container'
                  style={{position:'absolute', top:"27px", width: '40px', color: 'primary'}}
                >
                  <div className=' fonticon-wrap'>
                    <FileText size={30} className='fonticon-wrap' />
                  </div>
                </div>
                </a>


              <div className="popup" id="samples2">
                
              <div className="popup__content">
               
              <a href="#" className="popup__close">&times;</a>
                  <div className="popup__right">
                  
                    <p className="popup__text" style={{columnCount: 1}}>
                    <div style={{display:"flex" , alignItems:"right" ,flexDirection: "column", paddingRight:"100px"}}>
                
                  {' '}
                  {checkboxes.map((item, index)=> (
                    <>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "end", justifyContent: "center"}}>
                      <Checkbox
                        color='success'
                        icon={<Check className='vx-icon' size={16} />}
                        label=''
                        onChange={this.handleChange(item.name, id)}
                      />
                      <h2 style={{fontSize:"20px", width:"110px", padding:"3px"}}>{item.label}</h2>
                      </div>
                    </>
                  ))}
                
                </div>
              </p>
                    
                </div>
                </div>
                </div>
          </div>}
          {id==3 && <div>
                <a href="#samples3">
                <div
                  className='fonticon-container'
                  style={{position:'absolute', top:"27px", width: '40px', color: 'primary'}}
                >
                  <div className=' fonticon-wrap'>
                    <FileText size={30} className='fonticon-wrap' />
                  </div>
                </div>
                </a>


              <div className="popup" id="samples3">
                
              <div className="popup__content">
               
              <a href="#" className="popup__close">&times;</a>
                  <div className="popup__right">
                  
                    <p className="popup__text" style={{columnCount: 1}}>
                    <div style={{display:"flex" , alignItems:"right" ,flexDirection: "column", paddingRight:"100px"}}>
                
                  {' '}
                  {checkboxes.map((item, index)=> (
                    <>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "end", justifyContent: "center"}}>
                      <Checkbox
                        color='success'
                        icon={<Check className='vx-icon' size={16} />}
                        label=''
                        onChange={this.handleChange(item.name, id)}
                      />
                      <h2 style={{fontSize:"20px", width:"110px", padding:"3px"}}>{item.label}</h2>
                      </div>
                    </>
                  ))}
                
                </div>
              </p>
                    
                </div>
                </div>
                </div>
          </div>}
          {id==4 && <div>
                <a href="#samples4">
                <div
                  className='fonticon-container'
                  style={{position:'absolute', top:"27px", width: '40px', color: 'primary'}}
                >
                  <div className=' fonticon-wrap'>
                    <FileText size={30} className='fonticon-wrap' />
                  </div>
                </div>
                </a>


              <div className="popup" id="samples4">
                
              <div className="popup__content">
               
              <a href="#" className="popup__close">&times;</a>
                  <div className="popup__right">
                  
                    <p className="popup__text" style={{columnCount: 1}}>
                    <div style={{display:"flex" , alignItems:"right" ,flexDirection: "column", paddingRight:"100px"}}>
                
                  {' '}
                  {checkboxes.map((item, index)=> (
                    <>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "end", justifyContent: "center"}}>
                      <Checkbox
                        color='success'
                        icon={<Check className='vx-icon' size={16} />}
                        label=''
                        onChange={this.handleChange(item.name, id)}
                      />
                      <h2 style={{fontSize:"20px", width:"110px", padding:"3px"}}>{item.label}</h2>
                      </div>
                    </>
                  ))}
                
                </div>
              </p>
                    
                </div>
                </div>
                </div>
          </div>}
                 </Col>
  
  {index !== 0 && 
  <Col sm="4" >
             <div
                  onClick={this.handleDelete(index,id)}
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
 
                 {index +1 === state.length && 
                 <Col sm="4" >
                 <div
                  onClick={func(state,id)}
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
            </Row>
          </Form>
        </CardBody>
      </Card>
        )
    })}  
    
    </>
    )
  }
}
export default Module3Form

// import React from 'react'
// import swal from 'sweetalert';
// import ReactDOM from 'react-dom';
// import "./popup.scss"

// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardBody,
//   Row,
//   Col,
//   Input,
//   Form,
//   Button,
//   Label,
//   Collapse
// } from 'reactstrap'
// import {
//   AvInput,
//   AvGroup,
//   AvFeedback,
//   AvField
// } from 'availity-reactstrap-validation'
// import { FaFileWord, FaFilePdf , FaPrint , FaPlus, FaFile , FaMinus} from 'react-icons/fa'
// import Checkbox from '../../../../../components/Main/checkbox/CheckboxesVuexy'

// import { Edit, PlusSquare, MinusSquare , FileText , Check } from 'react-feather'




// class Module3Form extends React.Component {
//   constructor(props){
//     super(props)
//   } 

  
    
 
//   state = {
//     sample1_1:false,
//     sample1_2:false,
//     sample1_3:false,
    
//     sample2_1:false,
//     sample2_2:false,
//     sample2_3:false,
    
//     sample3_1:false,
//     sample3_2:false,
//     sample3_3:false,
  
//     sample4_1:false,
//     sample4_2:false,
//     sample4_3:false,
    
//     collapse: true,
//     isChecked: false,
//     basicPicker: new Date(),
//     questions: [''],
//     questions2: [''],
//     questions3: [''],
//     questions4: [''],


//     background1_input_1:"",
//     background1_input_2:"",
//     background1_input_3:"",
//     background1_input_4:"",
//     background1_input_5:"",
//     background1_input_6:"",
//     background1_input_7:"",
//     background1_input_8:"",
//     background1_input_9:"",
//     background1_input_10:"",
//     background1_input_11:"",
    
    
//     background2_input_1:"",
//     background2_input_2:"",
//     background2_input_3:"",
//     background2_input_4:"",
//     background2_input_5:"",
//     background2_input_6:"",
//     background2_input_7:"",
//     background2_input_8:"",
//     background2_input_9:"",
//     background2_input_10:"",
//     background2_input_11:"",
    
    
    
//     background3_input_1:"",
//     background3_input_2:"",
//     background3_input_3:"",
//     background3_input_4:"",
//     background3_input_5:"",
//     background3_input_6:"",
//     background3_input_7:"",
//     background3_input_8:"",
//     background3_input_9:"",
//     background3_input_10:"",
//     background3_input_11:"",
    
    
    
//     background4_input_1:"",
//     background4_input_2:"",
//     background4_input_3:"",
//     background4_input_4:"",
//     background4_input_5:"",
//     background4_input_6:"",
//     background4_input_7:"",
//     background4_input_8:"",
//     background4_input_9:"",
//     background4_input_10:"",
//     background4_input_11:"",
    
    
    
//     showPlus :true

//     // addColumn
//   }

  
//   handleText = i => e => {
//     let questions = [...this.state.questions]
//     questions[i] = e.target.value
//     this.setState({
//       questions, 
//       })
    
//    this.props.capturedCOCData.inputsOf1 = questions  
   
//    console.log("this.props.capturedCOCData.inputsOf1[0]" , this.props.capturedCOCData.inputsOf1[0] )
//    console.log("this.props.capturedCOCData.inputsOf1[1]" , this.props.capturedCOCData.inputsOf1[1] )

//   }

//   handleDelete = i => e => {
//     e.preventDefault()
//     let questions = [
//       ...this.state.questions.slice(0 , i),
//       ...this.state.questions.slice(i + 1)
//     ]
//     this.setState({
//       questions
//     })
//   }


  
//   addInput = e => {
//     e.preventDefault()
//     let questions = this.state.questions.concat([''])
//       this.setState({
//       questions,
//       showPlus:false
//     })
//   }

  
//   handleText2 = i => e => {
//     let questions2 = [...this.state.questions2]
//     questions2[i] = e.target.value
    
    
//             this.props.capturedCOCData.background2_input_1 = 
//       this.state.questions2[0]
     
    
//     if(!this.state.background2_input_2 === undefined       ){
//       this.props.capturedCOCData.background2_input_2 = 
//       this.state.background2_input_2
//       }
    
//     if(!this.state.background2_input_3 === undefined       ){
//       this.props.capturedCOCData.background2_input_3 = 
//       this.state.background2_input_3
//       }
    
//     if(!this.state.background2_input_4 === undefined       ){
//       this.props.capturedCOCData.background2_input_4 = 
//       this.state.background2_input_4
//       }
    
//     if(!this.state.background2_input_5 === undefined       ){
//       this.props.capturedCOCData.background2_input_5 = 
//       this.state.background2_input_5
//       }
    
//     if(!this.state.background2_input_6 === undefined       ){
//       this.props.capturedCOCData.background2_input_6 = 
//       this.state.background2_input_6
//       }
    
//     if(!this.state.background2_input_7 === undefined       ){
//       this.props.capturedCOCData.background2_input_7 = 
//       this.state.background2_input_7
//       }
    
//     if(!this.state.background2_input_8 === undefined       ){
//       this.props.capturedCOCData.background2_input_8 = 
//       this.state.background2_input_8
//       }
    
//     if(!this.state.background2_input_9 === undefined       ){
//       this.props.capturedCOCData.background2_input_9 = 
//       this.state.background2_input_9
//       }
    
//     if(!this.state.background2_input_10 === undefined       ){
//       this.props.capturedCOCData.background2_input_10 = 
//       this.state.background2_input_10
//       }
    
//     if(!this.state.background2_input_11 === undefined       ){
//       this.props.capturedCOCData.background2_input_11 = 
//       this.state.background2_input_11
//       }
    

//     this.setState({
//       questions2 , 
//       background2_input_1 : questions2[0],
//       background2_input_2 : questions2[1],
//       background2_input_3 : questions2[2],
//       background2_input_4 : questions2[3],
//       background2_input_5 : questions2[4],
//       background2_input_6 : questions2[5],
//       background2_input_7 : questions2[6],
//       background2_input_8 : questions2[7],
//       background2_input_9 : questions2[8],
//       background2_input_10 : questions2[9],
//       background2_input_11 : questions2[10],
//     })
//   }


//   handleDelete2 = i => e => {
//     e.preventDefault()
//     let questions2 = [
//       ...this.state.questions2.slice(0 , i),
//       ...this.state.questions2.slice(i + 1)
//     ]
//     this.setState({
//       questions2
//     })
//   }

  
//   addbackground2_Input = e => {
//     e.preventDefault()
//     let questions2 = this.state.questions2.concat([''])
//       this.setState({
//       questions2,
//       showPlus:false
//     })
//   }


  
//   handleText3 = i => e => {
//     let questions3 = [...this.state.questions3]
//     questions3[i] = e.target.value
    
//     this.props.capturedCOCData.background_input_1 = 
//     this.state.background_input_1
    
    
//     if(this.state.background_input_2){
//     this.props.capturedCOCData.background_input_2 = 
//     this.state.background_input_2
//   }
  

//   if(this.state.background_input_3){
//     this.props.capturedCOCData.background_input_3 = 
//     this.state.background_input_3
//   }
//   if(this.state.background_input_4){
//     this.props.capturedCOCData.background_input_4 = 
//     this.state.background_input_4
//   }
//   if(this.state.background_input_5){
//     this.props.capturedCOCData.background_input_5 = 
//     this.state.background_input_5
//   }
//   if(this.state.background_input_6){
//     this.props.capturedCOCData.background_input_6 = 
//     this.state.background_input_6
//   }
//   if(this.state.background_input_7){
//     this.props.capturedCOCData.background_input_7 = 
//     this.state.background_input_7
//   }
//   if(this.state.background_input_8){
//     this.props.capturedCOCData.background_input_8 = 
//     this.state.background_input_8
//   }
//   if(this.state.background_input_9){
//     this.props.capturedCOCData.background_input_9 = 
//     this.state.background_input_9
//   }
//   if(this.state.background_input_10){
//     this.props.capturedCOCData.background_input_10 = 
//     this.state.background_input_10
//   }
//   if(this.state.background_input_11){
//     this.props.capturedCOCData.background_input_11 = 
//     this.state.background_input_11
//   }
//   if(this.state.background_input_12){
//     this.props.capturedCOCData.background_input_12 = 
//     this.state.background_input_12
//   }
  

//     this.setState({
//       questions3 ,
//       background3_input_1 : questions3[0],
//       background3_input_2 : questions3[1],
//       background3_input_3 : questions3[2],
//       background3_input_4 : questions3[3],
//       background3_input_5 : questions3[4],
//       background3_input_6 : questions3[5],
//       background3_input_7 : questions3[6],
//       background3_input_8 : questions3[7],
//       background3_input_9 : questions3[8],
//       background3_input_10 : questions3[9],
//       background3_input_11 : questions3[10],
//     })
//   }


//   handleDelete3 = i => e => {
//     e.preventDefault()
//     let questions3 = [
//       ...this.state.questions3.slice(0 , i),
//       ...this.state.questions3.slice(i + 1)
//     ]
//     this.setState({
//       questions3
//     })
//   }

  
//   addbackground3_Input = e => {
//     e.preventDefault()
//     let questions3 = this.state.questions3.concat([''])
//       this.setState({
//       questions3,
//       showPlus:false
//     })
//   }

  
//   handleText4 = i => e => {
//     let questions4 = [...this.state.questions4]
//     questions4[i] = e.target.value
    
//     this.props.capturedCOCData.background4_input_1 = 
//     this.state.background4_input_1
    
    
    
//     this.props.capturedCOCData.background4_input_2 = 
//     this.state.background4_input_2
    

  
//     this.props.capturedCOCData.background4_input_3 = 
//     this.state.background4_input_3

  
//     this.props.capturedCOCData.background4_input_4 = 
//     this.state.background4_input_4

  
//     this.props.capturedCOCData.background4_input_5 = 
//     this.state.background4_input_5

  
//     this.props.capturedCOCData.background4_input_6 = 
//     this.state.background4_input_6

  
//     this.props.capturedCOCData.background4_input_7 = 
//     this.state.background4_input_7

  
//     this.props.capturedCOCData.background4_input_8 = 
//     this.state.background4_input_8

  
//     this.props.capturedCOCData.background4_input_9 = 
//     this.state.background4_input_9

  
//     this.props.capturedCOCData.background4_input_10 = 
//     this.state.background4_input_10

  
//     this.props.capturedCOCData.background4_input_11 = 
//     this.state.background4_input_11

  
//     this.props.capturedCOCData.background4_input_12 = 
//     this.state.background4_input_12

  

//     this.setState({
//       questions4 , 
//       background4_input_1 : questions4[0],
//       background4_input_2 : questions4[1],
//       background4_input_3 : questions4[2],
//       background4_input_4 : questions4[3],
//       background4_input_5 : questions4[4],
//       background4_input_6 : questions4[5],
//       background4_input_7 : questions4[6],
//       background4_input_8 : questions4[7],
//       background4_input_9 : questions4[8],
//      background4_input_10 : questions4[9],
//      background4_input_11 : questions4[10],
//     })
    
   
//   }


//   handleDelete4 = i => e => {
//     e.preventDefault()
//     let questions4 = [
//       ...this.state.questions4.slice(0 , i),
//       ...this.state.questions4.slice(i + 1)
//     ]
//     this.setState({
//       questions4
//     })
//   }

  
//   addbackground4_Input = e => {
//     e.preventDefault()
//     let questions4 = this.state.questions4.concat([''])
//       this.setState({
//       questions4,
//       showPlus:false
//     })
//   }


//   handleSwitchChange = () => {
//     this.setState({
//       isChecked: !this.state.isChecked
//     })
//   }

//   onEntered = () => {
//     this.setState({ status: 'Opened' })
//   }
//   onEnteredAll = () => {
//     this.setState({ status: 'Opened' })
//   }
//   onExited = () => {
//     this.setState({ status: 'Closed' })
//   }

//   onExiting = () => {
//     this.setState({ status: 'Closing...' })
//   }

//   toggle = () => {
//     this.setState(state => ({ collapse: !state.collapse }))
//   }

  

//   render () 
  
  
//   {

//     console.log("props" , this.props.capturedCOCData)

    
  
   
//     return (
//       <Card>
//         <CardHeader>
//           <CardTitle>1. BACKGROUND</CardTitle>
//         </CardHeader>
//         <CardBody>


//           <Form>                       
//             <Row>
           
// <Col sm="12">
 
 
// {this.state.questions.map((question, index) => (
//       <Row   key={index}>

        
//   <Col sm='10'>
  
// <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>1.{index +1}</Label>
    
//     <AvGroup  className='has-icon-left position-relative' style={{marginBottom:"10px"}}>
    
//       <Input
//         type='text'
//         // name={{index}}
//         style={{height:"100px"}}
//         id='nameVerticalIcons'
//         value={question}
//         onChange={
//           this.handleText(index) 
//         } 

//       />

//       <AvFeedback>Please enter 1</AvFeedback>
    
//     </AvGroup>
//   </Col>
  
//   <Col sm="2">
//     <Row>
//   <Col sm="4" >
//                 <a href="#samples-1">
//                 <div
//                   // onClick={this.popupwala}
//                   className='fonticon-container'
//                   style={{
//                     position:'absolute',
//                     top:"27px",
//                     width: '40px',    
//                     color: 'primary'
//                   }}
//                 >
//                   <div className=' fonticon-wrap'>
//                     <FileText size={30} className='fonticon-wrap' />
//                   </div>
//                 </div>
//                 </a>


//                 <div className="popup" id="samples-1" >
//               <div className="popup__content">
                

//               <a href="#" className="popup__close">&times;</a>
//                   <div className="popup__right">
//                     <p className="popup__text">
//                     <div style={{display:"flex" , justifyContent:"right", alignItems:"right"}}>
//                 <dt>
//                   {' '}
//                   <Checkbox
//                     color='success'
//                     icon={<Check className='vx-icon' size={16} />}
//                     label=''
//                     onChange={checkedValue => {
//                       this.setState({
//                        sample1_1: checkedValue.target.checked
//                       })
//                         this.props.capturedCOCData.sample1_1 =
//                           checkedValue.target.checked
//                     }}
                    
//                   />
//                 </dt>
                
//                 <h2 style={{fontSize:"20px", width:"110px"}}>Sample 1</h2>
                

//                 </div>
//                  </p>
                
                
//                     <p className="popup__text">
//                     <div style={{display:"flex" , justifyContent:"right", alignItems:"right"}}>
//                 <dt>
//                   {' '}
//                   <Checkbox
//                     color='success'
//                     icon={<Check className='vx-icon' size={16} />}
//                     label=''
//                     onChange={checkedValue => {
//                       this.setState({
//                        sample1_2: checkedValue.target.checked
//                       })

//                         this.props.capturedCOCData.sample1_2 =
//                           checkedValue.target.checked
//                     }}
//                   />
//                 </dt>
                
//                 <h2 style={{fontSize:"20px"}}>Sample 2</h2>
                

//                 </div>
//                                       </p>
                
                
//                     <p className="popup__text">
//                     <div style={{display:"flex" , justifyContent:"right"}}>
//                 <dt>
//                   {' '}
//                   <Checkbox
//                     color='success'
//                     icon={<Check className='vx-icon' size={16} />}
//                     label=''
//                     onChange={checkedValue => {
//                       this.setState({
//                        sample1_3: checkedValue.target.checked
//                       })

//                         this.props.capturedCOCData.sample1_3 =
//                           checkedValue.target.checked
//                     }}
//                   />
//                 </dt>
                
//                 <h2 style={{fontSize:"20px"}}>Sample 3</h2>
                

//                 </div>
//                                       </p>
                
                
//                 </div>
//                 </div>
//           </div>
//                  </Col>
  
//   {index !== 0 && 
//   <Col sm="4" >
//              <div
//                   onClick={this.handleDelete(index)}
//                   className='fonticon-container'
//                   style={{
//                     position:'absolute',
//                     top:"28px",
//                     width: '40px',
//                     color: 'primary'
//                   }}
//                 >
//                   <div className='fonticon-wrap'>
//                     <MinusSquare size={30} className='fonticon-wrap' />
//                   </div>
//                 </div>
//              </Col>}
 
//                  {index +1 === this.state.questions.length && 
//                  <Col sm="4" >
//                  <div
//                   onClick={this.addInput}
//                   className='fonticon-container'
//                   style={{
//                     position:'absolute',
//                     top:"27px",
//                     width: '40px',
//                     color: 'primary'
//                   }}
//                 >
//                   <div className=' fonticon-wrap'>
//                     <PlusSquare size={30} className='fonticon-wrap' />
//                   </div>
//                 </div>
//                  </Col>}
//                  </Row>
//                  </Col>
 
//   </Row >
//     ))}    
    
    
// </Col>



//             <CardHeader>
//         <CardTitle style={{width:"1200px",  marginBottom:"20px"}}>2. NATURE OF CONTRAVENTIONS</CardTitle>
//       </CardHeader>
//       <Col sm="12">
 
 
//  {this.state.questions2.map((question2, index) => (
//        <Row   key={index}>
 
         
//    <Col sm='10'>
//  <Label  style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>2.{index +1}</Label>
     
//      <AvGroup  className='has-icon-left position-relative' style={{marginBottom:"10px"}}>
     
//        <AvInput
//          type='text'
//          name='name'
//          style={{height:"100px"}}
//          id='nameVerticalIcons'
//          onChange={this.handleText2(index)} 
//          value={question2}
//        />
 
//  <AvFeedback>Please enter 2</AvFeedback>
     
//      </AvGroup>
//    </Col>
   
//    <Col sm="2">

//      <Row >
//    <Col sm="4" >
//               <a href="#samples-2">
//                 <div
//                   // onClick={this.popupwala}
//                   className='fonticon-container'
//                   style={{
//                     position:'absolute',
//                     top:"27px",
//                     width: '40px',    
//                     color: 'primary'
//                   }}
//                 >
//                   <div className=' fonticon-wrap'>
//                     <FileText size={30} className='fonticon-wrap' />
//                   </div>
//                 </div>
//                 </a>

                
//                 <div className="popup" id="samples-2" >
//               <div className="popup__content">
                

//               <a href="#" className="popup__close">&times;</a>
//                   <div className="popup__right">
//                     <p className="popup__text">
//                     <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
//                 <dt>
//                   {' '}
//                   <Checkbox
//                     color='success'
//                     icon={<Check className='vx-icon' size={16} />}
//                     label=''
//                     onChange={checkedValue => {
//                       this.setState({
//                        sample2_1: checkedValue.target.checked
//                       })

//                         this.props.capturedCOCData.sample2_1 =
//                           checkedValue.target.checked
//                     }}
//                   />
//                 </dt>
                
//                 <h2 style={{fontSize:"20px", width:"110px"}}>Sample 1</h2>
                

//                 </div>
//                                       </p>
                
                
//                     <p className="popup__text">
//                     <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
//                 <dt>
//                   {' '}
//                   <Checkbox
//                     color='success'
//                     icon={<Check className='vx-icon' size={16} />}
//                     label=''
//                     onChange={checkedValue => {
//                       this.setState({
//                        sample2_2: checkedValue.target.checked
//                       })

//                         this.props.capturedCOCData.sample2_2 =
//                           checkedValue.target.checked
//                     }}
//                   />
//                 </dt>
                
//                 <h2 style={{fontSize:"20px"}}>Sample 2</h2>
                

//                 </div>
//                                       </p>
                
                
//                     <p className="popup__text">
//                     <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
//                 <dt>
//                   {' '}
//                   <Checkbox
//                     color='success'
//                     icon={<Check className='vx-icon' size={16} />}
//                     label=''
//                     onChange={checkedValue => {
//                       this.setState({
//                        sample2_3: checkedValue.target.checked
//                       })

//                         this.props.capturedCOCData.sample2_3 =
//                           checkedValue.target.checked
//                     }}
//                   />
//                 </dt>
                
//                 <h2 style={{fontSize:"20px"}}>Sample 3</h2>
                

//                 </div>
//                                       </p>
                
                
//                 </div>
//                 </div>
//           </div>
//                  </Col>   

          
//           {index !==0 && 
//           <Col sm="4" >
//           <div
//                onClick={this.handleDelete2(index)}
//                className='fonticon-container'
//                style={{
//                  float:"bottom",position:'absolute',
//                  top:"28px",
//                  width: '40px',
//                  color: 'primary'
//                }}
//              >
//                <div className='fonticon-wrap'>
//                  <MinusSquare size={30} className='fonticon-wrap' />
//                </div>
//              </div>
//           </Col>}          


//                {index + 1 === this.state.questions2.length &&
//                 <Col sm="4" >
//                 <div
//                  onClick={this.addbackground2_Input}
//                  className='fonticon-container'
//                  style={{
//                    position:'absolute',
//                    top:"27px",
//                    width: '40px',
//                    color: 'primary'
//                  }}
//                >
//                  <div className=' fonticon-wrap'>
//                    <PlusSquare size={30} className='fonticon-wrap' />
//                  </div>
//                </div>
//                 </Col>
               
//                }
//                </Row>
//                </Col>
                
  
//    </Row >
//      ))}    
     
     
//  </Col>
 
//               <CardHeader>
//           <CardTitle style={{width:"1200px",  marginBottom:"20px"}}>3. DELAY REASONS</CardTitle>
//         </CardHeader>

             
//         <Col sm="12">
 
 
//  {this.state.questions3.map((question3, index) => (
//        <Row   key={index}>
 
         
//    <Col sm='10'>
//  <Label  style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>3.{index +1}</Label>
     
//      <AvGroup  className='has-icon-left position-relative' style={{marginBottom:"10px"}}>
     
//        <AvInput
//          type='text'
//          name='name'
//          style={{height:"100px"}}
//          id='nameVerticalIcons'
//          onChange={this.handleText3(index)} 
//          value={question3}
//        />
 
//  <AvFeedback>Please enter 3</AvFeedback>
     
//      </AvGroup>
//    </Col>
   
//    <Col sm="2">
//      <Row>
//    <Col sm="4" >
//    <a href="#samples-3">
//                 <div
//                   // onClick={this.popupwala}
//                   className='fonticon-container'
//                   style={{
//                     position:'absolute',
//                     top:"27px",
//                     width: '40px',    
//                     color: 'primary'
//                   }}
//                 >
//                   <div className=' fonticon-wrap'>
//                     <FileText size={30} className='fonticon-wrap' />
//                   </div>
//                 </div>
//                 </a>

                
//                 <div className="popup" id="samples-3" >
//               <div className="popup__content">
                

//               <a href="#" className="popup__close">&times;</a>
//                   <div className="popup__right">
//                     <p className="popup__text">
//                     <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
//                 <dt>
//                   {' '}
//                   <Checkbox
//                     color='success'
//                     icon={<Check className='vx-icon' size={16} />}
//                     label=''
//                     onChange={checkedValue => {
//                       this.setState({
//                        sample3_1: checkedValue.target.checked
//                       })

//                         this.props.capturedCOCData.sample3_1 =
//                           checkedValue.target.checked
//                     }}
//                   />
//                 </dt>
                
//                 <h2 style={{fontSize:"20px", width:"110px"}}>Sample 1</h2>
                

//                 </div>
//                                       </p>
                
                
//                     <p className="popup__text">
//                     <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
//                 <dt>
//                   {' '}
//                   <Checkbox
//                     color='success'
//                     icon={<Check className='vx-icon' size={16} />}
//                     label=''
//                     onChange={checkedValue => {
//                       this.setState({
//                        sample3_2: checkedValue.target.checked
//                       })

//                         this.props.capturedCOCData.sample3_2 =
//                           checkedValue.target.checked
//                     }}
//                   />
//                 </dt>
                
//                 <h2 style={{fontSize:"20px"}}>Sample 2</h2>
                

//                 </div>
//                                       </p>
                
                
//                     <p className="popup__text">
//                     <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
//                 <dt>
//                   {' '}
//                   <Checkbox
//                     color='success'
//                     icon={<Check className='vx-icon' size={16} />}
//                     label=''
//                     onChange={checkedValue => {
//                       this.setState({
//                        sample3_3: checkedValue.target.checked
//                       })

//                         this.props.capturedCOCData.sample3_3 =
//                           checkedValue.target.checked
//                     }}
//                   />
//                 </dt>
                
//                 <h2 style={{fontSize:"20px"}}>Sample 3</h2>
                

//                 </div>
//                                       </p>
                
                
//                 </div>
//                 </div>
//           </div>
//                  </Col>


//            {index !== 0 &&
//             <Col sm="4" >
//             <div
//                  onClick={this.handleDelete3(index)}
//                  className='fonticon-container'
//                  style={{
//                   position:'absolute',
//                    top:"28px",
//                    width: '40px',
//                    color: 'primary'
//                  }}
//                >
//                  <div className='fonticon-wrap'>
//                    <MinusSquare size={30} className='fonticon-wrap' />
//                  </div>
//                </div>
//             </Col>}


//                  {index + 1 === this.state.questions3.length && 
//                  <Col sm="4" >
//                  <div
//                   onClick={this.addbackground3_Input}
//                   className='fonticon-container'
//                   style={{
//                     position:'absolute',
//                     top:"27px",
//                     width: '40px',
//                     color: 'primary'
//                   }}
//                 >
//                   <div className=' fonticon-wrap'>
//                     <PlusSquare size={30} className='fonticon-wrap' />
//                   </div>
//                 </div>
//                  </Col> }
//                  </Row>
//                  </Col>
//    </Row >
//      ))}    
     
     
//  </Col>
 
//               <CardHeader>
//           <CardTitle style={{width:"1200px",  marginBottom:"20px"}}>4. PETITION REQUEST</CardTitle>
//         </CardHeader>

//         <Col sm="12">
 
 
//  {this.state.questions4.map((question4, index) => (
//        <Row   key={index}>
 
         
//    <Col sm='10'>
//  <Label  style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>4.{index +1}</Label>
     
//      <AvGroup  className='has-icon-left position-relative' style={{marginBottom:"10px"}}>
     
//        <AvInput
//          type='text'
//          name='name'
//          style={{height:"100px"}}
//          id='nameVerticalIcons'
//          onChange={this.handleText4(index)} 
//          value={question4}
//        />
 
//  <AvFeedback>Please enter 4</AvFeedback>
     
//      </AvGroup>
//    </Col>
  
//    <Col sm="2">
//    <Row>
//               <Col sm="4" >
//               <a href="#samples-4">
//                 <div
//                   // onClick={this.popupwala}
//                   className='fonticon-container'
//                   style={{
//                     position:'absolute',
//                     top:"27px",
//                     width: '40px',    
//                     color: 'primary'
//                   }}
//                 >
//                   <div className=' fonticon-wrap'>
//                     <FileText size={30} className='fonticon-wrap' />
//                   </div>
//                 </div>
//                 </a>

                
//                 <div className="popup" id="samples-4" >
//               <div className="popup__content">
                

//               <a href="#" className="popup__close">&times;</a>
//                   <div className="popup__right">
//                     <p className="popup__text">
//                     <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
//                 <dt>
//                   {' '}
//                   <Checkbox
//                     color='success'
//                     icon={<Check className='vx-icon' size={16} />}
//                     label=''
//                     onChange={checkedValue => {
//                       this.setState({
//                        sample4_1: checkedValue.target.checked
//                       })

//                         this.props.capturedCOCData.sample4_1 =
//                           checkedValue.target.checked
//                     }}
//                   />
//                 </dt>
                
//                 <h2 style={{fontSize:"20px", width:"110px"}}>Sample 1</h2>
                

//                 </div>
//                                       </p>
                
                
//                     <p className="popup__text">
//                     <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
//                 <dt>
//                   {' '}
//                   <Checkbox
//                     color='success'
//                     icon={<Check className='vx-icon' size={16} />}
//                     label=''
//                     onChange={checkedValue => {
//                       this.setState({
//                        sample4_2: checkedValue.target.checked
//                       })

//                         this.props.capturedCOCData.sample4_2 =
//                           checkedValue.target.checked
//                     }}
//                   />
//                 </dt>
                
//                 <h2 style={{fontSize:"20px"}}>Sample 2</h2>
                

//                 </div>
//                                       </p>
                
                
//                     <p className="popup__text">
//                     <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
//                 <dt>
//                   {' '}
//                   <Checkbox
//                     color='success'
//                     icon={<Check className='vx-icon' size={16} />}
//                     label=''
//                     onChange={checkedValue => {
//                       this.setState({
//                        sample4_3: checkedValue.target.checked
//                       })

//                         this.props.capturedCOCData.sample4_3 =
//                           checkedValue.target.checked
//                     }}
//                   />
//                 </dt>
                
//                 <h2 style={{fontSize:"20px"}}>Sample 3</h2>
                

//                 </div>
//                                       </p>
                
                
//                 </div>
//                 </div>
//           </div>
//                  </Col>   
             
             
//              {index !== 0 && 
//              <Col sm="4" >
//              <div
//                   onClick={this.handleDelete4(index)}
//                   className='fonticon-container'
//                   style={{
//                     float:"bottom",position:'absolute',
//                     top:"28px",
//                     width: '40px',
//                     color: 'primary'
//                   }}
//                 >
//                   <div className='fonticon-wrap'>
//                     <MinusSquare size={30} className='fonticon-wrap' />
//                   </div>
//                 </div>
//              </Col>}
 
//                {index + 1 === this.state.questions4.length &&  
//                 <Col sm="4" >
//                  <div
//                   onClick={this.addbackground4_Input}
//                   className='fonticon-container'
//                   style={{
//                     position:'absolute',
//                     top:"27px",
//                     width: '40px',
//                     color: 'primary'
//                   }}
//                 >
//                   <div className=' fonticon-wrap'>
//                     <PlusSquare size={30} className='fonticon-wrap' />
//                   </div>
//                 </div>
//                  </Col>}
//                  </Row>
//                  </Col>
  
//    </Row >
//      ))}    

     
//  </Col>
 
//             </Row>
//           </Form>
//         </CardBody>
//       </Card>
//     )
//   }
// }
// export default Module3Form
