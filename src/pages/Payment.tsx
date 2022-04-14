import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";
import Button from "../components/Button";
const Payment = () => {
  const [voucher, setVoucher] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("pake doa");
  return (
    <div className="pt-[10rem] align-center min-h-[40rem] border-2 border-black">
      <h1 className="border-2 border-black text-center ">payment</h1>

      <div className="flex border-2 border-black justify-around flex flex-col md:flex-row">
        {/* left side */}
        <div className="border-[1px] border-black min-w-[40%]">
          {/* voucher */}
          <div className="border-2">
            <h1>voucher</h1>
            <input
              className="border-2 min-h-full"
              type="text"
              value={voucher}
              onChange={(e) => {
                setVoucher(e.target.value);
              }}
            />
          </div>
          {/* voucher */}
          {/* payment method */}
          <div>
            <h1>payment method</h1>
            <FormControl>
              <RadioGroup
                aria-labelledby="payment-method-buttons-group-label"
                defaultValue={paymentMethod}
                name="radio-buttons-group"
                onChange={(e) => {
                  setPaymentMethod(e.target.value);
                }}
              >
                <FormControlLabel value="pake uang" control={<Radio />} label="pake uang" />
                <FormControlLabel value="pake daun" control={<Radio />} label="pake daun" />
                <FormControlLabel value="pake doa" control={<Radio />} label="pake doa" />
              </RadioGroup>
            </FormControl>
          </div>
          {/* payment method */}
        </div>
        {/* left side */}
        {/* right side */}
        <div className="border-[1px] border-black min-w-[40%] bg-red text-white min-h-full rounded-xl p-[1rem]">
          <h1 className="text-center">summary</h1>
          {voucher !== "" ? <div>ada voucher : {voucher}</div> : <div>tidak ada voucher</div>}
          <div>payment method : {paymentMethod}</div>
        </div>
        {/* right side */}
      </div>
      {/* button */}
      <div className="justify-center text-center">
        <a href="/gformmaybe">
          <Button className="bg-orange w-full hover:bg-spurple my-1 max-w-[20%] ">aa</Button>
        </a>
      </div>
      {/* button */}
    </div>
  );
};

export default Payment;
