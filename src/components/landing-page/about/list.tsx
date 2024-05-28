import img from "../../../assets/img3.jpg";
const List = () => {
  return (
    <div className="py-20 flex gap-x-20 flex-row">
      <div className="w-1/2 flex-col">
        <div className=" text-justify items-start">
          <h1 className="text-2xl font-semibold">01. Identify Solutions</h1>
          <p className="text-md pt-4">
            Learn how to spot common and rare plant diseases through symptoms.
            Understand what yellow leaves, spots, and other signals mean. Early
            detection is crucial for effective treatment.
          </p>
        </div>
        <div className="my-7  text-justify items-start">
          <h1 className="text-2xl font-semibold">02. Disease Solution</h1>
          <p className="text-md pt-4">
            Learn how to spot common and rare plant diseases through symptoms.
            Understand what yellow leaves, spots, and other signals mean. Early
            detection is crucial for effective treatment.
          </p>
        </div>
        <div className=" text-justify items-start">
          <h1 className="text-2xl font-semibold">03. Plant Selection</h1>
          <p className="text-md pt-4">
            Learn how to spot common and rare plant diseases through symptoms.
            Understand what yellow leaves, spots, and other signals mean. Early
            detection is crucial for effective treatment.
          </p>
        </div>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <img
          src={img}
          className="w-full h-[400px] object-cover rounded-lg "
          alt=""
        />
      </div>
    </div>
  );
};
export default List;
