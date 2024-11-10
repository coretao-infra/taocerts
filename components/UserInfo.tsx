import { UserType } from "@/types/user";

type Props = {
  user: UserType
}

const UserInfo = ({ user }: Props) => (
  <div className="text-center mt-10">
    <div className="text-lg">UNICEF ICTD TAO CORE presents to</div>
    <div className="text-4xl tracking-tight">{user.name}</div>
    <div className="w-[400px] border-b-4 border-unicef mx-auto"></div>
    <div className="mt-5 text-lg">For engaging with us in our</div>
    <div className="text-xl tracking-tighter font-semibold text-blue-950">{user.course}</div>
    <div className="text-lg">
      which took place on {user.date ? user.date : 'August 27 - 29, 2024'}.
    </div>
  </div>
);

export default UserInfo; 