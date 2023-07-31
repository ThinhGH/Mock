import React from "react";

const Appointment = () => {
  return (
    <div className="overflow-hidden bg-[#fcfefe] flex flex-col justify-between gap-[578px] w-full">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col">
          <div className="bg-[#fcfefe] flex flex-row justify-between h-20 shrink-0 items-center px-48">
            <div className="text-4xl font-['Yeseva_One'] uppercase text-[#1f2b6c]">
              Med<div className="text-[#159eec] contents">dical</div>
            </div>
            <div className="flex flex-row justify-between w-3/5 items-center">
              <div className="flex flex-row gap-1 items-center">
                <img
                  src="https://file.rendit.io/n/dW4sX7J95BhGio2WQPhP.svg"
                  className="min-h-0 min-w-0 w-10 shrink-0"
                />
                <div className="flex flex-col mb-px gap-px w-[140px]">
                  <div className="font-['Work_Sans'] font-medium uppercase text-[#1f2b6c] mr-10">
                    Emergency
                  </div>
                  <div className="whitespace-nowrap font-['Work_Sans'] font-medium text-[#159eec]">
                    (237) 681-812-255
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <img
                  src="https://file.rendit.io/n/FvuKt44pf2HM66sNeeRg.svg"
                  className="min-h-0 min-w-0 w-8 shrink-0"
                />
                <div className="flex flex-col gap-px w-48">
                  <div className="whitespace-nowrap font-['Work_Sans'] font-medium uppercase text-[#1f2b6c] w-1/2">
                    Work Hour
                  </div>
                  <div className="whitespace-nowrap font-['Work_Sans'] font-medium text-[#159eec]">
                    09:00 - 20:00 Everyday
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <img
                  src="https://file.rendit.io/n/cAlf3CnRU91wHJKysfVg.svg"
                  className="min-h-0 min-w-0 w-8 shrink-0"
                />
                <div className="flex flex-col gap-px w-32">
                  <div className="font-['Work_Sans'] font-medium uppercase text-[#1f2b6c] w-3/5">
                    Location
                  </div>
                  <div className="whitespace-nowrap font-['Work_Sans'] font-medium text-[#159eec]">
                    0123 Some Place
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#1f2b6c] flex flex-row justify-between h-20 shrink-0 items-center px-64">
            <div className="flex flex-row justify-between gap-5 items-center">
              <div className="text-lg font-['Work_Sans'] text-[#fcfefe] w-12 shrink-0">
                Home
              </div>
              <div className="whitespace-nowrap text-lg font-['Work_Sans'] text-[#fcfefe] w-20 shrink-0">
                About us
              </div>
              <div className="text-lg font-['Work_Sans'] text-[#fcfefe] w-12 shrink-0">
                Event
              </div>
              <div className="text-lg font-['Work_Sans'] text-[#fcfefe] w-12 shrink-0">
                News
              </div>
              <div className="text-lg font-['Work_Sans'] text-[#fcfefe] w-16 shrink-0">
                Contact
              </div>
            </div>
            <div className="flex flex-row gap-12 items-center">
              <img
                src="https://file.rendit.io/n/9GhvwskYphFGpBcYn1Hq.svg"
                className="min-h-0 min-w-0 w-5 shrink-0"
              />
              <button className="bg-[#bfd2f8] flex flex-col justify-center w-32 shrink-0 h-12 items-center rounded-[50px]">
                <button className="whitespace-nowrap font-['Work_Sans'] font-medium text-[#1f2b6c] w-2/5">
                  Sign In
                </button>
              </button>
            </div>
          </div>
          <div className="bg-[url(https://file.rendit.io/n/MS97NrYq7WfylQozuyeo.png)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col">
            <div className="bg-white/50 flex flex-row items-end">
              <div className="flex flex-col gap-24 w-[1143px] h-64">
                <div className="flex flex-row gap-16 w-3/5 items-end">
                  <img
                    src="https://file.rendit.io/n/D0oJfIDSXcsluGwK4cYh.svg"
                    className="min-h-0 min-w-0 mb-8"
                  />
                  <div className="relative flex flex-col pb-12 w-[526px] items-start">
                    <div className="whitespace-nowrap text-5xl font-['Yeseva_One'] text-[#1f2b6c] absolute top-5 left-0 h-12 w-[526px]">
                      Book an Appointment
                    </div>
                    <div className="whitespace-nowrap text-lg font-['Work_Sans'] leading-[25.2px] text-[#1f2b6c] relative w-48">
                      Home / Appointment
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col items-start">
                  <div className="w-[837px] h-2 bg-[#1f2b6c] absolute top-0 left-[305.697509765625px]" />
                  <div className="bg-[#bfd2f8] relative w-[306px] h-2 shrink-0" />
                </div>
              </div>
              <div className="relative flex flex-col justify-end pt-32 w-56 shrink-0">
                <img
                  src="https://file.rendit.io/n/cuus4NDwfbKbSR93pQHy.svg"
                  className="w-32 h-32 min-h-0 min-w-0 absolute top-0 left-24"
                />
                <div className="bg-[#159eec] relative h-2 shrink-0" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5 items-center mx-48">
          <div className="flex flex-col gap-16 w-1/2">
            <div className="flex flex-col gap-4">
              <div className="whitespace-nowrap text-3xl font-['Yeseva_One'] text-[#1f2b6c] mr-[140px]">
                Book an Appointment
              </div>
              <div className="font-['Work_Sans'] leading-[22.4px] text-[#212124]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                placerat scelerisque tortor ornare ornare. Convallis felis vitae
                tortor augue. Velit nascetur proin massa in. Consequat faucibus
                porttitor enim et.
              </div>
            </div>
            <div className="bg-[#bfd2f8] flex flex-col justify-between gap-px rounded">
              <div className="flex flex-row gap-px items-center">
                <div className="rounded-tl bg-[#1f2b6c] flex flex-col justify-center pl-5 w-1/2 h-12 items-start">
                  <div className="font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] w-12">
                    Name
                  </div>
                </div>
                <div className="rounded-tr bg-[#1f2b6c] flex flex-row justify-between w-1/2 h-12 items-center px-5">
                  <div className="font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] w-16 shrink-0">
                    Gender
                  </div>
                  <img
                    src="https://file.rendit.io/n/6frQwSIsgTJ6ngbQQiOf.svg"
                    className="min-h-0 min-w-0 w-4 shrink-0"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-px items-center">
                <div className="bg-[#1f2b6c] flex flex-col justify-center pl-5 w-1/2 h-12 items-start">
                  <div className="font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] w-10">
                    Email
                  </div>
                </div>
                <div className="bg-[#1f2b6c] flex flex-col justify-center pl-5 w-1/2 h-12 items-start">
                  <div className="font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] w-12">
                    Phone
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-px items-center">
                <div className="bg-[#1f2b6c] flex flex-row justify-between w-1/2 h-12 items-center px-5">
                  <div className="font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] w-10 shrink-0">
                    Date
                  </div>
                  <img
                    src="https://file.rendit.io/n/6frQwSIsgTJ6ngbQQiOf.svg"
                    className="min-h-0 min-w-0 w-4 shrink-0"
                  />
                </div>
                <div className="bg-[#1f2b6c] flex flex-row justify-between w-1/2 h-12 items-center px-5">
                  <div className="font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] w-10 shrink-0">
                    Time
                  </div>
                  <img
                    src="https://file.rendit.io/n/6frQwSIsgTJ6ngbQQiOf.svg"
                    className="min-h-0 min-w-0 w-4 shrink-0"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-px items-center">
                <div className="bg-[#1f2b6c] flex flex-row justify-between w-1/2 h-12 items-center px-5">
                  <div className="font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] w-12 shrink-0">
                    Doctor
                  </div>
                  <img
                    src="https://file.rendit.io/n/6frQwSIsgTJ6ngbQQiOf.svg"
                    className="min-h-0 min-w-0 w-4 shrink-0"
                  />
                </div>
                <div className="bg-[#1f2b6c] flex flex-row justify-center gap-24 w-1/2 h-12 items-center">
                  <div className="font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] w-24 shrink-0">
                    Department
                  </div>
                  <img
                    src="https://file.rendit.io/n/6frQwSIsgTJ6ngbQQiOf.svg"
                    className="min-h-0 min-w-0 w-4 shrink-0"
                  />
                </div>
              </div>
              <div className="bg-[#1f2b6c] flex flex-col h-48 shrink-0 items-start pl-5 py-4">
                <div className="font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] w-16">
                  Message
                </div>
              </div>
              <div className="bg-[#bfd2f8] flex flex-col justify-center h-12 shrink-0 items-center rounded-br rounded-bl">
                <div className="text-center font-['Work_Sans'] font-medium leading-[22.4px] uppercase text-[#1f2b6c] w-16">
                  Submit
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#1f2b6c] flex flex-col gap-6 w-1/2 h-[650px] items-center p-12 rounded">
            <div className="whitespace-nowrap text-5xl font-['Yeseva_One'] text-[#bfd2f8] mb-6 mx-4">
              Shedule hours
            </div>
            <div className="flex flex-row gap-12 items-center">
              <div className="text-lg font-['Work_Sans'] leading-[25.2px] text-[#fcfefe] mr-6 w-16 shrink-0 h-full">
                Monday
              </div>
              <img
                src="https://file.rendit.io/n/NZ9XfY6SXexaN9ubkK3i.svg"
                className="min-h-0 min-w-0 w-5 shrink-0"
              />
              <div className="font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] w-2/5 h-[87.86%]">
                09:00 AM - 07:00 PM
              </div>
            </div>
            <div className="flex flex-row gap-12 items-center">
              <div className="text-lg font-['Work_Sans'] leading-[25.2px] text-[#fcfefe] mr-6 w-16 shrink-0 h-full">
                Tuesday
              </div>
              <img
                src="https://file.rendit.io/n/pTCb5RcIgMDptmslM1n1.svg"
                className="min-h-0 min-w-0 w-5 shrink-0"
              />
              <div className="font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] w-2/5 h-[87.86%]">
                09:00 AM - 07:00 PM
              </div>
            </div>
            <div className="flex flex-row gap-12 items-center">
              <div className="text-lg font-['Work_Sans'] leading-[25.2px] text-[#fcfefe] w-24 shrink-0 h-full">
                Wednesday
              </div>
              <img
                src="https://file.rendit.io/n/ZEpKAlsG7eH9vBBUxv48.svg"
                className="min-h-0 min-w-0 mr-2 w-5 shrink-0"
              />
              <div className="font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] w-2/5 h-[87.86%]">
                09:00 AM - 07:00 PM
              </div>
            </div>
            <div className="flex flex-row gap-12 items-center">
              <div className="text-lg font-['Work_Sans'] leading-[25.2px] text-[#fcfefe] mr-3 w-20 shrink-0 h-full">
                Thursday
              </div>
              <img
                src="https://file.rendit.io/n/kMCciifrAEAb4p5VB2Jl.svg"
                className="min-h-0 min-w-0 w-5 shrink-0"
              />
              <div className="font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] w-2/5 h-[87.86%]">
                09:00 AM - 07:00 PM
              </div>
            </div>
            <div className="flex flex-row gap-12 items-center">
              <div className="text-lg font-['Work_Sans'] leading-[25.2px] text-[#fcfefe] mr-10 w-12 shrink-0 h-full">
                Friday
              </div>
              <img
                src="https://file.rendit.io/n/zX6LXMzXPnN2lLESVNBg.svg"
                className="min-h-0 min-w-0 w-5 shrink-0"
              />
              <div className="font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] w-2/5 h-[87.86%]">
                09:00 AM - 07:00 PM
              </div>
            </div>
            <div className="flex flex-row gap-12 items-center">
              <div className="text-lg font-['Work_Sans'] leading-[25.2px] text-[#fcfefe] mr-4 w-20 shrink-0 h-full">
                Saturday
              </div>
              <img
                src="https://file.rendit.io/n/Dt3v4C9ZXAkBQr2MZZCH.svg"
                className="min-h-0 min-w-0 w-5 shrink-0"
              />
              <div className="font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] w-2/5 h-[87.86%]">
                09:00 AM - 07:00 PM
              </div>
            </div>
            <div className="self-start flex flex-row mb-1 gap-12 w-3/4 items-center">
              <div className="text-lg font-['Work_Sans'] leading-[25.2px] text-[#fcfefe] mr-8 w-16 shrink-0 h-full">
                Sunday
              </div>
              <img
                src="https://file.rendit.io/n/6FumcizV9GOmoXnHLvPc.svg"
                className="min-h-0 min-w-0 w-5 shrink-0"
              />
              <div className="font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] w-12 shrink-0 h-[87.86%]">
                Closed
              </div>
            </div>
            <img
              src="https://file.rendit.io/n/u2tQhLIuSfNElOXt80fQ.svg"
              className="min-h-0 min-w-0 mb-1"
            />
            <div className="flex flex-row gap-2 w-3/4 items-center">
              <img
                src="https://file.rendit.io/n/TCt1FCtPWrbws4GOqzve.svg"
                className="min-h-0 min-w-0 w-12 shrink-0"
              />
              <div className="flex flex-col w-56">
                <div className="text-2xl font-['Work_Sans'] font-medium text-[#fcfefe] w-3/5">
                  Emergency
                </div>
                <div className="whitespace-nowrap text-2xl font-['Work_Sans'] font-medium text-[#bfd2f8]">
                  (237) 681-812-255
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-16 items-center">
        <div className="flex flex-col gap-2">
          <div className="text-center whitespace-nowrap text-lg font-['Work_Sans'] font-bold tracking-[2.88] uppercase text-[#159eec]">
            Get in touch
          </div>
          <div className="text-center text-3xl font-['Yeseva_One'] text-[#1f2b6c] mx-4">
            Contact
          </div>
        </div>
        <div className="flex flex-row justify-between items-center mx-48">
          <div className="bg-[#bfd2f8] flex flex-col gap-1 h-56 items-start pl-6 py-12 rounded">
            <img
              src="https://file.rendit.io/n/QpSv0WBtrCeRlsBuxZtE.svg"
              className="min-h-0 min-w-0 mb-2 w-10"
            />
            <div className="text-lg font-['Work_Sans'] font-bold uppercase text-[#1f2b6c] w-1/2 mb-1 ml-1">
              Emergency
            </div>
            <div className="whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#1f2b6c] ml-1 w-2/3">
              (237) 681-812-255
            </div>
            <div className="whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#1f2b6c] w-2/3 ml-1 mr-16">
              (237) 666-331-894
            </div>
          </div>
          <div className="bg-[#1f2b6c] flex flex-col gap-1 h-56 px-8 py-12 rounded">
            <img
              src="https://file.rendit.io/n/xKndjtlH9s3cvZoGp4l4.svg"
              className="min-h-0 min-w-0 mb-2 w-8"
            />
            <div className="text-lg font-['Work_Sans'] font-bold uppercase text-[#bfd2f8] mb-1 w-24">
              Location
            </div>
            <div className="whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#bfd2f8] w-3/4">
              0123 Some place
            </div>
            <div className="whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#bfd2f8] mr-5">
              9876 Some country
            </div>
          </div>
          <div className="bg-[#bfd2f8] flex flex-col justify-center gap-4 h-56 px-5 rounded">
            <img
              src="https://file.rendit.io/n/kIAfGin3EkGgsxJ0Bw8Q.svg"
              className="min-h-0 min-w-0 ml-2 w-10"
            />
            <div className="flex flex-col ml-2 gap-1 items-start">
              <div className="text-lg font-['Work_Sans'] font-bold uppercase text-[#1f2b6c] mb-1 w-16">
                Email
              </div>
              <div className="font-['Work_Sans'] leading-[22.4px] text-[#1f2b6c]">
                fildineeesoe@gmil.com
              </div>
              <div className="text-sm font-['Work_Sans'] text-[#1f2b6c] mr-2">
                myebstudios@gmail.com
              </div>
            </div>
          </div>
          <div className="bg-[#bfd2f8] flex flex-col justify-center gap-4 h-56 px-4 rounded">
            <img
              src="https://file.rendit.io/n/2DOainvCfnBZ4pFO0FyG.svg"
              className="min-h-0 min-w-0 ml-3 w-8"
            />
            <div className="flex flex-col ml-3 gap-1">
              <div className="whitespace-nowrap text-lg font-['Work_Sans'] font-bold uppercase text-[#1f2b6c] mb-1 mr-6">
                Working Hours
              </div>
              <div className="whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#1f2b6c] mr-4">
                Mon-Sat 09:00-20:00
              </div>
              <div className="whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#1f2b6c]">
                Sunday Emergency only
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#1f2b6c] flex flex-col gap-1 h-[427px] shrink-0 pt-16 pb-20 px-48">
          <div className="flex flex-row justify-between mb-3 w-5/6 items-start">
            <div className="flex flex-row gap-20 w-[548px] items-start">
              <div className="text-4xl font-['Yeseva_One'] uppercase text-[#bfd2f8] w-48 shrink-0">
                Meddical
              </div>
              <div className="flex flex-row gap-8 w-1/2 items-center">
                <div className="whitespace-nowrap text-lg font-['Work_Sans'] font-semibold text-[#fcfefe] mb-px w-1/2">
                  Important Links
                </div>
                <div className="whitespace-nowrap text-lg font-['Work_Sans'] font-semibold text-[#fcfefe] w-24 shrink-0">
                  Contact Us
                </div>
              </div>
            </div>
            <div className="whitespace-nowrap text-lg font-['Work_Sans'] font-semibold text-[#fcfefe] w-24 shrink-0">
              News letter
            </div>
          </div>
          <div className="flex flex-row mr-px gap-20 items-center">
            <div className="flex flex-row gap-8 items-center">
              <div className="text-lg font-['Work_Sans'] leading-[25.2px] text-[#fcfefe] w-2/3">
                Leading the Way in Medical
                <br />
                Execellence, Trusted Care.
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-['Work_Sans'] leading-[22.4px] text-[#fcfefe]">
                  Appointment
                </div>
                <div className="font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] w-3/5">
                  Doctors
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-8 w-1/2 items-center">
              <div className="flex flex-col mt-px gap-2 w-2/5">
                <div className="whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] mr-12">
                  Call: (237) 681-812-255
                </div>
                <div className="whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#fcfefe]">
                  Email: fildineesoe@gmail.com
                </div>
              </div>
              <div className="bg-[#bfd2f8] flex flex-row gap-6 w-1/2 h-12 items-center px-2 rounded">
                <div className="whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#1f2b6c] w-48">
                  Enter your email address
                </div>
                <img
                  src="https://file.rendit.io/n/ZvYTeUS0LDpmNccdatSp.svg"
                  className="min-h-0 min-w-0 w-6 shrink-0"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between ml-[275px] gap-[109px] items-center">
            <div className="font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] mb-px w-16 shrink-0">
              Services
            </div>
            <div className="whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] w-1/2">
              Address: 0123 Some place
            </div>
          </div>
          <div className="flex flex-row justify-between gap-24 items-center mb-10 ml-[275px]">
            <div className="whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] mb-px w-16 shrink-0">
              About Us
            </div>
            <div className="whitespace-nowrap font-['Work_Sans'] leading-[22.4px] text-[#fcfefe] w-[110px] shrink-0">
              Some country
            </div>
          </div>
          <img
            src="https://file.rendit.io/n/Eh48uz2C2IJhgCB34ZHq.svg"
            className="min-h-0 min-w-0 self-center mb-10"
          />
          <div className="flex flex-row justify-between items-center">
            <div className="whitespace-nowrap font-['Work_Sans'] text-[#fcfefe] w-1/2">
              © 2021 Hospital’s name All Rights Reserved by PNTEC-LTD
            </div>
            <div className="flex flex-row justify-between gap-5 items-center">
              <img
                src="https://file.rendit.io/n/Q9QLIylmuyI0fHsmStwn.svg"
                className="min-h-0 min-w-0 w-6 shrink-0"
              />
              <img
                src="https://file.rendit.io/n/tma1x1Z4FZPkwkgz77Ga.svg"
                className="min-h-0 min-w-0 w-6 shrink-0"
              />
              <img
                src="https://file.rendit.io/n/Ovwa89NUwtZLW9Sn2RIA.svg"
                className="min-h-0 min-w-0 w-6 shrink-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
