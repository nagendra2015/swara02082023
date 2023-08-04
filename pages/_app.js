
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

import {SSRProvider} from 'react-bootstrap';


function MyApp({ Component, pageProps }) {

  return(
<SSRProvider>
<Component {...pageProps} />
</SSRProvider>
  )
  //return <Component {...pageProps} />
}

export default MyApp
