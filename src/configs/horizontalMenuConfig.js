import React from "react"
import * as Icon from "react-feather"

const horizontalMenuConfig = [

{
  id: "PDFUpload",
  title: "PDF Upload",
  link : "/pdf-uploader",
  type: "item",

  icon: < Icon.UploadCloud size = {
    20
  }/>,
  permissions: ["admin", "editor"],
  newTab: false
},
{
  id: "MasterData",
  title: "Master Data",
  link : "/pdf-uploader",
  type: "item",

  icon: < Icon.Database size = {
    20
  }/>,
  permissions: ["admin", "editor"],
  newTab: false
},
{
  id: "ComplianceTracker",
  title: "Compliance Tracker",
  link : "/pdf-uploader",
  type: "item",

  icon: < Icon.Trello size = {
    20
  }/>,
  permissions: ["admin", "editor"],
  newTab: false
},
{
  id: "ManagementReports",
  title: "Management Reports",
  link : "/pdf-uploader",
  type: "item",

  icon: < Icon.PieChart size = {
    20
  }/>,
  permissions: ["admin", "editor"],
  newTab: false
},

{
  id: "ODI",
  title: "ODI",
  type: "collapse",
  icon: < Icon.FileText size = {
    20
  }
  />,
  children: [{
    id: 1,
    target: "ODI",
    type: "item",
    title: "ODI",
    navLink: "/odi/odi",
    icon: < Icon.FileText size = {
      12
    }
    />,
    permissions: ["admin", "editor"],
    newTab: false
  }, {
    id: 2,
    target: "ODI",
    type: "item",
    title: "APR",
    navLink: "/odi/AnnualPerformanceReport",
    icon: < Icon.FileText size = {
      12
    }
    />,
    permissions: ["admin", "editor"],
    newTab: false
  }, {
    id: 3,
    target: "ODI",
    type: "item",
    title: "DISINVESTMENT",
    navLink: "/odi/disinvestment",
    icon: < Icon.FileText size = {
      12
    }
    />,
    permissions: ["admin", "editor"],
    newTab: false
  }]
}, 
]

export default horizontalMenuConfig
