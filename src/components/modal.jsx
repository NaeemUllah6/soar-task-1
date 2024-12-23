import React, { useState } from 'react';
import avatar1 from '../assets//images/avatar1.png'
import avatar2 from '../assets//images/avatar2.svg'
import avatar3 from '../assets//images/avatar3.svg'
import showMore from '../assets/images/showMore.svg'
const ModalWithState = () => {
  const carousel = [
    {
      avatar: avatar1,
      avatarName: 'Jamshaid Haneef',
      avatarDes: 'CEO',
    },
    {
      avatar: avatar2,
      avatarName: 'Randy Press', style: { fontWeight: 'bold' },
      avatarDes: 'Director',
    },
    {
      avatar: avatar3,
      avatarName: 'Workman',
      avatarDes: 'Designer',
    },
    {
      avatar: avatar1,
      avatarName: 'Livia Bator',
      avatarDes: 'designer',
    },

    {
      avatar: avatar2,
      avatarName: 'Workman',
      avatarDes: 'designer',
    },
  ]
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      {/* Button to toggle modal */}
      <button
        onClick={handleOpenModal}
        className="flex items-center justify-center h-[50px] w-[50px] bg-white shadow-button-shadow rounded-full"
        type="button"
      >
        <img className='h-[13px] w-[7px]' src={showMore} alt='modal-open' />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          id="default-modal"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen overflow-y-auto overflow-x-hidden"
          role="dialog"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 md:p-5  rounded-2xl dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">

                </h3>
                <button
                  onClick={handleCloseModal}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              {/* Modal Content */}
              <div className="px-5 pb-5">
                <div className="flex flex-wrap justify-between gap-[28px] items-center">
                  {carousel.map((carousel1, index) => (
                    <div key={index} className="flex flex-col gap-[15px]">
                      <img loading="lazy" width="70px" height="70px" src={carousel1.avatar} alt="" />
                      <div className="text-center">
                        <h2
                          className={`text-[16px] font-inter text-[#232323] ${index === 0 ? "font-bold" : "font-[400]"
                            }`}
                        >
                          {carousel1.avatarName}
                        </h2>
                        <p className="text-[15px] font-inter font-[400] text-[#718EBF]">
                          {carousel1.avatarDes}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


              {/* Modal Footer */}

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalWithState;
