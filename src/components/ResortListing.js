import ResortCard from "./ResortCard";
import resort1 from "../assests/img/resort1.webp";
import resort2 from "../assests/img/resort2.webp";
import resort3 from "../assests/img/resort3.webp";
import resort4 from "../assests/img/resort4.webp";


function ResortListing()
{
    return (

        <section id="section-resort-list">

            <div className= "container">

                <h1>Featured Resort</h1>

                <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
                    <ResortCard title="Lover's Villa" img={resort1} price={190} /> 
                    <ResortCard title="Resort 2" img={resort2} price={85}/>
                    <ResortCard title="Resort 3" img={resort3} price={105}/>
                    <ResortCard title="Resort 4" img={resort4} price={63}/>
                    <ResortCard title="Resort 5" img={resort2} price={75.10}/>
                    <ResortCard title="Resort 6" img={resort3} price={11.22}/>

                </div>
            </div>
        </section>
    )
}

export default ResortListing;