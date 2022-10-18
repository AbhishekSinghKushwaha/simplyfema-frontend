import React from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import Checkbox from "../../../../components/Main/checkbox/CheckboxesVuexy"
import { connect } from "react-redux"
import { signupWithJWT } from "../../../../redux/actions/auth/registerActions"
import { history } from "../../../../history"
import { Mail, Edit, Check ,Smartphone, FileText} from "react-feather"

class RegisterJWT extends React.Component {
  state = {
    // password: "",
    firstName: "",
    lastName : "",
    email : "",
    phoneNumber :"",
    companyName : ""
  }

  handleRegister = e => {
    e.preventDefault()
    this.props.signupWithJWT(
      // this.state.password,
      this.state.firstName,
      this.state.lastName, 
      this.state.email,     
      this.state.phoneNumber,
      this.state.companyName,
    )
  }

  render() {
    return (
      <Form action="/" onSubmit={this.handleRegister}>
        <FormGroup className="form-label-group  position-relative has-icon-left">
          <Input
            type="text"
            placeholder="First Name"
            required
            value={this.state.firstName}
            onChange={e => this.setState({ firstName: e.target.value })}
          />
           <div className="form-control-position">
                <Edit size={15} />
              </div>
          <Label>First Name</Label>
        </FormGroup>
        <FormGroup className="form-label-group  position-relative has-icon-left">
          <Input
            type="text"
            placeholder="Last Name"
            required
            value={this.state.lastName}
            onChange={e => this.setState({ lastName: e.target.value })}
          />
           <div className="form-control-position">
                <Edit size={15} />
              </div>
          <Label>First Name</Label>
        </FormGroup>
        <FormGroup className="form-label-group  position-relative has-icon-left">
          <Input
            type="email"
            placeholder="Email"
            required
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
           <div className="form-control-position">
                <Mail size={15} />
              </div>
          <Label>Email</Label>
        </FormGroup>
        <FormGroup className="form-label-group  position-relative has-icon-left">
          <Input
            type="number"
            placeholder="Phone Number"
            required
            value={this.state.phoneNumber}
            onChange={e => this.setState({ phoneNumber: e.target.value })}
          />
           <div className="form-control-position">
                <Smartphone size={15} />
              </div>
          <Label>Phone Number</Label>
        </FormGroup>
        <FormGroup className="form-label-group  position-relative has-icon-left">
          <Input
            type="text"
            placeholder="Company Name"
            required
            value={this.state.companyName}
            onChange={e => this.setState({ companyName: e.target.value })}
          />
           <div className="form-control-position">
                <FileText size={15} />
              </div>
          <Label>Company Name</Label>
        </FormGroup>
        {/* <FormGroup className="form-label-group">
          <Input
            type="password"
            placeholder="Password"
            required
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <Label>Password</Label>
        </FormGroup> */}
        {/* <FormGroup className="form-label-group">
          <Input
            type="password"
            placeholder="Confirm Password"
            required
            value={this.state.confirmPass}
            onChange={e => this.setState({ confirmPass: e.target.value })}
          />
          <Label>Confirm Password</Label>
        </FormGroup>  */}
        <FormGroup> 
          <Checkbox
            color="primary"
            icon={<Check className="vx-icon" size={16} />}
            label=" I accept the terms & conditions."
            defaultChecked={true}
          />
        </FormGroup>
        <div className="d-flex justify-content-between">
          <Button.Ripple
            color="primary"
            outline
            onClick={() => {
              history.push("/login")
            }}
          >
            Login
          </Button.Ripple>
          <Button.Ripple color="primary" type="submit">
            Register
          </Button.Ripple>
        </div>
      </Form>
    )
  }
}
const mapStateToProps = state => {
  return {
    values: state.auth.register
  }
}
export default connect(mapStateToProps, { signupWithJWT })(RegisterJWT)
