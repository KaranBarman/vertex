import ListingCard from "./ListingCard";

const data = [
  {
    title: "Introduction",
    description: "Piyush bkl",
    photo: "/images/background/bg1.jpg",
    price: 420,
    id: 11,
  },
  {
    title: "Introduction",
    description: "Karan super",
    photo: "/images/background/bg2.jpg",
    price: 420,
    id: 12,
  },
  {
    title: "Introduction",
    description: "Yoo Men",
    photo: "/images/background/bg3.jpg",
    price: 420,
    id: 13,
  },
  {
    title: "Introduction",
    description: "Yoo Men",
    photo: "/images/background/bg3.jpg",
    price: 420,
    id: 13,
  },
  {
    title: "Introduction",
    description: "Yoo Men",
    photo: "/images/background/bg3.jpg",
    price: 420,
    id: 13,
  },
  {
    title: "Introduction",
    description: "Yoo Men",
    photo: "/images/background/bg3.jpg",
    price: 420,
    id: 13,
  },
];

const FourGrid = () => {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {data.map((item, i) => (
        <ListingCard
          title={item.title}
          description={item.description}
          price={item.price}
          photo={item.photo}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default FourGrid;
