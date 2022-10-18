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
  InputGroup,
  InputGroupAddon,
  InputGroupText

} from 'reactstrap'



import Select from 'react-select'

import {
  AvInput,
  AvGroup,
  AvFeedback,
  AvField
} from 'availity-reactstrap-validation'


import Checkbox from '../../../../../components/Main/checkbox/CheckboxesVuexy'
import { Check,Edit } from 'react-feather'
import InputMask from 'react-input-mask'


const AnnexureOptions = [
  { value: 'Annexure No. 1', label: 'Annexure No. 1' },
  { value: 'Annexure No. 2', label: 'Annexure No. 2' },
  { value: 'Annexure No. 3', label: 'Annexure No. 3' },
  { value: 'Annexure No. 4', label: 'Annexure No. 4' },
  { value: 'Annexure No. 5', label: 'Annexure No. 5' },
  { value: 'Annexure No. 6', label: 'Annexure No. 6' },
  { value: 'Annexure No. 7', label: 'Annexure No. 7' },
  { value: 'Annexure No. 8', label: 'Annexure No. 8' },
  { value: 'Annexure No. 9', label: 'Annexure No. 9' },
  { value: 'Annexure No. 10', label:'Annexure No. 10' },
  { value: 'Annexure No. 11', label: 'Annexure No.11' },
  { value: 'Annexure No. 12', label: 'Annexure No.12' },
  { value: 'Annexure No. 13', label: 'Annexure No.13' },
  { value: 'Annexure No. 14', label: 'Annexure No.14' },
  { value: 'Annexure No. 15', label: 'Annexure No.15' },
  { value: 'Annexure No. 16', label: 'Annexure No.16' },
  { value: 'Annexure No. 17', label: 'Annexure No.17' },
  { value: 'Annexure No. 18', label: 'Annexure No.18' },
  { value: 'Annexure No. 19', label: 'Annexure No.19' },
  { value: 'Annexure No. 20', label: 'Annexure No.20' },
  { value: 'Annexure No. 21', label: 'Annexure No.21' },
  { value: 'Annexure No. 22', label: 'Annexure No.22' },
  { value: 'Annexure No. 23', label: 'Annexure No.23' },
  { value: 'Annexure No. 24', label: 'Annexure No.24' },
  { value: 'Annexure No. 25', label: 'Annexure No.25' },
  { value: 'Annexure No. 26', label: 'Annexure No.26' },
  { value: 'Annexure No. 27', label: 'Annexure No.27' },
  { value: 'Annexure No. 28', label: 'Annexure No.28' },
  { value: 'Annexure No. 29', label: 'Annexure No.29' },
  { value: 'Annexure No. 30', label: 'Annexure No.30' },
  { value: 'Annexure No. 31', label: 'Annexure No.31' },
  { value: 'Annexure No. 32', label: 'Annexure No.32' },
  { value: 'Annexure No. 33', label: 'Annexure No.33' },
  { value: 'Annexure No. 34', label: 'Annexure No.34' },
  { value: 'Annexure No. 35', label: 'Annexure No.35' },
  { value: 'Annexure No. 36', label: 'Annexure No.36' },
  { value: 'Annexure No. 37', label: 'Annexure No.37' },
  { value: 'Annexure No. 38', label: 'Annexure No.38' },
  { value: 'Annexure No. 39', label: 'Annexure No.39' },
  { value: 'Annexure No. 40', label: 'Annexure No.40' },
  { value: 'Annexure No. 41', label: 'Annexure No.41' },
  { value: 'Annexure No. 42', label: 'Annexure No.42' },
  { value: 'Annexure No. 43', label: 'Annexure No.43' },
  { value: 'Annexure No. 44', label: 'Annexure No.44' },
  { value: 'Annexure No. 45', label: 'Annexure No.45' },
  { value: 'Annexure No. 46', label: 'Annexure No.46' },
  { value: 'Annexure No. 47', label: 'Annexure No.47' },
  { value: 'Annexure No. 48', label: 'Annexure No.48' },
  { value: 'Annexure No. 49', label: 'Annexure No.49' },
  { value: 'Annexure No. 50', label: 'Annexure No.50' },
  
  ]


class Module4Form extends React.Component {
  constructor(props){
    super(props)
  
  } 
  
  state = {
    isChecked: false,
    selectAnnexure1:'',
    selectAnnexure2:'',
    selectAnnexure3:'',
    selectAnnexure4:'',
    selectAnnexure5:'',
    selectAnnexure6:'',
    selectAnnexure7:'',
    selectAnnexure8:'',
    selectAnnexure9:'',
    selectAnnexure10:'',
    selectAnnexure11:'',


    annexureCheckbox1:false,
    annexureCheckbox2:false,
    annexureCheckbox3:false,
    annexureCheckbox4:false,
    annexureCheckbox5:false,
    annexureCheckbox6:false,
    annexureCheckbox7:false,
    annexureCheckbox8:false,
    annexureCheckbox9:false,
    annexureCheckbox10:false,
    annexureCheckbox11:false,
  }
  
  handleSwitchChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
    })
  }
  render () {
    
    return (
      <Card>
        <CardHeader>
          <CardTitle>
            {' '}
            Proposed/ Updated Capital Structure{' '}
          </CardTitle>{' '}
        </CardHeader>{' '}
        <CardBody>
          <div>
          <Row>
              {' '}
              {/* <AvGroup className='has-icon-left position-relative'> */}{' '}
              <Col sm='1'>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    checked={this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('annexureCheckbox1')
                        ? this.props.capturedPOData.annexureCheckbox1
                        : this.state.annexureCheckbox1}
                    value={
                      this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('annexureCheckbox1')
                        ? this.props.capturedPOData.annexureCheckbox1
                        : this.state.annexureCheckbox1
                    }
                    onChange={checkedValue => {
                      this.setState({
                        annexureCheckbox1: checkedValue.target.checked
                      })

                        this.props.capturedPOData.annexureCheckbox1 =
                          checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='5'>
                <dd>
                  {' '}
                  <p>
                    
                    Application for compounding in the specified format provided under Foreign Exchange (Compounding Proceedings) Rules, 2000 in duplicate                  </p>{' '}
                </dd>{' '}
              </Col>{' '}
          
          
              <Col sm='6' >
                <Label style={{position:'relative', bottom:'15px' }} for='nameVerticalIcons'>Annexure Number</Label>
                <AvGroup  style={{zIndex:"13", position: "relative" ,bottom:'15px'}} className='has-icon-left position-relative'>
                  <Select 
                    className='React'
                    classNamePrefix='select'
                    defaultValue={AnnexureOptions[0]}
                    name='clear'
                    options={AnnexureOptions}
                    isClearable={true}
                    value={{
                      label:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectAnnexure1'
                        )
                          ? this.props.capturedPOData.selectAnnexure1
                          : AnnexureOptions[0].label,
                      value:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectAnnexure1'
                        )
                          ? this.props.capturedPOData.selectAnnexure1
                          : AnnexureOptions[0].value
                    }}
                    onChange={selectAnnexure1 => {
                      this.setState({ selectAnnexure1})
                      this.props.capturedPOData.selectAnnexure1 =
                      selectAnnexure1.label
                    }}
                  />
                  {/* <div className='form-control-position'>
                    <Calendar size={15} />
                  </div> */}
                <AvFeedback>Please select Annexure Number</AvFeedback>
                </AvGroup>
              </Col>

          
              <Col sm='1'>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    checked={this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('annexureCheckbox2')
                        ? this.props.capturedPOData.annexureCheckbox2
                        : this.state.annexureCheckbox2}
                    value={
                      this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('annexureCheckbox2')
                        ? this.props.capturedPOData.annexureCheckbox2
                        : this.state.annexureCheckbox2
                    }
                    onChange={checkedValue => {
                      this.setState({
                        annexureCheckbox2: checkedValue.target.checked
                      })

                      this.props.capturedPOData.annexureCheckbox2 =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='5'>
                <dd>
                  {' '}
                  <p>
                  Facts of the case, our submissions, compounding request and petition
                  </p>{' '}
                </dd>{' '}
              </Col>{' '}
          
          
              <Col sm='6' >
                <Label style={{position:'relative', bottom:'15px'}} for='nameVerticalIcons'>Annexure Number</Label>
                <AvGroup  style={{zIndex:"12", position: "relative" ,bottom:'15px'}} className='has-icon-left position-relative'>
                  <Select 
                    className='React'
                    classNamePrefix='select'
                    defaultValue={AnnexureOptions[0]}
                    name='clear'
                    options={AnnexureOptions}
                    isClearable={true}
                    value={{
                      label:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectAnnexure2'
                        )
                          ? this.props.capturedPOData.selectAnnexure2
                          : AnnexureOptions[0].label,
                      value:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectAnnexure2'
                        )
                          ? this.props.capturedPOData.selectAnnexure2
                          : AnnexureOptions[0].value
                    }}
                    onChange={selectAnnexure2 => {
                      this.setState({ selectAnnexure2})
                      this.props.capturedPOData.selectAnnexure2 =
                      selectAnnexure2.label
                    }}
                  />
                  {/* <div className='form-control-position'>
                    <Calendar size={15} />
                  </div> */}
                <AvFeedback>Please select Annexure Number</AvFeedback>
                </AvGroup>
              </Col>
          
              <Col sm='1'>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    checked={this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('annexureCheckbox3')
                        ? this.props.capturedPOData.annexureCheckbox3
                        : this.state.annexureCheckbox3}
                    value={
                      this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('annexureCheckbox3')
                        ? this.props.capturedPOData.annexureCheckbox3
                        : this.state.annexureCheckbox3
                    }
                    onChange={checkedValue => {
                      this.setState({
                        annexureCheckbox3: checkedValue.target.checked
                      })

                      this.props.capturedPOData.annexureCheckbox3 =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='5'>
                <dd>
                  {' '}
                  <p>
                  Copy of RBI letter no. XXXXXXXXXXXXXX dated XXXXXXX </p>{' '}
                </dd>{' '}
              </Col>{' '}
          
          
              <Col sm='6' >
                <Label style={{position:'relative', bottom:'15px'}} for='nameVerticalIcons'>Annexure Number</Label>
                <AvGroup  style={{zIndex:"11", position: "relative" ,bottom:'15px'}} className='has-icon-left position-relative'>
                  <Select 
                    className='React'
                    classNamePrefix='select'
                    defaultValue={AnnexureOptions[0]}
                    name='clear'
                    options={AnnexureOptions}
                    isClearable={true}
                    value={{
                      label:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectAnnexure3'
                        )
                          ? this.props.capturedPOData.selectAnnexure3
                          : AnnexureOptions[0].label,
                      value:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectAnnexure3'
                        )
                          ? this.props.capturedPOData.selectAnnexure3
                          : AnnexureOptions[0].value
                    }}
                    onChange={selectAnnexure3 => {
                      this.setState({ selectAnnexure3})
                      this.props.capturedPOData.selectAnnexure3 =
                      selectAnnexure3.label
                    }}
                  />
                  {/* <div className='form-control-position'>
                    <Calendar size={15} />
                  </div> */}
                <AvFeedback>Please select Annexure Number</AvFeedback>
                </AvGroup>
              </Col>
          
              <Col sm='1'>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    checked={this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('annexureCheckbox4')
                        ? this.props.capturedPOData.annexureCheckbox4
                        : this.state.annexureCheckbox4}
                    value={
                      this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('annexureCheckbox4')
                        ? this.props.capturedPOData.annexureCheckbox4
                        : this.state.annexureCheckbox4
                    }
                    onChange={checkedValue => {
                      this.setState({
                        annexureCheckbox4: checkedValue.target.checked
                      })

                      this.props.capturedPOData.annexureCheckbox4 =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='5'>
                <dd>
                  {' '}
                  <p>
                  Details to be furnished in accordance with Annex – II – FDI of Master Circular No.9/ 2015-16 dated July 1, 2015 read with AP (DIR Series) Circular No. 20 dated August 12, 2013 </p>{' '}
                </dd>{' '}
              </Col>{' '}
          
          
              <Col sm='6' >
                <Label style={{position:'relative', bottom:'15px'}} for='nameVerticalIcons'>Annexure Number</Label>
                <AvGroup  style={{zIndex:"10", position: "relative" ,bottom:'15px'}} className='has-icon-left position-relative'>
                  <Select 
                    className='React'
                    classNamePrefix='select'
                    defaultValue={AnnexureOptions[0]}
                    name='clear'
                    options={AnnexureOptions}
                    isClearable={true}
                    value={{
                      label:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectAnnexure4'
                        )
                          ? this.props.capturedPOData.selectAnnexure4
                          : AnnexureOptions[0].label,
                      value:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectAnnexure4'
                        )
                          ? this.props.capturedPOData.selectAnnexure4
                          : AnnexureOptions[0].value
                    }}
                    onChange={selectAnnexure4 => {
                      this.setState({ selectAnnexure4})
                      this.props.capturedPOData.selectAnnexure4 =
                      selectAnnexure4.label
                    }}
                  />
                  {/* <div className='form-control-position'>
                    <Calendar size={15} />
                  </div> */}
                <AvFeedback>Please select Annexure Number</AvFeedback>
                </AvGroup>
              </Col>
          
              <Col sm='1'>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    checked={ this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('annexureCheckbox5')
                        ? this.props.capturedPOData.annexureCheckbox5
                        : this.state.annexureCheckbox5}
                    value={
                      this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('annexureCheckbox5')
                        ? this.props.capturedPOData.annexureCheckbox5
                        : this.state.annexureCheckbox5
                    }
                    // annexureCheckbox5={ this.setState({
                    //   annexureCheckbox5:this.props.capturedPOData.annexureCheckbox5
                    // })}
                    onChange={checkedValue => {
                      this.setState({
                         annexureCheckbox5:checkedValue.target.checked
                                                            })

                      this.props.capturedPOData.annexureCheckbox5 =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='5'>
                <dd>
                  {' '}
                  <p>
                    
Declaration in accordance with Annex – II – FDI of Master Circular No.9/ 2015-16 dated July 1, 2015  </p>{' '}
                </dd>{' '}
              </Col>{' '}
          
          
              <Col sm='6' >
                <Label style={{position:'relative', bottom:'15px'}} for='nameVerticalIcons'>Annexure Number</Label>
                <AvGroup  style={{zIndex:"9", position: "relative" ,bottom:'15px'}} className='has-icon-left position-relative'>
                  <Select 
                    className='React'
                    classNamePrefix='select'
                    defaultValue={AnnexureOptions[0]}
                    name='clear'
                    options={AnnexureOptions}
                    isClearable={true}
                    value={{
                      label:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectAnnexure5'
                        )
                          ? this.props.capturedPOData.selectAnnexure5
                          : AnnexureOptions[0].label,
                      value:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectAnnexure5'
                        )
                          ? this.props.capturedPOData.selectAnnexure5
                          : AnnexureOptions[0].value
                    }}
                    onChange={selectAnnexure5 => {
                      this.setState({ selectAnnexure5})
                      this.props.capturedPOData.selectAnnexure5 =
                      selectAnnexure5.label
                    }}
                  />
                  {/* <div className='form-control-position'>
                    <Calendar size={15} />
                  </div> */}
                <AvFeedback>Please select Annexure Number</AvFeedback>
                </AvGroup>
              </Col>
          
              <Col sm='1'>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    checked={ this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('annexureCheckbox6')
                        ? this.props.capturedPOData.annexureCheckbox6
                        : this.state.annexureCheckbox6}
                    value={
                      this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('annexureCheckbox6')
                        ? this.props.capturedPOData.annexureCheckbox6
                        : this.state.annexureCheckbox6
                    }
                    onChange={checkedValue => {
                      this.setState({
                        annexureCheckbox6: checkedValue.target.checked
                      })

                      this.props.capturedPOData.annexureCheckbox6 =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='5'>
                <dd>
                  {' '}
                  <p>
                  ECS mandate Form</p>{' '}
                </dd>{' '}
              </Col>{' '}
          
          
              <Col sm='6' >
                <Label style={{position:'relative', bottom:'15px'}} for='nameVerticalIcons'>Annexure Number</Label>
                <AvGroup  style={{zIndex:"8", position: "relative" ,bottom:'15px'}} className='has-icon-left position-relative'>
                  <Select 
                    className='React'
                    classNamePrefix='select'
                    defaultValue={AnnexureOptions[0]}
                    name='clear'
                    options={AnnexureOptions}
                    isClearable={true}
                    value={{
                      label:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectAnnexure6'
                        )
                          ? this.props.capturedPOData.selectAnnexure6
                          : AnnexureOptions[0].label,
                      value:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectAnnexure6'
                        )
                          ? this.props.capturedPOData.selectAnnexure6
                          : AnnexureOptions[0].value
                    }}
                    onChange={selectAnnexure6 => {
                      this.setState({ selectAnnexure6})
                      this.props.capturedPOData.selectAnnexure6 =
                      selectAnnexure6.label
                    }}
                  />
                  {/* <div className='form-control-position'>
                    <Calendar size={15} />
                  </div> */}
                <AvFeedback>Please select Annexure Number</AvFeedback>
                </AvGroup>
              </Col>
          
          
              <Col sm='1'>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    checked={this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('annexureCheckbox7')
                        ? this.props.capturedPOData.annexureCheckbox7
                        : this.state.annexureCheckbox7}
                    value={
                      this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('annexureCheckbox7')
                        ? this.props.capturedPOData.annexureCheckbox7
                        : this.state.annexureCheckbox7
                    }
                    onChange={checkedValue => {
                      this.setState({
                        annexureCheckbox7: checkedValue.target.checked
                      })

                      this.props.capturedPOData.annexureCheckbox7 =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='5'>
                <dd>
                  {' '}
                  <p>
                    
PAN Card copy of the Company                  </p>{' '}
                </dd>{' '}
              </Col>{' '}
          
          
              <Col sm='6' >
                <Label style={{position:'relative', bottom:'15px'}} for='nameVerticalIcons'>Annexure Number</Label>
                <AvGroup  style={{zIndex:"7", position: "relative" ,bottom:'15px'}} className='has-icon-left position-relative'>
                  <Select 
                    className='React'
                    classNamePrefix='select'
                    defaultValue={AnnexureOptions[0]}
                    name='clear'
                    options={AnnexureOptions}
                    isClearable={true}
                    value={{
                      label:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectAnnexure7'
                        )
                          ? this.props.capturedPOData.selectAnnexure7
                          : AnnexureOptions[0].label,
                      value:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectAnnexure7'
                        )
                          ? this.props.capturedPOData.selectAnnexure7
                          : AnnexureOptions[0].value
                    }}
                     onChange={selectAnnexure7 => {
                      this.setState({ selectAnnexure7})
                      this.props.capturedPOData.selectAnnexure7 =
                      selectAnnexure7.label
                    }}
                  />
                  {/* <div className='form-control-position'>
                    <Calendar size={15} />
                  </div> */}
                <AvFeedback>Please select Annexure Number</AvFeedback>
                </AvGroup>
              </Col>
          
          
          

              <Col sm='1'>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    checked={this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('annexureCheckbox8')
                        ? this.props.capturedPOData.annexureCheckbox8
                        : this.state.annexureCheckbox8}
                    value={
                      this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('annexureCheckbox8')
                        ? this.props.capturedPOData.annexureCheckbox8
                        : this.state.annexureCheckbox8
                    }
                    onChange={checkedValue => {
                      this.setState({
                        annexureCheckbox8: checkedValue.target.checked
                      })

                      this.props.capturedPOData.annexureCheckbox8 =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='5'>
                <dd>
                  {' '}
                  <p>
                  MOA of the Company</p>{' '}
                </dd>{' '}
              </Col>{' '}
          
          
              <Col sm='6' >
                <Label style={{position:'relative', bottom:'15px'}} for='nameVerticalIcons'>Annexure Number</Label>
                <AvGroup  style={{zIndex:"6", position: "relative" ,bottom:'15px'}} className='has-icon-left position-relative'>
                  <Select 
                    className='React'
                    classNamePrefix='select'
                    defaultValue={AnnexureOptions[0]}
                    name='clear'
                    options={AnnexureOptions}
                    isClearable={true}
                    value={{
                      label:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectAnnexure8'
                        )
                          ? this.props.capturedPOData.selectAnnexure8
                          : AnnexureOptions[0].label,
                      value:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectAnnexure8'
                        )
                          ? this.props.capturedPOData.selectAnnexure8
                          : AnnexureOptions[0].value
                    }}
                    onChange={selectAnnexure8 => {
                      this.setState({ selectAnnexure8})
                      this.props.capturedPOData.selectAnnexure8 =
                      selectAnnexure8.label
                    }}
                  />
                  {/* <div className='form-control-position'>
                    <Calendar size={15} />
                  </div> */}
                <AvFeedback>Please select Annexure Number</AvFeedback>
                </AvGroup>
              </Col>
          
          
          

              <Col sm='1'>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    checked={this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('annexureCheckbox9')
                        ? this.props.capturedPOData.annexureCheckbox9
                        : this.state.annexureCheckbox9}
                    value={
                      this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('annexureCheckbox9')
                        ? this.props.capturedPOData.annexureCheckbox9
                        : this.state.annexureCheckbox9
                    }
                    onChange={checkedValue => {
                      this.setState({
                    annexureCheckbox9: checkedValue.target.checked
                      })

                      this.props.capturedPOData.annexureCheckbox9 =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='5'>
                <dd>
                  {' '}
                  <p>
                    
Demand Draft of INR 5000 in drawn in favour of the Reserve Bank of India, payable at Mumbai                  </p>{' '}
                </dd>{' '}
              </Col>{' '}
          
          
              <Col sm='6' >
                <Label style={{position:'relative', bottom:'15px'}} for='nameVerticalIcons'>Annexure Number</Label>
                <AvGroup  style={{zIndex:"5", position: "relative" ,bottom:'15px'}} className='has-icon-left position-relative'>
                  <Select 
                    className='React'
                    classNamePrefix='select'
                    defaultValue={AnnexureOptions[0]}
                    name='clear'
                    options={AnnexureOptions}
                    isClearable={true}
                    value={{
                      label:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectAnnexure9'
                        )
                          ? this.props.capturedPOData.selectAnnexure9
                          : AnnexureOptions[0].label,
                      value:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectAnnexure9'
                        )
                          ? this.props.capturedPOData.selectAnnexure9
                          : AnnexureOptions[0].value
                    }}
                    onChange={selectAnnexure9 => {
                      this.setState({ selectAnnexure9})
                      this.props.capturedPOData.selectAnnexure9 =
                      selectAnnexure9.label
                    }}
                  />
                  {/* <div className='form-control-position'>
                    <Calendar size={15} />
                  </div> */}
                <AvFeedback>Please select Annexure Number</AvFeedback>
                </AvGroup>
              </Col>
          
          
          

              <Col sm='1'>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    checked={this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('annexureCheckbox10')
                        ? this.props.capturedPOData.annexureCheckbox10
                        : this.state.annexureCheckbox10}
                    value={
                      this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('annexureCheckbox10')
                        ? this.props.capturedPOData.annexureCheckbox10
                        : this.state.annexureCheckbox10
                    }
                    onChange={checkedValue => {
                      this.setState({
                        annexureCheckbox10: checkedValue.target.checked
                      })

                      this.props.capturedPOData.annexureCheckbox10 =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='5'>
                <dd>
                  {' '}
                  <p>
                    
Copy of FCGPR on record by the RBI</p>{' '}
                </dd>{' '}
              </Col>{' '}
          
          
              <Col sm='6' >
                <Label style={{position:'relative', bottom:'15px'}} for='nameVerticalIcons'>Annexure Number</Label>
                <AvGroup  style={{zIndex:"4", position: "relative" ,bottom:'15px'}} className='has-icon-left position-relative'>
                  <Select 
                    className='React'
                    classNamePrefix='select'
                    defaultValue={AnnexureOptions[0]}
                    name='clear'
                    options={AnnexureOptions}
                    isClearable={true}
                    value={{
                      label:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectAnnexure10'
                        )
                          ? this.props.capturedPOData.selectAnnexure10
                          : AnnexureOptions[0].label,
                      value:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectAnnexure10'
                        )
                          ? this.props.capturedPOData.selectAnnexure10
                          : AnnexureOptions[0].value
                    }}
                    onChange={selectAnnexure10 => {
                      this.setState({ selectAnnexure10})
                      this.props.capturedPOData.selectAnnexure10 =
                      selectAnnexure10.label
                    }}
                  />
                  {/* <div className='form-control-position'>
                    <Calendar size={15} />
                  </div> */}
                <AvFeedback>Please select Annexure Number</AvFeedback>
                </AvGroup>
              </Col>
          
          
          

              <Col sm='1'>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    checked={this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('annexureCheckbox11')
                        ? this.props.capturedPOData.annexureCheckbox11
                        : this.state.annexureCheckbox11}
                    value={
                      this.props.capturedPOData &&
                      this.props.capturedPOData.hasOwnProperty('annexureCheckbox11')
                        ? this.props.capturedPOData.annexureCheckbox11
                        : this.state.annexureCheckbox11
                    }
                    onChange={checkedValue => {
                      this.setState({
                        annexureCheckbox11: checkedValue.target.checked
                      })

                      this.props.capturedPOData.annexureCheckbox11 =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='5'>
                <dd>
                  {' '}
                  <p>
                  Latest Audited Balance Sheet for the year ended 31-03-2018</p>{' '}
                </dd>{' '}
              </Col>{' '}
          
          
              <Col sm='6' >
                <Label style={{position:'relative', bottom:'15px'}} for='nameVerticalIcons'>Annexure Number</Label>
                <AvGroup  style={{zIndex:"3", position: "relative" ,bottom:'15px'}} className='has-icon-left position-relative'>
                  <Select 
                    className='React'
                    classNamePrefix='select'
                    defaultValue={AnnexureOptions[0]}
                    name='clear'
                    options={AnnexureOptions}
                    isClearable={true}
                    value={{
                      label:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectAnnexure11'
                        )
                          ? this.props.capturedPOData.selectAnnexure11
                          : AnnexureOptions[0].label,
                      value:
                        this.props.capturedPOData &&
                        this.props.capturedPOData.hasOwnProperty(
                          'selectAnnexure11'
                        )
                          ? this.props.capturedPOData.selectAnnexure11
                          : AnnexureOptions[0].value
                    }}
                    onChange={selectAnnexure11 => {
                      this.setState({ selectAnnexure11})
                      this.props.capturedPOData.selectAnnexure11 =
                      selectAnnexure11.label
                    }}
                  />
                  {/* <div className='form-control-position'>
                    <Calendar size={15} />
                  </div> */}
                <AvFeedback>Please select Annexure Number</AvFeedback>
                </AvGroup>
              </Col>
          
          
          
          
            </Row>{' '}

          </div>{' '}
          <CardTitle>
            {' '}
            Pre-Post Capital Structure{' '}
          </CardTitle>{' '}
        </CardBody>{' '}
      </Card>
    )
  }
}
export default Module4Form
