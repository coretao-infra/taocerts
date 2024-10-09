"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';

type DataType = {
  rowKey: string,
  partitionKey: string,
  timestamp: string,
  name: string,
  email: string,
  course: string,
  sme_name: string,
  sme_role: string,

}

export default function Home() {

  const [data, setData] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>();

  const searchParams = useSearchParams();
  const id = searchParams.get('id');


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/db');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
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
  }, []);

  if (isLoading) return <div className="w-full h-screen flex items-center justify-center text-xl">Loading the certificate...</div>;
  if (error) return <div>Error when trying to connect: {error}</div>;

  const user = data.find((user) => user.rowKey === id);





  return (
    <div>
      <main className="w-full h-screen flex justify-center items-center">
        {user !== undefined ? <div className="w-[1000px] h-[700px] shadow-md relative">
          <div className="flex h-full">
            <div className="bg-white w-[750px] h-full">
              <div className="flex justify-center h-full">
                <div className="w-[400px] h-full pt-32 ">
                  <div className="flex gap-2 items-center">

                    <div className="w-5 h-5 bg-unicef"></div>
                    <div className="font-bold tracking-tight text-lg pr-2 border-r-4 border-blue-400">TeamOne</div>
                    <div className="text-gray-500 font-semibold">Virtual Summits</div>
                  </div>
                  <div className="pt-4">
                    <div className="text-6xl uppercase tracking-tight font-semibold text-gray-700">Certificate</div>
                    <div className="text-5xl tracking-tight text-gray-700">of attendance</div>
                  </div>
                  <div>
                    <div className="text-center mt-10">
                      <div className="text-lg ">Provided to:</div>
                      <div className="text-4xl tracking-tight">{user.name}</div>
                      <div className="w-[400px] border-b-4 border-unicef"></div>
                      <div className="mt-5 text-lg">For having attended to:</div>
                      <div className="text-xl tracking-tighter font-semibold text-blue-950">{user.course}</div>
                      <div></div>
                    </div>
                    <div className="text-center mt-10">
                      <div className="font-signature text-5xl">{user.sme_name}</div>
                      <div className="flex justify-center -mt-3">
                        <div className="w-[300px] border-b-2 border-gray-500"></div>
                      </div>
                      <div className="text-xl font-semibold mt-1">{user.sme_name}</div>
                      <div className="text-lg -mt-1">{user.sme_role}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-[675px] top-[100px] h-[200px] w-[200px]">
                <Image src="/summit.png" width={200} height={200} alt="TeamOne" />
              </div>
              <div className="absolute left-[725px] top-[500px] h-[100px] w-[100px] border-4 border-unicef">
                <Image src="/tologo.png" width={150} height={150} alt="TeamOne" />
              </div>
            </div>
            <div className="w-[50px] h-full bg-unicef"></div>
            <div className="w-[200px] h-full bg-blue-900"></div>
          </div>
        </div> :
          <div>
            <span className="font-bold">Error:</span> Certificate ID not found
          </div>}
      </main>
    </div>);
}
