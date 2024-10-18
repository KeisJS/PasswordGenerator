import PasswordGenerator from './PasswordGenerator'
import PasswordGeneratorProvider from './PasswordGenerator/PasswordGeneratorProvider'
import { defaultGeneratorsSettings } from './PasswordGenerator/settings.ts'

function App() {

  return (
    <PasswordGeneratorProvider settings={ defaultGeneratorsSettings }>
      <PasswordGenerator />
    </PasswordGeneratorProvider>
  )
}

export default App
