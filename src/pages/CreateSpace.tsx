import Header from "@/components/Header";
import React from "react";
import "../app/globals.css";
import FieldForm from "@/components/createSpace/FieldForm";
import Ameneties from "@/components/createSpace/Amenities";

const CreateSpace = () => {
  return (
    <div className="w-full h-[100rem] relative bg-white flex flex-col items-start justify-start tracking-[normal] mq1050:h-auto mq1050:min-h-[1219.5]">
        <Header />
      <main className="w-full !m-[0] absolute h-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-whitesmoke flex flex-col items-center justify-start pt-[7rem] px-[0rem] pb-[1.25rem] box-border gap-[2.25rem_0rem] max-w-full mq750:gap-[2.25rem_0rem]">
        <section className="w-[62.5rem] flex flex-col items-center justify-center py-[0rem] px-[1.25rem] box-border max-w-full shrink-0 text-left text-[2rem] text-gray font-inter">
          <div className="flex flex-col items-center justify-center pt-[0rem] px-[1rem] pb-[1rem] box-border">
            <FieldForm />
            <Ameneties />
          </div>
        </section>
      </main>
    </div>

    
  );
};

export default CreateSpace;
