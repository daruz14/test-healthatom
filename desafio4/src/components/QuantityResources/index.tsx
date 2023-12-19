
type Props = {
  quantity: number | null
  resourceType: string | null
  onChange: (newValue: number) => void
}

export default function QuantityResources(props: Props) {
  const { quantity, onChange, resourceType } = props

  const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const result = event.target.value.replace(/\D/g, '');
    const newValue = result ? Number(result) : 0;
    if (onChange) {
      onChange(newValue);
    }
  }

  return (
    <div className="flex flex-row justify-between w-64">
      <input
        type="text"
        pattern="[0-9]*"
        value={quantity ?? ""}
        onChange={inputOnChange}
        className="mr-2 text-right flex-1 border-2 border-black rounded-md"
      />
      <div className="flex-2 flex mx-2 items-center justify-center">
        <span>{resourceType}</span>
      </div>
      
    </div>
  )
}