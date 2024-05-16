import Image from "next/image"

export default function Hero () {
    return (
        <div>
            <Image
                src='/gaia.png'
                alt='logo'
                width={90}
                height={90}
                className="filter m-10"
                />

            <h1 className="font text-cente text-6xl tracking-wide">Gaia</h1>    
        </div>
    )
}