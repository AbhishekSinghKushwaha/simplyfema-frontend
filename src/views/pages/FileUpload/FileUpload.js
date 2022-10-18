import React, { useState, useEffect, useRef } from 'react'
import ReactDOM, { unmountComponentAtNode, findDOMNode } from 'react-dom'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button
} from 'reactstrap'
import { useDropzone } from 'react-dropzone'
import PDFImage from '../../../assets/img/icons/pdf.png'
import '../../../assets/scss/plugins/extensions/dropzone.scss'
import '../../../assets/scss/plugins/extensions/sweet-alerts.scss'
import { toast, ToastContainer } from 'react-toastify'
import { UploadCloud, Search, ArrowRightCircle } from 'react-feather'
import { history } from '../../../history'
import SweetAlert from 'react-bootstrap-sweetalert'

function FileUploader (props) {
  let displayText = 'Drop or Click to select files'
  let displaySubText = '(Only .pdf files will be accepted)'
  let buttonElement = ''
  const [files, setFiles] = useState([])
  const {
    acceptedFiles,
    rejectedFiles,
    getRootProps,
    getInputProps
  } = useDropzone({
    accept: 'application/pdf',
    // reject : '*',
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      )
      var reader = new FileReader()
      if (acceptedFiles.length) {
        toast.error({ acceptedFiles })
        // reader.readAsBinaryString(acceptedFiles[0])
      } else {
        toast.error('You can only upload .pdf Files!')
      }
    }
  })

  const thumbs = files.map(file => (
    <div className='dz-thumb' key={file.name}>
      <div className='dz-thumb-inner'>
        <img src={PDFImage} className='dz-img' alt={file.name} />
      </div>
    </div>
  ))
  useEffect(
    () => () => {
      files.forEach(file => {
        displayText = file.name
        URL.revokeObjectURL(file.preview)
      })
    },
    [files]
  )

  const acceptedFilesItems = acceptedFiles.map(file => (
    // <aside className='thumb-container mb-1'>{thumbs}</aside>
    <aside>
      <h4 className='mb-0 mt-2'>{file.path}</h4>
    </aside>
  ))

  let state = { successAlert: false, errorAlert: true }
  const errorAlertRef = useRef(null)

  var node
  let handleAlert = () => {
    alert(node.toString())
      // ReactDOM.unmountComponentAtNode(
    //   (document.querySelector('.sweet-alert '))
    // )
  //  alert( ReactDOM.componenetUn(ReactDOM.findDOMNode(this)));
  }

  const rejectedFilesItems = rejectedFiles.map(file => (
    <SweetAlert
    id="ErrorAlert"
      ref={errorAlertRef => (node = errorAlertRef)}
      key={file.path}
      error
      title='Error'
      show={state.errorAlert}
      onConfirm={handleAlert}
    >
      <p className='sweet-alert-text'>
        {file.path} Not Supported. Please Upload only .pdf Files
      </p>
    </SweetAlert>
  ))

  if (acceptedFilesItems.length > 0) {
    displayText = acceptedFilesItems
    displaySubText = ''
    buttonElement = acceptedFiles.map(file => (
      <Button.Ripple
        className='mr-1 mb-1'
        // onClick={uploadAndParse(file)}
        onClick={() => {
          var formData = new FormData()
          formData.append('file', file)
          fetch('http://52.66.222.93:5000/pdfparseddata', {
            method: 'POST',
            body: formData
          })
            .then(r =>
              r.json().then(data => ({ status: r.status, body: data }))
            )
            .then(obj => alert(JSON.stringify(obj,2))
            )
        }}
        color='relief-primary'
      >
        Proceed
        <ArrowRightCircle size={14} />
      </Button.Ripple>
    ))
  }
  // if (rejectedFilesItems) {
  //   toast.error({ rejectedFilesItems })
  // }

  return (
    <div>
      <section className='pb-1'>
        <div {...getRootProps({ className: 'dropzone py-3 flex-column' })}>
          <input {...getInputProps()}></input>
          <UploadCloud className='text-light' size={50} />
          <h4 className='mb-0 mt-2'>{displayText}</h4>
          <h4 className='mb-0 mt-2'>{displaySubText}</h4>
          {/* <h4 className='mb-0 mt-2'>{acceptedFilesItems}</h4> */}
        </div>
        <aside>{rejectedFilesItems}</aside>
      </section>
      <h4 className='mb-0 mt-2'>{buttonElement}</h4>
    </div>
  )
}

class FileUpload extends React.Component {
  render () {
    return (
      <Card>
        <CardHeader>
          <CardTitle>
            UPLOAD YOUR FORM ODI - PART III DISINVESTMENT PDF
          </CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm='2'></Col>
            <Col sm='8'>
              <FileUploader />
            </Col>
            <Col sm='2'></Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}

export default FileUpload
