function handleClick(){
    console.log("c")
}

export default function NavLink() {
    return (
        <div onClick={handleClick()}>Pagina</div>
    )
}
