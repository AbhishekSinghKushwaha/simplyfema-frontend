import React from 'react'
import ModulePreview from './ModulePreview'

import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from 'reactstrap'

class Module8Form extends React.Component {
  constructor(props){
    super(props)
  } 
  
  state = {
    isChecked: false,
    finalData : {}
  }
  handleSwitchChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
    })
  }

 
  render () {
    // this.setState({
    //   finalData : this.props.capturedDisInvestmentData
    // })
    return (
      <Card>
        <CardHeader>
          <CardTitle> Documents Preview </CardTitle>
        </CardHeader>
            <ModulePreview dataCaptured={this.props.capturedDisInvestmentData }/>
        <CardBody>
        </CardBody>
      </Card>
    )
  }
}

export default Module8Form
