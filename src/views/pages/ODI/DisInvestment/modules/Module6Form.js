import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Form,
  Label
} from 'reactstrap'

import { Edit, PlusSquare, MinusSquare } from 'react-feather'

import { AvInput, AvGroup } from 'availity-reactstrap-validation'
class Module6Form extends React.Component {
  constructor (props) {
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
  handleSwitchChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
    })
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
          <CardTitle> Pre and Post Capital Structure </CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
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
                      <Label for='nameVerticalIcons'> Indian Party(ies) </Label>
                      <AvGroup className='has-icon-left position-relative'>
                        <AvInput
                          type='text'
                          name='name'
                          id='nameVerticalIcons'
                          placeholder='Indian Party(ies)'
                        />
                        <div className='form-control-position'>
                          <Edit size={15} />
                        </div>
                      </AvGroup>
                    </Col>

                    <Col sm='2'>
                      <Label for='nameVerticalIcons'> % Stake </Label>
                      <AvGroup className='has-icon-left position-relative'>
                        <AvInput
                          type='text'
                          name='name'
                          id='nameVerticalIcons'
                          mask='99.99%'
                          className='form-control'
                          onChange={event => {
                            this.setState({
                              indianPartyStakeValue: event.target.value
                            })
                            this.props.capturedDisInvestmentData.indianPartyStakeValue = indianPartyStakeValue
                          }}
                        />
                        <div className='form-control-position'>
                          <Edit size={15} />
                        </div>
                      </AvGroup>
                    </Col>
                    <Col sm='4'>
                      <Label for='nameVerticalIcons'>
                        {' '}
                        Foreign Party(ies){' '}
                      </Label>
                      <AvGroup className='has-icon-left position-relative'>
                        <AvInput
                          type='text'
                          name='name'
                          id='nameVerticalIcons'
                          placeholder='Foreign Party(ies)'
                        />
                        <div className='form-control-position'>
                          <Edit size={15} />
                        </div>
                      </AvGroup>
                    </Col>
                    <Col sm='2'>
                      <Label for='nameVerticalIcons'> % Stake </Label>
                      <AvGroup className='has-icon-left position-relative'>
                        <AvInput
                          type='text'
                          name='name'
                          id='nameVerticalIcons'
                          mask='99.99%'
                          className='form-control'
                          onChange={event => {
                            this.setState({
                              foreginPartyStakeValue: event.target.value
                            })
                            this.props.capturedDisInvestmentData.foreginPartyStakeValue = foreginPartyStakeValue
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
            </Row>
          </Form>
        </CardBody>
      </Card>
    )
  }
}
export default Module6Form
