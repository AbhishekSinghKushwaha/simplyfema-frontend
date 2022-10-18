import React from 'react'
import ModulePreview from './ModulePreview'

import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from 'reactstrap'

class Module7Form extends React.Component {
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
    //   finalData : this.props.capturedAPRData
    // })
    return (
      <Card>
        <CardHeader>
          <CardTitle> Documents Preview </CardTitle>
        </CardHeader>
            <ModulePreview dataCaptured={this.props.capturedAPRData }/>
        <CardBody>
        </CardBody>
      </Card>
    )
  }
}

export default Module7Form
