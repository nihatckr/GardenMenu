import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'
import ReactDOM from 'react-dom/client'
import './styles/main.css'
import App from './App'
import { apolloClient } from './libs/apolloClient'
import { GlobalStyle, theme } from './styles/theme'



ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={apolloClient}>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </ApolloProvider>,
)
