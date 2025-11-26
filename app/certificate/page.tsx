"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { UserType } from "@/types/user";

function CertificateContent() {
  const [data, setData] = useState<UserType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>();

  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const course = searchParams.get("course");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `/api/db${course ? `?course=${course}` : ""}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [course]);

  if (isLoading)
    return (
      <div className="w-full h-screen flex items-center justify-center text-xl">
        Loading the certificate...
      </div>
    );
  if (error) return <div>Error when trying to connect: {error}</div>;

  const typeOfCourse = (course: string) => {
    switch (course) {
      case "cwn":
        return "Workshop";
      default:
        return "Virtual Summits";
    }
  };

  const getCourseLogo = (course: string | null) => {
    switch (course) {
      case "cwn":
        return {
          img: "/certificate/cloudfirst.png",
          className: "bg-white py-5 rounded-xl bg-opacity-90",
        };
      default:
        return {
          img: "/certificate/summit.png",
          className: "py-5 rounded-xl bg-opacity-90",
        };
    }
  };

  const IntiativeLogo = () => {
    const courseInfo = getCourseLogo(course);
    return (
      <div className="absolute left-[675px] top-[100px] h-[200px] w-[200px] ">
        <Image
          className={courseInfo.className}
          src={courseInfo.img}
          width={200}
          height={200}
          alt="TeamOne"
        />
      </div>
    );
  };

  const MainBgLogo = () => {
    const courseInfo = getCourseLogo(course);

    return (
      <div
        className={`absolute inset-0 bg-no-repeat bg-right bg-cover opacity-5`}
        style={{
          backgroundImage: `url(${courseInfo.img})`,
        }}
      ></div>
    );
  };

  const user = data.find((user) => user.rowKey === id);

  return (
    <div>
      <main className="w-full h-screen flex justify-center items-center text-black">
        {user !== undefined ? (
          <div className="w-[1000px] h-[700px] shadow-md relative">
            <div className="flex h-full">
              <div className="bg-white w-[750px] h-full">
                <MainBgLogo />
                <div className="flex justify-center h-full">
                  <div className="w-[400px] h-full pt-32 ">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2 items-center">
                        <div className="w-5 h-5 bg-unicef"></div>
                        <div className="font-bold tracking-tight text-lg pr-2 border-r-4 border-blue-400">
                          TeamOne
                        </div>
                        <div className="text-gray-700 font-semibold">
                          {course && typeOfCourse(course)}
                        </div>
                      </div>
                      <div className="-mt-2">
                        <Image
                          src="/certificate/uniceflogo.png"
                          width={120}
                          height={120}
                          alt="UNICEF"
                        />
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="text-6xl uppercase tracking-tight font-semibold text-gray-700">
                        Certificate
                      </div>
                      <div className="text-5xl tracking-tight text-gray-700">
                        of participation
                      </div>
                    </div>
                    <div>
                      <div className="text-center mt-10">
                        <div className="text-lg ">
                          UNICEF DID TAO CORE presents to
                        </div>
                        <div className="text-4xl tracking-tight">
                          {user.name}
                        </div>
                        <div className="w-[400px] border-b-4 border-unicef"></div>
                        <div className="mt-5 text-lg">
                          For engaging with us in our{" "}
                        </div>
                        <div className="text-xl tracking-tighter font-semibold text-blue-950">
                          {user.course}
                        </div>
                        <div className="text-lg ">
                          {" "}
                          which took place on{" "}
                          {user.date ? user.date : "August 27 - 29, 2024"}.
                        </div>
                        <div></div>
                      </div>
                      <div className="text-center mt-10">
                        <div className="font-signature text-5xl">
                          {user.sme_name}
                        </div>
                        <div className="flex justify-center -mt-3">
                          <div className="w-[300px] border-b-2 border-gray-500"></div>
                        </div>
                        <div className="text-xl font-semibold mt-1">
                          {user.sme_name}
                        </div>
                        <div className="text-lg -mt-1">{user.sme_role}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <IntiativeLogo />
                <div className="absolute left-[705px] p-3 bg-unicef rounded-full top-[480px] h-[150px] w-[150px] ">
                  <Image
                    src="/certificate/ain.png"
                    width={150}
                    height={150}
                    alt="TeamOne"
                    className=""
                  />
                </div>
              </div>
              <div className="w-[50px] h-full bg-unicef"></div>
              <div className="w-[200px] h-full bg-blue-900"></div>
            </div>
          </div>
        ) : (
          <div>
            <span className="font-bold">Error:</span> Certificate ID not found
          </div>
        )}
      </main>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen flex items-center justify-center text-xl">
          Loading the certificate...
        </div>
      }
    >
      <CertificateContent />
    </Suspense>
  );
}
