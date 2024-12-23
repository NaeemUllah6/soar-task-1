import React from 'react'
import blackCard from '../assets/images/black-card.svg';
import whiteCard from '../assets/images/white-card.svg';
import Eclipse1 from '../assets/images/eclips.svg';
import Eclipse2 from '../assets/images/eclips2.svg';
import BarChart from '../components/barChart'
import ExpensePieChart from '../components/piChart'
import avatar1 from '../assets//images/avatar1.png'
import avatar2 from '../assets//images/avatar2.svg'
import avatar3 from '../assets//images/avatar3.svg'
import AreaChart from '../components/areachart'
import sendMssg from '../assets/images/sendmssg.svg'
import search from '../assets/images/search.svg'

import { useState } from 'react'
import Header from '../layout/header'
import Modal from '../components/modal'
function Dashboard() {
  const transaction = [
    {
      transImg: Eclipse1,
      depost: 'Deposit from my Card',
      date: '21 January 2021',
      money: '-$850'
    },
    {
      transImg: Eclipse2,
      depost: 'Deposit Paypal',
      date: '25 January 2021',
      money: '+$2,500',
    },
    {
      transImg: Eclipse2,
      depost: 'Jemi Wilson',
      date: '21 January 2021',
      money: '+$5,400'
    }
  ];
  const carousel = [
    {
      avatar: avatar1,
      avatarName: 'Livia Bator',
      avatarDes: 'CEO',
    },
    {
      avatar: avatar2,
      avatarName: 'Workman', style: { fontWeight: 'bold' },
      avatarDes: 'Designer',
    },
    {
      avatar: avatar3,
      avatarName: 'Workman',
      avatarDes: 'Designer',
    },
    // {
    //   avatar: avatar1,
    //   avatarName: 'Livia Bator',
    //   avatarDes: 'CEO',
    // },

    // {
    //   avatar: avatar2,
    //   avatarName: 'Livia Bator',
    //   avatarDes: 'CEO',
    // },
  ]
  const [showcontent, setShowcontent] = useState(false)
  const showContent = () => {
    setShowcontent(true)
  }

  return (

    <div className=' '>
       <div className='relative block md:hidden w-full mb-3 '>
        <input className='w-full focus:outline-none h-[50px] bg-[#F5F7FA] ps-[60px] rounded-[40px] placeholder:text-[#8BA3CB] placeholder:text-[15px]' placeholder='Search for something'  type="text" />
        <div className='absolute top-4 left-6'>
          <img src={search} alt="" />
        </div>

        </div>
      <div className='grid grid-cols-2 md:grid-cols-3  justify-between w-full gap-[30px] '>
        <div className='col-span-3 lg:col-span-2'>
          <div className='flex justify-between items-center'>
            <h2 className='text-[#343C6A] text-[22px] font-[600] font-inter'>My Cards</h2>
            <button className='fs-[17px] font-[600] text-[#343C6A] font-inter text-right'>See All</button>
          </div>
          <div className='mt-[20px]'>
            <div className='grid grid-cols-2 lg:overflow-hidden  gap-[30px] w-full justify-between'>
              <div>
                <img loading='lazy' className='h-auto lg:h-[235px]' src={blackCard} alt="" />
              </div>
              <div className='flex justify-end'>
                <img loading='lazy' className=' h-auto lg:h-[235px]' src={whiteCard} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-3 lg:col-span-1'>
          <h3 className='font-[600] text-[22px] text-[#343C6A] font-inter'>Recent Transaction</h3>
          <div className='flex flex-col gap-[10px] mt-[15px] lg:mt-[25px] bg-white p-[20px] lg:p-[25px] rounded-[25px] h-[calc(100%-55px)]'>
            {
              transaction.map((item, index) => (
                <div key={index} className='flex flex-wrap  items-center gap-[10px] justify-between h-full'>
                  <div className='flex gap-[10px]'>
                    <img loading='lazy' className='rounded-full' src={item.transImg} alt="" />
                    <div>
                      <p className='font-[500] text-lg font-inter text-[#232323]'>{item.depost}</p>
                      <span className='font-[400] text-[15px] font-inter text-[#718EBF]'>{item.date}</span>
                    </div>
                  </div>
                  <span className='text-[#FF4B4A] font-[500] text-[15px] font-inter'>{item.money}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3  justify-between w-full lg:gap-[30px] '>
        <div className='col-span-3 lg:col-span-2'>

          <div className='mt-6 h-[calc(100%-75px)]'>
            <h4 className='font-[600] text-[22px] font-inter text-[#343C6A] lg:pb-[18px]'>Weekly Activity</h4>
            <div className='h-full'>
            <BarChart />
            </div>
          </div>
        </div>
        <div className='col-span-3 lg:col-span-1 mt-6'>
          <div className='h-full'>
            <h3 className='font-[600] text-[22px] text-[#343C6A] font-inter'>Expense Statistics</h3>
            <div className='lg:mt-[18px] h-[calc(100%-50px)] bg-white rounded-3xl flex items-center justify-center  lg:p-[30px]'>
              <div className=" w-full z-0 flex items-center justify-center">
                <ExpensePieChart />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3 lg:grid-cols-7 mb-5 mt-6 gap-[30px] justify-between items-center'>
        <div className='col-span-7 lg:col-span-3 max-w-full '>
          <h3 className='font-[600] text-[22px] text-[#343C6A] font-inter'>Quick Transfer</h3>
          <div className='p-[18px] w-full lg:p-[35px] bg-white rounded-3xl mt-[18px] h-full'>
            <div className='flex gap-3 items-center h-full'>
              <div className='flex w-full justify-between gap-[28px] items-center'>
                {
                  carousel.map((carousel1, index) => (
                    <div key={index} className='flex flex-col gap-[15px]'>
                      <img loading='lazy' width='70px' height='70px' src={carousel1.avatar} alt="" />
                      <div className='text-center'>
                        <h2 className={`text-[16px] font-inter font-[400] text-[#232323] ${index === 0 ? 'font-bold' : 'font-[400]'}`}>{carousel1.avatarName}</h2>
                        <p className={`text-[15px] font-inter font-[400] text-[#718EBF] ${index === 0 ? 'font-bold' : 'font-[400]'}`}>{carousel1.avatarDes}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
              <div className='ps-5'>
                <Modal />
              </div>
            </div>
            <form className='mt-[30px]' action="">
              <div className='flex justify-between items-center w-full gap-[27px]'>
                <label className='font-[400] text-[16px] text-[#718EBF]' htmlFor="amount">Write Amount</label>
                <div className='relative'>
                  <input className=' w-full border-none px-[30px] py-[15px] bg-[#EDF1F7] placeholder:text-[#718EBF] focus:outline-none h-[50px] focus:ring-gray-50 rounded-[50px]' id="amount" type="text" placeholder='525.50' />
                  <div className='absolute top-0 right-0'>
                    <button className='flex gap-[11px] items-center bg-[#232323] rounded-[50px] h-[50px] text-white px-6 py-4'>Send<img src={sendMssg} alt='icon' /></button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='col-span-7 lg:col-span-4'>
          <h4 className='font-[600] text-[22px] text-[#343C6A] font-inter'>Balance History</h4>
          <div className='rounded-3xl bg-white mt-[18px]'>
            < AreaChart />
          </div>
        </div>
      </div>
    </div>




  )
}

export default Dashboard
