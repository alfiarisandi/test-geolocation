import { useEffect } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import images from "../assets/imageAny.jpeg";

function TestB() {
  useEffect(() => {
    const getIpAddress = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        return data; // Set the IP from the response
      } catch (error) {
        console.error("Error fetching the IP address:", error);
      }
    };

    const storeLogApi = async () => {
      // Check if window and navigator are available (to ensure code runs only on client-side)

      const ipLocation = await getIpAddress();

      await fetch(
        "https://backend-my-finance-dev.vercel.app/api/api-log/store-location",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Tambahkan ini
          },
          body: JSON.stringify({
            ipAddres: ipLocation?.ip,
          }),
        }
      );
    };

    storeLogApi();
  }, []);

  return (
    <>
      <div>
        <img src={images} className="" alt="Vite logo" style={{

          width: '10px'
        }} />
      </div>
    </>
  );
}

export default TestB;
