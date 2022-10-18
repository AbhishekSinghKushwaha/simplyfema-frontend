import React from 'react'
import BreadCrumbs from '../../../../components/Main/breadCrumbs/BreadCrumb'
import Prism from 'prismjs'
import Module1Form from './modules/Module1Form'
import Module2Form from './modules/Module2Form'
import Module3Form, { MyInput } from './modules/Module3Form'
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

const contraventionOptions = [
  { value: 'Foreign Direct Investment', label: 'Foreign Direct Investment' },
  { value: 'Overseas Direct Investment', label: 'Overseas Direct Investment' },
  { value: 'External Commercial Borrowings', label: 'External Commercial Borrowings' },
  { value: 'Branch Office', label: ' Branch Office ' },
  { value: 'Liaison Office ', label: 'Liaison Office ' },
  { value: 'Project Office', label: ' Project Office' },
  { value: 'Compounding Of Contraventions', label: 'Compounding Of Contraventions' },
  
]

const contraventionSubOptions = [
  { value: 'Faith', label: 'Faith' },
  { value: 'Desire', label: 'Desire' },
  { value: 'Love', label: 'Love' },
  { value: 'Kindness', label: 'Kindness' },
  { value: 'Fun', label: 'Fun' },]


class Tabs extends React.Component {
  componentDidMount () {
    Prism.highlightAll()
  }
  state = {
    activeTab: '1',
    active: '1',

   

  
    capturedCOCData: {},
   
     selectedOption:[{value: '' }],
     

    steps: [
      {
        title: 'Entity Information',
        stepNumber: 1,
        content: (
          <Module1Form
            dataCaptured={this.state ? this.state.capturedCOCData : {}}
          />
        )
      },
      {
        title: 'Compounding Details',
        stepNumber: 2,
        content: (
          <Module2Form
            dataCaptured={this.state ? this.state.capturedCOCData : {}}
          />
        )
      },
      {
        title: 'Compounding Submissions',
        stepNumber: 3,
        content: (
          <Module3Form
            dataCaptured={this.state ? this.state.capturedCOCData : {}}
          />
        )
      },
     
      {
        title: "Annexures" ,
        stepNumber: 5,
        content: (
          <Module4Form
            dataCaptured={this.state ? this.state.capturedCOCData : {}}
          />
        )
      },
      {
        title: 'Authorised Signatory',
        stepNumber: 6,
        content: (
          <Module5Form
            dataCaptured={this.state ? this.state.capturedCOCData : {}}
          />
        )
      },
      {
        title: 'Preview',
        stepNumber: 7,
        content: (
          <Module6Form
            dataCaptured={this.state ? this.state.capturedCOCData : {}}
          />
        )
      },
      
    
     
    
  
    ],
    
    

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
                    defaultValue={contraventionOptions[6]}
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


              </CardHeader>
               <CardBody>
                {/* <p> UIN: XXXXXXXXXXXX </p>{' '} */}
                <Wizard
                  validate
                  enableAllSteps
                  onFinish={() => alert('submitted')}
                  steps={steps}
                  nextData={capturedData =>
                    this.setState({
                      capturedCOCData: capturedData
                    })
                  }
                  capturedCOCData={this.state.capturedCOCData}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default Tabs
