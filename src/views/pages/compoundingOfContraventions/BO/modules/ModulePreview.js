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
  
import htmlToPdfmake from "html-to-pdfmake";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

class ModulePreview extends React.Component {
  constructor (props) {
    super(props)
    
  }

  state = {
    isChecked: false,

    wordHeader:
      "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Simply Fema - PART I  - ODI</title></head><body>",

    excelHeader:
      '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/><title>Simply Fema - PART I ODI - </title></head>',

    commonFooter: '</body></html>',

  //   wordFile: 'RBI Covering Letter.doc',
  //   excelFile:'RBI Covering Letter.xls',

  //   wordFile2: 'Form of Compounding.doc',
  //   excelFile2:'Form of Compounding.xls',
    
  //   wordFile3: 'Submissions.doc',
  //   excelFile3:'Submissions.xls',
  
  //   wordFile4: 'ECB Annexure.doc',
  //   excelFile4:'ECB Annexure.xls',
  
  //   wordFile5: 'FDI Annexure.doc',
  //   excelFile5:'FDI Annexure.xls',
  
  //   wordFile6: 'LO/BO/PO Annexure.doc',
  //   excelFile6:'LO/BO/PO Annexure.xls',
  
  //   wordFile7  : 'ODI Annexure.doc',
  //  excelFile7  : 'ODI Annexure.xls',
  
  //   wordFile8  : 'Undertaking.doc',
  //  excelFile8  : 'Undertaking.xls',
  
  //   wordFile9  : 'Letter of Authority.doc',
  //  excelFile9  : 'Letter of Authority.xls',
  
  //   wordFile10  : 'ECS Mandate Letter.doc',
  //  excelFile10  : 'ECS Mandate Letter.xls',
  
  }


  saveWordDocument = (id, fname) => () => {
    var input = document.getElementById(id.id)
    const docfname = fname.fname+".doc"
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
debugger;
    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(wordBlob, docfname)
    } else {
      downloadLink.href = wordFileURL
      downloadLink.download = docfname 
      downloadLink.click()
    }
    document.body.removeChild(downloadLink)
  }

  printDocument = id => () => {
    var printContent = document.getElementById(id.id)
    var windowObject = window.open(
      '',
      '',
      'left=0,top=0,width=800,height=800,toolbar,scrollbars,status'
    )
    windowObject.document.write(printContent.innerHTML )
    windowObject.document.close()
    windowObject.focus()
    windowObject.print()
    windowObject.close()
  }

  saveExcelDocument = (id, fname) => () => {
    var input = document.getElementById(id.id)
    const excelfname = fname.fname+".xls"
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
      navigator.msSaveOrOpenBlob(excelBlob, excelfname)
    } else {
      downloadLink.href = excelFileURL
      downloadLink.download = excelfname
      downloadLink.click()
    }
    document.body.removeChild(downloadLink)
  }


  savePDFDocument = (id,fname) => () => {
    //const id = "rbi"
    
    //const pdfFilee = "RBI Covering Letter.pdf"
    const pdfFilee = fname.fname+".pdf"
    
    var pdfContent = document.getElementById(id.id);
    const body = JSON.stringify({ content: pdfContent.innerHTML, pdfFile: pdfFilee });

    var pdfPreview = window.open(
      '',
      '',
      'left=0,top=0,width=800,height=800,toolbar,scrollbars,status'
    )

    pdfPreview.document.write(
      pdfContent.innerHTML +
      `<button style='top: 10px;left: 5px;position: fixed;'onclick="display()"> Download </button>` +
      `<script> 
        var script = document.createElement('script'); script.type = 'application/javascript'; 
        function display() {
           fetch('http://13.235.25.202:6001/download/pdf', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: ` +  JSON.stringify(body) +
          `}).then(response => {
            response.blob().then(blob => {
              console.log(blob)
              let url = window.URL.createObjectURL(blob);
            var link = document.createElement('a');
            link.href = url;
            link.download = '${fname.fname}.pdf';
            document.body.appendChild(link); // we need to append the element to the dom -> otherwise it will not work in firefox
            link.click();
            link.remove();
            });
        })
      }
        script.src = 'https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js'; document.head.appendChild(script); </script>`
    )

  }

    // savePDFDocument2 = () => {
    //   const id = "formOfCompounding"
    //   const pdfFilee = "Form Of Compounding.pdf"
    //   var pdfContent = document.getElementById(id);
    //   const body = JSON.stringify({ content: pdfContent.innerHTML, pdfFile: pdfFilee });
  
    //   var pdfPreview = window.open(
    //     '',
    //     '',
    //     'left=0,top=0,width=800,height=800,toolbar,scrollbars,status'
    //   )
  
    //   pdfPreview.document.write(
    //     pdfContent.innerHTML +
    //     `<button style='top: 30px;left: 5px;position: fixed;'onclick="display()"> Download </button>` +
    //     `<script> 
    //       var script = document.createElement('script'); script.type = 'application/javascript'; 
    //       function display() {
    //          fetch('http://13.235.25.202:6001/download/pdf', {
    //           method: 'POST',
    //           headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //           },
    //           body: ` +  JSON.stringify(body) +
    //         `}).then(response => {
    //           response.blob().then(blob => {
    //             console.log(blob)
    //             let url = window.URL.createObjectURL(blob);
    //           var link = document.createElement('a');
    //           link.href = url;
    //           link.download = 'Form Of Compounding.pdf';
    //           document.body.appendChild(link); // we need to append the element to the dom -> otherwise it will not work in firefox
    //           link.click();
    //           link.remove();
    //           });
    //       })
    //     }
    //       script.src = 'https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js'; document.head.appendChild(script); </script>`
    //   )
  
    // }


//   saveWordDocument2 = () => {
//     var input = document.getElementById("formOfCompounding")
//     let wordHTML =
//       this.state.wordHeader + input.innerHTML + this.state.commonFooter
//     let wordFileURL =
//       'data:application/vnd.ms-word;charset=utf-8,' +
//       encodeURIComponent(wordHTML)
//     var downloadLink = document.createElement('a')
//     document.body.appendChild(downloadLink)
//     let wordBlob = new Blob(['\ufeff', wordHTML], {
//       type: 'application/msword'
//     })
// debugger;
//     if (navigator.msSaveOrOpenBlob) {
//       navigator.msSaveOrOpenBlob(wordBlob, this.state.wordFile2)
//     } else {
//       downloadLink.href = wordFileURL
//       downloadLink.download = this.state.wordFile2
//       downloadLink.click()
//     }
//     document.body.removeChild(downloadLink)
//   }

  // printDocument2 = () => {
  //   var printContent = document.getElementById('formOfCompounding')
  //   var windowObject = window.open(
  //     '',
  //     '',
  //     'left=0,top=0,width=800,height=800,toolbar,scrollbars,status'
  //   )
  //   windowObject.document.write(printContent.innerHTML)
  //   windowObject.document.close()
  //   windowObject.focus()
  //   windowObject.print()
  //   windowObject.close()
  // }

  // saveExcelDocument2 = () => {
  //   var input = document.getElementById('formOfCompounding')
  //   var excelHTML =
  //     this.state.excelHeader + input.innerHTML + this.state.commonFooter

  //   let excelBlob = new Blob(['\ufeff', excelHTML], {
  //     type: 'application/msexcel'
  //   })

  //   let excelFileURL =
  //     'data:application/vnd.ms-excel;charset=utf-8,' +
  //     encodeURIComponent(excelHTML)

  //   var downloadLink = document.createElement('a')
  //   document.body.appendChild(downloadLink)

  //   if (navigator.msSaveOrOpenBlob) {
  //     navigator.msSaveOrOpenBlob(excelBlob, this.state.excelFile2)
  //   } else {
  //     downloadLink.href = excelFileURL
  //     downloadLink.download = this.state.excelFile2
  //     downloadLink.click()
  //   }
  //   document.body.removeChild(downloadLink)
  // }
  


//   saveWordDocument3 = () => {
//     var input = document.getElementById("submissions")
//     let wordHTML =
//       this.state.wordHeader + input.innerHTML + this.state.commonFooter
//     let wordFileURL =
//       'data:application/vnd.ms-word;charset=utf-8,' +
//       encodeURIComponent(wordHTML)
//     var downloadLink = document.createElement('a')
//     document.body.appendChild(downloadLink)
//     let wordBlob = new Blob(['\ufeff', wordHTML], {
//       type: 'application/msword'
//     })
// debugger;
//     if (navigator.msSaveOrOpenBlob) {
//       navigator.msSaveOrOpenBlob(wordBlob, this.state.wordFile3)
//     } else {
//       downloadLink.href = wordFileURL
//       downloadLink.download = this.state.wordFile3
//       downloadLink.click()
//     }
//     document.body.removeChild(downloadLink)
//   }

  // printDocument3 = () => {
  //   var printContent = document.getElementById('submissions')
  //   var windowObject = window.open(
  //     '',
  //     '',
  //     'left=0,top=0,width=800,height=800,toolbar,scrollbars,status'
  //   )
  //   windowObject.document.write(printContent.innerHTML)
  //   windowObject.document.close()
  //   windowObject.focus()
  //   windowObject.print()
  //   windowObject.close()
  // }

  // saveExcelDocument3 = () => {
  //   var input = document.getElementById('submissions')
  //   var excelHTML =
  //     this.state.excelHeader + input.innerHTML + this.state.commonFooter

  //   let excelBlob = new Blob(['\ufeff', excelHTML], {
  //     type: 'application/msexcel'
  //   })

  //   let excelFileURL =
  //     'data:application/vnd.ms-excel;charset=utf-8,' +
  //     encodeURIComponent(excelHTML)

  //   var downloadLink = document.createElement('a')
  //   document.body.appendChild(downloadLink)

  //   if (navigator.msSaveOrOpenBlob) {
  //     navigator.msSaveOrOpenBlob(excelBlob, this.state.excelFile3)
  //   } else {
  //     downloadLink.href = excelFileURL
  //     downloadLink.download = this.state.excelFile3
  //     downloadLink.click()
  //   }
  //   document.body.removeChild(downloadLink)
  // }
  
  // savePDFDocument3 = () => {
  //   const id = "submissions"
  //   const pdfFilee = "Submissions.pdf"
  //   var pdfContent = document.getElementById(id);
  //   const body = JSON.stringify({ content: pdfContent.innerHTML, pdfFile: pdfFilee });

  //   var pdfPreview = window.open(
  //     '',
  //     '',
  //     'left=0,top=0,width=800,height=800,toolbar,scrollbars,status'
  //   )

  //   pdfPreview.document.write(
  //     pdfContent.innerHTML +
  //     `<button style='top: 30px;left: 5px;position: fixed;'onclick="display()"> Download </button>` +
  //     `<script> 
  //       var script = document.createElement('script'); script.type = 'application/javascript'; 
  //       function display() {
  //          fetch('http://13.235.25.202:6001/download/pdf', {
  //           method: 'POST',
  //           headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json'
  //           },
  //           body: ` +  JSON.stringify(body) +
  //         `}).then(response => {
  //           response.blob().then(blob => {
  //             console.log(blob)
  //             let url = window.URL.createObjectURL(blob);
  //           var link = document.createElement('a');
  //           link.href = url;
  //           link.download = 'Submissions.pdf';
  //           document.body.appendChild(link); // we need to append the element to the dom -> otherwise it will not work in firefox
  //           link.click();
  //           link.remove();
  //           });
  //       })
  //     }
  //       script.src = 'https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js'; document.head.appendChild(script); </script>`
  //   )

  // }


//   saveWordDocument4 = () => {
//     var input = document.getElementById("ecbA")
//     let wordHTML =
//       this.state.wordHeader + input.innerHTML + this.state.commonFooter
//     let wordFileURL =
//       'data:application/vnd.ms-word;charset=utf-8,' +
//       encodeURIComponent(wordHTML)
//     var downloadLink = document.createElement('a')
//     document.body.appendChild(downloadLink)
//     let wordBlob = new Blob(['\ufeff', wordHTML], {
//       type: 'application/msword'
//     })
// debugger;
//     if (navigator.msSaveOrOpenBlob) {
//       navigator.msSaveOrOpenBlob(wordBlob, this.state.wordFile4)
//     } else {
//       downloadLink.href = wordFileURL
//       downloadLink.download = this.state.wordFile4
//       downloadLink.click()
//     }
//     document.body.removeChild(downloadLink)
//   }

  // printDocument4 = () => {
  //   var printContent = document.getElementById('ecbA')
  //   var windowObject = window.open(
  //     '',
  //     '',
  //     'left=0,top=0,width=800,height=800,toolbar,scrollbars,status'
  //   )
  //   windowObject.document.write(printContent.innerHTML)
  //   windowObject.document.close()
  //   windowObject.focus()
  //   windowObject.print()
  //   windowObject.close()
  // }

  // saveExcelDocument4 = () => {
  //   var input = document.getElementById('ecbA')
  //   var excelHTML =
  //     this.state.excelHeader + input.innerHTML + this.state.commonFooter

  //   let excelBlob = new Blob(['\ufeff', excelHTML], {
  //     type: 'application/msexcel'
  //   })

  //   let excelFileURL =
  //     'data:application/vnd.ms-excel;charset=utf-8,' +
  //     encodeURIComponent(excelHTML)

  //   var downloadLink = document.createElement('a')
  //   document.body.appendChild(downloadLink)

  //   if (navigator.msSaveOrOpenBlob) {
  //     navigator.msSaveOrOpenBlob(excelBlob, this.state.excelFile4)
  //   } else {
  //     downloadLink.href = excelFileURL
  //     downloadLink.download = this.state.excelFile4
  //     downloadLink.click()
  //   }
  //   document.body.removeChild(downloadLink)
  // }
  

  
  // savePDFDocument4 = () => {
  //   const id = "ecbA"
  //   const pdfFilee = "ECB Annexure.pdf"
  //   var pdfContent = document.getElementById(id);
  //   const body = JSON.stringify({ content: pdfContent.innerHTML, pdfFile: pdfFilee });

  //   var pdfPreview = window.open(
  //     '',
  //     '',
  //     'left=0,top=0,width=800,height=800,toolbar,scrollbars,status'
  //   )

  //   pdfPreview.document.write(
  //     pdfContent.innerHTML +
  //     `<button style='top: 30px;left: 5px;position: fixed;'onclick="display()"> Download </button>` +
  //     `<script> 
  //       var script = document.createElement('script'); script.type = 'application/javascript'; 
  //       function display() {
  //          fetch('http://13.235.25.202:6001/download/pdf', {
  //           method: 'POST',
  //           headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json'
  //           },
  //           body: ` +  JSON.stringify(body) +
  //         `}).then(response => {
  //           response.blob().then(blob => {
  //             console.log(blob)
  //             let url = window.URL.createObjectURL(blob);
  //           var link = document.createElement('a');
  //           link.href = url;
  //           link.download = 'ECB Annexure.pdf';
  //           document.body.appendChild(link); // we need to append the element to the dom -> otherwise it will not work in firefox
  //           link.click();
  //           link.remove();
  //           });
  //       })
  //     }
  //       script.src = 'https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js'; document.head.appendChild(script); </script>`
  //   )

  // }

//   saveWordDocument5 = () => {
//     var input = document.getElementById("fdiA")
//     let wordHTML =
//       this.state.wordHeader + input.innerHTML + this.state.commonFooter
//     let wordFileURL =
//       'data:application/vnd.ms-word;charset=utf-8,' +
//       encodeURIComponent(wordHTML)
//     var downloadLink = document.createElement('a')
//     document.body.appendChild(downloadLink)
//     let wordBlob = new Blob(['\ufeff', wordHTML], {
//       type: 'application/msword'
//     })
// debugger;
//     if (navigator.msSaveOrOpenBlob) {
//       navigator.msSaveOrOpenBlob(wordBlob, this.state.wordFile5)
//     } else {
//       downloadLink.href = wordFileURL
//       downloadLink.download = this.state.wordFile5
//       downloadLink.click()
//     }
//     document.body.removeChild(downloadLink)
//   }

  // printDocument5 = () => {
  //   var printContent = document.getElementById('fdiA')
  //   var windowObject = window.open(
  //     '',
  //     '',
  //     'left=0,top=0,width=800,height=800,toolbar,scrollbars,status'
  //   )
  //   windowObject.document.write(printContent.innerHTML)
  //   windowObject.document.close()
  //   windowObject.focus()
  //   windowObject.print()
  //   windowObject.close()
  // }

  // saveExcelDocument5 = () => {
  //   var input = document.getElementById('fdiA')
  //   var excelHTML =
  //     this.state.excelHeader + input.innerHTML + this.state.commonFooter

  //   let excelBlob = new Blob(['\ufeff', excelHTML], {
  //     type: 'application/msexcel'
  //   })

  //   let excelFileURL =
  //     'data:application/vnd.ms-excel;charset=utf-8,' +
  //     encodeURIComponent(excelHTML)

  //   var downloadLink = document.createElement('a')
  //   document.body.appendChild(downloadLink)

  //   if (navigator.msSaveOrOpenBlob) {
  //     navigator.msSaveOrOpenBlob(excelBlob, this.state.excelFile5)
  //   } else {
  //     downloadLink.href = excelFileURL
  //     downloadLink.download = this.state.excelFile5
  //     downloadLink.click()
  //   }
  //   document.body.removeChild(downloadLink)
  // }
  
  // savePDFDocument5 = () => {
  //   const id = "fdiA"
  //   const pdfFilee = "FDI Annexure.pdf"
  //   var pdfContent = document.getElementById(id);
  //   const body = JSON.stringify({ content: pdfContent.innerHTML, pdfFile: pdfFilee });

  //   var pdfPreview = window.open(
  //     '',
  //     '',
  //     'left=0,top=0,width=800,height=800,toolbar,scrollbars,status'
  //   )

  //   pdfPreview.document.write(
  //     pdfContent.innerHTML +
  //     `<button style='top: 30px;left: 5px;position: fixed;'onclick="display()"> Download </button>` +
  //     `<script> 
  //       var script = document.createElement('script'); script.type = 'application/javascript'; 
  //       function display() {
  //          fetch('http://13.235.25.202:6001/download/pdf', {
  //           method: 'POST',
  //           headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json'
  //           },
  //           body: ` +  JSON.stringify(body) +
  //         `}).then(response => {
  //           response.blob().then(blob => {
  //             console.log(blob)
  //             let url = window.URL.createObjectURL(blob);
  //           var link = document.createElement('a');
  //           link.href = url;
  //           link.download = 'FDI Annexure.pdf';
  //           document.body.appendChild(link); // we need to append the element to the dom -> otherwise it will not work in firefox
  //           link.click();
  //           link.remove();
  //           });
  //       })
  //     }
  //       script.src = 'https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js'; document.head.appendChild(script); </script>`
  //   )

  // }



//   saveWordDocument6 = () => {
//     var input = document.getElementById("loA")
//     let wordHTML =
//       this.state.wordHeader + input.innerHTML + this.state.commonFooter
//     let wordFileURL =
//       'data:application/vnd.ms-word;charset=utf-8,' +
//       encodeURIComponent(wordHTML)
//     var downloadLink = document.createElement('a')
//     document.body.appendChild(downloadLink)
//     let wordBlob = new Blob(['\ufeff', wordHTML], {
//       type: 'application/msword'
//     })
// debugger;
//     if (navigator.msSaveOrOpenBlob) {
//       navigator.msSaveOrOpenBlob(wordBlob, this.state.wordFile6)
//     } else {
//       downloadLink.href = wordFileURL
//       downloadLink.download = this.state.wordFile6
//       downloadLink.click()
//     }
//     document.body.removeChild(downloadLink)
//   }

  // printDocument6 = () => {
  //   var printContent = document.getElementById('loA')
  //   var windowObject = window.open(
  //     '',
  //     '',
  //     'left=0,top=0,width=800,height=800,toolbar,scrollbars,status'
  //   )
  //   windowObject.document.write(printContent.innerHTML)
  //   windowObject.document.close()
  //   windowObject.focus()
  //   windowObject.print()
  //   windowObject.close()
  // }

  // saveExcelDocument6 = () => {
  //   var input = document.getElementById('loA')
  //   var excelHTML =
  //     this.state.excelHeader + input.innerHTML + this.state.commonFooter

  //   let excelBlob = new Blob(['\ufeff', excelHTML], {
  //     type: 'application/msexcel'
  //   })

  //   let excelFileURL =
  //     'data:application/vnd.ms-excel;charset=utf-8,' +
  //     encodeURIComponent(excelHTML)

  //   var downloadLink = document.createElement('a')
  //   document.body.appendChild(downloadLink)

  //   if (navigator.msSaveOrOpenBlob) {
  //     navigator.msSaveOrOpenBlob(excelBlob, this.state.excelFile6)
  //   } else {
  //     downloadLink.href = excelFileURL
  //     downloadLink.download = this.state.excelFile6
  //     downloadLink.click()
  //   }
  //   document.body.removeChild(downloadLink)
  // }

  

  
  // savePDFDocument6 = () => {
  //   const id = "loA"
  //   const pdfFilee = "LO Annexure.pdf"
  //   var pdfContent = document.getElementById(id);
  //   const body = JSON.stringify({ content: pdfContent.innerHTML, pdfFile: pdfFilee });

  //   var pdfPreview = window.open(
  //     '',
  //     '',
  //     'left=0,top=0,width=800,height=800,toolbar,scrollbars,status'
  //   )

  //   pdfPreview.document.write(
  //     pdfContent.innerHTML +
  //     `<button style='top: 30px;left: 5px;position: fixed;'onclick="display()"> Download </button>` +
  //     `<script> 
  //       var script = document.createElement('script'); script.type = 'application/javascript'; 
  //       function display() {
  //          fetch('http://13.235.25.202:6001/download/pdf', {
  //           method: 'POST',
  //           headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json'
  //           },
  //           body: ` +  JSON.stringify(body) +
  //         `}).then(response => {
  //           response.blob().then(blob => {
  //             console.log(blob)
  //             let url = window.URL.createObjectURL(blob);
  //           var link = document.createElement('a');
  //           link.href = url;
  //           link.download = 'LO Annexure.pdf';
  //           document.body.appendChild(link); // we need to append the element to the dom -> otherwise it will not work in firefox
  //           link.click();
  //           link.remove();
  //           });
  //       })
  //     }
  //       script.src = 'https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js'; document.head.appendChild(script); </script>`
  //   )

  // }

  
//   saveWordDocument7 = () => {
//     var input = document.getElementById("odiA")
//     let wordHTML =
//       this.state.wordHeader + input.innerHTML + this.state.commonFooter
//     let wordFileURL =
//       'data:application/vnd.ms-word;charset=utf-8,' +
//       encodeURIComponent(wordHTML)
//     var downloadLink = document.createElement('a')
//     document.body.appendChild(downloadLink)
//     let wordBlob = new Blob(['\ufeff', wordHTML], {
//       type: 'application/msword'
//     })
// debugger;
//     if (navigator.msSaveOrOpenBlob) {
//       navigator.msSaveOrOpenBlob(wordBlob, this.state.wordFile7)
//     } else {
//       downloadLink.href = wordFileURL
//       downloadLink.download = this.state.wordFile7
//       downloadLink.click()
//     }
//     document.body.removeChild(downloadLink)
//   }

  // printDocument7 = () => {
  //   var printContent = document.getElementById('odiA')
  //   var windowObject = window.open(
  //     '',
  //     '',
  //     'left=0,top=0,width=800,height=800,toolbar,scrollbars,status'
  //   )
  //   windowObject.document.write(printContent.innerHTML)
  //   windowObject.document.close()
  //   windowObject.focus()
  //   windowObject.print()
  //   windowObject.close()
  // }

  // saveExcelDocument7 = () => {
  //   var input = document.getElementById('odiA')
  //   var excelHTML =
  //     this.state.excelHeader + input.innerHTML + this.state.commonFooter

  //   let excelBlob = new Blob(['\ufeff', excelHTML], {
  //     type: 'application/msexcel'
  //   })

  //   let excelFileURL =
  //     'data:application/vnd.ms-excel;charset=utf-8,' +
  //     encodeURIComponent(excelHTML)

  //   var downloadLink = document.createElement('a')
  //   document.body.appendChild(downloadLink)

  //   if (navigator.msSaveOrOpenBlob) {
  //     navigator.msSaveOrOpenBlob(excelBlob, this.state.excelFile7)
  //   } else {
  //     downloadLink.href = excelFileURL
  //     downloadLink.download = this.state.excelFile7
  //     downloadLink.click()
  //   }
  //   document.body.removeChild(downloadLink)
  // }

  // savePDFDocument7 = () => {
  //   const id = "odiA"
  //   const pdfFilee = "ODI Annexure.pdf"
  //   var pdfContent = document.getElementById(id);
  //   const body = JSON.stringify({ content: pdfContent.innerHTML, pdfFile: pdfFilee });

  //   var pdfPreview = window.open(
  //     '',
  //     '',
  //     'left=0,top=0,width=800,height=800,toolbar,scrollbars,status'
  //   )

  //   pdfPreview.document.write(
  //     pdfContent.innerHTML +
  //     `<button style='top: 30px;left: 5px;position: fixed;'onclick="display()"> Download </button>` +
  //     `<script> 
  //       var script = document.createElement('script'); script.type = 'application/javascript'; 
  //       function display() {
  //          fetch('http://13.235.25.202:6001/download/pdf', {
  //           method: 'POST',
  //           headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json'
  //           },
  //           body: ` +  JSON.stringify(body) +
  //         `}).then(response => {
  //           response.blob().then(blob => {
  //             console.log(blob)
  //             let url = window.URL.createObjectURL(blob);
  //           var link = document.createElement('a');
  //           link.href = url;
  //           link.download = 'ODI Annexure.pdf';
  //           document.body.appendChild(link); // we need to append the element to the dom -> otherwise it will not work in firefox
  //           link.click();
  //           link.remove();
  //           });
  //       })
  //     }
  //       script.src = 'https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js'; document.head.appendChild(script); </script>`
  //   )

  // }


  
//   saveWordDocument8 = () => {
//     var input = document.getElementById("undertaking")
//     let wordHTML =
//       this.state.wordHeader + input.innerHTML + this.state.commonFooter
//     let wordFileURL =
//       'data:application/vnd.ms-word;charset=utf-8,' +
//       encodeURIComponent(wordHTML)
//     var downloadLink = document.createElement('a')
//     document.body.appendChild(downloadLink)
//     let wordBlob = new Blob(['\ufeff', wordHTML], {
//       type: 'application/msword'
//     })
// debugger;
//     if (navigator.msSaveOrOpenBlob) {
//       navigator.msSaveOrOpenBlob(wordBlob, this.state.wordFile8)
//     } else {
//       downloadLink.href = wordFileURL
//       downloadLink.download = this.state.wordFile8
//       downloadLink.click()
//     }
//     document.body.removeChild(downloadLink)
//   }

  // printDocument8 = () => {
  //   var printContent = document.getElementById('undertaking')
  //   var windowObject = window.open(
  //     '',
  //     '',
  //     'left=0,top=0,width=800,height=800,toolbar,scrollbars,status'
  //   )
  //   windowObject.document.write(printContent.innerHTML)
  //   windowObject.document.close()
  //   windowObject.focus()
  //   windowObject.print()
  //   windowObject.close()
  // }

  // saveExcelDocument8 = () => {
  //   var input = document.getElementById('undertaking')
  //   var excelHTML =
  //     this.state.excelHeader + input.innerHTML + this.state.commonFooter

  //   let excelBlob = new Blob(['\ufeff', excelHTML], {
  //     type: 'application/msexcel'
  //   })

  //   let excelFileURL =
  //     'data:application/vnd.ms-excel;charset=utf-8,' +
  //     encodeURIComponent(excelHTML)

  //   var downloadLink = document.createElement('a')
  //   document.body.appendChild(downloadLink)

  //   if (navigator.msSaveOrOpenBlob) {
  //     navigator.msSaveOrOpenBlob(excelBlob, this.state.excelFile8)
  //   } else {
  //     downloadLink.href = excelFileURL
  //     downloadLink.download = this.state.excelFile8
  //     downloadLink.click()
  //   }
  //   document.body.removeChild(downloadLink)
  // }
  
  

  // savePDFDocument8 = () => {
  //   const id = "undertaking"
  //   const pdfFilee = "Undertaking.pdf"
  //   var pdfContent = document.getElementById(id);
  //   const body = JSON.stringify({ content: pdfContent.innerHTML, pdfFile: pdfFilee });

  //   var pdfPreview = window.open(
  //     '',
  //     '',
  //     'left=0,top=0,width=800,height=800,toolbar,scrollbars,status'
  //   )

  //   pdfPreview.document.write(
  //     pdfContent.innerHTML +
  //     `<button style='top: 30px;left: 5px;position: fixed;'onclick="display()"> Download </button>` +
  //     `<script> 
  //       var script = document.createElement('script'); script.type = 'application/javascript'; 
  //       function display() {
  //          fetch('http://13.235.25.202:6001/download/pdf', {
  //           method: 'POST',
  //           headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json'
  //           },
  //           body: ` +  JSON.stringify(body) +
  //         `}).then(response => {
  //           response.blob().then(blob => {
  //             console.log(blob)
  //             let url = window.URL.createObjectURL(blob);
  //           var link = document.createElement('a');
  //           link.href = url;
  //           link.download = 'Undertaking.pdf';
  //           document.body.appendChild(link); // we need to append the element to the dom -> otherwise it will not work in firefox
  //           link.click();
  //           link.remove();
  //           });
  //       })
  //     }
  //       script.src = 'https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js'; document.head.appendChild(script); </script>`
  //   )

  // }

//   saveWordDocument9 = () => {
//     var input = document.getElementById("letterOfA")
//     let wordHTML =
//       this.state.wordHeader + input.innerHTML + this.state.commonFooter
//     let wordFileURL =
//       'data:application/vnd.ms-word;charset=utf-8,' +
//       encodeURIComponent(wordHTML)
//     var downloadLink = document.createElement('a')
//     document.body.appendChild(downloadLink)
//     let wordBlob = new Blob(['\ufeff', wordHTML], {
//       type: 'application/msword'
//     })
// debugger;
//     if (navigator.msSaveOrOpenBlob) {
//       navigator.msSaveOrOpenBlob(wordBlob, this.state.wordFile9)
//     } else {
//       downloadLink.href = wordFileURL
//       downloadLink.download = this.state.wordFile9
//       downloadLink.click()
//     }
//     document.body.removeChild(downloadLink)
//   }

  // printDocument9 = () => {
  //   var printContent = document.getElementById('letterOfA')
  //   var windowObject = window.open(
  //     '',
  //     '',
  //     'left=0,top=0,width=800,height=800,toolbar,scrollbars,status'
  //   )
  //   windowObject.document.write(printContent.innerHTML)
  //   windowObject.document.close()
  //   windowObject.focus()
  //   windowObject.print()
  //   windowObject.close()
  // }

  // saveExcelDocument9 = () => {
  //   var input = document.getElementById('letterOfA')
  //   var excelHTML =
  //     this.state.excelHeader + input.innerHTML + this.state.commonFooter

  //   let excelBlob = new Blob(['\ufeff', excelHTML], {
  //     type: 'application/msexcel'
  //   })

  //   let excelFileURL =
  //     'data:application/vnd.ms-excel;charset=utf-8,' +
  //     encodeURIComponent(excelHTML)

  //   var downloadLink = document.createElement('a')
  //   document.body.appendChild(downloadLink)

  //   if (navigator.msSaveOrOpenBlob) {
  //     navigator.msSaveOrOpenBlob(excelBlob, this.state.excelFile9)
  //   } else {
  //     downloadLink.href = excelFileURL
  //     downloadLink.download = this.state.excelFile9
  //     downloadLink.click()
  //   }
  //   document.body.removeChild(downloadLink)
  // }

  
  
  // savePDFDocument9 = () => {
  //   const id = "letterOfA"
  //   const pdfFilee = "Letter Of Authority.pdf"
  //   var pdfContent = document.getElementById(id);
  //   const body = JSON.stringify({ content: pdfContent.innerHTML, pdfFile: pdfFilee });

  //   var pdfPreview = window.open(
  //     '',
  //     '',
  //     'left=0,top=0,width=800,height=800,toolbar,scrollbars,status'
  //   )

  //   pdfPreview.document.write(
  //     pdfContent.innerHTML +
  //     `<button style='top: 30px;left: 5px;position: fixed;'onclick="display()"> Download </button>` +
  //     `<script> 
  //       var script = document.createElement('script'); script.type = 'application/javascript'; 
  //       function display() {
  //          fetch('http://13.235.25.202:6001/download/pdf', {
  //           method: 'POST',
  //           headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json'
  //           },
  //           body: ` +  JSON.stringify(body) +
  //         `}).then(response => {
  //           response.blob().then(blob => {
  //             console.log(blob)
  //             let url = window.URL.createObjectURL(blob);
  //           var link = document.createElement('a');
  //           link.href = url;
  //           link.download = 'Letter of Authority.pdf';
  //           document.body.appendChild(link); // we need to append the element to the dom -> otherwise it will not work in firefox
  //           link.click();
  //           link.remove();
  //           });
  //       })
  //     }
  //       script.src = 'https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js'; document.head.appendChild(script); </script>`
  //   )

  // }

  
//   saveWordDocument10 = () => {
//     var input = document.getElementById("ecs")
//     let wordHTML =
//       this.state.wordHeader + input.innerHTML + this.state.commonFooter
//     let wordFileURL =
//       'data:application/vnd.ms-word;charset=utf-8,' +
//       encodeURIComponent(wordHTML)
//     var downloadLink = document.createElement('a')
//     document.body.appendChild(downloadLink)
//     let wordBlob = new Blob(['\ufeff', wordHTML], {
//       type: 'application/msword'
//     })
// debugger;
//     if (navigator.msSaveOrOpenBlob) {
//       navigator.msSaveOrOpenBlob(wordBlob, this.state.wordFile10)
//     } else {
//       downloadLink.href = wordFileURL
//       downloadLink.download = this.state.wordFile10
//       downloadLink.click()
//     }
//     document.body.removeChild(downloadLink)
//   }

  // printDocument10 = () => {
  //   var printContent = document.getElementById('ecs')
  //   var windowObject = window.open(
  //     '',
  //     '',
  //     'left=0,top=0,width=800,height=800,toolbar,scrollbars,status'
  //   )
  //   windowObject.document.write(printContent.innerHTML)
  //   windowObject.document.close()
  //   windowObject.focus()
  //   windowObject.print()
  //   windowObject.close()
  // }

  // saveExcelDocument10 = () => {
  //   var input = document.getElementById('ecs')
  //   var excelHTML =
  //     this.state.excelHeader + input.innerHTML + this.state.commonFooter

  //   let excelBlob = new Blob(['\ufeff', excelHTML], {
  //     type: 'application/msexcel'
  //   })

  //   let excelFileURL =
  //     'data:application/vnd.ms-excel;charset=utf-8,' +
  //     encodeURIComponent(excelHTML)

  //   var downloadLink = document.createElement('a')
  //   document.body.appendChild(downloadLink)

  //   if (navigator.msSaveOrOpenBlob) {
  //     navigator.msSaveOrOpenBlob(excelBlob, this.state.excelFile10)
  //   } else {
  //     downloadLink.href = excelFileURL
  //     downloadLink.download = this.state.excelFile10
  //     downloadLink.click()
  //   }
  //   document.body.removeChild(downloadLink)
  // }

  
  // savePDFDocument10 = () => {
  //   const id = "ecs"
  //   const pdfFilee = "ECS Mandate Letter.pdf"
  //   var pdfContent = document.getElementById(id);
  //   const body = JSON.stringify({ content: pdfContent.innerHTML, pdfFile: pdfFilee });

  //   var pdfPreview = window.open(
  //     '',
  //     '',
  //     'left=0,top=0,width=800,height=800,toolbar,scrollbars,status'
  //   )

  //   pdfPreview.document.write(
  //     pdfContent.innerHTML +
  //     `<button style='top: 30px;left: 5px;position: fixed;'onclick="display()"> Download </button>` +
  //     `<script> 
  //       var script = document.createElement('script'); script.type = 'application/javascript'; 
  //       function display() {
  //          fetch('http://13.235.25.202:6001/download/pdf', {
  //           method: 'POST',
  //           headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json'
  //           },
  //           body: ` +  JSON.stringify(body) +
  //         `}).then(response => {
  //           response.blob().then(blob => {
  //             console.log(blob)
  //             let url = window.URL.createObjectURL(blob);
  //           var link = document.createElement('a');
  //           link.href = url;
  //           link.download = 'ECS Mandate Letter.pdf';
  //           document.body.appendChild(link); // we need to append the element to the dom -> otherwise it will not work in firefox
  //           link.click();
  //           link.remove();
  //           });
  //       })
  //     }
  //       script.src = 'https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js'; document.head.appendChild(script); </script>`
  //   )

  // }


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

    const tdata = [
      {
        rowname : '1. RBI Covering Letter',
        id : 'rbi',
        fname : 'RBI Covering Letter'
      },
      {
        rowname : '2. Form Of Compounding',
        id : 'formOfCompounding',
        fname : 'Form Of Compounding'
      },
      {
        rowname : '3. Submissions',
        id : 'submissions',
        fname : 'submissions'
      },
      {
        rowname : '4. FDI Annexure',
        id : 'fdiA',
        fname : 'FDI Annexure'
      },
      {
        rowname : '5. Undertaking ',
        id : 'undertaking',
        fname : 'Undertaking'
      },
      {
        rowname : '6. Letter Of Authority',
        id : 'letterOfA',
        fname : 'Letter Of Authority'
      },
      {
        rowname : '7. ECS Mandate Letter',
        id : 'ecs',
        fname : 'ECS Mandate Letter'
      }
    ]
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
            {tdata.map((data, index)=>{
              const {rowname, id, fname} = data
              
              return (
            <tr key={index}>
                <th className='text-nowrap' scope='row'>
                {rowname}
                </th>
                <td>
                  <FaFileWord
                    style={wordStyle}
                    onClick={this.saveWordDocument({id},{fname})}
                  />
                </td>
                <td>
                  <FaFileExcel
                    style={excelStyle}
                    onClick={this.saveExcelDocument({id},{fname})}
                  />
                </td>
                <td>
                  <FaFilePdf style={pdfStyle} onClick={this.savePDFDocument({id},{fname})} />
                </td>
                <td>
                  <FaPrint style={printStyle} onClick={this.printDocument({id})} />
                </td>
              </tr>
            )})}
              {/* <tr>
                <th className='text-nowrap' scope='row'>
                1. RBI Covering Letter 
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
               2. Form Of Compounding 
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
                3. Submissions
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
                4. FDI Annexure
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
                5. Undertaking 
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
                6. Letter Of Authority
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
                7. ECS Mandate Letter
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
             */}
            </tbody>
          </Table>
</Row>       
          {/* ************************************************************************** */}
          
            <div id="rbi"
             style={{
               left: 0,
               right: 0,
               margin: '0 auto',
               display:'none'
               
             }}
            >
                           <div>
          <br />
          <br />
          <div>Date : <em style={{background: 'yellow'}}>XX-XX-XXXX</em>
          </div>
          <br />
          <br />
          <br />
        </div>
        <div>
          To <br />
          The Compounding Authority <br />
          Cell for Effective Implementation of FEMA (CEFA) <br />
          Reserve Bank of India <br />
          Foreign Exchange Department<br />
          <em style={{background: 'yellow'}}>XXXXXXXX</em> Regional Office<br />
          <em style={{background: 'yellow'}}>[Insert Address]</em><br />
          <br />
          <br />
          Dear Sir / Madam<br />
          <br />
          <br />
        </div>
        <div style={{fontWeight: 900, lineHeight: '25px'}}>
          <p>Sub: &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Application for Compounding under the Foreign Exchange Management
            <br /> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Act, 1999 for condonation of delay in filings of Downstream investments –
            <br />&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <em style={{background: 'yellow'}}>[Insert Company name]</em>
          </p>
        </div>
        <br />
        <div style={{fontWeight: 900}}>
          <p>Ref: &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RBI Letter no.         <em style={{background: 'yellow'}}>XXXXXXXXXXX</em>
            Email dated        <em style={{background: 'yellow'}}>XXXXXXXXXX</em>
          </p></div>
        <hr style={{width: '40%', height: '.76px', background: 'black'}} align="left" />
        <div style={{textAlign: 'left', width: '39%', lineHeight: '25px'}}>
          <em style={{background: 'yellow'}}>[Insert Company Name]</em>
          (“the Company”) is herewith submitting a compounding application with the RBI for compounding of contraventions in  <em style={{background: 'yellow'}}>Reg 14/ Reg. 14 (6) (ii)</em>
          under FEMA 20/2000–RB or FEMA 20(R)/2017 (as amended from time to time); in reference to the <strong><em style={{background: 'yellow'}}>RBI Letter no. XXXXXXXXXXX dated XXXXXXXXX</em></strong> In this regard, the Company is enclosing herewith the following documents as under:
        </div>
        <br />
        <br />
        <br />
        <div>
          <table style={{height: '433px', width: '700px' , borderColor: 'black', borderCollapse: 'collapse'}}  border=".5" >
            <tbody>
              <tr>
                <td style={{ display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" , width: '55.2px', textAlign: 'center'}}>
                  <p><strong>Sr. No.</strong></p>
                </td>
                <td style={{ display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" , width: '564.8px'}}>
                  <p style={{ marginLeft: '7.5px', textAlign: 'center'}}><strong>Particulars</strong></p>
                </td>
                <td style={{ display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" , width: '123.2px', textAlign: 'center'}}>
                  <p><strong> Annexure</strong></p>
                </td>
              </tr>
              <tr>
                <td style={{ display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" , width: '55.2px', textAlign: 'center'}}>1.</td>
                <td style={{ display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" , width: '564.8px'}}>
                  <p style={{ marginLeft: '7.5px'}}>Application for compounding in the specified format provided under Foreign Exchange (Compounding Proceedings) Rules, 2000 in duplicate</p>
                </td>
                <td style={{ display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" , width: '123.2px', textAlign: 'center'}}> 1</td>
              </tr>
              <tr>
                <td style={{ display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" , width: '55.2px', textAlign: 'center'}}>2.</td>
                <td style={{ display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" , width: '564.8px'}}>
                  <p style={{ marginLeft: '7.5px'}}>Facts of the case, our submissions, compounding request and petition</p>
                </td>
                <td style={{ display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" , width: '123.2px', textAlign: 'center'}}>2</td>
              </tr>
              <tr>
                <td style={{ display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" , width: '55.2px', textAlign: 'center'}}>3.</td>
                <td style={{ display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" , width: '564.8px'}}>
                  <p style={{ marginLeft: '7.5px'}}>Copy of <strong>RBI Letter no. <em style={{background: 'yellow'}}>XXXXXXXXXX</em> Email dated <em style={{background: 'yellow'}}>XXXXXXXXXX</em> </strong>for approval of Downstream Investment.</p>
                </td>
                <td style={{ display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" , width: '123.2px', textAlign: 'center'}}>3</td>
              </tr>
              <tr>
                <td style={{ display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" , width: '55.2px', textAlign: 'center'}}>4.</td>
                <td style={{ display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" , width: '564.8px'}}>
                  <p style={{ marginLeft: '7.5px'}}>Details to be furnished in accordance with Annex – II – FDI of Master Circular No.9/ 2015-16 dated July 1, 2015 read with AP (DIR Series) Circular No. 20 dated August 12, 2013</p>
                </td>
                <td style={{ display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" , width: '123.2px', textAlign: 'center'}}>4</td>
              </tr>
              <tr>
                <td style={{ display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" , width: '55.2px', textAlign: 'center'}}>5.</td>
                <td style={{ display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" , width: '564.8px'}}>
                  <p style={{ marginLeft: '7.5px'}}>Declaration in accordance with Annex – II – FDI of Master Circular No.9/ 2015-16 dated July 1, 2015</p>
                </td>
                <td style={{ display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" , width: '123.2px', textAlign: 'center'}}>5</td>
              </tr>
              <tr>
                <td style={{ display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" , width: '55.2px', textAlign: 'center'}}>6.</td>
                <td style={{ display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" , width: '564.8px'}}>
                  <p style={{ marginLeft: '7.5px'}}>ECS mandate Form</p>
                </td>
                <td style={{ display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" , width: '123.2px', textAlign: 'center'}}>6</td>
              </tr>
              <tr>
                <td style={{ display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" , width: '55.2px', textAlign: 'center'}}>7.</td>
                <td style={{ display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" , width: '564.8px'}}>
                  <p style={{ marginLeft: '7.5px'}}>PAN Card copy of the Company</p>
                </td>
                <td style={{ display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" , width: '123.2px', textAlign: 'center'}}>7</td>
              </tr>
              <tr>
                <td style={{ display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" , width: '55.2px', textAlign: 'center'}}>8.</td>
                <td style={{ display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" , width: '564.8px'}}>
                  <p style={{ marginLeft: '7.5px'}}>MOA and AOA of the Company</p>
                </td>
                <td style={{ display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" , width: '123.2px', textAlign: 'center'}}>8</td>
              </tr>
              <tr>
                <td style={{ display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" , width: '55.2px', textAlign: 'center'}}>9.</td>
                <td style={{ display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" , width: '564.8px'}}>
                  <p style={{ marginLeft: '7.5px'}}>Demand Draft of INR 5000 in drawn in favour of Reserve Bank of India, payable at <em style={{background: 'yellow'}}>[Mumbai / Ahmedabad / Delhi ]</em></p>
                </td>
                <td style={{ display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" , width: '123.2px', textAlign: 'center'}}>9</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <br />
        <div style={{width: '37%'}}>
          Should you require any further information/ clarifications, we request you to contact <strong> below mentioned company/authorised representatives </strong>
        </div>
        <br />
        <br />
        <div>
          <table style={{borderColor: 'black', borderCollapse: 'collapse', border: '1px solid', borderStyle: 'dashed'}}>
            <tbody>
              <tr>
                <td style={{border: '1px solid', borderStyle: 'dashed'}} colSpan={2} width={308}>
                  <p style={{marginLeft: '5px'}}><strong><strong>Contact : Company’s Representative</strong></strong></p>
                </td>
                <td style={{border: '1px solid', borderStyle: 'dashed'}} colSpan={2} width={376}>
                  <p style={{marginLeft: '5px'}}><strong><strong>Contact : Authorised Representative</strong></strong></p>
                </td>
              </tr>
              <tr>
                <td style={{border: '1px solid', borderStyle: 'dashed'}} width={99}>
                  <p style={{marginLeft: '5px'}}>Name</p>
                </td>
                <td style={{border: '1px solid', borderStyle: 'dashed'}} width={208}>
                  <p style={{marginLeft: '5px'}}><em style={{background: 'yellow'}}>XXXXXXXXXX</em></p>
                </td>
                <td style={{border: '1px solid', borderStyle: 'dashed'}} width={99}>
                  <p style={{marginLeft: '5px'}}>Name</p>
                </td>
                <td style={{border: '1px solid', borderStyle: 'dashed'}} width={276}>
                  <p style={{marginLeft: '5px'}}><em style={{background: 'yellow'}}>XXXXXXXXXX</em></p>
                </td>
              </tr>
              <tr>
                <td style={{border: '1px solid', borderStyle: 'dashed'}} width={99}>
                  <p style={{marginLeft: '5px'}}>Designation</p>
                </td>
                <td style={{border: '1px solid', borderStyle: 'dashed'}} width={208}>
                  <p style={{marginLeft: '5px'}}><em style={{background: 'yellow'}}>XXXXXXXXXX</em></p>
                </td>
                <td style={{border: '1px solid', borderStyle: 'dashed'}} width={99}>
                  <p style={{marginLeft: '5px'}}>Designation</p>
                </td>
                <td style={{border: '1px solid', borderStyle: 'dashed'}} width={276}>
                  <p style={{marginLeft: '5px'}}><em style={{background: 'yellow'}}>XXXXXXXXXX</em></p>
                </td>
              </tr>
              <tr>
                <td style={{border: '1px solid', borderStyle: 'dashed'}} width={99}>
                  <p style={{marginLeft: '5px'}}>Tel</p>
                </td>
                <td style={{border: '1px solid', borderStyle: 'dashed'}} width={208}>
                  <p style={{marginLeft: '5px'}}><em style={{background: 'yellow'}}>XXXXXXXXXX</em></p>
                </td>
                <td style={{border: '1px solid', borderStyle: 'dashed'}} width={99}>
                  <p style={{marginLeft: '5px'}}>Tel</p>
                </td>
                <td style={{border: '1px solid', borderStyle: 'dashed'}} width={276}>
                  <p style={{marginLeft: '5px'}}><em style={{background: 'yellow'}}>XXXXXXXXXX</em></p>
                </td>
              </tr>
              <tr>
                <td style={{border: '1px solid', borderStyle: 'dashed'}} width={99}>
                  <p style={{marginLeft: '5px'}}>Fax</p>
                </td>
                <td style={{border: '1px solid', borderStyle: 'dashed'}} width={208}>
                  <p style={{marginLeft: '5px'}}><em style={{background: 'yellow'}}>XXXXXXXXXX</em></p>
                </td>
                <td style={{border: '1px solid', borderStyle: 'dashed'}} width={99}>
                  <p style={{marginLeft: '5px'}}>Fax</p>
                </td>
                <td style={{border: '1px solid', borderStyle: 'dashed'}} width={276}>
                  <p style={{marginLeft: '5px'}}><em style={{background: 'yellow'}}>XXXXXXXXXX</em></p>
                </td>
              </tr>
              <tr>
                <td style={{border: '1px solid', borderStyle: 'dashed'}} width={99}>
                  <p style={{marginLeft: '5px'}}>Cell</p>
                </td>
                <td style={{border: '1px solid', borderStyle: 'dashed'}} width={208}>
                  <p style={{marginLeft: '5px'}}><em style={{background: 'yellow'}}>XXXXXXXXXX</em></p>
                </td>
                <td style={{border: '1px solid', borderStyle: 'dashed'}} width={99}>
                  <p style={{marginLeft: '5px'}}>Cell</p>
                </td>
                <td style={{border: '1px solid', borderStyle: 'dashed'}} width={276}>
                  <p style={{marginLeft: '5px'}}><em style={{background: 'yellow'}}>XXXXXXXXXX</em></p>
                </td>
              </tr>
              <tr>
                <td style={{border: '1px solid', borderStyle: 'dashed'}} width={99}>
                  <p style={{marginLeft: '5px'}}>Email</p>
                </td>
                <td style={{border: '1px solid', borderStyle: 'dashed'}} width={208}>
                  <p style={{marginLeft: '5px'}}><em style={{background: 'yellow'}}>XXXXXXXXXX</em></p>
                </td>
                <td style={{border: '1px solid', borderStyle: 'dashed'}} width={99}>
                  <p style={{marginLeft: '5px'}}>Email</p>
                </td>
                <td style={{border: '1px solid', borderStyle: 'dashed'}} width={276}>
                  <p style={{marginLeft: '5px'}}><em style={{background: 'yellow'}}>XXXXXXXXXX</em></p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>&nbsp;</p>
        </div>
        <br />
        Yours Sincerely 
        <br />
        <br />
        <br />
        <br />
        <div style={{fontWeight: 900}}>
          For <em style={{background: 'yellow'}}>[Insert Company Name]</em>
          <br />
          <br />
          <br />
          <em style={{background: 'yellow'}}>XXXXXXXXXX</em>
          <br />
          [Authorised Signatory / Director] <br />
          <em style={{background: 'yellow'}}>Place : XXXXXXXXXX</em>
          <br />
          <br />
        </div>


            </div>








        <div style={{width:"40%"}} >
        <div id="formOfCompounding" style={{display:"none" }}>
        <p style={{marginLeft:"5px" , textAlign: 'right'}}><strong>Annexure 1</strong></p>
        <p style={{marginLeft:"5px" , textAlign: 'center'}}><strong><strong>Form </strong></strong></p>
        <p style={{marginLeft:"5px" , textAlign: 'center'}}><strong><strong>(See Rule 4 or 5)</strong></strong></p>
        <p style={{marginLeft:"5px" , textAlign: 'center'}}><strong><strong>(To be filled in duplicate and shall be accompanied by certified copy of the memorandum issued)</strong></strong></p>
        <p>&nbsp;</p>
        <table style={{width: '700px', height: '800px', borderColor: 'black', borderCollapse: 'collapse'}} border=".5">
          <tbody>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '52px' , textAlign: 'center'}}>
                <p style={{marginLeft:"5px"}}>1.&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '259px'}}>
                <p style={{marginLeft:"5px"}}>Name of the Applicant &nbsp;(In BLOCK LETTERS)</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '485px'}} colSpan={2}>
                <p style={{marginLeft:"5px"}}><span style={{backgroundColor: '#ffff00'}}><strong><strong>[Insert Company Name]</strong></strong></span></p>
              </td>
            </tr>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '52px' , textAlign: 'center'}}>
                <p style={{marginLeft:"5px"}}>2.&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '259px'}}>
                <p style={{marginLeft:"5px"}}>Full Address of the Applicant</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '114.8px'}}>
                <p style={{marginLeft:"5px"}}>Address</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '370.2px'}}>
                <p style={{marginLeft:"5px"}}><span style={{backgroundColor: '#ffff00'}}><strong><strong>[Insert Company Address]</strong></strong></span></p>
              </td>
            </tr>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '52px' , textAlign: 'center'}}>
                <p style={{marginLeft:"5px"}}>&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '259px'}}>
                <p style={{marginLeft:"5px"}}>&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '114.8px'}}>
                <p style={{marginLeft:"5px"}}>Phone No.</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '370.2px'}}>
                <p style={{marginLeft:"5px"}}><span style={{backgroundColor: '#ffff00'}}><strong><strong>&nbsp;</strong></strong><strong><strong>[Insert Company Contact]</strong></strong></span></p>
              </td>
            </tr>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '52px' , textAlign: 'center'}}>
                <p style={{marginLeft:"5px"}}>&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '259px'}}>
                <p style={{marginLeft:"5px"}}>&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '114.8px'}}>
                <p style={{marginLeft:"5px"}}>Fax No.</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '370.2px'}}>
                <p style={{marginLeft:"5px"}}><span style={{backgroundColor: '#ffff00'}}><strong><strong>[Insert Company Contact]</strong></strong></span></p>
              </td>
            </tr>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '52px' , textAlign: 'center'}}>
                <p style={{marginLeft:"5px"}}>&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '259px'}}>
                <p style={{marginLeft:"5px"}}>&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '114.8px'}}>
                <p style={{marginLeft:"5px"}}>Email ID</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '370.2px'}}>
                <p style={{marginLeft:"5px"}}><span style={{backgroundColor: '#ffff00'}}><strong><strong>&nbsp;&nbsp;</strong></strong><strong><strong>[Insert Company Email]</strong></strong></span></p>
              </td>
            </tr>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '52px' , textAlign: 'center'}}>
                <p style={{marginLeft:"5px"}}>3.&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '259px'}}>
                <p style={{marginLeft:"5px"}}>Whether the Applicant is resident in India or resident outside India? (please refer to Section 2 (v) of the Act)</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '485px'}} colSpan={2}>
                <p style={{marginLeft:"5px"}}><strong><strong>The applicant is a </strong></strong><span style={{backgroundColor: '#ffff00'}}><strong><strong>listed / unlisted company </strong></strong></span><strong><strong>&nbsp;registered under the provisions of Companies Act, 1956 / &nbsp;Companies Act, 2013 and is resident in India in terms of Section 2(v) of FEMA. &nbsp;</strong></strong></p>
              </td>
            </tr>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '52px' , textAlign: 'center'}}>
                <p style={{marginLeft:"5px"}}>4.&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '259px'}}>
                <p style={{marginLeft:"5px"}}>Name of the Adjudicating Authority before whom the case in pending</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '485px'}} colSpan={2}>
                <p style={{marginLeft:"5px"}}><strong><strong>Not Applicable</strong></strong></p>
              </td>
            </tr>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '52px' , textAlign: 'center'}}>
                <p style={{marginLeft:"5px"}}>5.&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '259px'}}>
                <p style={{marginLeft:"5px"}}>Nature of Contravention [according to sub-section (1) of section 13]</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '485px'}} colSpan={2}>
                <p style={{marginLeft:"5px"}}><strong><strong>Contravention of the provisions of </strong></strong><span style={{backgroundColor: '#ffff00'}}><strong><strong>Reg. 14(6)(ii)</strong></strong></span><strong><strong><span style={{backgroundColor: '#ffff00'}}>&nbsp;</span>of FEMA 20/2000-RB dated May 3, 2000 as amended from time to time (‘FEMA 20’). The contraventions have been described in Annexure&nbsp;2</strong></strong></p>
              </td>
            </tr>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '52px' , textAlign: 'center'}}>
                <p style={{marginLeft:"5px"}}>6.&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '259px'}}>
                <p style={{marginLeft:"5px"}}>Brief Facts of the Case</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '485px'}} colSpan={2}>
                <p style={{marginLeft:"5px"}}><strong><strong>Please refer Annexure 2</strong></strong></p>
              </td>
            </tr>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '52px' , textAlign: 'center'}}>
                <p style={{marginLeft:"5px"}}>7.&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '259px'}}>
                <p style={{marginLeft:"5px"}}>Details of Fee for application for compounding</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '485px'}} colSpan={2}>
                <p style={{marginLeft:"5px"}}><strong><strong>Demand Draft No. </strong></strong><span style={{backgroundColor: '#ffff00'}}><strong><strong>XXXXXX</strong></strong></span><strong><strong><span style={{backgroundColor: '#ffff00'}}>&nbsp;</span>dated </strong></strong><span style={{backgroundColor: '#ffff00'}}><strong><strong>XXXXXX</strong></strong></span><strong><em><strong><em>&nbsp;</em></strong></em></strong><strong><strong>for Rs. 5,000/- (Rupees Five Thousand Only) in favor of Reserve Bank of India, payable at </strong></strong><span style={{backgroundColor: '#ffff00'}}><strong><strong>XXXXXX</strong></strong></span></p>
              </td>
            </tr>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '52px' , textAlign: 'center'}}>
                <p style={{marginLeft:"5px"}}>8.&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '259px'}}>
                <p style={{marginLeft:"5px"}}>Any other information relevant to the case</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle", border:"1px solid black" , borderCollapse:"collapse" ,width: '485px'}} colSpan={2}>
                <p style={{marginLeft:"5px"}}>Please refer <strong><strong>Annexure 2</strong></strong></p>
              </td>
            </tr>
          </tbody>
        </table>
        <p style={{marginLeft:"5px" , textAlign: 'right'}}>&nbsp;</p>
        <p style={{marginLeft:"5px" , textAlign: 'left'}}>I declare that the particulars given are true and correct to the best of our knowledge and belief and that I am willing to accept any direction/order of the Compounding Authority in connection with compounding of our case.</p>
        <p style={{marginLeft:"5px" , textAlign: 'right'}}>&nbsp;</p>
        <p style={{marginLeft:"5px" , textAlign: 'left'}}>Yours sincerely,</p>
        <p style={{marginLeft:"5px" , textAlign: 'right'}}>&nbsp;</p>
        <p style={{marginLeft:"5px" , textAlign: 'left'}}><strong><strong>For </strong></strong><span style={{backgroundColor: '#ffff00'}}><strong><strong>[Insert Company Name]</strong></strong></span></p>
        <p style={{marginLeft:"5px" , textAlign: 'right'}}><strong><strong>&nbsp;</strong></strong></p>
        <p style={{marginLeft:"5px" , textAlign: 'right'}}><strong><strong>&nbsp;</strong></strong></p>
        <p style={{marginLeft:"5px" , textAlign: 'left'}}><span style={{backgroundColor: '#ffff00'}}><strong><strong>XXXXXXXXXX</strong></strong><strong><strong>&nbsp;</strong></strong></span></p>
        <p style={{marginLeft:"5px" , textAlign: 'left'}}><strong><strong>[Authorised Signatory / Director]</strong></strong></p>
        <p style={{marginLeft:"5px" , textAlign: 'left'}}><strong><strong>Place: &nbsp;</strong></strong><span style={{backgroundColor: '#ffff00'}}><strong><strong>XXXXXXXXXX</strong></strong><strong><strong>&nbsp;</strong></strong></span></p>
        <p style={{marginLeft:"5px" , textAlign: 'right'}}>&nbsp;</p>          
        </div>

        </div>







        <div id="submissions" style={{display:"none"}}>
        <p style={{textAlign: 'right'}}><strong>Annexure 2</strong></p>
        <br />
        <h3 style={{width: '600px', border: '1px solid black', padding: '9px', backgroundColor: 'rgba(0,0,0 ,0.3)'}}><strong>1.&nbsp;</strong><strong><strong>BACKGROUND</strong></strong></h3>
        <div>
          <table style={{width: '708px'}}>
            <tbody>
              <tr style={{height: '74px'}}>
                <td style={{width: '28px', verticalAlign:"top" ,textAlign:"left"}}>1.1</td>    
                <td style={{width: '15.8px', height: '74px'}}>
                  <p>[Insert Company Name] (‘Company’ or ‘Applicant’ or ‘Investor’) <strong style={{color: 'orange'}}>is a public / private </strong></p>
                  <p>company and is inter-alia engaged into the business of</p>
                  <p style={{color: 'orange'}}>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                  <p style={{color: 'orange'}}>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                  <p style={{color: 'orange'}}>XXXXXXXXXXXXXXXXXXXXXXX </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>    
        <div>
          <table style={{width: '700px'}}>
            <tbody>
              <tr style={{height: '74px'}}>
                <td style={{width: '28px', verticalAlign:"top" ,textAlign:"left"}}>1.2</td>    
                <td style={{width: '15.8px', height: '74px'}}>
                  <p>XXXXXXXXXX (‘XXXXXXXXXXX’ or ‘<strong>Investee Company</strong>’) <strong style={{color: 'orange'}}>is a public / private </strong></p>
                  <p>company and is inter-alia engaged into the business of</p>
                  <p style={{color: 'orange'}}>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                  <p style={{color: 'orange'}}>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                  <p style={{color: 'orange'}}>XXXXXXXXXXXXXXXXXXXXXXX </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>    
        <div>
          <table style={{width: '708px'}}>
            <tbody>
              <tr style={{height: '74px'}}>
                <td style={{width: '30px', verticalAlign:"top" , textAlign:"left"}}>1.3</td>    
                <td>
                  <p>As per the FEMA 20(R)/ 2017-RB Foreign Exchange Management (Transfer or Issue of </p>
                  <p>Security by a Person Resident Outside India) Regulations, 2017 (as amended from time</p>
                  <p>to time); an Indian entity or an investment vehicle making downstream investment in</p>
                  <p>another Indian entity which is considered as indirect foreign investment for the investee</p>
                  <p>Indian entity in terms of these Regulations, shall notify the Secretariat for Industrial</p>
                  <p>Assistance, DIPP within 30 days of such investment, even if capital instruments have not</p>
                  <p>been allotted, along with the modality of investment in new / existing ventures (with /</p>
                  <p>without expansion programme).</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>    
        <div>
          <table style={{width: '700px'}}>
            <tbody>
              <tr style={{height: '74px'}}>
                <td style={{width: '30px' , textAlign:"left"}}>1.4</td>    
                <td>
                  <p>Details of downstream investment </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>    
        <div style={{position: 'relative', left: '50px'}}>
          <table style={{borderColor: 'black', borderCollapse: 'collapse' ,width: '600px'}} border=".5">
            <tbody>
              <tr>
                <td style={{border:"1px solid black" , borderCollapse:"collapse"}} width={315}>
                  <p style={{paddingLeft: '5px'}}>Name of the Investor</p>
                </td>
                <td style={{border:"1px solid black" , borderCollapse:"collapse"}} width={346}>
                  <p style={{paddingLeft: '5px'}}>&nbsp;</p>
                </td>
              </tr>
              <tr>
                <td style={{border:"1px solid black" , borderCollapse:"collapse"}} width={315}>
                  <p style={{paddingLeft: '5px'}}>Name of the Investee Company</p>
                </td>
                <td style={{border:"1px solid black" , borderCollapse:"collapse"}} width={346}>
                  <p style={{paddingLeft: '5px'}}>&nbsp;</p>
                </td>
              </tr>
              <tr>
                <td style={{border:"1px solid black" , borderCollapse:"collapse"}} width={315}>
                  <p style={{paddingLeft: '5px'}}>Date of Investment</p>
                </td>
                <td style={{border:"1px solid black" , borderCollapse:"collapse"}} width={346}>
                  <p style={{paddingLeft: '5px'}}>&nbsp;</p>
                </td>
              </tr>
              <tr>
                <td style={{border:"1px solid black" , borderCollapse:"collapse"}} width={315}>
                  <p style={{paddingLeft: '5px'}}>Amount of Investment</p>
                </td>
                <td style={{border:"1px solid black" , borderCollapse:"collapse"}} width={346}>
                  <p style={{paddingLeft: '5px'}}>&nbsp;</p>
                </td>
              </tr>
              <tr>
                <td style={{border:"1px solid black" , borderCollapse:"collapse"}} width={315}>
                  <p style={{paddingLeft: '5px'}}>% of Holding / Investment by Investor</p>
                </td>
                <td style={{border:"1px solid black" , borderCollapse:"collapse"}} width={346}>
                  <p style={{paddingLeft: '5px'}}>&nbsp;</p>
                </td>
              </tr>
              <tr>
                <td style={{border:"1px solid black" , borderCollapse:"collapse"}} width={315}>
                  <p style={{paddingLeft: '5px'}}>Details of Instrument</p>
                </td>
                <td style={{border:"1px solid black" , borderCollapse:"collapse"}} width={346}>
                  <p style={{paddingLeft: '5px'}}>&nbsp;</p>
                </td>
              </tr>
              <tr>
                <td style={{border:"1px solid black" , borderCollapse:"collapse"}} width={315}>
                  <p style={{paddingLeft: '5px'}}>Instrument Allotted</p>
                </td>
                <td style={{border:"1px solid black" , borderCollapse:"collapse"}} width={346}>
                  <p style={{paddingLeft: '5px'}}>&nbsp;</p>
                </td>
              </tr>
              <tr>
                <td style={{border:"1px solid black" , borderCollapse:"collapse"}} width={315}>
                  <p style={{paddingLeft: '5px'}}>Date of Allotment</p>
                </td>
                <td style={{border:"1px solid black" , borderCollapse:"collapse"}} width={346}>&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <table style={{width: '708px'}}>
            <tbody>
              <tr style={{height: '74px'}}>
                <td style={{width: '30px' , textAlign:"left" }}>1.5</td>    
                <td>
                  <p><strong>Compliance with Downstream Investment Guidelines</strong></p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>    
        <div>
          <ul style={{lineHeight: '25px'}}>
            <li>Abovementioned Downstream investment complies with the pricing guidelines as per FEMA guidelines.</li>
            <li>The requisite funds used is by way of internal accruals for the purpose of downstream investment in XXXXXXX.</li>
            <li>A copy of board resolution authorizing issue / transfer of shares by XXXXXXX Board; &nbsp;</li>
            <li>A copy of board resolutions authorizing such subscription / purchase of shares of XXXXXXXX by XXXXXXXX Board</li>
            <li>The valuation report determining the fair value per share is &nbsp;enclosed herewith.</li>
            <li>The Company notified the Secretariat for Industrial Assistance, DIPP beyond the statutory period of 30 days of undertaking the downstream investment i.e. on <strong>XXXXXXXXX</strong>[Copy of Acknowledgement enclosed]</li>
            <li>The Company also had filed an application on RBI Firms portal dated <strong>XXXXXXXX</strong><strong>[Form DI – XXXXXXXX]</strong>&nbsp;duly approved by the RBI dated <br />XXXXXXXX subject to applying for compounding with the RBI. The Company now wishes to condone the delay for the aforementioned filings with the Reserve Bank of India <strong>“RBI”</strong>.</li>
          </ul>
        </div>
        <h3 style={{width: '600px', border: '1px solid black', padding: '9px', backgroundColor: 'rgba(0,0,0 ,0.3)'}}><strong>2.&nbsp;</strong><strong><strong>CONTRAVENTIONS AND REASONS FOR CONTRAVENTIONS</strong></strong></h3>
        <div>
          <table style={{width: '708px'}}>
            <tbody>
              <tr style={{height: '74px'}}>
                <td style={{width: '30px', verticalAlign:"middle" ,textAlign:"left"}}>2.1</td>    
                <td>
                  <p>In terms of erstwhile FEMA 20 and Master Circular on Foreign Investment in India; the Indian Company has to report the following: </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>    
        <div>
          <ul>
            <li>Reporting of downstream investment &nbsp;- notify the Secretariat for Industrial Assistance, DIPP within 30 days of such investment, even if capital instruments have not been allotted, along with the modality of investment in new / existing ventures (with / without expansion programme) <strong>[Regulation 14 (6) (ii)]</strong>.</li>
          </ul>
        </div>
        <div>
          <table style={{width: '708px'}}>
            <tbody>
              <tr style={{height: '74px'}}>
                <td style={{width: '30px',verticalAlign:"top" , textAlign:"left"}}>2.2</td>    
                <td>
                  <p>The delay in filings of reporting of downstream investments were due to 
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXX. The Company now <br />
                    wishes to condone the delay for the aforementioned filings with the <br /> Reserve Bank of India “RBI”. </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div> 
        <h3 style={{width: '600px', border: '1px solid black', padding: '9px', backgroundColor: 'rgba(0,0,0 ,0.3)'}}><strong>3.&nbsp;</strong><strong><strong>PETITION REQUEST</strong></strong></h3>
        <div>
          <table style={{width: '708px'}}>
            <tbody>
              <tr style={{height: '74px'}}>
                <td style={{width: '30px', display:"inline-block" ,verticalAlign:"middle"}}>3.1</td>    
                <td>
                  <p> We request the RBI to kindly condone the inadvertent errors mentioned in section&nbsp;2 and <br /> compound the same. In summary, we request the RBI to take a lenient view of the <br /> contraventions as:</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div> 
        <div>
          <ul>
            <li>There was no malafide intent on part of the Applicant to contravene any provisions of the Foreign Exchange Management Act; and</li>
          </ul>
          <p>&nbsp;</p>
          <ul>
            <li>These were inadvertent contraventions made under bonafide belief resulting in the procedural contravention;</li>
          </ul>
        </div>
        <div>
          Kindly grant us a personal hearing in connection with the compounding and do let us know, in case any further information or documentation is required. 
        </div>
        <br />
        <br />
        <br />
        <div>
          Yours Sincerely, <br />
          <p><strong>For </strong><span style={{backgroundColor: '#ffff00'}}><strong>[Insert Company Name]</strong></span></p>
          <p><strong><strong>&nbsp;</strong></strong></p>
          <p><strong><strong>&nbsp;</strong></strong></p>
          <p><span style={{backgroundColor: '#ffff00'}}><strong><strong>XXXXXXXXXX</strong></strong><strong><strong>&nbsp;</strong></strong></span></p>
        </div>
</div>






              <div  id="ecbA" style={{display:"none"}} >
                
      <table style={{height:"1100px",borderColor: 'black', borderCollapse: 'collapse'}} border=".5">
        <tbody>
          <tr style={{height: '45px'}}>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={5} width={721}>
              <p style={{textAlign: 'center'}}><strong>ECB</strong></p>
            </td>
          </tr>
          <tr style={{height: '45px'}}>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={5} width={721}>
              <p style={{textAlign: 'center'}}>&nbsp; Details to be furnished along with application for compounding of contravention relating to External Commercial Borrowing</p>
            </td>
          </tr>
          <tr style={{height: '35.8px'}}>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35.8px', textAlign: 'center'}} width={46}>
              <p style={{paddingLeft: '5px'}}>•</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35.8px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>Name of the applicant</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35.8px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>&nbsp;</p>
            </td>
          </tr>
          <tr style={{height: '45px'}}>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px', textAlign: 'center'}} width={46}>
              <p style={{paddingLeft: '5px'}}>•</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>Date of incorporation</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>&nbsp;</p>
            </td>
          </tr>
          <tr style={{height: '45px'}}>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px', textAlign: 'center'}} width={46}>
              <p style={{paddingLeft: '5px'}}>•</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>Income-tax PAN</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>&nbsp;</p>
            </td>
          </tr>
          <tr style={{height: '45px'}}>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px', textAlign: 'center'}} width={46}>
              <p style={{paddingLeft: '5px'}}>•</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>Nature of activities under taken (Please give NIC code - 1987)</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>&nbsp;</p>
            </td>
          </tr>
          <tr style={{height: '45px'}}>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px', textAlign: 'center'}} width={46}>
              <p style={{paddingLeft: '5px'}}>•</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>Brief particulars about the foreign lender</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>&nbsp;</p>
            </td>
          </tr>
          <tr style={{height: '45px'}}>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px', textAlign: 'center'}} width={46}>
              <p style={{paddingLeft: '5px'}}>•</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>Is the applicant an eligible borrower?</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>&nbsp;</p>
            </td>
          </tr>
          <tr style={{height: '45px'}}>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px', textAlign: 'center'}} width={46}>
              <p style={{paddingLeft: '5px'}}>•</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>Is the lender eligible lender?</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>&nbsp;</p>
            </td>
          </tr>
          <tr style={{height: '45px'}}>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px', textAlign: 'center'}} width={46}>
              <p style={{paddingLeft: '5px'}}>•</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>Is the lender an equity holder?</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>&nbsp;</p>
            </td>
          </tr>
          <tr style={{height: '45px'}}>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px', textAlign: 'center'}} width={46}>
              <p style={{paddingLeft: '5px'}}>•</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>What is the level of his holding at the time of loan agreement?</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>&nbsp;</p>
            </td>
          </tr>
          <tr style={{height: '45px'}}>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px', textAlign: 'center'}} width={46}>
              <p style={{paddingLeft: '5px'}}>•</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>Details of ECB</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>&nbsp;</p>
            </td>
          </tr>
          <tr style={{height: '45px'}}>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px', textAlign: 'center'}} width={46}>
              <p style={{paddingLeft: '5px'}}>•</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>Date of Loan agreement</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>&nbsp;</p>
            </td>
          </tr>
          <tr style={{height: '45px'}}>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px', textAlign: 'center'}} width={46}>
              <p style={{paddingLeft: '5px'}}>•</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>Amount in Foreign Currency and Indian Rupee</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>&nbsp;</p>
            </td>
          </tr>
          <tr style={{height: '45px'}}>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px', textAlign: 'center'}} width={46}>
              <p style={{paddingLeft: '5px'}}>•</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>Rate of interest</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>&nbsp;</p>
            </td>
          </tr>
          <tr style={{height: '45px'}}>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px', textAlign: 'center'}} width={46}>
              <p style={{paddingLeft: '5px'}}>•</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>Period of loan</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>&nbsp;</p>
            </td>
          </tr>
          <tr style={{height: '45px'}}>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px', textAlign: 'center'}} width={46}>
              <p style={{paddingLeft: '5px'}}>•</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>Repayment particulars</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>&nbsp;</p>
            </td>
          </tr>
          <tr style={{height: '45px'}}>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px', textAlign: 'center'}} width={46}>
              <p style={{paddingLeft: '5px'}}>&nbsp;</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} width={184}>
              <p style={{paddingLeft: '5px'}}>Date of draw down</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={319}>
              <p style={{paddingLeft: '5px'}}>Amount in Foreign Currency</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} width={170}>
              <p style={{paddingLeft: '5px'}}>Amount in INR</p>
            </td>
          </tr>
          <tr style={{height: '45px'}}>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px', textAlign: 'center'}} width={46}>
              <p style={{paddingLeft: '5px'}}>&nbsp;</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} width={184}>
              <p style={{paddingLeft: '5px'}}>&nbsp;</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={319}>
              <p style={{paddingLeft: '5px'}}>&nbsp;</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} width={170}>
              <p style={{paddingLeft: '5px'}}>&nbsp;</p>
            </td>
          </tr>
          <tr style={{height: '45px'}}>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px', textAlign: 'center'}} width={46}>
              <p style={{paddingLeft: '5px'}}>•</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>Details of draw down</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>&nbsp;</p>
            </td>
          </tr>
          <tr style={{height: '45px'}}>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px', textAlign: 'center'}} width={46}>
              <p style={{paddingLeft: '5px'}}>•</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>Details of LRN Number- application and receipt</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>&nbsp;</p>
            </td>
          </tr>
          <tr style={{height: '45px'}}>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px', textAlign: 'center'}} width={46}>
              <p style={{paddingLeft: '5px'}}>•</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>Details of ECB 2 returns submitted; Period of return: Date of submission</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>&nbsp;</p>
            </td>
          </tr>
          <tr style={{height: '45px'}}>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px', textAlign: 'center'}} width={46}>
              <p style={{paddingLeft: '5px'}}>•</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>Details of Utilization of ECB in Foreign Currency and Indian Rupee</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>&nbsp;</p>
            </td>
          </tr>
          <tr style={{height: '45px'}}>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px', textAlign: 'center'}} width={46}>
              <p style={{paddingLeft: '5px'}}>•</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>Nature of contravention and reasons for the contravention</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '45px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>&nbsp;</p>
            </td>
          </tr>
          <tr style={{height: '34px'}}>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '34px', textAlign: 'center'}} width={46}>
              <p style={{paddingLeft: '5px'}}>•</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '34px'}} colSpan={2} width={337}>
              <p style={{paddingLeft: '5px'}}>All supporting documents may be submitted</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '34px'}} colSpan={2} width={337}>&nbsp;</td>
          </tr>
        </tbody>
      </table>
              </div>

             








             <div id="fdiA" style={{display:"none" }}>
               
      <div >
        <p style={{textAlign: 'right'}}><strong><em>Annexure&nbsp;3</em></strong></p>
        <p><strong><strong>&nbsp;</strong></strong></p>
        <p><strong><strong>&nbsp;</strong></strong></p>
        <p style={{textAlign: 'center'}}><strong><strong>Details to be furnished along with application for compounding of contravention relating to Foreign Direct Investment in India</strong></strong></p>
        <p><strong><strong>&nbsp;</strong></strong></p>
        <table style={{borderColor: 'black', borderCollapse: 'collapse' }} border=".5">
          <tbody>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,width: '205.6px'}}>
                <p style={{paddingLeft: '5px'}}>Name of the applicant</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,width: '531.4px'}}>
                <p style={{paddingLeft: '5px'}}><span style={{backgroundColor: '#ffff00'}}><strong><strong>{this.props.dataCaptured && this.props.dataCaptured.nameOfApplicant}</strong></strong></span></p>
              </td>
            </tr>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,width: '205.6px'}}>
                <p style={{paddingLeft: '5px'}}>Date of incorporation</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,width: '531.4px'}}>
                <p style={{paddingLeft: '5px'}}><span style={{backgroundColor: '#ffff00'}}><strong><strong>{this.props.dataCaptured && this.props.dataCaptured.dateOfIncorporation}</strong></strong></span></p>
              </td>
            </tr>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,width: '205.6px'}}>
                <p style={{paddingLeft: '5px'}}>Income – tax PAN</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,width: '531.4px'}}>
                <p style={{paddingLeft: '5px'}}><span style={{backgroundColor: '#ffff00'}}><strong><strong>{this.props.dataCaptured && this.props.dataCaptured.incomeTaxPan}</strong></strong></span></p>
              </td>
            </tr>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,width: '205.6px'}}>
                <p style={{paddingLeft: '5px'}}>Nature of activities undertaken</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,width: '531.4px'}}>
                <p style={{paddingLeft: '5px'}}><span style={{backgroundColor: '#ffff00'}}><strong><strong>{this.props.dataCaptured && this.props.dataCaptured.natureOfActivitiesUnderTakenNicCode}</strong></strong></span></p>
              </td>
            </tr>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,width: '205.6px'}}>
                <p style={{paddingLeft: '5px'}}>NIC Code</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,width: '531.4px'}}>
                <p style={{paddingLeft: '5px'}}><span style={{backgroundColor: '#ffff00'}}><strong><strong>XXXXXXXXXX [NIC Code of 2008]</strong></strong></span></p>
              </td>
            </tr>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,width: '205.6px'}}>
                <p style={{paddingLeft: '5px'}}>Brief particulars about foreign investor</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,width: '531.4px'}}>
                <p style={{paddingLeft: '5px'}}>Refer Annexure 3A</p>
              </td>
            </tr>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,width: '205.6px'}}>
                <p style={{paddingLeft: '5px'}}>Details of foreign inward remittances received by Applicant Company from date of incorporation till date</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,width: '531.4px'}}>
                <p style={{paddingLeft: '5px'}}>Please refer to Tables below</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p><strong><u><strong>&nbsp;</strong></u></strong></p>
        <p><strong><u><strong>&nbsp;</strong></u></strong></p>
        <p style={{textAlign: 'center'}}><strong><u><strong>Table A</strong></u></strong></p>
        <p><strong><u><strong>&nbsp;</strong></u></strong></p>
        <table style={{borderColor: 'black', borderCollapse: 'collapse'}} border=".5">
          <tbody>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} bgcolor=" #d3d3d3" width={50}>
                <p><strong><strong>S. No.</strong></strong></p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} bgcolor=" #d3d3d3" width={214}>
                <p><strong><strong>Name of remitter</strong></strong></p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} bgcolor=" #d3d3d3" width={96}>
                <p><strong><strong>Total amount (INR)</strong></strong></p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} bgcolor=" #d3d3d3" width={105}>
                <p><strong><strong>Date of receipt</strong></strong></p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} bgcolor=" #d3d3d3" width={135}>
                <p><strong><strong>Reported to RBI on*</strong></strong></p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} bgcolor=" #d3d3d3" width={69}>
                <p><strong><strong>Delay, if any</strong></strong></p>
              </td>
            </tr>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={50}>
                <p>1.</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={214}>
                <p>{this.props.dataCaptured && this.props.dataCaptured.TAnameOfRemitter}</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={96}>
                <p>{this.props.dataCaptured && this.props.dataCaptured.TAtotalAmount}</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={105}>
                <p>{this.props.dataCaptured && this.props.dataCaptured.dateOfReportingRbiTA}</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={135}>
                <p>{this.props.dataCaptured && this.props.dataCaptured.reportRbiTA}</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={69}>
                <p>{this.props.dataCaptured && this.props.dataCaptured.TAdelayIfAny}</p>
              </td>
            </tr>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} colSpan={6} width={671}>
                <p>&nbsp;</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p><strong><u><strong>&nbsp;</strong></u></strong></p>
        <p style={{textAlign: 'center'}}><strong><u><strong>Table B</strong></u></strong></p>
        <p><strong><u><strong>&nbsp;</strong></u></strong></p>
        <table style={{borderColor: 'black', borderCollapse: 'collapse'}} border=".5">
          <tbody>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} bgcolor=" #d3d3d3" width={197}>
                <p><strong><strong>Name of investor</strong></strong></p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} bgcolor=" #d3d3d3" width={94}>
                <p><strong><strong>Date of allotment of shares</strong></strong></p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} bgcolor=" #d3d3d3" width={101}>
                <p><strong><strong>Number of shares allotted</strong></strong></p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} bgcolor=" #d3d3d3" width={101}>
                <p><strong><strong>Amount for which shares allotted</strong></strong></p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} bgcolor=" #d3d3d3" width={91}>
                <p><strong><strong>Reported to RBI on*</strong></strong></p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} bgcolor=" #d3d3d3" width={91}>
                <p><strong><strong>Delay, if any</strong></strong></p>
              </td>
            </tr>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={197}>
                <p>&nbsp; {this.props.dataCaptured && this.props.dataCaptured.TBnameOfInvestor}</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={94}>
                <p>&nbsp; {this.props.dataCaptured && this.props.dataCaptured.dateOfAllotmentOfSharesTB}</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={101}>
                <p>&nbsp; {this.props.dataCaptured && this.props.dataCaptured.TBnoOfSharesAlloted}</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={101}>
                <p>&nbsp; {this.props.dataCaptured && this.props.dataCaptured.TBamountForWhichSharesAlloted}</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={91}>
                <p>&nbsp; {this.props.dataCaptured && this.props.dataCaptured.dateOfReportingRBITB}</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={91}>
                <p>&nbsp; {this.props.dataCaptured && this.props.dataCaptured.TBdelayIfAny}</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p><strong><u><strong>&nbsp;</strong></u></strong></p>
        <p style={{textAlign: 'center'}}><strong><u><strong>Table C - </strong></u></strong><u>In case there is excess share application money</u></p>
        <p>&nbsp;</p>
        <table style={{borderColor: 'black', borderCollapse: 'collapse'}} border=".5">
          <tbody>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} bgcolor=" #d3d3d3" width={50}>
                <p><strong><strong>S. No.</strong></strong></p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} bgcolor=" #d3d3d3" width={143}>
                <p><strong><strong>Name of remitter</strong></strong></p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} bgcolor=" #d3d3d3" width={76}>
                <p><strong><strong>Total amount (INR)</strong></strong></p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} bgcolor=" #d3d3d3" width={76}>
                <p><strong><strong>Date of receipt</strong></strong></p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} bgcolor=" #d3d3d3" width={95}>
                <p><strong><strong>Excess share application money</strong></strong></p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} bgcolor=" #d3d3d3" width={95}>
                <p><strong><strong>Date of refund of excess share application money</strong></strong></p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} bgcolor=" #d3d3d3" width={62}>
                <p><strong><strong>Amount in forex</strong></strong></p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} bgcolor=" #d3d3d3" width={74}>
                <p><strong><strong>RBI approval letter date</strong></strong></p>
              </td>
            </tr>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={197}>
                <p>&nbsp;  {this.props.dataCaptured &&this.props.dataCaptured.TCslNo}</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={94}>
                <p>&nbsp; {this.props.dataCaptured &&this.props.dataCaptured.TcnameOfRemitter}</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={101}>
                <p>&nbsp; {this.props.dataCaptured && this.props.dataCaptured.TCtotalAmountINR}</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={101}>
                <p>&nbsp; {this.props.dataCaptured && this.props.dataCaptured.dateOfRecieptTC}</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={91}>
                <p>&nbsp; {this.props.dataCaptured && this.props.dataCaptured.TCExcessShareApplicationMoney}</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={91}>
                <p>&nbsp; {this.props.dataCaptured && this.props.dataCaptured.dateOfRefundTC}</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={91}>
                <p>&nbsp; {this.props.dataCaptured && this.props.dataCaptured.TCamountInForex}</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={91}>
                <p>&nbsp; {this.props.dataCaptured && this.props.dataCaptured.rbiLetterTC}</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p><strong><u><strong>&nbsp;</strong></u></strong></p>
        <p><strong><u><strong>&nbsp;</strong></u></strong></p>
        <p><strong><u><strong>&nbsp;</strong></u></strong></p>
        <p style={{textAlign: 'center'}}><strong><u><strong>Table D - </strong></u></strong>Authorised capital</p>
        <p>&nbsp;</p>
        <table style={{borderColor: 'black', borderCollapse: 'collapse'}} border=".5">
          <tbody>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} bgcolor=" #d3d3d3" width={53}>
                <p><strong><strong>S. No.</strong></strong></p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} bgcolor=" #d3d3d3" width={203}>
                <p><strong><strong>Date</strong></strong></p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} bgcolor=" #d3d3d3" width={128}>
                <p><strong><strong>Authorised capital</strong></strong></p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} bgcolor=" #d3d3d3" width={128}>
                <p><strong><strong>With effect from </strong></strong></p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} bgcolor=" #d3d3d3" width={128}>
                <p><strong><strong>Date of Board meeting</strong></strong></p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} bgcolor=" #d3d3d3" width={73}>
                <p><strong><strong>Date of filing with RoC</strong></strong></p>
              </td>
            </tr>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={53}>
                <p>&nbsp; {this.props.dataCaptured && this.props.dataCaptured.ACSlNo}</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={203}>
                <p>&nbsp; {this.props.dataCaptured && this.props.dataCaptured.dateTI}</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={128}>
                <p>&nbsp; {this.props.dataCaptured && this.props.dataCaptured.nameACenterAuthorizationZCapital}</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={128}>
                <p>&nbsp; {this.props.dataCaptured && this.props.dataCaptured.ACwithEffectFrom}</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={128}>
                <p>&nbsp; {this.props.dataCaptured && this.props.dataCaptured.ACdateOfBoardMeeting}</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={73}>
                <p>&nbsp; {this.props.dataCaptured && this.props.dataCaptured.dateOfFillingROC}</p>
              </td>
            </tr>
            <tr>
             
            </tr>
          </tbody>
        </table>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <table style={{borderColor: 'black', borderCollapse: 'collapse'}} border=".5">
          <tbody>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={529}>
                <p>Copies of balance sheet during the period of receipt of share application money and allotment of shares</p>
                <p>&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={517}>
                <p>Copy of Financial Statements for the year ended 31-03-2008</p>
              </td>
            </tr>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={529}>
                <p>Nature of contravention and reasons for contravention</p>
                <p>&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={517}>
                <p>Please refer to <strong><strong>Annexure 1</strong></strong></p>
              </td>
            </tr>
          </tbody>
        </table>
        <p><strong><strong>&nbsp;</strong></strong></p>
        <p><strong><strong>&nbsp;</strong></strong></p>
        <p><strong><strong>Annexure 3A</strong></strong></p>
        <p><strong><strong>&nbsp;</strong></strong></p>
        <table style={{borderColor: 'black', borderCollapse: 'collapse'}} border=".5">
          <tbody>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={65}>
                <p><strong><strong>Sl. No.</strong></strong></p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={273}>
                <p><strong><strong>Name of the Foreign Investor</strong></strong></p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={233}>
                <p><strong><strong>Country of Incorporation</strong></strong></p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={507}>
                <p><strong><strong>Nature of Business</strong></strong></p>
              </td>
            </tr>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={65}>
                <p><strong><strong>A</strong></strong></p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={273}>
                <p><strong><strong>Equity Share Capital</strong></strong></p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={233}>
                <p>&nbsp; not known by aditya</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={507}>
                <p>&nbsp; not known by aditya </p>
              </td>
            </tr>
            <tr>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={65}>
                <p>&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={273}>
                <p>&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={233}>
                <p>&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={507}>
                <p>&nbsp;</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>&nbsp;&nbsp;</p>
      </div>
             </div>






             <div id="loA" style={{display:"none"     }} >
             <table style={{borderColor: 'black', borderCollapse: 'collapse'}} border=".5">
        <tbody>
          <tr>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} colSpan={3} width={721}>
              <p style={{textAlign: 'center'}}><strong>Branch Office / Liaison Office</strong></p>
            </td>
          </tr>
          <tr>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} colSpan={3} width={721}>
              <p style={{textAlign: 'center'}}>Details to be furnished along with application for compounding of contravention relating to Branch/Liaison Office in India</p>
            </td>
          </tr>
          <tr>
            <td style={{  display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,textAlign: 'center'}} width={46}>
              <p style={{width:"30px" ,paddingLeft: '5px'}}>• &nbsp;&nbsp;</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={337}>
              <p style={{paddingLeft: '5px'}}>Name of the applicant</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={337}>
              <p style={{paddingLeft: '5px'}}>a&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td style={{  display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,textAlign: 'center'}} width={46}>
              <p style={{width:"30px" ,paddingLeft: '5px'}}>• &nbsp;&nbsp;</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={337}>
              <p style={{paddingLeft: '5px'}}>Date of incorporation</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={337}>
              <p style={{paddingLeft: '5px'}}>b&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td style={{  display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,textAlign: 'center'}} width={46}>
              <p style={{width:"30px" ,paddingLeft: '5px'}}>• &nbsp;&nbsp;</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={337}>
              <p style={{paddingLeft: '5px'}}>Income-tax PAN</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={337}>
              <p style={{paddingLeft: '5px'}}>c&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td style={{  display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,textAlign: 'center'}} width={46}>
              <p style={{width:"30px" ,paddingLeft: '5px'}}>• &nbsp;&nbsp;</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={337}>
              <p style={{paddingLeft: '5px'}}>Nature of activities under taken (Please give NIC code - 1987)</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={337}>
              <p style={{paddingLeft: '5px'}}>d&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td style={{  display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,textAlign: 'center'}} width={46}>
              <p style={{width:"30px" ,paddingLeft: '5px'}}>• &nbsp;&nbsp;</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={337}>
              <p style={{paddingLeft: '5px'}}>Date of approval for opening of Liaison Office/ Branch Office</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={337}>
              <p style={{paddingLeft: '5px'}}>e&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td style={{  display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,textAlign: 'center'}} width={46}>
              <p style={{width:"30px" ,paddingLeft: '5px'}}>• &nbsp;&nbsp;</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={337}>
              <p style={{paddingLeft: '5px'}}>Validity period of the approval</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={337}>
              <p style={{paddingLeft: '5px'}}>f&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td style={{  display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,textAlign: 'center'}} width={46}>
              <p style={{width:"30px" ,paddingLeft: '5px'}}>• &nbsp;&nbsp;</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={337}>
              <p style={{paddingLeft: '5px'}}>Income and expenditure of the LO/BO</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={337}>
              <p style={{paddingLeft: '5px'}}>g&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td style={{  display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,textAlign: 'center'}} width={46}>
              <p style={{width:"30px" ,paddingLeft: '5px'}}>• &nbsp;&nbsp;</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={337}>
              <p style={{paddingLeft: '5px'}}>Dates of submission of Annual activity Certificates</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={337}>
              <p style={{paddingLeft: '5px'}}>h&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td style={{  display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,textAlign: 'center'}} width={46}>
              <p style={{width:"30px" ,paddingLeft: '5px'}}>• &nbsp;&nbsp;</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={337}>
              <p style={{paddingLeft: '5px'}}>Nature of contravention and reasons for the contravention</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={337}>
              <p style={{paddingLeft: '5px'}}>i&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td style={{  display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,textAlign: 'center'}} width={46}>
              <p style={{width:"30px" ,paddingLeft: '5px'}}>• &nbsp;&nbsp;</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={337}>
              <p style={{paddingLeft: '5px'}}>All supporting documents may be submitted</p>
            </td>
            <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse"}} width={337}>j&nbsp;</td>
          </tr>
        </tbody>
      </table>
             </div>






             <div id="odiA" style={{display:"none"}}>
             <table style={{borderColor: 'black', borderCollapse: 'collapse'}} border=".5">
          <tbody>
            <tr style={{height: '35.8px'}}>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35.8px'}} colSpan={3} width={721}>
                <p style={{textAlign: 'center'}}><strong><strong>ODI</strong></strong></p>
              </td>
            </tr>
            <tr style={{height: '35px'}}>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px'}} colSpan={3} width={721}>
                <p style={{textAlign: 'center'}}>Details to be furnished along with application for compounding of contravention relating to Overseas Investment</p>
              </td>
            </tr>
            <tr style={{height: '35px'}}>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px', textAlign: 'center'}} width={46}>
                <p style={{paddingLeft: '5px'}}>• &nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>Name of the applicant</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>&nbsp;</p>
              </td>
            </tr>
            <tr style={{height: '35px'}}>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px', textAlign: 'center'}} width={46}>
                <p style={{paddingLeft: '5px'}}>• &nbsp;&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>Date of incorporation</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>&nbsp;</p>
              </td>
            </tr>
            <tr style={{height: '35px'}}>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px', textAlign: 'center'}} width={46}>
                <p style={{paddingLeft: '5px'}}>• &nbsp;&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>Income-tax PAN</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>&nbsp;</p>
              </td>
            </tr>
            <tr style={{height: '48px'}}>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '48px', textAlign: 'center'}} width={46}>
                <p style={{paddingLeft: '5px'}}>• &nbsp;&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '48px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>Nature of activities under taken (Please give NIC code - 1987)</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '48px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>&nbsp;</p>
              </td>
            </tr>
            <tr style={{height: '35px'}}>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px', textAlign: 'center'}} width={46}>
                <p style={{paddingLeft: '5px'}}>• &nbsp;&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>Name of Overseas entity</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>&nbsp;</p>
              </td>
            </tr>
            <tr style={{height: '35px'}}>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px', textAlign: 'center'}} width={46}>
                <p style={{paddingLeft: '5px'}}>• &nbsp;&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>Date of incorporation of overseas entity</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>&nbsp;</p>
              </td>
            </tr>
            <tr style={{height: '35px'}}>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px', textAlign: 'center'}} width={46}>
                <p style={{paddingLeft: '5px'}}>• &nbsp;&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>Nature of activities under taken by overseas entity</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>&nbsp;</p>
              </td>
            </tr>
            <tr style={{height: '35px'}}>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px', textAlign: 'center'}} width={46}>
                <p style={{paddingLeft: '5px'}}>• &nbsp;&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>Nature of entity- WOS/JV</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>&nbsp;</p>
              </td>
            </tr>
            <tr style={{height: '48px'}}>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '48px', textAlign: 'center'}} width={46}>
                <p style={{paddingLeft: '5px'}}>• &nbsp;&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '48px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>Details of remittance sent- Date of remittance; Amount in FCY and in INR</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '48px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>&nbsp;</p>
              </td>
            </tr>
            <tr style={{height: '35px'}}>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px', textAlign: 'center'}} width={46}>
                <p style={{paddingLeft: '5px'}}>• &nbsp;&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>Details of other financial Commitment</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>&nbsp;</p>
              </td>
            </tr>
            <tr style={{height: '35px'}}>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px', textAlign: 'center'}} width={46}>
                <p style={{paddingLeft: '5px'}}>• &nbsp;&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>Details of UIN applied and received</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>&nbsp;</p>
              </td>
            </tr>
            <tr style={{height: '35px'}}>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px', textAlign: 'center'}} width={46}>
                <p style={{paddingLeft: '5px'}}>• &nbsp;&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>Date of receipt of share certificate</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>&nbsp;</p>
              </td>
            </tr>
            <tr style={{height: '35px'}}>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px', textAlign: 'center'}} width={46}>
                <p style={{paddingLeft: '5px'}}>• &nbsp;&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>Approval of other regulators if required</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>&nbsp;</p>
              </td>
            </tr>
            <tr style={{height: '48px'}}>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '48px', textAlign: 'center'}} width={46}>
                <p style={{paddingLeft: '5px'}}>• &nbsp;&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '48px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>Details of APRs submitted: For the period ended; date of submission</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '48px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>&nbsp;</p>
              </td>
            </tr>
            <tr style={{height: '35px'}}>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px', textAlign: 'center'}} width={46}>
                <p style={{paddingLeft: '5px'}}>• &nbsp;&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>Nature of contravention and reasons for the contravention</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '35px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>&nbsp;</p>
              </td>
            </tr>
            <tr style={{height: '34px'}}>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '34px', textAlign: 'center'}} width={46}>
                <p style={{paddingLeft: '5px'}}>• &nbsp;&nbsp;</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '34px'}} width={337}>
                <p style={{paddingLeft: '5px'}}>All supporting documents may be submitted</p>
              </td>
              <td style={{display:"inlineBlock" , verticalAlign:"middle",   border:"1px solid black"  , borderCollapse:"collapse" ,height: '34px'}} width={337}>&nbsp;</td>
            </tr>
          </tbody>
        </table>
             </div>








             <div id="undertaking" style={{display:"none"}}>
             <div >
        <p style={{textAlign: 'right'}}><strong>Annexure&nbsp;4</strong></p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p><span style={{backgroundColor: '#ffff00'}}><strong><em><strong><em>&lt;&lt;Insert date&gt;&gt;</em></strong></em></strong></span></p>
        <p>To</p>
        <p>The Compounding Authority</p>
        <p>Cell for Effective Implementation of FEMA (CEFA)</p>
        <p>Reserve Bank of India</p>
        <p>Foreign Exchange Department</p>
        <p><span style={{backgroundColor: '#ffff00'}}>XXXXXXX&nbsp;</span>Regional Office</p>
        <p><span style={{backgroundColor: '#ffff00'}}>[Insert Address]</span></p>
        <p>Dear Sir/ Madam,</p>
        <p><strong><strong>Sub: Application for Compounding – Undertaking</strong></strong></p>
        <hr style={{backgroundColor: 'black', height: '0.8px'}} />
        <p>We, <span style={{backgroundColor: '#ffff00'}}><strong><strong>[INSERT COMPANY NAME]</strong></strong></span>hereby confirm/declare that we are not under any enquiry/investigation/adjudication by any agency such as Directorate of Enforcement, CBI etc. as on the date of this application.</p>
        <p>We further undertake to inform to the Compounding Authority / Reserve Bank of India immediately, in writing, if any enquiry/investigation/adjudication proceedings are initiated by any agency against us at any time hereafter but on or before the date of issuance of the compounding order in respect of the compounding application filed by us.</p>
        <p>We further undertake and confirm that no appeal has been filed by us under section 17 or section 19 of FEMA, 1999.</p>
        <p>Yours sincerely,</p>
        <p><strong><strong>For </strong></strong><span style={{backgroundColor: '#ffff00'}}><strong><strong>[Insert Company Name]</strong></strong></span></p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p><span style={{backgroundColor: '#ffff00'}}><strong><strong>XXXXXXXXXX</strong></strong></span></p>
        <p><strong><strong>[Authorised Signatory / Director]</strong></strong></p>
        <p><strong><strong>Place: </strong></strong><span style={{backgroundColor: '#ffff00'}}><strong><strong>XXXXXXXXXX</strong></strong></span></p>
        <p><strong><strong>Date: </strong></strong><span style={{backgroundColor: '#ffff00'}}><strong><strong>XXXXXXX</strong></strong></span></p>
      </div>
             </div>








             <div id="letterOfA" style={{width: '40%' ,display:"none"}}>
        <p style={{textAlign: 'right'}}><strong>Annexure&nbsp;5</strong></p>
        <p><strong><strong>&nbsp;</strong></strong></p>
        <p>25 September 2019</p>
        <p>&nbsp;</p>
        <p>To</p>
        <p>The Chief General Manager in Charge</p>
        <p>Cell for Effective Implementation of FEMA (CEFA)</p>
        <p>Foreign Exchange Department</p>
        <p>Reserve Bank of India</p>
        <p>Central Office, CEFA,</p>
        <p>Central Office Building</p>
        <p>11<sup>th</sup>&nbsp;Floor, Fort, Mumbai 400001</p>
        <p>&nbsp;</p>
        <p>Dear Sir/ Madam,</p>
        <p><strong><strong>&nbsp;</strong></strong></p>
        <p><strong><strong>Sub: Application for Compounding &nbsp;- Letter of Authority</strong></strong></p>
        <p><strong><strong>&nbsp;</strong></strong></p>
        <p>We hereby authorise <span style={{backgroundColor: '#ffff00'}}><strong><strong>XXXXXXXXXXX</strong></strong></span>&nbsp;having their office at <span style={{backgroundColor: '#ffff00'}}><strong><strong>XXXXXXXXXXX</strong></strong></span>&nbsp;(referred to as “Authorised Representatives”), to appear and represent us before the Reserve Bank of India (‘RBI’), in connection with our application for compounding under the Foreign Exchange Management Act, 1999 (the ‘Application’).</p>
        <p>Further, we also authorize them to make necessary submissions, representations and amendments, as may be required by the RBI, and to receive all notices or communications including Order, as may be addressed to us, and generally to do all acts, deeds and things deemed necessary for the purpose of the application on our behalf.</p>
        <p>We hereby undertake to confirm, approve, ratify, adopt and abide by all the acts and statements made by our Authorised Representatives in connection with the Application and their explanations and statements will be binding on us.</p>
        <p>&nbsp;</p>
        <p>Yours sincerely,</p>
        <p><strong><strong>For Fomento Resources Private Limited</strong></strong></p>
        <p><strong><strong>&nbsp;</strong></strong></p>
        <p><strong><strong>&nbsp;</strong></strong></p>
        <p><strong><strong>&nbsp;</strong></strong></p>
        <p><span style={{backgroundColor: '#ffff00'}}><strong><strong>XXXXXXXXXX</strong></strong></span><strong><strong>&nbsp;</strong></strong></p>
        <p><strong><strong>[Authorised Signatory / Director]</strong></strong></p>
        <p><strong><strong>Place: &nbsp;</strong></strong><span style={{backgroundColor: '#ffff00'}}><strong><strong>XXXXXXXXXX</strong></strong></span></p>
      </div>






   
      <div id="ecs" style={{width: '40%' ,display:"none"}}>
        <p style={{textAlign: 'right'}}><strong>Annexure 6</strong></p>
        <p><strong><u><strong>&nbsp;</strong></u></strong></p>
        <p style={{textAlign: 'center'}}><strong><u><strong>ELECTRONIC CLEARING SERVICE (ECS)</strong></u></strong></p>
        <p style={{textAlign: 'center'}}><strong><u><strong>MANDATE FORM</strong></u></strong></p>
        <p>&nbsp;</p>
        <table style={{borderColor: 'black', borderCollapse: 'collapse', border: '1px solid', borderStyle: 'dashed'}}>
          <tbody>
            <tr style={{height: '35px'}}>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={69}>
                <p><strong><strong>Sr. No.</strong></strong></p>
              </td>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} colSpan={2} width={322}>
                <p><strong><strong>Particulars</strong></strong></p>
              </td>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={346}>
                <p><strong><strong>Details</strong></strong></p>
              </td>
            </tr>
            <tr style={{height: '35px'}}>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={69}>
                <p>1.&nbsp;</p>
              </td>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} colSpan={2} width={322}>
                <p>Name of the Party (Beneficiary)</p>
              </td>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={346}>
                <p><span style={{backgroundColor: '#ffff00'}}>XXXXXXXX</span></p>
              </td>
            </tr>
            <tr style={{height: '35px'}}>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={69}>
                <p>2.&nbsp;</p>
              </td>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} colSpan={2} width={322}>
                <p>Particulars of the Bank Account</p>
              </td>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={346}>
                <p><span style={{backgroundColor: '#ffff00'}}>&nbsp;</span></p>
              </td>
            </tr>
            <tr style={{height: '35px'}}>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={69}>
                <p>&nbsp;</p>
              </td>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={52}>
                <p>A.&nbsp;</p>
              </td>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={270}>
                <p>Name of the Bank</p>
              </td>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={346}>
                <p><span style={{backgroundColor: '#ffff00'}}>XXXXXXXX</span></p>
              </td>
            </tr>
            <tr style={{height: '35px'}}>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={69}>
                <p>&nbsp;</p>
              </td>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={52}>
                <p>B.&nbsp;</p>
              </td>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={270}>
                <p>Name of the Branch</p>
              </td>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={346}>
                <p><span style={{backgroundColor: '#ffff00'}}>XXXXXXXX</span></p>
              </td>
            </tr>
            <tr style={{height: '35px'}}>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={69}>
                <p>&nbsp;</p>
              </td>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={52}>
                <p>&nbsp;</p>
              </td>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={270}>
                <p>Address</p>
              </td>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={346}>
                <p><span style={{backgroundColor: '#ffff00'}}>XXXXXXXX</span></p>
              </td>
            </tr>
            <tr style={{height: '35px'}}>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={69}>
                <p>&nbsp;</p>
              </td>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={52}>
                <p>&nbsp;</p>
              </td>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={270}>
                <p>Telephone no.</p>
              </td>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={346}>
                <p><span style={{backgroundColor: '#ffff00'}}>XXXXXXXX</span></p>
              </td>
            </tr>
            <tr style={{height: '48px'}}>
              <td style={{height: '48px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={69}>
                <p>&nbsp;</p>
              </td>
              <td style={{height: '48px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={52}>
                <p>C.&nbsp;</p>
              </td>
              <td style={{height: '48px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={270}>
                <p>9 Digit MICR Code Number ((as appearing on the cheque issued by the Bank)</p>
              </td>
              <td style={{height: '48px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={346}>
                <p><span style={{backgroundColor: '#ffff00'}}>XXXXXXXX</span></p>
              </td>
            </tr>
            <tr style={{height: '35px'}}>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={69}>
                <p>&nbsp;</p>
              </td>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={52}>
                <p>D.&nbsp;</p>
              </td>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={270}>
                <p>IFSC Code</p>
              </td>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={346}>
                <p><span style={{backgroundColor: '#ffff00'}}>XXXXXXXX</span></p>
              </td>
            </tr>
            <tr style={{height: '48px'}}>
              <td style={{height: '48px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={69}>
                <p>&nbsp;</p>
              </td>
              <td style={{height: '48px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={52}>
                <p>E.&nbsp;</p>
              </td>
              <td style={{height: '48px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={270}>
                <p>Type of Account (Strike Off whichever not applicable)</p>
              </td>
              <td style={{height: '48px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={346}>
                <p><span style={{backgroundColor: '#ffff00'}}>XXXXXXXX</span></p>
              </td>
            </tr>
            <tr style={{height: '48px'}}>
              <td style={{height: '48px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={69}>
                <p>&nbsp;</p>
              </td>
              <td style={{height: '48px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={52}>
                <p>F.&nbsp;</p>
              </td>
              <td style={{height: '48px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={270}>
                <p>Account No (as appearing on the cheque book issued by the Bank)</p>
              </td>
              <td style={{height: '48px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={346}>
                <p><span style={{backgroundColor: '#ffff00'}}>XXXXXXXX</span></p>
              </td>
            </tr>
            <tr style={{height: '35px'}}>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} width={69}>
                <p>&nbsp;</p>
              </td>
              <td style={{height: '35px', border: '1px solid', borderStyle: 'dashed', paddingLeft: '5px'}} colSpan={3} width={669}>
                <p><span style={{backgroundColor: '#ffff00'}}>(Please attach photocopy of a blank cheque for verification of the bank account details)</span></p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>&nbsp;</p>
        <p>I/We hereby declare that the particulars given above are correct and complete. If the transaction is delayed or not effected at all for reasons of incomplete or incorrect information, I/We would not hold the user institution responsible.</p>
        <p>&nbsp;</p>
        <p>Yours sincerely,</p>
        <p><strong><strong>For </strong></strong><span style={{backgroundColor: '#ffff00'}}><strong><strong>XXXXXXXXXX</strong></strong></span><strong><strong>&nbsp;</strong></strong></p>
        <p><strong><strong>&nbsp;</strong></strong></p>
        <p><strong><strong>&nbsp;</strong></strong></p>
        <p><strong><strong>&nbsp;</strong></strong></p>
        <p><strong><strong>&nbsp;</strong></strong></p>
        <p><span style={{backgroundColor: '#ffff00'}}><strong><strong>XXXXXXXXXX</strong></strong></span><strong><strong>&nbsp;</strong></strong></p>
        <p><strong><strong>[Authorised Signatory / Director]</strong></strong></p>
        <p><strong><strong>Place: &nbsp;</strong></strong><span style={{backgroundColor: '#ffff00'}}><strong><strong>XXXXXXXXXX</strong></strong></span><strong><strong>&nbsp;</strong></strong></p>
      </div>



      </React.Fragment>
    )
  }
}

export default ModulePreview
