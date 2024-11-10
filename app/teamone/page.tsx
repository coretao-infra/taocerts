"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { UserType } from "@/types/user";
import Certificate from "@/components/Certificate"; // Import the Certificate component  
import ErrorCertificateNotFound from "@/components/ErrorCertificateNotFound";


function CertificateContent() {

  const [data, setData] = useState<UserType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>();

  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const course = searchParams.get('course');

  useEffect(() => {
    async function fetchData() {
      try {

        const response = await fetch(`/api/db${course ? `?course=${course}` : ''}`);
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
  }, [course]);

  if (isLoading) return <div className="w-full h-screen flex items-center justify-center text-xl">Loading the certificate...</div>;
  if (error) return <div>Error when trying to connect: {error}</div>;

  const user = data.find((user) => user.rowKey === id);

  return (
    <div>
      <main className="w-full h-screen flex justify-center items-center text-black">
        {user !== undefined ? (
          <div className="w-[1000px] h-[700px] shadow-md relative">
            <Certificate user={user} logo1="" bgImage="/certificate/tologo.png" type=" " />
          </div>
        ) : (
          <ErrorCertificateNotFound />
        )}
      </main>
    </div>)

}


export default function Home() {
  return (
    <Suspense fallback={<div className="w-full h-screen flex items-center justify-center text-xl">Loading the certificate...</div>}>
      <CertificateContent />
    </Suspense>
  );
}