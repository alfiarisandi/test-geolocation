import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  useEffect(() => {
    const getIpAddress = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data // Set the IP from the response
      } catch (error) {
        console.error('Error fetching the IP address:', error);
      }
    };

    const storeLogApi = async () => {

      // Check if window and navigator are available (to ensure code runs only on client-side)
      if (typeof window !== 'undefined' && 'geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (res) => {
            const position = {
              latitude: res.coords.latitude,
              longitude: res.coords.longitude,
            }

            const ipLocation = await getIpAddress()

            await fetch('https://backend-my-finance-dev.vercel.app/api/api-log/store-location', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'  // Tambahkan ini
              },
              body: JSON.stringify({
                lat: position.latitude.toString(),
                lang: position.longitude.toString(),
                ipAddres: ipLocation?.ip,
                location: `${ipLocation?.city || ''}, ${ipLocation?.region || ''}`
              })
            })

          },
          (error) => {
            console.log(error.message);
          }
        );
      } else {
        console.log('Geolocation is not supported or not available.');
      }
    }

    storeLogApi()

  }, []);


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

    </>
  )
}

export default App