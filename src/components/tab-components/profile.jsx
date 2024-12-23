import React, { useEffect, useState } from 'react';
import Inputs from './input.jsx';
import userProfile from '../../assets/images/user_profile.svg';

function Profile() {
    const [modalVisible, setModalVisible] = useState(false);
    const [formData, setFormData] = useState({});

    const inputFields = [
        { label_for: 'name', labelText: 'Your Name', inputType: 'text', placeholderText: 'Charlene Reed' },
        { label_for: 'lastName', labelText: 'Last Name', inputType: 'text', placeholderText: 'Reed' },
        { label_for: 'email', labelText: 'Email', inputType: 'email', placeholderText: 'charlenereed@gmail.com' },
        { label_for: 'password', labelText: 'Password', inputType: 'password', placeholderText: '*******', isPassword: true, },
        {
            label_for: 'dateOfBirth',
            labelText: 'Date of Birth',
            inputType: 'select',
            options: [
                { value: '', text: '25 January 1990' },
                { value: '1990', text: '1990' },
                { value: '1991', text: '1991' },
                { value: '1992', text: '1992' },
                { value: '1993', text: '1993' },
                { value: '1994', text: '1994' },
            ],
        },
        { label_for: 'address', labelText: 'Present Address', inputType: 'text', placeholderText: 'San Jose, California, USA' },
        { label_for: 'permanentAddress', labelText: 'Permanent Address', inputType: 'text', placeholderText: 'San Jose, California, USA' },
        { label_for: 'city', labelText: 'City', inputType: 'text', placeholderText: 'San Jose' },
        { label_for: 'code', labelText: 'Country Code', inputType: 'text', placeholderText: '45962' },
        { label_for: 'country', labelText: 'Country', inputType: 'text', placeholderText: 'USA' },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setModalVisible(true);
            } else {
                console.error('Error saving user data:', response.statusText);
            }
        } catch (error) {
            console.error('Error sending user data:', error);
        }
    };

    return (
        <>
            <div className="lg:ps-[30px] flex justify-center md:justify-start flex-wrap md:flex-nowrap gap-3 lg:gap-14 w-full bg-white">
                <div>
                    <img loading="lazy" src={userProfile} alt="User Profile" />
                </div>
                <div className="w-full">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 justify-between w-full gap-[29px]">
                            {inputFields.map((field) => (
                                <Inputs
                                    key={field.label_for}
                                    label_for={field.label_for}
                                    labelText={field.labelText}
                                    inputType={field.inputType}
                                    placeholderText={field.placeholderText}
                                    value={formData[field.label_for] || ''}
                                    onChange={handleChange}
                                    options={field.options || []}
                                    name={field.label_for}
                                />

                            ))}
                        </div>
                        <div className="flex items-center justify-end mt-10">
                            <button type="submit" className="px-[74px] py-[14px] bg-[#232323] text-white rounded-[15px]">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {modalVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="font-[600] text-[25px] font-inter text-center text-[#232323]">Soar Tasks</h2>
                        <h3 className="text-lg font-semibold">Your settings have been saved</h3>
                        <div className="flex justify-end">
                            <button
                                onClick={() => setModalVisible(false)}
                                className="mt-4 px-5 py-3 rounded-2xl bg-[#232323] text-white"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Profile;
