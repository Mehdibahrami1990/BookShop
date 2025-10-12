import Container from "@/components/Container";
import ProductItem from "@/components/ProductItem";
import Link from "next/link";
import React from "react";
import { ProductListProps } from "@/types/type";
import Pagintion from "@/components/Pagintion";

interface StoreProps {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  params: Promise<{}>;
  searchParams: Promise<{ page: string; per_page: string }>;
}

const Store = async ({ searchParams }: StoreProps) => {
  const page = (await searchParams).page ?? "1";
  const per_page = (await searchParams).per_page ?? "3";

  const result = await fetch(
    `http://localhost:3001/products?_page=${page}&_per_page=${per_page}`
  );
  const data = (await result.json()) as ProductListProps;
  // const DUMMY_DATA = [
  //   {
  //     id: "1",
  //     image:
  //       "https://english-e-reader.net/covers/Trapped_The_Aron_Ralston_story-Caroline_Shackleton.jpg",
  //     title: "Trapped! The Aron Ralston story",
  //     describtion:
  //       "Aron Ralston is a famous traveler, climber and writer. He was educated as an engineer and his future life promised to be not too exciting and extreme. Once Aron realizes that everything is turning into something boring and monotonous. He does not like this. The young man needs some changes.",
  //     price: 150,
  //   },
  //   {
  //     id: "2",
  //     image:
  //       "https://english-e-reader.net/covers/Hard_Times_for_the_Time_Trippers-Maria_Jack.jpg",
  //     title: "Hard Times for the Time Trippers",
  //     describtion:
  //       "Matt Johnson woke up in the middle of the night. The same nightmare tormented him again and again. In the dream, he came home after school. There was one day before the holidays.",
  //     price: 50,
  //   },
  //   {
  //     id: "3",
  //     image: "https://english-e-reader.net/covers/The_Card-Bennet_Arnold.jpg",
  //     title: "The Card",
  //     describtion:
  //       "If you want to become as successful as possible, what qualities will you need first of all? Will the smartest person be the most successful? Or good looks and charisma are the things you need",
  //     price: 350,
  //   },
  //   {
  //     id: "4",
  //     image:
  //       "https://english-e-reader.net/covers/The_Murder_at_the_Vicarage-Agatha_Christie.jpg",
  //     title: "The Murder at the Vicarage",
  //     describtion:
  //       "Colonel Protheroe was not a good man. He had lots of enemies. So when he was found shot at the vicarage, many people became murder suspects. It could be his daughter Lettice who wanted to get freedom from the strict father and inherit his fortune. ",
  //     price: 550,
  //   },
  // ];

  return (
    <Container>
      <h1 className="py-5">store</h1>
      <div className="grid grid-cols-4 gap-4">
        {data.data.map((item) => (
          <Link key={item.id} href={`store/${item.id}`}>
            <ProductItem {...item} />
          </Link>
        ))}
      </div>
      <Pagintion pageCount={data.pages} />
    </Container>
  );
};

export default Store;
