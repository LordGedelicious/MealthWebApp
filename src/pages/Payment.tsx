import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { orange } from "@mui/material/colors";
import { useState } from "react";
import { useRoute } from "wouter";
import Button from "../components/Button";
import { useLocation } from "wouter";

const Payment = () => {
  // DATA YG PERLU DITENTUIN DI AWAL
  const paymentMethodOptions = ["E-Money", "debit/Credit Card", "Bank Transfer"];
  const voucherList = ["GOJEKINAJA", "DITRAKTIRGOJEK"];
  const minusVoucher = 50000;
  const consultationList = {
    ChatConsultation: 120000,
    CallConsultation: 250000,
    VideoConferenceConsultation: 350000,
    NyamanCallConsultation: 1440000,
    NyamanVidConsultation: 1650000,
    BahagiaCallConsultation: 2580000,
    BahagiaVidConsultation: 2860000,
  };
  // DATA YG PERLU DITENTUIN DI AWAL

  const [voucher, setVoucher] = useState("");
  const [isVoucherValid, setIsVoucherValid] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(paymentMethodOptions[0]);
  const [location, setLocation] = useLocation();

  const [match, params] = useRoute("/payment/:consultationType");
  // kalau consultationType tidak ada di consultationList, maka redirect ke 404
  if (!(match && params.consultationType in consultationList)) {
    console.log(match);
    console.log(params.consultationType);
    // apakah params consultation type merupakan key di consultationlist
    console.log(consultationList[params.consultationType]);

    setLocation(`/404`);
  }
  return (
    <div className="pt-[6rem] align-center min-h-[40rem] m-[1rem]">
      <h1 className="text-center text-[2rem] md:text-[5rem] mb-[1rem]">Payment Page</h1>

      <div className="flex justify-around flex flex-col md:flex-row">
        {/* left side */}
        <div className=" min-w-[40%]">
          {/* voucher */}
          <div className=" my-[2rem]">
            <h1>voucher</h1>
            {/* <TextField
              fullWidth
              variant="outlined"
              color="info"
              label="voucher"
              value={voucher}
              borderColor="orange"
              onChange={(e) => {
                setVoucher(e.target.value);
                setIsVoucherValid(voucherList.includes(e.target.value));
              }}
            /> */}
            <input
              className=" outline-0 min-w-full border-red border-[3px] rounded-xl py-2 px-4 my-[1rem]"
              value={voucher}
              onChange={(e) => {
                setVoucher(e.target.value);
                setIsVoucherValid(voucherList.includes(e.target.value));
              }}
            />
          </div>
          {/* voucher */}
          {/* payment method */}
          <div>
            <h1>Payment Method</h1>
            <FormControl>
              <RadioGroup
                aria-labelledby="payment-method-buttons-group-label"
                defaultValue={paymentMethod}
                name="radio-buttons-group"
                onChange={(e) => {
                  setPaymentMethod(e.target.value);
                }}
              >
                {paymentMethodOptions.map((paymentMethod) => {
                  return (
                    <FormControlLabel
                      value={paymentMethod}
                      control={
                        <Radio
                          sx={{
                            color: orange[800],
                            "&.Mui-checked": {
                              color: orange[600],
                            },
                          }}
                        />
                      }
                      label={paymentMethod}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
          </div>
          {/* payment method */}
        </div>
        {/* left side */}
        {/* right side */}
        <div className="  min-w-[40%] bg-red text-white min-h-full rounded-xl p-[1rem]">
          <h1 className="text-center mb-[2rem] ">Summary</h1>
          <div className="flex flex-col min-h-[70%] justify-between mx-4">
            <div className="text-xl">
              {/* selain total payment */}
              {voucher === "" ? (
                <div className="">Tidak Menggunakan Voucher</div>
              ) : isVoucherValid ? (
                <div className="flex justify-between my-[1rem]">
                  <div>{voucher} </div>
                  <div>-Rp{minusVoucher}</div>
                </div>
              ) : (
                <div className="flex justify-between my-[1rem]">
                  <div>Voucher</div>
                  <div>{voucher}</div>
                </div>
              )}
              <div className="flex justify-between my-[1rem]">
                <div>{params.consultationType}</div>
                <div>Rp{consultationList[params.consultationType]}</div>
              </div>
              <div className="flex justify-between my-[1rem]">
                <div>Payment Method</div>
                <div>{paymentMethod}</div>
              </div>
              {/* selain total payment */}
            </div>
            <div className="">
              {/* total payment */}
              <div className="flex justify-between my-[1rem] text-2xl font-bold">
                <div>Total Payment</div>
                <div>Rp{isVoucherValid ? consultationList[params.consultationType] - minusVoucher : consultationList[params.consultationType]}</div>
              </div>
              {/* total payment */}
            </div>
          </div>
        </div>
        {/* right side */}
      </div>
      {/* button */}
      <div className="justify-center text-center mt-[2rem] md:mt-[5rem] mb-[2rem]">
        <a href="/">
          <Button className="bg-orange w-full hover:bg-spurple my-1 max-w-[20%] ">Pay {"&"} Confirm</Button>
        </a>
      </div>
      {/* button */}
    </div>
  );
};

export default Payment;
