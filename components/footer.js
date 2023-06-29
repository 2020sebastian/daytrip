import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/* create a typical footer */}
      <div className="bg-gray-50">
        <div className="container mx-auto flex justify-center py-12">
          <div className="py-5">
            <div className="flex gap-6 justify-center ">
            <Link href={"/"}><ImFacebook color="#888888"/></Link>
            <Link href={"/"}><ImTwitter color="#888888"/></Link>
            <Link href={"/"}><ImYoutube color="#888888"/></Link>
              </div>
              <p className="py-5 text-center text-gray-400 text-sm">© 2021 Day Trip. All rights reserved.</p>
          </div>
          </div>
          </div>


    </footer>
                    
                
  )
}
