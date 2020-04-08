import React from 'react'
import './styles.scss'

export const FancyButton = ({ text }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <button className="button" type="button">
        {text}
        <div className="button__horizontal" />
        <div className="button__vertical" />
      </button>
    </div>
  )
}
