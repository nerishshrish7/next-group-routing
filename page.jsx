import React from 'react'
import Link from 'next/link';

const page = () => {
  return (
    <>
    <h1>Welcome to dashboard page.</h1>
    <Link href='/'>Go to Home</Link>
    </>
  )
}

export default page
