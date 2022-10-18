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
  Button,
  Label,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap'
import Checkbox from '../../../../../components/Main/checkbox/CheckboxesVuexy'
import { Check } from 'react-feather'

class Module5Form extends React.Component {
  constructor(props){
    super(props)
  
  } 
  state = {
    isChecked: false,
    certificateOrDeclarationOptionA: false,
    certificateOrDeclarationOptionB: false,
    certificateOrDeclarationOptionC: false,
    certificateOrDeclarationOptionD: false,
    certificateOrDeclarationOptionE: false,
    certificateOrDeclarationOptionF: false
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
          <CardTitle> Certificate (Indian Party) </CardTitle>{' '}
        </CardHeader>{' '}
        <CardBody>
          <Form>
            <Row>
              {' '}
              {/* <FormGroup className='has-icon-left position-relative'> */}{' '}
              <Col sm='2'>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                        certificateOrDeclarationOptionA:
                          checkedValue.target.checked
                      })

                      this.props.capturedAPRData.certificateOrDeclarationOptionA =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='10'>
                <dd>
                  {' '}
                  <p>
                    i) Investment in step down subsidiary(SDS) has been reported
                    to RBI from time to time in terms of Regulation 13 of
                    Notification No.FEMA .120 / RB - 2004 dated July 7, 2004 as
                    amended;{' '}
                  </p>{' '}
                </dd>{' '}
              </Col>{' '}
            </Row>{' '}
            <hr></hr>
            <Row>
              {' '}
              <Col sm='2'>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                        certificateOrDeclarationOptionA:
                          checkedValue.target.checked
                      })

                      this.props.capturedAPRData.certificateOrDeclarationOptionB =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='10'>
                <dd>
                  {' '}
                  <p>
                    ii) If the activity of the SDS is related to financial
                    services - it is certified that Regulation 7(2) of
                    Notification No FEMA 120 / RB - 2004 dated July 7, 2004 as
                    amended has been complied with;{' '}
                  </p>{' '}
                </dd>{' '}
              </Col>{' '}
            </Row>{' '}
            <hr></hr>
            <Row>
              {' '}
              <Col sm='2'>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                        certificateOrDeclarationOptionA:
                          checkedValue.target.checked
                      })

                      this.props.capturedAPRData.certificateOrDeclarationOptionC =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='10'>
                {' '}
                <dd>
                  {' '}
                  <p>
                    iii) Changes in the capital structure of the JV / WOS since
                    last APR has been reported under Section C of Form ODI Part
                    I{' '}
                  </p>{' '}
                </dd>{' '}
              </Col>{' '}
            </Row>{' '}
            <hr></hr>
            <Row>
              {' '}
              <Col sm='2'>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                        certificateOrDeclarationOptionA:
                          checkedValue.target.checked
                      })

                      this.props.capturedAPRData.certificateOrDeclarationOptionD =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='10'>
                {' '}
                <dd>
                  {' '}
                  <p>
                    iv) We have received share certificate / s(or any other
                    proof of investment) and submitted the same to the
                    designated AD bank for verification within 6 months of
                    making the remittance / s for all(equity / CCPS) investment
                    made as per Regulation 15(i) of FEMA Notification ibid.;{' '}
                  </p>{' '}
                </dd>{' '}
              </Col>{' '}
            </Row>{' '}
            <hr></hr>
            <Row>
              {' '}
              <Col sm='2'>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                        certificateOrDeclarationOptionA:
                          checkedValue.target.checked
                      })

                      this.props.capturedAPRData.certificateOrDeclarationOptionE =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='10'>
                {' '}
                <dd>
                  {' '}
                  <p>
                    v) The previous APRs for all JV / WOS have been filed to the
                    respective designated AD bank.{' '}
                  </p>{' '}
                </dd>{' '}
              </Col>{' '}
            </Row>{' '}
            <hr></hr>
            <Row>
              {' '}
              <Col sm='2'>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                        certificateOrDeclarationOptionA:
                          checkedValue.target.checked
                      })

                      this.props.capturedAPRData.certificateOrDeclarationOptionF =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='10'>
                {' '}
                <dd>
                  {' '}
                  <p>
                    vi) Repatriated to India, all dues receivable from the
                    overseas JV / WOS, like dividend, royalty, technical know -
                    how fees etc., within 60 days of its falling due or as
                    prescribed by Reserve Bank from time to time.{' '}
                  </p>{' '}
                </dd>{' '}
              </Col>{' '}
              {/* </FormGroup>{' '} */}{' '}
            </Row>{' '}
          </Form>{' '}
        </CardBody>{' '}
      </Card>
    )
  }
}
export default Module5Form
