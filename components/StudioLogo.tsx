import Image from 'next/image'

import logo from '../public/logo.svg'

function StudioLogo( props: any) {
    const {renderDefault, title} = props;
    return(
        <div className='flex items-center space-x-2'>
            <Image 
            className="object-cover"
            width={50}
            height={50}
            src={logo}
            alt="logo"
            />
            <>{renderDefault(props)}</>
        </div>
    )
}

export default StudioLogo;