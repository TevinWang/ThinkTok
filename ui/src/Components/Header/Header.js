import "./Header.css"

export default function Header(){

    return <>
        <a type="button" onClick={event => {window.location.href='/'}}>
            <div className="w-100 p-3">
                <div className="w-100 d-flex flex-row justify-content-center logoButton">
                    <img src="thinktok.png" style={{width: 100}} />
                </div>
            </div>
        </a>
    </>
}