/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
  photo: string;
  price: number;
};

const ListingCard = ({ title, description, price, photo }: Props) => {
  return (
    <div className="shadow-sm overflow-hidden rounded-md">
      <div className="w-96 h-40 relative overflow-x-hidden">
        <Image src={photo} alt={title} className="h-full object-cover" fill />
      </div>
      <div className="flex flex-col p-2">
        <h1 className="text-lg font-medium tracking-tight">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default ListingCard;
