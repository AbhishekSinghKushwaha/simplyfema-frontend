import React from "react"
import BreadCrumbsPage from "../../Main/breadCrumbs/BreadCrumb"
import BreadcrumbsDefault from "./BreadcrumbsDefault"
import BreadCrumbStyles from "./BreadcrumbStyles"
import BreadCrumbAlignment from "./BreadcrumbAlignment"
import Prism from "prismjs"
import 'prismjs/components/prism-jsx'

class BreadCrumbs extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }
  render() {
    return (
      <React.Fragment>
        <BreadCrumbsPage
          breadCrumbTitle="Breadcrumbs"
          breadCrumbParent="Components"
          breadCrumbActive="Breadcrumbs"
        />
        <section id="component-breadcrumbs">
          <BreadcrumbsDefault />
          <BreadCrumbStyles />
        </section>
        <section id="breadcrumb-alignment">
          <BreadCrumbAlignment />
        </section>
      </React.Fragment>
    )
  }
}
export default BreadCrumbs
