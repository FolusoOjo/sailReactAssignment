import './Footer.css'

function Footer(){
    return(
        <>
        <div className='footerFlex'>
            <div className='footerTools'>
                <div>

                <p>Tools</p>
           <a href="#">Generate your palettes</a>
           <a href="#">Explore popular palettes</a>
           <a href="#">Extract palette from image</a>
           <a href="#">Contrast checker</a>
           <a href="#">Preview palettes on designs</a>
           <a href="#">Recolor your own designs</a>
           <a href="#">Color picker</a>
           <a href="#">Browse free fonts</a>
                </div>
                <div>
                    <p>More</p>
                    <a href="#">List of colors</a>
                    <a href="#">Browse gradients</a>
                    <a href="#">Create a gradient</a>
                    <a href="#">Make a gradient palette</a>
                    <a href="#">Image converter</a>
                    <a href="#">Create a collage</a>
                    <a href="#">Font Generator</a>
                </div>


                <div className='jobsApp'>
                    <div>
                        <p>Jobs</p>
                    <a href="#">Find your next job</a>
                        <a href="#">Post a job</a>
                    </div>

                    <div>
                        <p>Apps</p>
                        <a href="#">iOS App</a><a href="#">Andriod App</a>
                        <a href="#">Figma Plugin</a>
                        <a href="#">Adobe Extension</a>
                        <a href="#">Chrome Extension</a>
                        <a href="#">Instagram Page</a>
                    </div>


                </div>

                <div>
                    <p>Company</p>
                    <a href="#">Pricing</a>
                    <a href="#">License</a>
                    <a href="#">Terms of service</a>
                    <a href="#">Privacy policy</a>
                    <a href="#">Cookie policy</a>
                    <a href="#">Manage cookie</a>
                    <a href="#">Help center</a>
                    <a href="#">Advertise</a>
                    <a href="#">Affliate</a>
                    <a href="#">Contact</a>
                </div>
            </div>
          
        </div>
        <hr />
        
        <p className='coolorsFooter'>Coolors by <strong>Foluso Ojo.</strong> From a creative to all the others.</p>
        </>
    )
}

export default Footer