import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const HomeSimple: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-peach-50 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-pink-800">BabyCare Dashboard</h1>
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-pink-600 hover:text-pink-800 hover:bg-pink-50 rounded-lg transition-colors"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              <span>Back to Landing</span>
            </button>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-pink-100 to-peach-100 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-pink-800 mb-4">Welcome to BabyCare Dashboard!</h2>
              <p className="text-pink-700">
                This is a simplified version of the dashboard. The routing is working correctly!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border border-pink-200 rounded-lg p-4">
                <h3 className="font-semibold text-pink-800 mb-2">Dashboard</h3>
                <p className="text-sm text-gray-600">View baby's health stats and quick actions</p>
              </div>
              <div className="bg-white border border-pink-200 rounded-lg p-4">
                <h3 className="font-semibold text-pink-800 mb-2">Vaccinations</h3>
                <p className="text-sm text-gray-600">Track vaccination schedule and history</p>
              </div>
              <div className="bg-white border border-pink-200 rounded-lg p-4">
                <h3 className="font-semibold text-pink-800 mb-2">Health Records</h3>
                <p className="text-sm text-gray-600">Access medical records and appointments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSimple 