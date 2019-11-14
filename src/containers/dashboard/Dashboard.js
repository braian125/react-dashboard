import React from 'react'
import Header from './layout/Header'
import Main from './../../views/Main'

const Dashboard = () => (
  <div>
    <Header />
    <div className="container-fluid">
      <Main />
    </div>
  </div>
)

export default Dashboard