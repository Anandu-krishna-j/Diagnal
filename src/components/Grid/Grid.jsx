import Card from "../Card/Card";

export default function Grid({ items }) {
  return (
    <div className="w-full max-w-[500px] mx-auto">
      <div className=" grid grid-cols-3 gap-[25px] " >
        {items.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </div>
  );
}