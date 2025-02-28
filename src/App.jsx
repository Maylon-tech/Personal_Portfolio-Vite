import './App.css'
import Hero from './components/Layouts/hero/Hero'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function App() {

  return (
    <div className="App">
        <Hero />

        <div>
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="filled" severity="success">
              This the Nemoto Alert of Job Searching Path....
            </Alert>
            
          </Stack>
        </div>
    </div>
  )
}

export default App
