"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
    id: string;
    image: string;
    title: string;
    name: string;
    avatarUrl: string;
    userId: string;
};

const ProjectCard = ({ id, image, title, name, avatarUrl, userId }: Props) => {
    return (

        
        <div className="flexCenter flex-col rounded-2xl  ">
            <Link
                href={`/project/${id}`}
                className="flexCenter group relative w-full h-full"
            >
                <Image
                    src={image}
                    width={424}
                    height={334}
                    className="w-full h-full object-cover rounded-xl"
                    alt="project image"
                />

                <div className="hidden group-hover:flex justify-end items-end w-full h-1/3 bg-gradient-to-b bg-slate-900 rounded-b-xl transition-all  ease-in-out duration-500   gap-2 absolute bottom-0 right-0 font-semibold text-lg text-white p-4">
                    <p className="w-full bg-transparent">{title}</p>
                </div>
            </Link>

            <div className="flexBetween  w-full py-1 px-2 mt-3 font-semibold text-sm">
            <Link href={`/profile/${userId}`}>

                    <div className="flexCenter gap-2">
                        <Image
                            src={avatarUrl}
                            width={25}
                            height={25}
                            className="rounded-full"
                            alt="profile image"
                        />
                        <p>{name}</p>
                    </div>               
            </Link>

                <div className="flexCenter gap-3">
                    <div className="flexCenter gap-2">
                        <Image
                            src="/hearth.svg"
                            width={13}
                            height={12}
                            alt="hearth"
                        />
                        <p className="text-sm">156</p>
                    </div>

                    <div className="flexCenter gap-2">
                        <Image src="/eye.svg" width={12} height={9} alt="eye" />
                        1.4K
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
