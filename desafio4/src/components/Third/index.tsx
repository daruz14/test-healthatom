import QuantityResources from "../QuantityResources"
import ResourceSelect from "../ResourceSelect"
import ResourcesTable from "../ResourcesTable"
import { InfoType } from "@/constants/data"

type Props = {
  resource: string,
  resourceQuantity: number | null,
  resourceData: {[name: string]: InfoType | null},
  setResource: (value: string) => void,
  setResourceQuantity: (value: number) => void,
  setResourceData: (value: {[name: string]: InfoType | null}) => void,
  setClick: (value: boolean) => void,
  click: boolean
  resourceType: string
}

export default function Third(props: Props) {
  const {resource, resourceType, resourceQuantity, resourceData, setResource, setResourceQuantity, setResourceData, setClick, click} = props

  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <div className="flex flex-row gap-3 mb-5">
        <ResourceSelect resource={resource} onChange={(value: string) => setResource(value)} />
        <QuantityResources
          quantity={resourceQuantity}
          onChange={(value: number) => setResourceQuantity(value)}
          resourceType={resourceType}
        />
    
        <button
          onClick={() => setClick(true)}
          className="p-2 border-2 border-black rounded-md w-64"
        >Ingresar</button>
      </div>
      <ResourcesTable
        resource={resource}
        resourceData={resourceData[resource]}
        deleteResource={(resourceType: string) => {
          setResourceData({
            ...resourceData,
            [resourceType]: null
          })
        }
      }/>
    </div>
  )
}