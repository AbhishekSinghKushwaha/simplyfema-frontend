import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Label,

} from 'reactstrap'

import {
  AvInput,
  AvGroup,
  AvFeedback,
  AvField
} from 'availity-reactstrap-validation'


import { Edit ,PlusSquare, MinusSquare } from 'react-feather'


class Module7Form extends React.Component {
  constructor(props){
    super(props)
  
  } 

  state = {
    isChecked: false,
    indianPartyStakeValue: '',
    foreginPartyStakeValue: '',
    capitalStructureArray: [
      {
        checked: false
      }
    ]
  }
  updateValue = (e, idx) => {
    const capitalStructureArray = [...this.state.capitalStructureArray]
    capitalStructureArray[idx].value = e.target.value
    this.setState({
      capitalStructureArray
    })
  }

  onChecked = idx => {
    const capitalStructureArray = [...this.state.capitalStructureArray]
    capitalStructureArray[idx].checked = !capitalStructureArray[idx].checked
    this.setState({
      capitalStructureArray
    })
  }

  addRow = () => {
    
    const capitalStructureArray = [
      ...this.state.capitalStructureArray,
      {
        value: '',
        checked: true
      }
    ]
    this.setState({
      capitalStructureArray
    })
  }

  deleteRows = idx => {
    if (this.state.capitalStructureArray.length > 1) {
      this.state.capitalStructureArray.splice(idx, 1)
      this.setState({
        // capitalStructureArray: this.state.capitalStructureArray.filter(e => !e.checked).slice(-1)
        capitalStructureArray: this.state.capitalStructureArray.filter(x => x !== idx)
      })
    }
  }
  render () {
    let { indianPartyStakeValue, foreginPartyStakeValue } = this.state
    return (
      <Card>
        <CardHeader>
          <CardTitle>
            
            Proposed/ Updated Capital Structure
          </CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            {/* <Col sm='12'>
              <Label>Proposed / Updated Capital Structure</Label>
              </Col> */}
                    {this.state.capitalStructureArray.map((capitalStructureField, idx) => {
                return (
                  <Row style={{width: '100%'}}
                    key={idx}
                    value={capitalStructureField.value}
                    checked={capitalStructureField.checked}
                    onChange={e => this.updateValue(e, idx)}
                    onChecked={() => this.onChecked(idx)}
                  >
      <Col sm='4'>
                      <Label for='Indian Party(ies)'> Indian Party(ies) </Label>
                      <AvGroup className='has-icon-left position-relative'>
                        <AvInput
                          type='text'
                          name='name'
                          id='Indian Party(ies)'
                          placeholder='Indian Party(ies)'
                        />
                        <div className='form-control-position'>
                          <Edit size={15} />
                        </div>
                      </AvGroup>
                    </Col>

                    <Col sm='2'>
                      <Label for='%StakeIndianParty'> % Stake </Label>
                      <AvGroup className='has-icon-left position-relative'>
                        <AvInput
                          type='text'
                          name='%StakeIndianParty'
                          id='%StakeIndianParty'
                          mask='99.99%'
                          className='form-control'
                          onChange={event => {
                            this.setState({
                              indianPartyStakeValue: event.target.value
                            })
                            this.props.capturedODIData.indianPartyStakeValue = indianPartyStakeValue
                          }}
                        />
                        <div className='form-control-position'>
                          <Edit size={15} />
                        </div>
                      </AvGroup>
                    </Col>
                    <Col sm='4'>
                      <Label for='foreignParty'>                       
                        Foreign Party(ies)
                      </Label>
                      <AvGroup className='has-icon-left position-relative'>
                        <AvInput
                          type='text'
                          name='foreignParty'
                          id='foreignParty(ies)'
                          placeholder='Foreign Party(ies)'
                        />
                        <div className='form-control-position'>
                          <Edit size={15} />
                        </div>
                      </AvGroup>
                    </Col>
                    <Col sm='2'>
                      <Label for='%StakeForeignParty'> % Stake </Label>
                      <AvGroup className='has-icon-left position-relative'>
                        <AvInput
                          type='text'
                          name='StakeForeignParty'
                          id='StakeForeignParty'
                          mask='99.99%'
                          className='form-control'
                          onChange={event => {
                            this.setState({
                              foreginPartyStakeValue: event.target.value
                            })
                            this.props.capturedODIData.foreginPartyStakeValue = foreginPartyStakeValue
                          }}
                        />
                        <div className='form-control-position'>
                          <Edit size={15} />
                        </div>
                      </AvGroup>
                    </Col>
              
              </Row>
                )
              })}
              <Col sm='12'>
                <div
                  onClick={this.deleteRows}
                  className='fonticon-container'
                  style={{
                    float: 'right',
                    width: '40px',
                    color: 'primary'
                  }}
                >
                  <div className='fonticon-wrap'>
                    <MinusSquare size={30} className='fonticon-wrap' />
                  </div>
                </div>
                <div
                  onClick={this.addRow}
                  className='fonticon-container'
                  style={{
                    float: 'right',
                    width: '40px',
                    color: 'primary'
                  }}
                >
                  <div className=' fonticon-wrap'>
                    <PlusSquare size={30} className='fonticon-wrap' />
                  </div>
                </div>
              </Col>
          </Form>
          <CardTitle>
            
            Pre-Post Capital Structure
          </CardTitle>
        </CardBody>
      </Card>
    )
  }
}
export default Module7Form
