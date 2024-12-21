import localFont from "next/font/local";
import Header from "../components/header/header";
import Footer from "@/components/footer/footer";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" ></link>
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.7.7/axios.js" integrity="sha512-luUnkeG+uabiT2pZdi5ME5uADvq+FpDs2fK5V0nVXrHCND9F077fKaE9W//oJvGnWSmwQmCau63A6s3um1NZmg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.7.7/axios.min.js"></script>

<link rel="stylesheet" href= "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
</head>

      <body >
        <ToastContainer />
      <Header></Header>
    
       <main>
        {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
