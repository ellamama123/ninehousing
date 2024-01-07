import { MailOutlined, PhoneOutlined } from '@ant-design/icons'
import React from 'react'

export default function Contact() {
  return (
    <div className="contact">
        <div className="phone-icon">
            <PhoneOutlined />
        </div>
        <div className="mail-icon">
            <MailOutlined />
        </div>
    </div>
  )
}
