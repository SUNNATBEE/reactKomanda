import React from 'react'

const Main = () => {
    return (
        <div className='flex justify-between items-center'>
            <div>
                <h1 className='text-[60px] text-[#2C2B35]'>Управление запасами розничного магазина</h1>
                <p className='text-[20px] text-[#2C2B35]'>Использование сервиса 1С-Товары позволяет значительно упростить работу по формированию заявок поставщику.</p>
                <button className='w-[200px] h-[35px] bg-[#43A548] rounded-[100%] text-[15px]'>Заказать демонстрацию</button>
            </div>
            <img src="./main1.img" alt="" />
        </div>
    )
}

export default Main
