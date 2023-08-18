"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const ProjectLike = () => {
    const [hasLiked, setHasLiked] = useState<boolean>(false)
    const [hasSaved, setHasSaved] = useState<boolean>(false)

    return (
        <div className="flexCenter gap-5  lg:w-fit w-full">
            <button
                type="button"
                className={`flexCenter bg-transparent like_btn ${hasSaved
                    ? "text-blue-100 bg-blue-500 border border-blue-400"
                    : "text-white border-purple-600"
                    } `}
                onClick={() => setHasSaved(!hasSaved)}
            >
                <Image
                    src="/save.svg"
                    className="min-w-[14px] min-h-[14px]"
                    width={14}
                    height={14}
                    alt="save"
                    
                />
                Save
            </button>

            <button
                type="button"
                className={`flexCenter bg-transparent like_btn ${hasLiked
                    ? "text-purple-500 bg-purple-600 border border-primary-purple"
                    : "text-white  border-purple-500"
                    } `}
                onClick={() => setHasLiked(!hasLiked)}
            >
                <Image
                    src={`/hearth-${hasLiked ? "purple" : "white"}.svg`}
                    width={14}
                    height={14}
                    alt="like"
                    className="bg-transparent "
                />
                Like
            </button>
        </div>
    )
}

export default ProjectLike