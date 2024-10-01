'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  // as soon as this load redirect to admin panel /admin
  useEffect(() => {
    window.location.href = '/admin'
  }, [])

  

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to My Payload CMS App</h1>
      <p>This is the home page.</p>
      <Link href="/admin" passHref>
        <button style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px'
        }}>
          Go to Admin Panel
        </button>
      </Link>
    </div>
  )
}
