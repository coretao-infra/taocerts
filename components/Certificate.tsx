import { UserType } from '@/types/user'
import Sidebar from './Sidebar'
import CertificateContent from './CertificateContent'

type Props = {
  user: UserType
  logo1?: string,
  logo2?: string,
  bgImage?: string,
  bgSize?: number[],
  type?: string,
  squared?: boolean
}

const Certificate = ({ user, logo1, logo2, bgImage, bgSize, type, squared }: Props) => {
  return (
    <div className="flex h-full">
      <CertificateContent user={user} logo1={logo1} squared={squared} logo2={logo2} bgImage={bgImage} bgSize={bgSize} type={type} />
      <Sidebar />
    </div>
  )
}

export default Certificate