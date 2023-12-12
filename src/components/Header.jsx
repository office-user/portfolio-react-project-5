

const Header = () => {
  return (
    <>
    <nav>
        <NavContent />
    </nav>
    </>
  )
}


const NavContent =()=>{
    return(
        <>
        <h1>Gagan</h1>
        <div>
            <a href="#home">Home</a>
            <a href="#word">Word</a>
            <a href="#experience">Experience</a>
            <a href="#testimonial">Testimonial</a>
            <a href="#contact">Contact</a>
        </div>
        <a href="mailto:gagan@gmail.com"><button>Email</button></a>

        </>
    );
}




export default Header;