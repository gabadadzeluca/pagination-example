import PhotoObjectInterface from "../../utils/PhotoObjectInterface"

export default function Posts(props:{
  batchData: PhotoObjectInterface[];
}) {
  const data = props.batchData;
  return (
    <>
      {data.map((obj:PhotoObjectInterface)=>
        <div>
          {obj.id}
          {obj.title}
        </div>
      )}
    </>
  )
}
