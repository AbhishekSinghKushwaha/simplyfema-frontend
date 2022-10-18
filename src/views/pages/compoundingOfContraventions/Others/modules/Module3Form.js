import React from "react";
import swal from "sweetalert";
import ReactDOM from "react-dom";
import "./popup.scss";

import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label,
  Collapse,
} from "reactstrap";
import {
  AvInput,
  AvGroup,
  AvFeedback,
  AvField,
} from "availity-reactstrap-validation";
import {
  FaFileWord,
  FaFilePdf,
  FaPrint,
  FaPlus,
  FaFile,
  FaMinus,
} from "react-icons/fa";
import Checkbox from "../../../../../components/Main/checkbox/CheckboxesVuexy";

import { Edit, PlusSquare, MinusSquare, FileText, Check } from "react-feather";

class Module3Form extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {

    sample1: [
      {
        sample_1: false,
        sample_2: false,
        sample_3: false
      }
    ],
    sample2: [
      {
        sample_1: false,
        sample_2: false,
        sample_3: false
      }
    ],
    sample3: [
      {
        sample_1: false,
        sample_2: false,
        sample_3: false,
      }
    ],
    sample4: [
      {
        sample_1: false,
        sample_2: false,
        sample_3: false,
      }
    ],

    
    background_input: "",
    natureofcontraventions_input: "",
    delayreasons_input: "",
    petitionrequest_input: "",
    background: "",
    natureofcontraventions: "",
    delayreasons: "",
    petitionrequest: "",
    collapse: true,
    isChecked: false,
    basicPicker: new Date(),
    questions1: [""],
    questions2: [""],
    questions3: [""],
    questions4: [""],
    showPlus: true,
    checkedItems: new Map(),
    errors: {
      background_input: "",
      natureofcontraventions_input: "",
      delayreasons_input: "",
      petitionrequest_input: "",
    },
  };

  componentWillReceiveProps(props){
    if(props.capturedOthersData && props.capturedOthersData.background_input){
      let questions1 = props.capturedOthersData.background_input
      this.setState({questions1})
      }

    if(props.capturedOthersData && props.capturedOthersData.natureofcontraventions_input){
      let questions2 = props.capturedOthersData.natureofcontraventions_input
      this.setState({questions2})
      }

    if(props.capturedOthersData && props.capturedOthersData.delayreasons_input){
      let questions3 = props.capturedOthersData.delayreasons_input
      this.setState({questions3})
      }
    
    if(props.capturedOthersData && props.capturedOthersData.petitionrequest_input){
      let questions4 = props.capturedOthersData.petitionrequest_input
      this.setState({questions4})
      }

    if(props.capturedOthersData && props.capturedOthersData!== this.props.capturedOthersData && props.capturedOthersData.sample1){
        let sample1 = props.capturedOthersData.sample1
        this.setState({sample1})
      }  

    if(props.capturedOthersData && props.capturedOthersData!== this.props.capturedOthersData && props.capturedOthersData.sample2){
        let sample2 = props.capturedOthersData.sample2
        this.setState({sample2})
      } 

    if(props.capturedOthersData && props.capturedOthersData!== this.props.capturedOthersData && props.capturedOthersData.sample3){
        let sample3 = props.capturedOthersData.sample3
        this.setState({sample3})
      }
      
      if(props.capturedOthersData && props.capturedOthersData!== this.props.capturedOthersData && props.capturedOthersData.sample4){
        let sample4 = props.capturedOthersData.sample4
        this.setState({sample4})
      } 
  }
  
  handleText = (i, id) => e=> {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case "background_input":
        errors.background_input =
          value.length == 0 ? "Please Enter Background" : "";
        break;
      case "natureofcontraventions_input":
        errors.natureofcontraventions_input =
          value.length == 0 ? "Please Enter Nature of Contraventions" : "";
        break;
      case "delayreasons_input":
        errors.delayreasons_input =
          value.length == 0 ? "Please Enter Delay Reasons" : "";
        break;
      case "petitionrequest_input":
        errors.petitionrequest_input =
          value.length == 0 ? "Please Enter Petition Request" : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });

    if (id === 1) {
      let questions1 = [...this.state.questions1];
      questions1[i] = e.target.value;

      this.setState({
        questions1,
        background: questions1,
      });

      this.props.capturedOthersData.background = this.state.background;
    }
    if (id === 2) {
      let questions2 = [...this.state.questions2];
      questions2[i] = e.target.value;

      this.props.capturedOthersData.natureofcontraventions =
        this.state.natureofcontraventions;

      this.setState({
        questions2,
        natureofcontraventions: questions2,
      });
    }
    if (id === 3) {
      let questions3 = [...this.state.questions3];
      questions3[i] = e.target.value;

      this.props.capturedOthersData.delayreasons =
        this.state.delayreasons;

      this.setState({
        questions3,
        delayreasons: questions3,
      });
    }
    if (id === 4) {
      let questions4 = [...this.state.questions4];
      questions4[i] = e.target.value;

      this.props.capturedOthersData.petitionrequest =
        this.state.petitionrequest;

      this.setState({
        questions4,
        petitionrequest: questions4,
      });
    }
  };

  handleDelete = (i, id) => (e) => {
    e.preventDefault();
    if (id === 1) {
      let questions1 = [
        ...this.state.questions1.slice(0, i),
        ...this.state.questions1.slice(i + 1),
      ];
      this.setState({
        questions1,
      })
    }
    if (id === 2) {
      let questions2 = [
        ...this.state.questions2.slice(0, i),
        ...this.state.questions2.slice(i + 1),
      ];
      this.setState({
        questions2,
      })
    }
    if (id === 3) {
      let questions3 = [
        ...this.state.questions3.slice(0, i),
        ...this.state.questions3.slice(i + 1),
      ];
      this.setState({
        questions3,
      })
    }
    if (id === 4) {
      let questions4 = [
        ...this.state.questions4.slice(0, i),
        ...this.state.questions4.slice(i + 1),
      ];
      this.setState({
        questions4,
      })
    }
  };

  addBackgroundInput = (state, id) => (e) => {
    //e.preventDefault();
    if (id === 1) {
      this.setState({
        questions1: this.state.questions1.concat(['']),
        sample1: this.state.sample1.concat([
          {
            sample_1: false,
            sample_2: false,
            sample_3: false,
          }
        ]),
        showPlus: false,
      }, function(){
        //console.log(this.state.questions1)
      })
    }
    if (id === 2) {
      this.setState({
        questions2: this.state.questions2.concat(['']),
        sample2: this.state.sample2.concat([
          {
            sample_1: false,
            sample_2: false,
            sample_3: false,
          }
        ]),
        showPlus: false,
      }, function(){
        //console.log(this.state.questions2)
      })
    }
    if (id === 3) {
      this.setState({
        questions3: this.state.questions3.concat(['']),
        sample3: this.state.sample3.concat([
          {
            sample_1: false,
            sample_2: false,
            sample_3: false,
          }
        ]),
        showPlus: false,
      }, function(){
        //console.log(this.state.questions3)
      })
    }
    if (id === 4) {
    this.setState({
      questions4: this.state.questions4.concat(['']),
      sample4: this.state.sample4.concat([
        {
          sample_1: false,
          sample_2: false,
          sample_3: false,
        }
      ]),
      showPlus: false,
    }, function(){
      //console.log(this.state.questions4)
    })
  }
  };

  handleSwitchChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  onEntered = () => {
    this.setState({ status: "Opened" });
  };
  onEnteredAll = () => {
    this.setState({ status: "Opened" });
  };
  onExited = () => {
    this.setState({ status: "Closed" });
  };

  onExiting = () => {
    this.setState({ status: "Closing..." });
  };

  toggle = () => {
    this.setState((state) => ({ collapse: !state.collapse }));
  };

  render() {
    const { errors } = this.state;
    const inputdata = [
      {
        id: 1,
        title: "1. BACKGROUND",
        state: this.state.questions1,
        func: this.addBackgroundInput,
        feedback: "Please enter 1",
      },
      {
        id: 2,
        title: "2. NATURE OF CONTRAVENTIONS",
        state: this.state.questions2,
        func: this.addBackgroundInput,
        feedback: "Please enter 2",
      },
      {
        id: 3,
        title: "3. DELAY REASONS",
        state: this.state.questions3,
        func: this.addBackgroundInput,
        feedback: "Please enter 3",
      },
      {
        id: 4,
        title: "4. PETITION REQUEST",
        state: this.state.questions4,
        func: this.addBackgroundInput,
        feedback: "Please enter 4",
      },
    ];

    const checkboxes = [
      {
        id: 1,
        name: "sample_1",
        key: "sample1",
        label: "Sample 1",
      },
      {
        id: 2,
        name: "sample_2",
        key: "sample2",
        label: "Sample 2",
      },
      {
        id: 3,
        name: "sample_3",
        key: "sample3",
        label: "Sample 3",
      },
      {
        id: 4,
        name: "sample_4",
        key: "sample4",
        label: "Sample 4",
      },
    ];
    return (
      <>
        {inputdata.map((data, i) => {
          const { id, title, state, func, feedback } = data;
          return (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardBody>
                <div>
                  <Row>
                    <Col sm="12">
                      {state.map((question, index) => (
                        <Row key={index}>
                          <div></div>
                          {id == 1 && (
                            <Col sm="10">
                              <Label
                                style={{
                                  paddingBottom: "9px",
                                  color: "rgba(0 , 0  , 0 , 0.8)",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                }}
                                for="nameVerticalIcons"
                              >
                                {id}.{index + 1}
                              </Label>

                              <AvGroup
                                className="has-icon-left position-relative"
                                style={{ marginBottom: "10px" }}
                              >
                                <Input
                                  type="text"
                                  name="background_input"
                                  id="background_input"
                                  style={{ height: "100px" }}
                                  //value={question}
                                  onChange={this.handleText(index, id)}
                                  value={
                                    this.props.capturedOthersData &&
                                    this.props.capturedOthersData.hasOwnProperty(
                                      "background_input"
                                    )
                                      ? this.props.capturedOthersData
                                          .background_input[index]
                                      : this.state.background[index]
                                  }
                                />
                                {errors.background_input && (
                                  <span
                                    className="error"
                                    style={{ fontSize: "12px", color: "red" }}
                                  >
                                    {errors.background_input}
                                  </span>
                                )}
                                {/* <AvFeedback>{feedback}</AvFeedback> */}
                              </AvGroup>
   
                            </Col>
                          )}

                          {id == 2 && (
                            <Col sm="10">
                              <Label
                                style={{
                                  paddingBottom: "9px",
                                  color: "rgba(0 , 0  , 0 , 0.8)",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                }}
                                for="nameVerticalIcons"
                              >
                                {id}.{index + 1}
                              </Label>

                              <AvGroup
                                className="has-icon-left position-relative"
                                style={{ marginBottom: "10px" }}
                              >
                                <Input
                                  type="text"
                                  name="natureofcontraventions_input"
                                  id="natureofcontraventions_input"
                                  style={{ height: "100px" }}
                                  //value={question}
                                  onChange={this.handleText(index, id)}
                                  value={
                                    this.props.capturedOthersData &&
                                    this.props.capturedOthersData.hasOwnProperty(
                                      "natureofcontraventions_input"
                                    )
                                      ? this.props.capturedOthersData
                                          .natureofcontraventions_input[index]
                                      : this.state.natureofcontraventions[index]
                                  }
                                  required
                                />
                                {errors.natureofcontraventions_input && (
                                  <span
                                    className="error"
                                    style={{ fontSize: "12px", color: "red" }}
                                  >
                                    {errors.natureofcontraventions_input}
                                  </span>
                                )}
                                {/* <AvFeedback>{feedback}</AvFeedback> */}
                              </AvGroup>
                            </Col>
                          )}

                          {id == 3 && (
                            <Col sm="10">
                              <Label
                                style={{
                                  paddingBottom: "9px",
                                  color: "rgba(0 , 0  , 0 , 0.8)",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                }}
                                for="nameVerticalIcons"
                              >
                                {id}.{index + 1}
                              </Label>

                              <AvGroup
                                className="has-icon-left position-relative"
                                style={{ marginBottom: "10px" }}
                              >
                                <Input
                                  type="text"
                                  name="delayreasons_input"
                                  id="delayreasons_input"
                                  style={{ height: "100px" }}
                                  //value={question}
                                  onChange={this.handleText(index, id)}
                                  value={
                                    this.props.capturedOthersData &&
                                    this.props.capturedOthersData.hasOwnProperty(
                                      "delayreasons_input"
                                    )
                                      ? this.props.capturedOthersData
                                          .delayreasons_input[index]
                                      : this.state.delayreasons[index]
                                  }
                                  required
                                />
                                {errors.delayreasons_input && (
                                  <span
                                    className="error"
                                    style={{ fontSize: "12px", color: "red" }}
                                  >
                                    {errors.delayreasons_input}
                                  </span>
                                )}
                                {/* <AvFeedback>{feedback}</AvFeedback> */}
                              </AvGroup>
                            </Col>
                          )}

                          {id == 4 && (
                            <Col sm="10">
                              <Label
                                style={{
                                  paddingBottom: "9px",
                                  color: "rgba(0 , 0  , 0 , 0.8)",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                }}
                                for="nameVerticalIcons"
                              >
                                {id}.{index + 1}
                              </Label>

                              <AvGroup
                                className="has-icon-left position-relative"
                                style={{ marginBottom: "10px" }}
                              >
                                <Input
                                  type="text"
                                  name="petitionrequest_input"
                                  id="petitionrequest_input"
                                  style={{ height: "100px" }}
                                  //value={question}
                                  onChange={this.handleText(index, id)}
                                  value={
                                    this.props.capturedOthersData &&
                                    this.props.capturedOthersData.hasOwnProperty(
                                      "petitionrequest_input"
                                    )
                                      ? this.props.capturedOthersData
                                          .petitionrequest_input[index]
                                      : this.state.petitionrequest[index]
                                  }
                                  required
                                />
                                {errors.petitionrequest_input && (
                                  <span
                                    className="error"
                                    style={{ fontSize: "12px", color: "red" }}
                                  >
                                    {errors.petitionrequest_input}
                                  </span>
                                )}
                                {/* <AvFeedback>{feedback}</AvFeedback> */}
                              </AvGroup>
                            </Col>
                          )}

                          <Col sm="2">
                            <Row>
                              <Col sm="4">
                                {id == 1 && (
                                  <div>
                                    <a href={"#samples1-"+index}>
                                      <div
                                        className="fonticon-container"
                                        style={{
                                          position: "absolute",
                                          top: "27px",
                                          width: "40px",
                                          color: "primary",
                                        }}
                                      >
                                        <div className=" fonticon-wrap">
                                          <FileText
                                            size={30}
                                            className="fonticon-wrap"
                                          />
                                        </div>
                                      </div>
                                    </a>

                                    <div className="popup" id={"samples1-"+index}>
                                      <div className="popup__content">
                                        <a href="#" className="popup__close">
                                          &times;
                                        </a>
                                        <div className="popup__right" style={{padding: "3rem 5rem"}}>
                                          <span
                                            className="popup__text"
                                            style={{ columnCount: 1 }}
                                          >
                                            <div
                                              style={{
                                                display: "flex",
                                                alignItems: "right",
                                                flexDirection: "column",
                                                //paddingRight: "100px",
                                              }}
                                            >
                                              {" "}
                                        
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: "end",
                                                        justifyContent:
                                                          "center",
                                                      }}
                                                    >
                                                      <Checkbox
                                                        color="success"
                                                        icon={
                                                          <Check className="vx-icon" size={16}/>
                                                        }
                                                        label=""
                                                        checked={
                                                          this.state.sample1 && this.state.sample1[index].sample_1
                                                        }
                                                        value={
                                                          this.state.sample1 && this.state.sample1[index].sample_1
                                                        }
                                                        onChange = {checkedValue => {
                      
                                                          this.setState(prevState => {
                                                            const newSample1 = [...prevState.sample1]
                                                            newSample1[index].sample_1 = true;
                                                            return {sample1: newSample1}
                                                          })
                                                           this.props.capturedOthersData.sample1 =
                                                              this.state.sample1
                                                        }}
                                                      />
                                                      <h2 style={{fontSize: "20px", width: "110px", padding: "3px"}}                                                   >
                                                        Sample 1
                                                      </h2>
                                                    </div>
                                                
                                            </div>
                                          </span>
                                          <span
                                            className="popup__text"
                                            style={{ columnCount: 1 }}
                                          >
                                            <div
                                              style={{
                                                display: "flex",
                                                alignItems: "right",
                                                flexDirection: "column",
                                                //paddingRight: "100px",
                                              }}
                                            >
                                              {" "}
                                        
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: "end",
                                                        justifyContent:
                                                          "center",
                                                      }}
                                                    >
                                                      <Checkbox
                                                        color="success"
                                                        icon={
                                                          <Check className="vx-icon" size={16}/>
                                                        }
                                                        label=""
                                                        checked={
                                                          this.state.sample2 && this.state.sample1[index].sample_2
                                                        }
                                                        value={
                                                          this.state.sample2 && this.state.sample1[index].sample_2
                                                        }
                                                        onChange = {checkedValue => {
                      
                                                          this.setState(prevState => {
                                                            const newSample1 = [...prevState.sample1]
                                                            newSample1[index].sample_2 = true;
                                                            return {sample1: newSample1}
                                                          })
                                                           this.props.capturedOthersData.sample1 =
                                                              this.state.sample1
                                                        }}
                                                      />
                                                      <h2 style={{fontSize: "20px", width: "110px", padding: "3px"}}                                                   >
                                                        Sample 2
                                                      </h2>
                                                    </div>
                                                
                                            </div>
                                          </span>
                                          <span
                                            className="popup__text"
                                            style={{ columnCount: 1 }}
                                          >
                                            <div
                                              style={{
                                                display: "flex",
                                                alignItems: "right",
                                                flexDirection: "column",
                                                //paddingRight: "100px",
                                              }}
                                            >
                                              {" "}
                                        
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: "end",
                                                        justifyContent:
                                                          "center",
                                                      }}
                                                    >
                                                      <Checkbox
                                                        color="success"
                                                        icon={
                                                          <Check className="vx-icon" size={16}/>
                                                        }
                                                        label=""
                                                        checked={
                                                          this.state.sample1 && this.state.sample1[index].sample_3
                                                        }
                                                        value={
                                                          this.state.sample1 && this.state.sample1[index].sample_3
                                                        }
                                                        onChange = {checkedValue => {
                      
                                                          this.setState(prevState => {
                                                            const newSample1 = [...prevState.sample1]
                                                            newSample1[index].sample_3 = true;
                                                            return {sample1: newSample1}
                                                          })
                                                           this.props.capturedOthersData.sample1 =
                                                              this.state.sample1
                                                        }}
                                                      />
                                                      <h2 style={{fontSize: "20px", width: "110px", padding: "3px"}}                                                   >
                                                        Sample 3
                                                      </h2>
                                                    </div>
                                                
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                                {id == 2 && (
                                  <div>
                                    <a href={"#samples2-"+index}>
                                      <div
                                        className="fonticon-container"
                                        style={{
                                          position: "absolute",
                                          top: "27px",
                                          width: "40px",
                                          color: "primary",
                                        }}
                                      >
                                        <div className=" fonticon-wrap">
                                          <FileText
                                            size={30}
                                            className="fonticon-wrap"
                                          />
                                        </div>
                                      </div>
                                    </a>

                                    <div className="popup" id={"samples2-"+index}>
                                      <div className="popup__content">
                                        <a href="#" className="popup__close">
                                          &times;
                                        </a>
                                        <div className="popup__right" style={{padding: "3rem 5rem"}}>
                                          <span
                                            className="popup__text"
                                            style={{ columnCount: 1 }}
                                          >
                                            <div
                                              style={{
                                                display: "flex",
                                                alignItems: "right",
                                                flexDirection: "column",
                                                //paddingRight: "100px",
                                              }}
                                            >
                                              {" "}
                                        
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: "end",
                                                        justifyContent:
                                                          "center",
                                                      }}
                                                    >
                                                      <Checkbox
                                                        color="success"
                                                        icon={
                                                          <Check className="vx-icon" size={16}/>
                                                        }
                                                        label=""
                                                        checked={
                                                          this.state.sample2 && this.state.sample2[index].sample_1
                                                        }
                                                        value={
                                                          this.state.sample2 && this.state.sample2[index].sample_1
                                                        }
                                                        onChange = {checkedValue => {
                      
                                                          this.setState(prevState => {
                                                            const newSample2 = [...prevState.sample2]
                                                            newSample2[index].sample_1 = true;
                                                            return {sample2: newSample2}
                                                          })
                                                           this.props.capturedOthersData.sample2 =
                                                              this.state.sample2
                                                        }}
                                                      />
                                                      <h2 style={{fontSize: "20px", width: "110px", padding: "3px"}}                                                   >
                                                        Sample 1
                                                      </h2>
                                                    </div>
                                                
                                            </div>
                                          </span>
                                          <span
                                            className="popup__text"
                                            style={{ columnCount: 1 }}
                                          >
                                            <div
                                              style={{
                                                display: "flex",
                                                alignItems: "right",
                                                flexDirection: "column",
                                                //paddingRight: "100px",
                                              }}
                                            >
                                              {" "}
                                        
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: "end",
                                                        justifyContent:
                                                          "center",
                                                      }}
                                                    >
                                                      <Checkbox
                                                        color="success"
                                                        icon={
                                                          <Check className="vx-icon" size={16}/>
                                                        }
                                                        label=""
                                                        checked={
                                                          this.state.sample2 && this.state.sample2[index].sample_2
                                                        }
                                                        value={
                                                          this.state.sample2 && this.state.sample2[index].sample_2
                                                        }
                                                        onChange = {checkedValue => {
                      
                                                          this.setState(prevState => {
                                                            const newSample2 = [...prevState.sample2]
                                                            newSample2[index].sample_2 = true;
                                                            return {sample2: newSample2}
                                                          })
                                                           this.props.capturedOthersData.sample2 =
                                                              this.state.sample2
                                                        }}
                                                      />
                                                      <h2 style={{fontSize: "20px", width: "110px", padding: "3px"}}                                                   >
                                                        Sample 2
                                                      </h2>
                                                    </div>
                                                
                                            </div>
                                          </span>
                                          <span
                                            className="popup__text"
                                            style={{ columnCount: 1 }}
                                          >
                                            <div
                                              style={{
                                                display: "flex",
                                                alignItems: "right",
                                                flexDirection: "column",
                                                //paddingRight: "100px",
                                              }}
                                            >
                                              {" "}
                                        
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: "end",
                                                        justifyContent:
                                                          "center",
                                                      }}
                                                    >
                                                      <Checkbox
                                                        color="success"
                                                        icon={
                                                          <Check className="vx-icon" size={16}/>
                                                        }
                                                        label=""
                                                        checked={
                                                          this.state.sample2 && this.state.sample2[index].sample_3
                                                        }
                                                        value={
                                                          this.state.sample2 && this.state.sample2[index].sample_3
                                                        }
                                                        onChange = {checkedValue => {
                      
                                                          this.setState(prevState => {
                                                            const newSample2 = [...prevState.sample2]
                                                            newSample2[index].sample_3 = true;
                                                            return {sample2: newSample2}
                                                          })
                                                           this.props.capturedOthersData.sample2 =
                                                              this.state.sample2
                                                        }}
                                                      />
                                                      <h2 style={{fontSize: "20px", width: "110px", padding: "3px"}}                                                   >
                                                        Sample 3
                                                      </h2>
                                                    </div>
                                                
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                                {id == 3 && (
                                  <div>
                                    <a href={"#samples3-"+index}>
                                      <div
                                        className="fonticon-container"
                                        style={{
                                          position: "absolute",
                                          top: "27px",
                                          width: "40px",
                                          color: "primary",
                                        }}
                                      >
                                        <div className=" fonticon-wrap">
                                          <FileText
                                            size={30}
                                            className="fonticon-wrap"
                                          />
                                        </div>
                                      </div>
                                    </a>

                                    <div className="popup" id={"samples3-"+index}>
                                      <div className="popup__content">
                                        <a href="#" className="popup__close">
                                          &times;
                                        </a>
                                        <div className="popup__right" style={{padding: "3rem 5rem"}}>
                                          <span
                                            className="popup__text"
                                            style={{ columnCount: 1 }}
                                          >
                                            <div
                                              style={{
                                                display: "flex",
                                                alignItems: "right",
                                                flexDirection: "column",
                                                //paddingRight: "100px",
                                              }}
                                            >
                                              {" "}
                                        
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: "end",
                                                        justifyContent:
                                                          "center",
                                                      }}
                                                    >
                                                      <Checkbox
                                                        color="success"
                                                        icon={
                                                          <Check className="vx-icon" size={16}/>
                                                        }
                                                        label=""
                                                        checked={
                                                          this.state.sample3 && this.state.sample3[index].sample_1
                                                        }
                                                        value={
                                                          this.state.sample3 && this.state.sample3[index].sample_1
                                                        }
                                                        onChange = {checkedValue => {
                      
                                                          this.setState(prevState => {
                                                            const newSample3 = [...prevState.sample3]
                                                            newSample3[index].sample_1 = true;
                                                            return {sample3: newSample3}
                                                          })
                                                           this.props.capturedOthersData.sample3 =
                                                              this.state.sample3
                                                        }}
                                                      />
                                                      <h2 style={{fontSize: "20px", width: "110px", padding: "3px"}}                                                   >
                                                        Sample 1
                                                      </h2>
                                                    </div>
                                                
                                            </div>
                                          </span>
                                          <span
                                            className="popup__text"
                                            style={{ columnCount: 1 }}
                                          >
                                            <div
                                              style={{
                                                display: "flex",
                                                alignItems: "right",
                                                flexDirection: "column",
                                                //paddingRight: "100px",
                                              }}
                                            >
                                              {" "}
                                        
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: "end",
                                                        justifyContent:
                                                          "center",
                                                      }}
                                                    >
                                                      <Checkbox
                                                        color="success"
                                                        icon={
                                                          <Check className="vx-icon" size={16}/>
                                                        }
                                                        label=""
                                                        checked={
                                                          this.state.sample3 && this.state.sample3[index].sample_2
                                                        }
                                                        value={
                                                          this.state.sample3 && this.state.sample3[index].sample_2
                                                        }
                                                        onChange = {checkedValue => {
                      
                                                          this.setState(prevState => {
                                                            const newSample3 = [...prevState.sample3]
                                                            newSample3[index].sample_2 = true;
                                                            return {sample3: newSample3}
                                                          })
                                                           this.props.capturedOthersData.sample3 =
                                                              this.state.sample3
                                                        }}
                                                      />
                                                      <h2 style={{fontSize: "20px", width: "110px", padding: "3px"}}                                                   >
                                                        Sample 2
                                                      </h2>
                                                    </div>
                                                
                                            </div>
                                          </span>
                                          <span
                                            className="popup__text"
                                            style={{ columnCount: 1 }}
                                          >
                                            <div
                                              style={{
                                                display: "flex",
                                                alignItems: "right",
                                                flexDirection: "column",
                                                //paddingRight: "100px",
                                              }}
                                            >
                                              {" "}
                                        
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: "end",
                                                        justifyContent:
                                                          "center",
                                                      }}
                                                    >
                                                      <Checkbox
                                                        color="success"
                                                        icon={
                                                          <Check className="vx-icon" size={16}/>
                                                        }
                                                        label=""
                                                        checked={
                                                          this.state.sample3 && this.state.sample3[index].sample_3
                                                        }
                                                        value={
                                                          this.state.sample3 && this.state.sample3[index].sample_3
                                                        }
                                                        onChange = {checkedValue => {
                      
                                                          this.setState(prevState => {
                                                            const newSample3 = [...prevState.sample3]
                                                            newSample3[index].sample_3 = true;
                                                            return {sample3: newSample3}
                                                          })
                                                           this.props.capturedOthersData.sample3 =
                                                              this.state.sample3
                                                        }}
                                                      />
                                                      <h2 style={{fontSize: "20px", width: "110px", padding: "3px"}}                                                   >
                                                        Sample 3
                                                      </h2>
                                                    </div>
                                                
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                                {id == 4 && (
                                  <div>
                                    <a href={"#samples4-"+index}>
                                      <div
                                        className="fonticon-container"
                                        style={{
                                          position: "absolute",
                                          top: "27px",
                                          width: "40px",
                                          color: "primary",
                                        }}
                                      >
                                        <div className=" fonticon-wrap">
                                          <FileText
                                            size={30}
                                            className="fonticon-wrap"
                                          />
                                        </div>
                                      </div>
                                    </a>

                                    <div className="popup" id={"samples4-"+index}>
                                      <div className="popup__content">
                                        <a href="#" className="popup__close">
                                          &times;
                                        </a>
                                        <div className="popup__right" style={{padding: "3rem 5rem"}}>
                                          <span
                                            className="popup__text"
                                            style={{ columnCount: 1 }}
                                          >
                                            <div
                                              style={{
                                                display: "flex",
                                                alignItems: "right",
                                                flexDirection: "column",
                                                //paddingRight: "100px",
                                              }}
                                            >
                                              {" "}
                                        
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: "end",
                                                        justifyContent:
                                                          "center",
                                                      }}
                                                    >
                                                      <Checkbox
                                                        color="success"
                                                        icon={
                                                          <Check className="vx-icon" size={16}/>
                                                        }
                                                        label=""
                                                        checked={
                                                          this.state.sample4 && this.state.sample4[index].sample_1
                                                        }
                                                        value={
                                                          this.state.sample4 && this.state.sample4[index].sample_1
                                                        }
                                                        onChange = {checkedValue => {
                      
                                                          this.setState(prevState => {
                                                            const newSample4 = [...prevState.sample4]
                                                            newSample4[index].sample_1 = true;
                                                            return {sample4: newSample4}
                                                          })
                                                           this.props.capturedOthersData.sample4 =
                                                              this.state.sample4
                                                        }}
                                                      />
                                                      <h2 style={{fontSize: "20px", width: "110px", padding: "3px"}}                                                   >
                                                        Sample 1
                                                      </h2>
                                                    </div>
                                                
                                            </div>
                                          </span>
                                          <span
                                            className="popup__text"
                                            style={{ columnCount: 1 }}
                                          >
                                            <div
                                              style={{
                                                display: "flex",
                                                alignItems: "right",
                                                flexDirection: "column",
                                                //paddingRight: "100px",
                                              }}
                                            >
                                              {" "}
                                        
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: "end",
                                                        justifyContent:
                                                          "center",
                                                      }}
                                                    >
                                                      <Checkbox
                                                        color="success"
                                                        icon={
                                                          <Check className="vx-icon" size={16}/>
                                                        }
                                                        label=""
                                                        checked={
                                                          this.state.sample4 && this.state.sample4[index].sample_2
                                                        }
                                                        value={
                                                          this.state.sample4 && this.state.sample4[index].sample_2
                                                        }
                                                        onChange = {checkedValue => {
                      
                                                          this.setState(prevState => {
                                                            const newSample4 = [...prevState.sample4]
                                                            newSample4[index].sample_2 = true;
                                                            return {sample4: newSample4}
                                                          })
                                                           this.props.capturedOthersData.sample4 =
                                                              this.state.sample4
                                                        }}
                                                      />
                                                      <h2 style={{fontSize: "20px", width: "110px", padding: "3px"}}                                                   >
                                                        Sample 2
                                                      </h2>
                                                    </div>
                                                
                                            </div>
                                          </span>
                                          <span
                                            className="popup__text"
                                            style={{ columnCount: 1 }}
                                          >
                                            <div
                                              style={{
                                                display: "flex",
                                                alignItems: "right",
                                                flexDirection: "column",
                                                //paddingRight: "100px",
                                              }}
                                            >
                                              {" "}
                                        
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: "end",
                                                        justifyContent:
                                                          "center",
                                                      }}
                                                    >
                                                      <Checkbox
                                                        color="success"
                                                        icon={
                                                          <Check className="vx-icon" size={16}/>
                                                        }
                                                        label=""
                                                        checked={
                                                          this.state.sample4 && this.state.sample4[index].sample_3
                                                        }
                                                        value={
                                                          this.state.sample4 && this.state.sample4[index].sample_3
                                                        }
                                                        onChange = {checkedValue => {
                      
                                                          this.setState(prevState => {
                                                            const newSample4 = [...prevState.sample4]
                                                            newSample4[index].sample_3 = true;
                                                            return {sample4: newSample4}
                                                          })
                                                           this.props.capturedOthersData.sample4 =
                                                              this.state.sample4
                                                        }}
                                                      />
                                                      <h2 style={{fontSize: "20px", width: "110px", padding: "3px"}}                                                   >
                                                        Sample 3
                                                      </h2>
                                                    </div>
                                                
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </Col>

                              {index !== 0 && (
                                <Col sm="4">
                                  <div
                                    onClick={this.handleDelete(index, id)}
                                    className="fonticon-container"
                                    style={{
                                      position: "absolute",
                                      top: "28px",
                                      width: "40px",
                                      color: "primary",
                                    }}
                                  >
                                    <div className="fonticon-wrap">
                                      <MinusSquare
                                        size={30}
                                        className="fonticon-wrap"
                                      />
                                    </div>
                                  </div>
                                </Col>
                              )}

                              {index + 1 === state.length && (
                                <Col sm="4">
                                  <div
                                    onClick={func(state, id)}
                                    className="fonticon-container"
                                    style={{
                                      position: "absolute",
                                      top: "27px",
                                      width: "40px",
                                      color: "primary",
                                    }}
                                  >
                                    <div className=" fonticon-wrap">
                                      <PlusSquare
                                        size={30}
                                        className="fonticon-wrap"
                                      />
                                    </div>
                                  </div>
                                </Col>
                              )}
                            </Row>
                          </Col>
                        </Row>
                      ))}
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </>
    );
  }
}
export default Module3Form;

// import React from 'react'
// import swal from 'sweetalert';
// import ReactDOM from 'react-dom';
// import "./popup.scss"

// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardBody,
//   Row,
//   Col,
//   Input,
//   Form,
//   Button,
//   Label,
//   Collapse
// } from 'reactstrap'
// import {
//   AvInput,
//   AvGroup,
//   AvFeedback,
//   AvField
// } from 'availity-reactstrap-validation'
// import { FaFileWord, FaFilePdf , FaPrint , FaPlus, FaFile , FaMinus} from 'react-icons/fa'
// import Checkbox from '../../../../../components/Main/checkbox/CheckboxesVuexy'

// import { Edit, PlusSquare, MinusSquare , FileText , Check } from 'react-feather'

// class Module3Form extends React.Component {
//   constructor(props){
//     super(props)
//   }

//   state = {
//     sample1_1:false,
//     sample1_2:false,
//     sample1_3:false,

//     sample2_1:false,
//     sample2_2:false,
//     sample2_3:false,

//     sample3_1:false,
//     sample3_2:false,
//     sample3_3:false,

//     sample4_1:false,
//     sample4_2:false,
//     sample4_3:false,

//     collapse: true,
//     isChecked: false,
//     basicPicker: new Date(),
//     questions: [''],
//     questions2: [''],
//     questions3: [''],
//     questions4: [''],

//     background1_input_1:"",
//     background1_input_2:"",
//     background1_input_3:"",
//     background1_input_4:"",
//     background1_input_5:"",
//     background1_input_6:"",
//     background1_input_7:"",
//     background1_input_8:"",
//     background1_input_9:"",
//     background1_input_10:"",
//     background1_input_11:"",

//     background2_input_1:"",
//     background2_input_2:"",
//     background2_input_3:"",
//     background2_input_4:"",
//     background2_input_5:"",
//     background2_input_6:"",
//     background2_input_7:"",
//     background2_input_8:"",
//     background2_input_9:"",
//     background2_input_10:"",
//     background2_input_11:"",

//     background3_input_1:"",
//     background3_input_2:"",
//     background3_input_3:"",
//     background3_input_4:"",
//     background3_input_5:"",
//     background3_input_6:"",
//     background3_input_7:"",
//     background3_input_8:"",
//     background3_input_9:"",
//     background3_input_10:"",
//     background3_input_11:"",

//     background4_input_1:"",
//     background4_input_2:"",
//     background4_input_3:"",
//     background4_input_4:"",
//     background4_input_5:"",
//     background4_input_6:"",
//     background4_input_7:"",
//     background4_input_8:"",
//     background4_input_9:"",
//     background4_input_10:"",
//     background4_input_11:"",

//     showPlus :true

//     // addColumn
//   }

//   handleText = i => e => {
//     let questions = [...this.state.questions]
//     questions[i] = e.target.value

//     this.props.capturedOthersData.background1_input_1 =
//     this.state.background1_input_1
//     this.props.capturedOthersData.background1_input_2 =
//     this.state.background1_input_2
//     this.props.capturedOthersData.background1_input_3 =
//     this.state.background1_input_3
//     this.props.capturedOthersData.background1_input_4 =
//     this.state.background1_input_4
//     this.props.capturedOthersData.background1_input_5 =
//     this.state.background1_input_5
//     this.props.capturedOthersData.background1_input_6 =
//     this.state.background1_input_6
//     this.props.capturedOthersData.background1_input_7 =
//     this.state.background1_input_7
//     this.props.capturedOthersData.background1_input_8 =
//     this.state.background1_input_8
//     this.props.capturedOthersData.background1_input_9 =
//     this.state.background1_input_9
//     this.props.capturedOthersData.background1_input_10 =
//     this.state.background1_input_10
//     this.props.capturedOthersData.background1_input_11=
//     this.state.background1_input_11

//     this.setState({
//       questions,
//       background1_input_1 : questions[0],
//       background1_input_2 : questions[1],
//       background1_input_3 : questions[2],
//       background1_input_4 : questions[3],
//       background1_input_5 : questions[4],
//       background1_input_6 : questions[5],
//       background1_input_7 : questions[6],
//       background1_input_8 : questions[7],
//       background1_input_9 : questions[8],
//       background1_input_10 : questions[9],
//       background1_input_11 : questions[10],
//     })
//   }

//   handleDelete = i => e => {
//     e.preventDefault()
//     let questions = [
//       ...this.state.questions.slice(0 , i),
//       ...this.state.questions.slice(i + 1)
//     ]
//     this.setState({
//       questions
//     })
//   }

//   addInput = e => {
//     e.preventDefault()
//     let questions = this.state.questions.concat([''])
//       this.setState({
//       questions,
//       showPlus:false
//     })
//   }

//   handleText2 = i => e => {
//     let questions2 = [...this.state.questions2]
//     questions2[i] = e.target.value

//     this.props.capturedOthersData.background2_input_1 =
//     this.state.background2_input_1
//     this.props.capturedOthersData.background2_input_2 =
//     this.state.background2_input_2
//     this.props.capturedOthersData.background2_input_3 =
//     this.state.background2_input_3
//     this.props.capturedOthersData.background2_input_4 =
//     this.state.background2_input_4
//     this.props.capturedOthersData.background2_input_5 =
//     this.state.background2_input_5
//     this.props.capturedOthersData.background2_input_6 =
//     this.state.background2_input_6
//     this.props.capturedOthersData.background2_input_7 =
//     this.state.background2_input_7
//     this.props.capturedOthersData.background2_input_8 =
//     this.state.background2_input_8
//     this.props.capturedOthersData.background2_input_9 =
//     this.state.background2_input_9
//     this.props.capturedOthersData.background2_input_10 =
//     this.state.background2_input_10
//     this.props.capturedOthersData.background2_input_11=
//     this.state.background2_input_11

//     this.setState({
//       questions2 ,
//       background2_input_1 : questions2[0],
//       background2_input_2 : questions2[1],
//       background2_input_3 : questions2[2],
//       background2_input_4 : questions2[3],
//       background2_input_5 : questions2[4],
//       background2_input_6 : questions2[5],
//       background2_input_7 : questions2[6],
//       background2_input_8 : questions2[7],
//       background2_input_9 : questions2[8],
//       background2_input_10 : questions2[9],
//       background2_input_11 : questions2[10],
//     })
//   }

//   handleDelete2 = i => e => {
//     e.preventDefault()
//     let questions2 = [
//       ...this.state.questions2.slice(0 , i),
//       ...this.state.questions2.slice(i + 1)
//     ]
//     this.setState({
//       questions2
//     })
//   }

//   addbackground2_Input = e => {
//     e.preventDefault()
//     let questions2 = this.state.questions2.concat([''])
//       this.setState({
//       questions2,
//       showPlus:false
//     })
//   }

//   handleText3 = i => e => {
//     let questions3 = [...this.state.questions3]
//     questions3[i] = e.target.value

//     this.props.capturedOthersData.background3_input_1 =
//     this.state.background3_input_1
//     this.props.capturedOthersData.background3_input_2 =
//     this.state.background3_input_2
//     this.props.capturedOthersData.background3_input_3 =
//     this.state.background3_input_3
//     this.props.capturedOthersData.background3_input_4 =
//     this.state.background3_input_4
//     this.props.capturedOthersData.background3_input_5 =
//     this.state.background3_input_5
//     this.props.capturedOthersData.background3_input_6 =
//     this.state.background3_input_6
//     this.props.capturedOthersData.background3_input_7 =
//     this.state.background3_input_7
//     this.props.capturedOthersData.background3_input_8 =
//     this.state.background3_input_8
//     this.props.capturedOthersData.background3_input_9 =
//     this.state.background3_input_9
//     this.props.capturedOthersData.background3_input_10 =
//     this.state.background3_input_10
//     this.props.capturedOthersData.background3_input_11=
//     this.state.background3_input_11

//     this.setState({
//       questions3 ,
//       background3_input_1 : questions3[0],
//       background3_input_2 : questions3[1],
//       background3_input_3 : questions3[2],
//       background3_input_4 : questions3[3],
//       background3_input_5 : questions3[4],
//       background3_input_6 : questions3[5],
//       background3_input_7 : questions3[6],
//       background3_input_8 : questions3[7],
//       background3_input_9 : questions3[8],
//       background3_input_10 : questions3[9],
//       background3_input_11 : questions3[10],
//     })
//   }

//   handleDelete3 = i => e => {
//     e.preventDefault()
//     let questions3 = [
//       ...this.state.questions3.slice(0 , i),
//       ...this.state.questions3.slice(i + 1)
//     ]
//     this.setState({
//       questions3
//     })
//   }

//   addbackground3_Input = e => {
//     e.preventDefault()
//     let questions3 = this.state.questions3.concat([''])
//       this.setState({
//       questions3,
//       showPlus:false
//     })
//   }

//   handleText4 = i => e => {
//     let questions4 = [...this.state.questions4]
//     questions4[i] = e.target.value

//     this.props.capturedOthersData.background4_input_1 =
//     this.state.background4_input_1
//     this.props.capturedOthersData.background4_input_2 =
//     this.state.background4_input_2
//     this.props.capturedOthersData.background4_input_3 =
//     this.state.background4_input_3
//     this.props.capturedOthersData.background4_input_4 =
//     this.state.background4_input_4
//     this.props.capturedOthersData.background4_input_5 =
//     this.state.background4_input_5
//     this.props.capturedOthersData.background4_input_6 =
//     this.state.background4_input_6
//     this.props.capturedOthersData.background4_input_7 =
//     this.state.background4_input_7
//     this.props.capturedOthersData.background4_input_8 =
//     this.state.background4_input_8
//     this.props.capturedOthersData.background4_input_9 =
//     this.state.background4_input_9
//     this.props.capturedOthersData.background4_input_10 =
//     this.state.background4_input_10
//     this.props.capturedOthersData.background4_input_11=
//     this.state.background4_input_11

//     this.setState({
//       questions4 ,
//       background4_input_1 : questions4[0],
//       background4_input_2 : questions4[1],
//       background4_input_3 : questions4[2],
//       background4_input_4 : questions4[3],
//       background4_input_5 : questions4[4],
//       background4_input_6 : questions4[5],
//       background4_input_7 : questions4[6],
//       background4_input_8 : questions4[7],
//       background4_input_9 : questions4[8],
//      background4_input_10 : questions4[9],
//      background4_input_11 : questions4[10],
//     })
//   }

//   handleDelete4 = i => e => {
//     e.preventDefault()
//     let questions4 = [
//       ...this.state.questions4.slice(0 , i),
//       ...this.state.questions4.slice(i + 1)
//     ]
//     this.setState({
//       questions4
//     })
//   }

//   addbackground4_Input = e => {
//     e.preventDefault()
//     let questions4 = this.state.questions4.concat([''])
//       this.setState({
//       questions4,
//       showPlus:false
//     })
//   }

//   handleSwitchChange = () => {
//     this.setState({
//       isChecked: !this.state.isChecked
//     })
//   }

//   onEntered = () => {
//     this.setState({ status: 'Opened' })
//   }
//   onEnteredAll = () => {
//     this.setState({ status: 'Opened' })
//   }
//   onExited = () => {
//     this.setState({ status: 'Closed' })
//   }

//   onExiting = () => {
//     this.setState({ status: 'Closing...' })
//   }

//   toggle = () => {
//     this.setState(state => ({ collapse: !state.collapse }))
//   }

//   render ()

//   {


//     return (
//       <Card>
//         <CardHeader>
//           <CardTitle>1. BACKGROUND</CardTitle>
//         </CardHeader>
//         <CardBody>

//           <Form>
//             <Row>

// <Col sm="12">

// {this.state.questions.map((question, index) => (
//       <Row   key={index}>

//   <Col sm='10'>

// <Label style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>1.{index +1}</Label>

//     <AvGroup  className='has-icon-left position-relative' style={{marginBottom:"10px"}}>

//       <Input
//         type='text'
//         // name='background1_input'
//         style={{height:"100px"}}
//         id='nameVerticalIcons'
//         value={question}
//         onChange={
//           this.handleText(index)

//         }

//       />

//       <AvFeedback>Please enter 1</AvFeedback>

//     </AvGroup>
//   </Col>

//   <Col sm="2">
//     <Row>
//   <Col sm="4" >
//                 <a href="#samples-1">
//                 <div
//                   // onClick={this.popupwala}
//                   className='fonticon-container'
//                   style={{
//                     position:'absolute',
//                     top:"27px",
//                     width: '40px',
//                     color: 'primary'
//                   }}
//                 >
//                   <div className=' fonticon-wrap'>
//                     <FileText size={30} className='fonticon-wrap' />
//                   </div>
//                 </div>
//                 </a>

//                 <div className="popup" id="samples-1" >
//               <div className="popup__content">

//               <a href="#" className="popup__close">&times;</a>
//                   <div className="popup__right">
//                     <p className="popup__text">
//                     <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
//                 <dt>
//                   {' '}
//                   <Checkbox
//                     color='success'
//                     icon={<Check className='vx-icon' size={16} />}
//                     label=''
//                     onChange={checkedValue => {
//                       this.setState({
//                        sample1_1: checkedValue.target.checked
//                       })

//                         this.props.capturedOthersData.sample1_1 =
//                           checkedValue.target.checked
//                     }}
//                   />
//                 </dt>

//                 <h2 style={{fontSize:"20px", width:"110px"}}>Sample 1</h2>

//                 </div>
//                                       </p>

//                     <p className="popup__text">
//                     <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
//                 <dt>
//                   {' '}
//                   <Checkbox
//                     color='success'
//                     icon={<Check className='vx-icon' size={16} />}
//                     label=''
//                     onChange={checkedValue => {
//                       this.setState({
//                        sample1_2: checkedValue.target.checked
//                       })

//                         this.props.capturedOthersData.sample1_2 =
//                           checkedValue.target.checked
//                     }}
//                   />
//                 </dt>

//                 <h2 style={{fontSize:"20px", width:"110px"}}>Sample 2</h2>

//                 </div>
//                                       </p>

//                     <p className="popup__text">
//                     <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
//                 <dt>
//                   {' '}
//                   <Checkbox
//                     color='success'
//                     icon={<Check className='vx-icon' size={16} />}
//                     label=''
//                     onChange={checkedValue => {
//                       this.setState({
//                        sample1_3: checkedValue.target.checked
//                       })

//                         this.props.capturedOthersData.sample1_3 =
//                           checkedValue.target.checked
//                     }}
//                   />
//                 </dt>

//                 <h2 style={{fontSize:"20px", width:"110px"}}>Sample 3</h2>

//                 </div>
//                                       </p>

//                 </div>
//                 </div>
//           </div>
//                  </Col>

//   {index !== 0 &&
//   <Col sm="4" >
//              <div
//                   onClick={this.handleDelete(index)}
//                   className='fonticon-container'
//                   style={{
//                     position:'absolute',
//                     top:"28px",
//                     width: '40px',
//                     color: 'primary'
//                   }}
//                 >
//                   <div className='fonticon-wrap'>
//                     <MinusSquare size={30} className='fonticon-wrap' />
//                   </div>
//                 </div>
//              </Col>}

//                  {index +1 === this.state.questions.length &&
//                  <Col sm="4" >
//                  <div
//                   onClick={this.addInput}
//                   className='fonticon-container'
//                   style={{
//                     position:'absolute',
//                     top:"27px",
//                     width: '40px',
//                     color: 'primary'
//                   }}
//                 >
//                   <div className=' fonticon-wrap'>
//                     <PlusSquare size={30} className='fonticon-wrap' />
//                   </div>
//                 </div>
//                  </Col>}
//                  </Row>
//                  </Col>

//   </Row >
//     ))}

// </Col>

//             <CardHeader>
//         <CardTitle style={{width:"1200px",  marginBottom:"20px"}}>2. NATURE OF CONTRAVENTIONS</CardTitle>
//       </CardHeader>
//       <Col sm="12">

//  {this.state.questions2.map((question2, index) => (
//        <Row   key={index}>

//    <Col sm='10'>
//  <Label  style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>2.{index +1}</Label>

//      <AvGroup  className='has-icon-left position-relative' style={{marginBottom:"10px"}}>

//        <AvInput
//          type='text'
//          name='name'
//          style={{height:"100px"}}
//          id='nameVerticalIcons'
//          onChange={this.handleText2(index)}
//          value={question2}
//        />

//  <AvFeedback>Please enter 2</AvFeedback>

//      </AvGroup>
//    </Col>

//    <Col sm="2">

//      <Row >
//    <Col sm="4" >
//               <a href="#samples-2">
//                 <div
//                   // onClick={this.popupwala}
//                   className='fonticon-container'
//                   style={{
//                     position:'absolute',
//                     top:"27px",
//                     width: '40px',
//                     color: 'primary'
//                   }}
//                 >
//                   <div className=' fonticon-wrap'>
//                     <FileText size={30} className='fonticon-wrap' />
//                   </div>
//                 </div>
//                 </a>

//                 <div className="popup" id="samples-2" >
//               <div className="popup__content">

//               <a href="#" className="popup__close">&times;</a>
//                   <div className="popup__right">
//                     <p className="popup__text">
//                     <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
//                 <dt>
//                   {' '}
//                   <Checkbox
//                     color='success'
//                     icon={<Check className='vx-icon' size={16} />}
//                     label=''
//                     onChange={checkedValue => {
//                       this.setState({
//                        sample2_1: checkedValue.target.checked
//                       })

//                         this.props.capturedOthersData.sample2_1 =
//                           checkedValue.target.checked
//                     }}
//                   />
//                 </dt>

//                 <h2 style={{fontSize:"20px", width:"110px"}}>Sample 1</h2>

//                 </div>
//                                       </p>

//                     <p className="popup__text">
//                     <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
//                 <dt>
//                   {' '}
//                   <Checkbox
//                     color='success'
//                     icon={<Check className='vx-icon' size={16} />}
//                     label=''
//                     onChange={checkedValue => {
//                       this.setState({
//                        sample2_2: checkedValue.target.checked
//                       })

//                         this.props.capturedOthersData.sample2_2 =
//                           checkedValue.target.checked
//                     }}
//                   />
//                 </dt>

//                 <h2 style={{fontSize:"20px", width:"110px"}}>Sample 2</h2>

//                 </div>
//                                       </p>

//                     <p className="popup__text">
//                     <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
//                 <dt>
//                   {' '}
//                   <Checkbox
//                     color='success'
//                     icon={<Check className='vx-icon' size={16} />}
//                     label=''
//                     onChange={checkedValue => {
//                       this.setState({
//                        sample2_3: checkedValue.target.checked
//                       })

//                         this.props.capturedOthersData.sample2_3 =
//                           checkedValue.target.checked
//                     }}
//                   />
//                 </dt>

//                 <h2 style={{fontSize:"20px", width:"110px"}}>Sample 3</h2>

//                 </div>
//                                       </p>

//                 </div>
//                 </div>
//           </div>
//                  </Col>

//           {index !==0 &&
//           <Col sm="4" >
//           <div
//                onClick={this.handleDelete2(index)}
//                className='fonticon-container'
//                style={{
//                  float:"bottom",position:'absolute',
//                  top:"28px",
//                  width: '40px',
//                  color: 'primary'
//                }}
//              >
//                <div className='fonticon-wrap'>
//                  <MinusSquare size={30} className='fonticon-wrap' />
//                </div>
//              </div>
//           </Col>}

//                {index + 1 === this.state.questions2.length &&
//                 <Col sm="4" >
//                 <div
//                  onClick={this.addbackground2_Input}
//                  className='fonticon-container'
//                  style={{
//                    position:'absolute',
//                    top:"27px",
//                    width: '40px',
//                    color: 'primary'
//                  }}
//                >
//                  <div className=' fonticon-wrap'>
//                    <PlusSquare size={30} className='fonticon-wrap' />
//                  </div>
//                </div>
//                 </Col>

//                }
//                </Row>
//                </Col>

//    </Row >
//      ))}

//  </Col>

//               <CardHeader>
//           <CardTitle style={{width:"1200px",  marginBottom:"20px"}}>3. DELAY REASONS</CardTitle>
//         </CardHeader>

//         <Col sm="12">

//  {this.state.questions3.map((question3, index) => (
//        <Row   key={index}>

//    <Col sm='10'>
//  <Label  style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>3.{index +1}</Label>

//      <AvGroup  className='has-icon-left position-relative' style={{marginBottom:"10px"}}>

//        <AvInput
//          type='text'
//          name='name'
//          style={{height:"100px"}}
//          id='nameVerticalIcons'
//          onChange={this.handleText3(index)}
//          value={question3}
//        />

//  <AvFeedback>Please enter 3</AvFeedback>

//      </AvGroup>
//    </Col>

//    <Col sm="2">
//      <Row>
//    <Col sm="4" >
//    <a href="#samples-3">
//                 <div
//                   // onClick={this.popupwala}
//                   className='fonticon-container'
//                   style={{
//                     position:'absolute',
//                     top:"27px",
//                     width: '40px',
//                     color: 'primary'
//                   }}
//                 >
//                   <div className=' fonticon-wrap'>
//                     <FileText size={30} className='fonticon-wrap' />
//                   </div>
//                 </div>
//                 </a>

//                 <div className="popup" id="samples-3" >
//               <div className="popup__content">

//               <a href="#" className="popup__close">&times;</a>
//                   <div className="popup__right">
//                     <p className="popup__text">
//                     <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
//                 <dt>
//                   {' '}
//                   <Checkbox
//                     color='success'
//                     icon={<Check className='vx-icon' size={16} />}
//                     label=''
//                     onChange={checkedValue => {
//                       this.setState({
//                        sample3_1: checkedValue.target.checked
//                       })

//                         this.props.capturedOthersData.sample3_1 =
//                           checkedValue.target.checked
//                     }}
//                   />
//                 </dt>

//                 <h2 style={{fontSize:"20px", width:"110px"}}>Sample 1</h2>

//                 </div>
//                                       </p>

//                     <p className="popup__text">
//                     <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
//                 <dt>
//                   {' '}
//                   <Checkbox
//                     color='success'
//                     icon={<Check className='vx-icon' size={16} />}
//                     label=''
//                     onChange={checkedValue => {
//                       this.setState({
//                        sample3_2: checkedValue.target.checked
//                       })

//                         this.props.capturedOthersData.sample3_2 =
//                           checkedValue.target.checked
//                     }}
//                   />
//                 </dt>

//                 <h2 style={{fontSize:"20px", width:"110px"}}>Sample 2</h2>

//                 </div>
//                                       </p>

//                     <p className="popup__text">
//                     <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
//                 <dt>
//                   {' '}
//                   <Checkbox
//                     color='success'
//                     icon={<Check className='vx-icon' size={16} />}
//                     label=''
//                     onChange={checkedValue => {
//                       this.setState({
//                        sample3_3: checkedValue.target.checked
//                       })

//                         this.props.capturedOthersData.sample3_3 =
//                           checkedValue.target.checked
//                     }}
//                   />
//                 </dt>

//                 <h2 style={{fontSize:"20px", width:"110px"}}>Sample 3</h2>

//                 </div>
//                                       </p>

//                 </div>
//                 </div>
//           </div>
//                  </Col>

//            {index !== 0 &&
//             <Col sm="4" >
//             <div
//                  onClick={this.handleDelete3(index)}
//                  className='fonticon-container'
//                  style={{
//                   position:'absolute',
//                    top:"28px",
//                    width: '40px',
//                    color: 'primary'
//                  }}
//                >
//                  <div className='fonticon-wrap'>
//                    <MinusSquare size={30} className='fonticon-wrap' />
//                  </div>
//                </div>
//             </Col>}

//                  {index + 1 === this.state.questions3.length &&
//                  <Col sm="4" >
//                  <div
//                   onClick={this.addbackground3_Input}
//                   className='fonticon-container'
//                   style={{
//                     position:'absolute',
//                     top:"27px",
//                     width: '40px',
//                     color: 'primary'
//                   }}
//                 >
//                   <div className=' fonticon-wrap'>
//                     <PlusSquare size={30} className='fonticon-wrap' />
//                   </div>
//                 </div>
//                  </Col> }
//                  </Row>
//                  </Col>
//    </Row >
//      ))}

//  </Col>

//               <CardHeader>
//           <CardTitle style={{width:"1200px",  marginBottom:"20px"}}>4. PETITION REQUEST</CardTitle>
//         </CardHeader>

//         <Col sm="12">

//  {this.state.questions4.map((question4, index) => (
//        <Row   key={index}>

//    <Col sm='10'>
//  <Label  style={{paddingBottom:'9px' , color:'rgba(0 , 0  , 0 , 0.8)' , fontSize:'14px' , fontWeight:'500'}} for='nameVerticalIcons'>4.{index +1}</Label>

//      <AvGroup  className='has-icon-left position-relative' style={{marginBottom:"10px"}}>

//        <AvInput
//          type='text'
//          name='name'
//          style={{height:"100px"}}
//          id='nameVerticalIcons'
//          onChange={this.handleText4(index)}
//          value={question4}
//        />

//  <AvFeedback>Please enter 4</AvFeedback>

//      </AvGroup>
//    </Col>

//    <Col sm="2">
//    <Row>
//               <Col sm="4" >
//               <a href="#samples-4">
//                 <div
//                   // onClick={this.popupwala}
//                   className='fonticon-container'
//                   style={{
//                     position:'absolute',
//                     top:"27px",
//                     width: '40px',
//                     color: 'primary'
//                   }}
//                 >
//                   <div className=' fonticon-wrap'>
//                     <FileText size={30} className='fonticon-wrap' />
//                   </div>
//                 </div>
//                 </a>

//                 <div className="popup" id="samples-4" >
//               <div className="popup__content">

//               <a href="#" className="popup__close">&times;</a>
//                   <div className="popup__right">
//                     <p className="popup__text">
//                     <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
//                 <dt>
//                   {' '}
//                   <Checkbox
//                     color='success'
//                     icon={<Check className='vx-icon' size={16} />}
//                     label=''
//                     onChange={checkedValue => {
//                       this.setState({
//                        sample4_1: checkedValue.target.checked
//                       })

//                         this.props.capturedOthersData.sample4_1 =
//                           checkedValue.target.checked
//                     }}
//                   />
//                 </dt>

//                 <h2 style={{fontSize:"20px", width:"110px"}}>Sample 1</h2>

//                 </div>
//                                       </p>

//                     <p className="popup__text">
//                     <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
//                 <dt>
//                   {' '}
//                   <Checkbox
//                     color='success'
//                     icon={<Check className='vx-icon' size={16} />}
//                     label=''
//                     onChange={checkedValue => {
//                       this.setState({
//                        sample4_2: checkedValue.target.checked
//                       })

//                         this.props.capturedOthersData.sample4_2 =
//                           checkedValue.target.checked
//                     }}
//                   />
//                 </dt>

//                 <h2 style={{fontSize:"20px", width:"110px"}}>Sample 2</h2>

//                 </div>
//                                       </p>

//                     <p className="popup__text">
//                     <div style={{display:"flex" , justifyContent:"right", alignItems:"right" }}>
//                 <dt>
//                   {' '}
//                   <Checkbox
//                     color='success'
//                     icon={<Check className='vx-icon' size={16} />}
//                     label=''
//                     onChange={checkedValue => {
//                       this.setState({
//                        sample4_3: checkedValue.target.checked
//                       })

//                         this.props.capturedOthersData.sample4_3 =
//                           checkedValue.target.checked
//                     }}
//                   />
//                 </dt>

//                 <h2 style={{fontSize:"20px", width:"110px"}}>Sample 3</h2>

//                 </div>
//                                       </p>

//                 </div>
//                 </div>
//           </div>
//                  </Col>

//              {index !== 0 &&
//              <Col sm="4" >
//              <div
//                   onClick={this.handleDelete4(index)}
//                   className='fonticon-container'
//                   style={{
//                     float:"bottom",position:'absolute',
//                     top:"28px",
//                     width: '40px',
//                     color: 'primary'
//                   }}
//                 >
//                   <div className='fonticon-wrap'>
//                     <MinusSquare size={30} className='fonticon-wrap' />
//                   </div>
//                 </div>
//              </Col>}

//                {index + 1 === this.state.questions4.length &&
//                 <Col sm="4" >
//                  <div
//                   onClick={this.addbackground4_Input}
//                   className='fonticon-container'
//                   style={{
//                     position:'absolute',
//                     top:"27px",
//                     width: '40px',
//                     color: 'primary'
//                   }}
//                 >
//                   <div className=' fonticon-wrap'>
//                     <PlusSquare size={30} className='fonticon-wrap' />
//                   </div>
//                 </div>
//                  </Col>}
//                  </Row>
//                  </Col>

//    </Row >
//      ))}

//  </Col>

//             </Row>
//           </Form>
//         </CardBody>
//       </Card>
//     )
//   }
// }
// export default Module3Form
