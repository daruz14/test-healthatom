import { InfoType } from "@/constants/data";
import { MdDelete } from "@react-icons/all-files/md/MdDelete";


const HEADERS = ['Recurso', 'Cantidad', 'Fecha ingreso', 'Eliminar'];

type Props = {
  resource: string
  resourceData: InfoType | null
  deleteResource: (resource: string) => void
};

export default function ResourcesTable(props: Props) {
  const { resource, resourceData, deleteResource } = props;

  return (
    <div className="flex justify-center items-center w-2/3">
      <table className="w-1/3">
        <thead>
          <tr>
            {HEADERS.map((header) => (<th key={header}>{header}</th>))}
          </tr>
        </thead>
        <tbody>
          {resourceData ? (
              <tr key={resource}>
                <td className="text-center">{resource}</td>
                <td className="text-center">{resourceData.quantity}</td>
                <td className="text-center">{resourceData.startDate}</td>
                <td className="text-center"><button onClick={() => deleteResource(resource)}><MdDelete/></button></td>
              </tr>
            ) : null
          }
        </tbody>
      </table>
    </div>
  )  
}