import Image from 'next/image'; // Assuming you're using Next.js  

type Props = {
  logo1?: string,
  logo2?: string,
  squared?: boolean
}


const CertificateImages = ({ logo1 = "/certificate/summit.png", logo2 = "/certificate/tologo.png", squared }: Props) => {

  const logo1Style = squared ? "absolute left-[675px] top-[100px] h-[200px] w-[200px] flex items-center justify-center bg-white rounded-md" : "absolute left-[675px] top-[100px] h-[200px] w-[200px]";

  return (
    <>
      {logo1 !== "" && <div className={logo1Style}>
        <Image src={logo1} width={200} height={200} alt="TeamOne" />
      </div>}
      {logo2 !== "" && <div className="absolute left-[725px] top-[500px] h-[100px] w-[100px] border-4 border-unicef">
        <Image src={logo2} width={150} height={150} alt="TeamOne" />
      </div>}
    </>
  )
};

export default CertificateImages;  