import { UserType } from "@/types/user";

type Props = {
  user: UserType
}

const Signature = ({ user }: Props) => (
  <div className="text-center mt-10">
    <div className="font-signature text-5xl">{user.sme_name}</div>
    <div className="flex justify-center -mt-3">
      <div className="w-[300px] border-b-2 border-gray-500"></div>
    </div>
    <div className="text-xl font-semibold mt-1">{user.sme_name}</div>
    <div className="text-lg -mt-1">{user.sme_role}</div>
  </div>
);

export default Signature;  