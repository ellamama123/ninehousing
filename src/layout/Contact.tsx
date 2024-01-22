import { MailOutlined, PhoneOutlined } from '@ant-design/icons'
import React from 'react'

export default function Contact() {
  return (
    <div className="contact">
        <div className="phone-icon">
          <a href="tel:0918374230">
            <PhoneOutlined />
          </a>
        </div>
        <div className="mail-icon">
          <a href="mailto:Namtoong@gmail.com">
            <MailOutlined />
          </a>
        </div>
    </div>
  )
}
