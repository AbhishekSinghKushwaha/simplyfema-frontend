import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Input,
  Form,
  FormGroup,
  Label,
} from 'reactstrap'

import {
  AvInput,
  AvGroup,
  AvFeedback,
  AvField,
  AvForm
} from 'availity-reactstrap-validation'



import { Edit } from 'react-feather'
import 'flatpickr/dist/themes/light.css'
import '../../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss'
import Select from 'react-select'

const investmentTypeOptions = [
  {
    value: 'WO SDS',
    label: 'WO SDS'
  },
  {
    value: 'JV SDS',
    label: 'JV SDS'
  }
]

const methodOptions = [
  {
    value: 'SPV/ Holding Company',
    label: 'SPV/ Holding Company'
  },
  {
    value: 'Operating',
    label: 'Operating'
  },
  {
    value: 'Operating Cum SPV',
    label: 'Operating Cum SPV'
  }
]

class Module5Form extends React.Component {
  constructor (props) {
    super(props)
  }

  state = {
    isChecked: false,
    selectedMethodOption: 'Operating',
    selectedInvestmentTypeOption: 'JV/WOS'
  }
  handleSwitchChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
    })
  }
  render () {
    let { selectedMethodOption, selectedInvestmentTypeOption } = this.state

    return (
      <Card>
        <CardHeader>
          <CardTitle>Transaction / Remittance Details </CardTitle>
        </CardHeader>
        <CardBody>
          <Label> </Label>
          <Form>
            <Row>
              <Col sm='6'>
                <Label for='methodOptions'>Method of Investment </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <Select
                    className='React'
                    classNamePrefix='select'
                    defaultValue={methodOptions[1]}
                    name='clear'
                    options={methodOptions}
                    isClearable={true}
                    onChange={selectedMethodOption => {
                      this.setState({ selectedMethodOption })
                      this.props.capturedODIData.selectedMethodOption =
                        selectedMethodOption.label
                    }}
                  />

                </AvGroup>
              </Col>
              <Col sm='6'>
                <Label for='investmentTypeOptions'> Category of Investment </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <Select
                    className='React'
                    classNamePrefix='select'
                    defaultValue={investmentTypeOptions[1]}
                    name='clear'
                    options={investmentTypeOptions}
                    isClearable={true}
                    onChange={selectedInvestmentTypeOption => {
                      this.setState({ selectedInvestmentTypeOption })
                      this.props.capturedODIData.selectedInvestmentTypeOption =
                        selectedInvestmentTypeOption.label
                    }}
                  />

                </AvGroup>
              </Col>
             
              <Col sm='6'>
                <Label for='otherDetails'>Other Details $, $$ </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='otherDetails'
                    id='otherDetails'
                    placeholder='Other Details $, $$'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
             
              <Col sm='6'>
                <Label>
                  Amount of Remittance / other financial commitment. **
                </Label>
                <AvGroup className='has-icon-left position-relative'>
                  <AvInput
                    type='text'
                    name='remittanceAmount'
                    id='remittanceAmount'
                    placeholder='Amount of Remittance'
                  />
                  <div className='form-control-position'>
                    <Edit size={15} />
                  </div>
                </AvGroup>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    )
  }
}
export default Module5Form
