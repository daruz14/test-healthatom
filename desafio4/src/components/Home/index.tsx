'use client'
import { useState } from "react"
import ResourceSelect from "../ResourceSelect"
import QuantityResources from "../QuantityResources"
import OPTIONS from "@/constants/options"
import data, { InfoType } from "@/constants/data"
import Third from "../Third"

export default function Home() {
  const [resource, setResource] = useState<string>("")
  const [resourceQuantity, setResourceQuantity] = useState<number | null>(null)
  const [click, setClick] = useState<boolean>(false)
  const [resourceData, setResourceData] = useState<{[name: string]: InfoType | null}>(data)

  if (resource && click) {
    return (
      <Third
        resource={resource}
        resourceQuantity={resourceQuantity}
        resourceData={resourceData}
        setResource={setResource}
        setResourceQuantity={setResourceQuantity}
        setResourceData={setResourceData}
        setClick={setClick}
        click={click}
        resourceType={OPTIONS[resource]}
      />
    )
    
  }

  return (
    <div className="flex flex-col items-center justify-center h-full w-full gap-3">
      {resource ? <QuantityResources
      quantity={resourceQuantity}
      onChange={(value: number) => setResourceQuantity(value)}
      resourceType={OPTIONS[resource]}
    /> : null}
    
    <ResourceSelect resource={resource} onChange={(value: string) => setResource(value)} />
    {resource ? 
      <div className="flex w-64 justify-end">
        <button
          onClick={() => setClick(true)}
          className="mt-2 p-1 border-2 border-black rounded-md w-32"
        >
          Ingresar
        </button>
      </div> : null}
    </div>
  )
}
