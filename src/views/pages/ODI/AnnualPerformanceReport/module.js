import React from 'react'
import BreadCrumbs from '../../../../components/Main/breadCrumbs/BreadCrumb'
import Prism from 'prismjs'
import Module1Form from './modules/Module1Form'
import Module2Form from './modules/Module2Form'
import Module3Form from './modules/Module3Form'
import Module4Form from './modules/Module4Form'
import Module5Form from './modules/Module5Form'
import Module6Form from './modules/Module6Form'
import Module7Form from './modules/Module7Form'
import Wizard from './Wizard'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from 'reactstrap'

import 'prismjs/components/prism-jsx'
class Tabs extends React.Component {
  componentDidMount () {
    Prism.highlightAll()
  }

  state = {
    activeTab: '1',
    active: '1',
    capturedAPRData: {},
    // disInvestmentData: [
    //   {
    //     signatoryName: ''
    //   }
    // ],
    steps: [
      {
        title: 'Title 1',
        stepNumber: 1,
        content: (
          <Module1Form
            dataCaptured={
              this.state ? this.state.capturedAPRData : {}
            }
          />
        )
      },
      {
        title: 'Capital Structure',
        stepNumber: 2,
        content: (
          <Module2Form
            dataCaptured={
              this.state ? this.state.capturedAPRData : {}
            }
          />
        )
      },
      {
        title: 'Operational details',
        stepNumber: 3,
        content: (
          <Module3Form
            dataCaptured={
              this.state ? this.state.capturedAPRData : {}
            }
          />
        )
      },
      {
        title: 'Investment Details',
        stepNumber: 4,
        content: (
          <Module4Form
            dataCaptured={
              this.state ? this.state.capturedAPRData : {}
            }
          />
        )
      },
      {
        title: 'Certificate Declaration',
        stepNumber: 5,
        content: (
          <Module5Form
            dataCaptured={
              this.state ? this.state.capturedAPRData : {}
            }
          />
        )
      },
      {
        title: 'Auditory Details',
        stepNumber: 6,
        content: (
          <Module6Form
            dataCaptured={
              this.state ? this.state.capturedAPRData : {}
            }
          />
        )
      },
      {
        title: 'Documents Preview',
        stepNumber: 7,
        content: (
          <Module7Form
            dataCaptured={
              this.state ? this.state.capturedAPRData : {}
            }
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
          breadCrumbTitle='PART II'
          breadCrumbActive='Annual Performance Report'
          breadCrumbParent='ODI'
        />
        <Row>
          <Col sm='12'>
            <Card>
              <CardHeader>
                <CardTitle>
                  
                  ANNUAL PERFORMANCE REPORT OF ODI INVESTMENTS
                </CardTitle>
              </CardHeader>
              <CardBody>
                <p> UIN: XXXXXXXXXXXX </p>
                <Wizard
                  validate
                  enableAllSteps
                  onFinish={() => alert('submitted')}
                  nextData={capturedData =>
                    this.setState({
                      capturedAPRData: capturedData
                    })
                  }
                  steps={steps}
                  capturedAPRData={
                    this.state.capturedAPRData
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
