import React from 'react'
import BreadCrumbs from '../../../../components/Main/breadCrumbs/BreadCrumb'
import Prism from 'prismjs'
import Module1Form from './modules/Module1Form'
import Module2Form from './modules/Module2Form'
import Module3Form from './modules/Module3Form'
import Module4Form from './modules/Module4Form'
import Module5Form from './modules/Module5Form'
import Module6Form from './modules/Module6Form'
import Module7Form from './modules/Module7Form'
import Module8Form from './modules/Module8Form'
import Module9Form from './modules/Module9Form'
import Module10Form from './modules/Module10Form'
import Wizard from './Wizard'
import {history} from '../../../../history'

import {
  AvInput,
  AvGroup,
  AvFeedback,
  AvField,
  AvForm
} from 'availity-reactstrap-validation'
import { 
  Card,
  FormGroup,
  CardHeader,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Label
} from 'reactstrap'
import Select from 'react-select'
import 'prismjs/components/prism-jsx'

import { getFdiDatabyUser, updateFdiDatabyUser} from '../../../../redux/actions/coc/fdiAction'

import { connect } from 'react-redux'


const contraventionOptions = [
  { value: 'Foreign Direct Investment', label: 'Foreign Direct Investment' },
  { value: 'Overseas Direct Investment', label: 'Overseas Direct Investment' },
  { value: 'External Commercial Borrowings', label: 'External Commercial Borrowings' },
  { value: 'Branch Office', label: ' Branch Office ' },
  { value: 'Liaison Office ', label: 'Liaison Office ' },
  { value: 'Project Office', label: ' Project Office' },
  { value: 'Others', label: ' Others' },
]

const contraventionSubOptions = [
  { value: 'FEMA 20/2000 - Paragraph 9(1)(A) of Schedule I : Delay in reporting inward remittance received for issue of shares.', label: 'FEMA 20/2000 - Paragraph 9(1)(A) of Schedule I : Delay in reporting inward remittance received for issue of shares.' },
  { value: 'Desire', label: 'Desire' },
  { value: 'Love', label: 'Love' },
  { value: 'Kindness', label: 'Kindness' },
  { value: 'Fun', label: 'Fun' },]


class Tabs extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidUpdate (prevProps, nextProps) {
    if (prevProps.values !== this.props.values)
      this.setState({ capturedFDIData: this.props.values })
  }

  
  componentDidMount () {
    if (this.state.init) {
      this.props.getFdiDatabyUser()
      this.setState({ init: false })
    }
    Prism.highlightAll()
  }

  onSelect = (name, value) => {
    if (typeof name !== 'string') {
      name = name.target.name
    }
    const updatedCapturedData = this.state.capturedFDIData || {}
    updatedCapturedData[name] = value
    this.setState({ capturedFDIData: updatedCapturedData })
  }

  state = {
    init: true,
    choiceOptions  : [
      {
     title: 'FDI',
     stepNumber: 4,
     content: (
       <Module7Form
         dataCaptured={this.state ? this.state.capturedFDIData : {}}
       />
     )
   },
   {
     title: 'ECB',
     stepNumber: 4,
     content: (
       <Module8Form
         dataCaptured={this.state ? this.state.capturedFDIData : {}}
       />
     )
   },
   
   {
     title: 'ODI',
     stepNumber: 4,
     content: (
       <Module9Form
         dataCaptured={this.state ? this.state.capturedFDIData : {}}
       />
     )
   }, 
   {
     title: 'BO/LO/PO',
     stepNumber: 4,
     content: (
       <Module10Form
         dataCaptured={this.state ? this.state.capturedFDIData : {}}
       />
     )
     
   }, 
   {
    title: 'Select Topic',
    stepNumber: 4,
    content: (
      <Module10Form
        dataCaptured={this.state ? this.state.capturedFDIData : {}}
      />
    )
    }
  ]
   ,


  
    capturedFDIData: {},
    // disInvestmentData: [
    //   {
    //     signatoryName: ''
    //   }
    // ],
    
     selectedOption:[{value: '' }],
     
     breadCrumbTitleArray:[''],

    steps: [
      {
        title: 'Entity Information',
        stepNumber: 1,
        content: (
          <Module1Form
            dataCaptured={this.state ? this.state.capturedFDIData : {}}
          />
        )
      },
      {
        title: 'Compounding Details',
        stepNumber: 2,
        content: (
          <Module2Form
            dataCaptured={this.state ? this.state.capturedFDIData : {}}
          />
        )
      },
      {
        title: 'Compounding Submissions',
        stepNumber: 3,
        content: (
          <Module3Form
            dataCaptured={this.state ? this.state.capturedFDIData : {}}
          />
        )
      },
      {
        title: 'FDI',
        stepNumber: 4,
        content: (
          <Module7Form
            dataCaptured={this.state ? this.state.capturedFDIData : {}}
          />
        )
      },
      {
        title: "Annexures" ,
        stepNumber: 5,
        content: (
          <Module4Form
            dataCaptured={this.state ? this.state.capturedFDIData : {}}
          />
        )
      },
      {
        title: 'Authorised Signatory',
        stepNumber: 6,
        content: (
          <Module5Form
            dataCaptured={this.state ? this.state.capturedFDIData : {}}
          />
        )
      },
      {
        title: 'Preview',
        stepNumber: 7,
        content: (
          <Module6Form
            dataCaptured={this.state ? this.state.capturedFDIData : {}}
          />
        )
      },
     
    
  
    ],
    
    chosenTopic:[],
    

  }




  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  toggle = tab => {
    if (this.state.active !== tab) {
      this.setState({
        active: tab
      })
    }
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
 
  }

 

  render () {
    const { steps } = this.state
    // const { chosenTopic } = this.state
    // const { choiceOptions } = this.state

    const {selectedOption} = this.state
  
    // var selectedTopicArray = [];

    if(selectedOption.value === "Foreign Direct Investment"){
      history.push('/coc/fdi')
    }
    else if(selectedOption.value === "External Commercial Borrowings"){
        history.push('/coc/ecb')
    }
   
    else if(selectedOption.value === "Overseas Direct Investment"){
       history.push('/coc/odi')
    }
    else if(selectedOption.value === "Branch Office"){
        history.push('/coc/bo')
    }
    else if(selectedOption.value === "Liaison Office "){
      history.push('/coc/lo')
    }
    else if(selectedOption.value === "Project Office"){
      history.push('/coc/po')
    }
    else if(selectedOption.value === "Others"){
      history.push('/coc/others')
    }

        //      console.log("sta" , selectedTopicArray)
        //     Array.prototype.injectArray = function( idx, arr ) {
        //       return this.slice( 0, idx ).concat( arr ).concat( this.slice( idx ) );
        //   };
          

        // var finalStepss= steps.injectArray(3 , selectedTopicArray  )     



    return (
      <React.Fragment>

        <BreadCrumbs
          breadCrumbTitle='Compounding of Contraventions'
          breadCrumbActive="Compounding of Contraventions"
          breadCrumbParent="COC"
        />
        <Row>
          <Col sm='12'>
            <Card>
              <CardHeader>
              <Col sm='6'>
                <Label style={{position:'relative', left:'10px',  paddingBottom:'11px' , color:'black' , fontSize:'16px' , fonWeight:'900'}} for='nameVerticalIcons'>Select Topic</Label>
                <FormGroup  style={{zIndex:"100" , width:"90%" , position:"relative" , left:'10px'}} className='has-icon-left position-relative'>
                  <Select
                  onChange={this.handleChange}
                    className='React'
                    classNamePrefix='select'
                    defaultValue={contraventionOptions[0]}
                    name='clear'                    
                    options={contraventionOptions}
                    isClearable={true}
                  />
                  {/* <div className='form-control-position'>
                    <Calendar size={15} />
                  </div> */}
                </FormGroup>
              </Col> 


              <Col sm='6' >
                <Label style={{position:'relative', left:'57px',paddingBottom:'11px' , color:'black' , fontSize:'16px' , fonWeight:'900'}} for='nameVerticalIcons'>Select Sub-Topic</Label>
                <FormGroup style={{zIndex:"100"  , width:"90%" , position:"relative" , left:'60px'}} className='has-icon-left position-relative'>
                  <Select
                  isMulti
                    className='React'
                    classNamePrefix='select'
                    // defaultValue={contraventionSubOptions[1]}
                    name='clear'
                    options={contraventionSubOptions}
                    isClearable={true}
                    
                 />
                  {/* <div className='form-control-position'>
                    <Calendar size={15} />
                  </div> */}
                </FormGroup>
              </Col> 


              </CardHeader>{' '}
               <CardBody>
                {/* <p> UIN: XXXXXXXXXXXX </p>{' '} */}
                <Wizard
                  validate
                  enableAllSteps
              
                  // onFinish={() => this.props.updateFdiDatabyUser(this.state.capturedFDIData)
                  // }
                
                  update={() =>
                    this.props.updateFdiDatabyUser(this.state.capturedFDIData)
                  }
                  steps={steps}
                  nextData={capturedData =>{
                    this.setState({
                      capturedFDIData: {...capturedData, ...this.state.capturedFDIData}
                    })
                  }}
                  capturedFDIData={this.state.capturedFDIData}
                />
              </CardBody>{' '}
            </Card>{' '}
          </Col>{' '}
        </Row>{' '}
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    values: state.coc ? state.coc.fdi.fdiValues : state.coc
 }
}


export default connect(mapStateToProps, {
  getFdiDatabyUser,
  updateFdiDatabyUser,
})(Tabs)
