import Image from 'next/image'; // Assuming you're using Next.js  

type Props = {
  type?: string,
}

const Header = ({ type }: Props) => (
  <div className="flex justify-between items-center">
    <div className="flex gap-2 items-center">
      <div className="w-5 h-5 bg-unicef"></div>
      <div className="font-bold tracking-tight text-lg pr-2 border-r-4 border-blue-400">
        TeamOne
      </div>
      <div className="text-gray-700 font-semibold">{type ? type : "Virtual Summit"}</div>
    </div>
    <div className="-mt-2">
      <Image src="/certificate/uniceflogo.png" width={120} height={120} alt="UNICEF" />
    </div>
  </div>
);

export default Header;  