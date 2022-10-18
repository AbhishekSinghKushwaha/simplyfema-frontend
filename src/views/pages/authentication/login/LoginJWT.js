import React from 'react'
import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  CardBody,
  FormGroup,
  Form,
  Input,
  Button,
  Label
} from 'reactstrap'
import { Toast, ToastHeader, ToastBody } from 'reactstrap'
// import transparentBg from "../../../assets/img/svg/transparent.svg"
import Checkbox from '../../../../components/Main/checkbox/CheckboxesVuexy'
import {
  Mail,
  Lock,
  Check,
  Smartphone,
  ArrowLeft,
  ArrowRight
} from 'react-feather'
import { loginWithJWT } from '../../../../redux/actions/auth/loginActions'
import { connect } from 'react-redux'
import { history } from '../../../../history'

class LoginJWT extends React.Component {
  state = {
    email: 'user1@simplyfema.com',
    phoneNumber: '9920790161',
    remember: false,
    otpSent: false,
    loginForm: true,
    otpValue1: '',
    otpValue2: '',
    otpValue3: '',
    otpValue4: '',
    otpValue5: '',
    otpValue6: ''
  }

  handleLogin = e => {
    e.preventDefault()
    this.setState({
      otpSent: true,
      loginForm: false
    })
    this.props.loginWithJWT(this.state)
  }

  handleOTP = e => {
    e.preventDefault()

    // this.setState({
    //   otpSent: true,
    //   loginForm: false
    // })
    // this.props.loginWithJWT(this.state)
  }

  render () {
    const otpStyles = {
      padding: '0 0.5rem',
      margin: '0 14px',
      width: '50px',
      height: '50px'
    }

    return (
      <React.Fragment>
        <CardBody className='pt-1'>
          <Form
            action='/'
            onSubmit={this.handleLogin}
            style={this.state.loginForm ? {} : { display: 'none' }}
          >
            <FormGroup className='form-label-group position-relative has-icon-left'>
              <Input
                type='email'
                placeholder='Email'
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
                required
              />
              <div className='form-control-position'>
                <Mail size={15} />
              </div>
              <Label>Email</Label>
            </FormGroup>
            <FormGroup className='form-label-group position-relative has-icon-left'>
              <Input
                type='number'
                placeholder='Phone  Number'
                value={this.state.phoneNumber}
                onChange={e => this.setState({ phoneNumber: e.target.value })}
                required
              />
              <div className='form-control-position'>
                <Smartphone size={15} />
              </div>
              <Label>Phone Number</Label>
            </FormGroup>

            {/* <FormGroup className="d-flex justify-content-between align-items-center"> */}
            {/* <Checkbox
                color="primary"
                icon={<Check className="vx-icon" size={16} />}
                label="Remember me"
                defaultChecked={false}
                onChange={this.handleRemember}
              /> */}
            {/* <div className="float-right">
                <Link to="/pages/forgot-password">Forgot Password?</Link>
              </div> */}
            {/* </FormGroup> */}
            <div className='d-flex justify-content-between'>
              <Button.Ripple
                color='primary'
                outline
                onClick={() => {
                  history.push('/register')
                }}
              >
                Register
              </Button.Ripple>
              <Button.Ripple color='primary' type='submit'>
                Login
              </Button.Ripple>
            </div>
          </Form>
          <Form style={this.state.otpSent ? {} : { display: 'none' }}>
            <div className='my-2 rounded'>
              <Toast>
                <ToastHeader>User Found </ToastHeader>
                <ToastBody>
                  Please verify account by entering OTP which you have received
                  in mobile.
                </ToastBody>
              </Toast>
            </div>
            <p className='px-2 auth-title'>Enter OTP</p>
            <div
              style={{
                display: 'inline-flex',
                'flex-wrap': 'nowrap',
                'margin-left': '-28px'
              }}
            >
              <Col sm='1'>
                <FormGroup className='form-label-group position-relative has-icon-left'>
                  <Input
                    style={otpStyles}
                    type='number'
                    max={9}
                    name='otpValue1'
                    value={this.state.otpValue1}
                    onChange={e => this.setState({ otpValue1: e.target.value })}
                    required
                  />
                </FormGroup>
              </Col>

              <Col sm='1'>
                <FormGroup className='form-label-group position-relative has-icon-left'>
                  <Input
                    style={otpStyles}
                    type='number'
                    max={9}
                    name='otpValue2'
                    value={this.state.otpValue2}
                    onChange={e => this.setState({ otpValue2: e.target.value })}
                    required
                  />
                </FormGroup>
              </Col>
              <Col sm='1'>
                <FormGroup className='form-label-group position-relative has-icon-left'>
                  <Input
                    style={otpStyles}
                    name='otpValue3'
                    type='number'
                    max={9}
                    value={this.state.otpValue3}
                    onChange={e => this.setState({ otpValue3: e.target.value })}
                    required
                  />
                </FormGroup>
              </Col>
              <Col sm='1'>
                <FormGroup className='form-label-group position-relative has-icon-left'>
                  <Input
                    style={otpStyles}
                    type='number'
                    max={9}
                    name='otpValue4'
                    value={this.state.otpValue4}
                    onChange={e => this.setState({ otpValue4: e.target.value })}
                    required
                  />
                </FormGroup>
              </Col>
              <Col sm='1'>
                <FormGroup className='form-label-group position-relative has-icon-left'>
                  <Input
                    style={otpStyles}
                    type='number'
                    max={9}
                    name='otpValue5'
                    value={this.state.otpValue5}
                    onChange={e => this.setState({ otpValue5: e.target.value })}
                    required
                  />
                </FormGroup>
              </Col>
              <Col sm='1'>
                <FormGroup className='form-label-group position-relative has-icon-left'>
                  <Input
                    style={otpStyles}
                    type='number'
                    max={9}
                    name='otpValue6'
                    value={this.state.otpValue6}
                    onChange={e => this.setState({ otpValue6: e.target.value })}
                    required
                  />
                </FormGroup>
              </Col>
            </div>
            <Col lg={12} md={12}>
              <Button.Ripple
                color='primary'
                outline
                onClick={() => {
                  history.push('/register')
                }}
              >
                <ArrowLeft size={15} /> Back To Login
              </Button.Ripple>
              <Button.Ripple color='primary' type='submit'>
                <ArrowRight size={15} />
                Verify OTP
              </Button.Ripple>
            </Col>
          </Form>
        </CardBody>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    values: state.auth.login
  }
}
export default connect(mapStateToProps, { loginWithJWT })(LoginJWT)
