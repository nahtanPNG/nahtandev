import desktopIcon from '../../assets/menu/desktop-icon.svg'
import newsIcon from '../../assets/menu/news-icon.svg'
import homeIcon from '../../assets/menu/home-icon.svg'

export function Sidebar() {
    return (
    <aside className="w-64 h-screen border border-gray-400">
        <span className='flex gap-3 mx-6 my-9 hover:bg-gray-900/60 hover:rounded-lg hover:transform hover:scale-105 transition-all hover:cursor-pointer'>
            <img src={homeIcon} className='w-5'/>
            <p className='text-slate-50 text-sm'>Inicio</p>
        </span>
        <h3 className='px-4 text-slate-500'>
            NahtanPng
        </h3>
        <span className='flex gap-3 mx-6 my-3'>
            <img src={newsIcon} className='w-5'/>
            <p className='text-slate-50 text-sm'>Sobre mim</p>
        </span>
        <span className='flex gap-3 mx-6 my-3'>
            <img src={desktopIcon} className='w-5'/>
            <p className='text-slate-50 text-sm'>Tecnologias</p>
        </span>
        
    </aside>
    )
}