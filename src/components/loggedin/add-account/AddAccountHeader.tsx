import { ArrowLeft, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'

const AddAccountHeader = () => {
  return (
    <header className="bg-gray-800/50 backdrop-blur-md border-b border-gray-700">
        <div className="px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to={'/account'}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Accounts</span>
              </Link>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Lock className="w-4 h-4" />
              <span>Secure Connection</span>
            </div>
          </div>
        </div>
      </header>
  )
}

export default AddAccountHeader