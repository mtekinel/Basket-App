import { useRouteError } from "react-router";


export default function ErrorPage() {
    const error = useRouteError();
    
  return (
    <div style={{padding:"2rem",color: "red"}}>
        <h2>Bir hata oluştu!</h2>
      <p>{error.message || "Bilinmeyen bir hata"}</p>
    </div>
  )
}
