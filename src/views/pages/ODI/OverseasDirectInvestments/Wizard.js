
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Form,
  Button
} from 'reactstrap'
import { AvForm } from 'availity-reactstrap-validation'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'
import '../../../../assets/scss/plugins/extensions/swiper.scss'

class VuexyWizard extends React.Component {
  static getDerivedStateFromProps (props, state) {
    if (props.activeStep) {
      if (props.activeStep !== state.activeStep) {
        if (props.validate) {
          if (state.errors.length === 0 && state.submitted)
            return { activeStep: props.activeStep }
        } else return { activeStep: props.activeStep }
      }
    }
    return null
  }

  state = {
    activeStep: this.props.activeStep ? this.props.activeStep : 0,
    errors: [],
    values: [],
    fetchedDisInvestmentData: {}
  }

  handleNextStep = (index, total, errors = []) => {
    let activeStep = this.state.activeStep
    let validation = this.props.validate

    if (!validation) {
      if (activeStep <= index && activeStep !== total) {
        this.setState({
          activeStep: activeStep + 1
        })
      }
    } else {
      if (errors.length === 0 && activeStep <= index && activeStep !== total) {
        this.setState({
          activeStep: activeStep + 1
        })
      } else if (errors.length && this.props.onValidationError) {
        this.props.onValidationError(this.state.errors)
      } else {
        return
      }
    }
  }

  handlePreviousStep = index => {
    let activeStep = this.state.activeStep
    if (activeStep >= index)
      this.setState({
        activeStep: activeStep - 1
      })
  }

  handleEnableAllSteps = index => {
    if (this.props.enableAllSteps) {
      this.setState({ activeStep: index })
    }
  }

  handleSubmit = e => {
    if (
      this.props.steps.length - 1 === this.state.activeStep &&
      this.props.onFinish
    ) {
      this.props.onFinish(e)
    }
  }

  render () {
    const params = {
      slidesPerView: 'auto',
      spaceBetween: 5,
      // centeredSlides: true,
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev"
      // },
      containerClass: 'swiper-container centered-style-1',
      slideToClickedSlide: true
    }
    let FormTag = this.props.validate ? AvForm : Form
    return (
      <React.Fragment>
        <Swiper
          className={`vx-wizard ${
            this.props.className ? this.props.className : ''
          }`}
          tabs
          {...params}
          activeTab={this.state.activeStep}
        >
          {this.props.steps.map((item, i) => {
            return (
              <div
                className={classnames(
                  `swiper-slide rounded swiper-shadow step step-${i}`,
                  {
                    'swiper-slide-active':
                      this.state.activeStep === i ? true : false,
                    done: i < this.state.activeStep
                  }
                )}
                key={i}
                onClick={() => this.handleEnableAllSteps(i)}
                style={{
                  'word-break': 'break-all',
                  'min-width': '130px',
                  'max-width': '120px',
                  padding: '0.5rem 0.5rem'
                }}
              >
                <span
                  className='swiper-text pt-sm-50 d-block'
                  style={{ 'word-spacing': '99vw' }}
                >
                  {item.title}
                </span>
                <hr></hr>
                {item.stepNumber}
              </div>
            )
          })}
        </Swiper>
        {/* <Nav
          className={`vx-wizard ${
            this.props.className ? this.props.className : ''
          }`}
          tabs
        >
          {this.props.steps.map((item, i) => {
            return (
              <NavItem
                className='step-wrapper'
                key={i}
                onClick={() => this.handleEnableAllSteps(i)}
              >
                  <span className='step-text'>{item.title}</span>

                <NavLink
                  className={classnames(`step step-${i}`, {
                    active: this.state.activeStep === i ? true : false,
                    done: i < this.state.activeStep
                  })}
                >
                  <span className='step-text'>{item.stepNumber}</span>
                </NavLink>
              </NavItem>
            )
          })}
        </Nav> */}

        <TabContent
          className={`vx-wizard-content ${
            this.props.tabPaneClass ? this.props.tabPaneClass : ''
          }`}
          activeTab={this.state.activeStep}
        >
          {this.props.steps.map((item, i) => {
            return (
              <TabPane
                className={`step-content step-${i}-content`}
                key={i}
                tabId={i}
              >
                <FormTag
                  className='form-horizontal'
                  onSubmit={(e, errors, values) => {
                    this.setState({ errors, values })
                    if (!this.props.validate) e.preventDefault()
                    var tempData = Object.assign(
                      values,
                      this.props.capturedODIData
                    )
                    Object.create(tempData)
                    this.setState({ fetchedDisInvestmentData: tempData })
                    this.props.nextData(this.state.fetchedDisInvestmentData)
                    this.handleNextStep(i, this.props.steps.length - 1, errors)
                    this.handleSubmit(e)
                  }}
                >
                  {/* {item.content} */}
                  {React.cloneElement(item.content, {
                    capturedODIData: this.props
                      .capturedODIData
                  })}
                  {this.props.pagination ? (
                    <div className='wizard-actions d-flex justify-content-between'>
                      <Button
                        color='primary'
                        disabled={this.state.activeStep === 0}
                        onClick={() => this.handlePreviousStep(i)}
                      >
                        Prev
                      </Button>
                      <Button type='submit' color='primary'>
                        {this.props.steps.length - 1 === i &&
                        !this.props.finishBtnText
                          ? 'Submit'
                          : this.props.steps.length - 1 === i &&
                            this.props.finishBtnText
                          ? this.props.finishBtnText
                          : 'Next'}
                      </Button>
                    </div>
                  ) : null}
                </FormTag>
              </TabPane>
            )
          })}
        </TabContent>
      </React.Fragment>
    )
  }
}

VuexyWizard.propTypes = {
  className: PropTypes.string,
  steps: PropTypes.array.isRequired,
  validate: PropTypes.bool,
  enableAllSteps: PropTypes.bool,
  finishBtnText: PropTypes.string,
  onFinish: PropTypes.func,
  pagination: PropTypes.bool,
  onValidationError: PropTypes.func,
  activeStep: PropTypes.number,
  disInvestmentData: PropTypes.array,
  nextData: PropTypes.func,
  capturedODIData: PropTypes.object
}

VuexyWizard.defaultProps = {
  pagination: true
}

export default VuexyWizard

