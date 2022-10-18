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
      "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Simply Fema - PART III  - ODI - Disinvestment</title></head><body>",

    excelHeader:
      '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/><title>Simply Fema - PART III ODI -  - Disinvestment</title></head>',

    commonFooter: '</body></html>',

    wordFile: 'FORM ODI - PART III - Disinvestment.doc',
    excelFile: 'FORM ODI - PART III - Disinvestment.xls',
    pdfFile: 'FORM ODI - PART III - Disinvestment.pdf'
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
         "<button style='top: 30px;left: 5px;position: fixed;'onclick='this.remove();html2pdf().set(opt).from(document.body).save() ;setTimeout(function(){ window.close(); }, 3000);'> Download </button>" +
        "<script> var opt = { enableLinks: true, margin : [ 1,0.5 ,1.95 , 0.5], filename: 'FORM - DISINVESTMENT - PART III.pdf', image: { type: 'jpeg', quality: 1 }, html2canvas: { scale: 1 }, jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' } }; var script = document.createElement('script'); script.type = 'application/javascript'; script.src = 'https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js'; document.head.appendChild(script); </script>"
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

    if (this.props.dataCaptured) {
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
        this.props.dataCaptured.disinvestmentRouteOptionPartialDisinvesment =
          '✓'
      } else {
        this.props.dataCaptured.disinvestmentRouteOptionPartialDisinvesment =
          'x'
      }

      if (
        this.props.dataCaptured.disinvestmentRouteOption === 'Approval Route'
      ) {
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
                  Form ODI– Part III
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
          <meta httpEquiv='CONTENT-TYPE' content='text/html; charset=utf-8' />
          <style
            type='text/css'
            dangerouslySetInnerHTML={{
              __html:
                '\n\t<!--\n\t\t@page { margin: 1in }\n\t\t table{ left: 0; right: 0; margin: 0 auto;}\n\t\t P { color:#000; margin-bottom: 0.08in; direction: ltr; widows: 2; orphans: 2 }\n\t-->\n\t'
            }}
          />
          <table
            width={700}
            cellPadding={7}
            cellSpacing={0}

            // style={{
            //   // pageBreakBefore: 'always'
            //   left: 0;
            //   right: 0;
            //   margin: 0 auto;
            // }}
          >
            <colgroup>
              <col width={39} /> <col width={17} /> <col width={14} />
              <col width={13} /> <col width={7} /> <col width={4} />
              <col width={114} /> <col width={33} /> <col width={33} />
              <col width={33} /> <col width={33} /> <col width={33} />
              <col width={51} />
            </colgroup>
            <tbody>
              <tr>
                <td
                  colSpan={13}
                  width={590}
                  height={6}
                  valign='TOP'
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p align='CENTER'>
                    <a name='_GoBack' />
                    <font face='Arial, serif'>
                      <b> Form ODI - PART III </b>
                    </font>
                  </p>
                </td>
              </tr>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={6}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p align='CENTER'>
                    <br />
                  </p>
                </td>
                <td
                  width={17}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={14}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={13}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={7}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={4}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={114}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={51}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td
                  colSpan={13}
                  width={590}
                  height={33}
                  valign='TOP'
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #000001'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={3}>
                        Reporting of Disinvestment by way of Sale or Transfer of
                        Shares / Closure / Voluntary Liquidation / Winding Up /
                        Merger / Amalgamation of JV / WOS
                      </font>
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td
                  colSpan={13}
                  width={590}
                  height={3}
                  valign='TOP'
                  bgcolor='#ffffff'
                  style={{
                    border: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        Note: All amounts should be in a single foreign currency
                        and in actuals.
                      </font>
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td
                  colSpan={13}
                  width={590}
                  height={3}
                  valign='TOP'
                  bgcolor='#ffffff'
                  style={{
                    border: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        Unique Identification Number allotted by the Reserve
                        Bank
                      </font>
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={40}
                  height={3}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
                <td
                  width={30}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
                <td
                  width={30}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
                <td
                  width={30}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
                <td
                  width={30}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
                <td
                  width={30}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
                <td
                  width={30}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
                <td
                  width={30}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
                <td
                  width={30}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
                <td
                  width={30}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
                <td
                  width={30}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
                <td
                    width={30}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
                <td
                  width={30}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={20}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> S.No. </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={6}
                  width={238}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #000001',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        Name, AD Code and Address of the AD bank:
                      </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={6}
                  width={284}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font color='#000000'>
                      {this.props.dataCaptured.nameADBank} {','}
                      {this.props.dataCaptured.addressADBank}
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={23}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> I </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={7}
                  width={285}
                  bgcolor='#d9d9d9'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        Date of submission of and period to which last APR
                        relates
                      </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={5}
                  width={238}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #000001',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font color='#000000'>
                      {this.props.dataCaptured.submissionDate}
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={6}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> II </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={4}
                  width={93}
                  bgcolor='#d9d9d9'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Disinvestment route(tick) </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={178}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Approval Route </font>
                    </font>
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'>
                      {
                        this.props.dataCaptured
                          .disinvestmentRouteOptionApprovalRoute
                      }
                    </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={126}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Automatic Route </font>
                    </font>
                  </p>
                </td>
                <td
                  width={51}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'>
                      {
                        this.props.dataCaptured
                          .disinvestmentRouteOptionAutomaticRoute
                      }
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={9}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> III </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={4}
                  width={93}
                  bgcolor='#d9d9d9'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Disinvestment Type(tick) </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={178}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Full disinvestment </font>
                    </font>
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'>
                      {
                        this.props.dataCaptured
                          .disinvestmentRouteOptionFullDisinvesment
                      }
                    </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={126}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Partial Disinvestment </font>
                    </font>
                  </p>
                </td>
                <td
                  width={51}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'>
                      {
                        this.props.dataCaptured
                          .disinvestmentRouteOptionPartialDisinvesment
                      }
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={11}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> IV </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={4}
                  width={93}
                  bgcolor='#d9d9d9'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Date of Disinvestment </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={8}
                  width={430}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p align='CENTER'>
                    {this.props.dataCaptured.disInvestmentDate}
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={22}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> V </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={4}
                  width={93}
                  bgcolor='#d9d9d9'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        PAN No and name of the disinvesting IP / RI
                      </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={8}
                  width={430}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p align='CENTER'>
                    {this.props.dataCaptured.disinvestingPANNumber}
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={48}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> VI </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={4}
                  width={93}
                  bgcolor='#d9d9d9'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        % Stake held at the time of disinvestment
                      </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={178}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'>
                      {this.props.dataCaptured.disInvestmentStakeValue}
                    </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={126}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'>
                      <font face='Arial, serif'>
                        <font size={2}>
                          % stake disinvested in case ofpartial disinvestment
                        </font>
                      </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={2}
                  width={98}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={22}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> VII </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={4}
                  width={93}
                  bgcolor='#d9d9d9'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Method of disinvestment </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={7}
                  width={365}
                  bgcolor='#d9d9d9'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        Details to be furnished as Annex to the Form ODI Part
                        III
                      </font>
                    </font>
                  </p>
                </td>
                <td
                  width={51}
                  bgcolor='#d9d9d9'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Tick </font>
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={72}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> i. </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={4}
                  width={93}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        Sale or transfer of shares to another IP / Individual,
                        Merger / Liquidation of IP
                      </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={7}
                  width={365}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        Furnish the details of the entity buying the stake and
                        also whether the entity purchasing the stake is an
                        existing foreign partner / Indian Partner in the JV /
                        WOS or a foreign party / IP buying stake in the
                        concerned JV / WOS for the first time.
                      </font>
                    </font>
                  </p>
                </td>
                <td
                  width={51}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={26}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> ii. </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={4}
                  width={93}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        Closure / Voluntary Liquidation of the JV / WOS
                      </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={7}
                  width={365}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Details of the JV / WOS </font>
                    </font>
                  </p>
                </td>
                <td
                  width={51}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={12}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> iii. </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={4}
                  width={93}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Buy back by the JV / WOS </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={7}
                  width={365}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Details of the JV / WOS </font>
                    </font>
                  </p>
                </td>
                <td
                  width={51}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={78}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> iv. </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={4}
                  width={93}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        Merger of two or more JV / WOS of the same IP or
                        different IP
                      </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={7}
                  width={365}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        Furnish details of merging JV / WOS and the surviving JV
                        / WOS such as Name, UIN of the JV / WOS and the name of
                        the IP concerned of both the JV / WOS. <br /> Also
                        furnish details of SDS of those JV / WOS which shall
                        merge.
                      </font>
                    </font>
                  </p>
                </td>
                <td
                  width={51}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={60}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> v. </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={4}
                  width={93}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        Merger of the JV / WOS with the Step down subsidiaries
                        of the same IP or another IP
                      </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={7}
                  width={365}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        Furnish UIN of the merging JV / WOS, the name of the IP
                        holding indirect stake in SDS, name of the SDS, <br />
                        Level of SDS, name and country of immediate parent of
                        SDS
                      </font>
                    </font>
                  </p>
                </td>
                <td
                  width={51}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={62}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> vi. </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={4}
                  width={93}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        Merger of JV / WOS with an Independent Foreign Company
                        not having any relation with the IP / RI
                      </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={7}
                  width={365}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        Furnish the detail of the foreign company such as name
                        and address
                      </font>
                    </font>
                  </p>
                </td>
                <td
                  width={51}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p> null </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={3}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> VIII </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={12}
                  width={537}
                  bgcolor='#d9d9d9'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        Summary of the Overseas Direct Investment(Cumulative
                        amount)
                      </font>
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={3}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> i. </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={71}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Equity </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={153}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Loan </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={126}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Guarantees Issued </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={145}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Guarantee Invoked </font>
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={3}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'> null </p>
                </td>
                <td
                  colSpan={3}
                  width={71}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p> null </p>
                </td>
                <td
                  colSpan={3}
                  width={153}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p> null </p>
                </td>
                <td
                  colSpan={3}
                  width={126}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p> null </p>
                </td>
                <td
                  colSpan={3}
                  width={145}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p> null </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={3}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> IX </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={12}
                  width={537}
                  bgcolor='#d9d9d9'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        Date wise details of remittances / transaction(attach
                        separate sheet if necessary)
                      </font>
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={3}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> i. </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={71}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Date of Remittance / Transaction </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={153}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Method of Investment </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={126}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Category of Investment </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={145}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Amount </font>
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={3}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font color='#000000'> null </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={71}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={153}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={126}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={145}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={3}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font color='#000000'> null </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={71}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={153}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={126}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={145}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={3}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font color='#000000'> null </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={71}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={153}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={126}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={145}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={24}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> X </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={7}
                  width={285}
                  bgcolor='#d9d9d9'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        Fair Value of the total disinvestment as per the
                        valuation report
                      </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={5}
                  width={238}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #000001',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font color='#000000'> null </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={10}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> XI </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={12}
                  width={537}
                  bgcolor='#d9d9d9'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        Whether there is write off ? If yes please provide the
                        amount of write off
                      </font>
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={3}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> i. </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={5}
                  width={110}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Equity </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={207}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Loan </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={4}
                  width={191}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Others(please specify) </font>
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={3}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'> null </p>
                </td>
                <td
                  colSpan={5}
                  width={110}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p> null </p>
                </td>
                <td
                  colSpan={3}
                  width={207}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p> null </p>
                </td>
                <td
                  colSpan={4}
                  width={191}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={17}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> XII </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={12}
                  width={537}
                  bgcolor='#d9d9d9'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        Amount Repatriated on disinvestment(attach separate
                        sheet if necessary)
                      </font>
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={3}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> i. </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={71}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Date of Repatriation </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={153}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Equity </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={126}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Loan </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={145}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Others </font>
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={3}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'> null </p>
                </td>
                <td
                  colSpan={3}
                  width={71}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p> null </p>
                </td>
                <td
                  colSpan={3}
                  width={153}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p> null </p>
                </td>
                <td
                  colSpan={3}
                  width={126}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p> null </p>
                </td>
                <td
                  colSpan={3}
                  width={145}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p> null </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={3}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'> null </p>
                </td>
                <td
                  colSpan={3}
                  width={71}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p> null </p>
                </td>
                <td
                  colSpan={3}
                  width={153}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p> null </p>
                </td>
                <td
                  colSpan={3}
                  width={126}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p> null </p>
                </td>
                <td
                  colSpan={3}
                  width={145}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p> null </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={3}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font color='#000000'> null </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={71}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={153}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={126}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={145}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={3}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> XIII </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={12}
                  width={537}
                  bgcolor='#d9d9d9'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        Amount repatriated since reporting of the last APR
                        except the disinvestment proceeds
                      </font>
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={3}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> I </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={3}
                  width={71}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Equity </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={4}
                  width={200}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Loan </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={5}
                  width={238}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Others(Please Specify) </font>
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={3}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'> null </p>
                </td>
                <td
                  colSpan={3}
                  width={71}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p> null </p>
                </td>
                <td
                  colSpan={4}
                  width={200}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p> null </p>
                </td>
                <td
                  colSpan={5}
                  width={238}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p> null </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={3}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p align='CENTER'>
                    <br />
                  </p>
                </td>
                <td
                  width={17}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={14}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={13}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={7}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={4}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={114}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={51}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td
                  colSpan={13}
                  width={590}
                  height={3}
                  valign='TOP'
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: 'none',
                    borderLeft: '1px solid #00000a',
                    borderRight: '1px solid #000001'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        It is certified that(Strike out whichever is not
                        applicable)
                      </font>
                    </font>
                  </p>
                </td>
              </tr>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={3}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: 'none',
                    borderLeft: '1px solid #00000a',
                    borderRight: 'none',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0.08in',
                    paddingRight: '0in'
                  }}
                >
                  <p align='CENTER'>
                    <font color='#000000'> null </font>
                  </p>
                </td>
                <td
                  width={17}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={14}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={13}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={7}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={4}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={114}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={51}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: 'none',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font color='#000000'> null </font>
                  </p>
                </td>
              </tr>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={71}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: 'none',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0.08in',
                    paddingRight: '0in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> (a) </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={12}
                  width={537}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #000001',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        the sale is effected through a stock exchange where the
                        shares of the overseas JV / WOS are listed;
                      </font>
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={71}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: 'none',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0.08in',
                    paddingRight: '0in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> (b) </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={12}
                  width={537}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #000001',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        if the shares are not listed on the stock exchange, and
                        the shares are disinvested by a private arrangement, the
                        share price is not less than the value certified by a
                        Chartered Accountant / Certified Public Accountant as
                        the fair value of the shares based on the latest audited
                        financial statements of the JV / WOS;
                      </font>
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={71}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: 'none',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0.08in',
                    paddingRight: '0in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> (c) </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={12}
                  width={537}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #000001',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        The IP / RI does not have any outstanding dues by way of
                        dividend, technical know - how fees, <br /> royalty,
                        consultancy, commission or other entitlements, and / or
                        export proceeds from the JV / WOS;
                      </font>
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={71}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: 'none',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0.08in',
                    paddingRight: '0in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> (d) </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={12}
                  width={537}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #000001',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        The overseas concern has been in operation for at least
                        one full year and the share certificate / s or any other
                        document as an evidence of investment and APR for all
                        the years has been submitted to the designated AD bank /
                        Reserve Bank;
                      </font>
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={71}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: 'none',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0.08in',
                    paddingRight: '0in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> (e) </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={12}
                  width={537}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #000001',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        The Indian Party is not under investigation by CBI / ED
                        / SEBI / IRDA or any other regulatory authority in
                        India.
                      </font>
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={71}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: 'none',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0.08in',
                    paddingRight: '0in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> (f) </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={12}
                  width={537}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #000001',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        All the remittances / transactions have been reported to
                        Reserve Bank and it reconciles with the remittances /
                        transaction details reported to the Reserve Bank.
                      </font>
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={71}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: 'none',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0.08in',
                    paddingRight: '0in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> (g) </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={12}
                  width={537}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #000001',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        All the guarantees issued on behalf of the JV / WOS and
                        its SDS are either novated to another entity or the
                        guarantee is closed.
                      </font>
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={71}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: 'none',
                    borderBottom: '1px solid #00000a',
                    borderLeft: '1px solid #00000a',
                    borderRight: 'none',
                    paddingTop: '0.5in',
                    paddingBottom: '0in',
                    paddingLeft: '0.08in',
                    paddingRight: '0in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}> (h) </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={12}
                  width={537}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #000001',
                    paddingTop: '0.5in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        In case the SDS has become the direct JV / WOS as result
                        of disinvestment of the JV / WOS then it is certified
                        that Form ODI Part I with respect to all such SDS is
                        submitted to Reserve Bank for allotment of UIN.
                      </font>
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={3}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p align='CENTER'>
                    <br />
                  </p>
                </td>
                <td
                  width={17}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={14}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={13}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={7}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={4}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={114}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={51}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  colSpan={7}
                  width={291}
                  height={3}
                  bgcolor='#ffffff'
                  style={{
                    border: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Place: </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={6}
                  width={284}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Place: </font>
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  colSpan={7}
                  width={291}
                  height={3}
                  bgcolor='#ffffff'
                  style={{
                    border: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Date: </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={6}
                  width={284}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Date: </font>
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  colSpan={7}
                  width={291}
                  height={28}
                  bgcolor='#ffffff'
                  style={{
                    border: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font color='#000000'> null </font>
                  </p>
                </td>
                <td
                  colSpan={6}
                  width={284}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font color='#000000'> null </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  colSpan={7}
                  width={291}
                  height={26}
                  bgcolor='#ffffff'
                  style={{
                    border: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font color='#000000'>
                      <font face='Arial, serif'>
                        <font size={2}>
                          (Signature and seal of authorised official of the IP /
                          RI)
                        </font>
                      </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={6}
                  width={284}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font color='#000000'>
                      <font face='Arial, serif'>
                        <font size={2}>
                          (Signature and seal of authorised official of the
                          Bank)
                        </font>
                      </font>
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  colSpan={2}
                  width={70}
                  height={3}
                  bgcolor='#ffffff'
                  style={{
                    border: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Name: </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={5}
                  width={207}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font color='#000000'>
                      {this.props.dataCaptured.signatoryName}
                    </font>
                  </p>
                </td>
                <td
                  colSpan={2}
                  width={79}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Name: </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={4}
                  width={191}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font color='#000000'>
                      {this.props.dataCaptured.signatoryName}
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  colSpan={2}
                  width={70}
                  height={3}
                  bgcolor='#ffffff'
                  style={{
                    border: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Designation: </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={5}
                  width={207}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font color='#000000'>
                      {this.props.dataCaptured.signatoryDesignation}
                    </font>
                  </p>
                </td>
                <td
                  colSpan={2}
                  width={79}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Designation: </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={4}
                  width={191}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font color='#000000'>
                      {this.props.dataCaptured.signatoryDesignation}
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  colSpan={2}
                  width={70}
                  height={3}
                  bgcolor='#ffffff'
                  style={{
                    border: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Tel.No.: </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={5}
                  width={207}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font color='#000000'>
                      {this.props.dataCaptured.signatoryTelNo}
                    </font>
                  </p>
                </td>
                <td
                  colSpan={2}
                  width={79}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> Tel.No.: </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={4}
                  width={191}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font color='#000000'>
                      {this.props.dataCaptured.signatoryTelNo}
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  colSpan={2}
                  width={70}
                  height={3}
                  bgcolor='#ffffff'
                  style={{
                    border: '1px solid #00000a'
                    // padding: '0in 0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> FAX No. </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={5}
                  width={207}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font color='#000000'>
                      {this.props.dataCaptured.signatoryFaxNo}
                    </font>
                  </p>
                </td>
                <td
                  colSpan={2}
                  width={79}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}> FAX No. </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={4}
                  width={191}
                  bgcolor='#ffffff'
                  style={{
                    borderTop: '1px solid #00000a',
                    borderBottom: '1px solid #00000a',
                    borderLeft: 'none',
                    borderRight: '1px solid #00000a',
                    paddingTop: '0in',
                    paddingBottom: '0in',
                    paddingLeft: '0in',
                    paddingRight: '0.08in'
                  }}
                >
                  <p align='CENTER'>
                    <font color='#000000'>
                      {this.props.dataCaptured.signatoryFaxNo}
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={3}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p align='CENTER'>
                    <br />
                  </p>
                </td>
                <td
                  width={17}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={14}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={13}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={7}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={4}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={114}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={51}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={13}
                  width={590}
                  height={3}
                  valign='TOP'
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        Instructions to submit the ODI Part III:
                      </font>
                    </font>
                  </p>
                </td>
              </tr>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={3}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p align='CENTER'>
                    <br />
                  </p>
                </td>
                <td
                  width={17}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={14}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={13}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={7}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={4}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={114}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={33}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
                <td
                  width={51}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <br />
                  </p>
                </td>
              </tr>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={123}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}>
                        <i> (a) </i>
                      </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={12}
                  width={537}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        <i>
                          A new system has been introduced for reporting of the
                          disinvestment / closure / winding up / voluntary
                          liquidation of the overseas JV / WOS under the general
                          permission(Part III of Form ODI).In case the
                          disinvestment / closure / winding up / voluntary
                          liquidation is under the Automatic Route, in terms of
                          Regulation 16 of Notification No FEMA 120 / RB - 2004
                          dated July 7, 2004 as amended from time to time read
                          with the A.P.(Dir Series) Circular No .29 dated March
                          27, 2006 and the A.P.(Dir Series) Circular No .73
                          dated June 29, 2011, a report should be submitted in
                          the online OID application within 30 days of the
                          disinvestment by the designated AD bank, in Part III
                          of Form ODI.
                        </i>
                      </font>
                    </font>
                  </p>
                </td>
              </tr>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={27}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}>
                        <i> (b) </i>
                      </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={12}
                  width={537}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        <i>
                          Form ODI Part III is to be submitted by the IP / RI to
                          the designated AD bank which in turn shall be reported
                          the same in the online OID application through their
                          nodal office.
                        </i>
                      </font>
                    </font>
                  </p>
                </td>
              </tr>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={74}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}>
                        <i> (c) </i>
                      </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={12}
                  width={537}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        <i>
                          In all other cases of disinvestment, as per the
                          current procedure, an application along with the
                          necessary supporting documents should be submitted to
                          the Reserve Bank for prior approval.In case the
                          proposal is approved, the AD bank should submit the
                          report on disinvestment in Form ODI Part III in
                          physical copy to the Reserve Bank so that the UIN can
                          be cancelled / closed.
                        </i>
                      </font>
                    </font>
                  </p>
                </td>
              </tr>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={6}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}>
                        <i> (d) </i>
                      </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={12}
                  width={537}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        <i>
                          All amounts should be in actuals and in a single
                          foreign currency.
                        </i>
                      </font>
                    </font>
                  </p>
                </td>
              </tr>
              <tr valign='TOP'>
                <td
                  width={39}
                  height={6}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p align='CENTER'>
                    <font face='Arial, serif'>
                      <font size={2}>
                        <i> (e) </i>
                      </font>
                    </font>
                  </p>
                </td>
                <td
                  colSpan={12}
                  width={537}
                  bgcolor='#ffffff'
                  style={{
                    border: 'none',
                    padding: '0in'
                  }}
                >
                  <p>
                    <font face='Arial, serif'>
                      <font size={2}>
                        <i>All dates should be in the format DD / MM / YYYY.</i>
                      </font>
                    </font>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p
            style={{
              marginBottom: '0.14in'
            }}
          >
            <br /> <br />
          </p>
        </div>
      </React.Fragment>
    )
  }
}

export default ModulePreview
