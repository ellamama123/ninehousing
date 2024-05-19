import React, { useState, useEffect } from 'react';
import { Tabs } from "antd";
import { useRouter } from 'next/router';

const { TabPane } = Tabs;

export default function Regulation() {
  const [fileContent, setFileContent] = useState('');
  const { locale } = useRouter()

  useEffect(() => {
    let link = locale == 'en' ? '/regulation_en.html' : '/regulation_vn.html'
    fetch(link)
      .then(response => response.text())
      .then(html => setFileContent(html))
      .catch(error => console.error('Error loading file:', error));
  }, [locale]);
  return (
    <div style={{width: '80%', margin: '0 auto'}}>
      <div>
        <div className="doc-content" dangerouslySetInnerHTML={{ __html: fileContent }} />
      </div>
    </div>
  );
}
