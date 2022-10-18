import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Form
} from 'reactstrap'
import Checkbox from '../../../../../components/Main/checkbox/CheckboxesVuexy'
import { Check } from 'react-feather'

class Module5Form extends React.Component {
  constructor (props) {
    super(props)
  }

  state = {
    isChecked: false,
    certificateOrDeclarationOptionA : false,
    certificateOrDeclarationOptionB : false,
    certificateOrDeclarationOptionC : false,
    certificateOrDeclarationOptionD : false,
    certificateOrDeclarationOptionE : false,
    certificateOrDeclarationOptionF : false,
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
          <CardTitle> Certificate / Declaration</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
              <Col sm='2'>
                <dt>
                  <Checkbox
                    color='primary'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                        certificateOrDeclarationOptionA: checkedValue.target.checked
                      })

                      this.props.capturedDisInvestmentData.certificateOrDeclarationOptionA =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='10'>
                <dd>
                  <p>
                    a) the sale is effected through a stock exchange where the
                    shares of the overseas JV / WOS are listed;
                  </p>
                </dd>
              </Col>

            </Row><hr></hr><Row>
              
              <Col sm='2'>
                <dt>
                  <Checkbox
                    color='primary'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                        certificateOrDeclarationOptionB: checkedValue.target.checked
                      })

                      this.props.capturedDisInvestmentData.certificateOrDeclarationOptionB =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='10'>
                <dd>
                  <p>
                    b) if the shares are not listed on the stock exchange, and
                    the shares are disinvested by a private arrangement, the
                    share price is not less than the value certified by a
                    Chartered Accountant /Certified Public Accountant as the
                    fair value of the shares based on the latest audited
                    financial statements of
                  </p>
                </dd>
              </Col>
              </Row><hr></hr><Row>
              <Col sm='2'>
                <dt>
                  <Checkbox
                    color='primary'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                        certificateOrDeclarationOptionC: checkedValue.target.checked
                      })

                      this.props.capturedDisInvestmentData.certificateOrDeclarationOptionC =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='10'>
                <dd>
                  <p>
                    c) the JV / WOS c)The IP / RI does not have any outstanding
                    dues by way of dividend, technical know-how fees, royalty,
                    consultancy, commission or other entitlements, and/or export
                    proceeds from the JV / WOS;"
                  </p>
                </dd>
              </Col>
              </Row><hr></hr><Row>
              <Col sm='2'>
                <dt>
                  <Checkbox
                    color='primary'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                        certificateOrDeclarationOptionD: checkedValue.target.checked
                      })

                      this.props.capturedDisInvestmentData.certificateOrDeclarationOptionD =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              
              <Col sm='10'>
                <dd>
                  <p>
                    d) The overseas concern has been in operation for at least
                    one full year and the share certificate/s or any other
                    document as an evidence of investment and APR for all the
                    years has been submitted to the designated AD bank / Reserve
                    Bank;
                  </p>
                </dd>
              </Col>
              </Row><hr></hr><Row>
              <Col sm='2'>
                <dt>
                  <Checkbox
                    color='primary'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                        certificateOrDeclarationOptionE: checkedValue.target.checked
                      })

                      this.props.capturedDisInvestmentData.certificateOrDeclarationOptionE =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='10'>
                <dd>
                  <p>
                    e)The Indian Party is not under investigation by
                    CBI/ED/SEBI/IRDA or any other regulatory authority in India.
                  </p>
                </dd>
              </Col>
              </Row><hr></hr><Row>
              <Col sm='2'>
                <dt>
                  <Checkbox
                    color='primary'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                        certificateOrDeclarationOptionF: checkedValue.target.checked
                      })

                      this.props.capturedDisInvestmentData.certificateOrDeclarationOptionF =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='10'>
                {' '}
                <dd>
                  <p>
                    f) All the remittances/ transactions have been reported to
                    Reserve Bank and it reconciles with the remittances /
                    transaction details reported to the Reserve Bank.
                  </p>
                </dd>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    )
  }
}
export default Module5Form
