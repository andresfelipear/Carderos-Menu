import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
        <footer className='bg-gray-900 text-zinc-300 block'>
            <div className='grid md:grid-cols-6 gap-4 p-4 md:py-8 flex flex-col'>
                <div className="md:col-start-2 md:col-span-2 grid ">
                    <h3 className='font-medium'>Design Lux</h3>
                    <p className='text-sm '>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis impedit dignissimos qui harum aperiam magni amet eveniet corrupti iure vel? Aperiam mollitia quisquam quidem doloribus dolorum! Corporis, natus? Perferendis, odio!
                    </p>
                </div>
                <div className="md:col-start-5 grid gap-1 text-sm text-center">
                    <h3 className='font-medium text-base mb-4'>Contact</h3>
                    <p>1583 Coal Harbour Quay</p>
                    <p>Vancouver, BC</p>
                    <p>+1 (604)669-7666</p>
                    <div className="grid gap-2 text-center ">
                        <div className='flex gap-5 justify-center'>
                            <FontAwesomeIcon size="lg" icon={faFacebook} />
                            <FontAwesomeIcon size="lg" icon={faInstagram} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black text-center py-3 italic text-sm" >
                © Copyright: Andres Arevalo
            </div>
        </footer>

    )
}
