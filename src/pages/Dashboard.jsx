import { Layout } from 'antd'
import React from 'react'
import AppLayout from '../Components/Layout'
import AppCard from '../Components/AppCard'

const Dashboard = () => {
  return (
    <div>
      <AppLayout title="Smit">
        <div>
            <h1>This is Card</h1> 
            <AppCard />
        </div>
      </AppLayout>
    </div>
  )
}

export default Dashboard
