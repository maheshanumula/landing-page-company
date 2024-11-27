import './Project.css'

const Thirdpro = () => {
    return (  
        <div>
            <div className="user">
                <h1>Best Selling Product</h1>
                <div className="nav-user">
                    <ul>
                        <li style={{backgroundColor:"white",borderRadius:'40px'}}>Chair</li>
                        <li>Beds</li>
                        <li>Lamp</li>
                        <li>Shopa</li>
                    </ul>
                </div>
            <div className="anumula">
                <div>
                    <img src="photos/aaa.jpg" />
                    <p>Chair</p>
                    <p >Sakarias Armchair</p>
                </div>
                <div>
                    <img src="photos/abc.jpg" />
                    <p>Chair</p>
                    <p >Sakarias Armchair</p>
                    
                </div>
                <div>
                    <img src="photos/kkk.jpg" />
                    <p>Chair</p>
                    <p >Sakarias Armchair</p>
                </div>
                <div>
                    <img src="photos/rrr.jpg" />
                    <p>Chair</p>
                     <p >Sakarias Armchair</p>
                </div>
            </div>
            <button className="button">view</button>
            </div>
        </div>
    );
}
 
export default Thirdpro;