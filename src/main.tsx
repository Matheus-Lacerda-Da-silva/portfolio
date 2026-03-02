import { StrictMode } from 'react'
import { GlobalStyles } from '@mui/material'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme.ts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          html: { width: "100%", height: "100%" },
          body: { 
            margin: 0,
            padding: 0,
            width: "100%",
            minHeight: "100vh"
          },
          "#root": {
            width: "100%",
            minHeight: "100vh"
          }
        }}
      />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
