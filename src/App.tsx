import PasswordGenerator from './features/PasswordGenerator'
import PasswordGeneratorProvider from '@/features/PasswordGenerator/PasswordGeneratorProvider'
import { defaultGeneratorsSettings } from '@/features/PasswordGenerator/settings.ts'

function App() {

  return (
    <PasswordGeneratorProvider settings={ defaultGeneratorsSettings }>
      <PasswordGenerator />
    </PasswordGeneratorProvider>
  )
}

export default App
