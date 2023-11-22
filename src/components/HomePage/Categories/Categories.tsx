import React, { useState } from "react"
import { useQuery } from "@apollo/client"

import { GET_ALL_FILTERS } from "@/utils/graphQueries"
import CategoryButton from "./CategoryButton"

const Categories = () => {
  const { loading, error, data: listings } = useQuery(GET_ALL_FILTERS)
  const [isShowAll, setIsShowAll] = useState<boolean>(false)

  function removeDuplicates(arr: string[]): string[] {
    let uniqueArray: string[] = []

    for (let element of arr) {
      if (!uniqueArray.includes(element)) {
        uniqueArray.push(element)
      }
    }

    return uniqueArray
  }

  if (listings) {
    const filteredGenres: string[] = removeDuplicates(
      listings?.allFilter?.genres,
    )
    console.log(filteredGenres)
    // const filteredTags: string[] = removeDuplicates(listings?.allFilter?.tags)
    // console.log(filteredTags)
  }
  return (
    <>
      <div
        className={`mx-auto grid ${
          isShowAll ? "h-fit" : "h-40"
        } w-full max-w-screen-xl grid-cols-7 items-center justify-between gap-y-5 ${
          isShowAll ? "overflow-y-visible" : "overflow-hidden"
        } px-16`}
      >
        <CategoryButton
          imgSrc="/icons/categoryIcons/adventure.svg"
          imgAlt="icon by Icons8"
          text="Action"
          number={1}
        />
        <CategoryButton
          imgSrc="/icons/categoryIcons/rpg.svg"
          imgAlt="icon by Icons8"
          text="RPG"
          number={1}
        />
        <CategoryButton
          imgSrc="/icons/categoryIcons/strategy.svg"
          imgAlt="icon by Icons8"
          text="Strategy"
          number={1}
        />
        <CategoryButton
          imgSrc="/icons/categoryIcons/simulation.svg"
          imgAlt="icon by Icons8"
          text="Simulation"
          number={1}
        />
        <CategoryButton
          imgSrc="/icons/categoryIcons/platformer.svg"
          imgAlt="icon by Icons8"
          text="Platform"
          number={1}
        />
        <CategoryButton
          imgSrc="/icons/categoryIcons/indie.svg"
          imgAlt="icon by Icons8"
          text="Indie"
          number={1}
        />
        <CategoryButton
          imgSrc="/icons/categoryIcons/shooter.svg"
          imgAlt="icon by Icons8"
          text="Shooter"
          number={1}
        />
        <CategoryButton
          imgSrc="/icons/categoryIcons/casual.svg"
          imgAlt="icon by Icons8"
          text="Casual"
          number={1}
        />
        <CategoryButton
          imgSrc="/icons/categoryIcons/sports.svg"
          imgAlt="icon by Icons8"
          text="Sports"
          number={1}
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          className="btn btn-primary btn-wide mb-3 mt-3 text-white"
          onClick={() => setIsShowAll((prev) => !prev)}
        >
          {isShowAll ? "Show less" : "Show more"}
        </button>
      </div>
    </>
  )
}

export default Categories
