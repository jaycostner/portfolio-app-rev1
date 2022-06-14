import React from 'react'       
import Image from 'next/image'
import Link from 'next/link'



interface Props {
    id:String
    name:String
    socialId:String
    link:string
}


const Member: React.FC<Props>= ({id,name,socialId,link}) => (
    <div><Image src="" width="" height="" alt=""/> </div>
)
export default Member;