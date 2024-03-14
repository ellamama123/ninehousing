import { MailOutlined, PhoneOutlined } from '@ant-design/icons'
import React from 'react'

export default function Contact() {
  return (
    <div className="contact">
        <div className="phone-icon">
          <a href="tel:0968071393">
            <PhoneOutlined />
          </a>
        </div>
        <div className="mail-icon">
          <a href="mailto:Ninehousing99@mail.com">
            <MailOutlined />
          </a>
        </div>
    </div>
  )
}
