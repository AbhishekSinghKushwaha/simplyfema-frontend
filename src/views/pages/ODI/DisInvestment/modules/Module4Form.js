import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Form,
  Button,
  Label,

} from 'reactstrap'

import Toggle from 'react-toggle'
import { Edit} from 'react-feather'

import { AvInput, AvGroup, AvFeedback } from 'availity-reactstrap-validation'

class Module4Form extends React.Component {
  state = {
    writeoffDetailsCheckValue: false
  }

  render () {

    return (
      <Card>
        <CardHeader>
          <CardTitle> Write-off Details</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
              <Col sm='12'>
                <Label for='nameVerticalIcons'>
                Whether there is, write off? If yes please provide the amount of write off
                </Label>
                <FormGroup className='has-icon-left position-relative'>
                  <label className='react-toggle-wrapper'>
                    <Toggle
                      checked={this.state.writeoffDetailsCheckValue}
                      onChange={
                        checkedValue => {
                        this.setState({
                          writeoffDetailsCheckValue: checkedValue.target.checked
                        })

                        this.props.capturedDisInvestmentData.writeoffDetailsCheckValue = checkedValue.target.checked
                      }}
                      name='controlledSwitch'
                      value='yes'

                    />
                    <Button.Ripple
                      color='primary'
                      size='sm'
                    >
                      {this.state.writeoffDetailsCheckValue ? 'Yes' : 'No'}
                    </Button.Ripple>
                  </label>
                </FormGroup>
              </Col>
              <Col sm='4'>
                {/* <Label>Equity</Label> */}
                <AvGroup className='has-icon-left position-relative'
                 style={this.state.writeoffDetailsCheckValue ? {} : { display: 'none' }} >
                  <AvInput
                    type='text'
                    name='equityWriteOff'
                    id='equityWriteOff'
                    placeholder='Equity Amount'
                   
                  />
                  <AvFeedback>Please enter Equity Amount </AvFeedback>
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='4'>
                {/* <Label>Loan</Label> */}
                <AvGroup className='has-icon-left position-relative'  style={this.state.writeoffDetailsCheckValue ? {} : { display: 'none' }} >
                  <AvInput
                    type='text'
                    name='loanWriteOff'
                    id='loanWriteOff'
                    placeholder='Loan Amount'
                  />
                  <AvFeedback>Please enter Loan Amount </AvFeedback>
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='4'>
                {/* <Label>Guarantees Issued</Label> */}
                <AvGroup className='has-icon-left position-relative'  style={this.state.writeoffDetailsCheckValue ? {} : { display: 'none' }} >
                  <AvInput
                    type='text'
                    name='othersWriteOff'
                    id='othersWriteOff'
                    placeholder='Others (Please Specify)'
                  />
                  <AvFeedback>Please enter Others</AvFeedback>
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
              <Col sm='12'>
                <AvGroup className='has-icon-left position-relative'>
                  <Button.Ripple
                    outline
                    color='primary'
                    type='reset'
                    className='mb-1'
                  >
                    Reset
                  </Button.Ripple>
                </AvGroup>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    )
  }
}
export default Module4Form
