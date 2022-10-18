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
          <CardTitle> Certificate / Declaration </CardTitle>{' '}
        </CardHeader>{' '}
        <CardBody>
          <Form>
            <Row>

              <Col sm='2'>
                <dt>
                  {' '}
                  <Checkbox
                    color='success'
                    icon={<Check className='vx-icon' size={16} />}
                    label=''
                    onChange={checkedValue => {
                      this.setState({
                        certificateOrDeclarationOptionA: checkedValue.target.checked
                      })

                      this.props.capturedODIData.certificateOrDeclarationOptionA =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='10'>
                <dd>
                  {' '}
                  <p>
                    a)
                    Whether  the  Indian  Party  /  Resident  Individual,  are  under  investigation/s  by  any investigative/enforcement  agency  or  regulatory  body.  If  yes,  the  brief  details  thereof, including present stage of investigation/ adjudication / manner of disposal of the case.
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
                        certificateOrDeclarationOptionA: checkedValue.target.checked
                      })

                      this.props.capturedODIData.certificateOrDeclarationOptionB =
                        checkedValue.target.checked
                    }}
                  />
                </dt>
              </Col>
              <Col sm='10'>
                <dd>
                  {' '}
                  <p>
                  (b) Whether the promoter Indian Party (ies) is (are) presently on Exporters' Caution List of the Reserve Bank for non-realization of export proceeds or on the list of defaulters to the Banking System circulated by Reserve Bank. If so, status of the Indian Party (ies):
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
                        certificateOrDeclarationOptionA: checkedValue.target.checked
                      })

                      this.props.capturedODIData.certificateOrDeclarationOptionC =
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
                  (c)  Any  other  information  relevant  to  this  proposal,  including  any  special  benefits  / incentives available in the host country for setting up / acquiring the proposed concern.
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
                        certificateOrDeclarationOptionA: checkedValue.target.checked
                      })

                      this.props.capturedODIData.certificateOrDeclarationOptionD =
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
                  (d)  Wherever  applicable,  the  Share  Certificate  and  Annual  Performance  Report  as required in terms of Regulation 15 (i) and 15(iii) of the Notification No. FEMA 120 / RB - 2004 dated July 07, 2004, as amended from time to time, in respect of all the existing JV / WOS of the Indian Party has been submitted.
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
                        certificateOrDeclarationOptionA: checkedValue.target.checked
                      })

                      this.props.capturedODIData.certificateOrDeclarationOptionE =
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
                  (e) All the receivables have been repatriated as required in terms of Regulation 15 (ii) of the Notification No. FEMA Notification ibid in respect of all the existing JV / WOS of the Indian Party/ Resident Individual.
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
                        certificateOrDeclarationOptionA: checkedValue.target.checked
                      })

                      this.props.capturedODIData.certificateOrDeclarationOptionF =
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
                  (f) If the Activity of the Step Down Subsidiary is related to the financial services it is certified  that  we  have  complied  with  Regulation  7(2)  of  Notification  No.  FEMA  120 dated July 07, 2004 as amended.
                  </p>{' '}
                </dd>{' '}
              </Col>{' '}
              {/* </AvGroup>{' '} */}{' '}
            </Row>{' '}
          </Form>{' '}
        </CardBody>{' '}
      </Card>
    )
  }
}
export default Module5Form
