import adobe from "../../assets/images/content/logo-adobe.svg"
import ikea from "../../assets/images/content/logo-ikea.svg"
import hermanmiller from "../../assets/images/content/logo-hermanmiller.svg"
import miele from "../../assets/images/content/logo-miele.svg"

export default function Clients() {
    return (
        <section className="container mx-auto">
            <div className="flex justify-center flex-wrap">
                <div
                    className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
                >
                    <img src={adobe} alt="" className="mx-auto" />
                </div>
            <div
                className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
            >
                <img src={ikea} alt="" className="mx-auto" />
            </div>
            <div
                className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
            >
                <img
                src={hermanmiller}
                alt=""
                className="mx-auto"
                />
            </div>
                <div
                    className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
                >
                    <img src={miele} alt="" className="mx-auto" />
                </div>
            </div>
        </section>
    )
}
