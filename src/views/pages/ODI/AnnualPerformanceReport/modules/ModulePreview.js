import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import React from 'react'
import html2pdf from 'html2pdf.js'
import convert from 'reactel-to-html'
import pdfLogo from '../../../../../assets/img/icons/pdf.png'
import excelLogo from '../../../../../assets/img/icons/xls.png'
import wordLogo from '../../../../../assets/img/icons/doc.png'
import { FaFileWord, FaFilePdf, FaFileExcel, FaPrint } from 'react-icons/fa'

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
  ButtonGroup,
  Label,
  Table,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap'

import { FileText, Printer } from 'react-feather'

class ModulePreview extends React.Component {
  constructor (props) {
    super(props)
  }

  state = {
    isChecked: false,

    wordHeader:
      "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Simply Fema - PART II  - ODI - Annual Performance Report</title></head><body>",

    excelHeader:
      '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/><title>Simply Fema - PART II ODI -  - Annual Performance Report</title></head>',

    commonFooter: '</body></html>',

    wordFile: 'FORM ODI - PART II - Annual Performance Report.doc',
    excelFile: 'FORM ODI - PART II - Annual Performance Report.xls',
    pdfFile: 'FORM ODI - PART II - Annual Performance Report.pdf'
  }

  saveWordDocument = () => {
    var input = document.getElementById('mainDiv')
    let wordHTML =
      this.state.wordHeader + input.innerHTML + this.state.commonFooter
    let wordFileURL =
      'data:application/vnd.ms-word;charset=utf-8,' +
      encodeURIComponent(wordHTML)
    var downloadLink = document.createElement('a')
    document.body.appendChild(downloadLink)
    let wordBlob = new Blob(['\ufeff', wordHTML], {
      type: 'application/msword'
    })
    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(wordBlob, this.state.wordFile)
    } else {
      downloadLink.href = wordFileURL
      downloadLink.download = this.state.wordFile
      downloadLink.click()
    }
    document.body.removeChild(downloadLink)
  }

  printDocument = () => {
    var printContent = document.getElementById('mainDiv')
    var windowObject = window.open(
      '',
      '',
      'left=0,top=0,width=800,height=800,toolbar,scrollbars,status'
    )
    windowObject.document.write(printContent.innerHTML)
    windowObject.document.close()
    windowObject.focus()
    windowObject.print()
    windowObject.close()
  }

  saveExcelDocument = () => {
    var input = document.getElementById('mainDiv')
    var excelHTML =
      this.state.excelHeader + input.innerHTML + this.state.commonFooter

    let excelBlob = new Blob(['\ufeff', excelHTML], {
      type: 'application/msexcel'
    })

    let excelFileURL =
      'data:application/vnd.ms-excel;charset=utf-8,' +
      encodeURIComponent(excelHTML)

    var downloadLink = document.createElement('a')
    document.body.appendChild(downloadLink)

    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(excelBlob, this.state.excelFile)
    } else {
      downloadLink.href = excelFileURL
      downloadLink.download = this.state.excelFile
      downloadLink.click()
    }
    document.body.removeChild(downloadLink)
  }

  savePDFDocument = () => {
    var pdfContent = document.getElementById('mainDiv')
    var pdfPreview = window.open(
      '',
      '',
      'left=0,top=0,width=800,height=800,toolbar,scrollbars,status'
    )

    pdfPreview.document.write(
      pdfContent.innerHTML +
        "<button style='top: 30px;left: 5px;position: fixed;'onclick='this.remove();html2pdf().set(opt).from(document.body).save() ;setTimeout(function(){ window.close(); }, 5000);'> Download </button>" +
        "<script> var opt = { enableLinks: true, margin : [ 1,0.5 ,1.95 , 0.5], filename: 'FORM - Annual Performance Report - PART II.pdf', image: { type: 'jpeg', quality: 1 }, html2canvas: { scale: 1 }, jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' } }; var script = document.createElement('script'); script.type = 'application/javascript'; script.src = 'https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js'; document.head.appendChild(script); </script>"
    )
    var opt = {
      enableLinks: true,
      margin: 1,
      filename: 'myfile.pdf',
      image: {
        type: 'jpeg',
        quality: 1
      },
      html2canvas: {
        scale: 1
      },
      jsPDF: {
        unit: 'in',
        format: 'A4',
        orientation: 'portrait'
      }
    }

    // html2pdf()
    //   .set(opt)
    //   .from(prtContent)
    //   .save()
    // WinPrint.document.close()
    pdfPreview.focus()
    // WinPrint.close();
  }

  render () {
    const wordStyle = {
      height: 'auto',
      width: '30px',
      color: '#63d4ea'
    }
    const excelStyle = {
      height: 'auto',
      width: '30px',
      color: '#65c970'
    }
    const pdfStyle = {
      height: 'auto',
      width: '30px',
      color: '#ea5455'
    }

    const printStyle = {
      height: 'auto',
      width: '30px',
      color: '#555555'
    }

    if (
      this.props.dataCaptured.selectedDisinvestmentTypeOption ===
      'Full Disinvestment'
    ) {
      this.props.dataCaptured.disinvestmentRouteOptionFullDisinvesment = '✓'
    } else {
      this.props.dataCaptured.disinvestmentRouteOptionFullDisinvesment = 'x'
    }

    if (
      this.props.dataCaptured.selectedDisinvestmentTypeOption ===
      'Partial Disinvestment'
    ) {
      this.props.dataCaptured.disinvestmentRouteOptionPartialDisinvesment = '✓'
    } else {
      this.props.dataCaptured.disinvestmentRouteOptionPartialDisinvesment = 'x'
    }

    if (this.props.dataCaptured.disinvestmentRouteOption === 'Approval Route') {
      this.props.dataCaptured.disinvestmentRouteOptionApprovalRoute = '✓'
    } else {
      this.props.dataCaptured.disinvestmentRouteOptionApprovalRoute = 'x'
    }

    if (
      this.props.dataCaptured.disinvestmentRouteOption === 'Automatic Route'
    ) {
      this.props.dataCaptured.disinvestmentRouteOptionAutomaticRoute = '✓'
    } else {
      this.props.dataCaptured.disinvestmentRouteOptionAutomaticRoute = 'x'
    }

    return (
      <React.Fragment>
        <Row>
          <Table borderless responsive striped>
            <thead>
              <tr>
                <th> Particulars</th>
                <th className=''>
                  <div> Word </div>
                </th>
                <th className=''>
                  <div> Excel </div>
                </th>
                <th className=''>
                  <div> PDF </div>
                </th>
                <th className=''>
                  <div> Print </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className='text-nowrap' scope='row'>
                  Form ODI– Part II
                </th>
                <td>
                  <FaFileWord
                    style={wordStyle}
                    onClick={this.saveWordDocument}
                  />
                </td>
                <td>
                  <FaFileExcel
                    style={excelStyle}
                    onClick={this.saveExcelDocument}
                  />
                </td>
                <td>
                  <FaFilePdf style={pdfStyle} onClick={this.savePDFDocument} />
                </td>
                <td>
                  <FaPrint style={printStyle} onClick={this.printDocument} />
                </td>
              </tr>
              <tr>
                <th className='text-nowrap' scope='row'>
                  RBI Disinvestment Letter
                </th>
                <td>
                  <FaFileWord
                    style={wordStyle}
                    onClick={this.saveWordDocument}
                  />
                </td>
                <td>
                  <FaFileExcel
                    style={excelStyle}
                    onClick={this.saveExcelDocument}
                  />
                </td>
                <td>
                  <FaFilePdf style={pdfStyle} onClick={this.savePDFDocument} />
                </td>
                <td>
                  <FaPrint style={printStyle} onClick={this.printDocument} />
                </td>
              </tr>
              <tr>
                <th className='text-nowrap' scope='row'>
                  Letter of Authority
                </th>

                <td>
                  <FaFileWord
                    style={wordStyle}
                    onClick={this.saveWordDocument}
                  />
                </td>
                <td>
                  <FaFileExcel
                    style={excelStyle}
                    onClick={this.saveExcelDocument}
                  />
                </td>
                <td>
                  <FaFilePdf style={pdfStyle} onClick={this.savePDFDocument} />
                </td>
                <td>
                  <FaPrint style={printStyle} onClick={this.printDocument} />
                </td>
              </tr>
              <tr>
                <th className='text-nowrap' scope='row'>
                  Valuation Certificate
                </th>

                <td>
                  <FaFileWord
                    style={wordStyle}
                    onClick={this.saveWordDocument}
                  />
                </td>
                <td>
                  <FaFileExcel
                    style={excelStyle}
                    onClick={this.saveExcelDocument}
                  />
                </td>
                <td>
                  <FaFilePdf style={pdfStyle} onClick={this.savePDFDocument} />
                </td>
                <td>
                  <FaPrint style={printStyle} onClick={this.printDocument} />
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
        <div
          id='mainDiv'
          style={{
            left: 0,
            right: 0,
            margin: '0 auto',
            display:'none'
          }}
        >
          <table cellSpacing={0} border={0}>
            <colgroup width={45} />
            <colgroup width={232} />
            <colgroup width={41} />
            <colgroup width={26} />
            <colgroup width={16} />
            <colgroup width={37} />
            <colgroup width={21} />
            <colgroup width={33} />
            <colgroup width={45} />
            <colgroup width={29} />
            <colgroup width={7} />
            <colgroup span={3} width={19} />
            <colgroup width={8} />
            <colgroup width={26} />
            <colgroup width={10} />
            <colgroup width={21} />
            <colgroup width={10} />
            <colgroup width={25} />
            <colgroup width={1} />
            <colgroup width={10} />
            <colgroup width={25} />
            <colgroup width={40} />
            <tbody>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={24}
                  height={23}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={4} color='#000000'>
                      Form ODI PART II
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={24}
                  height={24}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={4} color='#000000'>
                      ANNUAL PERFORMANCE REPORT (APR)
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={24}
                  rowSpan={2}
                  height={42}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Note: all amounts should be in actuals and NOT in thousands.
                    All the figures should be in a single foreign currency
                    except for Non-Equity Exports Realized i.e. item V (iii)
                  </font>
                </td>
              </tr>
              <tr></tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  height={21}
                  align='center'
                  valign='top'
                  bgcolor='#BEBEBE'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      I.
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  align='left'
                  valign='top'
                  bgcolor='#BEBEBE'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      APR for the period
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={5}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    From date
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={3}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={5}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    To Date
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={2}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={3}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={2}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000'
                  }}
                  rowSpan={2}
                  height={42}
                  align='center'
                  valign='top'
                  bgcolor='#BEBEBE'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      II.
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  align='left'
                  valign='top'
                  bgcolor='#BEBEBE'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      Unique Identification Number
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  rowSpan={2}
                  align='center'
                  valign='middle'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={2}
                  rowSpan={2}
                  align='center'
                  valign='middle'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  rowSpan={2}
                  align='center'
                  valign='middle'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={2}
                  rowSpan={2}
                  align='center'
                  valign='middle'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  rowSpan={2}
                  align='center'
                  valign='middle'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={2}
                  rowSpan={2}
                  align='center'
                  valign='middle'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={2}
                  rowSpan={2}
                  align='center'
                  valign='middle'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={2}
                  rowSpan={2}
                  align='center'
                  valign='middle'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  rowSpan={2}
                  align='center'
                  valign='middle'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={2}
                  rowSpan={2}
                  align='center'
                  valign='middle'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={3}
                  rowSpan={2}
                  align='center'
                  valign='middle'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={2}
                  rowSpan={2}
                  align='center'
                  valign='middle'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  rowSpan={2}
                  align='center'
                  valign='middle'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  align='left'
                  valign='top'
                  bgcolor='#BEBEBE'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      (UIN)
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  height={21}
                  align='center'
                  valign='top'
                  bgcolor='#BEBEBE'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      III.
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={23}
                  align='left'
                  valign='top'
                  bgcolor='#BEBEBE'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      Capital structure as on the last day of the accounting
                      year of JV/ WOS (FCY - IDR )
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  height={21}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={10}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Amount
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={12}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    % share
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  height={21}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    i)
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Indian
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={10}
                  align='center'
                  valign='top'
                  sdnum='1033;0;#,##0'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={12}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  height={21}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    ii)
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Foreign
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={10}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    -
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={12}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    -
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  height={21}
                  align='center'
                  valign='top'
                  bgcolor='#BEBEBE'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      IV.
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={23}
                  align='left'
                  valign='top'
                  bgcolor='#BEBEBE'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      Operational details of the JV/ WOS for the last two years
                      (FCY - IDR)
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  height={21}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={10}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Previous Year
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={12}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Current Year
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  height={21}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    i)
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Net Profit / (Loss)
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={10}
                  align='center'
                  valign='top'
                  sdnum='1033;0;#,##0_);(#,##0)'
                >
                  <b>
                    <font face='Times New Roman' size={3}>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'

                  }}
                  colSpan={12}
                  align='center'
                  valign='top'
                  sdnum='1033;0;#,##0_);(#,##0)'
                >
                  <b>
                    <font face='Times New Roman' size={3}>
                      <br />
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  height={21}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    ii)
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Dividend
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={10}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3}>
                    <br />
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={12}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3}>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  height={21}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    iii)
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Net worth
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={10}
                  align='center'
                  valign='top'
                  sdnum='1033;0;#,##0_);(#,##0)'
                >
                  <b>
                    <font face='Times New Roman' size={3}>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'

                  }}
                  colSpan={12}
                  align='center'
                  valign='top'
                  sdnum='1033;0;#,##0_);(#,##0)'
                >
                  <b>
                    <font face='Times New Roman' size={3}>
                      <br />
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  height={21}
                  align='center'
                  valign='top'
                  bgcolor='#BEBEBE'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      V.
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={23}
                  align='left'
                  valign='top'
                  bgcolor='#BEBEBE'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      Repatriation from the JV / WOS (FCY - IDR)
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  rowSpan={2}
                  height={42}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  rowSpan={2}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={10}
                  rowSpan={2}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Current Year
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={12}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Since commencement of
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={12}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    business
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  height={21}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    (i)
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Dividend
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={10}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={12}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  height={21}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    (ii)
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Repayment of Loan
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={10}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={12}
                  align='center'
                  valign='top'
                  sdnum='1033;0;#,##0'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000'
                  }}
                  height={42}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    (iii)
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Non-Equity Exports Realised (in INR)
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={10}
                  align='center'
                  valign='middle'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={12}
                  align='center'
                  valign='middle'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  height={21}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    (iv)
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Royalties
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={10}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={12}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  height={21}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    (v)
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Technical Know-how Fees
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={10}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={12}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  height={21}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    (vi)
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Consultancy Fees
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={10}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={12}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  height={21}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    (vii)
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Others (Please specify)
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={10}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={12}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  height={21}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    (viii)
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Profit
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={10}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={12}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  height={21}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    (ix)
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Retained Earnings
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={10}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={12}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  height={21}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    (x)
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    FDI by JV/ WOS/ SDS into India
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={10}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={12}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '2px solid #000000'
                  }}
                  height={65}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    (xi)
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000'
                  }}
                  align='justify'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Refund of excess share application money @ Transaction No. -
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={10}
                  align='center'
                  valign='middle'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={12}
                  align='center'
                  valign='middle'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderRight: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                  }}
                  colSpan={24}
                  rowSpan={2}
                  height={42}
                  align='justify'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    @ furnish 15 / 17 digit transaction number allotted by
                    Reserve Bank allotted at the time of reporting on the online
                    OID application
                  </font>
                </td>
              </tr>
              <tr></tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  rowSpan={3}
                  height={65}
                  align='center'
                  valign='top'
                  bgcolor='#BEBEBE'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      VI.
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={23}
                  rowSpan={3}
                  align='justify'
                  valign='top'
                  bgcolor='#BEBEBE'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      Furnish the details of investment in either Wholly owned
                      of a Joint Venture Step down subsidiary (SDS) of JV/ WOS
                      in the prescribed format (attach separate sheet if the
                      number of SDS is more than one)
                    </font>
                  </b>
                </td>
              </tr>
              <tr></tr>
              <tr></tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  height={21}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    (i)
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={3}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Name, Level and Country name of SDS
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={20}
                  align='center'
                  valign='middle'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000'
                  }}
                  rowSpan={2}
                  height={42}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    (ii)
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={3}
                  rowSpan={2}
                  align='justify'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Name, Level and Country name of the parent of SDS
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={20}
                  rowSpan={2}
                  align='center'
                  valign='middle'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
              </tr>
              <tr></tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  rowSpan={2}
                  height={42}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    (iii)
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000'
                  }}
                  colSpan={3}
                  rowSpan={2}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Investment Amount in FCY and Date of investment (if any)
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderLeft: '1px solid #000000'
                  }}
                  colSpan={4}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Currency:
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={6}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000'
                  }}
                  colSpan={3}
                  rowSpan={2}
                  align='center'
                  valign='middle'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Date:
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={7}
                  rowSpan={2}
                  align='center'
                  valign='middle'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000'
                  }}
                  colSpan={4}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Amount:
                  </font>
                </td>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={6}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  height={21}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    (iv)
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={3}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Investment type
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderLeft: '1px solid #000000'
                  }}
                  colSpan={4}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    WO SDS
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={6}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000'
                  }}
                  colSpan={5}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    JV SDS
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={5}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  rowSpan={2}
                  height={42}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    (v)
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000'
                  }}
                  colSpan={3}
                  rowSpan={2}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Type of Step Down Subsidiary
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={6}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    SPV / Holding Company
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={6}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Operating
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={8}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Operating Cum SVP
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={6}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={6}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={8}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  height={21}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    (vi)
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={3}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Activity code as per 1987
                  </font>
                </td>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={20}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  height={21}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    (vii)
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={3}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    % stake held in SDS
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={20}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  height={21}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    (viii)
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={14}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Is the activity of SDS into financial services (tick)
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={5}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Yes
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={4}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    No
                  </font>
                </td>
              </tr>
             
            
              <tr>
                <td height={21} align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={24}
                  height={21}
                  align='center'
                  valign='top'
                  bgcolor='#BEBEBE'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      Certificate from Indian Party / Resident Individual
                      (Strike out whichever is not applicable)
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={24}
                  height={21}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    We/ I the Indian Party/ Resident Individual (wherever
                    applicable) further confirm that:
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{ borderLeft: '1px solid #000000' }}
                  height={21}
                  align='center'
                  valign='bottom'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    i.
                  </font>
                </td>
                <td
                  style={{ borderRight: '1px solid #000000' }}
                  colSpan={23}
                  rowSpan={2}
                  align='justify'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Investment in step down subsidiary (SDS) has been reported
                    to RBI from time to time in terms of Regulation 13 of
                    Notification No. FEMA.120/RB-2004 dated July 7, 2004 as
                    amended;
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{ borderLeft: '1px solid #000000' }}
                  height={21}
                  align='center'
                  valign='bottom'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{ borderLeft: '1px solid #000000' }}
                  height={21}
                  align='center'
                  valign='bottom'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    ii.
                  </font>
                </td>
                <td
                  style={{ borderRight: '1px solid #000000' }}
                  colSpan={23}
                  rowSpan={2}
                  align='justify'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    If the activity of the SDS is related to financial services
                    - it is certified that Regulation 7(2) of Notification No
                    FEMA 120/RB-2004 dated July 7, 2004 as amended has been
                    complied with;
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{ borderLeft: '1px solid #000000' }}
                  height={21}
                  align='center'
                  valign='bottom'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{ borderLeft: '1px solid #000000' }}
                  height={21}
                  align='center'
                  valign='bottom'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    iii.
                  </font>
                </td>
                <td
                  style={{ borderRight: '1px solid #000000' }}
                  colSpan={23}
                  rowSpan={2}
                  align='justify'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Changes in the capital structure of the JV/ WOS since last
                    APR has been reported under Section C of Form ODI Part I.
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{ borderLeft: '1px solid #000000' }}
                  height={21}
                  align='center'
                  valign='bottom'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{ borderLeft: '1px solid #000000' }}
                  height={21}
                  align='center'
                  valign='bottom'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    iv.
                  </font>
                </td>
                <td
                  style={{ borderRight: '1px solid #000000' }}
                  colSpan={23}
                  rowSpan={3}
                  align='justify'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    We have received share certificate/s (or any other proof of
                    investment) and submitted the same to the designated AD bank
                    for verification within 6 months of making the remittance/s
                    for all (equity/CCPS) investment made as per Regulation 15
                    (i) of FEMA Notification ibid.
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{ borderLeft: '1px solid #000000' }}
                  height={21}
                  align='center'
                  valign='bottom'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{ borderLeft: '1px solid #000000' }}
                  height={21}
                  align='center'
                  valign='bottom'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{ borderLeft: '1px solid #000000' }}
                  height={21}
                  align='center'
                  valign='bottom'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    v.
                  </font>
                </td>
                <td
                  style={{ borderRight: '1px solid #000000' }}
                  colSpan={23}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    The previous APRs for all JV/ WOS have been filed to the
                    respective designated AD bank.
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{ borderLeft: '1px solid #000000' }}
                  height={21}
                  align='center'
                  valign='bottom'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    vi.
                  </font>
                </td>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={23}
                  rowSpan={2}
                  align='justify'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Repatriated to India, all dues receivable from the overseas
                    JV / WOS, like dividend, royalty, technical know-how fees
                    etc., within 60 days of its falling due or as prescribed by
                    Reserve Bank from time to time.
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000'
                  }}
                  height={21}
                  align='center'
                  valign='bottom'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={2}
                  rowSpan={2}
                  height={42}
                  align='justify'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Signature of the authorized official of the IP approved by
                    the Board / RI
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={11}
                  rowSpan={2}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={11}
                  rowSpan={5}
                  align='center'
                  valign='top'
                >
                  <u>
                    <font face='Times New Roman' size={3} color='#000000'>
                      Stamp/Seal
                    </font>
                  </u>
                </td>
              </tr>
              <tr></tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={2}
                  rowSpan={2}
                  height={42}
                  align='justify'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Name &amp; Designation of the Authorized Official of the IP
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={11}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={11}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  height={42}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Place:
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  align='left'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={4}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Date:
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={7}
                  align='center'
                  valign='bottom'
                  sdnum='1033;0;M/D/YYYY'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={5}
                  height={21}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={19}
                  align='center'
                  valign='bottom'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={24}
                  rowSpan={2}
                  height={42}
                  align='center'
                  valign='top'
                  bgcolor='#BEBEBE'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      Certificate of the statutory auditor (only in case of
                      Indian Party) / self-certification in case Resident
                      individuals (strike out whichever is not applicable)
                    </font>
                  </b>
                </td>
              </tr>
              <tr></tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={24}
                  height={21}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    We hereby certify that:
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{ borderLeft: '1px solid #000000' }}
                  height={21}
                  align='center'
                  valign='bottom'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    i.
                  </font>
                </td>
                <td
                  style={{ borderRight: '1px solid #000000' }}
                  colSpan={23}
                  rowSpan={2}
                  align='justify'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    APR for the year ended ___________ is prepared on the basis
                    of audited / unaudited balance sheet of the JV/WOS for the
                    year ended ___________.
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{ borderLeft: '1px solid #000000' }}
                  height={21}
                  align='center'
                  valign='bottom'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{ borderLeft: '1px solid #000000' }}
                  height={21}
                  align='center'
                  valign='bottom'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    ii.
                  </font>
                </td>
                <td
                  style={{ borderRight: '1px solid #000000' }}
                  colSpan={23}
                  rowSpan={3}
                  align='justify'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    APR for the year ended ___________ is prepared on the basis
                    of unaudited balance sheet of the JV/WOS since audit is not
                    mandatory in host country and in compliance with Regulation
                    15 (iii) read with 15 (v) of FEMA Notification ibid and Para
                    6 of A.P. (DIR Series) Circular No. 29 dated September 12,
                    2012.
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{ borderLeft: '1px solid #000000' }}
                  height={21}
                  align='center'
                  valign='bottom'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{ borderLeft: '1px solid #000000' }}
                  height={21}
                  align='center'
                  valign='bottom'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{ borderLeft: '1px solid #000000' }}
                  height={21}
                  align='center'
                  valign='bottom'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    iii.
                  </font>
                </td>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={23}
                  rowSpan={4}
                  align='justify'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    The IP repatriated to India, all dues receivable from the
                    foreign entity, like dividend, royalty, technical know-how
                    fees etc., within 60 days of its falling due or as
                    prescribed by the Reserve Bank from time to time.
                    Repatriation from the JV/WOS has been verified from the
                    Foreign Inward Remittance Certificate issued by the AD
                    bank/s.
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{ borderLeft: '1px solid #000000' }}
                  height={21}
                  align='center'
                  valign='bottom'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{ borderLeft: '1px solid #000000' }}
                  height={21}
                  align='center'
                  valign='bottom'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000'
                  }}
                  height={21}
                  align='center'
                  valign='bottom'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={2}
                  rowSpan={2}
                  height={42}
                  align='justify'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Signature of the Statutory Auditors of the Indian Party
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={11}
                  rowSpan={2}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={11}
                  rowSpan={5}
                  align='center'
                  valign='top'
                >
                  <u>
                    <font face='Times New Roman' size={3} color='#000000'>
                      Stamp/Seal
                    </font>
                  </u>
                </td>
              </tr>
              <tr></tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000'
                  }}
                  colSpan={2}
                  rowSpan={2}
                  height={42}
                  align='justify'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    (Name of the firm and Registration number)
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={11}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={11}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  height={42}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Place:
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  align='left'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={4}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Date:
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={7}
                  align='center'
                  valign='bottom'
                  sdnum='1033;0;M/D/YYYY'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={24}
                  height={21}
                  align='center'
                  valign='top'
                  bgcolor='#BEBEBE'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      Certificate by the Authorized Dealer bank
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td style={{        
                    borderLeft: '1px solid #000000',
                    borderRight: 'none'}}
                    height={21} align='center' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    i.
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    // borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={23}
                  rowSpan={3}
                  align='justify'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    In terms of Para 3 of AP (Dir. Series) Circular No. 14 dated
                    September 5, 2008 the branch has received the share
                    certificate /s or any other document as evidence of
                    investment and are satisfied about the bonafide of the
                    documents so received.
                  </font>
                </td>
              </tr>
              <tr>
                <td style={{        
                    borderLeft: '1px solid #000000',
                    borderRight: 'none'}} height={21} align='center' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td style={{        
                    borderLeft: '1px solid #000000',
                    borderRight: 'none'}}height={21} align='center' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td style={{        
                    borderLeft: '1px solid #000000',
                    borderRight: 'none'}}height={21} align='center' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    ii.
                  </font>
                </td>
                <td
                  style={{
                    // borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={23}
                  rowSpan={2}
                  align='justify'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    The duly filled in Form ODI Part II (Annual Performance
                    Report) was submitted by the IP/ RI on_____________day
                    of____________(month)______________(year).
                  </font>
                </td>
              </tr>
              <tr>
                <td style={{        
                    borderLeft: '1px solid #000000',
                    borderRight: 'none'}} height={21} align='center' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td style={{        
                    borderLeft: '1px solid #000000',
                    borderRight: 'none'}} height={21} align='center' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    iii.
                  </font>
                </td>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    // borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={23}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    All the previous year APRs submitted by the IP / RI have
                    been reported in the online OID application.
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={2}
                  rowSpan={2}
                  height={42}
                  align='justify'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Signature of the Authorized Official of the AD bank
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={11}
                  rowSpan={2}
                  align='center'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={11}
                  rowSpan={5}
                  align='center'
                  valign='top'
                >
                  <u>
                    <font face='Times New Roman' size={3} color='#000000'>
                      Stamp/Seal
                    </font>
                  </u>
                </td>
              </tr>
              <tr></tr>
              <tr>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={2}
                  rowSpan={2}
                  height={42}
                  align='justify'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Name and designation of the AD bank official
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={11}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={11}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000'
                  }}
                  height={42}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Place:
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  align='center'
                  valign='top'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={4}
                  align='left'
                  valign='top'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    Date:
                  </font>
                </td>
                <td
                  style={{
                    borderTop: '1px solid #000000',
                    borderBottom: '1px solid #000000',
                    borderLeft: '1px solid #000000',
                    borderRight: '1px solid #000000'
                  }}
                  colSpan={7}
                  align='center'
                  valign='bottom'
                  sdnum='1033;0;M/D/YYYY'
                >
                  <b>
                    <font face='Times New Roman' size={3} color='#000000'>
                      <br />
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td height={21} align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td colSpan={24} height={21} align='center' valign='bottom'>
                  <b>
                    <u>
                      <font face='Times New Roman' size={3} color='#000000'>
                        Instruction for submission of Form ODI Part II:
                      </font>
                    </u>
                  </b>
                </td>
              </tr>
              <tr>
                <td colSpan={24} height={21} align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={24}
                  rowSpan={2}
                  height={42}
                  align='justify'
                  valign='bottom'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    a) APR is to be certified by statutory auditors of the IP
                    and submitted, through the designated AD bank every year by
                    December 31st as long as the JV / WOS is in existence.
                  </font>
                </td>
              </tr>
              <tr></tr>
              <tr>
                <td height={21} align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td colSpan={24} height={21} align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    b) The IP / RI shall ensure that all the previous year APR
                    has been be submitted to the designated AD bank.
                  </font>
                </td>
              </tr>
              <tr>
                <td colSpan={24} height={21} align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td colSpan={24} height={21} align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    c) Para I: Please mention the date in format DD/MM/YYYY.
                  </font>
                </td>
              </tr>
              <tr>
                <td height={21} align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td colSpan={24} height={21} align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    d) Please indicate the name of the foreign currency (FCY) as
                    per SWIFT code
                  </font>
                </td>
              </tr>
              <tr>
                <td colSpan={24} height={21} align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td colSpan={24} height={21} align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    e) Para II: Please indicate 13 digit UIN issued by RBI.
                  </font>
                </td>
              </tr>
              <tr>
                <td colSpan={24} height={21} align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={24}
                  rowSpan={2}
                  height={42}
                  align='justify'
                  valign='bottom'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    f) Para III: Capital structure should be in cumulative and
                    the % stake should be a total of all the IP / RIs in the JV/
                    WOS
                  </font>
                </td>
              </tr>
              <tr></tr>
              <tr>
                <td height={21} align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td colSpan={24} height={21} align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    g) Para IV (i) – the figure reported for loss should be
                    mentioned in brackets.
                  </font>
                </td>
              </tr>
              <tr>
                <td colSpan={24} height={21} align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={24}
                  rowSpan={2}
                  height={42}
                  align='justify'
                  valign='bottom'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    h) Para V: Figures under “since commencement of business”
                    should be equal to or more than the figure mentioned under
                    current year.
                  </font>
                </td>
              </tr>
              <tr></tr>
              <tr>
                <td height={21} align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
                <td align='justify' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={24}
                  rowSpan={2}
                  height={42}
                  align='justify'
                  valign='bottom'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    i) Para V (ii): Redemption of preference shares (not in the
                    nature of compulsorily convertible preference shares (CCPS))
                    should also be reported.
                  </font>
                </td>
              </tr>
              <tr></tr>
              <tr>
                <td colSpan={24} height={21} align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td colSpan={24} height={21} align='left' valign='botton'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    j) Para V (ix): Represents part of the profits of the JV/WOS
                    which is retained and reinvested in the JV/WOS.
                  </font>
                </td>
               
              </tr>
              <tr>
                <td colSpan={24} height={21} align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td colSpan={24} height={21} align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    k) Para VI (x) – Represents interest on loan or license fee
                    etc. l)
                  </font>
                </td>
              </tr>
              <tr>
                <td colSpan={24} height={21} align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    a. Operating company
                  </font>
                </td>
              </tr>
              <tr>
                <td colSpan={24} height={21} align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    b. Holding Company/ Special Purpose Vehicle c. Holding cum
                    Operating company
                  </font>
                </td>
              </tr>
              <tr>
                <td colSpan={24} height={21} align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                  c. Holding cum Operating company
                  </font>
                </td>
              </tr>
              <tr>
                <td colSpan={24} height={21} align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={24}
                  rowSpan={2}
                  height={42}
                  align='justify'
                  valign='bottom'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    m) Para VI (iv): Type of investment can be wholly owned step
                    down subsidiary (WO SDS) or Step Down Joint Venture (JV
                    SDS).
                  </font>
                </td>
              </tr>
              <tr></tr>
              <tr>
                <td colSpan={24} height={21} align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={24}
                  rowSpan={3}
                  height={62}
                  align='justify'
                  valign='bottom'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    n) Level of step down Subsidiary (SDS) should be calculated
                    treating the JV/ WOS as the parent. So an SDS under the
                    direct JV/ WOS should be treated as first level SDS.
                    Accordingly an SDS under the first level SDS would be
                    treated as second level SDS.
                  </font>
                </td>
              </tr>
              <tr></tr>
              <tr></tr>
              <tr>
                <td colSpan={24} height={21} align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={24}
                  rowSpan={3}
                  height={62}
                  align='justify'
                  valign='bottom'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    o) Retained earnings is to be calculated as per the
                    procedure laid down by the International Monetary Fund in
                    the latest version of their publication “Balance of Payments
                    and International Investment Position Manual”. It is to be
                    noted that the negative retained earnings is to be treated
                    as ‘0’ (zero).
                  </font>
                </td>
              </tr>
              <tr></tr>
              <tr></tr>
              <tr>
                <td colSpan={24} height={21} align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td colSpan={24} height={21} align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    p) The certificate by statutory auditor shall be required
                    only in case of IP and not in case of RIs.
                  </font>
                </td>
              </tr>
              <tr>
                <td colSpan={24} height={21} align='left' valign='bottom'>
                  <font face='Times New Roman' size={3} color='#000000'>
                    <br />
                  </font>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={24}
                  rowSpan={2}
                  height={42}
                  align='justify'
                  valign='bottom'
                >
                  <font face='Times New Roman' size={3} color='#000000'>
                    q) Each page of the Part II of Form ODI (APR) should be duly
                    signed and stamped with date, by the RI / authorized person
                    of the IP.
                  </font>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    )
  }
}

export default ModulePreview
