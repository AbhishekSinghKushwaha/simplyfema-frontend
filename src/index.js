import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Auth0Provider } from './authServices/auth0/auth0Service'
import config from './authServices/auth0/auth0Config.json'
import { IntlProviderWrapper } from './utility/context/Internationalization'
import { Layout } from './utility/context/Layout'
import * as serviceWorker from './serviceWorker'
import { store } from './redux/storeConfig/store'
// import Spinner from "./components/Main/spinner/Fallback-spinner"
import { Spinner } from 'reactstrap'
import './index.scss'
import './@fake-db'
import logo from './assets/img/logo/vuesax-logo.png'

const LazyApp = lazy(() => import('./App'))

// configureDatabase()

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin + process.env.REACT_APP_PUBLIC_PATH}
  >
    <Provider store={store}>
      <Suspense
        fallback={
          <div className='fallback-spinner vh-100'>
            <img className='fallback-logo' width={180} src={logo} alt='logo' />
            <div className='loading'>
              <Spinner type='grow' color='primary' size='lg' />
            </div>
          </div>
        }
      >
        <Layout>
          <IntlProviderWrapper>
            <LazyApp />
          </IntlProviderWrapper>
        </Layout>
      </Suspense>
    </Provider>
  </Auth0Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
