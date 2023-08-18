import Image from "next/image";
import Link from "next/link";

import { NavLinks } from "@/constant";
import { getCurrentUser } from "@/lib/session";

import AuthProviders from "./AuthProviders";
import CustomButton from "./Button";
import ProfileMenu from "./ProfileMenu";

const Navbar = async () => {
  const session = await getCurrentUser()

  return (
    <nav className='flexBetween py-5 px-8 border-b-[1px] bg-[#050816] border-nav-border gap-4'>
      <div className='flex-1 flexStart gap-10'>
        <Link href='/' className="flex items-center ">
          <Image
            src='/vishnulogo.png'
            width={56}
            height={43}
            alt='logo'
          />  
           <h3 className="text-[1.1rem] sm:text-[1.5rem] font-bold text-purple-600">VishnuShares</h3>
        </Link>
        <ul className='xl:flex hidden text-small gap-7'>
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.text}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      
      <div className='flexCenter gap-4'>
        {session?.user ? (
          <>
            <ProfileMenu session={session} />

            <Link href="/create-project">
              <CustomButton title='Share work' />
            </Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
