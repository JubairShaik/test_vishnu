import { UserNode } from "@/common.types";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../Button";

type Props = {
    user: UserNode;
};

const ProfileButtons = ({ user }: Props) => {
    return (
        <>
            <CustomButton
                title="Follow"
                leftIcon="/follow.png"
                bgColor="bg-orange-500"
                className="bg-orange-500"
            />

            <Link 
            className="bg-transparent"
            href={`mailto:${user?.email}`}>
                <CustomButton
                    title="Hire Me"
                    leftIcon="/gmail.png"
                    
                />
            </Link>
            <button
                title="button"
                type="button"
                className="flexCenter p-4 rounded-xl border border-gray-500"
            >
                <Image
                    src="/minus.svg"
                    width={14}
                    height={14}
                    alt="minus icon"
                />
                
            </button>
        </>
    );
};

export default ProfileButtons;
