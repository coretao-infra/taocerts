import { UserType } from "@/types/user";
import BackgroundImage from "./BackgroundImage";
import CertificateImages from "./CertificateImages";
import CertificateTitle from "./CertificateTitle";
import Header from "./Header";
import Signature from "./Signature";
import UserInfo from "./UserInfo";


type Props = {
  user: UserType
  logo1?: string
  logo2?: string
  bgImage?: string
  bgSize?: number[]
  type?: string
  squared?: boolean
}

const CertificateContent = ({ user, logo1, logo2, bgImage, bgSize, type, squared }: Props) => (
  <div className="bg-white w-[750px] h-full relative">
    <BackgroundImage bgImage={bgImage} bgSize={bgSize} />
    <div className="flex justify-center h-full">
      <div className="w-[400px] h-full pt-32">
        <Header type={type} />
        <CertificateTitle />
        <UserInfo user={user} />
        <Signature user={user} />
      </div>
    </div>
    <CertificateImages logo1={logo1} logo2={logo2} squared={squared} />
  </div>
);

export default CertificateContent;  