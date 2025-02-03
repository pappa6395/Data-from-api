import fetchAndTransformUsers from '@/action/api'
import DisplayJson from '@/components/DisplayJson'
import React from 'react'

const page = async () => {

    let data = null
    try {
        data = await fetchAndTransformUsers()
    } catch (err) {
        console.error('Error fetching and transforming users:', err)
        return null
    }
    

  return (

    <div>
        <DisplayJson data={data ?? null}/>
    </div>

  )
}

export default page