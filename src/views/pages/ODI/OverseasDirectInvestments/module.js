import React from 'react'
import BreadCrumbs from '../../../../components/Main/breadCrumbs/BreadCrumb'
import Prism from 'prismjs'
import { useForm, useStep } from 'react-hooks-helper'
import Module1Form from './modules/Module1Form'
import Module2Form from './modules/Module2Form'
import Module3Form from './modules/Module3Form'
import Module4Form from './modules/Module4Form'
import Module5Form from './modules/Module5Form'
import Module6Form from './modules/Module6Form'
import Module7Form from './modules/Module7Form'
import Module8Form from './modules/Module8Form'
import Wizard from './Wizard'
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from 'reactstrap'
import 'prismjs/components/prism-jsx'
class Tabs extends React.Component {
  componentDidMount () {
    Prism.highlightAll()
  }

  state = {
    activeTab: '1',
    active: '1',
    capturedODIData: {},
    disInvestmentData: [
      {
        signatoryName: ''
      }
    ],

    steps: [
      {
        title: 'Indian Party Details',
        stepNumber: 1,
        content: (
          <Module1Form
            dataCaptured={this.state ? this.state.capturedODIData : {}}
          />
        )
      },
      {
        title: 'Financial IP Details',
        stepNumber: 2,
        content: (
          <Module2Form
            dataCaptured={this.state ? this.state.capturedODIData : {}}
          />
        )
      },
      {
        title: 'JV/ WOS Details',
        stepNumber: 3,
        content: (
          <Module3Form
            dataCaptured={this.state ? this.state.capturedODIData : {}}
          />
        )
      },
      {
        title: 'JV/WOS Investment Details',
        stepNumber: 4,
        content: (
          <Module4Form
            dataCaptured={this.state ? this.state.capturedODIData : {}}
          />
        )
      },
      {
        title: 'Transaction / Remittance Details',
        stepNumber: 5,
        content: (
          <Module5Form
            dataCaptured={this.state ? this.state.capturedODIData : {}}
          />
        )
      },
      {
        title: 'Certificate / Declaration',
        stepNumber: 6,
        content: (
          <Module6Form
            dataCaptured={this.state ? this.state.capturedODIData : {}}
          />
        )
      },
      {
        title: 'Pre/Post Capital Structure',
        stepNumber: 7,
        content: (
          <Module7Form
            dataCaptured={this.state ? this.state.capturedODIData : {}}
          />
        )
      },
      {
        title: 'Documents Preview',
        stepNumber: 8,
        content: (
          <Module8Form
            dataCaptured={this.state ? this.state.capturedODIData : {}}
          />
        )
      }
    ]
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

  render () {
    const { steps } = this.state

    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle='DISINVESTMENT'
          breadCrumbActive='PART III'
          breadCrumbParent='ODI'
        />
        <Row>
          <Col sm='12'>
            <Card>
              <CardHeader>
                <CardTitle> DISINVESTMENT OF ODI INVESTMENTS </CardTitle>
              </CardHeader>
              <CardBody>
                <p> UIN: XXXXXXXXXXXX </p>
                <hr></hr>
                <Wizard
                  validate
                  enableAllSteps
                  onFinish={() => alert('submitted')}
                  nextData={capturedData =>
                    this.setState({
                      capturedODIData: capturedData
                    })
                  }
                  steps={steps}
                  capturedODIData={
                   this.state.capturedODIData
                  }
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
