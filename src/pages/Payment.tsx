import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";


const Payment = () => {
  const [voucher, setVoucher] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("pake doa");
  return (
    <div className="pt-[8rem] lg:pl-[10rem] lg:px-[3.625rem] px-[2rem] pb-[3rem] align-center min-h-[40rem] bg-white">
      <a href="/Konsultasi"><FontAwesomeIcon icon={faArrowLeft} className="w-[28px] text-[28px] hover:opacity-70 mb-[1rem]"/></a>
      <h1 className="text-left text-[3rem] mb-[1.125rem] font-normal">
          Payment
      </h1>
      <div className="justify-around flex flex-col lg:flex-row lg:justify-between pb-[2rem]">
        
        {/* left side */}
        <div className="lg:basis-2/3 md:basis-1/2 lg:pr-[5rem] lg:pt-[3rem]">
          {/* voucher */}
          <div className="">
            <h1 className="text-[2rem] font-normal">Voucher</h1>
            <input
              className="border-2 w-full border-orange bg-white rounded-[1rem] p-[1rem] mb-[2rem] font-sans"
              type="Masukkan Voucher"
              value={voucher}
              onChange={(e) => {
                setVoucher(e.target.value);
              }}
            />
          </div>
          {/* voucher */}
          {/* payment method */}
          <div className="mb-[3rem]">
            <h1 className="text-[2rem] font-normal">Payment Method</h1>
            <FormControl>
              <RadioGroup
                aria-labelledby="payment-method-buttons-group-label"
                defaultValue={paymentMethod}
                name="radio-buttons-group"
                onChange={(e) => {
                  setPaymentMethod(e.target.value);
                }}
              >
                <FormControlLabel value="payment-method-1" control={<Radio sx={{
                    color: "#F6B05E",
                    '&.Mui-checked': {
                      color: "#F6B05E",
                    },
                  }} />} label="Payment Method 1"/>
                <FormControlLabel value="payment-method-2" control={<Radio sx={{
                    color: "#F6B05E",
                    '&.Mui-checked': {
                      color: "#F6B05E",
                    },
                  }} />} label="Payment Method 2" />
                <FormControlLabel value="payment-method-3" control={<Radio sx={{
                    color: "#F6B05E",
                    '&.Mui-checked': {
                      color: "#F6B05E",
                    },
                  }} />} label="Payment Method 3" />
              </RadioGroup>
            </FormControl>
          </div>
          {/* payment method */}
        </div>
        {/* left side */}
        {/* right side */}
        <div className="bg-spurple text-[#FFF] min-h-[25rem] rounded-[2rem] p-[2rem] lg:basis-1/3 md:basis-1/2 relative">
          <h1 className="text-[3rem] lg:pb-[3rem] pb-[1rem] font-normal">Summary</h1>
          <div className="flex flex-row justify-between">
            <div>
              <div>
                <p className="mb-[1.5rem]">Chat Consultation</p>
                {voucher !== "" ? <p>Voucher</p> : <p></p>}
              </div>
              <div className="absolute bottom-[2rem]">
                <p className="text-[1.5rem] font-black lg:pb-[0rem] pb-[1rem]">Total Payment</p>
                <p className="text-[1.5rem] font-black lg:hidden">Rp120,000</p>
              </div>
            </div>
            <div>
              <div>
                <p className="mb-[1.5rem]">Rp120,000</p>
                {voucher !== "" ? <p>Rp{voucher}</p> : <p></p>}
              </div>
              <div className="absolute bottom-[2rem] right-[1rem] lg:block hidden">
                <p className="text-[1.5rem] font-black">Rp120,000</p>
              </div>
            </div>
            
          </div>
        </div>
        {/* right side */}
      </div>
      {/* button */}
      <div className="text-center">
        <a href="/">
          <Button className="bg-green my-1 w-[12rem]">Pay & Confirm</Button>
        </a>
      </div>
      {/* button */}
    </div>
  );
};

export default Payment;
