import React, { useState } from 'react'
import InputField from '../InputField'
import TextArea from '../TextArea'
import SelectButton from './SelectButton'

const FieldForm = () => {
  return (
    <div className="w-[40rem] flex flex-col items-start justify-start gap-[0.75rem_0rem] max-w-full text-left text-[1rem] text-gray font-inter">
      <div className="w-[20rem] flex flex-row items-start justify-start pt-[0rem] px-[1rem] pb-[0.25rem] box-border text-[2rem]">
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start">
              <h1 className="m-0 relative text-inherit tracking-[-0.8px] leading-[2.5rem] font-bold font-inherit mq450:text-[1.188rem] mq450:leading-[1.5rem] mq750:text-[1.625rem] mq750:leading-[2rem]">
                Add a new space
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <InputField
          name="Name"
          placeholder="Enter the name of the space"
        />
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <TextArea name="Description" placeholder="Enter a Description" rows={10}/>
        </div>
        <InputField name="City" placeholder="Enter the city" />
        <InputField name="Tower" placeholder="Enter the tower" />
        <InputField name="Floor" placeholder="Enter the floor" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1rem] box-border max-w-full">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[0rem_1rem] max-w-full">
          <InputField name='Latitude' placeholder='Enter the latitude'/>
          <InputField name='Longitude' placeholder='Enter  the longitude'/>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start py-[0.75rem] px-[1rem] box-border max-w-full">
        <div className="flex-1 flex flex-row items-end justify-start max-w-full">
        <SelectButton text='Bangalore' isSelected={true}/>
        <SelectButton text='Hyderabad' isSelected={false}/>
        <SelectButton text='Chennai' isSelected={false}/>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[1rem] pb-[0.25rem] box-border max-w-full">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[0rem_1rem] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start min-w-[9.438rem]">
            <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.5rem]">
              <div className="self-stretch relative leading-[1.5rem] font-medium">
                Capacity
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start text-steelblue">
              <div className="flex-1 rounded-xl bg-aliceblue overflow-hidden flex flex-row items-start justify-between p-[1rem] gap-[0rem] [row-gap:20px]">
                <div className="overflow-hidden flex flex-col items-start justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[1.5rem]">Capacity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start min-w-[9.438rem]">
            <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.5rem]">
              <div className="self-stretch relative leading-[1.5rem] font-medium">
                Minimum reservation length
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start text-steelblue">
              <div className="flex-1 rounded-xl bg-aliceblue overflow-hidden flex flex-row items-start justify-between p-[1rem] gap-[0rem] [row-gap:20px]">
                <div className="overflow-hidden flex flex-col items-start justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[1.5rem]">Hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1rem] box-border max-w-full text-[0.875rem] text-steelblue">
        <div className="flex-1 relative leading-[1.313rem] inline-block max-w-full">
          If you set a minimum reservation length, guests will be required to
          book for at least that amount of time. If you leave it blank, there
          will be no minimum.
        </div>
      </div>
    </div>
  )
}

export default FieldForm