import { DepartmentSummary } from '@/types/types'
import React from 'react'

const DisplayJson = ({data}: {data: Record<string, DepartmentSummary>}) => {

  return (

    <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        
    </div>

  )
}

export default DisplayJson