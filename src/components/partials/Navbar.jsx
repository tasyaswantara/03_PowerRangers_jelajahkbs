import Logo from "../../assets/icon/Logo_Zoo.svg"
const Navbar = () => {
  return (
    <div className=" w-full h-[8vh] flex justify-center items-center gap-6 bg-secondary-yellow">
            <img src={Logo} className=" bg-logo w-20 h-10 bg-cover"/>
            <h1 className=" text-primary-green font-extrabold">Kebun Binatang Surabaya</h1>
        </div>
    );
}
 
export default Navbar;